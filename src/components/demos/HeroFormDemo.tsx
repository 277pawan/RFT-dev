import Formbox from "react-form-toaster";
import "react-form-toaster/dist/index.css";
import { z } from "zod";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { CSSProperties, MouseEvent } from "react";
import "../../hero-fx.css";

const schema = z.object({
  firstname: z.string().min(1, "First name is required"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(8, "Must be 8+ chars"),
});

// Colors via inline style so Tailwind purging can't strip them.
const darkInputStyle: CSSProperties = {
  marginLeft: "1px",
  backgroundColor: "rgba(18,20,28,0.85)",
  border: "1px solid #2a2e42",
  color: "#ffffff",
  borderRadius: "12px",
};

const fieldLabel = "text-[#d1d5db] text-sm font-medium";
const fieldRequired = "text-[#ef4444]";
const fieldError = "text-[#ef4444] text-xs mt-1 block";

const chip: CSSProperties = {
  background: "rgba(15,17,26,0.85)",
  border: "1px solid rgba(255,255,255,0.1)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
};

function FloatChip({
  children,
  className,
  rotate = 0,
  delay = 0,
}: {
  children: React.ReactNode;
  className: string;
  rotate?: number;
  delay?: number;
}) {
  return (
    <div
      className={`rft-float absolute z-20 hidden items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-white md:flex ${className}`}
      style={{
        ...chip,
        ["--r" as string]: `${rotate}deg`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function HeroFormDemo() {
  // 3D tilt + cursor spotlight
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-9, 9]), {
    stiffness: 150,
    damping: 18,
  });
  const px = useTransform(mx, (v) => `${v * 100}%`);
  const py = useTransform(my, (v) => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${px} ${py}, rgba(129,140,248,0.22), transparent 60%)`;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div
      className="relative flex items-center justify-center p-4 lg:p-8"
      style={{ perspective: 1200 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Floating feature chips */}
      <FloatChip className="-left-2 top-6" rotate={-6}>
        <span
          className="rft-dot h-2 w-2 rounded-full"
          style={{ background: "#34d399" }}
        />
        Zod validated
      </FloatChip>
      <FloatChip className="-right-2 top-24" rotate={5} delay={1.2}>
        ⚡ 0 boilerplate
      </FloatChip>
      <FloatChip className="-left-6 bottom-28" rotate={4} delay={2.1}>
        🔁 showWhen
      </FloatChip>

      {/* Peeking schema panel */}
      <div
        className="rft-float absolute -bottom-6 -right-4 z-20 hidden w-60 rounded-xl p-3 xl:block"
        style={{ ...chip, ["--r" as string]: "-3deg", animationDelay: "0.6s" }}
      >
        <div className="mb-2 flex gap-1.5">
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: "#ef4444" }}
          />
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: "#fbbf24" }}
          />
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: "#34d399" }}
          />
        </div>
        <pre
          className="m-0 font-mono"
          style={{ fontSize: 10.5, lineHeight: 1.5, color: "#a5b4fc" }}
        >
          {`fields: [{
  name: "email",
  type: "email",
  required: true,
}]
toast: { success: "🎉" }`}
        </pre>
      </div>

      {/* Tilting card */}
      <motion.div
        className="relative z-10 w-full max-w-xl"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className="rft-border">
          <div
            className="rft-scanline relative overflow-hidden"
            style={{ borderRadius: 24, backgroundColor: "#05060a" }}
          >
            {/* cursor spotlight */}
            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{ background: spotlight }}
            />
            <div className="relative p-4">
              <Formbox
                open={true}
                onOpenChange={() => {}}
                mode="inline"
                closeFormIcon={false}
                errorPosition="top"
                containerClassName="bg-transparent border-0 p-4 shadow-none overflow-visible"
                title={{
                  text: "Create an account",
                  className: "text-2xl font-bold text-white mb-1",
                }}
                description={{
                  text: "Enter your details to test the form live.",
                  className: "text-sm mb-5",
                }}
                schema={schema}
                onSubmit={async (data) => {
                  console.log("Form submitted:", data);
                  await new Promise((r) => setTimeout(r, 1500));
                }}
                toast={{
                  loading: "Creating account...",
                  success: "Account created successfully! 🎉",
                  error: "Something went wrong",
                  position: "top-right",
                  duration: 3000,
                }}
                fields={[
                  {
                    name: "firstname",
                    type: "text",
                    label: "First Name",
                    placeholder: "Sarah",
                    required: true,
                    style: darkInputStyle,
                    labelClassName: fieldLabel,
                    requiredClassName: fieldRequired,
                    errorClassName: fieldError,
                  },
                  {
                    name: "email",
                    type: "email",
                    label: "Email",
                    placeholder: "sarah@design.dev",
                    required: true,
                    style: darkInputStyle,
                    labelClassName: fieldLabel,
                    requiredClassName: fieldRequired,
                    errorClassName: fieldError,
                  },
                  {
                    name: "password",
                    type: "password",
                    label: "Password",
                    placeholder: "Must be 8+ chars",
                    required: true,
                    passwordToggle: true,
                    style: darkInputStyle,
                    labelClassName: fieldLabel,
                    requiredClassName: fieldRequired,
                    errorClassName: fieldError,
                    passwordToggleClassName:
                      "text-gray-500 hover:text-white transition-colors",
                  },
                ]}
                buttons={[
                  {
                    name: "Create Account",
                    type: "submit",
                    loadingText: "Creating...",
                    className:
                      "w-full rounded-xl py-3 font-semibold text-base cursor-pointer transition-all hover:opacity-95 hover:-translate-y-0.5",
                    style: {
                      background: "linear-gradient(135deg,#6366f1)",
                      color: "#ffffff",
                      border: "none",
                      boxShadow: "0 10px 30px rgba(99,102,241,0.45)",
                    },
                    disabledClassName: "opacity-50 cursor-not-allowed",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default HeroFormDemo;
