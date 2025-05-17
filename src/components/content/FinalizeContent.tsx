// import { SectionHeading } from "@/components/ui/section-heading"
// import { StepItem } from "@/components/ui/step-item"

import { SectionHeading } from "../itemss/SectionHeading";
import { StepItem } from "../itemss/StepItem";

export function FinalizeContent() {
  return (
    <div >
      <SectionHeading as="h2">Finalizing the Sale</SectionHeading>

      <p className="text-gray-800 mb-8">
        Immediately after the auction closes we connect the buyer and seller so they can complete their sale. They can
        choose to use Cars & Bids SafePay to handle payment, documentation, and title transfer quickly and easily, or
        they can use our custom checklist to ensure a smooth transaction. Here are our recommendations and tips for a
        successful post-auction sale – and remember, we&apos;re here to help!
      </p>

      <StepItem number="01" title="Make Contact">
        <p className="mb-4">
          Reach out to the other party to introduce yourself as soon as the auction ends, and remember to stay polite
          and positive to ensure the process goes smoothly.
        </p>

        <p className="mb-4">
          We recommend that the seller provides proof of ownership to the buyer – usually, that&apos;s a photocopy or picture
          of the title and registration.
        </p>
      </StepItem>

      <StepItem number="02" title="Payment & Documentation">
        <p className="mb-4">Buyers are expected to pay for the vehicle in-full within a week of the auction closing.</p>

        <ul className="list-disc pl-6 space-y-3 mb-4">
          <li>
            If there&apos;s an outstanding loan on the vehicle, Cars & Bids SafePay is a great option to ensure that the loan
            is satisfied and the title is transferred to the buyer. Otherwise, the buyer and seller should discuss how
            it will be paid off and the specific next steps, so that the buyer can complete the transaction safely.
          </li>
          <li>
            If the seller has funds to pay it off, they should do so as soon as possible, and provide proof from the
            lender that it has been paid off.
          </li>
          <li>
            If the seller does not have the funds, the buyer may be able to pay the outstanding amount owed directly to
            the lender and then pay the remainder of the purchase price to the seller.
          </li>
          <li>
            An accurate Bill of Sale should be created, including the terms of the transaction, to be signed by both
            parties; we recommend checking with your state&apos;s DMV for Bill of Sale templates and requirements.
          </li>
          <li>
            Cars & Bids SafePay will securely transfer funds from the buyer to the seller. Alternatively, we recommend
            wire transfers, cashier&apos;s checks, or USDC for payment, but there are many possible options – including
            meeting at the buyer&apos;s/seller&apos;s bank to draft up a cashier&apos;s check, withdrawing the funds directly, or
            completing an electronic money transfer.
          </li>
          <li>
            Arrange for the car to be picked up and finalize the transaction. If the buyer plans to ship the vehicle,
            they can book shipping directly through the winner&apos;s page or by contacting our shipping team at
            shipping@carsandbids.com or (978) 955-2355. The vehicle and title should only be released once the seller
            has the full payment in hand. If the transaction is happening remotely, the seller should mail the
            signed-over title to the buyer via courier service with a tracking number once payment is in hand.
          </li>
        </ul>
      </StepItem>

      <StepItem number="03" title="Share your Success Story">
        <p className="mb-4">
          Email the Cars & Bids team a photo of the handoff to share your success story – we&apos;d love to hear about it!
        </p>
      </StepItem>
    </div>
  )
}
