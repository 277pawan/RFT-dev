import { motion } from "framer-motion";
import {
  Check,
  Code2,
  FileUp,
  GitBranch,
  Layers3,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

type ComparisonValue =
  | {
      type: "check";
      text?: string;
    }
  | {
      type: "x";
      text?: string;
    }
  | {
      type: "text";
      text: string;
    };

type ComparisonRow = {
  label: string;
  description?: string;
  reactHookForm: ComparisonValue;
  tanStackForm: ComparisonValue;
  reactFormToaster: ComparisonValue;
};

const comparisonRows: ComparisonRow[] = [
  {
    label: "Form state",
    reactHookForm: {
      type: "text",
      text: "Excellent",
    },
    tanStackForm: {
      type: "text",
      text: "Excellent",
    },
    reactFormToaster: {
      type: "text",
      text: "Built-in",
    },
  },
  {
    label: "TypeScript support",
    reactHookForm: {
      type: "text",
      text: "Excellent",
    },
    tanStackForm: {
      type: "text",
      text: "Excellent",
    },
    reactFormToaster: {
      type: "text",
      text: "Strong",
    },
  },
  {
    label: "Schema validation",
    description: "Connect a validation schema to the form.",
    reactHookForm: {
      type: "text",
      text: "Via resolver",
    },
    tanStackForm: {
      type: "text",
      text: "Schema integration",
    },
    reactFormToaster: {
      type: "check",
      text: "Zod",
    },
  },
  {
    label: "Schema-driven UI",
    description: "Use configuration to describe the form UI.",
    reactHookForm: {
      type: "x",
      text: "Manual",
    },
    tanStackForm: {
      type: "x",
      text: "Manual",
    },
    reactFormToaster: {
      type: "check",
      text: "Built-in",
    },
  },
  {
    label: "Conditional fields",
    description: "Show or hide fields from another field's value.",
    reactHookForm: {
      type: "x",
      text: "Manual",
    },
    tanStackForm: {
      type: "x",
      text: "Manual",
    },
    reactFormToaster: {
      type: "check",
      text: "Built-in",
    },
  },
  {
    label: "Dynamic form generation",
    description: "Generate forms from field configuration.",
    reactHookForm: {
      type: "x",
      text: "Manual",
    },
    tanStackForm: {
      type: "x",
      text: "Manual",
    },
    reactFormToaster: {
      type: "check",
      text: "Built-in",
    },
  },
  {
    label: "File upload UI",
    description: "Ready-to-use upload field and interaction.",
    reactHookForm: {
      type: "x",
      text: "Custom UI",
    },
    tanStackForm: {
      type: "x",
      text: "Custom UI",
    },
    reactFormToaster: {
      type: "check",
      text: "Built-in",
    },
  },
  {
    label: "Confirmation UI",
    description: "Confirmation-oriented form interactions.",
    reactHookForm: {
      type: "x",
      text: "Custom UI",
    },
    tanStackForm: {
      type: "x",
      text: "Custom UI",
    },
    reactFormToaster: {
      type: "check",
      text: "Built-in",
    },
  },
  {
    label: "Toast workflow",
    description: "Built-in loading, success, and error feedback.",
    reactHookForm: {
      type: "x",
      text: "Custom",
    },
    tanStackForm: {
      type: "x",
      text: "Custom",
    },
    reactFormToaster: {
      type: "check",
      text: "Built-in",
    },
  },
  {
    label: "Default form UI",
    description: "Useful UI without building every control yourself.",
    reactHookForm: {
      type: "x",
    },
    tanStackForm: {
      type: "x",
    },
    reactFormToaster: {
      type: "check",
    },
  },
];

const features = [
  {
    icon: Code2,
    title: "Schema → UI",
    description:
      "Describe fields in configuration instead of repeatedly writing the same JSX.",
  },
  {
    icon: GitBranch,
    title: "Conditional fields",
    description:
      "Build parent → child relationships with showWhen instead of manual state plumbing.",
  },
  {
    icon: FileUp,
    title: "File uploads",
    description:
      "File fields come with the UI and configuration needed for common upload flows.",
  },
  {
    icon: MessageSquare,
    title: "Feedback included",
    description:
      "Loading, success, and error feedback can be handled through the built-in toast workflow.",
  },
  {
    icon: ShieldCheck,
    title: "Zod validation",
    description:
      "Keep validation in a schema and let the form handle the connection between fields and errors.",
  },
  {
    icon: Layers3,
    title: "One configuration",
    description:
      "Use the same field definitions whether the form is rendered inline or inside a modal.",
  },
];

function ComparisonValue({
  value,
  highlighted = false,
}: {
  value: ComparisonValue;
  highlighted?: boolean;
}) {
  if (value.type === "check") {
    return (
      <div
        className={`flex items-center justify-center gap-2 ${
          highlighted ? "text-violet-300" : "text-emerald-300"
        }`}
      >
        <Check className="h-4 w-4 shrink-0" />
        {value.text && (
          <span className="text-sm font-medium">{value.text}</span>
        )}
      </div>
    );
  }

  if (value.type === "x") {
    return (
      <div className="flex items-center justify-center gap-2 text-slate-500">
        <X className="h-4 w-4 shrink-0" />
        {value.text && (
          <span className="text-sm font-medium">{value.text}</span>
        )}
      </div>
    );
  }

  return (
    <span
      className={`text-sm font-medium ${
        highlighted ? "text-violet-200" : "text-slate-300"
      }`}
    >
      {value.text}
    </span>
  );
}

export default function WhyReactFormToaster() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08090f] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="absolute bottom-[15%] left-[-200px] h-[400px] w-[400px] rounded-full bg-fuchsia-600/5 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-3 py-1 text-xs font-medium text-violet-300">
            <Sparkles className="h-3.5 w-3.5" />
            Why React Form Toaster?
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Stop building the same
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent">
              form infrastructure.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            React Hook Form and TanStack Form are excellent tools for managing
            form state. React Form Toaster takes a different approach: describe
            the form once and let the library handle the UI, validation,
            conditional fields, feedback, and common form interactions.
          </p>
        </motion.section>

        {/* Problem */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-8">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-red-400/20 bg-red-400/10">
                <Zap className="h-4 w-4 text-red-300" />
              </div>

              <div>
                <h2 className="font-semibold">The usual form workflow</h2>
                <p className="mt-1 text-sm text-slate-500">
                  More pieces to connect before the form is actually usable.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                "Manage form state",
                "Build every field UI",
                "Wire validation",
                "Handle conditional rendering",
                "Build upload UI",
                "Connect notifications",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.25,
                  }}
                  className="rounded-xl border border-white/[0.06] bg-black/20 px-4 py-3 text-sm text-slate-400"
                >
                  <span className="mr-2 text-slate-600">0{index + 1}</span>
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-24 max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
            Different layer
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            You define the form.
            <span className="text-slate-500"> We render the machinery.</span>
          </h2>

          <p className="mt-5 text-slate-400">
            React Form Toaster isn't trying to replace every form-state library.
            It focuses on reducing the amount of UI and wiring you have to build
            around your form logic.
          </p>
        </motion.section>

        {/* Comparison */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0d15]/90 shadow-2xl shadow-black/20">
            {/* Table header */}
            <div className="grid grid-cols-[1.45fr_1fr_1fr_1.15fr] border-b border-white/[0.07]">
              <div className="p-5 sm:p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-600">
                  Capability
                </span>
              </div>

              <div className="border-l border-white/[0.05] p-5 text-center sm:p-6">
                <p className="text-sm font-semibold text-slate-300">
                  React Hook Form
                </p>
                <p className="mt-1 text-[11px] text-slate-600">Form state</p>
              </div>

              <div className="border-l border-white/[0.05] p-5 text-center sm:p-6">
                <p className="text-sm font-semibold text-slate-300">
                  TanStack Form
                </p>
                <p className="mt-1 text-[11px] text-slate-600">Form state</p>
              </div>

              <div className="relative border-l border-violet-400/20 bg-violet-500/[0.045] p-5 text-center sm:p-6">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />

                <p className="text-sm font-semibold text-violet-200">
                  React Form Toaster
                </p>

                <p className="mt-1 text-[11px] text-violet-400/70">
                  UI + form workflow
                </p>
              </div>
            </div>

            {/* Rows */}
            {comparisonRows.map((row, index) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: Math.min(index * 0.025, 0.3),
                }}
                className="grid grid-cols-[1.45fr_1fr_1fr_1.15fr] border-b border-white/[0.045] last:border-b-0"
              >
                <div className="p-4 sm:px-6 sm:py-5">
                  <p className="text-sm font-medium text-slate-200">
                    {row.label}
                  </p>

                  {row.description && (
                    <p className="mt-1 max-w-xs text-[11px] leading-4 text-slate-600">
                      {row.description}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-center border-l border-white/[0.045] p-4">
                  <ComparisonValue value={row.reactHookForm} />
                </div>

                <div className="flex items-center justify-center border-l border-white/[0.045] p-4">
                  <ComparisonValue value={row.tanStackForm} />
                </div>

                <div className="relative flex items-center justify-center border-l border-violet-400/[0.12] bg-violet-500/[0.025] p-4">
                  <ComparisonValue value={row.reactFormToaster} highlighted />
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-5 text-slate-600">
            This comparison focuses on the libraries' primary scope and
            documented capabilities, not performance benchmarks or overall
            quality. React Hook Form and TanStack Form are powerful choices when
            you want to build and control your own form UI.
          </p>
        </motion.section>

        {/* Feature grid */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="mt-28"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-fuchsia-400">
              What's included
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Batteries included.
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              The goal isn't to hide your form logic. It's to remove the
              repetitive UI and plumbing around it.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.2 },
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.35,
                  }}
                  className="group rounded-2xl border border-white/[0.06] bg-[#0d0e17] p-5 transition-colors hover:border-violet-400/20 hover:bg-violet-500/[0.025]"
                >
                  <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/10 bg-violet-400/5">
                    <Icon className="h-4 w-4 text-violet-300 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="text-sm font-semibold text-slate-200">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Code philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="mt-28"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
              Less plumbing
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Define the form.
              <br />
              Not every HTML element.
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Your schema and field configuration become the source of truth.
              The UI follows from that configuration.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0b0c13]">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-white/[0.06] md:border-b-0 md:border-r">
                <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
                  <div className="h-2 w-2 rounded-full bg-red-400/70" />
                  <span className="text-[11px] text-slate-600">
                    Traditional approach
                  </span>
                </div>

                <pre className="overflow-x-auto p-5 text-[11px] leading-6 text-slate-600">
                  {`const [role, setRole] = useState("");

return (
  <>
    <select
      value={role}
      onChange={(e) =>
        setRole(e.target.value)
      }
    >
      ...
    </select>

    {role === "admin" && (
      <AdminPermissions />
    )}
  </>
);`}
                </pre>
              </div>

              <div>
                <div className="flex items-center gap-2 border-b border-violet-400/10 px-4 py-3">
                  <div className="h-2 w-2 rounded-full bg-violet-400" />
                  <span className="text-[11px] text-violet-300">
                    React Form Toaster
                  </span>
                </div>

                <pre className="overflow-x-auto p-5 text-[11px] leading-6 text-violet-200/70">
                  {`{
  name: "adminPermissions",
  type: "multiselect",
  showWhen: {
    field: "role",
    equals: "admin",
  },
  options: [...]
}`}
                </pre>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-28 max-w-3xl text-center"
        >
          <div className="relative overflow-hidden rounded-3xl border border-violet-400/15 bg-violet-500/[0.04] px-6 py-14 sm:px-10">
            <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-96 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10">
                <Sparkles className="h-5 w-5 text-violet-300" />
              </div>

              <h2 className="mt-5 text-3xl font-bold">
                Your next form can be configuration.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500">
                Keep using a full form-state library when you need one. Choose
                React Form Toaster when you want the UI and common form
                workflows to come with the configuration.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="#quick-start"
                  className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
                >
                  Get Started
                </a>

                <a
                  href="#playground"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/[0.06]"
                >
                  Try the Playground
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
