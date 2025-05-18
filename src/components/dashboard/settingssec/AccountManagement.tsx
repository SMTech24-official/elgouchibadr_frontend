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

const accountManagementSchema = z.object({
  userType: z.string().min(1, { message: "User type is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
})

type AccountManagementValues = z.infer<typeof accountManagementSchema>

export default function AccountManagement() {
  const [isSaving, setIsSaving] = useState(false)

  const form = useForm<AccountManagementValues>({
    resolver: zodResolver(accountManagementSchema),
    defaultValues: {
      userType: "",
      email: "",
    },
  })

  function onSubmit(data: AccountManagementValues) {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      console.log("Account management saved:", data)
      setIsSaving(false)
    }, 1000)
  }

  return (
    <Card className="border rounded-lg shadow-sm">
      <CardHeader>
        <CardTitle>Account Management</CardTitle>
        <CardDescription>Manage admin accounts and team members, including adding or removing users.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="userType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Add New Admin, Deactivate/Activate Users, View user activity logs" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="admin">Add New Admin</SelectItem>
                      <SelectItem value="deactivate">Deactivate Users</SelectItem>
                      <SelectItem value="activate">Activate Users</SelectItem>
                      <SelectItem value="view">View User Activity Logs</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input placeholder="user@example.com" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button className="bg-primary" type="submit" disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
