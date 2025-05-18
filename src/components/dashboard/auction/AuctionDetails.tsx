"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AuctionDetails() {
  return (
    <div className="container mx-auto p-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Auction Overview */}
        <Card className="border-[#e1e7ec] shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-semibold">Auction Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Auction ID:</span>
                <span className="text-sm font-medium">#A001 (Toyota Camry)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Car Model:</span>
                <span className="text-sm font-medium">Toyota Camry</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Final Bid:</span>
                <span className="text-sm font-medium">$14,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Winner:</span>
                <span className="text-sm font-medium">Saifur Rahman</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Bidder Count:</span>
                <span className="text-sm font-medium">5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Completed Date:</span>
                <span className="text-sm font-medium">2025-04-30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Auction Duration:</span>
                <span className="text-sm font-medium">3 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Auction Status:</span>
                <span className="text-sm font-medium">Completed</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Winning Bid Details */}
        <Card className="border-[#e1e7ec] shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-semibold">Winning Bid Details:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Winning Bidder:</span>
                <span className="text-sm font-medium">Saifur Rahman</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Winning Bid Amount:</span>
                <span className="text-sm font-medium">$14,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Winning Bid Time:</span>
                <span className="text-sm font-medium">2025-04-30, 14:35</span>
              </div>
              
              <div className="mt-4">
                <h3 className="text-sm font-semibold mb-2">Bidder History:</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Bidder 1: Jane Smith –</span>
                    <span className="text-sm font-medium">$14,000 at 2025-04-30, 12:25</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Bidder 2: Alex Johnson –</span>
                    <span className="text-sm font-medium">$13,800 at 2025-04-30, 12:10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Bidder 3: Mark Lee –</span>
                    <span className="text-sm font-medium">$13,500 at 2025-04-30, 11:45</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Bidder 4: Lisa Brown –</span>
                    <span className="text-sm font-medium">$13,000 at 2025-04-30, 10:50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Bidder 5: Susan Green –</span>
                    <span className="text-sm font-medium">$12,500 at 2025-04-30, 10:30</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bidder Interactions */}
        <Card className="border-[#e1e7ec] shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-semibold">Bidder Interactions:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Number of Bids Placed:</span>
                <span className="text-sm font-medium">15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Bid Increment:</span>
                <span className="text-sm font-medium">$100</span>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold mb-2">Bidding Trends:</h3>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>The final bid of $14,500 was placed in the last 10 minutes of the auction, with active bidding between [Bidders 2 and 3].</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold mb-2">Bidder Activities:</h3>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Bidder 1 (Jane Smith): Placed bids at intervals of 30 minutes.</li>
                  <li>Bidder 2 (Alex Johnson): Placed several bids within the last hour of the auction.</li>
                  <li>Bidder 3 (Mark Lee): Aggressive bidding early in the auction before backing off at the final stages.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Auction Performance Analytics */}
        <Card className="border-[#e1e7ec] shadow-sm bg-[#f8fdff]">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-semibold">Auction Performance Analytics:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Number of Bids:</span>
                <span className="text-sm font-medium">50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Average Bid Amount:</span>
                <span className="text-sm font-medium">$13,800</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Highest Bid:</span>
                <span className="text-sm font-medium">$14,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Lowest Bid:</span>
                <span className="text-sm font-medium">$12,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Bid Frequency:</span>
                <span className="text-sm font-medium text-right">Bids were mostly placed in the final 2 hours of the auction.</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Buyer Information */}
        <Card className="border-[#e1e7ec] shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-semibold">Buyer Information:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold mb-2">Winner Details:</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Name:</span>
                    <span className="text-sm font-medium">Saifur Rahman</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Email:</span>
                    <span className="text-sm font-medium">us.saifur.info@gmail.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Shipping Address:</span>
                    <span className="text-sm font-medium">123 Main St, City, State, 12345</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold mb-2">Transaction Summary:</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Total Price:</span>
                    <span className="text-sm font-medium">$14,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Shipping Fee:</span>
                    <span className="text-sm font-medium">$200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Total Payment:</span>
                    <span className="text-sm font-medium">$14,700</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Payment Status:</span>
                    <span className="text-sm font-medium">Paid (Confirmed)</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Auction Insights */}
        <Card className="border-[#e1e7ec] shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-semibold">Auction Insights:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold mb-2">Bidder Engagement:</h3>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>This auction had high engagement, with active bidders until the last minute.</li>
                  <li>Bidder 2 (Alex Johnson) placed the most bids but did not win.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold mb-2">Reserve Price:</h3>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600"></span>
                  <span className="text-sm font-medium">$13,000</span>
                </div>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>The reserve price was met and exceeded by $1,500, ensuring the car sold successfully.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions for Admin */}
        <Card className="border-[#e1e7ec] shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-semibold">Actions for Admin:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Export Report:</span>
                <div className="space-x-2">
                  <Button variant="link" className="h-auto p-0 text-blue-500">Download Excel</Button>
                  <Button variant="link" className="h-auto p-0 text-blue-500">Download PDF</Button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">View Buyer Profile:</span>
                <Button variant="link" className="h-auto p-0 text-blue-500">View Saifur&apos;s Profile</Button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">View Seller Profile:</span>
                <Button variant="link" className="h-auto p-0 text-blue-500">View Seller&apos;s Profile</Button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Mark Auction as Finalized:</span>
                <Button variant="link" className="h-auto p-0 text-blue-500">Finalize Auction</Button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Send Feedback to Winner:</span>
                <Button variant="link" className="h-auto p-0 text-blue-500">Send Message</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
