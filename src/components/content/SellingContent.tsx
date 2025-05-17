// import { SectionHeading } from "@/components/ui/section-heading"
// import { StepItem } from "@/components/ui/step-item"

import { SectionHeading } from "../itemss/SectionHeading";
import { StepItem } from "../itemss/StepItem";

export function SellingACarContent() {
  return (
    <div>
      <SectionHeading as="h2">Selling a Car</SectionHeading>

      <p className="text-gray-800 mb-8">
        Cars & Bids is the best place to sell your modern enthusiast car – and we&apos;ve made the process easy.
      </p>

      <StepItem number="01" title="Submit Your Car">
        <p className="mb-4">
          It&apos;s free to submit your car. We simply ask you for a few details – including the VIN, some photos, and a
          brief description of the car. You can also choose whether you want to set a reserve price, or if you want your
          vehicle to be sold with no reserve. A reserve price is a minimum value you&apos;ll accept to sell your car – and
          while a reserve auction may seem like an appealing choice, we&apos;ve found that vehicles offered with no reserve
          get more bids, more interest, and more attention.
        </p>

        <p className="mb-4">
          If you choose a reserve auction, we&apos;ll ask you to suggest a reserve price – but, based on market conditions,
          we may ask for a lower one before accepting your car. Keep in mind that all of our auctions start from $0,
          regardless of whether or not they have a reserve.
        </p>

        <p className="mb-4">
          Our experienced auction team will review your submission and may ask you some follow-up questions. We will do
          our best to give you an answer within a business day. Not every car is right for Cars & Bids, but we always
          appreciate you taking the time to submit your car to us!
        </p>
      </StepItem>

      <StepItem number="02" title="Prepare Your Listing">
        <p className="mb-4">
          Once your submission is accepted, we&apos;ll need some additional information from you – like detailed photos,
          service and ownership history, etc. Don&apos;t worry – we&apos;re here to help you throughout the process!
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-4">
          <li>
            Before you can sell on Cars & Bids, your car must not be listed for sale elsewhere – meaning you&apos;ll have to
            remove any other advertisement for your car and you cannot sell it outside of the auction.
          </li>
          <li>
            Take excellent photos of your car to get top dollar – hire a professional photographer or review our photo
            guide before snapping your own pics.
          </li>
          <li>
            Film a quick video walk-around and cold-start – just shoot them on your phone in landscape mode and upload
            to YouTube or Vimeo.
          </li>
          <li>
            Have your car inspected to get top dollar – you can order your inspection after your submission is accepted,
            and once you approve your inspection report we can include it with your listing.
          </li>
          <li>
            Review the process for transferring vehicle titles in your state – and, if you have a loan on the vehicle,
            review the process and timeline for paying it off with your lender.
          </li>
          <li>
            Get ready for a thrilling 7-day auction and be prepared to engage with the community and answer questions as
            they arise.
          </li>
        </ul>
      </StepItem>

      <StepItem number="03" title="Finalize Your Auction">
        <p className="mb-4">
          Once you&apos;ve provided us with all of the necessary information and photos, we&apos;ll create a draft of your listing
          for you to approve. Once you&apos;ve reviewed and approved it, we&apos;ll work with you to schedule your auction, and it
          will go live shortly thereafter!
        </p>
      </StepItem>

      <StepItem number="04" title="Participate in the Auction">
        <ul className="list-disc pl-6 space-y-3 mb-4">
          <li>
            Timely and positive seller participation in the auction – responding to comments and questions, providing
            additional pictures or videos as needed, etc. – is crucial to a successful auction. Good seller
            participation will result in additional interest, more bids, and a higher final sale price.
          </li>
          <li>
            Interested bidders may contact you directly via email using the &quot;Contact Seller&quot; feature, allowing them to
            schedule test drives, pre-purchase inspections (at their cost), and ask additional questions.
          </li>
          <li>Enjoy the final minutes – many of our auctions end with thrilling bidding wars, so get ready!</li>
        </ul>
      </StepItem>

      <StepItem number="05" title="Auction End">
        <p className="mb-4">
          After the auction closes, you&apos;ll have the option to use Cars & Bids SafePay to complete your sale quickly and
          securely, 100% online. You&apos;ll also receive the buyer&apos;s contact information (and vice-versa) in order to
          finalize the details and logistics of the transaction. Learn more about Finalizing the Sale.
        </p>

        <p className="mb-4">
          If your auction had a reserve and it was not met, we&apos;ll reach out to you and the highest bidder to see if we
          can help make a deal!
        </p>
      </StepItem>
    </div>
  )
}
