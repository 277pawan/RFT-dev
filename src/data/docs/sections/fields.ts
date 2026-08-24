import type { DocSection } from "@/data/docs";

export const fields: DocSection = {
  id: "fields",
  title: "Fields & Field Types",
  description:
    "Build different form controls through configuration. Define each field with JSON-style objects and let Formbox handle rendering, state, and field wiring.",

  blocks: [
    {
      type: "paragraph",
      text: "Fields are the building blocks of a Formbox form. Instead of manually creating inputs, attaching event handlers, managing their values, and connecting them to validation, you describe each field through configuration.",
    },

    {
      type: "callout",
      tone: "tip",
      title: "The idea",
      size: 3,
      text: "Different fields can have completely different configurations, but the approach stays the same: define the field and let Formbox handle the implementation.",
    },

    {
      type: "heading",
      level: 3,
      text: "Basic field structure",
    },

    {
      type: "code",
      language: "tsx",
      filename: "fields.ts",
      code: `const fields = [
  {
    name: "fullName",
    type: "text",
    label: "Full Name",
    placeholder: "Enter your full name",
    required: true,
  },
];`,
    },

    {
      type: "paragraph",
      text: "The name identifies the field, while type determines which control Formbox renders. Other properties customize the field's label, placeholder, validation-related behavior, styling, and options.",
    },

    {
      type: "heading",
      level: 3,
      text: "Text",
    },

    {
      type: "paragraph",
      text: "Use the text field for general single-line values such as names, usernames, titles, or other short pieces of information.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "text-field.ts",
      code: `{
  name: "fullName",
  type: "text",
  label: "Full Name",
  placeholder: "Enter your full name",
  required: true,
}`,
    },

    {
      type: "heading",
      level: 3,
      text: "Password",
    },

    {
      type: "paragraph",
      text: "Use the password field when the value should be entered as a protected password input.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "password-field.ts",
      code: `{
  name: "password",
  type: "password",
  label: "Password",
  placeholder: "Enter your password",
  required: true,
}`,
    },

    {
      type: "heading",
      level: 3,
      text: "Number",
    },

    {
      type: "paragraph",
      text: "Use the number field for numeric values such as age, quantity, years of experience, or an amount.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "number-field.ts",
      code: `{
  name: "experience",
  type: "number",
  label: "Years of Experience",
  placeholder: "Enter years",
}`,
    },

    {
      type: "heading",
      level: 3,
      text: "Textarea",
    },

    {
      type: "paragraph",
      text: "Use textarea when users need to provide longer, multi-line content such as descriptions, comments, feedback, or a biography.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "textarea-field.ts",
      code: `{
  name: "bio",
  type: "textarea",
  label: "About You",
  placeholder: "Tell us a little about yourself...",
}`,
    },

    {
      type: "heading",
      level: 3,
      text: "Select",
    },

    {
      type: "paragraph",
      text: "Use select when the user should choose exactly one value from a predefined list of options.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "select-field.ts",
      code: `{
  name: "country",
  type: "select",
  label: "Country",
  options: [
    { label: "India", value: "india" },
    { label: "United States", value: "usa" },
    { label: "United Kingdom", value: "uk" },
  ],
}`,
    },

    {
      type: "callout",
      tone: "info",
      title: "Single selection",
      size: 4,
      text: "A select field represents one selected value. Use multiselect when the user needs to choose more than one option.",
    },

    {
      type: "heading",
      level: 3,
      text: "Multiselect",
    },

    {
      type: "paragraph",
      text: "Use multiselect when users can choose multiple values from the same list. This is useful for skills, tags, interests, technologies, or categories.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "multiselect-field.ts",
      code: `{
  name: "skills",
  type: "multiselect",
  label: "Skills",
  options: [
    { label: "React", value: "react" },
    { label: "Node.js", value: "node" },
    { label: "TypeScript", value: "typescript" },
    { label: "Go", value: "go" },
  ],
}`,
    },

    {
      type: "paragraph",
      text: "The selected value is represented as a collection of values rather than a single value, making it easy to validate with an array schema.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "multiselect-schema.ts",
      code: `const schema = z.object({
  skills: z.array(z.string()).min(1, "Select at least one skill"),
});`,
    },

    {
      type: "heading",
      level: 3,
      text: "Radio",
    },

    {
      type: "paragraph",
      text: "Use radio fields when users need to select exactly one option and you want all available choices to remain visible.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "radio-field.ts",
      code: `{
  name: "experienceLevel",
  type: "radio",
  label: "Experience Level",
  options: [
    { label: "Junior", value: "junior" },
    { label: "Mid-level", value: "mid" },
    { label: "Senior", value: "senior" },
  ],
}`,
    },

    {
      type: "paragraph",
      text: "Radio fields are useful when the number of choices is small and showing all choices at once provides a better experience than opening a select menu.",
    },

    {
      type: "heading",
      level: 3,
      text: "Checkbox",
    },

    {
      type: "paragraph",
      text: "Use a checkbox for boolean values such as enabling notifications, accepting terms, or turning an option on or off.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "checkbox-field.ts",
      code: `{
  name: "notifications",
  type: "checkbox",
  label: "Enable notifications",
}`,
    },

    {
      type: "code",
      language: "tsx",
      filename: "checkbox-schema.ts",
      code: `const schema = z.object({
  notifications: z.boolean(),
});`,
    },

    {
      type: "heading",
      level: 3,
      text: "Options-based fields",
    },

    {
      type: "paragraph",
      text: "Select, multiselect, and radio fields use options to describe the choices available to the user. Each option contains a value used by the form and a label displayed in the UI.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "options.ts",
      code: `const options = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
];`,
    },

    {
      type: "table",
      columns: ["Field", "Selection", "Typical use"],
      rows: [
        ["Text", "Single value", "Name, username, title"],
        ["Password", "Single value", "Password"],
        ["Number", "Single numeric value", "Age, quantity, experience"],
        ["Textarea", "Multi-line value", "Bio, description, comments"],
        ["Select", "One option", "Country, category, status"],
        ["Multiselect", "Multiple options", "Skills, tags, interests"],
        ["Radio", "One option", "Experience, plan, preference"],
        ["Checkbox", "Boolean value", "Notifications, terms, preferences"],
      ],
    },

    {
      type: "heading",
      level: 3,
      text: "Fields and schemas work together",
    },

    {
      type: "paragraph",
      text: "Field configuration controls how the user enters the data, while the schema defines what that data should look like and which values are valid.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "profile-form.tsx",
      code: `const schema = z.object({
  fullName: z.string().min(2),
  country: z.string(),
  skills: z.array(z.string()).min(1),
  experienceLevel: z.enum([
    "junior",
    "mid",
    "senior",
  ]),
  notifications: z.boolean(),
  bio: z.string().max(500).optional(),
});

const fields = [
  {
    name: "fullName",
    type: "text",
    label: "Full Name",
  },
  {
    name: "country",
    type: "select",
    label: "Country",
    options: [
      { label: "India", value: "india" },
      { label: "United States", value: "usa" },
    ],
  },
  {
    name: "skills",
    type: "multiselect",
    label: "Skills",
    options: [
      { label: "React", value: "react" },
      { label: "Node.js", value: "node" },
      { label: "TypeScript", value: "typescript" },
    ],
  },
  {
    name: "experienceLevel",
    type: "radio",
    label: "Experience",
    options: [
      { label: "Junior", value: "junior" },
      { label: "Mid-level", value: "mid" },
      { label: "Senior", value: "senior" },
    ],
  },
  {
    name: "notifications",
    type: "checkbox",
    label: "Enable notifications",
  },
  {
    name: "bio",
    type: "textarea",
    label: "About You",
  },
];

<Formbox
  schema={schema}
  fields={fields}
/>;`,
    },

    {
      type: "callout",
      tone: "tip",
      title: "Different fields, same approach",
      size: 3,
      text: "Text inputs, selects, multiselects, radio groups, checkboxes, and textareas can all be described through field configuration. You choose the field type; Formbox handles the underlying UI and state wiring.",
    },

    {
      type: "heading",
      level: 3,
      text: "Customizing fields",
    },

    {
      type: "paragraph",
      text: "Each form can have its own field configuration. You can customize individual fields without changing how the rest of your application manages forms.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "custom-field.ts",
      code: `{
  name: "bio",
  type: "textarea",
  label: "About You",
  placeholder: "Tell us about yourself...",
  className: "my-custom-field",
}`,
    },

    {
      type: "callout",
      tone: "info",
      title: "Keep field configuration declarative",
      size: 3,
      text: "You should not need to manually create every input, manage every value, or write change handlers for each control. Describe the field and let Formbox handle the repetitive wiring.",
    },

    {
      type: "heading",
      level: 3,
      text: "What's next?",
    },

    {
      type: "paragraph",
      text: "Now that you understand field configuration, explore Formbox Props to customize the form itself, or continue with Zod Validation to learn how schemas control validation and errors.",
    },
  ],
};
