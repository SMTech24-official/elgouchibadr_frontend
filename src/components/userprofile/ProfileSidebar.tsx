"use client"

import { User, Clock, BarChart2, FileText } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ProfileSidebar() {
  const pathname = usePathname()

  const menuItems = [
    { name: "Profile", href: "/user", icon: User },
    { name: "In Progress", href: "/user/in-progress", icon: Clock },
    { name: "Live Auction", href: "/user/live-auction", icon: BarChart2 },
    { name: "Past Listing", href: "/user/past-listing", icon: FileText },
  ]

  return (
    <div className="lg:w-[260px] md:w-[300px] w-full bg-white border-r border-gray-200">
      <nav className="flex flex-col p-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 px-3 my-1 py-3 rounded-md text-sm font-medium ${
                isActive ? "bg-blue-50 text-blue-500" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon size={16} />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
