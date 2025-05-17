import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { bidData } from "@/types/FakeWebData";


export default function BidSection() {
  const [showAllBids, setShowAllBids] = useState(false);
  const displayedBids = showAllBids ? bidData : bidData.slice(0, 3);

  const toggleBids = () => {
    setShowAllBids(!showAllBids);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div>
      {/* Header - Sold notification */}
      <div className="bg-gray-100 py-3 px-4 flex justify-between items-center mb-4 rounded-sm">
        <div className="font-medium text-gray-800">Sold to ux.saifur.info for $113,500</div>
        <div className="text-gray-500 text-sm">10 hours ago</div>
      </div>

      {/* Bids list */}
      <div className="space-y-6 mb-4">
        {displayedBids.map((bid) => (
          <div key={bid.id} className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-shrink-0">
                <Image 
                  src={bid.buyer.avatar} 
                  width={32} 
                  height={32} 
                  alt={`${bid.buyer.name}'s avatar`} 
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              <div className="font-medium">{bid.buyer.name}</div>
              <div className="text-gray-500 text-sm ml-auto">{bid.timeAgo}</div>
            </div>

            <div className="ml-11">
              <button className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm flex items-center mb-3 hover:bg-gray-800 transition-colors">
                <svg
                  className="w-4 h-4 mr-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                {formatCurrency(bid.amount)}
              </button>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-md hover:bg-gray-100 transition-colors">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 12 7-7 7 7" />
                    <path d="M12 19V5" />
                  </svg>
                  <span className="text-gray-700">{bid.votes}</span>
                </button>

                <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors">
                  <span className="text-sm">Reply</span>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More/Less button */}
      {bidData.length > 3 && (
        <button
          onClick={toggleBids}
          className="flex items-center gap-1 text-blue-500 hover:text-blue-700 text-sm font-medium mb-6"
        >
          {showAllBids ? (
            <>
              <ChevronUp className="h-4 w-4" />
              Show Less Bids
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              Show More Bids ({bidData.length - 3} more)
            </>
          )}
        </button>
      )}
    </div>
  );
}