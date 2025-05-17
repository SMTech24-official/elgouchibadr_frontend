// import { Car } from "./Interface.type";
import backside from "@/assets/image/backside.png";
import car from "@/assets/image/car.png";
import front from "@/assets/image/front.png";
import handle from "@/assets/image/handle.png";
import sit from "@/assets/image/sit.png";
import { CarFilter } from "./Interface.type";

// Car data with 5 images per car (1 main + 4 additional)
export const sliderCarData = [
  {
    id: 1,
    make: "Alfa Romeo",
    model: "Giulia Quadrifoglio",
    year: 2023,
    price: "$79,995",
    mainImage: car,
    additionalImages: [backside, handle, sit, front],
  },
  {
    id: 2,
    make: "BMW",
    model: "M3 Competition",
    year: 2023,
    price: "$76,995",
    mainImage: car,
    additionalImages: [backside, handle, sit, front],
  },
  {
    id: 3,
    make: "Mercedes-Benz",
    model: "AMG C63",
    year: 2023,
    price: "$82,500",
    mainImage: car,
    additionalImages: [backside, handle, sit, front],
  },
  {
    id: 4,
    make: "Audi",
    model: "RS5 Sportback",
    year: 2023,
    price: "$75,900",
    mainImage: car,
    additionalImages: [backside, handle, sit, front],
  },
  {
    id: 5,
    make: "Porsche",
    model: "911 Carrera S",
    year: 2023,
    price: "$123,600",
    mainImage: car,
    additionalImages: [backside, handle, sit, front],
  },
];


const createEndDate = (daysFromNow: number) => {
  const date = new Date()
  date.setDate(date.getDate() + daysFromNow)
  return date
}

// Helper function to create list dates
const createListDate = (daysAgo: number) => {
  const date = new Date()
  date.setDate(date.getDate() - daysAgo)
  return date
}

export const filterCarData: CarFilter[] = [
  {
    id: "1",
    title: "2022 Porsche 718 Cayman GT4",
    year: 2022,
    make: "Porsche",
    model: "718 Cayman GT4",
    image: front,
    price: 90562,
    mileage: 7400,
    engineDetails: "4.0-Liter Flat-6, Highly Equipped, Some Modifications",
    transmission: "Manual",
    bodyStyle: "Coupe",
    location: "Cumberland, RI 02864",
    timeLeft: "10:50:54",
    endingSoon: true,
    newlyListed: false,
    endDate: createEndDate(0.5),
    listDate: createListDate(15),
  },
  {
    id: "2",
    title: "2021 BMW M3 Competition",
    year: 2021,
    make: "BMW",
    model: "M3 Competition",
    image: front,
    price: 75800,
    mileage: 12500,
    engineDetails: "3.0L Twin-Turbo I6, 503 HP, Carbon Package",
    transmission: "Automatic",
    bodyStyle: "Sedan",
    location: "Boston, MA 02108",
    timeLeft: "23:15:32",
    endingSoon: false,
    newlyListed: true,
    endDate: createEndDate(1),
    listDate: createListDate(1),
  },
  {
    id: "3",
    title: "2020 Audi RS6 Avant",
    year: 2020,
    make: "Audi",
    model: "RS6 Avant",
    image: front,
    price: 110250,
    mileage: 18200,
    engineDetails: "4.0L Twin-Turbo V8, 591 HP, Sport Exhaust",
    transmission: "Automatic",
    bodyStyle: "Wagon",
    location: "Hartford, CT 06103",
    timeLeft: "36:22:15",
    endingSoon: false,
    newlyListed: false,
    endDate: createEndDate(1.5),
    listDate: createListDate(10),
  },
  {
    id: "4",
    title: "2019 Mercedes-AMG GT R",
    year: 2019,
    make: "Mercedes-Benz",
    model: "AMG GT R",
    image: front,
    price: 135000,
    mileage: 9800,
    engineDetails: "4.0L Twin-Turbo V8, 577 HP, Track Package",
    transmission: "Automatic",
    bodyStyle: "Coupe",
    location: "Providence, RI 02903",
    timeLeft: "08:45:30",
    endingSoon: true,
    newlyListed: false,
    endDate: createEndDate(0.3),
    listDate: createListDate(20),
  },
  {
    id: "5",
    title: "2023 Toyota Supra 3.0 Premium",
    year: 2023,
    make: "Toyota",
    model: "Supra 3.0 Premium",
    image: front,
    price: 58500,
    mileage: 3200,
    engineDetails: "3.0L Turbo I6, 382 HP, Driver Assist Package",
    transmission: "Manual",
    bodyStyle: "Coupe",
    location: "New Haven, CT 06510",
    timeLeft: "48:10:22",
    endingSoon: false,
    newlyListed: true,
    endDate: createEndDate(2),
    listDate: createListDate(2),
  },
  {
    id: "6",
    title: "2018 Chevrolet Corvette Z06",
    year: 2018,
    make: "Chevrolet",
    model: "Corvette Z06",
    image: front,
    price: 68900,
    mileage: 15600,
    engineDetails: "6.2L Supercharged V8, 650 HP, Z07 Performance Package",
    transmission: "Manual",
    bodyStyle: "Coupe",
    location: "Worcester, MA 01608",
    timeLeft: "15:30:45",
    endingSoon: true,
    newlyListed: false,
    endDate: createEndDate(0.6),
    listDate: createListDate(12),
  },
  {
    id: "7",
    title: "2022 Ford Mustang Shelby GT500",
    year: 2022,
    make: "Ford",
    model: "Mustang Shelby GT500",
    image: front,
    price: 92500,
    mileage: 5100,
    engineDetails: "5.2L Supercharged V8, 760 HP, Carbon Fiber Track Package",
    transmission: "Automatic",
    bodyStyle: "Coupe",
    location: "Springfield, MA 01103",
    timeLeft: "72:15:10",
    endingSoon: false,
    newlyListed: true,
    endDate: createEndDate(3),
    listDate: createListDate(1),
  },
  {
    id: "8",
    title: "2020 Lexus LC 500",
    year: 2020,
    make: "Lexus",
    model: "LC 500",
    image: front,
    price: 78200,
    mileage: 11800,
    engineDetails: "5.0L V8, 471 HP, Touring Package",
    transmission: "Automatic",
    bodyStyle: "Coupe",
    location: "Stamford, CT 06901",
    timeLeft: "28:45:20",
    endingSoon: false,
    newlyListed: false,
    endDate: createEndDate(1.2),
    listDate: createListDate(8),
  },
  {
    id: "9",
    title: "2021 Jaguar F-Type R",
    year: 2021,
    make: "Jaguar",
    model: "F-Type R",
    image: front,
    price: 85400,
    mileage: 8900,
    engineDetails: "5.0L Supercharged V8, 575 HP, Premium Interior",
    transmission: "Automatic",
    bodyStyle: "Convertible",
    location: "Portland, ME 04101",
    timeLeft: "54:20:15",
    endingSoon: false,
    newlyListed: false,
    endDate: createEndDate(2.2),
    listDate: createListDate(14),
  },
]



type Testimonial = {
  id: number
  name: string
  email: string
  image: string
  content: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Saifur Rahman",
    email: "ux.saifur.info@gmail.com",
    image: "/saifur.png",
    content:
      "I bought my dream car – a 2019 Porsche 911 – through Cars & Bids. The process was smooth, and I had complete peace of mind throughout the auction. Highly recommend!",
    rating: 4,
  },
  {
    id: 2,
    name: "Mark T.",
    email: "ux.saifur.info@gmail.com",
    image: "/mark.png",
    content:
      "Selling my car was incredibly easy. The platform made sure I got the best price for my 2018 BMW M4. The auction team was very supportive.",
    rating: 4,
  },
  {
    id: 3,
    name: "Robert Fox",
    email: "ux.saifur.info@gmail.com",
    image: "/robert.png",
    content:
      "I had an amazing experience bidding on a 2020 Tesla Model S. The auction was transparent, and the bidding process was smooth. Would definitely bid again!",
    rating: 4,
  },
  {
    id: 4,
    name: "Mark T.",
    email: "ux.saifur.info@gmail.com",
    image: "/mark.png",
    content:
      "Selling my car was incredibly easy. The platform made sure I got the best price for my 2018 BMW M4. The auction team was very supportive.",
    rating: 4,
  },
  {
    id: 5,
    name: "Robert Fox",
    email: "ux.saifur.info@gmail.com",
    image: "/robert.png",
    content:
      "I had an amazing experience bidding on a 2020 Tesla Model S. The auction was transparent, and the bidding process was smooth. Would definitely bid again!",
    rating: 4,
  },
  {
    id: 6,
    name: "Saifur Rahman",
    email: "ux.saifur.info@gmail.com",
    image: "/saifur.png",
    content:
      "I bought my dream car – a 2019 Porsche 911 – through Cars & Bids. The process was smooth, and I had complete peace of mind throughout the auction. Highly recommend!",
    rating: 4,
  },
]



export const carDetailsImages = [
  {
    id: 1,
    src: car,
    alt: "White Porsche 718 Cayman GT4 with Martini racing stripes - front view",
  },
  {
    id: 2,
    src: front,
    alt: "Front view of Porsche 718 Cayman GT4",
  },
  {
    id: 3,
    src: handle,
    alt: "Side view of Porsche 718 Cayman GT4",
  },
  {
    id: 4,
    src: sit,
    alt: "Rear view of Porsche 718 Cayman GT4",
  },
  {
    id: 5,
    src: handle,
    alt: "Interior dashboard view of Porsche 718 Cayman GT4",
  },
  {
    id: 6,
    src: front,
    alt: "Interior seats view of Porsche 718 Cayman GT4",
  },
]

export const carDetails = {
  make: "Porsche",
  model: "718 Cayman",
  mileage: "7,400",
  vin: "WP0AC2A87NS275695",
  titleStatus: "Clean (RI)",
  location: "Cumberland, RI 02864",
  seller: "Saifur Rahman",
  engine: "4.0L Flat-6",
  drivetrain: "Rear-wheel drive",
  transmission: "Automatic (7-Speed)",
  bodyStyle: "Coupe",
  exteriorColor: "White",
  interiorColor: "Black",
  sellerType: "Private Party",
}
