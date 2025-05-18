import { auctionComments } from "@/types/FakeWebData";
import { UserAuctionCard } from "../card/UserAuctionCard";

export default function UserCar() {
    return (
        <div>
             <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Recent Auction Comments{" "}
          <span className="text-muted-foreground text-base font-normal">(Comments {auctionComments.length})</span>
        </h2>
      </div>

      <div className="grid grid-cols-1">
        {auctionComments.map((comment) => (
          <UserAuctionCard
            key={comment.id}
            auctionCar={comment}
          />
        ))}
      </div>
        </div>
    );
}