import type { ComponentProps } from "react"
import type { VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { buttonVariants } from "@/components/ui/button"

function Link({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"a"> & VariantProps<typeof buttonVariants>) {
  return (
    <a
      data-slot="link"
      className={cn(
        variant
          ? buttonVariants({ variant, size })
          : "text-sm font-medium text-brand underline-offset-4 transition-colors duration-200 hover:text-brand/80",
        "cursor-pointer",
        className,
      )}
      {...props}
    />
  )
}

export { Link }
