"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { sliderCarData } from "@/types/FakeWebData";

export default function CarSlider() {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative mx-auto container ">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="relative"
      >
        {sliderCarData.map((car, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-5 md:gap-4">
              <div className="relative col-span-1 h-[300px] overflow-hidden rounded-lg md:col-span-3 md:h-[400px]">
                <Image
                  src={car.mainImage}
                  alt={`${car.make} ${car.model} - Main View`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="col-span-1 grid grid-cols-2 gap-2 md:col-span-2">
                {Array.isArray(car.additionalImages) &&
                  car.additionalImages.map(
                    (image: StaticImageData, imgIndex: number) => (
                      <div
                        key={imgIndex}
                        className="relative h-[140px] overflow-hidden rounded-lg md:h-[195px]"
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${car.make} ${car.model} - View ${
                            imgIndex + 1
                          }`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )
                  )}
              </div>
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold">
                {car.make} {car.model}
              </h3>
              <p className="text-gray-600">
                {car.year} • {car.price}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <button
        className={cn(
          "swiper-button-prev w-[40px] h-[40px] absolute left-2 top-1/2 z-10 flex items-center justify-center rounded-full transition-all ",
          "-translate-y-1/2",
          activeIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
        )}
      >
        {/* <ChevronLeft className="text-primary" size={18} /> */}
      </button>

      <button
        className={cn(
          "swiper-button-next w-[40px] h-[40px] absolute right-2 top-1/2 z-10 flex items-center justify-center rounded-full transition-all ",
          "-translate-y-1/2",
          activeIndex === sliderCarData.length - 1
            ? "opacity-50 cursor-not-allowed"
            : "opacity-100"
        )}
      >
        {/* <ChevronRight className="text-primary" size={18} /> */}
      </button>
    </div>
  );
}
