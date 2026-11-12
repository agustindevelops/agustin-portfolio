import { Globe } from "lucide-react"

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

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12.02C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

type ActionKind = "github" | "website" | "other"

function actionKind(action: ProjectAction): ActionKind {
  const href = action.href.toLowerCase()
  const label = action.label.toLowerCase()
  if (href.includes("github.com") || label.includes("github")) return "github"
  if (isHttpUrl(action.href)) return "website"
  return "other"
}

function ActionIcon({ kind }: { kind: ActionKind }) {
  if (kind === "github") return <GithubIcon className="size-3.5" />
  if (kind === "website") return <Globe className="size-3.5" />
  return null
}

function isCallToAction(action: ProjectAction) {
  if (action.variant === "primary") return true
  if (action.variant === "secondary" || action.variant === "text") return false
  return actionKind(action) === "website"
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
        const kind = actionKind(action)
        const callToAction = isCallToAction(action)

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
            variant={callToAction ? "default" : undefined}
            size={callToAction ? "default" : undefined}
            className={cn(
              "rounded-sm focus-visible:ring-3 focus-visible:ring-ring/50",
              callToAction
                ? "h-auto min-h-8 gap-1.5 px-3 py-1.5 whitespace-normal text-white hover:text-white"
                : "inline-flex items-center gap-1.5",
            )}
          >
            <ActionIcon kind={kind} />
            {action.label}
          </Link>
        )
      })}
    </div>
  )
}

export { ProjectActions }
