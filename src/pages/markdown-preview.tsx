import { Markdown } from "@/components/markdown"
import { markdownDemo } from "@/data"

function MarkdownPreviewPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <Markdown content={markdownDemo.markdown} />
      <Markdown content="" />
    </main>
  )
}

export { MarkdownPreviewPage }
