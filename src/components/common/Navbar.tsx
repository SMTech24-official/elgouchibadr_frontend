"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Heart, Bell, User } from "lucide-react";
import { Sheet,  SheetContent } from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";

import { Button } from "../ui/button";


const navItems = [
    { href: '/', label: 'Home', active: true },
    { href: '/explore-stays', label: 'Explore Stays' },
    { href: '/refer-earn', label: 'Refer & Earn' },
    { href: '/list-property', label: 'List Your Property' },
    { href: '/help-support', label: 'Help and Support' },
    { href: '/faq', label: 'FAQ' },
  ];
  
  export default function Navbar() {
    const [open, setOpen] = useState<boolean>(false);
  
    return (
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="relative h-10 w-10">
                  <svg viewBox="0 0 100 100" className="h-full w-full">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                    />
                    <path
                      d="M50,10 L50,50 L75,75"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
  
            {/* Desktop Navigation - Show on md screens and up */}
            <nav className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    item.active
                      ? 'text-gray-900 border-b-2 border-gray-900'
                      : 'text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
  
            {/* Right side icons - Show on md screens and up */}
            <div className="flex items-center space-x-6">
              <button
                type="button"
                className="p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none"
                aria-label="Search"
              >
                <Search className="h-6 w-6" />
              </button>
              <button
                type="button"
                className="p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none"
                aria-label="Favorites"
              >
                <Heart className="h-6 w-6" />
              </button>
              <button
                type="button"
                className="p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none"
                aria-label="Notifications"
              >
                <Bell className="h-6 w-6" />
              </button>
              <button
                type="button"
                className="p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none"
                aria-label="Account"
              >
                <User className="h-6 w-6" />
              </button>
            </div>
  
            {/* Mobile menu button - Show on sm screens and down */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(true)}
                className="text-gray-500 hover:text-gray-900"
              >
                <IoMenu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
  
        {/* Mobile menu - Show on sm screens and down */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="left" className="p-6 w-[300px]">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`py-2 px-1 text-sm font-medium ${
                    item.active
                      ? 'text-gray-900 border-l-2 border-gray-900 pl-3'
                      : 'text-gray-500 hover:text-gray-700 pl-4'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </header>
    );
  }