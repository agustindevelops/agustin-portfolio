import { X } from "lucide-react"
import { useEffect, useMemo, useRef, useState } from "react"
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
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [active, setActive] = useState<MarkdownImage | null>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (active && !dialog.open) dialog.showModal()
    if (!active && dialog.open) dialog.close()
  }, [active])

  return (
    <>
      <ul
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {images.map((image) => (
          <li key={`${image.src}-${image.alt}`}>
            <button
              type="button"
              onClick={() => setActive(image)}
              className="flex h-30 w-full cursor-pointer items-center justify-center overflow-hidden rounded-md bg-soft ring-1 ring-border transition-opacity hover:opacity-80 sm:h-36"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="max-h-full max-w-full object-contain object-top"
              />
            </button>
          </li>
        ))}
      </ul>
      <dialog
        ref={dialogRef}
        aria-label={active?.alt || "Screenshot"}
        className="fixed inset-0 m-0 h-dvh max-h-none w-dvw max-w-none items-center justify-center border-0 bg-neutral-500/50 p-6 open:flex"
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
      >
        {active ? (
          <div className="flex max-h-full max-w-full flex-col items-end gap-2">
            <button
              type="button"
              aria-label="Close"
              onClick={() => dialogRef.current?.close()}
              className="text-neutral-900"
            >
              <X className="size-7" strokeWidth={2.25} />
            </button>
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[calc(100dvh-6rem)] max-w-full object-contain"
            />
          </div>
        ) : null}
      </dialog>
    </>
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
