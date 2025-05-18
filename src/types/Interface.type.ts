import { StaticImageData } from "next/image"

export type Car = {
  id: number
  make: string
  model: string
  year: number
  price: string
  mainImage:string | File 
  additionalImages: File | StaticImageData[]
}

export interface AuctionCommentProps {
  id: number
  title: string
  details: string
  isPending: boolean
  isSold: boolean
  comment: string
  votes: number
  time: string
  price: number
  image: string | StaticImageData
}
export interface CarFilter {
  id: string
  title: string
  year: number
  make: string
  model: string
  image:  string | StaticImageData
  price: number
  mileage: number
  engineDetails: string
  transmission: string
  bodyStyle: string
  location: string
  timeLeft: string
  endingSoon: boolean
  newlyListed: boolean
  endDate: Date
  listDate: Date
}
