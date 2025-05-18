"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

const platformPreferencesSchema = z.object({
  timeZone: z.string().min(1, { message: "Time zone is required" }),
  currency: z.string().min(1, { message: "Currency is required" }),
  emailNotifications: z.boolean().default(false),
})

type PlatformPreferencesValues = z.infer<typeof platformPreferencesSchema>

export default function PlatformPreferences() {
  const [isSaving, setIsSaving] = useState(false)

  const form = useForm<PlatformPreferencesValues>({
    resolver: zodResolver(platformPreferencesSchema),
    defaultValues: {
      timeZone: "",
      currency: "",
      emailNotifications: false,
    },
  })

  function onSubmit(data: PlatformPreferencesValues) {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      console.log("Platform preferences saved:", data)
      setIsSaving(false)
    }, 1000)
  }

  return (
    <Card className="border rounded-lg shadow-sm">
      <CardHeader>
        <CardTitle>Platform Preferences</CardTitle>
        <CardDescription>General Settings</CardDescription>
        <p className="text-sm text-muted-foreground">
          Set platform-wide preferences like language, timezone, and display settings.
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="timeZone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time Zone:</FormLabel>
                  <FormControl>
                    <Input placeholder="Set your platform's default timezone" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Currency:</FormLabel>
                  <FormControl>
                    <Input placeholder="USD, EUR, etc." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="space-y-2">
              <h3 className="font-medium">Notifications</h3>
              <p className="text-sm text-muted-foreground">
                Manage notification preferences for platform alerts, auction updates, and system notifications.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="font-medium">Email Notifications</div>
                <FormField
                  control={form.control}
                  name="emailNotifications"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs ${!field.value ? "text-red-500" : "text-muted-foreground"}`}>
                          OFF
                        </span>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <span className={`text-xs ${field.value ? "text-green-500" : "text-muted-foreground"}`}>
                          ON
                        </span>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>
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
