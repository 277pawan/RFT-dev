import type { DocSection } from "@/data/docs";

export const formboxProps: DocSection = {
  id: "formbox-props",
  title: "Formbox Props",
  description:
    "Configure Formbox using schema, fields, buttons, presentation, feedback, and styling props. Most of the form can be controlled declaratively without manually managing UI state or field wiring.",

  blocks: [
    {
      type: "paragraph",
      text: "Formbox is the main component of react-form-toaster. Its props control everything from the form schema and fields to modal behavior, validation feedback, styling, buttons, and toast notifications.",
    },

    {
      type: "callout",
      tone: "tip",
      title: "Most configuration is declarative",
      size: 3,
      text: "Instead of manually creating inputs, managing their state, wiring validation, and building button behavior, describe the form through Formbox props and field configuration.",
    },

    {
      type: "heading",
      level: 3,
      text: "Basic usage",
    },

    {
      type: "code",
      language: "tsx",
      filename: "Form.tsx",
      code: `import Formbox from "react-form-toaster";
import "react-form-toaster/dist/index.css";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
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

<Formbox
  schema={schema}
  fields={fields}
  onSubmit={(data) => {
    console.log(data);
  }}
/>;`,
    },

    {
      type: "heading",
      level: 3,
      text: "Formbox props",
    },

    {
      type: "table",
      columns: ["Prop", "Type", "Default", "Description"],
      rows: [
        ["open", "boolean", "true", "Controls the visibility of the form."],
        [
          "onOpenChange",
          "(open: boolean) => void",
          "—",
          "Called whenever the form open/close state changes.",
        ],
        [
          "mode",
          '"modal" | "inline"',
          '"modal"',
          "Controls whether the form is displayed as a modal popup or an inline embedded card.",
        ],
        ["inline", "boolean", "false", 'Shorthand for mode="inline".'],
        [
          "fields",
          "FormField[]",
          "[]",
          "JSON-like array describing the fields rendered by the form.",
        ],
        [
          "buttons",
          "FormButton[]",
          "[]",
          "JSON-like array describing the form action buttons.",
        ],
        [
          "title",
          "string | { text, className? }",
          "—",
          "Form title displayed above the fields.",
        ],
        [
          "description",
          "string | { text, className? }",
          "—",
          "Description or subtitle displayed below the title.",
        ],
        [
          "schema",
          "z.ZodTypeAny",
          "—",
          "Zod schema used for client-side validation.",
        ],
        [
          "onSubmit",
          "(data) => void | Promise",
          "—",
          "Called with the form data after successful validation and submission.",
        ],
        [
          "toast",
          "boolean | ToastMessages",
          "true",
          "Enables built-in toast feedback or accepts a custom toast configuration.",
        ],
        [
          "containerClassName",
          "ClassValue",
          "—",
          "Tailwind classes applied to the outer form/card container.",
        ],
        [
          "innerContainerClassName",
          "ClassValue",
          "—",
          "Tailwind classes applied to the inner form wrapper.",
        ],
        [
          "buttonContainerClassName",
          "ClassValue",
          "—",
          "Tailwind classes applied to the button container.",
        ],
        [
          "inputClassName",
          "ClassValue",
          "—",
          "Default classes applied to form inputs.",
        ],
        [
          "labelClassName",
          "ClassValue",
          "—",
          "Default styling for form labels.",
        ],
        [
          "requiredClassName",
          "ClassValue",
          "—",
          "Styling for the required-field asterisk.",
        ],
        [
          "errorClassName",
          "ClassValue",
          "—",
          "Styling for validation error messages.",
        ],
        [
          "errorPosition",
          '"top" | "bottom"',
          '"top"',
          "Controls where validation errors are displayed.",
        ],
        [
          "focusClassName",
          "ClassValue",
          "—",
          "Default focus border/ring classes applied to fields.",
        ],
        [
          "fieldWrapperClassName",
          "ClassValue",
          "—",
          "Styling for the wrapper around each field.",
        ],
        [
          "passwordToggleClassName",
          "ClassValue",
          "—",
          "Styling for password visibility toggle icons.",
        ],
        [
          "closeFormIcon",
          "boolean",
          "modal mode",
          "Controls whether the top-right close button is displayed.",
        ],
      ],
    },

    {
      type: "heading",
      level: 3,
      text: "Presentation",
    },

    {
      type: "paragraph",
      text: "Formbox can be rendered directly inside a page or presented as a modal. The same schema and field configuration can be used for either mode.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "inline.tsx",
      code: `<Formbox
  mode="inline"
  schema={schema}
  fields={fields}
/>

// Equivalent shorthand
<Formbox
  inline
  schema={schema}
  fields={fields}
/>`,
    },

    {
      type: "code",
      language: "tsx",
      filename: "modal.tsx",
      code: `const [open, setOpen] = useState(false);

<Formbox
  mode="modal"
  open={open}
  onOpenChange={setOpen}
  schema={schema}
  fields={fields}
/>`,
    },

    {
      type: "heading",
      level: 3,
      text: "Title and description",
    },

    {
      type: "paragraph",
      text: "Use title and description to provide context for the form. Both props can accept a simple string or an object containing text and custom classes.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "content.tsx",
      code: `<Formbox
  title={{
    text: "Create your account",
    className: "text-2xl font-bold text-gray-900",
  }}
  description={{
    text: "Fill in your details to get started.",
    className: "text-sm text-gray-500",
  }}
  schema={schema}
  fields={fields}
/>`,
    },

    {
      type: "heading",
      level: 3,
      text: "Validation and submission",
    },

    {
      type: "paragraph",
      text: "Pass a Zod schema through schema to define your validation rules. Once the form passes validation, onSubmit receives the submitted data and can perform synchronous or asynchronous work.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "submission.tsx",
      code: `<Formbox
  schema={schema}
  fields={fields}
  onSubmit={async (data) => {
    await saveUser(data);

    console.log("Submitted:", data);
  }}
/>`,
    },

    {
      type: "callout",
      tone: "info",
      title: "Async submissions",
      size: 4,
      text: "onSubmit can return a Promise, making it suitable for API requests and other asynchronous operations.",
    },

    {
      type: "heading",
      level: 3,
      text: "Error positioning",
    },

    {
      type: "paragraph",
      text: "Use errorPosition to control where validation messages appear. The default position is top. You can also override the position for an individual field.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "errors.tsx",
      code: `<Formbox
  errorPosition="bottom"
  schema={schema}
  fields={fields}
/>`,
    },

    {
      type: "heading",
      level: 3,
      text: "Form-level styling",
    },

    {
      type: "paragraph",
      text: "Formbox provides form-level className props so you can establish a consistent visual system without repeating the same classes on every field.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "styling.tsx",
      code: `<Formbox
  containerClassName="w-full max-w-lg mx-auto rounded-2xl p-6 shadow-2xl"
  innerContainerClassName="space-y-4"
  buttonContainerClassName="pt-4 flex w-full"
  inputClassName="rounded-xl"
  labelClassName="block text-sm font-medium mb-1.5"
  requiredClassName="ml-1 text-red-500"
  errorClassName="text-xs font-medium mt-1.5 block text-red-500"
  focusClassName="focus:ring-2"
  fieldWrapperClassName="space-y-1"
  passwordToggleClassName="text-gray-500"
  schema={schema}
  fields={fields}
/>`,
    },

    {
      type: "callout",
      tone: "tip",
      title: "Set defaults once",
      size: 3,
      text: "Form-level styling is useful when multiple fields share the same visual treatment. Individual field props can override these defaults when a particular field needs different styling.",
    },

    {
      type: "heading",
      level: 3,
      text: "closeFormIcon",
    },

    {
      type: "paragraph",
      text: "Use closeFormIcon to show or hide the top-right close button when using Formbox in modal mode.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "close-icon.tsx",
      code: `<Formbox
  mode="modal"
  closeFormIcon={false}
  schema={schema}
  fields={fields}
/>`,
    },

    {
      type: "heading",
      level: 3,
      text: "FormField props",
    },

    {
      type: "paragraph",
      text: "The fields prop accepts an array of field definitions. Each definition controls the field type, displayed content, behavior, validation presentation, and styling.",
    },

    {
      type: "table",
      columns: ["Attribute", "Type", "Description"],
      rows: [
        [
          "name",
          "string",
          "Required unique key matching the corresponding Zod schema key.",
        ],
        [
          "type",
          "string",
          'Field type such as "text", "email", "password", "number", "checkbox", "radio", "select", "multiselect", "file", or "array".',
        ],
        ["label", "string", "Label displayed above the field."],
        [
          "placeholder",
          "string",
          "Placeholder text displayed inside supported inputs.",
        ],
        ["required", "boolean", "Displays the required-field indicator."],
        [
          "className",
          "ClassValue",
          "Tailwind classes applied to the field input/control.",
        ],
        [
          "style",
          "React.CSSProperties",
          "Inline CSS object for arbitrary styling values.",
        ],
        [
          "dropdownClassName",
          "ClassValue",
          "Classes applied to the opened select or multiselect dropdown.",
        ],
        [
          "optionsClassName",
          "ClassValue",
          "Classes applied to select/multiselect options, selected text, and selected tags.",
        ],
        [
          "errorPosition",
          '"top" | "bottom"',
          "Overrides the form-level error position for this field.",
        ],
        ["labelClassName", "ClassValue", "Per-field label styling override."],
        [
          "requiredClassName",
          "ClassValue",
          "Per-field required asterisk styling override.",
        ],
        [
          "errorClassName",
          "ClassValue",
          "Per-field validation error styling override.",
        ],
        [
          "focusClassName",
          "ClassValue",
          "Per-field focus state styling override.",
        ],
        [
          "passwordToggleClassName",
          "ClassValue",
          "Styling override for the password visibility toggle.",
        ],
        ["passwordToggle", "boolean", "Enables the show/hide password toggle."],
        [
          "options",
          "{ label, value }[]",
          "Options used by checkbox, radio, select, and multiselect fields.",
        ],
        [
          "showWhen",
          "ShowWhen",
          "Controls conditional visibility based on another field's value.",
        ],
      ],
    },

    {
      type: "heading",
      level: 3,
      text: "Field example",
    },

    {
      type: "code",
      language: "tsx",
      filename: "fields.ts",
      code: `fields={[
  {
    name: "role",
    type: "select",
    label: "Role",
    required: true,
    searchable: true,
    options: [
      { label: "Admin", value: "admin" },
      { label: "User", value: "user" },
    ],
    className: "border-gray-700",
    style: {
      backgroundColor: "#111827",
      borderColor: "#374151",
      color: "#ffffff",
    },
    dropdownClassName: "bg-gray-900 border-gray-700",
    optionsClassName:
      "text-gray-200 hover:bg-gray-800 hover:text-white",
  },
]}`,
    },

    {
      type: "callout",
      tone: "info",
      title: "Deprecated alias",
      size: 4,
      text: "optionClassName is retained as a deprecated alias for optionsClassName. Use optionsClassName in new code.",
    },

    {
      type: "heading",
      level: 3,
      text: "Conditional fields",
    },

    {
      type: "paragraph",
      text: "Use showWhen to control whether a field is visible based on another field's value. This allows dynamic forms without manually managing conditional rendering.",
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
      text: "Password fields",
    },

    {
      type: "paragraph",
      text: "Password fields can expose a built-in visibility toggle. Use passwordToggle to enable it and passwordToggleClassName to customize its appearance.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "password.ts",
      code: `{
  name: "password",
  type: "password",
  label: "Password",
  required: true,
  passwordToggle: true,
  passwordToggleClassName:
    "text-gray-500 hover:text-gray-900",
}`,
    },

    {
      type: "heading",
      level: 3,
      text: "FormButton props",
    },

    {
      type: "paragraph",
      text: "The buttons prop accepts an array of button definitions. Buttons can submit, reset, cancel, confirm, or perform custom actions.",
    },

    {
      type: "table",
      columns: ["Attribute", "Type", "Description"],
      rows: [
        ["name", "string", "Button label displayed to the user."],
        [
          "type",
          '"submit" | "reset" | "cancel" | "ok" | "button"',
          "Controls the button's behavior.",
        ],
        ["className", "ClassValue", "Tailwind classes applied to the button."],
        [
          "style",
          "React.CSSProperties",
          "Inline CSS for arbitrary button styling.",
        ],
        [
          "disabledClassName",
          "ClassValue",
          "Classes applied when the button is disabled or submitting.",
        ],
        [
          "loadingText",
          "string",
          "Text displayed while the button is in its loading state.",
        ],
        [
          "onClick",
          "(data, e) => void | Promise",
          "Custom click handler receiving the current form data and event.",
        ],
        ["toast", "ToastMessages", "Button-level toast configuration."],
      ],
    },

    {
      type: "heading",
      level: 3,
      text: "Button example",
    },

    {
      type: "code",
      language: "tsx",
      filename: "buttons.ts",
      code: `buttons={[
  {
    name: "Save Profile",
    type: "submit",
    loadingText: "Saving...",
    className:
      "w-full rounded-xl py-3 font-semibold",
    style: {
      backgroundColor: "#6366f1",
      color: "#ffffff",
      border: "none",
    },
    disabledClassName:
      "opacity-50 cursor-not-allowed",
  },
  {
    name: "Cancel",
    type: "cancel",
    className:
      "rounded-xl px-5 py-3 border",
  },
]}`,
    },

    {
      type: "heading",
      level: 3,
      text: "Button click handlers",
    },

    {
      type: "paragraph",
      text: "Use onClick when a button needs custom behavior. The handler receives the current form data and the button event.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "button-click.ts",
      code: `buttons={[
  {
    name: "Preview",
    type: "button",
    onClick: async (data, event) => {
      console.log("Current form data:", data);
      console.log("Button event:", event);
    },
  },
]}`,
    },

    {
      type: "heading",
      level: 3,
      text: "Toast configuration",
    },

    {
      type: "paragraph",
      text: "Formbox includes built-in toast feedback. The toast prop can be enabled, configured with messages, or disabled completely when you prefer to use another notification library.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "toast.tsx",
      code: `<Formbox
  toast={{
    loading: "Saving...",
    success: "Saved successfully!",
    error: "Something went wrong",
    position: "bottom-right",
  }}
  schema={schema}
  fields={fields}
/>`,
    },

    {
      type: "heading",
      level: 3,
      text: "Disable built-in toasts",
    },

    {
      type: "paragraph",
      text: "Set toast to false when you want to handle notifications yourself with another toast or notification library.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "external-toast.tsx",
      code: `import toast from "react-hot-toast";

<Formbox
  toast={false}
  onSubmit={async (data) => {
    try {
      await api.save(data);
      toast.success("Saved successfully!");
    } catch {
      toast.error("Failed to save");
    }
  }}
  schema={schema}
  fields={fields}
/>`,
    },

    {
      type: "callout",
      tone: "tip",
      title: "Use your preferred toast library",
      size: 3,
      text: "Built-in toasts are optional. Disable them when your application already has its own notification system.",
    },

    {
      type: "heading",
      level: 3,
      text: "Complete example",
    },

    {
      type: "code",
      language: "tsx",
      filename: "AccountForm.tsx",
      code: `import Formbox from "react-form-toaster";
import "react-form-toaster/dist/index.css";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  accountType: z.enum(["personal", "business"]),
  companyName: z.string().optional(),
  password: z.string().min(8),
});

export function AccountForm() {
  return (
    <Formbox
      open={true}
      onOpenChange={() => {}}
      mode="inline"
      closeFormIcon={false}
      errorPosition="bottom"

      containerClassName="w-full max-w-lg mx-auto rounded-2xl p-6 shadow-2xl"
      innerContainerClassName="space-y-4"
      buttonContainerClassName="pt-4 flex w-full"
      inputClassName="rounded-xl"

      title={{
        text: "Create your account",
        className:
          "text-2xl font-bold text-gray-900 mb-1",
      }}

      description={{
        text: "Fill in your details to get started.",
        className:
          "text-sm text-gray-500 mb-5",
      }}

      labelClassName="block text-sm font-medium mb-1.5"
      requiredClassName="ml-1 text-red-500"
      errorClassName="text-xs font-medium mt-1.5 block text-red-500"

      schema={schema}

      onSubmit={async (data) => {
        await saveAccount(data);
      }}

      toast={{
        loading: "Creating account...",
        success: "Account created successfully! 🎉",
        error: "Something went wrong",
        position: "bottom-right",
      }}

      fields={[
        {
          name: "firstName",
          type: "text",
          label: "First Name",
          placeholder: "Sarah",
          required: true,
        },
        {
          name: "lastName",
          type: "text",
          label: "Last Name",
          placeholder: "Johnson",
          required: true,
        },
        {
          name: "email",
          type: "email",
          label: "Email",
          placeholder: "sarah@example.com",
          required: true,
        },
        {
          name: "accountType",
          type: "select",
          label: "Account Type",
          required: true,
          options: [
            {
              label: "Personal",
              value: "personal",
            },
            {
              label: "Business",
              value: "business",
            },
          ],
        },
        {
          name: "companyName",
          type: "text",
          label: "Company Name",
          placeholder: "Acme Inc.",
          showWhen: {
            field: "accountType",
            equals: "business",
          },
        },
        {
          name: "password",
          type: "password",
          label: "Password",
          placeholder: "At least 8 characters",
          required: true,
          passwordToggle: true,
        },
      ]}

      buttons={[
        {
          name: "Create Account",
          type: "submit",
          loadingText: "Creating...",
          className:
            "w-full rounded-xl py-3 font-semibold",
          disabledClassName:
            "opacity-50 cursor-not-allowed",
        },
      ]}
    />
  );
}`,
    },

    {
      type: "callout",
      tone: "info",
      title: "What's covered here?",
      size: 3,
      text: "Formbox supports presentation, validation, field configuration, conditional fields, password toggles, styling, buttons, async submission, and built-in or external toast feedback through its declarative API.",
    },

    {
      type: "heading",
      level: 3,
      text: "Next steps",
    },

    {
      type: "paragraph",
      text: "Use the API Reference when you need the complete type-level reference. For specific functionality, continue with Zod Validation, Forms & Submission, Conditional Fields, or Styling & Customization.",
    },
  ],
};
