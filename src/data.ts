export const profile = {
  name: "Agustin Manriquez Cruz",
  title: "Full Stack Web Developer",
  location: "Windcrest, TX 78239",
  phone: "(210) 314-0514",
  email: "agustinmanriquezcruz@outlook.com",
  availability: "Open to opportunities",
  intro:
    "I solve complex engineering problems and build software that makes people's lives easier.",
  summary:
    "Full stack web developer with experience building client-facing platforms, secure healthcare applications, CMS-backed websites, payment systems, and cloud infrastructure. Skilled across frontend development, backend development, database modeling, authentication, CMS architecture, API integrations, and cloud-based deployments.",
}

export const stats = [
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
]

export const experience = [
  {
    role: "Full Stack Senior Software Developer",
    company: "BIDFTA",
    url: "https://www.bidfta.com/",
    location: "Cincinnati, OH",
    dates: "May 2022 – May 2026",
    highlights: [
      "Owned full-stack development across a large auction marketplace, warehouse operations, content infrastructure, applied AI, and authentication systems.",
      "Built and maintained a Next.js auction marketplace serving more than 1.2 million users, including BigCommerce integrations, real-time bidding, Stripe payments, and Java APIs.",
      "Replaced an underperforming machine-learning model with an OpenAI pipeline that categorized hundreds of millions of products for customer filtering.",
      "Architected a Strapi CMS on AWS using EC2, RDS/MySQL, S3, and Bitbucket pipelines, giving marketing teams control of pages, campaigns, and promotional content.",
      "Built warehouse tools for inventory, product lotting, transaction history, search, and auditing using Next.js, Auth0, Python, and Elasticsearch; added Spanish-language support.",
      "Architected a zero-downtime migration of 1.2 million accounts to Firebase Authentication using a dual-authentication strategy and supported release of the company’s cross-platform mobile application.",
    ],
  },
  {
    role: "Full Stack Web Developer",
    company: "Texas A&M Health Science Center, Rural and Community Health Institute",
    url: "https://architexas.org/",
    location: "College Station, TX",
    dates: "May 2020 – June 2022",
    highlights: [
      "Developed secure full-stack web applications supporting healthcare peer review programs, building HIPAA-conscious workflows for collecting, reviewing, and reporting on protected health information (PHI) used by hospitals and medical professionals.",
      "Developed secure, multi-stage workflows for collecting and reviewing clinical incident data across administrators, physicians, and other permission-based user roles.",
      "Built configurable reporting tools that aggregated clinical incident data into printable reports, charts, and visual summaries based on user-selected criteria.",
      "Designed full-stack application features using React, Express, Sequelize, Redux, and relational database models.",
      "Integrated FusionAuth authentication and authorization to enforce role-based access to sensitive healthcare data.",
      "Collaborated directly with healthcare stakeholders to gather requirements, refine workflows, and deliver improvements based on user feedback.",
      "Translated Figma designs into responsive, production-ready interfaces while accounting for usability, security, and PHI-handling requirements.",
    ],
  },
  {
    role: "Web Developer",
    company: "Marketing for Change",
    url: "https://marketingforchange.com/",
    location: "Alexandria, VA",
    dates: "December 2021 – May 2022",
    highlights: [
      "Developed and maintained lightweight, performance-focused websites supporting digital marketing and public-interest campaigns.",
      "Modernized multiple legacy PHP applications by upgrading them from Laravel 5 to Laravel 8, resolving framework, dependency, and compatibility issues.",
      "Developed lightweight frontend features using HTML, CSS, and JavaScript, prioritizing page performance and SEO best practices.",
      "Updated and styled content across the company website and campaign projects, integrating frontend components with Webflow and other marketing tools.",
    ],
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

export const projects = [
  {
    name: "Project Hunter",
    slug: "project-hunter",
    url: "https://job-hunter-mu-inky.vercel.app/",
    summary:
      "A local-first job application assistant that stores reusable career information in the browser and uses AI to create tailored resumes and cover letters.",
    highlights: [
      "Designed a structured master profile that users can reuse across applications without repeatedly entering the same information.",
      "Used Dexie and IndexedDB to keep personal data on the user’s device instead of maintaining a centralized database.",
      "Integrated bring-your-own-key AI workflows for tailoring application materials, generating PDFs, and tracking job applications.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Dexie",
      "IndexedDB",
      "Vercel AI SDK",
      "React PDF",
      "React Hook Form",
      "Vercel",
    ],
  },
  {
    name: "Aniah Social Events",
    slug: "aniah-social-events",
    url: "https://aniahsocialevents.com",
    summary:
      "A custom marketing website for an event planning company, with a headless CMS so the owner can manage content independently.",
    highlights: [
      "Built a responsive business website using Next.js and integrated Calendly for consultation scheduling.",
      "Implemented Contentful so the client can manage services, galleries, blog posts, FAQs, and website copy without developer support.",
      "Developed reusable UI components and interactive experiences with Framer Motion, including testimonial animations, galleries, and page transitions.",
      "Created SEO-friendly pages for local wedding and event planning services in Austin.",
    ],
    stack: ["Next.js", "Contentful", "Calendly", "Framer Motion"],
  },
  {
    name: "M.E. Picnics",
    slug: "me-picnics",
    url: "https://mepicnics.com",
    summary:
      "A full-stack booking website for a picnic experience company, combining marketing, scheduling, payments, and calendar management.",
    highlights: [
      "Built the website using Next.js with service packages configured as Stripe products.",
      "Integrated Stripe Checkout and connected bookings to the client’s Google Calendar.",
      "Added Google Analytics and SEO-focused pages for picnic-related searches in San Antonio.",
      "Deployed and maintained the site on Netlify.",
    ],
    stack: ["Next.js", "Stripe", "Google Calendar", "Google Analytics", "Netlify"],
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
