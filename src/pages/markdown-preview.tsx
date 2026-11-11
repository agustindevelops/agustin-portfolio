import { Markdown } from "@/components/Markdown"
import { usePublicMarkdown } from "@/lib/use-public-markdown"

function MarkdownPreviewPage() {
  const caseStudy = usePublicMarkdown("/ase_ecosystem_case_study.md")

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      {caseStudy.error ? (
        <p className="text-muted-foreground">
          The case study could not be loaded.
        </p>
      ) : null}
      {caseStudy.content ? <Markdown content={caseStudy.content} /> : null}
      <Markdown content="" />
    </main>
  )
}

export { MarkdownPreviewPage }
