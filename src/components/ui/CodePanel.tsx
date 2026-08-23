import { useState, type ReactNode } from "react";

type CodePanelProps = {
  filename: string;
  children: ReactNode;
  code?: string;
  highlight?: boolean;
  className?: string;
};

export function CodePanel({
  filename,
  children,
  code = "",
  highlight = false,
  className = "",
}: CodePanelProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className={`
        group/panel
        relative
        flex
        flex-col
        overflow-hidden
        rounded-2xl
        border
        bg-[#0b0d13]/95
        backdrop-blur-xl
        transition-all
        duration-500
        will-change-transform
        hover:-translate-y-1
        ${
          highlight
            ? `
              border-[#6366f1]/35
              shadow-[0_25px_80px_-45px_rgba(99,102,241,0.7)]
              hover:border-[#6366f1]/65
              hover:shadow-[0_30px_90px_-40px_rgba(99,102,241,0.55)]
            `
            : `
              border-white/[0.08]
              shadow-[0_20px_60px_-45px_rgba(0,0,0,0.8)]
              hover:border-white/[0.14]
              hover:shadow-[0_25px_70px_-40px_rgba(0,0,0,0.7)]
            `
        }
        ${className}
      `}
    >
      {/* Accent line */}
      {highlight && (
        <div
          className="
            pointer-events-none
            absolute
            left-8
            right-8
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#6366f1]
            to-transparent
            opacity-80
            transition-opacity
            duration-500
            group-hover/panel:opacity-100
          "
        />
      )}

      {/* ─────────────────────────────────────────
          Header
      ───────────────────────────────────────── */}
      <div
        className="
          flex
          h-11
          shrink-0
          items-center
          justify-between
          border-b
          border-white/[0.055]
          bg-white/[0.015]
          px-4
        "
      >
        {/* Window + filename */}
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/10 transition-colors duration-300 group-hover/panel:bg-[#ff5f57]/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/10 transition-colors duration-300 group-hover/panel:bg-[#febc2e]/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/10 transition-colors duration-300 group-hover/panel:bg-[#28c840]/70" />
          </div>

          <div className="h-3.5 w-px bg-white/[0.07]" />

          <span className="truncate font-mono text-[10px] text-[#6c7488]">
            {filename}
          </span>
        </div>

        {/* Copy */}
        <button
          type="button"
          onClick={handleCopy}
          disabled={!code}
          className="
            flex
            h-7
            shrink-0
            items-center
            gap-1.5
            rounded-md
            border
            border-white/[0.07]
            bg-white/[0.025]
            px-2
            text-[9px]
            font-medium
            text-[#727a8e]
            transition-all
            duration-200
            hover:border-white/[0.14]
            hover:bg-white/[0.055]
            hover:text-white
            active:scale-95
            disabled:pointer-events-none
            disabled:opacity-50
          "
        >
          {copied ? (
            <>
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3 text-[#7c7ff5]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect width="13" height="13" x="9" y="9" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* ─────────────────────────────────────────
          Code (sized to content — no scroll)
      ───────────────────────────────────────── */}
      <div className="px-5 py-4">{children}</div>
    </div>
  );
}

