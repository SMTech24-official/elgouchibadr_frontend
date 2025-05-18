// export default function InProgressPage() {
//   return (
//     <div className=" mx-auto">
//       <div className="bg-white border border-gray-200 rounded-md p-6">
//         <h1 className="text-2xl font-semibold text-gray-900 mb-4">In Progress</h1>
//         <p className="text-gray-600">Your in-progress items will appear here.</p>
//       </div>
//     </div>
//   )
// }

import { UserAuctionCard } from "@/components/card/UserAuctionCard";
import { auctionComments } from "@/types/FakeWebData";

export default function InProgressPage() {
  return (
    <div>
      <div className="my-6 p-4  border border-gray-200 rounded-md">
        <div className="bg-white pb-4">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            In Progress
          </h1>
          <p className="text-gray-600">
            Your in-progress items will appear here.
          </p>
        </div>
      <div className="grid grid-cols-1">
        {auctionComments
          .filter((comment) => comment.isPending)
          .slice(0, 3)
          .map((comment) => (
            <UserAuctionCard key={comment.id} auctionCar={comment} />
          ))}
      </div>
      </div>

    </div>
  );
}
