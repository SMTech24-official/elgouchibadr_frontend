import CarFilters from "@/components/filtersec/CarFilters";
import CarSlider from "@/components/home/CarSlider";
import TestimonialsSection from "@/components/home/TestomonialSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <CarSlider />
      <div className="py-[80px]">
        <CarFilters />
      </div>
      <div className="pb-[80px]">
        <WhyChooseUsSection />
      </div>
      <div className="pb-[80px]">
        <TestimonialsSection />
      </div>
    </>
  );
}
