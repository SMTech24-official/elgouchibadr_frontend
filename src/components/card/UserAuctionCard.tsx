import { ArrowUp, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import { AuctionCommentProps } from "@/types/Interface.type"

interface AuctionProps {
  auctionCar: AuctionCommentProps;
}



export function UserAuctionCard({ auctionCar }: AuctionProps) {
  return (
    <Card className="mb-4 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 relative">
          <Image
            src={auctionCar.image || "/placeholder.svg"}
            alt={auctionCar.title}
            width={300}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full md:w-2/3">
          <CardHeader className="flex flex-row items-start justify-between pb-2">
            <div>
              <h3 className="text-lg font-semibold">{auctionCar.title}</h3>
              <p className="text-sm text-muted-foreground">{auctionCar.details}</p>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Star className="h-4 w-4" />
              <span className="sr-only">Favorite</span>
            </Button>
          </CardHeader>
          <CardContent>
            {/* <p className="text-sm mb-4">{auctionCar}</p> */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <ArrowUp className="h-4 w-4 mr-1" />
                    <span>{auctionCar.votes}</span>
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="h-8">
                  Reply
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center bg-primary/10 text-primary rounded-md px-2 py-1">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{auctionCar.time}</span>
                </div>
                <div className="bg-primary text-primary-foreground rounded-md px-3 py-1 flex items-center">
                  <span className="text-sm font-medium">${auctionCar.price.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}
