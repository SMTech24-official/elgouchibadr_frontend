"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, SearchIcon } from "lucide-react";
import logo from "@/assets/image/carlogo.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import man from '@/assets/women.png'
import { usePathname } from "next/navigation";
import { LuUserRound } from "react-icons/lu";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { notificationData } from "@/types/FakeWebData";
import { cn } from "@/lib/utils";
import { FaChevronCircleRight } from "react-icons/fa";

type NavItem = {
  label: string;
  href: string;
};
const searchCarSchema = z.object({
  cars: z.string({ message: "Please enter a valid email address" }),
});

type searchFormValues = z.infer<typeof searchCarSchema>;

const navItems: NavItem[] = [
  { label: "Auctions", href: "/" },
  { label: "Sell a Car", href: "/sell-car" },
  { label: "Community", href: "/community" },
  { label: "What's Cars & Bids?", href: "/car-bids" },
  { label: "Daily Email", href: "/daily-email" },
];

export default function Navbar() {
  const { register, handleSubmit } = useForm<searchFormValues>({
    resolver: zodResolver(searchCarSchema),
  });
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (data: searchFormValues) => {
    try {
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const [open, setOpen] = useState<boolean>(false);

  // Handle click outside
  // useEffect(() => {
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   const handleClickOutside = (event: any) => {
  //     if (searchRef.current && !searchRef.current.contains(event.target)) {
  //       setIsSearchOpen(false);
  //     }
  //   };

  //   if (isSearchOpen) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [isSearchOpen]);
  // const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full border-b border-gray-100">
      <div className="container flex h-16 items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={70}
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="lg:flex hidden">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                      isActive
                        ? "text-blue-500 font-bold border-b-2 border-blue-500 pb-1"
                        : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* Search and Sign In */}
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="*:not-first:mt-2">
              <div className="relative">
                <Input
                  className="peer ps-9 pe-9"
                  placeholder="Search..."
                  {...register("cars")}
                  required
                  type="search"
                />

                <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                  <SearchIcon size={16} className="text-primary" />
                </div>
                <button
                  className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Submit search"
                  type="submit"
                >
                  <ArrowRightIcon
                    size={16}
                    aria-hidden="true"
                    className="text-primary"
                  />
                </button>
              </div>
            </div>
          </form>
          <button
            type="button"
            onClick={toggleDropdown}
            ref={buttonRef}
            className="bg-white border border-gray-300 rounded-full w-8 h-8 p-1 flex items-center justify-center shadow-none text-black hover:text-primary hover:bg-transparent hover:border-primary transition-colors duration-200"
          >
            <IoIosNotifications
              size={25}
              className="hover:text-primary text-[35px]"
            />
          </button>

          {isOpen && (
            <>
              {/* Overlay for mobile - helps with click outside detection */}
              <div className="fixed inset-0 bg-black/5 z-40 md:hidden" />

              {/* Notification dropdown */}
              <div
                ref={dropdownRef}
                className="absolute top-[80px] right-[10px] w-72 sm:w-80 sm:right-[20px] md:top-[80px] md:right-[220px] lg:top-[60px] lg:right-[290px] mt-2 bg-white shadow-lg rounded-md z-50"
              >
                <div className="p-4 border-b border-gray-100">
                  <h2 className="text-lg font-semibold">Notifications</h2>
                </div>
                <div className="max-h-[70vh] overflow-y-auto">
                  {notificationData.map((notification) => (
                    <div
                      key={notification.id}
                      className={cn(
                        "p-4 border-b border-gray-100 hover:bg-gray-50",
                        !notification.read && "bg-gray-50"
                      )}
                    >
                      <div className="flex gap-3">
                        <div className="w-[50px] h-[40px] mt-1">
                          <FaChevronCircleRight
                            className="text-primary"
                            size={24}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-700">
                            {notification.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {notificationData.length === 0 && (
                  <div className="p-4 text-center text-gray-500">
                    No notifications
                  </div>
                )}
              </div>
            </>
          )}
          <Link
            href={"/"}
            className="lg:flex md:flex hidden items-center gap-2 p-2  rounded-[8px] hover:bg-slate-50 "
          >
            <LuUserRound className="text-primary" size={24} />

            <p className="flex items-center text-sm font-medium text-gray-700">
              Sign Up/Sign In
            </p>
          </Link>
          <Link
            href={"/user"}
            className="lg:flex md:flex hidden items-center gap-2 p-2 w-[50px] h-[50px] hover:shadow-lg rounded-full hover:bg-slate-50 "
          >
            <Image src={man} width={50} height={50} alt="profile" className="w-full h-full" />

           
          </Link>
        </div>

        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
            className="text-gray-500 hover:text-gray-900"
          >
            <IoMenu className="w-10" />
          </Button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="p-6 w-[300px]">
          <ul className="flex flex-col  items-start space-y-4 ">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                      isActive
                        ? "text-blue-500 font-bold border-b-2 border-blue-500 pb-1"
                        : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="py-4">
            <Link
              href={"/"}
              className="flex items-center gap-2 py-2 px-2 rounded-[8px] hover:bg-slate-100 "
            >
              <LuUserRound className="text-primary" size={24} />

              <p className="flex items-center text-sm font-medium text-gray-700">
                Sign Up/Sign In
              </p>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
