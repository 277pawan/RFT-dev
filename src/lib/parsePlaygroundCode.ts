import { z } from "zod";
import type { FormField } from "react-form-toaster";
import type { CodeTabKey } from "@/data/playground/types";

export type LivePlaygroundConfig = {
  fields: FormField[];
  schema: z.ZodTypeAny;
  fieldsError: string | null;
  schemaError: string | null;
};

function stripComments(code: string): string {
  return code
    .replace(/\/\/.*$/gm, "")
    .replace(/\/\*[\s\S]*?\*\//g, "");
}

/** Evaluate the `export const fields = [...]` array from formConfig.ts */
export function parseFieldsCode(code: string): {
  fields: FormField[] | null;
  error: string | null;
} {
  try {
    const cleaned = stripComments(code);
    const match = cleaned.match(
      /export\s+const\s+fields\s*=\s*(\[[\s\S]*\])\s*;?/,
    );
    if (!match) {
      return { fields: null, error: "Could not find export const fields = [...]" };
    }

    const fields = new Function(`"use strict"; return (${match[1]})`)();
    if (!Array.isArray(fields)) {
      return { fields: null, error: "fields must be an array" };
    }

    return { fields: fields as FormField[], error: null };
  } catch (error) {
    return {
      fields: null,
      error: error instanceof Error ? error.message : "Invalid fields syntax",
    };
  }
}

/** Evaluate z.object(...) from schema.ts with z injected */
export function parseSchemaCode(code: string): {
  schema: z.ZodTypeAny | null;
  error: string | null;
} {
  try {
    const cleaned = stripComments(code)
      .replace(/^import[\s\S]*?;[\r\n]*/gm, "")
      .replace(/^export\s+default\s+[\s\S]*;?[\r\n]*$/gm, "")
      .trim();

    const varMatch = cleaned.match(/const\s+(\w+)\s*=\s*z\.object/s);
    const varName = varMatch?.[1] ?? "contactSchema";

    const schema = new Function(
      "z",
      `"use strict"; ${cleaned}; return ${varName};`,
    )(z);

    if (!schema || typeof schema.safeParse !== "function") {
      return { schema: null, error: "Schema must be a Zod object" };
    }

    return { schema: schema as z.ZodTypeAny, error: null };
  } catch (error) {
    return {
      schema: null,
      error: error instanceof Error ? error.message : "Invalid schema syntax",
    };
  }
}

export function compileLiveConfig(
  files: Partial<Record<CodeTabKey, string>>,
  fallback: { fields: FormField[]; schema: z.ZodTypeAny },
): LivePlaygroundConfig {
  const fieldsResult = parseFieldsCode(files["formConfig.ts"] ?? "");
  const schemaResult = parseSchemaCode(files["schema.ts"] ?? "");

  return {
    fields: fieldsResult.fields ?? fallback.fields,
    schema: schemaResult.schema ?? fallback.schema,
    fieldsError: fieldsResult.error,
    schemaError: schemaResult.error,
  };
}

export function codeFilesFromPreset(
  codeFiles: Partial<Record<CodeTabKey, string[]>>,
  tabs: CodeTabKey[],
): Record<CodeTabKey, string> {
  return Object.fromEntries(
    tabs.map((tab) => [tab, (codeFiles[tab] ?? []).join("\n")]),
  ) as Record<CodeTabKey, string>;
}

export const ALL_CODE_TABS: CodeTabKey[] = ["schema.ts", "formConfig.ts", "App.tsx"];
