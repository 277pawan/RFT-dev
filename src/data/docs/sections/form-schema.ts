import type { DocSection } from "@/data/docs";

export const formSchema: DocSection = {
  id: "form-schema",
  title: "Form Schema",
  description:
    "Define the structure and validation rules of your form with a schema instead of manually wiring form state and validation logic.",

  blocks: [
    {
      type: "paragraph",
      text: "A schema describes the data your form expects. In react-form-toaster, the schema works together with your field configuration to define what the form should accept and how submitted values should be validated.",
    },

    {
      type: "callout",
      tone: "tip",
      title: "The core idea",
      size: 3,
      text: "You define what your form should accept. Formbox handles the repetitive work of connecting fields, values, validation, and form state.",
    },

    {
      type: "heading",
      level: 3,
      text: "Define a schema with Zod",
    },

    {
      type: "code",
      language: "tsx",
      filename: "schema.ts",
      code: `import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});`,
    },

    {
      type: "paragraph",
      text: "Each property in the schema represents a value that your form can collect. The field name should match the corresponding field configuration so Formbox can connect the input to the schema.",
    },

    {
      type: "heading",
      level: 3,
      text: "Connect the schema to your fields",
    },

    {
      type: "code",
      language: "tsx",
      filename: "SignupForm.tsx",
      code: `const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

const fields = [
  {
    name: "name",
    type: "text",
    label: "Name",
    required: true,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    required: true,
  },
];

<Formbox
  schema={schema}
  fields={fields}
/>`,
    },

    {
      type: "callout",
      tone: "info",
      title: "Schema and fields have different jobs",
      size: 3,
      text: "Fields describe the UI — what inputs should be rendered and how they should appear. The schema describes the data — what values are valid and what rules they must satisfy.",
    },

    {
      type: "heading",
      level: 3,
      text: "Schema vs. field configuration",
    },

    {
      type: "table",
      columns: ["Configuration", "Responsible for", "Example"],
      rows: [
        [
          "Schema",
          "Data structure and validation",
          "email must be a valid email",
        ],
        ["Fields", "Input type and UI configuration", "Render an email input"],
        [
          "Formbox",
          "Connecting everything together",
          "Manage values and form behavior",
        ],
      ],
    },

    {
      type: "heading",
      level: 3,
      text: "Keep names in sync",
    },

    {
      type: "paragraph",
      text: "The name of a field should correspond to a property in your schema. This allows Formbox to associate the rendered input with the correct value and validation rules.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "matching-names.ts",
      code: `const schema = z.object({
  email: z.string().email(),
});

const fields = [
  {
    name: "email",
    type: "email",
    label: "Email",
  },
];`,
    },

    {
      type: "callout",
      tone: "warning",
      title: "Avoid mismatched names",
      size: 4,
      text: 'If your schema contains "email" but your field uses a different name, Formbox cannot associate that field with the schema property you intended.',
    },

    {
      type: "heading",
      level: 3,
      text: "Why use a schema?",
    },

    {
      type: "list",
      items: [
        "🧩 Define your form data structure in one place",
        "🛡️ Keep validation rules close to the data they validate",
        "🔗 Automatically connect field values with validation",
        "♻️ Reuse schemas when the same data structure appears in multiple forms",
        "🧠 Keep form configuration declarative instead of manually managing validation logic",
      ],
    },

    {
      type: "heading",
      level: 3,
      text: "A schema is not your UI",
    },

    {
      type: "paragraph",
      text: "The schema does not replace your field configuration. It defines the data and validation rules, while fields define how that data is presented to the user. Formbox brings both together to create the final form.",
    },

    {
      type: "callout",
      tone: "tip",
      title: "Think of it this way",
      size: 3,
      text: "Schema = what the data should look like. Fields = how the user enters that data. Formbox = the layer that brings them together.",
    },
  ],
};
