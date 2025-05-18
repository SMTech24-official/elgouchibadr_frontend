"use client";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import type { AuctionCommentProps } from "@/types/Interface.type";
import { useState } from "react";
import Link from "next/link";

interface AuctionProps {
  auctionCar: AuctionCommentProps;
}

export function PastAuctionCard({ auctionCar }: AuctionProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <>
      <Link href={`/car-details/${auctionCar.id}`}>
        <Card className="mb-4 overflow-hidden shadow-sm border rounded-lg">
          <div className="relative">
            <div className="w-full relative">
              <Image
                src={auctionCar.image || "/placeholder.svg"}
                alt={auctionCar.title}
                width={600}
                height={400}
                className="h-[240px] w-full object-cover"
              />
              <button
                className="absolute top-3 right-3 p-1 rounded-full bg-white/80 hover:bg-white"
                onClick={() => setIsFavorite(!isFavorite)}
                aria-label={
                  isFavorite ? "Remove from favorites" : "Add to favorites"
                }
              >
                <Star
                  className={`w-5 h-5 ${
                    isFavorite ? "fill-primary text-primary" : "text-gray-500"
                  }`}
                />
              </button>
            </div>

            <CardContent className="p-4">
              <h3 className="text-xl font-bold">{auctionCar.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{auctionCar.details}</p>

              <div className="mt-3 text-sm text-gray-500">
                <p>Reserve: </p>
                <p>Archived </p>
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
    </>
  );
}
