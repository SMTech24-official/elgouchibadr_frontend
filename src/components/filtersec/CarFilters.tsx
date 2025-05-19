/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react"
import FilterDropdown from "./FilterDropdown"
import FilterButton from "./FilterButton"
import ProductCard from "../card/ProductCard"
import { filterCarData } from '../../types/FakeWebData';

// type Filters = {
//   year: string
//   transmission: string
//   bodyStyle: string
//   endingSoon: boolean
//   newlyListed: boolean
//   lowestMileage: boolean
// }

export default function CarFilters() {
  const [cars, setCars] = useState(filterCarData)
  const [filters, setFilters] = useState({
    year: "",
    transmission: "",
    bodyStyle: "",
    endingSoon: false,
    newlyListed: false,
    lowestMileage: false,
  })

  // Get unique values for filter dropdowns
  const years = [...new Set(filterCarData.map((car) => car.year))].sort((a, b) => b - a)
  const transmissions = [...new Set(filterCarData.map((car) => car.transmission))]
  const bodyStyles = [...new Set(filterCarData.map((car) => car.bodyStyle))]

  // Apply filters when they change
  useEffect(() => {
    let filteredCars = [...filterCarData]

    // Apply dropdown filters
    if (filters.year) {
      filteredCars = filteredCars.filter((car) => car.year.toString() === filters.year)
    }
    if (filters.transmission) {
      filteredCars = filteredCars.filter((car) => car.transmission === filters.transmission)
    }
    if (filters.bodyStyle) {
      filteredCars = filteredCars.filter((car) => car.bodyStyle === filters.bodyStyle)
    }

    // Apply button filters
    if (filters.endingSoon) {
      filteredCars = filteredCars.filter((car) => car.endingSoon)
    }
    if (filters.newlyListed) {
      filteredCars = filteredCars.filter((car) => car.newlyListed)
    }
    if (filters.lowestMileage) {
      filteredCars = filteredCars.sort((a, b) => a.mileage - b.mileage)
    }

    setCars(filteredCars)
  }, [filters])

  type FilterKey = keyof typeof filters;

  // Handle filter changes
  const handleFilterChange = (filterType: FilterKey, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
  }

  // Toggle button filters
  const toggleButtonFilter = (filterType: FilterKey) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: !prev[filterType],
    }))
  }

  return (
    <div className="container mx-auto px-4 pb-8">
      <h1 className="text-3xl font-bold mb-6">Auctions</h1>

      <div className="flex flex-wrap items-center gap-3 mb-8">
        <FilterDropdown
          label="Years"
          options={years.map((year) => ({ value: year.toString(), label: year.toString() }))}
          value={filters.year}
          onChange={(value) => handleFilterChange("year", value)}
        />

        <FilterDropdown
          label="Transmission"
          options={transmissions.map((trans) => ({ value: trans, label: trans }))}
          value={filters.transmission}
          onChange={(value) => handleFilterChange("transmission", value)}
        />

        <FilterDropdown
          label="Body Style"
          options={bodyStyles.map((style) => ({ value: style, label: style }))}
          value={filters.bodyStyle}
          onChange={(value) => handleFilterChange("bodyStyle", value)}
        />

        <div className="ml-auto flex gap-3">
          <FilterButton
            label="Ending soon"
            active={filters.endingSoon}
            onClick={() => toggleButtonFilter("endingSoon")}
          />

          <FilterButton
            label="Newly Listed"
            active={filters.newlyListed}
            onClick={() => toggleButtonFilter("newlyListed")}
          />

          <FilterButton
            label="Lowest mileage"
            active={filters.lowestMileage}
            onClick={() => toggleButtonFilter("lowestMileage")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <ProductCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  )
}
