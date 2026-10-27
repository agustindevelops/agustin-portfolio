import type { ReactNode } from 'react'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skill', label: 'Skill' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

function Bar({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded bg-neutral-200 ${className}`} />
  )
}

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-neutral-200 py-16">
      <h2 className="text-sm font-medium tracking-wide text-neutral-900">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  )
}

function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <a href="#top" className="text-sm font-medium">
            Agustin Manriquez Cruz
          </a>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-neutral-500 hover:text-neutral-900"
              >
                {section.label}
              </a>
            ))}
            <a
              href="#resume"
              className="rounded-md bg-neutral-900 px-3 py-1.5 text-sm text-white hover:bg-neutral-700"
            >
              Resume
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        <section className="py-20">
          <Bar className="h-3 w-24" />
          <h1 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
            Agustin Manriquez Cruz
          </h1>
          <div className="mt-6 max-w-xl space-y-3">
            <Bar className="h-4 w-full" />
            <Bar className="h-4 w-5/6" />
            <Bar className="h-4 w-2/3" />
          </div>
          <div className="mt-8 flex gap-3">
            <Bar className="h-10 w-28 rounded-md" />
            <Bar className="h-10 w-28 rounded-md" />
          </div>
        </section>

        <Section id="about" title="About">
          <div className="grid gap-8 sm:grid-cols-[160px_1fr]">
            <Bar className="aspect-square w-full rounded-lg" />
            <div className="space-y-3">
              <Bar className="h-4 w-full" />
              <Bar className="h-4 w-full" />
              <Bar className="h-4 w-11/12" />
              <Bar className="h-4 w-4/5" />
              <Bar className="h-4 w-2/3" />
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="space-y-8">
            {Array.from({ length: 3 }, (_, index) => (
              <div
                key={index}
                className="grid gap-4 border-l border-neutral-200 pl-6 sm:grid-cols-[140px_1fr]"
              >
                <Bar className="h-3 w-24" />
                <div className="space-y-3">
                  <Bar className="h-4 w-48" />
                  <Bar className="h-3 w-32" />
                  <Bar className="h-3 w-full" />
                  <Bar className="h-3 w-5/6" />
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skill" title="Skill">
          <div className="flex flex-wrap gap-3">
            {['w-16', 'w-24', 'w-20', 'w-28', 'w-14', 'w-32', 'w-20', 'w-24'].map(
              (width, index) => (
                <Bar key={index} className={`h-8 rounded-full ${width}`} />
              ),
            )}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-6 sm:grid-cols-3">
            {Array.from({ length: 3 }, (_, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-lg border border-neutral-200"
              >
                <Bar className="aspect-video w-full rounded-none" />
                <div className="space-y-3 p-4">
                  <Bar className="h-4 w-3/4" />
                  <Bar className="h-3 w-full" />
                  <Bar className="h-3 w-5/6" />
                  <div className="flex gap-2 pt-2">
                    <Bar className="h-5 w-12 rounded-full" />
                    <Bar className="h-5 w-16 rounded-full" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="grid gap-10 sm:grid-cols-2">
            <div className="space-y-3">
              <Bar className="h-4 w-40" />
              <Bar className="h-4 w-full" />
              <Bar className="h-4 w-4/5" />
              <div className="flex gap-3 pt-4">
                <Bar className="h-9 w-9 rounded-full" />
                <Bar className="h-9 w-9 rounded-full" />
                <Bar className="h-9 w-9 rounded-full" />
              </div>
            </div>
            <div className="space-y-4">
              <Bar className="h-10 w-full rounded-md" />
              <Bar className="h-10 w-full rounded-md" />
              <Bar className="h-28 w-full rounded-md" />
              <Bar className="h-10 w-28 rounded-md" />
            </div>
          </div>
        </Section>

        <section id="resume" className="scroll-mt-20 border-t border-neutral-200 py-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-3">
              <h2 className="text-sm font-medium tracking-wide">Resume</h2>
              <Bar className="h-3 w-64" />
            </div>
            <a
              href="#resume"
              className="rounded-md bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-700"
            >
              Resume
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
