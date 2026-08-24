import type { DocSection } from "@/data/docs";

export const quickStart: DocSection = {
  id: "quick-start",
  title: "Quick Start",
  description:
    "Build your first schema-driven form with react-form-toaster. Define the form with a schema and field configuration, then let Formbox handle the UI, state, validation, and form behavior.",
  blocks: [
    {
      type: "callout",
      tone: "tip",
      title: "The idea",
      size: 3,
      text: "You define what your form should contain. react-form-toaster takes care of the repetitive UI, state management, field wiring, and form behavior.",
    },

    { type: "heading", level: 3, text: "1. Install the package" },
    {
      type: "code",
      language: "bash",
      code: "npm install react-form-toaster\n# or\nyarn add react-form-toaster\n# or\npnpm add react-form-toaster",
    },

    { type: "heading", level: 3, text: "2. Import Formbox and styles" },
    {
      type: "code",
      language: "tsx",
      filename: "main.tsx",
      code: 'import Formbox from "react-form-toaster";\nimport "react-form-toaster/dist/index.css";',
    },
    {
      type: "paragraph",
      text: "Import Formbox where you render your form and include the library stylesheet once in your application entry point.",
    },

    { type: "heading", level: 3, text: "3. Define your validation schema" },
    {
      type: "code",
      language: "tsx",
      filename: "ContactForm.tsx",
      code: 'import { z } from "zod";\n\nconst schema = z.object({\n  email: z.string().email("Enter a valid email address"),\n  name: z.string().min(2, "Name is required"),\n});',
    },
    {
      type: "paragraph",
      text: "The schema describes the data your form accepts and can be used to validate submitted values. react-form-toaster works with Zod for schema-based validation.",
    },

    { type: "heading", level: 3, text: "4. Define your fields" },
    {
      type: "code",
      language: "tsx",
      filename: "ContactForm.tsx",
      code: 'const fields = [\n  {\n    name: "name",\n    type: "text",\n    label: "Name",\n    placeholder: "Enter your name",\n    required: true,\n  },\n  {\n    name: "email",\n    type: "email",\n    label: "Email",\n    placeholder: "you@example.com",\n    required: true,\n  },\n];',
    },
    {
      type: "paragraph",
      text: "Fields describe how each input should appear and behave. You can configure labels, placeholders, required state, field types, and other options without manually wiring each input.",
    },

    { type: "heading", level: 3, text: "5. Render your form" },
    {
      type: "code",
      language: "tsx",
      filename: "ContactForm.tsx",
      code: 'export default function ContactForm() {\n  const handleSubmit = (values: unknown) => {\n    console.log("Submitted values:", values);\n  };\n\n  return (\n    <Formbox\n      schema={schema}\n      fields={fields}\n      mode="inline"\n      onSubmit={handleSubmit}\n    />\n  );\n}',
    },
    {
      type: "callout",
      tone: "info",
      title: "That's it",
      size: 3,
      text: "You do not need to create individual input elements, wire their state, or write separate change handlers. The schema and field configuration are enough for Formbox to build the form.",
    },

    { type: "heading", level: 3, text: "6. Inline or modal forms" },
    {
      type: "paragraph",
      text: "The same schema and field configuration can be used for different presentation modes. Use inline mode when the form belongs directly in your page, or modal mode when the form should open as an overlay.",
    },
    {
      type: "code",
      language: "tsx",
      filename: "InlineForm.tsx",
      code: '<Formbox\n  schema={schema}\n  fields={fields}\n  mode="inline"\n  onSubmit={handleSubmit}\n/>',
    },
    {
      type: "code",
      language: "tsx",
      filename: "ModalForm.tsx",
      code: '<Formbox\n  schema={schema}\n  fields={fields}\n  mode="modal"\n  open={open}\n  onOpenChange={setOpen}\n  onSubmit={handleSubmit}\n/>',
    },

    { type: "heading", level: 3, text: "7. What happens for you?" },
    {
      type: "list",
      items: [
        "🧩 Fields are generated from your configuration",
        "🧠 Form state is managed for you",
        "🔗 Field values are connected automatically",
        "🛡️ Zod handles schema-based validation",
        "⚡ Submission is handled through a single callback",
        "🎨 The library provides the base form UI and styling",
      ],
    },

    {
      type: "callout",
      tone: "tip",
      title: "Where to go next",
      size: 3,
      text: "Explore Formbox Props to customize your form, Zod Validation for advanced validation, and Styling & Tailwind to customize the appearance.",
    },
  ],
};

