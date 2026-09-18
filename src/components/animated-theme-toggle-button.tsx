import { useRef, useCallback } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../lib/utils.ts"
import { useTheme } from "../context/ThemeContext.tsx"
export type ThemeTransitionType = "horizontal" | "vertical" | "circular"

type AnimatedThemeToggleButtonProps = {
  type: ThemeTransitionType
  className?: string
}

function triggerThemeTransition(type: ThemeTransitionType) {
  if (type === "horizontal") {
    document.documentElement.animate(
      {
        clipPath: [
          "inset(50% 0 50% 0)",
          "inset(0 0 0 0)"
        ]
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  } else if (type === "vertical") {
    document.documentElement.animate(
      {
        clipPath: [
          "inset(0 50% 0 50%)",
          "inset(0 0 0 0)"
        ]
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  } else if (type === "circular") {
    const isDark = document.documentElement.classList.contains("dark")
    if (isDark) {
      document.documentElement.animate(
        { clipPath: ["circle(0% at 50% 50%)", "circle(150% at 50% 50%)"] },
        { duration: 600, easing: "ease-in-out", pseudoElement: "::view-transition-new(root)" }
      )
    } else {
      document.documentElement.animate(
        { clipPath: ["circle(150% at 50% 50%)", "circle(0% at 50% 50%)"] },
        { duration: 600, easing: "ease-in-out", pseudoElement: "::view-transition-old(root)" }
      )
    }
  }
}

export const AnimatedThemeToggleButton = ({
  type,
  className
}: AnimatedThemeToggleButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { theme, toggleTheme } = useTheme()
  const darkMode = theme === "dark"

  const handleToggle = useCallback(async () => {
    if (!buttonRef.current) return

    await document.startViewTransition(() => {
      flushSync(() => {
        toggleTheme()
      })
    }).ready

    triggerThemeTransition(type)
  }, [type, toggleTheme])

  return (
    <button
      ref={buttonRef}
      onClick={handleToggle}
      aria-label={`Toggle theme - ${type}`}
      type="button"
      className={cn(
        "flex items-center justify-center p-2 rounded-xl outline-none focus:outline-none active:outline-none focus:ring-0 cursor-pointer border border-border/60 transition-all duration-300 hover:border-accent/40",
        darkMode ? "bg-bg-subtle text-yellow-400" : "bg-bg-subtle text-blue-700",
        className
      )}
      style={{ width: 40, height: 40 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {darkMode ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, scale: 0.55, rotate: 25 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.33 }}
            className="text-yellow-400"
          >
            <Sun size={16} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, scale: 0.55, rotate: -25 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.33 }}
            className="text-blue-900"
          >
            <Moon size={16} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
