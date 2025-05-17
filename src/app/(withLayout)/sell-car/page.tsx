import ProductCard from "@/components/card/ProductCard";
import HowItWorks from "@/components/common/HowItWorks";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import HeroSec from "@/components/sellcar/HeroSec";
import { filterCarData } from "@/types/FakeWebData";

export default function Page() {
  return (
    <div>
      <HeroSec />

      <div>
        <HowItWorks />
      </div>
      <div>
        <div className="container py-[40px]">
          <h1 className="text-[35px] font-medium">Recent Auctions & sales</h1>
          <p className="text-lg pb-6">
            Explore Our Latest Auctions and Successful Sales – Find Your Next
            Opportunity!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterCarData.slice(0, 6).map((car) => (
              <ProductCard key={car.id} car={car} />
            ))}
          </div>
        </div>
        <div>
          <WhyChooseUsSection />
        </div>
      </div>
    </div>
  );
}
