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

function FlowerMark({ cx, cy, scale = 1 }: { cx: number; cy: number; scale?: number }) {
  const r = 4.5 * scale

  return (
    <g>
      <ellipse cx={cx} cy={cy - r * 0.85} rx={r * 0.55} ry={r * 0.8} />
      <ellipse cx={cx} cy={cy + r * 0.85} rx={r * 0.55} ry={r * 0.8} />
      <ellipse cx={cx - r * 0.85} cy={cy} rx={r * 0.8} ry={r * 0.55} />
      <ellipse cx={cx + r * 0.85} cy={cy} rx={r * 0.8} ry={r * 0.55} />
      <circle cx={cx} cy={cy} r={r * 0.35} />
    </g>
  )
}

function BrowserChrome() {
  return (
    <>
      <rect x="6" y="8" width="52" height="48" rx="5" />
      <path d="M6 18h52" />
      <circle cx="14" cy="13" r="1.25" fill="currentColor" stroke="none" />
      <circle cx="20" cy="13" r="1.25" fill="currentColor" stroke="none" />
      <circle cx="26" cy="13" r="1.25" fill="currentColor" stroke="none" />
    </>
  )
}

function CustomerWebsiteIcon() {
  return (
    <IconSvg>
      <BrowserChrome />
      <path d="M20 34h24v18H20z" />
      <path d="M18 34h28l-4-6H22z" />
      <path d="M29 42h6v10h-6z" />
      <FlowerMark cx={32} cy={28} scale={0.7} />
    </IconSvg>
  )
}

function AdminOperationsIcon() {
  return (
    <IconSvg>
      <BrowserChrome />
      <rect x="16" y="24" width="22" height="24" rx="2.5" />
      <path d="M16 32h22" />
      <path d="M22 21v6" />
      <path d="M32 21v6" />
      <path d="M21 37h3" />
      <path d="M27 37h3" />
      <path d="M21 42h3" />
      <circle cx="44" cy="44" r="9" />
      <path d="M40 44.5 43 47.5 49 39.5" />
    </IconSvg>
  )
}

function WarehouseMobileIcon() {
  return (
    <IconSvg>
      <rect x="18" y="6" width="28" height="52" rx="5" />
      <path d="M28 11h8" />
      <path d="M30 53h4" />
      <path d="M25 40h14v12H25z" />
      <path d="M25 40 32 33l7 7" />
      <FlowerMark cx={32} cy={44} scale={0.55} />
    </IconSvg>
  )
}

export { AdminOperationsIcon, CustomerWebsiteIcon, WarehouseMobileIcon }
