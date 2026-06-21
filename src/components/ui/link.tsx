import * as React from "react"
import { Button, buttonVariants } from './button'
import { cn } from "@/lib/utils"

type LinkProps = React.ComponentProps<"a"> & {
  variant?: Parameters<typeof buttonVariants>[0]["variant"]
  size?: Parameters<typeof buttonVariants>[0]["size"]
}

function Link({
  href,
  title,
  variant = "link",
  className,
  target = "_self",
  size = "default",
  children,
  ...props
}: LinkProps) {
  const rel = target === "_blank" ? "noopener noreferrer" : undefined
  return (
    <Button asChild variant={variant} size={size} className={cn(className)}>
      <a href={href} title={title} target={target} rel={rel} {...props}>
        {children}
      </a>
    </Button>
  )
}

export { Link }
