import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type PlaygroundShellProps = {
  toolbar?: ReactNode;
  showCode?: boolean;
  code: ReactNode;
  preview: ReactNode;
  state?: ReactNode;
  stateVisible?: boolean;
  compact?: boolean;
  className?: string;
};

export function PlaygroundShell({
  toolbar,
  showCode = true,
  code,
  preview,
  state,
  stateVisible = true,
  compact = false,
  className = "",
}: PlaygroundShellProps) {
  const hasState = Boolean(state);

  const showState = hasState && stateVisible;

  /**
   * Desktop layout:
   *
   * Code    Preview    State
   *  1.25      1         .8
   *
   * Without state:
   *
   * Code          Preview
   *  1.25            1
   */
  const gridColumns =
    showCode && showState
      ? "xl:grid-cols-[1.25fr_1fr_0.8fr]"
      : showCode
        ? "xl:grid-cols-2"
        : "xl:grid-cols-1";

  return (
    <div className={`flex items-center flex-col w-full gap-4 ${className}`}>
      {toolbar}

      <div
        className={`
          w-full
          overflow-hidden
          rounded-xl
          border
          border-gray-700
          bg-surface
          shadow-[0_0_0_1px_rgba(93,95,239,0.06)]
          ${compact ? " max-w-[960px]" : ""}
        `}
      >
        <motion.div
          layout
          className={`
            grid
            grid-cols-1
            ${gridColumns}
          `}
          transition={{
            layout: {
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          {/* =================================================
              CODE
          ================================================= */}
          {showCode && (
            <motion.div
              layout
              className="
                min-h-[440px]
                min-w-0
                border-b
                border-gray-700
                xl:border-r
                xl:border-b-0
              "
            >
              {code}
            </motion.div>
          )}

          {/* =================================================
              PREVIEW
          ================================================= */}
          <motion.div
            layout
            className="
              min-h-[440px]
              min-w-0
              border-b
              border-gray-700
              xl:border-r
              xl:border-b-0
            "
          >
            {preview}
          </motion.div>

          {/* =================================================
              STATE
          ================================================= */}
          <AnimatePresence initial={false} mode="popLayout">
            {showState && (
              <motion.div
                key="playground-state"
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  opacity: {
                    duration: 0.2,
                  },
                  layout: {
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                className="
                  min-h-[260px]
                  min-w-0
                  overflow-hidden
                  xl:min-h-[440px]
                "
              >
                {state}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
