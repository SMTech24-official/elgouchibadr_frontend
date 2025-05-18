"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/assets/logo/logo.jpg";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { MdOutlineEvent } from "react-icons/md";
// import { MdOutlineCategory } from "react-icons/md";
// import { MdProductionQuantityLimits } from "react-icons/md";
// import { ImBlogger } from "react-icons/im";
// import { CgProductHunt } from "react-icons/cg";

import {
  LayoutDashboard,
  CreditCard,
  ListOrdered,
  Package,
  LogOut,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const menuItems = [
  { title: "Overview", icon: LayoutDashboard, href: "/dashboard/overview" },
  {
    title: "All User",
    icon: Package,
    subItems: [
      {
        title: "All User",
        icon: CreditCard,
        href: "/dashboard/users",
      },
      {
        title: "User Activity",
        icon: CreditCard,
        href: "/dashboard/users/activateuser",
      },
      {
        title: "User Verification",
        icon: CreditCard,
        href: "/dashboard/users/verifieduser",
      },
    ],
  },
  {
    title: "Auctions",
    icon: CreditCard,
    subItems: [
      { title: "Live Auction", icon: CreditCard, href: "/dashboard/auction/all-auction" },
      {
        title: "Completed Auction",
        icon: CreditCard,
        href: "/dashboard/auction/completed-auction",
      },
    ],
  },
  { title: "Reports", icon: ListOrdered, href: "/dashboard/reports" },
  {
    title: "Settings",
    icon: MdOutlineEvent,
    href: "/dashboard/settings",
  },
];

export function DashboardSidebar() {
  const pathname = usePathname().split("/dashboard/")[1];

  console.log("My path is ", pathname);

  const router = useRouter();

  const handleLogout = () => {
    try {
      // Clear localStorage and cookies
      localStorage.removeItem("accessToken");
      Cookies.remove("token");
      localStorage.removeItem("persist:auth");

      // Optional: Clear sessionStorage if needed (if you're using it for session management)
      sessionStorage.clear();

      router.push("/"); // Redirect to the home page
      window.location.reload(); // Force reload for a clean session state

      // Optionally display a success toast notification
      toast.success("Logout successful");
    } catch (err) {
      console.error("Logout Error:", err);
      toast.error("There was an error logging out.");
    }
  };
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (title: string) => {
    setExpandedItem(expandedItem === title ? null : title);
  };

  return (
    <div className="flex h-screen w-64 flex-col bg-white text-white">
      <div className="p-4">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Quick Online Deals"
            width={80}
            height={40}
            className="mb-6 lg:ml-0 ml-12"
          />
        </Link>
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const hasSubItems = item.subItems && item.subItems.length > 0;
            const isActive = item.href
              ? pathname
                  .toLowerCase()
                  .startsWith(
                    item.href.split("/dashboard/")[1]?.toLowerCase() || ""
                  )
              : false;

            return (
              <div key={item.title} className="flex flex-col">
                {hasSubItems ? (
                  // Parent item with submenu (not clickable for navigation)
                  <div
                    className={cn(
                      "flex items-center justify-between text-accent hover:text-white gap-3 rounded-[8px] px-3 py-2 text-sm transition-colors hover:bg-accent cursor-pointer",
                      isActive && "bg-accent text-white"
                    )}
                    onClick={() => toggleItem(item.title)}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      {item.title}
                    </div>
                    {expandedItem === item.title ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                ) : (
                  // Regular clickable menu item
                  item.href && (
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center text-accent hover:text-white gap-3 rounded-[8px] px-3 py-2 text-sm transition-colors hover:bg-accent",
                        isActive && "bg-accent text-white"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.title}
                    </Link>
                  )
                )}

                {hasSubItems && (
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      expandedItem === item.title ? "max-h-96" : "max-h-0"
                    )}
                  >
                    <div className="ml-8 mt-1 space-y-1">
                      {item.subItems.map((subItem) => {
                        const subItemPath =
                          subItem.href.split("/dashboard/")[1] || "";
                        const isSubActive =
                          pathname.toLowerCase() === subItemPath.toLowerCase();

                        return (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={cn(
                              "flex items-center text-accent hover:text-white gap-3 rounded-[8px] px-3 py-2 text-sm transition-colors hover:bg-accent",
                              isSubActive && "bg-accent text-white"
                            )}
                          >
                            <subItem.icon className="h-5 w-5" />
                            {subItem.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-[8px] bg-primary px-3 py-2 text-sm  hover:bg-white hover:text-black text-white transition-colors "
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
}
