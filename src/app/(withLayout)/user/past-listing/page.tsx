import { PastAuctionCard } from "@/components/card/PastAuctionCard";
import { auctionComments } from "@/types/FakeWebData";

export default function PastListingPage() {
  return (
    <div>
      <div className="bg-white border border-gray-200 rounded-md p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Past Listing
        </h1>

        <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1">
          {auctionComments
            .slice(0, 3)
            .map((comment) => (
              <PastAuctionCard key={comment.id} auctionCar={comment} />
            ))}
        </div>
      </div>
    </div>
  );
}
