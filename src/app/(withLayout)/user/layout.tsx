import type React from "react";
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
import ProfileSidebar from "@/components/userprofile/ProfileSidebar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex lg:flex-row md:flex-row flex-col gap-6 container py-[80px]">
      <ProfileSidebar />
      <main className="flex-1 ">{children}</main>
    </div>
  );
}
