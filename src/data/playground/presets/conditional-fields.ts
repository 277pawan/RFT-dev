import { z } from "zod";
import type { PlaygroundPreset } from "@/data/playground/types";
import {
  playgroundFormClassNames,
  playgroundInputStyle,
  playgroundSubmitStyle,
} from "@/data/playground/formStyles";

const schema = z.object({
  firstname: z.string().min(4, "First name must be at least 4 characters"),
  age: z.coerce.number().min(18, "You must be at least 18"),
  accountType: z.string().optional(),
  companyName: z.string().optional(),
});

export const conditionalFieldsPreset: PlaygroundPreset = {
  id: "conditional-fields",
  label: "Conditional Fields",
  description: "Show company name only when account type is business",
  category: "conditional",
  previewFilename: "ConditionalForm.tsx",
  schema,
  initialValues: {
    firstname: "Alex",
    age: 25,
    accountType: "business",
    companyName: "Acme Inc.",
  },
  formConfig: {
    title: {
      text: "Create account",
      className: "text-lg font-bold text-text mb-1",
    },
    errorPosition: "bottom",
    toast: false,
    ...playgroundFormClassNames,
  },
  fields: [
    {
      name: "firstname",
      type: "text",
      label: "First Name",
      required: true,
      style: playgroundInputStyle,
    },
    {
      name: "age",
      type: "number",
      label: "Age",
      required: true,
      style: playgroundInputStyle,
    },
    {
      name: "accountType",
      type: "radio",
      label: "Account Type",
      options: [
        { label: "Personal", value: "personal" },
        { label: "Business", value: "business" },
      ],
    },
    {
      name: "companyName",
      type: "text",
      label: "Company",
      placeholder: "Acme Inc.",
      showWhen: { field: "accountType", equals: "business" },
      style: playgroundInputStyle,
    },
  ],
  buttons: [
    {
      name: "Submit",
      type: "submit",
      className: playgroundFormClassNames.submitClassName,
      style: playgroundSubmitStyle,
    },
  ],
  codeFiles: {
    "schema.ts": [
      'import { z } from "zod";',
      "",
      "export const schema = z.object({",
      "  firstname: z.string().min(4),",
      "  age: z.coerce.number().min(18),",
      "  accountType: z.string().optional(),",
      "  companyName: z.string().optional(),",
      "});",
    ],
    "formConfig.ts": [
      "export const fields = [",
      '  { name: "firstname", type: "text", label: "First Name", required: true },',
      '  { name: "age", type: "number", label: "Age", required: true },',
      "  {",
      '    name: "accountType",',
      '    type: "radio",',
      '    label: "Account Type",',
      "    options: [",
      '      { label: "Personal", value: "personal" },',
      '      { label: "Business", value: "business" },',
      "    ],",
      "  },",
      "  {",
      '    name: "companyName",',
      '    type: "text",',
      '    label: "Company",',
      '    showWhen: { field: "accountType", equals: "business" },',
      "  },",
      "];",
    ],
    "App.tsx": [
      'import Formbox from "react-form-toaster";',
      'import { schema } from "./schema";',
      'import { fields } from "./formConfig";',
      "",
      "export function ConditionalForm() {",
      "  return (",
      "    <Formbox",
      '      mode="inline"',
      "      schema={schema}",
      "      fields={fields}",
      "      onSubmit={(data) => console.log(data)}",
      "    />",
      "  );",
      "}",
    ],
  },
};
