import { useEffect, useState, type ReactNode } from "react"
import { Menu, X } from "lucide-react"
import { Route, Routes, useLocation } from "react-router"

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
import { GithubContributions } from "@/components/GithubContributions"
import { Link } from "@/components/ui/link"
import {
  education,
  experience,
  profile,
  projects,
  skillGroups,
  stats,
} from "@/data"
import { MarkdownPreviewPage } from "@/pages/markdown-preview"
import { ProjectPage } from "@/pages/project"

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
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
          href="/#top"
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
          <Link href="/#education" variant="default">
            Education
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
              href="/#education"
              variant="default"
              size="lg"
              onClick={close}
              className="mt-2 w-full"
            >
              Education
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  )
}

function ScrollToLocation() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = hash.slice(1)
    document.getElementById(id)?.scrollIntoView()
  }, [pathname, hash])

  return null
}

function Home() {
  return (
    <main>
        <section className="relative overflow-hidden bg-background">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 top-16 size-72 rounded-full bg-lilac/60"
          />
          <div className="relative mx-auto grid max-w-5xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:gap-12 lg:py-28">
            <div className="min-w-0">
              <h1 className="text-balance text-3xl sm:text-5xl">
                {profile.name}
              </h1>
              <Badge variant="mint" className="mt-4 h-7 px-3 text-sm">
                {profile.availability}
              </Badge>
              <p className="mt-6 font-heading text-xl font-bold text-brand sm:text-2xl">
                {profile.title}
              </p>
              <p className="mt-5 max-w-xl text-lg">{profile.intro}</p>
              <Link
                href="/#projects"
                variant="default"
                size="lg"
                className="mt-8 w-full sm:w-fit"
              >
                Explore My Work
              </Link>
            </div>
            <img
              src={portrait}
              alt={profile.name}
              width={400}
              height={400}
              className="mx-auto aspect-square w-full max-w-72 rounded-xl object-cover ring-1 ring-border sm:max-w-sm"
            />
          </div>
          <div className="relative mx-auto max-w-5xl px-4 pb-2 sm:px-6">
            <div className="rounded-xl bg-soft p-4 ring-1 ring-border sm:p-5">
              <GithubContributions />
            </div>
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
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            {profile.summary}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">{profile.location}</p>
        </Section>

        <Section id="experience" title="Experience">
          <div className="space-y-6">
            {experience.map((job) => (
              <Card key={`${job.company}-${job.dates}`}>
                <CardHeader>
                  <CardDescription>{job.dates}</CardDescription>
                  <CardTitle>{job.role}</CardTitle>
                  <CardDescription>
                    <Link href={job.url}>{job.company}</Link>
                    {" — "}
                    {job.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-4 leading-relaxed text-muted-foreground">
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills" soft>
          <div className="grid gap-10 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.name} className="space-y-4">
                <h3 className="text-lg">{group.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="h-7 border-lilac px-3 hover:bg-mint/60"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.slug} className="h-full">
                <CardHeader>
                  <CardTitle>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-base text-foreground hover:text-brand"
                    >
                      {project.name}
                    </Link>
                  </CardTitle>
                  <CardDescription>{project.summary}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <ul className="list-disc space-y-2 pl-4 leading-relaxed text-muted-foreground">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge
                        key={item}
                        variant="mint"
                        className="h-6 px-2 font-mono"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="justify-between gap-3">
                  <Link href={`/projects/${project.slug}`}>View project</Link>
                  <Link href={project.url}>Visit site</Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" soft>
          <div className="max-w-xl space-y-2 leading-relaxed">
            <p>{profile.location}</p>
            <p>
              <Link href={`tel:+1${profile.phone.replace(/\D/g, "")}`}>
                {profile.phone}
              </Link>
            </p>
            <p>
              <Link href={`mailto:${profile.email}`}>{profile.email}</Link>
            </p>
          </div>
          <Link
            href={`mailto:${profile.email}`}
            variant="default"
            size="lg"
            className="mt-8 h-12 w-full px-8 text-base sm:w-fit"
          >
            Get in Touch
          </Link>
        </Section>

        <Section id="education" title="Education">
          <div className="space-y-6">
            {education.map((item) => (
              <div key={item.school}>
                <h3 className="text-lg">{item.school}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.location}
                </p>
                <p className="mt-1">{item.credential}</p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </Section>
    </main>
  )
}

function App() {
  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-background text-foreground">
      <ScrollToLocation />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/markdown-preview" element={<MarkdownPreviewPage />} />
      </Routes>
    </div>
  )
}

export default App
