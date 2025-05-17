import CarListing from "@/components/details/CarListing";
import TestimonialsSection from "@/components/home/TestomonialSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

export default function Page() {
  return (
    <>
      <div className="container">
        <CarListing />
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
