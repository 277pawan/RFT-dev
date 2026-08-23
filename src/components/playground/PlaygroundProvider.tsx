import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultPlaygroundPresetId,
  getPlaygroundPreset,
  type PlaygroundPreset,
} from "@/data/playground";
import {
  ALL_CODE_TABS,
  codeFilesFromPreset,
  compileLiveConfig,
  type LivePlaygroundConfig,
} from "@/lib/parsePlaygroundCode";
import type { CodeTabKey } from "@/data/playground/types";
import type { FormField } from "react-form-toaster";
import type { z } from "zod";

export type PreviewMode = "inline" | "modal";

type PlaygroundContextValue = {
  presetId: string;
  preset: PlaygroundPreset;
  setPresetId: (id: string) => void;
  resetKey: number;
  reset: () => void;
  previewMode: PreviewMode;
  setPreviewMode: (mode: PreviewMode) => void;
  showResponse: boolean;
  setShowResponse: (show: boolean) => void;
  submittedResponse: Record<string, unknown> | null;
  setSubmittedResponse: (response: Record<string, unknown>) => void;
  codeFiles: Record<CodeTabKey, string>;
  updateCodeFile: (tab: CodeTabKey, value: string) => void;
  live: LivePlaygroundConfig;
  liveFields: FormField[];
  liveSchema: z.ZodTypeAny;
};

const PlaygroundContext = createContext<PlaygroundContextValue | null>(null);

type PlaygroundProviderProps = {
  children: ReactNode;
  presetId?: string;
  onPresetChange?: (id: string) => void;
};

function initCodeFiles(preset: PlaygroundPreset): Record<CodeTabKey, string> {
  return codeFilesFromPreset(preset.codeFiles, ALL_CODE_TABS);
}

export function PlaygroundProvider({
  children,
  presetId: initialPresetId = defaultPlaygroundPresetId,
  onPresetChange,
}: PlaygroundProviderProps) {
  const [presetId, setPresetIdState] = useState(initialPresetId);
  const [resetKey, setResetKey] = useState(0);
  const [previewMode, setPreviewMode] = useState<PreviewMode>("inline");
  const [showResponse, setShowResponse] = useState(false);
  const [submittedResponse, setSubmittedResponse] = useState<Record<string, unknown> | null>(null);
  const [codeFiles, setCodeFiles] = useState<Record<CodeTabKey, string>>(() =>
    initCodeFiles(getPlaygroundPreset(initialPresetId)),
  );

  const preset = useMemo(() => getPlaygroundPreset(presetId), [presetId]);

  useEffect(() => {
    setCodeFiles(initCodeFiles(getPlaygroundPreset(presetId)));
    setResetKey((key) => key + 1);
    setSubmittedResponse(null);
  }, [presetId]);

  const live = useMemo(
    () =>
      compileLiveConfig(codeFiles, {
        fields: preset.fields,
        schema: preset.schema,
      }),
    [codeFiles, preset.fields, preset.schema],
  );

  const setPresetId = useCallback(
    (id: string) => {
      setPresetIdState(id);
      onPresetChange?.(id);
    },
    [onPresetChange],
  );

  const updateCodeFile = useCallback((tab: CodeTabKey, value: string) => {
    setCodeFiles((prev) => ({ ...prev, [tab]: value }));
  }, []);

  const reset = useCallback(() => {
    setCodeFiles(initCodeFiles(getPlaygroundPreset(presetId)));
    setResetKey((key) => key + 1);
    setSubmittedResponse(null);
  }, [presetId]);

  const value = useMemo(
    () => ({
      presetId,
      preset,
      setPresetId,
      resetKey,
      reset,
      previewMode,
      setPreviewMode,
      showResponse,
      setShowResponse,
      submittedResponse,
      setSubmittedResponse,
      codeFiles,
      updateCodeFile,
      live,
      liveFields: live.fields,
      liveSchema: live.schema,
    }),
    [
      presetId,
      preset,
      setPresetId,
      resetKey,
      reset,
      previewMode,
      showResponse,
      submittedResponse,
      codeFiles,
      updateCodeFile,
      live,
    ],
  );

  return (
    <PlaygroundContext.Provider value={value}>
      {children}
    </PlaygroundContext.Provider>
  );
}

export function usePlayground() {
  const context = useContext(PlaygroundContext);
  if (!context) {
    throw new Error("usePlayground must be used within PlaygroundProvider");
  }
  return context;
}
