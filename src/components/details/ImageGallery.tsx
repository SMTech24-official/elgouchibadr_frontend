"use client"

import { useState, useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import car from "@/assets/image/car.png";

interface ImageGalleryProps {
  images: {
    id: number
    src: string | StaticImageData
    alt: string
  }[]
  initialIndex: number
  onClose: () => void
}

export default function ImageGallery({ images, initialIndex, onClose }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        goToNext()
      } else if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Prevent body scrolling when gallery is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4 text-white">
        <div className="text-sm">
          {currentIndex + 1} / {images.length}
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
          <X className="h-6 w-6" />
        </Button>
      </div>

      {/* Main image */}
      <div className="flex-1 flex items-center justify-center relative">
        <div className="relative w-full h-full max-h-[80vh]">
          <Image
            src={
              currentIndex === 0
                ? car 
                : images[currentIndex].src
            }
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
          />
        </div>

        {/* Navigation buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 text-white hover:bg-white/20 h-12 w-12 rounded-full"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 text-white hover:bg-white/20 h-12 w-12 rounded-full"
          onClick={goToNext}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>

      {/* Thumbnails */}
      <div className="bg-black/80 p-4">
        <div className="flex overflow-x-auto gap-2 pb-2">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`relative h-16 w-24 flex-shrink-0 cursor-pointer transition-all ${
                index === currentIndex ? "ring-2 ring-blue-500" : "opacity-70"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
