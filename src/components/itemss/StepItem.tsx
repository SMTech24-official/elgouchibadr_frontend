import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type StepItemProps = {
  number: string
  title: string
  children: ReactNode
  className?: string
}

export function StepItem({ number, title, children, className }: StepItemProps) {
  return (
    <div className={cn("mb-8", className)}>
      <h3 className="flex items-baseline gap-2 font-semibold text-lg mb-3">
        <span className="text-gray-500">{number}.</span>
        <span>{title}</span>
      </h3>
      <div className="ml-7">{children}</div>
    </div>
  )
}
