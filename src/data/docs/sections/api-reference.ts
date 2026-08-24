import type { DocSection } from "@/data/docs";

export const apiReference: DocSection = {
  id: "api",
  title: "API Reference",
  description:
    "A concise reference for the main Formbox API, configuration types, supported actions, and commonly used values.",

  blocks: [
    {
      type: "heading",
      level: 3,
      text: "Formbox",
    },
    {
      type: "paragraph",
      text: "Formbox is the main component exported by react-form-toaster. Pass your schema, fields, and optional configuration to create a working form.",
    },
    {
      type: "code",
      language: "tsx",
      filename: "Formbox.tsx",
      code: `import Formbox from "react-form-toaster";
import "react-form-toaster/dist/index.css";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
});

const fields = [
  {
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "Enter your name",
    required: true,
  },
];

const handleSubmit = (data: z.infer<typeof schema>) => {
  console.log("Submitted data:", data);
};

export default function MyForm() {
  return (
    <Formbox
      schema={schema}
      fields={fields}
      mode="inline"
      onSubmit={handleSubmit}
    />
  );
}`,
    },

    {
      type: "heading",
      level: 3,
      text: "Formbox configuration",
    },
    {
      type: "paragraph",
      text: "The main Formbox configuration combines the schema, fields, buttons, presentation mode, submission handler, and optional toast behavior.",
    },
    {
      type: "code",
      language: "tsx",
      filename: "configuration.tsx",
      code: `<Formbox
  schema={schema}
  fields={fields}
  buttons={buttons}
  mode="inline"
  open={true}
  title="Create Account"
  description="Fill in your details"
  onSubmit={handleSubmit}
  toast={{
    loading: "Saving...",
    success: "Saved successfully!",
    error: "Something went wrong",
    position: "bottom-right",
  }}
/>`,
    },

    {
      type: "heading",
      level: 3,
      text: "Submitting a form",
    },
    {
      type: "paragraph",
      text: "Formbox calls onSubmit with the validated form data. You can pass a separate function or define the submission handler directly on the component.",
    },

    {
      type: "heading",
      level: 4,
      text: "Using a submit handler",
    },
    {
      type: "code",
      language: "tsx",
      filename: "handleSubmit.tsx",
      code: `const handleSubmit = (data) => {
  console.log("Submitted:", data);
};

<Formbox
  schema={schema}
  fields={fields}
  onSubmit={handleSubmit}
/>;`,
    },

    {
      type: "heading",
      level: 4,
      text: "Using an async submit handler",
    },
    {
      type: "code",
      language: "tsx",
      filename: "async-submit.tsx",
      code: `<Formbox
  schema={schema}
  fields={fields}
  mode="inline"
  onSubmit={async (data) => {
    console.log("Submitting:", data);

    // Simulate an API request
    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    console.log("Submitted:", data);
  }}
/>;`,
    },

    {
      type: "callout",
      tone: "info",
      title: "Async submissions",
      size: 4,
      text: "onSubmit can return a Promise, so it can be used directly with API requests, database operations, or other asynchronous tasks.",
    },

    {
      type: "heading",
      level: 3,
      text: "Inline and modal modes",
    },
    {
      type: "paragraph",
      text: "Use inline mode when the form should be embedded directly in a page. Use modal mode when the form should appear as an overlay.",
    },
    {
      type: "code",
      language: "tsx",
      filename: "modes.tsx",
      code: `// Inline
<Formbox
  mode="inline"
  schema={schema}
  fields={fields}
/>

// Modal
<Formbox
  mode="modal"
  open={open}
  onOpenChange={setOpen}
  schema={schema}
  fields={fields}
/>

// Inline shorthand
<Formbox
  inline
  schema={schema}
  fields={fields}
/>`,
    },

    {
      type: "heading",
      level: 3,
      text: "Fields",
    },
    {
      type: "paragraph",
      text: "Fields are configuration objects that describe the controls rendered by Formbox. See Fields & Field Types for the complete field configuration guide.",
    },
    {
      type: "code",
      language: "tsx",
      filename: "fields.ts",
      code: `const fields = [
  {
    name: "role",
    type: "select",
    label: "Role",
    required: true,
    options: [
      {
        label: "Admin",
        value: "admin",
      },
      {
        label: "User",
        value: "user",
      },
    ],
  },
];`,
    },

    {
      type: "heading",
      level: 3,
      text: "Buttons",
    },
    {
      type: "paragraph",
      text: "Buttons are also configuration objects and can control submission, reset, cancellation, confirmation, or custom actions.",
    },
    {
      type: "code",
      language: "tsx",
      filename: "buttons.ts",
      code: `const buttons = [
  {
    name: "Cancel",
    type: "cancel",
  },
  {
    name: "Save",
    type: "submit",
    loadingText: "Saving...",
  },
];`,
    },

    {
      type: "heading",
      level: 3,
      text: "Button types",
    },
    {
      type: "list",
      items: [
        "submit — Validate and submit the form",
        "reset — Reset the form values",
        "cancel — Cancel the current form action",
        "ok — Confirmation or OK action",
        "button — Generic button for custom behavior",
      ],
    },

    {
      type: "heading",
      level: 3,
      text: "Conditional fields",
    },
    {
      type: "paragraph",
      text: "Use showWhen to display a field based on another field's value.",
    },
    {
      type: "code",
      language: "tsx",
      filename: "conditional-field.ts",
      code: `{
  name: "companyName",
  type: "text",
  label: "Company Name",
  showWhen: {
    field: "accountType",
    equals: "business",
  },
}`,
    },

    {
      type: "heading",
      level: 3,
      text: "Password toggle",
    },
    {
      type: "paragraph",
      text: "Password fields can provide a built-in visibility toggle.",
    },
    {
      type: "code",
      language: "tsx",
      filename: "password-field.ts",
      code: `{
  name: "password",
  type: "password",
  label: "Password",
  passwordToggle: true,
}`,
    },

    {
      type: "heading",
      level: 3,
      text: "Toast configuration",
    },
    {
      type: "paragraph",
      text: "Use the toast prop to configure built-in submission feedback. Set it to false when you want to handle notifications with your own toast library.",
    },
    {
      type: "code",
      language: "tsx",
      filename: "toast.tsx",
      code: `<Formbox
  toast={{
    loading: "Saving...",
    success: "Saved successfully!",
    error: "Unable to save",
    position: "bottom-right",
  }}
  schema={schema}
  fields={fields}
/>`,
    },

    {
      type: "heading",
      level: 3,
      text: "External toast libraries",
    },
    {
      type: "code",
      language: "tsx",
      filename: "external-toast.tsx",
      code: `import toast from "react-hot-toast";

<Formbox
  toast={false}
  schema={schema}
  fields={fields}
  onSubmit={async (data) => {
    try {
      await saveData(data);
      toast.success("Saved successfully!");
    } catch {
      toast.error("Failed to save");
    }
  }}
/>`,
    },

    {
      type: "heading",
      level: 3,
      text: "Styling",
    },
    {
      type: "paragraph",
      text: "Formbox provides className-based configuration for Tailwind utilities and style props for arbitrary CSS values.",
    },
    {
      type: "code",
      language: "tsx",
      filename: "styling.tsx",
      code: `<Formbox
  containerClassName="rounded-2xl p-6 shadow-xl"
  inputClassName="rounded-xl"
  labelClassName="text-sm font-medium"
  errorClassName="text-sm text-red-500"
  schema={schema}
  fields={fields}
/>`,
    },

    {
      type: "heading",
      level: 3,
      text: "Core types",
    },
    {
      type: "list",
      items: [
        "FormField — Configuration for individual form fields",
        "FormButton — Configuration for form action buttons",
        "ToastMessages — Configuration for toast messages and position",
        "ShowWhen — Configuration for conditional field visibility",
        "ClassValue — ClassName-compatible styling value",
        "React.CSSProperties — Inline CSS value used by style",
      ],
    },

    {
      type: "heading",
      level: 3,
      text: "Deprecated API",
    },
    {
      type: "callout",
      tone: "warning",
      title: "optionClassName",
      size: 4,
      text: "optionClassName is retained as a deprecated alias for optionsClassName. Use optionsClassName in new code.",
    },

    {
      type: "callout",
      tone: "tip",
      title: "Need detailed configuration?",
      size: 3,
      text: "Use Formbox Props for the complete Formbox configuration, Fields & Field Types for field-specific options, Zod Validation for validation rules, and Styling & Customization for detailed styling.",
    },
  ],
};
