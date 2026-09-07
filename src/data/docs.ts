import type { CodeTabKey } from "@/data/playground/types";
import type { CodeLanguage } from "@/lib/prism";

export type DocBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level?: 3 | 4; text: string }
  | { type: "code"; code: string; language?: CodeLanguage; filename?: string }
  | {
      type: "callout";
      tone: "info" | "tip" | "warning";
      title?: string;
      size?: 3 | 4;
      text: string;
    }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "table"; columns: string[]; rows: string[][] }
  | {
      type: "tabs";
      tabs: { id: string; label: string; blocks: DocBlock[] }[];
    }
  | { type: "image"; src: string; alt: string; caption?: string }
  | {
      type: "example";
      presetId: string;
      title?: string;
      description?: string;
      codeTab?: CodeTabKey;
      showCode?: boolean;
      showState?: boolean;
    };

export type DocSection = {
  id: string;
  title: string;
  description?: string;
  blocks?: DocBlock[];
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

import { docsSections } from "@/data/docs/sections";

export { docsSections };

/** Sidebar groups — add items here; link sectionId to docsSections.id */
export const docsSidebarGroups: DocsSidebarGroup[] = [
  {
    title: "Getting Started",
    items: [
      {
        id: "introduction",
        label: "Introduction",
        sectionId: "introduction",
      },
      {
        id: "quick-start",
        label: "Quick Start",
        sectionId: "quick-start",
      },
    ],
  },

  {
    title: "Core Concepts",
    items: [
      {
        id: "form-schema",
        label: "Form Schema",
        sectionId: "form-schema",
      },
      {
        id: "fields",
        label: "Fields & Field Types",
        sectionId: "fields",
      },
      {
        id: "formbox-props",
        label: "Formbox Props",
        sectionId: "formbox-props",
      },
      {
        id: "api",
        label: "API Reference",
        sectionId: "api",
      },
    ],
  },

  {
    title: "Features & Guides",
    items: [
      {
        id: "validation",
        label: "Zod Validation",
        sectionId: "validation",
      },
      {
        id: "submission",
        label: "Forms & Submission",
        sectionId: "submission",
      },
      {
        id: "conditional-fields",
        label: "Conditional Fields",
        sectionId: "conditional-fields",
      },
      {
        id: "styling",
        label: "Styling & Customization",
        sectionId: "styling",
      },
    ],
  },

  {
    title: "Examples",
    items: [
      {
        id: "examples",
        label: "Examples",
        sectionId: "examples",
      },
    ],
  },

  {
    title: "Resources",
    items: [
      {
        id: "playground",
        label: "Playground",
        href: "/playground",
      },
    ],
  },
];

/** @deprecated use docsSidebarGroups */
export const docsNav = docsSidebarGroups.flatMap((group) =>
  group.items.map((item) => ({
    id: item.id,
    label: item.label,
    href: item.href ?? `/docs/${item.sectionId ?? item.id}`,
  })),
);
