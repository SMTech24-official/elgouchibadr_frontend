"use client"
import { ArrowUp, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import type { AuctionCommentProps } from "@/types/Interface.type"
import { HiClock } from "react-icons/hi"
import { useState } from "react"
import Link from "next/link"

interface AuctionProps {
  auctionCar: AuctionCommentProps
}

export function LiveAuctionCard({ auctionCar }: AuctionProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
  <>
     <Link href={`car-details/${auctionCar.id}`}>
     <Card className="mb-4 overflow-hidden shadow-sm border rounded-md hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row relative">
        {/* Image container - full width on mobile, 1/3 width on md+ screens */}
        <div className="w-full md:w-1/3 relative h-[200px] md:h-auto">
          <Image
            src={auctionCar.image || "/placeholder.svg"}
            alt={auctionCar.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {/* Favorite button - positioned on image for all screen sizes */}
          <button
            className="p-1 absolute top-2 right-2 rounded-full bg-white/80 hover:bg-white"
            onClick={() => setIsFavorite(!isFavorite)}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Star className={`w-5 h-5 ${isFavorite ? "fill-primary text-primary" : "text-primary"}`} />
          </button>
        </div>

        {/* Content container */}
        <div className="w-full">
          <CardHeader className="flex flex-col items-start justify-between pb-2 space-y-2">
            <p className="text-xs sm:text-sm text-primary font-semibold">Bid Views - 12.3k | Total Bid - 120</p>
            <div>
              <h3 className="text-base sm:text-lg font-semibold line-clamp-1">{auctionCar.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{auctionCar.details}</p>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Interaction buttons */}
            <div className="flex items-center space-x-3">
              <Button
                size="sm"
                className="h-7 sm:h-8 px-2 bg-[#eefaff] hover:bg-[#ddf0ff] text-black text-xs sm:text-sm"
              >
                <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <span>{auctionCar.votes}</span>
              </Button>
              <Button size="sm" className="h-7 sm:h-8 bg-[#eefaff] hover:bg-[#ddf0ff] text-black text-xs sm:text-sm">
                Reply
              </Button>
            </div>

            {/* Conditional auction status section */}
            {!auctionCar.isSold ? (
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                {/* Sold status */}
                <div className="flex-1 bg-secondary text-white px-3 py-2 flex items-center justify-center rounded-md text-xs sm:text-sm">
                  <HiClock className="mr-2 flex-shrink-0" />
                  <span>
                    Cars & Bids - <b>Sold for {auctionCar.time}</b>
                  </span>
                </div>

                {/* Competitor price */}
                <div className="flex-1 py-2 bg-slate-300 text-black flex items-center justify-center rounded-md text-xs sm:text-sm">
                  Competitor - <b> {auctionCar.price.toLocaleString()}</b>
                </div>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                {/* Time left */}
                <div className="flex-1 bg-primary text-white px-3 py-2 flex items-center justify-center rounded-md text-xs sm:text-sm">
                  <HiClock className="mr-2 flex-shrink-0" />
                  <span>{auctionCar.time}</span>
                </div>

                {/* Current price */}
                <div className="flex-1 py-2 font-bold bg-primary text-white flex items-center justify-center rounded-md text-xs sm:text-sm md:text-base">
                  {auctionCar.price.toLocaleString()}
                </div>
              </div>
            )}
          </CardContent>
        </div>
      </div>
    </Card>
   </Link>
  </>
  )
}
