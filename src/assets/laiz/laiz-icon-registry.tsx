import type { ReactNode } from "react"

import type { ProjectUnit } from "@/components/Projects/types"

import { LaizBackendIcon, LaizMobileIcon } from "./LAIZApplicationIcons"

const laizIcons = {
  "laiz-mobile": LaizMobileIcon,
  "laiz-backend": LaizBackendIcon,
} as const

function renderLaizUnitIcon(unit: ProjectUnit): ReactNode {
  if (!unit.iconKey) {
    return null
  }

  const Icon = laizIcons[unit.iconKey as keyof typeof laizIcons]

  return Icon ? <Icon /> : null
}

export { renderLaizUnitIcon }
