import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
import ProfileSidebar from "@/components/userprofile/ProfileSidebar"



export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <div className="flex min-h-screen container bg-gray-50">
          <ProfileSidebar/>
          <main className="flex-1 p-6">{children}</main>
        </div>
  )
}
