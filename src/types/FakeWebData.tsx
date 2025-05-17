// import { Car } from "./Interface.type";
import backside from "@/assets/image/backside.png";
import car from "@/assets/image/car.png";
import front from "@/assets/image/front.png";
import handle from "@/assets/image/handle.png";
import sit from "@/assets/image/sit.png";

// Car data with 5 images per car (1 main + 4 additional)
export const carData = [
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
