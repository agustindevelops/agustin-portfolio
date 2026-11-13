import type { SVGProps } from "react"

function IconSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-12"
      {...props}
    />
  )
}

function LaizMobileIcon() {
  return (
    <IconSvg>
      <rect x="18" y="6" width="28" height="52" rx="5" />
      <path d="M28 12h8" />
      <path d="M30 52h4" />
      <path d="M25 44l6-6 4 2 5-6" />
      <circle cx="41" cy="32" r="2.4" />
      <circle cx="41" cy="32" r="0.9" fill="currentColor" stroke="none" />
    </IconSvg>
  )
}

function LaizBackendIcon() {
  return (
    <IconSvg>
      <rect x="6" y="12" width="28" height="9" rx="2" />
      <rect x="6" y="27" width="28" height="9" rx="2" />
      <rect x="6" y="42" width="28" height="9" rx="2" />
      <circle cx="12" cy="16.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="31.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="46.5" r="1.2" fill="currentColor" stroke="none" />
      <path d="M34 31.5h8" />
      <circle cx="46" cy="20" r="2.4" />
      <circle cx="56" cy="31.5" r="2.4" />
      <circle cx="46" cy="44" r="2.4" />
      <path d="M48 21.4 54 29.6" />
      <path d="M48 42.6 54 33.4" />
      <path d="M46 22.6v18.8" />
    </IconSvg>
  )
}

export { LaizBackendIcon, LaizMobileIcon }
