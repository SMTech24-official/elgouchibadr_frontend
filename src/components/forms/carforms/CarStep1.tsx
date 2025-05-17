"use client"

import { useFormContext } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { FormValues } from "../FormSchema"

interface Step1Props {
  onNext: () => void
}

export function CarStep1({ onNext }: Step1Props) {
  const form = useFormContext<FormValues>()
  const {
    // register,
    formState: { errors },
    setValue,
    watch,
  } = form

  const dealerType = watch("dealerType")

  return (
    <div className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Info</h2>

        <div className="mb-6">
          <FormField
            control={form.control}
            name="dealerType"
            render={({ }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Dealer or private party?</FormLabel>
                <div className="flex gap-3 mt-2">
                  <Button
                    type="button"
                    variant="outline"
                    className={`px-6 py-2 ${
                      dealerType === "Dealer"
                        ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setValue("dealerType", "Dealer", { shouldValidate: true })}
                  >
                    Dealer
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className={`px-6 py-2 ${
                      dealerType === "Private party"
                        ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setValue("dealerType", "Private party", { shouldValidate: true })}
                  >
                    Private party
                  </Button>
                </div>
                {errors.dealerType && <FormMessage>{errors.dealerType.message}</FormMessage>}
              </FormItem>
            )}
          />
        </div>

        <div className="mb-6">
          <FormField
            control={form.control}
            name="additionalFees"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Are there any additional fees the buyer will have to pay?
                </FormLabel>
                <FormControl>
                  <Input placeholder="N/A" className="mt-2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" className="mt-2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contactNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Contact Number</FormLabel>
                <FormControl>
                  <Input placeholder="(555) 123-4567" className="mt-2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="button"
          onClick={onNext}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors"
        >
          Register to bid
        </Button>
      </div>
    </div>
  )
}
