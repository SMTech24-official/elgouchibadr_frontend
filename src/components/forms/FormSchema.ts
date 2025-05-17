import { z } from "zod"

export const step1Schema = z.object({
  dealerType: z.string().min(1, "Please select dealer type"),
  additionalFees: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  contactNumber: z.string().min(1, "Contact number is required"),
})

export const step2Schema = z.object({
  vin: z.string().min(1, "VIN is required"),
  year: z.string().min(1, "Year is required"),
  make: z.string().min(1, "Make is required"),
  model: z.string().min(1, "Model is required"),
  transmissionType: z.string().min(1, "Transmission type is required"),
  mileage: z.string().min(1, "Mileage is required"),
  transmissionDetails: z.string().optional(),
  modified: z.string().min(1, "Please select if the car has been modified"),
  modificationDetails: z.string().optional(),
  mechanicalIssues: z.string().min(1, "Please select if there are mechanical issues"),
  mechanicalIssuesDetails: z.string().optional(),
  carLocation: z.string().min(1, "Car location is required"),
  zipCode: z.string().min(1, "Zip code is required"),
  carLocationState: z.string().min(1, "Car location state is required"),
  cityProvince: z.string().min(1, "City/Province is required"),
  forSaleElsewhere: z.string().min(1, "Please select if the car is for sale elsewhere"),
  forSaleElsewhereDetails: z.string().optional(),
})

export const step3Schema = z.object({
  titleLocation: z.string().min(1, "Title location is required"),
  state: z.string().min(1, "State is required"),
  vehicleTitled: z.string().min(1, "Please select if the vehicle is titled in your name"),
  titleStatus: z.string().min(1, "Title status is required"),
  setReservePrice: z.string().min(1, "Please select if you want to set a reserve price"),
  photos: z.string().min(1, "Please upload at least 6 photos of your car"),
  referral: z.string().optional(),
})

export const formSchema = z.object({
  ...step1Schema.shape,
  ...step2Schema.shape,
  ...step3Schema.shape,
})

export type FormValues = z.infer<typeof formSchema> & {
  photoFiles?: File[]
}
