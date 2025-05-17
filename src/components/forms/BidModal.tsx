"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import carLogo from '@/assets/image/carlogo.png'
import Image from "next/image"

interface BidModalProps {
  onClose: () => void
}

export default function BidModal({ onClose }: BidModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md relative overflow-hidden">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
        </button>

        <div className="p-6">
          <div className="flex flex-col items-center mb-4">
            <div className="w-[160px] h-16 rounded-full flex items-center justify-center mb-2">
             <Image src={carLogo} width={159} height={52} alt={"lgoo"} className="w-full h-full"/> 
            </div>
            <h2 className="text-2xl font-bold">Register to bid</h2>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            We require a valid credit card on file before you can bid. Winning bidders pay a 5% buyer fee to Cars & Bids
            on top of the winning bid amount. The minimum buyer&apos;s fee is $250, and the maximum is $7,500.
          </p>

          <p className="text-sm text-gray-600 mb-6">Bids are binding, so please bid wisely!</p>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-4">Credit Card Information</h3>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="card-name">Name on card</Label>
                  <Input id="card-name" placeholder="SAIFUR..." />
                </div>

                <div>
                  <Label htmlFor="zip">Zip or Postal Code</Label>
                  <Input id="zip" placeholder="123..." />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiration">Expiration</Label>
                    <Input id="expiration" placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvc">CVC (3 or 4 digit Code)</Label>
                    <Input id="cvc" placeholder="CVC" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">Contact Information</h3>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="phone">Phone Number (in the event you win an auction)</Label>
                  <div className="flex gap-2">
                    <Select defaultValue="us">
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="US/CA" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">US/CA</SelectItem>
                        <SelectItem value="uk">UK</SelectItem>
                        <SelectItem value="au">AU</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="(555) 555-5555" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white">Register to bid</Button>
        </div>
      </div>
    </div>
  )
}
