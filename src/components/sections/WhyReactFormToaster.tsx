import { motion } from "framer-motion";
import { Check, Layers3, X } from "lucide-react";

type ComparisonValue = {
  value: string;
  supported: boolean;
};

type ComparisonRow = {
  title: string;
  description: string;
  reactHookForm: ComparisonValue;
  tanStackForm: ComparisonValue;
  reactFormToaster: ComparisonValue;
};

const comparisonRows: ComparisonRow[] = [
  {
    title: "Form state management",
    description: "Track values, touched state, errors, and submission state.",
    reactHookForm: { value: "Excellent", supported: true },
    tanStackForm: { value: "Excellent", supported: true },
    reactFormToaster: { value: "Built-in", supported: true },
  },
  {
    title: "Input wiring",
    description:
      "Connect inputs to form state without repeating field plumbing.",
    reactHookForm: { value: "Handled", supported: true },
    tanStackForm: { value: "Handled", supported: true },
    reactFormToaster: { value: "Configuration", supported: true },
  },
  {
    title: "Repeated field state",
    description: "Avoid creating separate state management for every field.",
    reactHookForm: { value: "Reduced", supported: true },
    tanStackForm: { value: "Reduced", supported: true },
    reactFormToaster: { value: "Built-in", supported: true },
  },
  {
    title: "Schema-driven UI",
    description: "Use configuration to describe what the form should render.",
    reactHookForm: { value: "Custom", supported: false },
    tanStackForm: { value: "Custom", supported: false },
    reactFormToaster: { value: "Built-in", supported: true },
  },
  {
    title: "Conditional UI",
    description: "Show and hide fields based on other field values.",
    reactHookForm: { value: "Custom", supported: false },
    tanStackForm: { value: "Custom", supported: false },
    reactFormToaster: { value: "Built-in", supported: true },
  },
  {
    title: "Dynamic form generation",
    description: "Generate form UI from reusable field configuration.",
    reactHookForm: { value: "Custom", supported: false },
    tanStackForm: { value: "Custom", supported: false },
    reactFormToaster: { value: "Built-in", supported: true },
  },
  {
    title: "Validation error UI",
    description: "Connect validation errors to rendered form fields.",
    reactHookForm: { value: "Build UI", supported: true },
    tanStackForm: { value: "Build UI", supported: true },
    reactFormToaster: { value: "Built-in", supported: true },
  },
  {
    title: "Async submission",
    description: "Handle API requests and asynchronous submit operations.",
    reactHookForm: { value: "Supported", supported: true },
    tanStackForm: { value: "Supported", supported: true },
    reactFormToaster: { value: "Supported", supported: true },
  },
  {
    title: "Loading / success / error feedback",
    description: "Connect submission state to user-facing feedback.",
    reactHookForm: { value: "Custom", supported: false },
    tanStackForm: { value: "Custom", supported: false },
    reactFormToaster: { value: "Built-in workflow", supported: true },
  },
  {
    title: "Form UI",
    description:
      "Get usable form controls without building the UI layer yourself.",
    reactHookForm: { value: "Bring your UI", supported: false },
    tanStackForm: { value: "Bring your UI", supported: false },
    reactFormToaster: { value: "Included", supported: true },
  },
  {
    title: "Modal presentation",
    description:
      "Render the same form configuration as a modal or inline form.",
    reactHookForm: { value: "Custom", supported: false },
    tanStackForm: { value: "Custom", supported: false },
    reactFormToaster: { value: "Built-in", supported: true },
  },
  {
    title: "Styling hooks",
    description: "Customize controls without replacing the entire UI layer.",
    reactHookForm: { value: "Your UI system", supported: true },
    tanStackForm: { value: "Your UI system", supported: true },
    reactFormToaster: { value: "Built-in hooks", supported: true },
  },
];

function ComparisonCell({
  item,
  highlighted = false,
}: {
  item: ComparisonValue;
  highlighted?: boolean;
}) {
  return (
    <div className="flex items-center justify-center gap-2 text-center">
      {item.supported ? (
        <Check
          className={`h-4 w-4 shrink-0 ${
            highlighted ? "text-violet-300" : "text-emerald-400"
          }`}
        />
      ) : (
        <X className="h-4 w-4 shrink-0 text-slate-600" />
      )}

      <span
        className={`text-xs font-medium sm:text-sm ${
          highlighted ? "text-violet-200" : "text-slate-400"
        }`}
      >
        {item.value}
      </span>
    </div>
  );
}

export default function WhyReactFormToaster() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08090f] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-300px] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[150px]" />

        <div className="absolute bottom-[15%] left-[-200px] h-[450px] w-[450px] rounded-full bg-fuchsia-600/[0.04] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5  sm:px-8 lg:px-10">
        {/* =========================================================
            COMPARISON
        ========================================================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className=""
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
              Different abstraction
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Choose the layer you need.
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              React Hook Form and TanStack Form give you powerful primitives for
              building form systems. React Form Toaster goes one step further by
              providing the UI and common workflows around those forms.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-gray-700 bg-[#0c0d15]/90 shadow-2xl shadow-black/20">
            {/* Header */}
            <div className="grid grid-cols-[1.45fr_1fr_1fr_1.15fr] border-b border-gray-700">
              <div className="p-5 sm:p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-600">
                  Frontend concern
                </span>
              </div>

              <div className="border-l border-gray-700 p-5 text-center sm:p-6">
                <p className="text-sm font-semibold text-slate-300">
                  React Hook Form
                </p>
              </div>

              <div className="border-l border-gray-700 p-5 text-center sm:p-6">
                <p className="text-sm font-semibold text-slate-300">
                  TanStack Form
                </p>
              </div>

              <div className="relative border-l border-violet-400/20 bg-violet-500/[0.045] p-5 text-center sm:p-6">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />

                <p className="text-sm font-semibold text-violet-200">
                  React Form Toaster
                </p>
              </div>
            </div>

            {/* Rows */}
            {comparisonRows.map((row, index) => (
              <motion.div
                key={row.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: Math.min(index * 0.025, 0.25),
                }}
                className="grid grid-cols-[1.45fr_1fr_1fr_1.15fr] border-b border-gray-700 last:border-b-0"
              >
                <div className="p-4 sm:px-6 sm:py-5">
                  <p className="text-sm font-medium text-slate-200">
                    {row.title}
                  </p>

                  <p className="mt-1 max-w-xs text-[11px] leading-4 text-slate-600">
                    {row.description}
                  </p>
                </div>

                <div className="flex items-center justify-center border-l border-gray-700 p-4">
                  <ComparisonCell item={row.reactHookForm} />
                </div>

                <div className="flex items-center justify-center border-l border-gray-700 p-4">
                  <ComparisonCell item={row.tanStackForm} />
                </div>

                <div className="relative flex items-center justify-center border-l border-violet-400/[0.12] bg-violet-500/[0.025] p-4">
                  <ComparisonCell item={row.reactFormToaster} highlighted />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* =========================================================
            ONE SOURCE OF TRUTH
        ========================================================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >
          <div className="mx-auto max-w-8xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-fuchsia-400">
              One source of truth
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              One definition.
              <br />
              Multiple concerns handled.
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              The form definition becomes the common layer connecting UI,
              validation, behavior, and submission.
            </p>
          </div>

          <div className="relative mx-auto mt-12 max-w-4xl">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  title: "Schema",
                  text: "What data is valid?",
                },
                {
                  title: "Fields",
                  text: "What should the UI render?",
                },
                {
                  title: "Buttons",
                  text: "What actions are available?",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl border border-gray-700 bg-[#0d0e17] p-5 text-center"
                >
                  <p className="text-sm font-semibold text-slate-200">
                    {item.title}
                  </p>

                  <p className="mt-2 text-xs text-slate-500">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="my-4 flex justify-center text-violet-400/60">↓</div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-600 bg-violet-500/[0.045] p-6 text-center shadow-[0_0_60px_rgba(139,92,246,0.06)]"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10">
                <Layers3 className="h-5 w-5 text-violet-300" />
              </div>

              <h3 className="mt-4 text-base font-semibold text-violet-100">
                Formbox
              </h3>

              <p className=" text-center mt-2 text-sm leading-5 text-violet-200/50">
                Connect the configuration to rendered UI, validation,
                conditional behavior, submission, and feedback.
              </p>
            </motion.div>

            <div className="my-4 flex justify-center text-violet-400/60">↓</div>

            <div className="grid gap-3 sm:grid-cols-4">
              {["UI", "Validation", "Behavior", "Feedback"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="rounded-xl border border-gray-700 bg-white/[0.015] px-4 py-4 text-center text-xs font-medium text-slate-400"
                  >
                    {item}
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
