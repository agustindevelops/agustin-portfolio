import { useState } from "react"

import { Link } from "@/components/ui/link"
import { cn } from "@/lib/utils"

import type { FunProject } from "@/data"

export interface FunProjectsSectionProps {
  projects: readonly FunProject[]
}

const faceFrame =
  "absolute inset-0 [transform-style:preserve-3d]"

function FunCard({ project }: { project: FunProject }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="@container [perspective:1200px]">
      <div
        className={cn(
          "relative aspect-[1024/894] transition-transform duration-500 [transform-style:preserve-3d] motion-reduce:transition-none",
          flipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]",
        )}
      >
        <div
          className={cn(
            faceFrame,
            "[transform:translateZ(1px)]",
            flipped && "pointer-events-none opacity-0",
          )}
        >
          <div className="absolute inset-0 overflow-hidden rounded-xl bg-[#f6efe8] ring-1 ring-border">
            <img
              src={project.image}
              alt={project.title}
              className="size-full object-cover object-center"
            />
            <div className="absolute inset-x-2 bottom-2 flex flex-wrap items-center justify-end gap-2">
              <Link
                href={project.href}
                className="rounded-full bg-brand px-3 py-1.5 text-sm font-medium text-background no-underline shadow-sm hover:bg-brand/90 hover:text-background"
              >
                {project.actionLabel}
              </Link>
              <button
                type="button"
                className="cursor-pointer rounded-full bg-background px-3 py-1.5 text-sm font-medium text-brand ring-2 ring-brand shadow-sm transition-colors hover:bg-background"
                onClick={() => setFlipped(true)}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div
          className={cn(
            faceFrame,
            "[transform:rotateY(180deg)_translateZ(1px)]",
            !flipped && "pointer-events-none opacity-0",
          )}
        >
          <div className="absolute inset-0 flex flex-col overflow-hidden rounded-xl bg-card p-4 ring-1 ring-border @min-[36rem]:p-5">
            <h3 className="font-heading text-base font-semibold leading-tight @min-[22rem]:text-lg @min-[30rem]:text-2xl @min-[36rem]:text-4xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-snug text-muted-foreground @min-[22rem]:text-base @min-[22rem]:leading-relaxed @min-[30rem]:text-lg @min-[36rem]:mt-4 @min-[36rem]:text-2xl">
              {project.description}
            </p>
            <div className="mt-auto flex shrink-0 items-center justify-between gap-3 pt-3 @min-[30rem]:pt-5">
              <button
                type="button"
                className="cursor-pointer text-sm font-medium text-brand hover:text-brand/80 @min-[30rem]:text-lg"
                onClick={() => setFlipped(false)}
              >
                Back
              </button>
              <Link href={project.href} className="text-sm @min-[30rem]:text-lg">
                {project.actionLabel}
              </Link>
            </div>
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
