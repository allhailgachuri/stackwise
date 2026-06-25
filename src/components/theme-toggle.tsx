import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch by waiting for mount
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-8 w-16" />;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-8 w-16 cursor-pointer items-center rounded-full border border-black/10 bg-white/30 p-1 shadow-inner backdrop-blur-md transition-colors duration-300 hover:bg-white/40 dark:border-white/10 dark:bg-black/30 dark:hover:bg-black/40"
      aria-label="Toggle theme"
    >
      {/* Sliding thumb */}
      <div
        className={`absolute left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 ease-in-out dark:bg-[#1a1a1a] ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-foreground" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-foreground" />
        )}
      </div>

      {/* Decorative icons in the background (optional, for extra polish) */}
      <div className="flex w-full justify-between px-1">
        <Sun className={`h-3.5 w-3.5 transition-opacity duration-300 ${isDark ? "opacity-50 text-muted-foreground" : "opacity-0"}`} />
        <Moon className={`h-3.5 w-3.5 transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-50 text-muted-foreground"}`} />
      </div>
    </button>
  );
}
