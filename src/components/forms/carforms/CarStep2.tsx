"use client"

import { useFormContext } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { FormValues } from "../FormSchema"

interface Step2Props {
  onNext: () => void
  onPrev: () => void
}

export function CarStep2({ onNext, onPrev }: Step2Props) {
  const form = useFormContext<FormValues>()
  const {
    setValue,
    watch,
    // formState: { errors, isValid },
  } = form

  const modified = watch("modified")
  const mechanicalIssues = watch("mechanicalIssues")
  const carLocation = watch("carLocation")
  const carLocationState = watch("carLocationState")
  const forSaleElsewhere = watch("forSaleElsewhere")

  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Car Details</h2>

        <div className="mb-6">
          <FormField
            control={form.control}
            name="vin"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">VIN</FormLabel>
                <div className="flex gap-2 mt-2">
                  <FormControl>
                    <Input placeholder="Enter VIN number" className="flex-1" {...field} />
                  </FormControl>
                  <Button type="button" className="bg-blue-500 hover:bg-blue-600 text-white">
                    Lookup
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Year</FormLabel>
                <FormControl>
                  <Input placeholder="2023" className="mt-2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="make"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Make</FormLabel>
                <FormControl>
                  <Input placeholder="Toyota" className="mt-2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Model</FormLabel>
                <FormControl>
                  <Input placeholder="Camry" className="mt-2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormField
            control={form.control}
            name="transmissionType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Transmission</FormLabel>
                <Select
                  onValueChange={(value) => setValue("transmissionType", value, { shouldValidate: true })}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select transmission type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="automatic">Automatic</SelectItem>
                    <SelectItem value="manual">Manual</SelectItem>
                    <SelectItem value="cvt">CVT</SelectItem>
                    <SelectItem value="dct">Dual-Clutch</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mileage"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Mileage (in miles)</FormLabel>
                <FormControl>
                  <Input placeholder="25,000" className="mt-2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-6">
          <FormField
            control={form.control}
            name="transmissionDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Transmission Details</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="For example: sport package, long-range battery, F&O or other important factory-installed features"
                    className="mt-2 min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-6">
          <FormField
            control={form.control}
            name="modified"
            render={() => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Has the car been modified?</FormLabel>
                <div className="flex gap-3 mt-2">
                  <Button
                    type="button"
                    variant="outline"
                    className={`px-6 py-2 ${
                      modified === "Completely stock"
                        ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setValue("modified", "Completely stock", { shouldValidate: true })}
                  >
                    Completely stock
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className={`px-6 py-2 ${
                      modified === "Modified"
                        ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setValue("modified", "Modified", { shouldValidate: true })}
                  >
                    Modified
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-6">
          <FormField
            control={form.control}
            name="modificationDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  List any modifications, including modification or removal of the catalytic converters.
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="N/A" className="mt-2 min-h-[100px]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-6">
          <FormField
            control={form.control}
            name="mechanicalIssues"
            render={() => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Are there any significant mechanical or cosmetic flaws that we should know about?
                </FormLabel>
                <div className="flex gap-3 mt-2">
                  <Button
                    type="button"
                    variant="outline"
                    className={`px-6 py-2 ${
                      mechanicalIssues === "Yes"
                        ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setValue("mechanicalIssues", "Yes", { shouldValidate: true })}
                  >
                    Yes
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className={`px-6 py-2 ${
                      mechanicalIssues === "No"
                        ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setValue("mechanicalIssues", "No", { shouldValidate: true })}
                  >
                    No
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-6">
          <FormField
            control={form.control}
            name="mechanicalIssuesDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">List any mechanical or cosmetic issues.</FormLabel>
                <FormControl>
                  <Textarea placeholder="N/A" className="mt-2 min-h-[100px]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-6">
          <FormField
            control={form.control}
            name="carLocation"
            render={() => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Where is the car located?</FormLabel>
                <div className="flex gap-3 mt-2">
                  <Button
                    type="button"
                    variant="outline"
                    className={`px-6 py-2 ${
                      carLocation === "United States"
                        ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setValue("carLocation", "United States", { shouldValidate: true })}
                  >
                    United States
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className={`px-6 py-2 ${
                      carLocation === "Canada"
                        ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setValue("carLocation", "Canada", { shouldValidate: true })}
                  >
                    Canada
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-6">
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Zip code</FormLabel>
                <FormControl>
                  <Input placeholder="90210" className="mt-2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-6">
          <FormField
            control={form.control}
            name="carLocationState"
            render={() => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Where is the car located?</FormLabel>
                <div className="flex gap-3 mt-2">
                  <Button
                    type="button"
                    variant="outline"
                    className={`px-6 py-2 ${
                      carLocationState === "United States"
                        ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setValue("carLocationState", "United States", { shouldValidate: true })}
                  >
                    United States
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className={`px-6 py-2 ${
                      carLocationState === "Canada"
                        ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setValue("carLocationState", "Canada", { shouldValidate: true })}
                  >
                    Canada
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-6">
          <FormField
            control={form.control}
            name="cityProvince"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">City and Province</FormLabel>
                <FormControl>
                  <Input placeholder="Los Angeles, CA" className="mt-2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-6">
          <FormField
            control={form.control}
            name="forSaleElsewhere"
            render={() => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Is this car for sale elsewhere?</FormLabel>
                <div className="flex gap-3 mt-2">
                  <Button
                    type="button"
                    variant="outline"
                    className={`px-6 py-2 ${
                      forSaleElsewhere === "Yes"
                        ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setValue("forSaleElsewhere", "Yes", { shouldValidate: true })}
                  >
                    Yes
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className={`px-6 py-2 ${
                      forSaleElsewhere === "No"
                        ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setValue("forSaleElsewhere", "No", { shouldValidate: true })}
                  >
                    No
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-6">
          <FormField
            control={form.control}
            name="forSaleElsewhereDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Where else is this car for sale?</FormLabel>
                <FormControl>
                  <Input placeholder="N/A" className="mt-2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between mt-8">
          <Button
            type="button"
            onClick={onPrev}
            variant="outline"
            className="px-6 py-2 border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Back
          </Button>
          <Button type="button" onClick={onNext} className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
