"use client";
import {
  Star,
  Clock,
  DollarSign,
  Users,
  MessageSquare,
  Share2,
} from "lucide-react";
import { useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import {
  carDetails,
  carDetailsImages,
  filterCarData,
} from "@/types/FakeWebData";
import man from "@/assets/women.png";
import { Button } from "../ui/button";
import ImageGallery from "./ImageGallery";
import BidModal from "../forms/BidModal";
import ProductCard from "../card/ProductCard";
import CarDescription from "./CarDescription";
import CommentSection from "./CommentSection";
import BidSection from "./BidSection";

export default function CarListing() {
  const [cars] = useState(filterCarData);

  const [showBidModal, setShowBidModal] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openGallery = (index: number) => {
    setSelectedImageIndex(index);
    setGalleryOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Car Title Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="pt-[40px] pb-[30px]">
          <h1 className="text-2xl md:text-3xl font-bold">
            2022 Porsche 718 Cayman GT4
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            ~7,400 Miles, 4.0-Liter Flat-6, Highly Equipped, Some Modifications
          </p>
        </div>
        <div className="flex gap-2 mt-2 md:mt-0">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-md"
          >
            <Star className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            className="h-10 rounded-md bg-primary text-white hover:bg-primary/95"
          >
            <Share2 className="h-5 w-5 mr-2" /> Share
          </Button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div
          className="md:col-span-2 relative h-[280px] md:h-[400px] rounded-lg overflow-hidden cursor-pointer"
          onClick={() => openGallery(0)}
        >
          <Image
            src={carDetailsImages[0].src || "/placeholder.svg"}
            alt={carDetailsImages[0].alt}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {carDetailsImages.slice(1, 4).map((image, index) => (
            <div
              key={image.id}
              className="relative h-[130px] md:h-[196px] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openGallery(index + 1)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
          <div
            className="relative h-[130px] md:h-[196px] rounded-lg overflow-hidden cursor-pointer"
            onClick={() => openGallery(5)}
          >
            <Image
              src={carDetailsImages[5].src || "/placeholder.svg"}
              alt={carDetailsImages[5].alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-medium">All Photos (12)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bid Info */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Car Information */}
        <div className="md:col-span-2">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4">
            <div className="bg-accent text-white p-4 rounded-md flex items-center justify-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>10:50:54</span>
            </div>
            <div className="bg-accent text-white p-4 rounded-md flex items-center justify-center">
              <DollarSign className="h-5 w-5 mr-2" />
              <span>$90,562</span>
            </div>
            <div className="bg-accent text-white p-4 rounded-md flex items-center justify-center">
              <Users className="h-5 w-5 mr-2" />
              <span>40</span>
            </div>
            <div className="bg-accent text-white p-4 rounded-md flex items-center justify-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              <span>1,120</span>
            </div>
            <Button
              className="bg-primary text-white p-4 h-auto font-medium"
              onClick={() => setShowBidModal(true)}
            >
              Place Bid
            </Button>
          </div>
          <h2 className="text-2xl font-bold py-4">Car Information</h2>
          <div className="border rounded-md overflow-hidden">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium bg-gray-50 w-1/4">
                    Make
                  </TableCell>
                  <TableCell>{carDetails.make}</TableCell>
                  <TableCell className="font-medium bg-gray-50 w-1/4">
                    Engine
                  </TableCell>
                  <TableCell>{carDetails.engine}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium bg-gray-50">
                    Model
                  </TableCell>
                  <TableCell>{carDetails.model}</TableCell>
                  <TableCell className="font-medium bg-gray-50">
                    Drivetrain
                  </TableCell>
                  <TableCell>{carDetails.drivetrain}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium bg-gray-50">
                    Mileage
                  </TableCell>
                  <TableCell>{carDetails.mileage}</TableCell>
                  <TableCell className="font-medium bg-gray-50">
                    Transmission
                  </TableCell>
                  <TableCell>{carDetails.transmission}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium bg-gray-50">VIN</TableCell>
                  <TableCell>{carDetails.vin}</TableCell>
                  <TableCell className="font-medium bg-gray-50">
                    Body Style
                  </TableCell>
                  <TableCell>{carDetails.bodyStyle}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium bg-gray-50">
                    Title Status
                  </TableCell>
                  <TableCell>{carDetails.titleStatus}</TableCell>
                  <TableCell className="font-medium bg-gray-50">
                    Exterior Color
                  </TableCell>
                  <TableCell>{carDetails.exteriorColor}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium bg-gray-50">
                    Location
                  </TableCell>
                  <TableCell>{carDetails.location}</TableCell>
                  <TableCell className="font-medium bg-gray-50">
                    Interior Color
                  </TableCell>
                  <TableCell>{carDetails.interiorColor}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium bg-gray-50">
                    Seller
                  </TableCell>
                  <TableCell>{carDetails.seller}</TableCell>
                  <TableCell className="font-medium bg-gray-50">
                    Seller Type
                  </TableCell>
                  <TableCell>{carDetails.sellerType}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Seller Information */}
          <div className="mt-6  rounded-md  ">
            <div className="bg-gray-200 p-4 rounded-[8px]">
              <div className="flex items-center gap-4 bg-gray-200">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <Image
                    src={man}
                    alt="Seller avatar"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Saifur Rahman</h3>
              </div>
              <p>
                The Porsche Cayman GT4 is one of my favorite cars on the market,
                as it boasts a fantastic naturally aspirated 4.0-liter flat-6,
                incredibly precise handling, and one of the most thrilling
                driving experiences of any modern car. This particular GT4
                features a quick-shifting 7-speed PDK automatic transmission –
                and it touts some great equipment, including 20-inch wheels,
                leather and Race-Tex upholstery, carbon fiber bucket seats, and
                Porsche Ceramic Composite Brakes. Plus, it hasn&apos;t been
                significantly modified, and it comes with a clean, accident-free
                Carfax report for added buyer confidence.
              </p>
            </div>
          </div>
          <CarDescription />

          <CommentSection />
          <div className="py-[40px]">
            <BidSection />
          </div>
        </div>

        {/* Auctions Ending Soon */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Auctions ending soon</h2>
          <p className="text-sm text-gray-600 mb-2">
            Ending April 8th at 11:30 PM
          </p>
          {/*  */}

          <div className="grid grid-cols-1  gap-6 py-4">
            {cars.slice(0, 3).map((car) => (
              <ProductCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </div>

      {/* Bid Modal */}
      {showBidModal && <BidModal onClose={() => setShowBidModal(false)} />}

      {/* Image Gallery */}
      {galleryOpen && (
        <ImageGallery
          images={carDetailsImages}
          initialIndex={selectedImageIndex}
          onClose={() => setGalleryOpen(false)}
        />
      )}
      
    </div>
  );
}
