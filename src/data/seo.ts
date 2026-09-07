import { site } from "./site";

export type SeoPage = {
  path: string;
  title: string;
  description: string;
};

export const defaultSeo: SeoPage = {
  path: "/",
  title: "React Form Toaster — Schema-Driven React Forms",
  description: site.description,
};

export const seoPages: SeoPage[] = [
  defaultSeo,
  {
    path: "/docs",
    title: "Documentation — React Form Toaster",
    description:
      "Install React Form Toaster, define Zod schemas and fields, and learn validation, conditional fields, styling, API reference, and live examples.",
  },
  {
    path: "/docs/introduction",
    title: "Introduction — React Form Toaster Docs",
    description:
      "What React Form Toaster is: a schema-driven React form library with Zod validation, inline or modal forms, and built-in toast feedback.",
  },
  {
    path: "/docs/quick-start",
    title: "Quick Start — React Form Toaster Docs",
    description:
      "Install react-form-toaster and build your first schema-driven form with fields, Zod validation, and Formbox in a few steps.",
  },
  {
    path: "/docs/form-schema",
    title: "Form Schema — React Form Toaster Docs",
    description:
      "Connect a Zod schema to Formbox so field names, types, and validation rules stay in sync.",
  },
  {
    path: "/docs/fields",
    title: "Fields & Field Types — React Form Toaster Docs",
    description:
      "Configure text, email, select, radio, file, array, and other Formbox field types with labels, placeholders, and options.",
  },
  {
    path: "/docs/formbox-props",
    title: "Formbox Props — React Form Toaster Docs",
    description:
      "Complete Formbox prop reference: mode, schema, fields, buttons, toasts, classNames, and styling hooks.",
  },
  {
    path: "/docs/api",
    title: "API Reference — React Form Toaster Docs",
    description:
      "Concise API reference for Formbox, FormField, FormButton, showWhen, and toast configuration.",
  },
  {
    path: "/docs/validation",
    title: "Zod Validation — React Form Toaster Docs",
    description:
      "Validate React forms with Zod: required fields, emails, enums, refine, transforms, and custom error messages.",
  },
  {
    path: "/docs/submission",
    title: "Forms & Submission — React Form Toaster Docs",
    description:
      "Handle Formbox submit, async requests, loading states, and success or error toasts.",
  },
  {
    path: "/docs/conditional-fields",
    title: "Conditional Fields — React Form Toaster Docs",
    description:
      "Show or hide Formbox fields with showWhen based on another field's value.",
  },
  {
    path: "/docs/styling",
    title: "Styling & Customization — React Form Toaster Docs",
    description:
      "Style Formbox with className, style, Tailwind, and dropdown or option class names.",
  },
  {
    path: "/docs/examples",
    title: "Examples — React Form Toaster Docs",
    description:
      "Live React Form Toaster examples: contact form, conditional fields, newsletter signup, and feedback forms.",
  },
  {
    path: "/playground",
    title: "Playground — React Form Toaster",
    description:
      "Try React Form Toaster in the browser. Edit Zod schemas and field config, toggle inline or modal, and submit a live form.",
  },
];

export const seoByPath = Object.fromEntries(
  seoPages.map((page) => [page.path, page]),
) as Record<string, SeoPage>;

export function resolveSeo(pathname: string): SeoPage {
  if (seoByPath[pathname]) return seoByPath[pathname];
  return {
    path: pathname.startsWith("/") ? pathname : `/${pathname}`,
    title: site.title,
    description: site.description,
  };
}
