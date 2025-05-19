import { LiveAuctionCard } from "@/components/card/LiveAuctionCard";
// import { UserAuctionCard } from "@/components/card/UserAuctionCard";
import { auctionComments } from "@/types/FakeWebData";

export default function LiveAuctionPage() {
  return (
    <div>
      <div className="my-6 p-4  border border-gray-200 rounded-md">
        <div className="bg-white pb-4">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Live Auction
          </h1>
          <p className="text-gray-600">
            Your Live items will appear here.
          </p>
        </div>
        <div className="grid grid-cols-1">
          {auctionComments
            // .filter((comment) => !comment.isPending)
            // .filter((comment) => comment.isSold)
            .slice(0, 3)
            .map((comment) => (
              <LiveAuctionCard key={comment.id} auctionCar={comment} />
            ))}
        </div>
      </div>
    </div>
  );
}
