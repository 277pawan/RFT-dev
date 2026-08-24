import type { DocSection } from "@/data/docs";

export const conditionalFields: DocSection = {
  id: "conditional-fields",
  title: "Conditional Fields",
  description:
    "Build dynamic forms by showing or hiding fields based on another field's value using showWhen.",

  blocks: [
    {
      type: "paragraph",
      text: "Conditional fields allow one field to control the visibility of another. Instead of manually managing state and writing conditional JSX, define the relationship directly in your field configuration.",
    },

    {
      type: "callout",
      tone: "tip",
      title: "Parent → Child",
      size: 3,
      text: "Think of the controlling field as the parent and the conditional field as the child. The child uses showWhen to determine when it should be visible.",
    },

    {
      type: "heading",
      level: 3,
      text: "showWhen",
    },

    {
      type: "paragraph",
      text: "Use showWhen when a field should only appear when another field has a particular value.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "showWhen.ts",
      code: `showWhen: { field: "accountType", equals: "business" },`,
    },

    {
      type: "paragraph",
      text: "field identifies the parent field, while equals identifies the value that should make the child visible.",
    },

    {
      type: "heading",
      level: 3,
      text: "Select → Text field",
    },

    {
      type: "paragraph",
      text: "A select is one of the most common parent fields. Selecting an option can reveal additional fields.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "fields.ts",
      code: `{
  name: "accountType",
  type: "select",
  label: "Account Type",
  options: [
    { label: "Personal", value: "personal" },
    { label: "Business", value: "business" },
  ],
},

{
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
      type: "callout",
      tone: "warning",
      title: "Compare against option.value",
      size: 4,
      text: 'showWhen.equals must match the option value, not the displayed label. For { label: "Business", value: "business" }, use equals: "business".',
    },

    {
      type: "heading",
      level: 3,
      text: "Select with a default value",
    },

    {
      type: "paragraph",
      text: "A select field can start with a predefined option using default. This is particularly useful when a conditional child should be visible as soon as the form is rendered.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "default-select.ts",
      code: `{
  name: "role",
  label: "Select your Role",
  type: "select",

  default: {
    label: "Admin",
    value: ["admin"], // support multiple for multiselect
    // value:"admin",
  },

  options: [
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
    { label: "Editor", value: "editor" },
  ],
},

{
  name: "adminPermissions",
  type: "multiselect",
  label: "Admin Permissions",

  showWhen: {
    field: "role",
    equals: "admin",
  },

  options: [
    { label: "Users", value: "users" },
    { label: "Settings", value: "settings" },
    { label: "Reports", value: "reports" },
  ],
}`,
    },

    {
      type: "callout",
      tone: "info",
      title: "Default + showWhen",
      size: 4,
      text: "Because role starts with the admin value, adminPermissions is visible when the form initially renders. Changing the role changes the conditional field automatically.",
    },

    {
      type: "heading",
      level: 3,
      text: "Searchable select",
    },

    {
      type: "paragraph",
      text: "Use searchable when the parent select contains many options and users need to quickly find a value.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "searchable-select.ts",
      code: `{
  name: "role",
  type: "select",
  label: "Select your Role",
  searchable: true,
  options: [
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
    { label: "Editor", value: "editor" },
  ],
}`,
    },

    {
      type: "heading",
      level: 3,
      text: "maxSelect",
    },

    {
      type: "paragraph",
      text: "Use maxSelect when you need to limit how many options can be selected by an option-based field.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "max-select.ts",
      code: `{
  name: "roles",
  type: "multiselect",
  label: "Roles",
  maxSelect: 3,
  options: [
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
    { label: "Editor", value: "editor" },
    { label: "Reviewer", value: "reviewer" },
  ],
}`,
    },

    {
      type: "heading",
      level: 3,
      text: "Radio → Number field",
    },

    {
      type: "code",
      language: "tsx",
      filename: "radio-condition.ts",
      code: `{
  name: "hasExperience",
  type: "radio",
  label: "Do you have experience?",
  options: [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ],
},

{
  name: "yearsOfExperience",
  type: "number",
  label: "Years of Experience",
  showWhen: {
    field: "hasExperience",
    equals: "yes",
  },
}`,
    },

    {
      type: "heading",
      level: 3,
      text: "Checkbox → Text field",
    },

    {
      type: "paragraph",
      text: "Checkbox conditions are useful when another field should appear after the user enables a boolean option.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "checkbox-condition.ts",
      code: `{
  name: "hasCompany",
  type: "checkbox",
  label: "I represent a company",
},

{
  name: "companyName",
  type: "text",
  label: "Company Name",
  showWhen: {
    field: "hasCompany",
    equals: true,
  },
}`,
    },

    {
      type: "heading",
      level: 3,
      text: "Select → Select",
    },

    {
      type: "paragraph",
      text: "A select can reveal another select. This is useful for dependent choices such as account type → business type or country → region.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "dependent-selects.ts",
      code: `{
  name: "accountType",
  type: "select",
  label: "Account Type",
  options: [
    { label: "Personal", value: "personal" },
    { label: "Business", value: "business" },
  ],
},

{
  name: "businessType",
  type: "select",
  label: "Business Type",
  showWhen: {
    field: "accountType",
    equals: "business",
  },
  options: [
    { label: "Startup", value: "startup" },
    { label: "Enterprise", value: "enterprise" },
  ],
}`,
    },

    {
      type: "heading",
      level: 3,
      text: "Nested conditional fields",
    },

    {
      type: "paragraph",
      text: "A conditional field can become the parent of another conditional field, allowing you to build multi-step decision flows inside one form.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "nested-conditions.ts",
      code: `{
  name: "accountType",
  type: "select",
  options: [
    { label: "Personal", value: "personal" },
    { label: "Business", value: "business" },
  ],
},

{
  name: "businessType",
  type: "select",
  showWhen: {
    field: "accountType",
    equals: "business",
  },
  options: [
    { label: "Startup", value: "startup" },
    { label: "Enterprise", value: "enterprise" },
  ],
},

{
  name: "companySize",
  type: "number",
  showWhen: {
    field: "businessType",
    equals: "enterprise",
  },
}`,
    },

    {
      type: "heading",
      level: 3,
      text: "Conditional fields in inline mode",
    },

    {
      type: "paragraph",
      text: "When Formbox is rendered inline, conditional fields work exactly the same way. The fields configuration does not change; only the Formbox mode changes.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "InlineForm.tsx",
      code: `<Formbox
  mode="inline"
  schema={schema}
  fields={fields}
/>`,
    },

    {
      type: "heading",
      level: 3,
      text: "Conditional fields in modal mode",
    },

    {
      type: "paragraph",
      text: "The same conditional fields can be used inside a modal. Modal visibility is controlled through open and onOpenChange.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "ModalForm.tsx",
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
      text: "When Formbox is rendered by a parent",
    },

    {
      type: "paragraph",
      text: "If your application has a parent component responsible for rendering Formbox, the parent can decide whether the form should be inline or modal.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "FormContainer.tsx",
      code: `function FormContainer({
  mode,
}: {
  mode: "inline" | "modal";
}) {
  return (
    <Formbox
      mode={mode}
      schema={schema}
      fields={fields}
    />
  );
}`,
    },

    {
      type: "paragraph",
      text: "The parent can then choose the presentation:",
    },

    {
      type: "code",
      language: "tsx",
      filename: "Page.tsx",
      code: `<FormContainer mode="inline" />

<FormContainer mode="modal" />`,
    },

    {
      type: "heading",
      level: 3,
      text: "Parent-controlled modal",
    },

    {
      type: "paragraph",
      text: "For a modal form, the parent can own the open state and pass it down to Formbox. This keeps modal state outside the form configuration.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "Page.tsx",
      code: `const [open, setOpen] = useState(false);

return (
  <>
    <button onClick={() => setOpen(true)}>
      Open Form
    </button>

    <Formbox
      mode="modal"
      open={open}
      onOpenChange={setOpen}
      schema={schema}
      fields={fields}
    />
  </>
);`,
    },

    {
      type: "heading",
      level: 3,
      text: "Inline vs modal",
    },

    {
      type: "table",
      columns: ["Mode", "Use when", "Additional state"],
      rows: [
        [
          "inline",
          "The form belongs directly inside the page.",
          "No modal open state required.",
        ],
        [
          "modal",
          "The form should open as an overlay.",
          "Use open and onOpenChange when controlling it externally.",
        ],
      ],
    },

    {
      type: "heading",
      level: 3,
      text: "Common problems",
    },

    {
      type: "list",
      items: [
        "🔎 showWhen does not trigger",
        "🔎 equals does not match the selected value",
        "🔎 Using option.label instead of option.value",
        "🔎 Checkbox condition compares true/false with a string",
        "🔎 Parent field name is incorrect",
        "🔎 Child field is always hidden",
        "🔎 Child field appears for the wrong option",
        "🔎 Default select value does not match showWhen.equals",
        "🔎 Searchable select works but conditional field does not appear",
        "🔎 maxSelect is applied to the wrong field type",
        "🔎 Conditional fields work inline but are being tested with different modal state",
        "🔎 Modal opens but the conditional field has the wrong initial state",
      ],
    },

    {
      type: "callout",
      tone: "tip",
      title: "Debugging checklist",
      size: 3,
      text: "Check the parent field name, inspect its actual value, verify the default value if one exists, and compare that value directly with showWhen.equals. For select fields, compare against option.value rather than option.label.",
    },
  ],
};
