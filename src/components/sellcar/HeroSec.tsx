"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

export default function HeroSec() {
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const animateText = () => {
      if (!textRef.current) return

      textRef.current.style.transform = "translateX(0)"

      setTimeout(() => {
        if (textRef.current) {
          textRef.current.style.transform = "translateX(-100%)"

          setTimeout(() => {
            if (textRef.current) {
              textRef.current.style.transform = "translateX(100%)"

              setTimeout(() => {
                if (textRef.current) {
                  textRef.current.style.transform = "translateX(0)"
                }
              }, 100)
            }
          }, 500)
        }
      }, 3000)
    }

    animateText()
    const interval = setInterval(animateText, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4  text-center">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Get the best price for your car
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8">More buyers, more bids, more profit</h2>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
              Sell now — it&apos;s free!
            </button>
            <button className="border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center">
              Manage your listings <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Benefits bar */}
        <div className="bg-gray-100 rounded-lg p-4 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-2">
          <div className="flex items-center">
            <div className="overflow-hidden relative">
              <span
                ref={textRef}
                className="font-semibold transition-transform duration-500 inline-block"
                style={{ transform: "translateX(100%)" }}
              >
                Sell for free
              </span>
            </div>
            <span className="text-gray-600 ml-2">— get 100% of the sale price</span>
          </div>

          <div className="text-gray-600">
            <span className="font-semibold">Attract the right audience</span> — passionate enthusiasts looking for their
            next car
          </div>

          <div className="text-gray-600">
            <span className="font-semibold">Quick to auction</span> — listings in a week or less
          </div>
        </div>
      </div>
    </div>
  )
}
