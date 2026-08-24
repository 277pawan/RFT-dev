import type { DocSection } from "@/data/docs";

export const introduction: DocSection = {
  id: "introduction",
  title: "Introduction",
  description:
    "React Form Toaster is schema, fields, toast-driven: define fields and Zod validation once, render inline or modal forms without boilerplate.",
  blocks: [
    {
      type: "paragraph",
      text: "React Form Toaster gives React applications a single JSON-like configuration for fields, buttons, validation, styling, and toast feedback.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "The core idea",
      text: "Describe what you want with a JSON Structure, and let the library handle the HTML, CSS, JavaScript, and state management.",
    },
    {
      type: "tabs",
      tabs: [
        {
          id: "inline",
          label: "Inline form",
          blocks: [
            {
              type: "code",
              language: "tsx",
              filename: "AccountForm.tsx",
              code: '<Formbox mode="inline" open={true} fields={fields} schema={schema} />',
            },
          ],
        },
        {
          id: "modal",
          label: "Modal form",
          blocks: [
            {
              type: "code",
              language: "tsx",
              filename: "AccountForm.tsx",
              code: '<Formbox mode="modal" open={isOpen} onOpenChange={setIsOpen} fields={fields} schema={schema} />',
            },
          ],
        },
      ],
    },

    {
      type: "paragraph",
      text: "Instead of manually creating every input, managing every piece of state, wiring events, and writing repetitive UI logic, you define what your form should look and behave like through a schema.",
    },
    {
      type: "code",
      language: "tsx",
      code: `
JSON Schema
   ↓
react-form-toaster
   ↓
UI + Styling + State + Behavior + Validation + Toast`,
    },
    {
      type: "heading",
      level: 3,
      text: "Why React-Form-Toaster ?",
    },
    {
      type: "list",
      items: [
        "🧩 Repetitive JSX — Write the same form markup again and again",
        "🎨 Complicated CSS — Spend time styling and maintaining form layouts",
        "🧠 Manual State Management — Manage values, errors, touched state, and updates",
        "🔁 Repeated Event Handlers — Wire up change, blur, submit, and input events",
        "🛡️ Boilerplate Validation Logic — Write and maintain repetitive validation rules",
        "🔀 Conditional UI Plumbing — Handle dynamic fields, visibility, and dependencies",
        "🔗 Form Field Wiring — Manually connect fields, state, validation, and behavior",
      ],
      ordered: false,
    },

    {
      type: "heading",
      level: 3,
      text: "The philosophy",
    },
    {
      type: "callout",
      tone: "info",
      title: "",
      size: 3,
      text: "Don't build forms. Define them.",
    },
    {
      type: "paragraph",
      text: `Every form is different. Your schema defines what makes each form unique — its fields, layout, styling, validation, behavior, and configuration.`,
    },
    {
      type: "paragraph",
      text: `Instead of repeatedly writing JSX, CSS classes, state management, event handlers, and validation logic for every new form, you simply describe the form in JSON.`,
    },
  ],
};

