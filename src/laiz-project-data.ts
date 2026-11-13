import type { PortfolioProject } from "@/components/Projects/types"

export const laizProject = {
  id: "laiz",
  title: "LAIZ",
  eyebrow: "AI-assisted wellness platform · 2 connected applications",
  description:
    "A connected mobile application and backend built to bring food logging, activity tracking, personal goals, actionable plans, and long-term progress into one experience. A cross-platform client handles everyday use while a dedicated API supports secure accounts, persistent records, and AI-assisted functionality.",
  supportingText:
    "Mobile experience ↔ Authenticated API ↔ Persistent data & AI services",
  units: [
    {
      id: "laiz-mobile",
      title: "LAIZ Mobile",
      subtitle: "Cross-platform wellness tracker",
      iconKey: "laiz-mobile",
      badge: "MVP test release in development",
      description:
        "A mobile experience designed to make daily tracking practical while connecting individual actions to clear personal goals and longer-term trends.",
      showAllFeatures: true,
      features: [
        {
          id: "laiz-mobile-food",
          text: "Food tracking with daily intake records and accessible history",
        },
        {
          id: "laiz-mobile-activity",
          text: "Activity tracking alongside nutrition in one routine",
        },
        {
          id: "laiz-mobile-goals",
          text: "Personal goal creation and progress tracking",
        },
        {
          id: "laiz-mobile-plans",
          text: "Plan creation and follow-through tracking",
        },
        {
          id: "laiz-mobile-progress",
          text: "Progress views connecting daily actions with longer-term trends",
        },
      ],
      tags: ["React Native", "Expo", "TypeScript"],
      actions: [
        {
          id: "laiz-mobile-github",
          label: "GitHub repository",
          href: "https://github.com/agustindevelops/nutrAItion-mobile",
        },
      ],
    },
    {
      id: "laiz-backend",
      title: "LAIZ API & AI Services",
      subtitle: "Authentication, data persistence & intelligent workflows",
      iconKey: "laiz-backend",
      badge: "Backend in development",
      description:
        "A Python API that centralizes authentication, long-lived tracking records, and the services required to connect mobile input with intelligent planning experiences.",
      showAllFeatures: true,
      features: [
        {
          id: "laiz-api-fastapi",
          text: "Python/FastAPI backend serving the mobile application's API contracts",
        },
        {
          id: "laiz-api-auth",
          text: "Firebase-authenticated endpoints and server-side token verification",
        },
        {
          id: "laiz-api-postgres",
          text: "PostgreSQL persistence for application data",
        },
        {
          id: "laiz-api-migrations",
          text: "Alembic migrations for version-controlled database changes",
        },
        {
          id: "laiz-api-ai",
          text: "OpenAI integration supporting AI-assisted application workflows",
        },
        {
          id: "laiz-api-docker",
          text: "Docker-based local development and service configuration",
        },
      ],
      tags: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Alembic",
        "Firebase Authentication",
        "OpenAI",
        "Docker",
      ],
      actions: [
        {
          id: "laiz-backend-github",
          label: "GitHub repository",
          href: "https://github.com/agustindevelops/nutrAItion-backend",
        },
      ],
    },
  ],
  actions: [
    {
      id: "laiz-website",
      label: "LAIZ project website",
      href: "https://hhais.com/projects/laiz",
    },
  ],
} satisfies PortfolioProject
