export const homepageFaq = [
  {
    question: "What is React Form Toaster?",
    answer:
      "React Form Toaster is a schema-driven React form library. You pass a Zod schema, a fields array, and optional buttons; Formbox renders the UI, validation, conditional fields, and toast feedback.",
  },
  {
    question: "How do I install react-form-toaster?",
    answer:
      "Run npm install react-form-toaster, import Formbox and the package CSS, then pass schema and fields. See the Quick Start docs for a full example.",
  },
  {
    question: "Does it work with Zod?",
    answer:
      "Yes. Pass a Zod schema through the schema prop. Field names should match schema keys so validation errors map onto the rendered inputs.",
  },
  {
    question: "Can I show fields only when another value is selected?",
    answer:
      "Use showWhen on a field: { field: \"accountType\", equals: \"business\" }. Formbox hides or shows the field from that configuration.",
  },
  {
    question: "Can the same form be a modal or inline?",
    answer:
      "Set mode to \"modal\" or \"inline\". The fields and schema stay the same; only presentation changes.",
  },
  {
    question: "Is React Form Toaster free?",
    answer:
      "Yes. It is open source under the MIT License on GitHub and published on npm as react-form-toaster.",
  },
] as const;
