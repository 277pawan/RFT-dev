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
  badge: "Introducing Version 2.0",
  title: "Build powerful React forms without repetitive form code.",
  description:
    "A declarative, schema-driven form library for React. Define your fields, validate with Zod, and ship forms in minutes — not hours.",
  primaryCta: { label: "Get Started", href: "/docs" },
  secondaryCta: { label: "Playground", href: "/playground" },
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
    title: "Write schemas, not boilerplate.",
    description:
      "The easiest way to render robust forms in React without dropping performance or type-safety.",
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
    title: "Batteries included.",
    description: "Everything you expect from an enterprise-grade form engine.",
    align: "center",
  },
  items: [
    {
      id: "ts",
      title: "TypeScript First",
      description:
        "Full type inference from your schema to your submit handler.",
    },
    {
      id: "headless",
      title: "Headless UI",
      description: "Bring your own components or use built-in styled fields.",
    },
    {
      id: "arrays",
      title: "Form Arrays",
      description: "Add, remove, reorder dynamic field groups with ease.",
    },
    {
      id: "multistep",
      title: "Multi-Step Forms",
      description: "Built-in wizard/stepper with per-step validation.",
    },
    {
      id: "async",
      title: "Async Validation",
      description: "Server-side checks like email uniqueness, built in.",
    },
    {
      id: "zero",
      title: "Zero Dependencies",
      description: "Tiny bundle size. Only peer-dep is React itself.",
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
    title: "Up and running in three steps",
    description: "",
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
    title: "Built for the developer community",
    description:
      "Open source under the MIT License. Join my thriving Linkedin and help build the future of forms.",
    align: "center",
  },
  cards: [
    {
      id: "linkedin",
      title: "Linkedin Community",
      description:
        "Get help, share configs, and show off your forms with over 5,000 developers.",
      cta: {
        label: "Message me in Linkedin",
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
