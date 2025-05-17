// import { SectionHeading } from "@/components/ui/section-heading"
// import { StepItem } from "@/components/ui/step-item"

import { SectionHeading } from "../itemss/SectionHeading";
import { StepItem } from "../itemss/StepItem";

export function BuyingACarContent() {
  return (
    <div className="max-w-3xl">
      <SectionHeading as="h2">Buying a Car</SectionHeading>

      <p className="text-gray-800 mb-8">
        Once you&apos;ve found a car you&apos;re interested in, here are the steps you should take to bid confidently and, with
        any luck, win the auction!
      </p>

      <StepItem number="01" title="Register to Bid">
        <p className="mb-4">
          To contact the seller directly and place bids, you must first with a valid credit card and phone number.
          Winning bidders pay Cars & Bids a 5% buyer&apos;s fee on top of the winning bid amount (minimum of $250, maximum of
          $7,500).
        </p>
      </StepItem>

      <StepItem number="02" title="Perform Due Diligence">
        <p className="mb-4">
          While we&apos;ve tried to make buying a car online as safe and easy as possible, it&apos;s ultimately your
          responsibility to perform your own due diligence and make sure that the car you&apos;re considering is right for
          you – prior to placing a bid.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-4">
          <li>
            Review the listing thoroughly, including known flaws, the vehicle history report, the vehicle inspection
            report (if applicable), recent maintenance, photos, etc.
          </li>
          <li>
            Ask the seller – via comments, Seller Q&A, or the &quot;Contact&quot; feature – any questions that you may have about
            the vehicle.
          </li>
          <li>
            Arrange to inspect the vehicle in person, or work with the seller to schedule a detailed pre-purchase
            inspection (PPI) at a reputable shop in their area (at your cost).
          </li>
        </ul>
      </StepItem>

      <StepItem number="03" title="Arrange Financing and Logistics">
        <p className="mb-4">
          To ensure a smooth transaction, you should have the following organized prior to placing a bid.
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-4">
          <li>
            To facilitate your purchase, we&quot;ve teamed up with LightStream to provide financing even and fast for users
            with good to excellent credit. You can check out rates and payments – and apply for a loan – directly from
            each auction! LightStream financing is not tied to a specific vehicle, and you can get your loan funded –
            and money deposited into your account – as soon as the same day you apply.**
          </li>
          <li>
            As a reminder, if you plan to finance this purchase, work with your lender to get your financing approved
            ahead of time – and keep in mind that some lenders may require specific vehicle information and may have
            year and mileage restrictions.
          </li>
          <li>
            Discuss transportation and storage timelines (if applicable) with the seller, and if you&apos;ll be shipping the
            vehicle, get a quick and easy shipping quote directly on the auction page before bidding.
          </li>
        </ul>
      </StepItem>

      <StepItem number="03" title="Bid">
        <p className="mb-4">We made bidding easy!</p>

        <ul className="list-disc pl-6 space-y-3 mb-4">
          <li>
            When you bid, we place a hold on your credit card for the buyer&apos;s fee – if you win, your card will be
            charged and you will pay the seller directly for the vehicle, otherwise, the hold will be released at the
            auction&apos;s end.
          </li>
          <li>
            Bids are binding, so only bid if you fully intend to purchase the car and you have performed the requisite
            due diligence, because you might end up as the high bidder and there are no refunds.
          </li>
          <li>
            To ensure the bidding process is fair for everyone, bids placed within the final minute of the auction will
            reset the auction&apos;s time remaining back to 1 minute – giving others the opportunity to bid.
          </li>
        </ul>
      </StepItem>

      <StepItem number="03" title="Win the Auction">
        <p className="mb-4">
          To buy a car on Cars & Bids, you must win the auction by ultimately being the highest bidder – and, if the
          auction has a &quot;Reserve,&quot; by placing a bid that meets or exceeds the seller&apos;s hidden &quot;Reserve&quot; price. If the
          auction has &quot;No Reserve,&quot; then the highest bidder wins it regardless of the amount they bid.
        </p>

        <p className="mb-4">
          After the auction closes, you&apos;ll have the option to use Cars & Bids SafePay to complete your purchase quickly
          and securely, 100% online. You&apos;ll also receive the seller&apos;s contact information (and vice-versa) in order to
          finalize the details and logistics of the transaction. Buyers are expected to pay for the vehicle in-full
          within a week of the auction closing. Learn more about Finalizing the Sale.
        </p>
      </StepItem>
    </div>
  )
}
