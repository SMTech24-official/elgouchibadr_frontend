"use client"

import { useEffect, useState } from "react"
import { IoDocumentText } from "react-icons/io5"
import { FaCamera, FaCalendarCheck, FaHandshakeSimple } from "react-icons/fa6"

export default function HowItWorks() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const steps = [
    {
      id: "01",
      title: "Submit your car in minutes",
      description: "Easily list your vehicle with just a few simple steps.",
      icon: <IoDocumentText className="w-12 h-12 text-primary" />,
    },
    {
      id: "02",
      title: "We Craft Your Listing for Free",
      description: "Let us handle the heavy lifting to make your car stand out.",
      icon: <FaCamera className="w-10 h-10 text-primary" />,
    },
    {
      id: "03",
      title: "It's Auction Time",
      description: "Engage with the community and watch your bids come in.",
      icon: <FaCalendarCheck className="w-10 h-10 text-primary" />,
    },
    {
      id: "04",
      title: "Submit your car in minutes",
      description: "Easily list your vehicle with just a few simple steps.",
      icon: <FaHandshakeSimple className="w-10 h-10 text-primary" />,
    },
  ]

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex lg:gap-[40px] items-center lg:flex-row flex-col">
          {/* Left side - Title */}
          <div className="mb-8 md:mb-0 lg:text-left text-center pb-8">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">How It Works</h2>
            <p className="mt-4 text-lg text-gray-700">
              A Simple, Transparent, and Secure Process — Bid with Confidence!
            </p>
          </div>

          {/* Right side - Stepper */}
          <div className="md:w-2/3">
            <div className="relative">
              {/* Vertical line for desktop */}
              {!isMobile && <div className="absolute left-[22px] top-8 h-[calc(100%-40px)] w-0.5 bg-primary"></div>}

              <div className="space-y-16">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    {/* Step indicator with dot */}
                    <div className="relative mr-8 lg:flex md:flex hidden flex-col items-end">
                      <span className="whitespace-nowrap text-right font-medium text-gray-700 absolute left-[-64px] top-[44px]">Step-{step.id}</span>
                      {!isMobile && (
                        <div className="absolute left-[14px] top-[47px] h-5 w-5 rounded-full bg-primary ring-2 ring-white"></div>
                      )}
                    </div>

                    {/* Step content */}
                    <div className="flex-1 rounded-lg bg-white p-6 shadow-md lg:ml-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-white">
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                          <p className="mt-2 text-gray-700">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
