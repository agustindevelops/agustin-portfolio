import { useParams } from "react-router"

import { Markdown } from "@/components/Markdown"
import { ProjectActions } from "@/components/Projects"
import { Link } from "@/components/ui/link"
import { projects } from "@/data"
import { usePublicMarkdown } from "@/lib/use-public-markdown"

const caseStudyHrefs: Record<string, string> = {
  "aniah-social-events": "/ase_ecosystem_case_study.md",
}

function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.id === slug)
  const caseStudyHref = slug ? caseStudyHrefs[slug] : undefined
  const caseStudy = usePublicMarkdown(caseStudyHref ?? "")
  const detailPath = slug ? `/projects/${slug}` : ""
  const actions = project
    ? [
        ...(project.actions ?? []).filter((action) => action.href !== detailPath),
        ...project.units.flatMap((unit) => unit.actions ?? []),
      ]
    : []

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <Link href="/#projects">All projects</Link>
      {project ? (
        <>
          <div className="mt-8 mb-3 h-1 w-10 rounded-full bg-brand" />
          <h1 className="text-3xl sm:text-5xl">{project.title}</h1>
          {project.description ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          ) : null}
          {actions.length > 0 ? (
            <ProjectActions actions={actions} className="mt-8" />
          ) : null}
          {caseStudy.content ? (
            <Markdown content={caseStudy.content} className="mt-12" />
          ) : null}
        </>
      ) : (
        <>
          <h1 className="mt-8 text-3xl">Project not found</h1>
          <p className="mt-4 text-muted-foreground">
            There is no project for this address.
          </p>
        </>
      )}
    </main>
  )
}

export { ProjectPage }
