import { AnimatedThemeToggleButton } from "./animated-theme-toggle-button.tsx";


export default function ThemeTransitionDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 bg-background transition-colors">
      <div className="flex flex-col items-center">
        <AnimatedThemeToggleButton type="horizontal" />

      </div>

      <div className="flex flex-col items-center">
        <AnimatedThemeToggleButton type="vertical" />
      </div>
    </div>
  )
}