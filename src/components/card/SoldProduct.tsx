"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { CarFilter } from "@/types/Interface.type";
import Link from "next/link";

interface ProductCardProps {
  car: CarFilter;
}

export default function SoldProduct({ car }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link href={`/car-details/${car.id}`} className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg">
      <div className="relative">
        <Image
          src={car.image || "/placeholder.svg"}
          alt={car.title}
          width={400}
          height={300}
          className="w-full h-64 object-cover hover:scale-105 transition-all"
        />
        <button
          className="absolute top-3 right-3 p-1 rounded-full"
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Star
            className={`w-6 h-6 ${
              isFavorite ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      <div className="p-4 flex flex-col h-full">
        <div>
          <h3 className="text-lg font-bold">{car.title}</h3>
          <p className="text-sm text-gray-600 mt-1">
            {car.mileage.toLocaleString()} Miles, {car.engineDetails}
          </p>
          <p className="text-xs text-gray-500 mt-1">{car.location}</p>
        </div>

        <div className="flex  flex-col gap-2 sm:gap-4 w-full mt-4">
          {/* Time Left Button */}
          <button className="flex-1 bg-secondary text-white px-3 py-2 flex items-center justify-center h-10 rounded-md">
            {/* <HiClock className="mr-2" /> */}
            <span className="text-sm sm:text-base">Cars & Bids -<b> Sold for {car.price}</b></span>
          </button>

          {/* Price Button */}
         <button className="flex-1 bg-slate-100 text-black px-3 py-2 flex items-center justify-center h-10 rounded-md">
            {/* <HiClock className="mr-2" /> */}
            <span className="text-sm sm:text-base">Cars & Bids - <b>Sold for {car.price}</b></span>
          </button>
        </div>
      </div>
    </Link>
  );
}
