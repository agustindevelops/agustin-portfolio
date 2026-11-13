import { useId, useState } from "react"
import { ChevronDown } from "lucide-react"

import { Link } from "@/components/ui/link"

import type { ProjectFeature } from "./types"

const visibleLimit = 3

export interface FeatureListProps {
  features: readonly ProjectFeature[]
  className?: string
  showAll?: boolean
}

function FeatureItem({ feature }: { feature: ProjectFeature }) {
  if (!feature.detailHref) return feature.text

  return (
    <Link
      href={feature.detailHref}
      className="rounded-sm focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      {feature.text}
    </Link>
  )
}

function FeatureList({ features, className, showAll = false }: FeatureListProps) {
  const [expanded, setExpanded] = useState(false)
  const listId = useId()
  const canToggle = !showAll && features.length > visibleLimit
  const shown = expanded || !canToggle ? features : features.slice(0, visibleLimit)
  const peek = !expanded && canToggle ? features[visibleLimit] : undefined

  if (features.length === 0) {
    return null
  }

  return (
    <div className={className}>
      <ul
        id={listId}
        className="list-disc space-y-2 pl-4 leading-relaxed text-muted-foreground"
      >
        {shown.map((feature) => (
          <li key={feature.id}>
            <FeatureItem feature={feature} />
          </li>
        ))}
      </ul>
      {peek ? (
        <div className="relative mt-2 h-12">
          <ul
            aria-hidden
            className="list-disc overflow-hidden pl-4 leading-relaxed text-muted-foreground"
          >
            <li>{peek.text}</li>
          </ul>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--card)_18%,transparent),color-mix(in_srgb,var(--card)_72%,transparent)_45%,var(--card))]"
          />
          <button
            type="button"
            aria-expanded={false}
            aria-controls={listId}
            onClick={() => setExpanded(true)}
            className="absolute inset-x-0 bottom-0 z-10 mx-auto flex w-fit items-center gap-1 rounded-sm text-sm font-medium text-brand focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            View more
            <ChevronDown className="size-4" />
          </button>
        </div>
      ) : null}
      {expanded && canToggle ? (
        <button
          type="button"
          aria-expanded
          aria-controls={listId}
          onClick={() => setExpanded(false)}
          className="mx-auto mt-2 flex w-fit items-center gap-1 rounded-sm text-sm font-medium text-brand focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          View less
          <ChevronDown className="size-4 rotate-180" />
        </button>
      ) : null}
    </div>
  )
}

export { FeatureList }
