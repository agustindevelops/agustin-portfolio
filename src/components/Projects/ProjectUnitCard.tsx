import type { ReactNode } from "react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

import { FeatureList } from "./FeatureList"
import { ProjectActions } from "./ProjectActions"
import { ProjectMedia } from "./ProjectMedia"
import type { ProjectUnit } from "./types"

export interface ProjectUnitCardProps {
  unit: ProjectUnit
  icon?: ReactNode
  className?: string
}

function ProjectUnitCard({ unit, icon, className }: ProjectUnitCardProps) {
  const features = unit.features ?? []
  const tags = unit.tags ?? []
  const actions = unit.actions ?? []
  const hasContent = Boolean(unit.media) || features.length > 0 || tags.length > 0

  return (
    <Card
      className={cn(
        "h-full motion-safe:transition-shadow motion-safe:duration-200 motion-safe:hover:shadow-sm",
        className,
      )}
    >
      <CardHeader>
        <div className="flex items-start gap-3">
          {icon ? (
            <span aria-hidden className="mt-0.5 inline-flex size-12 shrink-0 items-center justify-center text-brand">
              {icon}
            </span>
          ) : null}
          <div className="min-w-0 flex-1">
            <CardTitle>
              <h4 className="text-base leading-snug">{unit.title}</h4>
            </CardTitle>
            {unit.subtitle ? (
              <CardDescription className="mt-1">{unit.subtitle}</CardDescription>
            ) : null}
          </div>
        </div>
        {unit.badge ? (
          <Badge variant="outline" className="mt-2 h-7 px-3">
            {unit.badge}
          </Badge>
        ) : null}
        {unit.description ? (
          <CardDescription className="mt-2 leading-relaxed">
            {unit.description}
          </CardDescription>
        ) : null}
      </CardHeader>
      {hasContent ? (
        <CardContent className="flex flex-1 flex-col gap-4">
          {unit.media ? <ProjectMedia media={unit.media} /> : null}
          {features.length > 0 ? <FeatureList features={features} /> : null}
          {tags.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="h-auto min-h-6 whitespace-normal border-border bg-muted px-2.5 py-0.5"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          ) : null}
        </CardContent>
      ) : null}
      {actions.length > 0 ? (
        <CardFooter className="mt-auto flex-wrap justify-start gap-3">
          <ProjectActions actions={actions} />
        </CardFooter>
      ) : null}
    </Card>
  )
}

export { ProjectUnitCard }
