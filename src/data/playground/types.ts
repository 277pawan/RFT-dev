import type { FormButton, FormField } from "react-form-toaster";
import type { z } from "zod";

export type CodeTabKey = "schema.ts" | "formConfig.ts" | "App.tsx";

export type PlaygroundFormConfig = {
  title?: string | { text: string; className?: string };
  description?: string | { text: string; className?: string };
  errorPosition?: "top" | "bottom";
  toast?: boolean | { loading?: string; success?: string; error?: string };
  containerClassName?: string;
  innerContainerClassName?: string;
  buttonContainerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  requiredClassName?: string;
  errorClassName?: string;
};

export type PlaygroundPreset = {
  id: string;
  label: string;
  description?: string;
  category?: "basic" | "validation" | "conditional" | "advanced";
  previewFilename: string;
  schema: z.ZodTypeAny;
  fields: FormField[];
  buttons: FormButton[];
  formConfig: PlaygroundFormConfig;
  /** Shown in state panel until Formbox exposes onValuesChange */
  initialValues: Record<string, unknown>;
  codeFiles: Partial<Record<CodeTabKey, string[]>>;
};

export type PlaygroundFormState = {
  values: Record<string, unknown>;
  errors: Record<string, string>;
  touched: string[];
  isValid: boolean;
};
