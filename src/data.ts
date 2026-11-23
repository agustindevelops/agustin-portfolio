import { aseProject } from "@/ase-project-data"
import { laizProject } from "@/laiz-project-data"
import type { PortfolioProject } from "@/components/Projects/types"

export { experience } from "@/generated/portfolio"

export const profile = {
  name: "Agustin Manriquez Cruz",
  title: "Fat Stack Software Engineer",
  location: "Pflugerville, TX",
  phone: "(210) 314-0514",
  email: "agustindevelops@gmail.com",
  resume: "/Agustin_Manriquez_Cruz_Resume.pdf",
  availability: "Open to opportunities",
  intro:
    "I enjoy tackling complex problems and making them feel simple. My passion for engineering comes from the impact it has on people's lives. My experience spans everything from warehouse operations systems and large-scale marketplaces to mobile applications, with responsibilities ranging from planning and scoping to development and deployment. I am looking for a new home where I can grow my skills to the next level while bringing the lessons I've learned along the way. My biggest flaw is that I want to learn everything, so I thrive best in a fast-paced environment where I can build cool things without compromising integrity.",
  summary:
    "Full stack web developer with experience building client-facing platforms, secure healthcare applications, CMS-backed websites, payment systems, and cloud infrastructure. Skilled across frontend development, backend development, database modeling, authentication, CMS architecture, API integrations, and cloud-based deployments.",
}

export const stats = [
  {
    value: "12+ → 4 hrs",
    label:
      "Reduced end-of-year auditing time with a system built in just 3 weeks",
  },
  {
    value: "1.2M",
    label: "User accounts migrated with zero downtime at BIDFTA",
  },
  {
    value: "100M+",
    label:
      "Products processed through an AI-powered categorization pipeline",
  },
]

export const skillGroups = [
  {
    name: "Frontend",
    items: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Redux",
      "Figma-to-UI implementation",
    ],
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "Spring Boot",
      "Kotlin",
      "Sequelize ORM",
      "Prisma",
    ],
  },
  {
    name: "Databases",
    items: ["MySQL", "AWS RDS", "Sequelize ORM", "Prisma"],
  },
  {
    name: "Cloud & Infrastructure",
    items: [
      "AWS EC2",
      "AWS S3",
      "AWS RDS",
      "AWS SageMaker",
      "Docker",
      "Netlify",
      "Bitbucket Webhooks",
    ],
  },
  {
    name: "CMS & E-commerce",
    items: ["Strapi", "WordPress", "BigCommerce", "Contentful"],
  },
  {
    name: "Payments & Integrations",
    items: ["Stripe", "Google Calendar API", "Google Analytics"],
  },
  {
    name: "Authentication & Security",
    items: ["Auth0", "FusionAuth", "Secure PHI workflows"],
  },
  {
    name: "Languages",
    items: ["TypeScript", "JavaScript", "PHP", "Python", "Kotlin"],
  },
]

export const projects: PortfolioProject[] = [
  aseProject,
  laizProject,
  {
    id: "me-picnics",
    title: "M.E. Picnics",
    description:
      "A full-stack booking website for a picnic experience company, combining marketing, scheduling, payments, and calendar management.",
    units: [
      {
        id: "me-picnics-site",
        title: "M.E. Picnics",
        features: [
          {
            id: "me-picnics-packages",
            text: "Built the website using Next.js with service packages configured as Stripe products.",
          },
          {
            id: "me-picnics-checkout",
            text: "Integrated Stripe Checkout and connected bookings to the client’s Google Calendar.",
          },
          {
            id: "me-picnics-analytics",
            text: "Added Google Analytics and SEO-focused pages for picnic-related searches in San Antonio.",
          },
          {
            id: "me-picnics-deploy",
            text: "Deployed and maintained the site on Netlify.",
          },
        ],
        tags: ["Next.js", "Stripe", "Google Calendar", "Google Analytics", "Netlify"],
      },
    ],
    actions: [
      {
        id: "me-picnics-visit",
        label: "Visit site",
        href: "https://mepicnics.com",
      },
    ],
  },
]

export type FunProject = {
  id: string
  title: string
  description: string
  image: string
  href: string
  actionLabel: string
}

export const funProjects: FunProject[] = [
  {
    id: "balloon-calculator",
    title: "Balloon Garland Calculator",
    description:
      "I built this during a short time installing balloons at Pop and Drop, so my coworkers and I could see how many balloons to grab and mock up a garland before we started building.",
    image: "/fun/balloon-calculator.png",
    href: "https://balloon-calculator.vercel.app/?feet=12&style=color-blocked&c=color-0%3ABlush%3Ae8a0bf%3A8%3A0&c=color-1%3ASky%3A7eb8da%3A8%3A0&c=color-2%3AGold%3Af2c14e%3A8%3A0",
    actionLabel: "Open calculator",
  },
  {
    id: "thanksgiving-potluck",
    title: "Thanksgiving Potluck",
    description:
      "I love potlucks, but sometimes coordinating one can lead to too much of something and not enough of another. There is also a lot of back and forth when figuring out what to bring. This little project was to help me host potlucks by giving everyone one place to see the same list.",
    image: "/fun/thanksgiving-potluck.png",
    href: "https://aniah-and-agustin.vercel.app/",
    actionLabel: "Open potluck",
  },
]

export const markdownDemo = {
  id: "markdown-demo",
  markdown: `# Markdown component preview

This is a reusable **Markdown renderer**. It is not tied to blogs.

## Features

- [x] Headings, lists, and tables
- [x] Code highlighting
- [ ] A task that is still open
- Nested lists:
  1. First ordered item
     - Nested bullet
     - Another nested bullet
  2. Second ordered item

### Smaller heading

#### Level four

##### Level five

###### Level six

A paragraph with *emphasis*, ~~strikethrough~~, and \`inline code\`.

---

Visit [Streamdown](https://streamdown.ai/docs/getting-started), or the autolink https://streamdown.ai.

A non-HTTP link should stay inert: [blocked](javascript:alert(1)).

ThisLongUnbrokenTokenShouldWrapInsideTheContentColumnInsteadOfStretchingThePageHorizontally-abcdefghijklmnopqrstuvwxyz0123456789

![Portfolio mark](/icons.svg)

> This content comes from a local fixture.

| Capability | Source |
| --- | --- |
| Rendering | Streamdown |
| Syntax | Shiki plugin |
| Diagrams | Mermaid plugin |
| Notes | A wide cell with a long value that should scroll inside the table rather than the page |

\`\`\`tsx
export function Greeting({ name }: { name: string }) {
  return <h2>Hello, {name}</h2>;
}
\`\`\`

\`\`\`ts
export const answer: number = 42
\`\`\`

\`\`\`json
{ "ok": true, "source": "fixture" }
\`\`\`

\`\`\`bash
npm run dev
\`\`\`

\`\`\`not-a-real-language
echo "fallback highlighting"
\`\`\`

\`\`\`mermaid
flowchart LR
  A[Markdown string] --> B[Markdown component]
  B --> C[Styled output]
\`\`\`

\`\`\`mermaid
sequenceDiagram
  participant Page
  participant Markdown
  participant Streamdown
  Page->>Markdown: content string
  Markdown->>Streamdown: static render
  Streamdown-->>Page: styled output
\`\`\`

\`\`\`mermaid
flowchart LR
  this is not valid mermaid [[[
\`\`\`
`,
}

export const education = [
  {
    school: "Texas A&M University",
    location: "College Station, TX",
    credential: "Civil Engineering Studies",
    detail: "Completed 5 years of coursework",
  },
  {
    school: "Benjamin O. Davis High School",
    location: "Houston, TX",
    credential: "High School Diploma",
    detail: "June 2017",
  },
]
