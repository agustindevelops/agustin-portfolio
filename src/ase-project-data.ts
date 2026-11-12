import type { PortfolioProject } from "@/components/Projects/types"

export const aseProject = {
  id: "aniah-social-events",
  title: "Aniah Social Events",
  eyebrow: "Integrated business platform · 3 connected applications",
  description:
    "Built three interconnected applications that take an event from customer booking and secure payment through business administration to physical inventory fulfillment. A shared backend connects the public storefront, operations dashboard, and warehouse mobile app into one cohesive business system.",
  supportingText:
    "Customer booking & payment → Operations & inventory → Warehouse pickup & return",
  units: [
    {
      id: "ase-customer-website",
      title: "Customer Website",
      subtitle: "Public storefront & booking",
      iconKey: "ase-customer-website",
      badge: "Live · Public",
      description:
        "A customer-facing experience that converts event inquiries into booked, paid orders connected to live package and availability data.",
      features: [
        {
          id: "ase-customer-booking",
          text: "Multi-step booking with package styles, guest counts, dates, and event details",
        },
        {
          id: "ase-customer-catalog",
          text: "Live celebration catalog and date availability from the central API",
        },
        {
          id: "ase-customer-stripe",
          text: "Stripe Checkout with server-validated pricing and payment confirmation",
        },
        {
          id: "ase-customer-contentful",
          text: "Contentful-managed landing pages, galleries, services, FAQs, and blog",
        },
        {
          id: "ase-customer-photos",
          text: "Custom event photo uploads attached to customer reservations",
        },
        {
          id: "ase-customer-calendly",
          text: "Calendly consultation booking and Mailchimp email subscriptions",
        },
        {
          id: "ase-customer-analytics",
          text: "Google Analytics and Google Tag Manager integrations",
        },
      ],
      tags: [
        "Next.js 15",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Contentful",
        "Stripe",
        "Google Analytics",
        "Google Tag Manager",
        "Calendly",
        "Mailchimp",
      ],
      actions: [
        {
          id: "ase-customer-visit",
          label: "Visit website",
          href: "https://aniahsocialevents.com/",
        },
        {
          id: "ase-customer-github",
          label: "GitHub repository",
          href: "https://github.com/agustindevelops/aniah-social-events",
        },
      ],
    },
    {
      id: "ase-admin-operations",
      title: "Administration & API",
      subtitle: "Operations dashboard & system of record",
      iconKey: "ase-admin-operations",
      badge: "Live · Restricted access",
      description:
        "The central operations platform and API powering inventory, package publishing, event orders, payments, and secure data access.",
      features: [
        {
          id: "ase-admin-data-model",
          text: "Prisma and PostgreSQL data model for inventory, packages, and event orders",
        },
        {
          id: "ase-admin-dashboard",
          text: "Operations dashboard with warehouse totals, upcoming events, issues, and activity",
        },
        {
          id: "ase-admin-inventory",
          text: "Searchable inventory with warehouse, category, location, and archive filters",
        },
        {
          id: "ase-admin-packages",
          text: "Package publishing that feeds the customer storefront through a shared API",
        },
        {
          id: "ase-admin-stripe",
          text: "Server-side Stripe Checkout sessions, price validation, and payment webhooks",
        },
        {
          id: "ase-admin-auth",
          text: "Firebase authentication with verified tokens and organization-scoped authorization",
        },
        {
          id: "ase-admin-r2",
          text: "Cloudflare R2 asset storage with secure presigned upload workflows",
        },
      ],
      tags: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Prisma 7",
        "PostgreSQL",
        "Firebase Auth",
        "Stripe",
        "Cloudflare R2",
      ],
      actions: [
        {
          id: "ase-admin-visit",
          label: "Visit admin portal",
          href: "https://admin.aniahsocialevents.com/",
        },
        {
          id: "ase-admin-github",
          label: "GitHub repository",
          href: "https://github.com/agustindevelops/ase-wms-web",
        },
      ],
    },
    {
      id: "ase-warehouse-mobile",
      title: "Warehouse Mobile App",
      subtitle: "Inventory labeling & order fulfillment",
      iconKey: "ase-warehouse-mobile",
      badge: "Internal Android app · Google Play access on request",
      description:
        "An authenticated Android warehouse tool for cataloging rental inventory, printing QR labels, locating items, and processing event pickups and returns.",
      features: [
        {
          id: "ase-warehouse-ble",
          text: "Native Bluetooth Low Energy integration with NIIMBOT D110 label printers",
        },
        {
          id: "ase-warehouse-labels",
          text: "On-device QR label generation and printing for inventory and locations",
        },
        {
          id: "ase-warehouse-scan",
          text: "Camera-based QR scanning for identifying items and assigning storage locations",
        },
        {
          id: "ase-warehouse-mapping",
          text: "Hierarchical warehouse mapping across zones, aisles, racks, and shelves",
        },
        {
          id: "ase-warehouse-picking",
          text: "Event-order picking and returns with item-level quantity tracking",
        },
        {
          id: "ase-warehouse-auth",
          text: "Firebase custom-token sign-in and authenticated Bearer-token API requests",
        },
        {
          id: "ase-warehouse-photos",
          text: "In-app inventory photography with secure Cloudflare R2 uploads",
        },
      ],
      tags: [
        "React Native",
        "Expo",
        "TypeScript",
        "Firebase Auth",
        "Bluetooth LE",
        "NIIMBOT D110",
        "gluestack-ui",
        "UniWind",
      ],
      actions: [
        {
          id: "ase-warehouse-github",
          label: "GitHub repository",
          href: "https://github.com/agustindevelops/ase-wms-app",
        },
      ],
    },
  ],
} satisfies PortfolioProject
