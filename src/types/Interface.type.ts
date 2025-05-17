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