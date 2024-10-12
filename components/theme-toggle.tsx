"use client"

import * as React from "react"
import { useTheme, Theme } from "./theme-provider"
import { Button } from "./ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  const themes: { name: Theme; icon: string }[] = [
    { name: "serene", icon: "🕊️" },
    { name: "warm", icon: "🌅" },
    { name: "elegant", icon: "🕯️" },
  ]

  return (
    <div className="flex space-x-2">
      {themes.map((t) => (
        <Button
          key={t.name}
          variant={theme === t.name ? "default" : "outline"}
          size="icon"
          onClick={() => setTheme(t.name)}
          title={`Switch to ${t.name} theme`}
        >
          {t.icon}
        </Button>
      ))}
    </div>
  )
}
