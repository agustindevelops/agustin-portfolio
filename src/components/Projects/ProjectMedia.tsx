import { cn } from "@/lib/utils"

import type { ProjectMedia as ProjectMediaModel } from "./types"

export interface ProjectMediaProps {
  media: ProjectMediaModel
  className?: string
}

function ProjectMedia({ media, className }: ProjectMediaProps) {
  return (
    <img
      src={media.src}
      alt={media.alt}
      width={media.width}
      height={media.height}
      loading="lazy"
      className={cn("h-auto w-full rounded-xl object-contain ring-1 ring-border", className)}
    />
  )
}

export { ProjectMedia }
