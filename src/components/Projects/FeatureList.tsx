import { Link } from "@/components/ui/link"
import { cn } from "@/lib/utils"

import type { ProjectFeature } from "./types"

export interface FeatureListProps {
  features: readonly ProjectFeature[]
  className?: string
}

function FeatureList({ features, className }: FeatureListProps) {
  if (features.length === 0) {
    return null
  }

  return (
    <ul
      className={cn(
        "list-disc space-y-2 pl-4 leading-relaxed text-muted-foreground",
        className,
      )}
    >
      {features.map((feature) => (
        <li key={feature.id}>
          {feature.detailHref ? (
            <Link
              href={feature.detailHref}
              className="rounded-sm focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {feature.text}
            </Link>
          ) : (
            feature.text
          )}
        </li>
      ))}
    </ul>
  )
}

export { FeatureList }
