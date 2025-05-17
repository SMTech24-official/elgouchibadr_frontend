"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { formatCurrency } from "@/lib/carutils";
import { CarFilter } from "@/types/Interface.type";
import { HiClock } from "react-icons/hi";

interface ProductCardProps {
  car: CarFilter;
}

export default function ProductCard({ car }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
      <div className="relative">
        <Image
          src={car.image || "/placeholder.svg"}
          alt={car.title}
          width={400}
          height={300}
          className="w-full h-64 object-cover"
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

        <div className="flex lg:flex-row md:flex-row flex-col gap-2 sm:gap-4 w-full mt-4">
          {/* Time Left Button */}
          <button className="flex-1 bg-primary text-white px-3 py-2 flex items-center justify-center h-10 rounded-md">
            <HiClock className="mr-2" />
            <span className="text-sm sm:text-base">{car.timeLeft}</span>
          </button>

          {/* Price Button */}
          <button className="flex-1 font-bold text-lg bg-primary text-white flex items-center justify-center h-10 rounded-md">
            {formatCurrency(car.price)}
          </button>
        </div>
      </div>
    </div>
  );
}
