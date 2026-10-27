import type { ReactNode } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "@/components/ui/link"
import { Skeleton } from "@/components/ui/skeleton"

const skillGroups = [
  "Frontend",
  "Backend",
  "Infrastructure",
  "Workflows",
] as const

function Section({
  id,
  title,
  soft = false,
  children,
}: {
  id: string
  title: string
  soft?: boolean
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-24 ${soft ? "bg-soft" : "bg-background"}`}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-3 h-1 w-10 rounded-full bg-brand" />
        <h2 className="text-3xl">{title}</h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <Link
            href="#top"
            className="font-heading text-lg font-bold text-brand hover:text-brand"
          >
            Agustin.dev
          </Link>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="#work">Work</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
            <Link href="#contact" variant="default">
              Let's Talk
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-background">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 top-8 size-80 rounded-full bg-lilac/50"
          />
          <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-6 py-24 sm:py-32">
            <div className="max-w-3xl space-y-4">
              <Skeleton className="h-12 w-4/5 sm:h-16" />
              <Skeleton className="h-12 w-3/5" />
            </div>
            <div className="max-w-xl space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <Link href="#work" variant="default" size="lg" className="w-fit">
              Explore My Work
            </Link>
          </div>
        </section>

        <Section id="work" title="Featured Projects">
          <div className="grid gap-8 lg:grid-cols-3">
            {Array.from({ length: 3 }, (_, index) => (
              <Card key={index} className="h-full">
                <Skeleton className="aspect-video w-full rounded-none" />
                <CardHeader>
                  <CardTitle>
                    <Skeleton className="h-5 w-3/4" />
                  </CardTitle>
                  <CardDescription className="space-y-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-5/6" />
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {["w-12", "w-16", "w-10"].map((width, tag) => (
                    <Badge
                      key={tag}
                      variant="mint"
                      className="h-6 px-2 font-mono"
                    >
                      <Skeleton className={`h-2.5 ${width} bg-foreground/15`} />
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter className="bg-transparent">
                  <Link href="#work" aria-label={`Project ${index + 1}`}>
                    <Skeleton className="h-3 w-16" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="about" title="About Me" soft>
          <div className="grid items-center gap-10 md:grid-cols-[200px_1fr]">
            <Skeleton className="aspect-square w-full max-w-48 rounded-xl" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills & Tools">
          <div className="grid gap-10 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group} className="space-y-4">
                <h3 className="text-lg">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {["w-16", "w-20", "w-14", "w-24"].map((width, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="h-7 border-lilac px-3 hover:bg-mint/60"
                    >
                      <Skeleton className={`h-2.5 ${width}`} />
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" soft>
          <div className="max-w-xl space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
          <Button type="button" size="lg" className="mt-8 h-12 px-8 text-base">
            Get in Touch
          </Button>
        </Section>
      </main>
    </div>
  )
}

export default App
