import { useEffect, useMemo, useState } from "react"
import { Streamdown } from "streamdown"

import { cn } from "@/lib/utils"

import { markdownPlugins } from "./markdown-plugins"
import "./markdown.css"

function useDarkClass() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  )

  useEffect(() => {
    const root = document.documentElement
    const sync = () => setIsDark(root.classList.contains("dark"))

    sync()

    const observer = new MutationObserver(sync)
    observer.observe(root, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  return isDark
}

type MarkdownProps = {
  /** Complete Markdown source (not HTML). */
  content: string
  /** Optional classes on the renderer root. */
  className?: string
}

function Markdown({ content, className }: MarkdownProps) {
  const isDark = useDarkClass()
  const theme = isDark ? "dark" : "default"
  const mermaidOptions = useMemo(
    () => ({ config: { theme } }),
    [theme],
  )

  return (
    <Streamdown
      mode="static"
      plugins={markdownPlugins}
      shikiTheme={["github-light", "github-dark"]}
      mermaid={mermaidOptions}
      className={cn("app-markdown min-w-0", className)}
    >
      {content}
    </Streamdown>
  )
}

export { Markdown }
export type { MarkdownProps }
