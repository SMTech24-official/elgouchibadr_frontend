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
    href: "/dashboard/users",
    subItems: [
      { title: "User Activity", icon: CreditCard, href: "/dashboard/activateuser" },
      { title: "User Verification", icon: CreditCard, href: "/dashboard/verifieduser" },
    ]
  },
  {
    title: "Auctions",
    icon: CreditCard,
    href: "/dashboard/payment",
    subItems: [
      { title: "Live Auction", icon: CreditCard, href: "/dashboard/payment" },
      {
        title: "Bidding Auction",
        icon: CreditCard,
        href: "/dashboard/payment",
      },
      {
        title: "Completed Auction",
        icon: CreditCard,
        href: "/dashboard/payment",
      },
    ],
  },
  { title: "Reports", icon: ListOrdered, href: "/dashboard/orders" },
  {
    title: "Settings",
    icon: MdOutlineEvent,
    href: "/dashboard/podcastEvent",
  },
  // {
  //   title: "Blog Category",
  //   icon: MdProductionQuantityLimits,
  //   href: "/dashboard/blogCategory",
  // },
  // {
  //   title: "Product Category",
  //   icon: MdOutlineCategory,
  //   href: "/dashboard/productCategory",
  // },
  // {
  //   title: "Product",
  //   icon: CgProductHunt,
  //   href: "/dashboard/product",
  // },
  // {
  //   title: "Blog",
  //   icon: ImBlogger,
  //   href: "/dashboard/blog",
  // },
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
            const itemPath = item.href.split("/dashboard/")[1] || "";
            const isActive = pathname
              .toLowerCase()
              .startsWith(itemPath.toLowerCase());
            const hasSubItems = item.subItems && item.subItems.length > 0;

            return (
              <div key={item.href} className="flex flex-col">
                <div
                  className={cn(
                    "flex items-center justify-between text-accent hover:text-white gap-3 rounded-[8px] px-3 py-2 text-sm transition-colors hover:bg-accent cursor-pointer",
                    isActive && "bg-accent text-white",
                    hasSubItems && "cursor-pointer"
                  )}
                  onClick={() => hasSubItems && toggleItem(item.title)}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5" />
                    {item.title}
                  </div>
                  {hasSubItems &&
                    (expandedItem === item.title ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    ))}
                </div>

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
