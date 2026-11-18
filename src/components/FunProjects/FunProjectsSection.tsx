import { useEffect, useRef, useState } from "react"

import { Link } from "@/components/ui/link"
import { cn } from "@/lib/utils"

import type { FunProject } from "@/data"

export interface FunProjectsSectionProps {
  projects: readonly FunProject[]
}

const FLIP_MS = 500

const faceFrame =
  "absolute inset-0 [transform-style:preserve-3d]"

function CardActions({
  project,
  onFlip,
}: {
  project: FunProject
  onFlip: () => void
}) {
  return (
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
        onClick={onFlip}
      >
        Flip
      </button>
    </div>
  )
}

function FunCard({ project }: { project: FunProject }) {
  const [flipped, setFlipped] = useState(false)
  const [face, setFace] = useState(false)
  const switchTimer = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (switchTimer.current !== null) window.clearTimeout(switchTimer.current)
    }
  }, [])

  const toggle = () => {
    const next = !flipped
    setFlipped(next)
    if (switchTimer.current !== null) window.clearTimeout(switchTimer.current)
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 0
      : FLIP_MS / 2
    switchTimer.current = window.setTimeout(() => {
      setFace(next)
      switchTimer.current = null
    }, delay)
  }

  return (
    <div className="@container [perspective:1200px]">
      <div
        className={cn(
          "relative aspect-[1024/894] transition-transform duration-500 ease-[cubic-bezier(0.42,0,0.58,1)] [transform-style:preserve-3d] motion-reduce:transition-none",
          flipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]",
        )}
      >
        <div
          className={cn(
            faceFrame,
            "[transform:translateZ(1px)]",
            face && "pointer-events-none opacity-0",
          )}
        >
          <div className="absolute inset-0 overflow-hidden rounded-xl bg-[#f6efe8] ring-1 ring-border">
            <img
              src={project.image}
              alt={project.title}
              className="size-full object-cover object-center"
            />
            <CardActions project={project} onFlip={toggle} />
          </div>
        </div>
        <div
          className={cn(
            faceFrame,
            "[transform:rotateY(180deg)_translateZ(1px)]",
            !face && "pointer-events-none opacity-0",
          )}
        >
          <div className="absolute inset-0 flex flex-col overflow-hidden rounded-xl bg-card p-4 pb-16 ring-1 ring-border @min-[36rem]:p-5 @min-[36rem]:pb-16">
            <h3 className="font-heading text-base font-semibold leading-tight @min-[22rem]:text-lg @min-[30rem]:text-2xl @min-[36rem]:text-4xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-snug text-muted-foreground @min-[22rem]:text-base @min-[22rem]:leading-relaxed @min-[30rem]:text-lg @min-[36rem]:mt-4 @min-[36rem]:text-2xl">
              {project.description}
            </p>
            <CardActions project={project} onFlip={toggle} />
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
