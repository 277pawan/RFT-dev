import type { DocSection } from "@/data/docs";

export const validation: DocSection = {
  id: "validation",
  title: "Zod Validation",
  description:
    "Validate Formbox data with Zod schemas, from simple required fields to reusable, conditional, and advanced validation rules.",

  blocks: [
    {
      type: "paragraph",
      text: "react-form-toaster uses Zod schemas to describe and validate the data submitted by your form. Your fields describe the UI, while the Zod schema defines what values are valid.",
    },

    {
      type: "callout",
      tone: "tip",
      title: "Think in two layers",
      size: 3,
      text: "Fields describe how users enter data. Zod describes which data is valid. Formbox connects both layers and prevents invalid data from reaching your submit handler.",
    },

    {
      type: "heading",
      level: 3,
      text: "Basic validation",
    },

    {
      type: "paragraph",
      text: "Start by creating a Zod object whose keys match your field names.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "schema.ts",
      code: `import { z } from "zod";

const schema = z.object({
  username: z.string().min(3, "Username is too short"),
  age: z.number().min(18, "You must be at least 18"),
});`,
    },

    {
      type: "heading",
      level: 3,
      text: "Required strings",
    },

    {
      type: "code",
      language: "tsx",
      filename: "required.ts",
      code: `const schema = z.object({
  name: z
    .string()
    .min(1, "Name is required"),

  username: z
    .string()
    .min(3, "Username must contain at least 3 characters"),
});`,
    },

    {
      type: "heading",
      level: 3,
      text: "Email validation",
    },

    {
      type: "code",
      language: "tsx",
      filename: "email.ts",
      code: `const schema = z.object({
  email: z
    .string()
    .email("Enter a valid email address"),
});`,
    },

    {
      type: "heading",
      level: 3,
      text: "Numbers",
    },

    {
      type: "code",
      language: "tsx",
      filename: "number.ts",
      code: `const schema = z.object({
  age: z
    .number()
    .min(18, "Must be at least 18")
    .max(100, "Enter a valid age"),
});`,
    },

    {
      type: "callout",
      tone: "warning",
      title: "Field name must match the schema",
      size: 4,
      text: "If your field is named age, the schema should validate age. Mismatched names prevent the field and validation rule from referring to the same form value.",
    },

    {
      type: "heading",
      level: 3,
      text: "Optional values",
    },

    {
      type: "paragraph",
      text: "Use optional when a field is allowed to be omitted.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "optional.ts",
      code: `const schema = z.object({
  name: z.string().min(1),
  bio: z.string().max(500).optional(),
});`,
    },

    {
      type: "heading",
      level: 3,
      text: "Enums and fixed choices",
    },

    {
      type: "paragraph",
      text: "Use enums when a field should accept only a predefined set of values. This works particularly well with select and radio fields.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "enum.ts",
      code: `const schema = z.object({
  accountType: z.enum([
    "personal",
    "business",
  ]),

  experience: z.enum([
    "junior",
    "mid",
    "senior",
  ]),
});`,
    },

    {
      type: "heading",
      level: 3,
      text: "Arrays and multiselect",
    },

    {
      type: "paragraph",
      text: "For fields that produce multiple values, validate the submitted value as an array.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "multiselect.ts",
      code: `const schema = z.object({
  skills: z
    .array(z.string())
    .min(1, "Select at least one skill"),
});`,
    },

    {
      type: "heading",
      level: 3,
      text: "Custom error messages",
    },

    {
      type: "paragraph",
      text: "Zod lets you provide messages that are meaningful to users instead of exposing generic validation failures.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "messages.ts",
      code: `const schema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters"),

  password: z
    .string()
    .min(8, "Password must contain at least 8 characters"),

  email: z
    .string()
    .email("Please enter your work email"),
});`,
    },

    {
      type: "heading",
      level: 3,
      text: "Multiple rules on one field",
    },

    {
      type: "code",
      language: "tsx",
      filename: "multiple-rules.ts",
      code: `const schema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password is too long"),
});`,
    },

    {
      type: "heading",
      level: 3,
      text: "Refinements",
    },

    {
      type: "paragraph",
      text: "Use refine when the built-in Zod validators are not enough and you need a custom rule.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "refine.ts",
      code: `const schema = z.object({
  confirmation: z
    .string()
    .refine(
      (value) => value === "DELETE",
      "Please type DELETE to confirm"
    ),
});`,
    },

    {
      type: "heading",
      level: 3,
      text: "Cross-field validation",
    },

    {
      type: "paragraph",
      text: "For rules that depend on more than one value, validate the object as a whole. This is useful for confirmation fields and relationships between values.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "cross-field.ts",
      code: `const schema = z
  .object({
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );`,
    },

    {
      type: "heading",
      level: 3,
      text: "Transforming values",
    },

    {
      type: "paragraph",
      text: "Zod can also transform validated values when the value your application needs differs from the value entered by the user.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "transform.ts",
      code: `const schema = z.object({
  username: z
    .string()
    .trim()
    .toLowerCase(),
});`,
    },

    {
      type: "heading",
      level: 3,
      text: "Using the schema with Formbox",
    },

    {
      type: "code",
      language: "tsx",
      filename: "Form.tsx",
      code: `<Formbox
  schema={schema}
  fields={fields}
  onSubmit={(data) => {
    console.log("Valid data:", data);
  }}
/>`,
    },

    {
      type: "callout",
      tone: "info",
      title: "Submit only handles valid data",
      size: 3,
      text: "Keep validation rules inside the schema and keep onSubmit focused on what should happen after the form has passed validation.",
    },

    {
      type: "heading",
      level: 3,
      text: "Common validation problems",
    },

    {
      type: "list",
      items: [
        "🔎 Field name does not match the Zod schema key",
        "🔎 Number field is validated with a string schema",
        "🔎 Multiselect value is validated as a string instead of an array",
        "🔎 Select value does not match the enum values",
        "🔎 Optional field is treated as required by the schema",
        "🔎 Custom validation message is attached to the wrong path",
      ],
    },

    {
      type: "callout",
      tone: "tip",
      title: "Need more advanced Zod?",
      size: 4,
      text: "Zod supports many additional schema operations such as unions, discriminated unions, intersections, preprocessors, transforms, refinements, and reusable schemas. Formbox accepts the resulting Zod schema through the schema prop.",
    },
  ],
};
