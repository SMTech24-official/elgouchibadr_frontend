import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  children: ReactNode
  className?: string
  id?: string
  as?: "h1" | "h2" | "h3" | "h4"
}

export function SectionHeading({ children, className, id, as = "h2" }: SectionHeadingProps) {
  const Heading = as

  return (
    <Heading
      id={id}
      className={cn(
        "font-bold text-gray-900",
        as === "h1" && "text-4xl md:text-5xl mb-6",
        as === "h2" && "text-3xl md:text-4xl mb-6",
        as === "h3" && "text-2xl md:text-3xl mb-4",
        as === "h4" && "text-xl md:text-2xl mb-3",
        className,
      )}
    >
      {children}
    </Heading>
  )
}
