import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type BenefitCardProps = {
  icon: ReactNode
  title: string
  children: ReactNode
  className?: string
}

export function BenefitCard({ icon, title, children, className }: BenefitCardProps) {
  return (
    <div className={cn("flex items-start gap-4 mb-6", className)}>
      <div className="flex-shrink-0 text-blue-500 mt-1">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  )
}
