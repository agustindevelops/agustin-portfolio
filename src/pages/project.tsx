import { useParams } from "react-router"

import { Link } from "@/components/ui/link"
import { projects } from "@/data"

function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
      <Link href="/#projects">All projects</Link>
      {project ? (
        <>
          <div className="mt-8 mb-3 h-1 w-10 rounded-full bg-brand" />
          <h1 className="text-3xl sm:text-5xl">{project.name}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          <Link href={project.url} className="mt-8 inline-block">
            Visit site
          </Link>
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
