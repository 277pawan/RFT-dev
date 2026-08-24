import type { DocSection } from "@/data/docs";

export const submission: DocSection = {
  id: "submission",
  title: "Forms & Submission",
  description:
    "Handle validated form data, asynchronous requests, loading states, and submission feedback with Formbox.",

  blocks: [
    {
      type: "paragraph",
      text: "Formbox calls onSubmit after the form passes validation. Use the callback to send data to your API, update application state, or perform another action.",
    },

    {
      type: "heading",
      level: 3,
      text: "Basic submission",
    },

    {
      type: "code",
      language: "tsx",
      filename: "Form.tsx",
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
      level: 3,
      text: "Async submission",
    },

    {
      type: "code",
      language: "tsx",
      filename: "AsyncForm.tsx",
      code: `<Formbox
  schema={schema}
  fields={fields}
  onSubmit={async (data) => {
    console.log("Submitting:", data);

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    console.log("Submitted:", data);
  }}
/>;`,
    },

    {
      type: "heading",
      level: 3,
      text: "API requests",
    },

    {
      type: "code",
      language: "tsx",
      filename: "ApiForm.tsx",
      code: `<Formbox
  schema={schema}
  fields={fields}
  onSubmit={async (data) => {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }
  }}
/>;`,
    },

    {
      type: "heading",
      level: 3,
      text: "Submission feedback",
    },

    {
      type: "paragraph",
      text: "Use the built-in toast configuration to communicate loading, success, and error states. Set toast to false when your application already has its own notification system.",
    },

    {
      type: "code",
      language: "tsx",
      filename: "feedback.tsx",
      code: `<Formbox
  toast={{
    loading: "Saving...",
    success: "Saved successfully!",
    error: "Unable to save",
    position: "bottom-right",
  }}
  schema={schema}
  fields={fields}
  onSubmit={handleSubmit}
/>`,
    },

    {
      type: "callout",
      tone: "tip",
      title: "Keep submission logic simple",
      size: 3,
      text: "Let the schema handle validation and let onSubmit handle the actual operation. Avoid duplicating field validation inside your submit handler.",
    },
  ],
};
