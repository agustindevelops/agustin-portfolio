import { useEffect, useMemo, useState } from "react"
import { Streamdown } from "streamdown"

import { cn } from "@/lib/utils"

import { markdownPlugins } from "./markdown-plugins"
import { splitMarkdown, type MarkdownImage } from "./split-markdown"
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

function ImageGrid({ images }: { images: MarkdownImage[] }) {
  const columns = Math.ceil(images.length / 2)

  return (
    <ul
      className="grid gap-2"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {images.map((image) => (
        <li
          key={`${image.src}-${image.alt}`}
          className="flex h-20 items-center justify-center overflow-hidden rounded-md bg-soft ring-1 ring-border sm:h-24"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-full max-w-full object-contain object-top"
          />
        </li>
      ))}
    </ul>
  )
}

function Markdown({ content, className }: MarkdownProps) {
  const isDark = useDarkClass()
  const theme = isDark ? "dark" : "default"
  const mermaidOptions = useMemo(
    () => ({ config: { theme } }),
    [theme],
  )
  const segments = useMemo(() => splitMarkdown(content), [content])

  return (
    <div className={cn("flex flex-col gap-8", className)}>
      {segments.map((segment, index) =>
        segment.type === "images" ? (
          <ImageGrid key={index} images={segment.items} />
        ) : (
          <Streamdown
            key={index}
            mode="static"
            plugins={markdownPlugins}
            shikiTheme={["github-light", "github-dark"]}
            mermaid={mermaidOptions}
            className="app-markdown min-w-0"
          >
            {segment.content}
          </Streamdown>
        ),
      )}
    </div>
  )
}

export { Markdown }
export type { MarkdownProps }
