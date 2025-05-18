"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const paymentGatewaySchema = z.object({
  gateway: z.string().min(1, { message: "Payment gateway is required" }),
  cardNumber: z
    .string()
    .min(1, { message: "Card number is required" })
    .regex(/^\d{16,19}$/, { message: "Please enter a valid card number" }),
  expiryDate: z
    .string()
    .min(1, { message: "Expiry date is required" })
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "Please enter a valid expiry date (MM/YY)" }),
  cvc: z
    .string()
    .min(1, { message: "CVC is required" })
    .regex(/^\d{3,4}$/, { message: "Please enter a valid CVC" }),
  nameOnCard: z.string().min(1, { message: "Name on card is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  postalCode: z.string().min(1, { message: "Postal code is required" }),
})

type PaymentGatewayValues = z.infer<typeof paymentGatewaySchema>

export default function PaymentGateways() {
  const [isSaving, setIsSaving] = useState(false)
  const [isAddingCard, setIsAddingCard] = useState(false)

  const form = useForm<PaymentGatewayValues>({
    resolver: zodResolver(paymentGatewaySchema),
    defaultValues: {
      gateway: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
      nameOnCard: "",
      country: "",
      postalCode: "",
    },
  })

  function onSubmit(data: PaymentGatewayValues) {
    setIsAddingCard(true)
    // Simulate API call
    setTimeout(() => {
      console.log("Payment gateway saved:", data)
      setIsAddingCard(false)
      form.reset()
    }, 1000)
  }

  function onSaveChanges() {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      console.log("All payment changes saved")
      setIsSaving(false)
    }, 1000)
  }

  return (
    <Card className="border rounded-lg shadow-sm">
      <CardHeader>
        <CardTitle>Payment Gateways</CardTitle>
        <CardDescription>Configure payment gateways for processing transactions securely.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="gateway"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Payment Gateway</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Stripe" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="stripe">Stripe</SelectItem>
                      <SelectItem value="paypal">PayPal</SelectItem>
                      <SelectItem value="square">Square</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <div>
              <h3 className="font-medium mb-2">Card Information</h3>
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="4242 5959 5959 5959" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <FormField
                  control={form.control}
                  name="expiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="MM/YY" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cvc"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="CVC" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="nameOnCard"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name On Card</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country or region</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="United States" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="10001" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-primary" disabled={isAddingCard}>
              {isAddingCard ? "Adding..." : "Add Card"}
            </Button>
          </form>
        </Form>
    
        <div className="mt-4 flex justify-end">
          <Button className="bg-primary" onClick={onSaveChanges} disabled={isSaving}>
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
