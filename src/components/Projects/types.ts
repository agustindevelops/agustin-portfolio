export type LinkTarget = "_self" | "_blank"

export interface ProjectAction {
  id: string
  label: string
  href: string
  target?: LinkTarget
  rel?: string
  ariaLabel?: string
  variant?: "primary" | "secondary" | "text"
}

export interface ProjectFeature {
  id: string
  text: string
  detailHref?: string
}

export interface ProjectMedia {
  src: string
  alt: string
  width?: number
  height?: number
}

export interface ProjectUnit {
  id: string
  title: string
  subtitle?: string
  description?: string
  iconKey?: string
  badge?: string
  features?: ProjectFeature[]
  tags?: string[]
  media?: ProjectMedia
  actions?: ProjectAction[]
  showAllFeatures?: boolean
}

export interface PortfolioProject {
  id: string
  title: string
  eyebrow?: string
  description?: string
  supportingText?: string
  media?: ProjectMedia
  units: ProjectUnit[]
  actions?: ProjectAction[]
}
