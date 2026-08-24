import type { DocSection } from "@/data/docs";

export const styling: DocSection = {
  id: "styling",
  title: "Styling & Customization",
  description:
    "Customize Formbox at the form, field, button, dropdown, validation, and state level using Tailwind classes or inline CSS.",

  blocks: [
    {
      type: "paragraph",
      text: "Formbox provides styling hooks at multiple levels. Start with Formbox-level classes for shared styling, then use field or button-level overrides when individual controls need different treatment.",
    },

    {
      type: "callout",
      tone: "tip",
      title: "Styling hierarchy",
      size: 3,
      text: "Use Formbox-level styling for defaults and field/button-level styling for exceptions. This avoids repeating the same classes throughout your schema.",
    },

    {
      type: "heading",
      level: 3,
      text: "Form-level styling",
    },

    {
      type: "code",
      language: "tsx",
      filename: "Formbox.tsx",
      code: `<Formbox
  containerClassName="..."
  innerContainerClassName="..."
  buttonContainerClassName="..."
  inputClassName="..."
  labelClassName="..."
  requiredClassName="..."
  errorClassName="..."
  focusClassName="..."
  fieldWrapperClassName="..."
  passwordToggleClassName="..."
  schema={schema}
  fields={fields}
/>`,
    },

    {
      type: "table",
      columns: ["Prop", "Use it when..."],
      rows: [
        [
          "containerClassName",
          "You need to change the outer card/form container.",
        ],
        [
          "innerContainerClassName",
          "You need to control internal form spacing or layout.",
        ],
        [
          "buttonContainerClassName",
          "You need to align or space the form buttons.",
        ],
        ["inputClassName", "You want a shared style for form controls."],
        ["labelClassName", "You want consistent label typography."],
        ["requiredClassName", "You want to change the required asterisk."],
        ["errorClassName", "You want consistent validation error styling."],
        ["focusClassName", "You want a shared focus ring/border."],
        [
          "fieldWrapperClassName",
          "You want to control spacing around each field.",
        ],
        [
          "passwordToggleClassName",
          "You want to customize password visibility controls.",
        ],
      ],
    },

    {
      type: "heading",
      level: 3,
      text: "Field-level styling",
    },

    {
      type: "paragraph",
      text: "Every field can override shared styling when one particular control needs a different appearance.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "field.ts",
      code: `{
  name: "username",
  type: "text",
  label: "Username",

  className: "...",
  style: { ... },

  labelClassName: "...",
  requiredClassName: "...",
  errorClassName: "...",
  focusClassName: "...",
}`,
    },

    {
      type: "heading",
      level: 3,
      text: "When global styling is not enough",
    },

    {
      type: "paragraph",
      text: "Use field-level classes when a specific field needs different spacing, color, size, focus behavior, or validation styling.",
    },

    {
      type: "list",
      items: [
        "One input needs a different width",
        "One field needs a different border color",
        "One label needs different typography",
        "One field has a different error appearance",
        "One field needs a custom focus ring",
      ],
    },

    {
      type: "heading",
      level: 3,
      text: "Custom CSS values",
    },

    {
      type: "paragraph",
      text: "Use style when you need an arbitrary CSS value such as a custom hex color, RGB value, exact width, or CSS property that is not convenient to express through your Tailwind utilities.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "field.ts",
      code: `{
  name: "name",
  type: "text",
  className: "rounded-xl",
  style: {
    borderColor: "#6366f1",
    backgroundColor: "#111827",
    color: "#ffffff",
  },
}`,
    },

    {
      type: "heading",
      level: 3,
      text: "className vs style",
    },

    {
      type: "table",
      columns: ["Use", "Recommended"],
      rows: [
        ["Tailwind utility classes", "className"],
        ["Reusable design system styles", "className"],
        ["Dynamic CSS values", "style"],
        ["Custom hex/rgb colors", "style"],
        ["Exact arbitrary CSS values", "style"],
      ],
    },

    {
      type: "callout",
      tone: "info",
      title: "When both are provided",
      size: 4,
      text: "If className and style set the same CSS property, the inline style takes precedence.",
    },

    {
      type: "heading",
      level: 3,
      text: "Select and multiselect styling",
    },

    {
      type: "paragraph",
      text: "Select-based fields have more than one styling surface. Styling the control itself does not necessarily style the opened dropdown.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "select.ts",
      code: `{
  name: "country",
  type: "select",

  className: "...",
  dropdownClassName: "...",
  optionsClassName: "...",
}`,
    },

    {
      type: "table",
      columns: ["Prop", "Controls"],
      rows: [
        ["className", "The select/multiselect control."],
        ["dropdownClassName", "The opened dropdown container."],
        ["optionsClassName", "Options, selected text, and selected tags."],
      ],
    },

    {
      type: "callout",
      tone: "warning",
      title: "Dropdown looks unchanged?",
      size: 4,
      text: "If the select input changes but the opened dropdown does not, style dropdownClassName and optionsClassName separately.",
    },

    {
      type: "heading",
      level: 3,
      text: "Styling buttons",
    },

    {
      type: "code",
      language: "tsx",
      filename: "button.ts",
      code: `{
  name: "Save",
  type: "submit",
  className: "...",
  style: { ... },
  disabledClassName: "...",
}`,
    },

    {
      type: "table",
      columns: ["Prop", "Use it for"],
      rows: [
        ["className", "Normal button appearance."],
        ["style", "Arbitrary CSS values."],
        ["disabledClassName", "Disabled/loading appearance."],
      ],
    },

    {
      type: "heading",
      level: 3,
      text: "Labels and required indicators",
    },

    {
      type: "code",
      language: "tsx",
      filename: "labels.tsx",
      code: `<Formbox
  labelClassName="..."
  requiredClassName="..."
  schema={schema}
  fields={fields}
/>`,
    },

    {
      type: "paragraph",
      text: "Use labelClassName for label typography and requiredClassName for the required indicator. Individual fields can override both values.",
    },

    {
      type: "heading",
      level: 3,
      text: "Validation errors",
    },

    {
      type: "code",
      language: "tsx",
      filename: "errors.tsx",
      code: `<Formbox
  errorClassName="..."
  errorPosition="bottom"
  schema={schema}
  fields={fields}
/>`,
    },

    {
      type: "paragraph",
      text: "Use errorClassName to control error typography, color, spacing, and other visual properties. Use errorPosition when the error needs to appear above or below the field.",
    },

    {
      type: "heading",
      level: 3,
      text: "Focus state",
    },

    {
      type: "code",
      language: "tsx",
      filename: "focus.tsx",
      code: `<Formbox
  focusClassName="..."
  schema={schema}
  fields={fields}
/>`,
    },

    {
      type: "paragraph",
      text: "Use focusClassName when you need to customize the focused field's border, ring, outline, or other focus-related styles.",
    },

    {
      type: "heading",
      level: 3,
      text: "Password toggle",
    },

    {
      type: "code",
      language: "tsx",
      filename: "password.ts",
      code: `{
  name: "password",
  type: "password",
  passwordToggle: true,
  passwordToggleClassName: "...",
}`,
    },

    {
      type: "paragraph",
      text: "Use passwordToggleClassName when the visibility icon needs custom color, hover, spacing, or transition styling.",
    },

    {
      type: "heading",
      level: 3,
      text: "Modal sizing and layout",
    },

    {
      type: "paragraph",
      text: "When a modal feels too narrow, too wide, or incorrectly spaced, start with the container and inner-container styling rather than changing individual fields.",
    },

    {
      type: "list",
      items: [
        "🔎 Modal is too narrow → containerClassName",
        "🔎 Fields have too much/little spacing → innerContainerClassName or fieldWrapperClassName",
        "🔎 Buttons are incorrectly aligned → buttonContainerClassName",
        "🔎 Input width is wrong → field className",
      ],
    },

    {
      type: "heading",
      level: 3,
      text: "Inline form layout",
    },

    {
      type: "paragraph",
      text: "Inline forms can be styled using the same container, inner-container, field, and button classes. The difference is presentation mode, not the styling API.",
    },

    {
      type: "heading",
      level: 3,
      text: "Common styling problems",
    },

    {
      type: "list",
      items: [
        "🔎 Tailwind class is not applying",
        "🔎 Custom hex color is not working",
        "🔎 Input is styled but select dropdown is not",
        "🔎 Select options need different hover styling",
        "🔎 Field-level class needs to override global styling",
        "🔎 Error message styling is not changing",
        "🔎 Required asterisk needs custom color",
        "🔎 Focus ring is not visible",
        "🔎 Password eye icon needs custom styling",
        "🔎 Modal is too narrow or too wide",
        "🔎 Form fields have incorrect spacing",
        "🔎 Buttons are not aligned correctly",
        "🔎 Inline style is overriding Tailwind classes",
      ],
    },

    {
      type: "heading",
      level: 3,
      text: "Deprecated styling property",
    },

    {
      type: "callout",
      tone: "warning",
      title: "optionClassName",
      size: 4,
      text: "optionClassName is a deprecated alias for optionsClassName. Use optionsClassName in new code.",
    },

    {
      type: "callout",
      tone: "tip",
      title: "Recommended styling strategy",
      size: 3,
      text: "Define your common visual system at the Formbox level, override only the fields that need special treatment, and use style for arbitrary CSS values.",
    },
  ],
};
