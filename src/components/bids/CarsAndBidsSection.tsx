"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaGavel, FaInfoCircle, FaCheckCircle } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import carabout from "@/assets/image/about.png";
import { AboutUsContent } from "../content/AboutContent";
import { BuyingACarContent } from "../content/BuyingContent";
import { SellingACarContent } from "../content/SellingContent";
import { FinalizeContent } from "../content/FinalizeContent";
import WhyChooseUsSection from "../home/WhyChooseUsSection";
import TestimonialsSection from "../home/TestomonialSection";
import man from '@/assets/women.png'

export default function CarsAndBidsSection() {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "how-it-works"
  );

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <section className="w-full py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar navigation */}
          <div className="w-[650px]">
            <nav className="border-r border-gray-200 pr-4">
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#whats-cars-and-bids"
                    className="block py-3 px-4 font-semibold text-gray-900 hover:bg-gray-100 rounded-md"
                  >
                    What&apos;s Cars & Bids?
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about-us"
                    className="block py-3 px-4 font-semibold text-gray-900 hover:bg-gray-100 rounded-md"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <Link
                      href="#how-it-works"
                      className="block py-3 px-4 font-semibold text-gray-900 hover:bg-gray-100 rounded-md flex-grow"
                    >
                      How It Works
                    </Link>
                    <button
                      onClick={() => toggleSection("how-it-works")}
                      className="p-2 text-gray-500 hover:text-gray-900"
                    >
                      {expandedSection === "how-it-works" ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                  </div>
                  {expandedSection === "how-it-works" && (
                    <ul className="ml-6 border-l border-gray-200 pl-4 space-y-1 mt-1">
                      <li>
                        <Link
                          href="#buying-a-car"
                          className="block py-2 px-4 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                        >
                          Buying a Car
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#selling-a-car"
                          className="block py-2 px-4 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                        >
                          Selling a Car
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#finalizing-the-sale"
                          className="block py-2 px-4 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                        >
                          Finalizing the Sale
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <Link
                      href="#faq"
                      className="block py-3 px-4 font-semibold text-gray-900 hover:bg-gray-100 rounded-md flex-grow"
                    >
                      FAQ
                    </Link>
                    <button
                      onClick={() => toggleSection("faq")}
                      className="p-2 text-gray-500 hover:text-gray-900"
                    >
                      {expandedSection === "faq" ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                  </div>
                  {expandedSection === "faq" && (
                    <ul className="ml-6 border-l border-gray-200 pl-4 space-y-1 mt-1">
                      <li>
                        <Link
                          href="#buying-faq"
                          className="block py-2 px-4 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                        >
                          Buying FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#selling-faq"
                          className="block py-2 px-4 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                        >
                          Selling FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#all-faq"
                          className="block py-2 px-4 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                        >
                          All FAQ
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 min-h-[650px]">
            {/* Center image */}
            <div className="w-full  relative hidden md:block">
              <div className="relative h-full ">
                <Image
                  src={carabout}
                  alt="Car auction app on smartphone"
                  width={600}
                  height={600}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="w-full ">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                What&apos;s Cars & Bids?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature 1 */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <FaGavel className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-500 mb-2">
                    Cool Car Auctions
                  </h3>
                  <p className="text-gray-700">
                    Auction your modern enthusiast car — anything cool and
                    exciting from the 1980s to the 2020s.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <BsCashCoin className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-500 mb-2">
                    Low Fees
                  </h3>
                  <p className="text-gray-700">
                    Buyers pay a 5% commission, capped at $7,500. Sellers list
                    for free and receive 100% of the sale price.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <FaInfoCircle className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-500 mb-2">
                    More Information
                  </h3>
                  <p className="text-gray-700">
                    We provide vehicle history reports for every vehicle listed
                    on Cars & Bids — for free.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <FaCheckCircle className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-500 mb-2">
                    Easy to Use
                  </h3>
                  <p className="text-gray-700">
                    We&apos;ve developed several new features that innovate
                    buying and selling enthusiast cars online.
                  </p>
                </div>
              </div>
              <div className="mt-8 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={man}
                      alt="Doug DeMuro"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">Doug & Bids</h3>
                </div>
                <p className="text-gray-700">
                  Car reviewer Doug DeMuro brings a huge audience to Cars & Bids
                  — along with his commentary.
                </p>
              </div>

              {/* Doug & Bids section */}
            </div>
          </div>
        </div>

        <AboutUsContent />
        <BuyingACarContent />
        <SellingACarContent />
        <FinalizeContent />
      </div>
      <div className="py-[40px]">
        <WhyChooseUsSection />
      </div>
      <div>
        <TestimonialsSection />
      </div>
    </section>
  );
}
