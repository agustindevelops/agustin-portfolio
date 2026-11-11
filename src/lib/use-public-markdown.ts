import { useEffect, useState } from "react"

type PublicMarkdown = {
  content: string | null
  error: boolean
}

type LoadState =
  | { href: string; content: string }
  | { href: string; error: true }

function usePublicMarkdown(href: string): PublicMarkdown {
  const [state, setState] = useState<LoadState | null>(null)

  useEffect(() => {
    if (!href) return

    const controller = new AbortController()

    fetch(href, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText)
        return response.text()
      })
      .then((content) => setState({ href, content }))
      .catch((caught: unknown) => {
        if (caught instanceof DOMException && caught.name === "AbortError") return
        setState({ href, error: true })
      })

    return () => controller.abort()
  }, [href])

  if (!href || !state || state.href !== href) {
    return { content: null, error: false }
  }

  if ("error" in state) return { content: null, error: true }

  return { content: state.content, error: false }
}

export { usePublicMarkdown }
