import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        // Primary Button - Deep Slate Blue in light, Cyan in dark
        default:
          "bg-[#1A2B3C] text-white dark:bg-secondary dark:text-[#0F172A] rounded hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5",
        // Destructive
        destructive:
          "bg-destructive text-white rounded hover:bg-destructive/90 focus-visible:ring-destructive/20",
        // Outline - with border
        outline:
          "border-2 border-primary bg-transparent text-primary rounded hover:bg-primary hover:text-primary-foreground dark:border-secondary dark:text-secondary dark:hover:bg-secondary dark:hover:text-[#0F172A]",
        // Secondary - Cyan background
        secondary:
          "bg-secondary text-[#0F172A] rounded hover:bg-secondary/90",
        // Ghost - minimal
        ghost:
          "text-foreground hover:bg-muted rounded",
        // Link style
        link: "text-secondary underline-offset-4 hover:underline",
        // Accent - Emerald Green
        accent:
          "bg-accent text-white rounded hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5",
      },
      size: {
        // Default: 16px vertical / 32px horizontal padding
        default: "h-12 px-8 py-4",
        sm: "h-10 px-6 py-3 text-sm",
        lg: "h-14 px-10 py-5 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
