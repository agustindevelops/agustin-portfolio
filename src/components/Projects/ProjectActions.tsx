import { Link } from "@/components/ui/link"
import { cn } from "@/lib/utils"

import type { ProjectAction } from "./types"

export interface ProjectActionsProps {
  actions: readonly ProjectAction[]
  className?: string
}

function isHttpUrl(href: string) {
  return /^https?:\/\//.test(href)
}

function ProjectActions({ actions, className }: ProjectActionsProps) {
  const visible = actions.filter((action) => action.href)

  if (visible.length === 0) {
    return null
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {visible.map((action) => {
        const external = isHttpUrl(action.href)
        const opensBlank =
          action.target === "_blank" || (external && action.target !== "_self")
        const variant =
          action.variant === "primary"
            ? "default"
            : action.variant === "secondary"
              ? "outline"
              : undefined

        return (
          <Link
            key={action.id}
            href={action.href}
            target={action.target}
            rel={
              action.rel ??
              (opensBlank || external ? "noopener noreferrer" : undefined)
            }
            aria-label={action.ariaLabel}
            variant={variant}
            size={variant ? "lg" : undefined}
            className={cn(
              "h-auto min-h-11 whitespace-normal rounded-sm focus-visible:ring-3 focus-visible:ring-ring/50",
              variant ? "px-4 py-2" : "inline-flex items-center",
            )}
          >
            {action.label}
          </Link>
        )
      })}
    </div>
  )
}

export { ProjectActions }
