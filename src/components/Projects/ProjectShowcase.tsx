import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

import { ProjectActions } from "./ProjectActions"
import { ProjectMedia } from "./ProjectMedia"
import { ProjectUnitCard } from "./ProjectUnitCard"
import type { PortfolioProject, ProjectUnit } from "./types"

export interface ProjectShowcaseProps {
  project: PortfolioProject
  renderUnitIcon?: (unit: ProjectUnit) => ReactNode
  className?: string
}

function unitGridClass(count: number) {
  if (count >= 3) {
    return "grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
  }

  if (count === 2) {
    return "grid grid-cols-1 gap-5 md:grid-cols-2"
  }

  return "grid grid-cols-1 gap-5"
}

function ProjectShowcase({
  project,
  renderUnitIcon,
  className,
}: ProjectShowcaseProps) {
  const headingId = `project-${project.id}`
  const unitCount = project.units.length
  const actions = project.actions ?? []

  return (
    <article
      aria-labelledby={headingId}
      className={cn("space-y-6", className)}
    >
      <header>
        {project.eyebrow ? (
          <p className="text-sm text-muted-foreground">{project.eyebrow}</p>
        ) : null}
        <h3 id={headingId} className="text-xl sm:text-2xl">
          {project.title}
        </h3>
        {project.description ? (
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        ) : null}
        {project.supportingText ? (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {project.supportingText}
          </p>
        ) : null}
      </header>
      {project.media ? <ProjectMedia media={project.media} /> : null}
      {unitCount > 0 ? (
        <div className={unitGridClass(unitCount)}>
          {project.units.map((unit) => (
            <ProjectUnitCard
              key={unit.id}
              unit={unit}
              icon={renderUnitIcon?.(unit)}
            />
          ))}
        </div>
      ) : null}
      {actions.length > 0 ? <ProjectActions actions={actions} /> : null}
    </article>
  )
}

export { ProjectShowcase }
