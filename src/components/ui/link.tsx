import type { ComponentProps } from "react"
import type { VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Link as RouterLink } from "react-router"

import { buttonVariants } from "@/components/ui/button"

function Link({
  className,
  variant,
  size,
  href,
  target,
  rel,
  ...props
}: ComponentProps<"a"> & VariantProps<typeof buttonVariants>) {
  const classes = cn(
    variant
      ? buttonVariants({ variant, size })
      : "text-sm font-medium text-brand underline-offset-4 transition-colors duration-200 hover:text-brand/80",
    "cursor-pointer",
    className,
  )

  const isInternal = typeof href === "string" && href.startsWith("/")
  const isExternal = typeof href === "string" && /^https?:\/\//.test(href)

  if (isInternal && href) {
    return (
      <RouterLink to={href} data-slot="link" className={classes} {...props} />
    )
  }

  return (
    <a
      href={href}
      data-slot="link"
      className={classes}
      target={isExternal ? (target ?? "_blank") : target}
      rel={isExternal ? (rel ?? "noreferrer") : rel}
      {...props}
    />
  )
}

export { Link }
