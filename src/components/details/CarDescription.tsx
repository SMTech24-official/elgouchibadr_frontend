import { CarDescriptionData } from "@/types/FakeWebData";
import man from "@/assets/women.png";
import Image from "next/image";
export default function CarDescription() {
  return (
    <div className="mx-auto px-4 py-8 font-sans">
      {/* Header */}

      {/* Main Content */}
      <div className="space-y-8">
        {/* Description */}

        {/* Highlights */}
        <section>
          <h3 className="text-xl font-bold mb-4 border-b pb-2">Highlights</h3>
          <p className="mb-4 font-medium">
            THIS...is a {CarDescriptionData.year} Porsche 718 Cayman GT4,
            finished in {CarDescriptionData.color} with a{" "}
            {CarDescriptionData.interior} interior.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {CarDescriptionData.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </section>

        {/* Equipment */}
        <section>
          <h3 className="text-xl font-bold mb-4 border-b pb-2">Equipment</h3>
          <p className="mb-4 text-gray-700">
            A partial list of notable equipment reported by the seller includes:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {CarDescriptionData.equipment.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Modifications */}
        <section>
          <h3 className="text-xl font-bold mb-4 border-b pb-2">
            Modifications
          </h3>
          <p className="mb-4 text-gray-700">
            Notable modifications reported by the seller include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {CarDescriptionData.modifications.map((mod, index) => (
              <li key={index}>{mod}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="text-xl font-bold mb-4 border-b pb-2">Known Flaws</h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {CarDescriptionData.flaws.map((mod, index) => (
              <li key={index}>{mod}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="text-xl font-bold mb-4 border-b pb-2">
            Recent Service History
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {CarDescriptionData.history.map((mod, index) => (
              <li key={index}>{mod}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="text-xl font-bold mb-4 border-b pb-2">
            Other Items Included in Sale
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {CarDescriptionData.sales.map((mod, index) => (
              <li key={index}>{mod}</li>
            ))}
          </ul>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4 border-b pb-2">Video</h3>
          <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
              {" "}
              {/* 16:9 aspect ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/hQYRDNl-lGI?si=P18rwscygITobSQL"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
              {" "}
              {/* 16:9 aspect ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/NMThdHhrLoM?si=5rTrHEIiUUPZgUR5"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Safe-pay section */}
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-xs font-bold">SP</span>
            </div>
            <span className="font-bold">Safe-pay</span>
          </div>
          <p className="text-sm mb-1">
            This car is eligible for Car bidding SafePay, powered by KeySavvy.
            SafePay is the easiest, safest, and most efficient way to complete
            your purchase - 100% online!
          </p>
          <a
            href="#"
            className="text-blue-500 text-sm font-medium inline-flex items-center"
          >
            Learn More
          </a>
        </div>

        {/* Sale information */}
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-medium">Sold to</span>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden relative">
                    <Image
                      src={man}
                      alt="Seller avatar"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <span className="text-sm">uksalfur.info</span>
                </div>
              </div>
              <div className="text-[#00A8E8] text-5xl font-bold">$90,562</div>
            </div>

            <div className="space-y-2">
              <div className="flex gap-4">
                <span className="text-sm font-medium">Seller -</span>
                <span className="text-sm">uksalfur.info</span>
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-medium">Ended -</span>
                <span className="text-sm">Apr 8, 2025 11:31 PM</span>
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-medium">Bids -</span>
                <span className="text-sm">37</span>
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-medium">Views -</span>
                <span className="text-sm">15,016</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
