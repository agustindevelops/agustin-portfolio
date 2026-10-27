import { useEffect, useState, type ReactNode } from "react"
import { Menu, X } from "lucide-react"

import portrait from "@/assets/agustin-portrait.jpg"
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

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const

const stats = [
  {
    value: "1.2M",
    label: "Registered accounts supported at BIDFTA",
  },
  {
    value: "1.2M",
    label: "Accounts migrated with zero downtime",
  },
  {
    value: "100M+",
    label: "Products handled by an AI categorization pipeline",
  },
] as const

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
      className={`scroll-mt-24 py-16 md:py-24 ${soft ? "bg-soft" : "bg-background"}`}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-3 h-1 w-10 rounded-full bg-brand" />
        <h2 className="text-2xl sm:text-3xl">{title}</h2>
        <div className="mt-8 md:mt-12">{children}</div>
      </div>
    </section>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false)
    }

    const desktop = window.matchMedia("(min-width: 1024px)")
    function onViewportChange() {
      if (desktop.matches) setOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)
    desktop.addEventListener("change", onViewportChange)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      desktop.removeEventListener("change", onViewportChange)
    }
  }, [])

  function close() {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="#top"
          onClick={close}
          className="font-heading text-lg font-bold text-brand hover:text-brand"
        >
          Agustin.dev
        </Link>
        <nav className="hidden items-center gap-x-6 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="#resume" variant="default">
            Resume
          </Link>
        </nav>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="size-11 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border px-4 py-3 sm:px-6 lg:hidden"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-lg px-3 py-3 text-base hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#resume"
              variant="default"
              size="lg"
              onClick={close}
              className="mt-2 w-full"
            >
              Resume
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  )
}

function App() {
  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-background">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 top-16 size-72 rounded-full bg-lilac/60"
          />
          <div className="relative mx-auto grid max-w-5xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:gap-12 lg:py-28">
            <div className="min-w-0">
              <h1 className="text-balance text-3xl sm:text-5xl">
                Agustin Manriquez Cruz
              </h1>
              <Badge variant="mint" className="mt-4 h-7 px-3 text-sm">
                Open to opportunities
              </Badge>
              <p className="mt-6 font-heading text-xl font-bold text-brand sm:text-2xl">
                Senior Full-Stack Software Engineer
              </p>
              <p className="mt-5 max-w-xl text-lg">
                I solve complex engineering problems and build software that
                makes people's lives easier.
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                I'm a full-stack engineer with experience building and
                modernizing production applications across e-commerce,
                healthcare, and business operations. I've led development of a
                high-traffic auction marketplace, built secure internal tools,
                and delivered systems spanning frontend development, backend
                services, cloud infrastructure, and AI integrations.
              </p>
              <Link
                href="#projects"
                variant="default"
                size="lg"
                className="mt-8 w-full sm:w-fit"
              >
                Explore My Work
              </Link>
            </div>
            <img
              src={portrait}
              alt="Agustin Manriquez Cruz"
              width={400}
              height={400}
              className="mx-auto aspect-square w-full max-w-72 rounded-xl object-cover ring-1 ring-border sm:max-w-sm"
            />
          </div>
          <div className="relative mx-auto grid max-w-5xl gap-6 border-t border-border px-4 py-8 sm:grid-cols-3 sm:gap-8 sm:px-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl font-bold text-brand sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Section id="about" title="About" soft>
          <div className="grid items-center gap-10 md:grid-cols-[200px_1fr]">
            <Skeleton className="mx-auto aspect-square w-full max-w-48 rounded-xl md:mx-0" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="space-y-6">
            {Array.from({ length: 3 }, (_, index) => (
              <Card key={index}>
                <CardHeader>
                  <Skeleton className="h-3 w-24" />
                  <CardTitle>
                    <Skeleton className="h-5 w-48" />
                  </CardTitle>
                  <CardDescription>
                    <Skeleton className="h-3 w-32" />
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-5/6" />
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills" soft>
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

        <Section id="projects" title="Projects">
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
                  <Link href="#projects" aria-label={`Project ${index + 1}`}>
                    <Skeleton className="h-3 w-16" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" soft>
          <div className="max-w-xl space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
          <Button
            type="button"
            size="lg"
            className="mt-8 h-12 w-full px-8 text-base sm:w-fit"
          >
            Get in Touch
          </Button>
        </Section>

        <Section id="resume" title="Resume">
          <div className="max-w-xl space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </Section>
      </main>
    </div>
  )
}

export default App
