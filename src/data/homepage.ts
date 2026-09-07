import type { LucideIcon } from "lucide-react";
import {
  LayoutGrid,
  ShieldCheck,
  Zap,
  CloudUpload,
  ChevronRight,
} from "lucide-react";

export type BadgeTone = "accent" | "pink";

export type SectionIntro = {
  badge: string;
  badgeTone?: BadgeTone;
  title: string;
  description: string;
  align?: "left" | "center";
};

export type FeatureCardData = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone?: BadgeTone;
};

export type EcosystemItem = {
  id: string;
  title: string;
  description: string;
};

export type CodeSnippet = {
  label: string;
  filename: string;
  highlight?: boolean;
  lines: string[];
};

export type StepCard = {
  id: string;
  step: string;
  title: string;
  code: string;
};

export type CommunityCard = {
  id: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  icon: "linkedin" | "github";
};

export const heroContent = {
  badge: "Open source · npm · React + Zod",
  title: "React Form Toaster — schema-driven React forms without boilerplate.",
  description:
    "react-form-toaster is a TypeScript form library: define fields once, validate with Zod, show conditional inputs, and get inline or modal UI plus toast feedback.",
  primaryCta: { label: "Read the docs", href: "/docs" },
  secondaryCta: { label: "Open playground", href: "/playground" },
  installCommand: "npm install react-form-toaster",
  preview: {
    title: "Create an account",
    subtitle: "Enter your details to test the form live.",
    toastMessage: "Toast Success: Form fully type-safe!",
  },
} as const;

export const socialProof = {
  label: "Trusted by developers at forward-thinking companies",
  logos: [
    "Acme",
    "Vercel",
    "Stripe",
    "Linear",
    "Notion",
    "Supabase",
    "Railway",
    "Prisma",
  ],
} as const;

export const whySection: {
  intro: SectionIntro;
  features: FeatureCardData[];
} = {
  intro: {
    badge: "Why React Form Toaster",
    badgeTone: "pink",
    title: "Write a schema. Render a form.",
    description:
      "Formbox turns a Zod schema and a fields array into a working React form — validation, errors, and submit included.",
    align: "left",
  },
  features: [
    {
      id: "declarative",
      title: "Declarative Forms",
      description:
        "Define your fields in a simple config instead of manually wiring every input, onChange, and error state.",
      icon: LayoutGrid,
      tone: "pink",
    },
    {
      id: "schema",
      title: "Schema Validation",
      description:
        "Zod and schema validation integrated directly into the form lifecycle. Type-safe from definition to submission.",
      icon: ShieldCheck,
      tone: "pink",
    },
    {
      id: "dynamic",
      title: "Dynamic Forms",
      description:
        "Conditional fields, field dependencies, dynamic arrays, and computed values — all declarative.",
      icon: Zap,
      tone: "accent",
    },
    {
      id: "uploads",
      title: "File Uploads",
      description:
        "Built-in file upload handling with drag-and-drop, progress tracking, and preview support.",
      icon: CloudUpload,
      tone: "accent",
    },
  ],
};

export const comparisonSection: {
  intro: SectionIntro;
  snippets: CodeSnippet[];
} = {
  intro: {
    badge: "Compare",
    badgeTone: "accent",
    title: "Cut down boilerplate by 50%.",
    description:
      "Stop writing endless state and validation wiring. Let a type-safe config drive your forms cleanly",
    align: "center",
  },

  snippets: [
    {
      label: "Without React Form Toaster",
      filename: "StandardForm.tsx",
      highlight: false,

      lines: [
        'import { useState } from "react";',
        "",
        "export function SignupForm() {",
        '  const [name, setName] = useState("");',
        '  const [email, setEmail] = useState("");',
        "  const [errors, setErrors] = useState({});",
        "",
        "  const handleSubmit = (e) => {",
        "    e.preventDefault();",
        "",
        "    if (name.length < 3) {",
        '      setErrors({ name: "Too short" });',
        "      return;",
        "    }",
        "",
        "    // validate email",
        "    // manage loading state",
        "    // handle errors",
        "    // render inputs",
        "    // render error messages",
        "  };",
        "",
        "  return <form onSubmit={handleSubmit}>...</form>;",
        "}",
      ],
    },

    {
      label: "With React Form Toaster",
      filename: "SignupForm.tsx",
      highlight: true,

      lines: [
        'import Formbox from "react-form-toaster";',
        'import { z } from "zod";',
        "",
        "const schema = z.object({",
        '  name: z.string().min(3, "Too short"),',
        "  email: z.string().email(),",
        "});",
        "",
        "export function SignupForm() {",
        "  return (",
        "    <Formbox",
        "      schema={schema}",
        "      fields={[",
        '        { name: "name", type: "text" },',
        '        { name: "email", type: "email" },',
        "      ]}",
        "      onSubmit={saveUser}",
        "    />",
        "  );",
        "}",

        "",
        "",
        "",
        "",
      ],
    },
  ],
};

export const ecosystemSection: {
  intro: SectionIntro;
  items: EcosystemItem[];
} = {
  intro: {
    badge: "Ecosystem",
    badgeTone: "pink",
    title: "What ships with Formbox.",
    description:
      "Validation, modes, conditional fields, files, toasts, and styling hooks — the features this library actually documents.",
    align: "center",
  },
  items: [
    {
      id: "ts",
      title: "TypeScript + Zod",
      description:
        "Pass a Zod schema into Formbox. Field names line up with schema keys for typed submit data.",
    },
    {
      id: "modes",
      title: "Inline or modal",
      description:
        "The same fields config works as an embedded card or a popup. Switch with the mode prop.",
    },
    {
      id: "arrays",
      title: "Arrays and files",
      description:
        "Repeatable groups and file inputs are field types, not a separate form library.",
    },
    {
      id: "conditional",
      title: "Conditional fields",
      description:
        "showWhen hides or shows a field from another value. No extra React state for visibility.",
    },
    {
      id: "toasts",
      title: "Toasts built in",
      description:
        "Loading, success, and error toasts on submit — or set toast={false} and use your own.",
    },
    {
      id: "styling",
      title: "className and style",
      description:
        "Layout with Tailwind-safe class names; put colors in style so JIT purge does not strip them.",
    },
  ],
};

export const ecosystemIcon = ChevronRight;

export const playgroundTeaser: {
  intro: SectionIntro;
  codeFilename: string;
  previewFilename: string;
  codeLines: string[];
  cta: { label: string; href: string };
} = {
  intro: {
    badge: "Interactive Editor",
    badgeTone: "accent",
    title: "Try it in the Playground",
    description:
      "Edit form configs live and see the result instantly. No setup required.",
    align: "center",
  },
  codeFilename: "schema-editor.ts",
  previewFilename: "Interactive Preview",
  codeLines: [
    "const userSchema = z.object({",
    "  username: z.string().min(5),",
    '  role: z.enum(["admin", "user"]),',
    "  newsletter: z.boolean().default(true)",
    "});",
  ],
  cta: { label: "Open Playground", href: "/playground" },
};

export const gettingStarted: {
  intro: SectionIntro;
  steps: StepCard[];
} = {
  intro: {
    badge: "Get Started",
    badgeTone: "accent",
    title: "Install, configure, render",
    description: "Three steps from npm to a working form. Then read Quick Start for the full example.",
    align: "left",
  },
  steps: [
    {
      id: "install",
      step: "01",
      title: "Install",
      code: "npm install react-form-toaster",
    },
    {
      id: "define",
      step: "02",
      title: "Define",
      code: "<Formbox open={open} schema={schema} />",
    },
    {
      id: "render",
      step: "03",
      title: "Render",
      code: `<Formbox open={open} schema={schema} mode={inline} title={} onSubmit={} fields={[{}]}/>`,
    },
  ],
};

export const communitySection: {
  intro: SectionIntro;
  cards: CommunityCard[];
} = {
  intro: {
    badge: "Join Us",
    badgeTone: "accent",
    title: "Open source, MIT licensed",
    description:
      "Star the repo, open an issue, or message the maintainer. No fake user counts.",
    align: "center",
  },
  cards: [
    {
      id: "linkedin",
      title: "LinkedIn",
      description:
        "Questions about Formbox, schema-driven forms, or contributions — reach the author on LinkedIn.",
      cta: {
        label: "Message on LinkedIn",
        href: "https://www.linkedin.com/in/pawan-bisht-a943161b9/",
      },
      icon: "linkedin",
    },
    {
      id: "github",
      title: "GitHub Contributors",
      description:
        "Have a feature request or bug report? Submit an issue or a pull request.",
      cta: {
        label: "Contribute",
        href: "https://github.com/277pawan/form-builder",
      },
      icon: "github",
    },
  ],
};
