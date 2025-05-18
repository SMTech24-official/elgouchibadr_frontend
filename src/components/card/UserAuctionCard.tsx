"use client";
import { ArrowUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { AuctionCommentProps } from "@/types/Interface.type";
import { HiClock } from "react-icons/hi";
import { useState } from "react";

interface AuctionProps {
  auctionCar: AuctionCommentProps;
}

export function UserAuctionCard({ auctionCar }: AuctionProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="mb-4 overflow-hidden shadow-none border-none">
      <div className="flex flex-col md:flex-row relative">
        <div className="w-full md:w-1/3 relative">
          <Image
            src={auctionCar.image || "/placeholder.svg"}
            alt={auctionCar.title}
            width={300}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full">
          <CardHeader className="flex flex-col items-start justify-between pb-2">
            <div>
              <h3 className="text-lg font-semibold">{auctionCar.title}</h3>
              <p className="text-sm text-muted-foreground">
                {auctionCar.details}
              </p>
            </div>
            <button
              className=" p-1 absolute top-2 right-2 rounded-full"
              onClick={() => setIsFavorite(!isFavorite)}
              aria-label={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
            >
              <Star
                className={`w-6 h-6 ${
                  isFavorite ? "fill-primary text-primary" : "text-primary"
                }`}
              />
            </button>
          </CardHeader>
          <CardContent>
            {/* <p className="text-sm mb-4">{auctionCar}</p> */}
            <div className="flex items-start flex-col justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Button
                    size="sm"
                    className="h-8 px-2 bg-[#eefaff] hover:bg-[#eefaff] text-black"
                  >
                    <ArrowUp className="h-4 w-4 mr-1" />
                    <span>{auctionCar.votes}</span>
                  </Button>
                </div>
                <Button
                  size="sm"
                  className="h-8 bg-[#eefaff] hover:bg-[#eefaff] text-black "
                >
                  Reply
                </Button>
              </div>
            
              {!auctionCar.isPending ? (
                  <div className="flex lg:flex-row md:flex-row flex-col gap-2 sm:gap-4 w-full mt-4">
                    {/* Time Left Button */}
                    <button className="flex-1 bg-primary text-white px-3 py-2 flex items-center justify-center  rounded-md">
                      <HiClock className="mr-2" />
                      <span className="text-sm sm:text-base">
                        {auctionCar.time}
                      </span>
                    </button>

                    {/* Price Button */}
                    <button className="flex-1 py-2 font-bold text-lg bg-primary text-white flex items-center justify-center rounded-md">
                      {auctionCar.price.toLocaleString()}
                    </button>
                  </div>
              ) : (
                <button className="flex-1 mt-4 bg-yellow-50 text-yellow-600 border border-yellow-600 px-3 py-2 flex items-center justify-center  rounded-md">
                  <HiClock className="mr-2" />
                  <span className="text-sm sm:text-base">Pending</span>
                </button>
              )}
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
