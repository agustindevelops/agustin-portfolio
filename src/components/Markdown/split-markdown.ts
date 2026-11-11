type MarkdownImage = {
  alt: string
  src: string
}

type MarkdownSegment =
  | { type: "markdown"; content: string }
  | { type: "images"; items: MarkdownImage[] }

const imageLine =
  /^!\[([^\]]*)\]\(\s*<?([^)\s>]+)>?(?:\s+"[^"]*")?\s*\)\s*$/

const fenceLine = /^(?:`{3,}|~{3,})/

function splitMarkdown(source: string): MarkdownSegment[] {
  const segments: MarkdownSegment[] = []
  const prose: string[] = []
  let images: MarkdownImage[] = []
  let inFence = false

  function flushProse() {
    const content = prose.join("\n").trim()
    prose.length = 0
    if (content) segments.push({ type: "markdown", content })
  }

  function flushImages() {
    if (images.length === 0) return
    segments.push({ type: "images", items: images })
    images = []
  }

  for (const line of source.split(/\r?\n/)) {
    if (fenceLine.test(line.trim())) inFence = !inFence

    const image = inFence ? null : line.match(imageLine)
    if (image) {
      flushProse()
      images.push({ alt: image[1], src: image[2] })
      continue
    }

    if (images.length > 0 && line.trim() === "") continue

    flushImages()
    prose.push(line)
  }

  flushImages()
  flushProse()
  return segments
}

export { splitMarkdown }
export type { MarkdownImage, MarkdownSegment }
