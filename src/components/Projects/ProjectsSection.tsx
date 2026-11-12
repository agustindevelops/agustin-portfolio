import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

import { ProjectShowcase } from "./ProjectShowcase"
import type { PortfolioProject, ProjectUnit } from "./types"

export interface ProjectsSectionProps {
  projects: readonly PortfolioProject[]
  heading?: string
  intro?: string
  className?: string
  id?: string
  renderUnitIcon?: (unit: ProjectUnit) => ReactNode
}

function ProjectsSection({
  projects,
  heading,
  intro,
  className,
  id,
  renderUnitIcon,
}: ProjectsSectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 bg-background py-16 md:py-24", className)}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-3 h-1 w-10 rounded-full bg-brand" />
        {heading ? <h2 className="text-2xl sm:text-3xl">{heading}</h2> : null}
        {intro ? (
          <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">
            {intro}
          </p>
        ) : null}
        <div
          className={cn(
            "space-y-16",
            heading || intro ? "mt-8 md:mt-12" : undefined,
          )}
        >
          {projects.map((project) => (
            <ProjectShowcase
              key={project.id}
              project={project}
              renderUnitIcon={renderUnitIcon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export { ProjectsSection }
