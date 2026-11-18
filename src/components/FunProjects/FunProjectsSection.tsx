import { useState } from "react"

import { Link } from "@/components/ui/link"
import { cn } from "@/lib/utils"

import type { FunProject } from "@/data"

export interface FunProjectsSectionProps {
  projects: readonly FunProject[]
}

function FunCard({ project }: { project: FunProject }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="[perspective:1200px]">
      <div
        className={cn(
          "relative aspect-[1024/894] transition-transform duration-500 [transform-style:preserve-3d] motion-reduce:transition-none",
          flipped && "[transform:rotateY(180deg)]",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 overflow-hidden rounded-xl bg-[#f6efe8] ring-1 ring-border [backface-visibility:hidden]",
            flipped && "pointer-events-none",
          )}
        >
          <img
            src={project.image}
            alt={project.title}
            className="size-full object-cover object-center"
          />
          <button
            type="button"
            className="absolute right-3 bottom-3 cursor-pointer rounded-full bg-background px-3 py-1.5 text-sm font-medium text-brand ring-2 ring-brand shadow-sm transition-colors hover:bg-background hover:ring-brand"
            onClick={() => setFlipped(true)}
          >
            Learn more
          </button>
        </div>
        <div
          className={cn(
            "absolute inset-0 flex flex-col overflow-hidden rounded-xl bg-card p-5 ring-1 ring-border [backface-visibility:hidden] [transform:rotateY(180deg)]",
            !flipped && "pointer-events-none",
          )}
        >
          <h3 className="font-heading text-3xl font-semibold sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 text-xl leading-relaxed text-muted-foreground sm:text-2xl">
            {project.description}
          </p>
          <div className="mt-auto flex items-center justify-between gap-3 pt-5">
            <button
              type="button"
              className="cursor-pointer text-lg font-medium text-brand hover:text-brand/80"
              onClick={() => setFlipped(false)}
            >
              Back
            </button>
            <Link href={project.href} className="text-lg">
              {project.actionLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function FunProjectsSection({ projects }: FunProjectsSectionProps) {
  return (
    <section
      id="just-having-fun"
      className="scroll-mt-24 border-t border-border bg-background py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-3 h-1 w-10 rounded-full bg-brand" />
        <h2 className="text-xl sm:text-2xl">Just having fun</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-8">
          {projects.map((project) => (
            <FunCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { FunProjectsSection }
