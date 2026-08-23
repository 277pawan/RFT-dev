import type { CodeTabKey } from "@/data/playground/types";

export type DocSection = {
  id: string;
  title: string;
  description?: string;
  presetId?: string;
  codeTab?: CodeTabKey;
  showCode?: boolean;
  showState?: boolean;
};

export type DocsSidebarItem = {
  id: string;
  label: string;
  sectionId?: string;
  description?: string;
  href?: string;
};

export type DocsSidebarGroup = {
  title: string;
  items: DocsSidebarItem[];
};

/** Content blocks — add sections here; sidebar picks them up automatically */
export const docsSections: DocSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    description:
      "React Form Toaster is schema-driven: define fields and Zod validation once, render inline or modal forms without boilerplate.",
  },
  {
    id: "quick-start",
    title: "Quick Start",
    description:
      'Install the package, import Formbox once, then pass schema + fields. Use mode="inline" to embed forms in pages like this docs layout.',
  },
  {
    id: "installation",
    title: "Installation",
    description:
      "Add react-form-toaster to your project with npm or yarn, then import the CSS once in your app entry file.",
  },
  {
    id: "formbox-props",
    title: "Formbox Props",
    description:
      "Core Formbox API: open, mode, schema, fields, buttons, toast, and styling className props for inline and modal forms.",
  },
  {
    id: "api",
    title: "API Reference",
    description:
      "Full prop list for Formbox, FormField, and FormButton. See GitHub README for the complete v2 reference.",
  },
  {
    id: "conditional-fields",
    title: "Conditional Fields",
    description:
      "Hide or show fields based on another field's value. The company field below appears only when account type is business.",
    presetId: "conditional-fields",
    codeTab: "formConfig.ts",
    showCode: false,
    showState: false,
  },
  {
    id: "examples",
    title: "Examples",
    description:
      "Live embeds powered by playground presets. Each example uses the same schema engine as /playground.",
    presetId: "conditional-fields",
    showCode: false,
    showState: false,
  },
  {
    id: "validation",
    title: "Zod Validation",
    description:
      "Pass a Zod schema to Formbox for client-side validation, type-safe submit handlers, and inline error messages.",
  },
  {
    id: "styling",
    title: "Styling & Tailwind",
    description:
      "Use className for layout utilities and style for colors when passing Tailwind classes as prop strings to avoid JIT purging.",
  },
];

/** Sidebar groups — add items here; link sectionId to docsSections.id */
export const docsSidebarGroups: DocsSidebarGroup[] = [
  {
    title: "Getting Started",
    items: [
      { id: "introduction", label: "Introduction", sectionId: "introduction" },
      { id: "quick-start", label: "Quick Start", sectionId: "quick-start" },
      { id: "installation", label: "Installation", sectionId: "installation" },
    ],
  },
  {
    title: "Core API",
    items: [
      { id: "formbox-props", label: "Formbox Props", sectionId: "formbox-props" },
      { id: "api", label: "API Reference", sectionId: "api" },
      { id: "validation", label: "Zod Validation", sectionId: "validation" },
      { id: "styling", label: "Styling & Tailwind", sectionId: "styling" },
    ],
  },
  {
    title: "Guides",
    items: [
      {
        id: "conditional-fields",
        label: "Conditional Fields",
        sectionId: "conditional-fields",
      },
      { id: "examples", label: "Examples", sectionId: "examples" },
    ],
  },
  {
    title: "Resources",
    items: [
      { id: "playground", label: "Playground", href: "/playground" },
    ],
  },
];

/** @deprecated use docsSidebarGroups */
export const docsNav = docsSidebarGroups.flatMap((group) =>
  group.items.map((item) => ({
    id: item.id,
    label: item.label,
    href: item.href ?? `#${item.sectionId ?? item.id}`,
  })),
);
