"use client"

import Link from "next/link"
import { Instagram, Mail } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const subscribeSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
})

type SubscribeFormValues = z.infer<typeof subscribeSchema>

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SubscribeFormValues>({
    resolver: zodResolver(subscribeSchema),
  })

  const onSubmit = async (data: SubscribeFormValues) => {
    console.log("Subscription email:", data.email)
    // Here you would typically send this to your API
    // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify(data) })
    reset()
    alert("Thank you for subscribing!")
  }

  return (
    <footer className="bg-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="relative h-10 w-10">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" />
                  <path
                    d="M50,10 L50,50 L75,75"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              ListMyCity does not charge booking fees or service fees. All property information is submitted directly by
              hosts or obtained through public channels. All transactions are handled independently between guest and
              host.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Instagram className="h-5 w-5 mr-2" />
                <span className="text-sm text-gray-600">@listmycity</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span className="text-sm text-gray-600">inquiries@listmycity.us</span>
              </div>
            </div>
          </div>

          {/* Quick Menu */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Menu</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/explore-stays" className="text-sm text-gray-600 hover:text-gray-900">
                  Explore Stays
                </Link>
              </li>
              <li>
                <Link href="/refer-earn" className="text-sm text-gray-600 hover:text-gray-900">
                  Refer & Earn
                </Link>
              </li>
              <li>
                <Link href="/list-property" className="text-sm text-gray-600 hover:text-gray-900">
                  List Your Property
                </Link>
              </li>
              <li>
                <Link href="/help-support" className="text-sm text-gray-600 hover:text-gray-900">
                  Help and Support
                </Link>
              </li>
              <li>
                <Link href="/messaging" className="text-sm text-gray-600 hover:text-gray-900">
                  Messaging
                </Link>
              </li>
              <li>
                <Link href="/notification" className="text-sm text-gray-600 hover:text-gray-900">
                  Notification
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-sm text-gray-600 hover:text-gray-900">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Information</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/account" className="text-sm text-gray-600 hover:text-gray-900">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-sm text-gray-600 hover:text-gray-900">
                  My Properties
                </Link>
              </li>
              <li>
                <Link href="/save" className="text-sm text-gray-600 hover:text-gray-900">
                  Save
                </Link>
              </li>
            </ul>
          </div>

          {/* Service */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Service</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/basic-plan" className="text-sm text-gray-600 hover:text-gray-900">
                  Basic Plan
                </Link>
              </li>
              <li>
                <Link href="/standard-plan" className="text-sm text-gray-600 hover:text-gray-900">
                  Standard Plan
                </Link>
              </li>
              <li>
                <Link href="/premium-plan" className="text-sm text-gray-600 hover:text-gray-900">
                  Premium Plan
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="col-span-1 md:col-span-4 mt-8">
            <div className="max-w-md">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Subscribe</h3>
              <p className="text-sm text-gray-600 mb-4">
                Enter your email below to be the first to know about new collections.
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="flex">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`block w-full pl-10 pr-3 py-2 border ${
                      errors.email ? "border-red-300" : "border-gray-300"
                    } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm`}
                    {...register("email")}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
                </div>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">©2023 All Rights are reserved</p>
        </div>
      </div>
    </footer>
  )
}
