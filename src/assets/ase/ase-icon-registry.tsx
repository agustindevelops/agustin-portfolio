import type { ReactNode } from "react"

import type { ProjectUnit } from "@/components/Projects/types"

import {
  AdminOperationsIcon,
  CustomerWebsiteIcon,
  WarehouseMobileIcon,
} from "./ASEApplicationIcons"

const aseIcons = {
  "ase-customer-website": CustomerWebsiteIcon,
  "ase-admin-operations": AdminOperationsIcon,
  "ase-warehouse-mobile": WarehouseMobileIcon,
} as const

function renderAseUnitIcon(unit: ProjectUnit): ReactNode {
  if (!unit.iconKey) {
    return null
  }

  const Icon = aseIcons[unit.iconKey as keyof typeof aseIcons]

  return Icon ? <Icon /> : null
}

export { renderAseUnitIcon }
