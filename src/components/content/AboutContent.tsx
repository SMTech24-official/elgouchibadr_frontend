import { Star } from "lucide-react"
import { BenefitCard } from "../card/BenifitCard"

export function AboutUsContent() {
  return (
    <div className="max-w-3xl">
      {/* <SectionHeading as="h1">About Us</SectionHeading> */}

      <ul className="space-y-6 list-disc pl-6 mb-8">
        <li className="text-gray-800">
          Over the last few years, many car enthusiasts have started turning their attention to recent vehicles – cars
          from the 1980s, 1990s, and beyond. Automotive reviewer Doug DeMuro realized there isn&apos;t yet a specific place
          that&apos;s focused solely on buying and selling these modern enthusiast cars, but there should be – so he and a
          team created Cars & Bids, with its simple name modeled after Doug&apos;s famous pursuit of &quot;quirks and features.&quot;
        </li>

        <li className="text-gray-800">
          Cars & Bids is the best online auction marketplace to buy and sell modern enthusiast cars – and that means
          pretty much anything that&apos;s cool from the 1980s, 1990s, 2000s, 2010s, or 2020s. To us, &quot;cool&quot; ranges from the
          obvious (a Ferrari F355 or a Lamborghini Gallardo) to the esoteric (a pristine Dodge Dakota Convertible or a
          Mercury Capri XR2) to the traditional fun cars that enthusiasts love (a Mazda MX-5 Miata or a Porsche 911).
          Basically everything that&apos;s exciting, fun, interesting, or quirky is welcome here – as long as it comes from
          the modern era.
        </li>

        <li className="text-gray-800">
          Although there are many places to buy and sell a special car, Cars & Bids offers significant advantages over
          other websites. <strong>Here are just a few of our benefits:</strong>
        </li>
      </ul>

      <div className="grid md:grid-cols-2 gap-8">
        <BenefitCard icon={<Star className="h-5 w-5" />} title="We're focused on modern enthusiast cars:">
          the 1980s to the 2020s. That means anyone interested in the next era of exciting cars will come here first to
          buy and sell.
        </BenefitCard>

        <BenefitCard icon={<Star className="h-5 w-5" />} title="Our fees are low.">
          Sellers list for free, and the buyer&apos;s fee is just 5%, with a minimum of $250 and a maximum of $7,500 — far
          below other auction houses and enthusiast car auction websites.
        </BenefitCard>

        <BenefitCard
          icon={<Star className="h-5 w-5" />}
          title="We believe that every vehicle should come with a vehicle history report:"
        >
          so we provide one, for free, instead of asking sellers to pay for their own.
        </BenefitCard>

        <BenefitCard
          icon={<Star className="h-5 w-5" />}
          title="Doug DeMuro will bring extra eyes – and extra buyers – to your cars,"
        >
          periodically reviewing cars offered on Cars & Bids. If your car is chosen, you&apos;ll get far more eyes on your
          vehicle than any other auction platform on earth.
        </BenefitCard>

        <BenefitCard icon={<Star className="h-5 w-5" />} title="Cars & Bids makes it easy to submit your car for sale.">
          We value your time by asking for only a few crucial details before letting you know whether or not we&apos;re
          accepting your vehicle. That means you don&apos;t have to waste your time providing initial information only to
          have your car rejected.
        </BenefitCard>

        <BenefitCard
          icon={<Star className="h-5 w-5" />}
          title="Cars & Bids is the most user-friendly online automotive marketplace,"
        >
          with easy sorting and searching – and simplified auctions that tell you exactly what you need to know about
          each vehicle.
        </BenefitCard>

        <BenefitCard icon={<Star className="h-5 w-5" />} title="We'll get your car listed quickly –">
          and we&apos;ll even take your input on scheduling your car&apos;s auction.
        </BenefitCard>

        <BenefitCard icon={<Star className="h-5 w-5" />} title="Our post-auction support is unmatched.">
          Cars & Bids SafePay makes completing your transaction fast, easy, and secure. If you prefer to handle the
          transaction yourself, we&apos;re always here to answer your questions and lend a hand.
        </BenefitCard>
      </div>
    </div>
  )
}
