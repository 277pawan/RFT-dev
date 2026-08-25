import type { PlaygroundPreset } from "@/data/playground/types";
import { contactUsPreset } from "@/data/playground/presets/contact-us";
import { conditionalFieldsPreset } from "@/data/playground/presets/conditional-fields";
import { feedbackPreset, newsletterPreset } from "@/data/playground/presets/examples";

export const playgroundPresets: PlaygroundPreset[] = [
  contactUsPreset,
  conditionalFieldsPreset,
  newsletterPreset,
  feedbackPreset,
];

export const playgroundPresetMap = Object.fromEntries(
  playgroundPresets.map((preset) => [preset.id, preset]),
) as Record<string, PlaygroundPreset>;

export const defaultPlaygroundPresetId = contactUsPreset.id;

export function getPlaygroundPreset(id: string): PlaygroundPreset {
  const preset = playgroundPresetMap[id];
  if (!preset) {
    throw new Error(`Unknown playground preset: ${id}`);
  }
  return preset;
}

export type { CodeTabKey, PlaygroundFormState, PlaygroundPreset } from "@/data/playground/types";
