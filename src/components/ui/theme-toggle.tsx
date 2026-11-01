"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    const storedTheme = window.localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark || true

    setIsDark(shouldUseDark)
    root.classList.toggle("dark", shouldUseDark)
  }, [])

  const toggleTheme = () => {
    const nextTheme = !isDark
    const root = document.documentElement

    setIsDark(nextTheme)
    root.classList.toggle("dark", nextTheme)
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light")
  }

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className="group relative inline-flex h-8 w-14 items-center rounded-full border border-border bg-muted/80 p-1 transition-colors duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span
        className={cn(
          "pointer-events-none absolute left-1 h-6 w-6 rounded-full bg-background shadow-sm ring-1 ring-border transition-transform duration-200 ease-out",
          isDark ? "translate-x-6" : "translate-x-0"
        )}
      />

      <Sun
        className={cn(
          "relative z-10 ml-0.5 size-3.5 text-amber-500 transition-opacity duration-200",
          isDark ? "opacity-100" : "opacity-40"
        )}
      />
      <Moon
        className={cn(
          "relative z-10 ml-auto mr-0.5 size-3.5 text-sky-400 transition-opacity duration-200",
          isDark ? "opacity-40" : "opacity-100"
        )}
      />
    </button>
  )
}
