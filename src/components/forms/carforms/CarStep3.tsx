/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";

import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useState, useEffect, useRef } from "react";
import { X, ImageIcon, Check, Plus } from "lucide-react";
import Image from "next/image";
import { FormValues } from "../FormSchema";

interface Step3Props {
  onPrev: () => void;
}

interface UploadedImage {
  file: File;
  preview: string;
}

export function CarStep3({ onPrev }: Step3Props) {
  const form = useFormContext<FormValues>();
  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const titleLocation = watch("titleLocation");
  const vehicleTitled = watch("vehicleTitled");
  const setReservePrice = watch("setReservePrice");
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (data: FormValues) => {
    // Create a new object that includes the form data and the actual image files
    const completeData = {
      ...data,
      photoFiles: uploadedImages.map((img) => img.file),
    };
    console.log("Form submitted with data:", completeData);
  };

  useEffect(() => {
    // Register the photos field with react-hook-form
    form.register("photos", {
      required: "Please upload at least 6 photos of your car",
    });
  }, [form]);

  // Clean up object URLs on unmount to avoid memory leaks
  useEffect(() => {
    return () => {
      uploadedImages.forEach((image) => {
        URL.revokeObjectURL(image.preview);
      });
    };
  }, [uploadedImages]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (files.length === 0) return;

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setUploadedImages((prev) => [...prev, ...newImages]);

    // Validate after upload
    if ([...uploadedImages, ...newImages].length >= 6) {
      setValue("photos", "valid", { shouldValidate: true });
    }

    // Reset the input value so the same file can be selected again if needed
    if (e.target) {
      e.target.value = "";
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...uploadedImages];
    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(newImages[index].preview);
    newImages.splice(index, 1);
    setUploadedImages(newImages);

    // Validate after removal
    if (newImages.length < 6) {
      setValue("photos", "", { shouldValidate: true });
    }
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Title Info</h2>

        <div className="mb-6">
          <FormField
            control={form.control}
            name="titleLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Where is the car titled?
                </FormLabel>
                <p className="text-sm text-gray-500 mb-2">
                  Note: the title or US title in Canadian registration for the
                  car to be considered.
                </p>
                <div className="flex gap-3 mt-2">
                  <Button
                    type="button"
                    variant="outline"
                    className={`px-6 py-2 ${
                      titleLocation === "United States"
                        ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() =>
                      setValue("titleLocation", "United States", {
                        shouldValidate: true,
                      })
                    }
                  >
                    United States
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className={`px-6 py-2 ${
                      titleLocation === "Canada"
                        ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() =>
                      setValue("titleLocation", "Canada", {
                        shouldValidate: true,
                      })
                    }
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
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  State
                </FormLabel>
                <Select
                  onValueChange={(value) =>
                    setValue("state", value, { shouldValidate: true })
                  }
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="AL">Alabama</SelectItem>
                    <SelectItem value="AK">Alaska</SelectItem>
                    <SelectItem value="AZ">Arizona</SelectItem>
                    <SelectItem value="CA">California</SelectItem>
                    <SelectItem value="CO">Colorado</SelectItem>
                    <SelectItem value="FL">Florida</SelectItem>
                    <SelectItem value="NY">New York</SelectItem>
                    <SelectItem value="TX">Texas</SelectItem>
                    {/* Add more states as needed */}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-6">
          <FormField
            control={form.control}
            name="vehicleTitled"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Is the vehicle titled in your name?
                </FormLabel>
                <div className="flex gap-3 mt-2">
                  <Button
                    type="button"
                    variant="outline"
                    className={`px-6 py-2 ${
                      vehicleTitled === "Yes"
                        ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() =>
                      setValue("vehicleTitled", "Yes", { shouldValidate: true })
                    }
                  >
                    Yes
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className={`px-6 py-2 ${
                      vehicleTitled === "No"
                        ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() =>
                      setValue("vehicleTitled", "No", { shouldValidate: true })
                    }
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
            name="titleStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  What is the title&apos;s status?
                </FormLabel>
                <Select
                  onValueChange={(value) =>
                    setValue("titleStatus", value, { shouldValidate: true })
                  }
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Choose" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="clean">Clean</SelectItem>
                    <SelectItem value="salvage">Salvage</SelectItem>
                    <SelectItem value="rebuilt">Rebuilt</SelectItem>
                    <SelectItem value="lemon">Lemon Law</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Reserve Price</h2>

        <div className="mb-6">
          <p className="mb-4 text-gray-600">
            The reserve price is a secret, minimum price required for your
            vehicle to sell. Cars with reserve prices may garner less interest
            than those without reserves.
          </p>
          <p className="mb-6 text-gray-600">
            Please note that bidding often brings the end result well above the
            reserve price. For more information, see Doug DeMuro&apos;s video
            explanation of reserves at.
          </p>

          <FormField
            control={form.control}
            name="setReservePrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Do you want to set a minimum price required for your vehicle
                  to sell?
                </FormLabel>
                <div className="flex gap-3 mt-2">
                  <Button
                    type="button"
                    variant="outline"
                    className={`px-6 py-2 ${
                      setReservePrice === "Yes"
                        ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() =>
                      setValue("setReservePrice", "Yes", {
                        shouldValidate: true,
                      })
                    }
                  >
                    Yes
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className={`px-6 py-2 ${
                      setReservePrice === "No"
                        ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() =>
                      setValue("setReservePrice", "No", {
                        shouldValidate: true,
                      })
                    }
                  >
                    No
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Photos</h2>

        <div className="mb-6">
          <FormField
            control={form.control}
            name="photos"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Car Photos <span className="text-red-500">*</span>
                </FormLabel>
                <p className="text-sm text-gray-500 mb-4">
                  Please upload at least 6 photos of the exterior and interior
                  of the car.
                </p>

                {/* Upload area */}
                <div
                  className={`border-2 border-dashed rounded-lg p-8 transition-colors cursor-pointer ${
                    errors.photos
                      ? "border-red-300 bg-red-50"
                      : uploadedImages.length >= 6
                      ? "border-green-300 bg-green-50"
                      : "border-gray-300 hover:bg-gray-50 hover:border-blue-300"
                  }`}
                  onClick={openFileDialog}
                >
                  <div className="flex flex-col items-center justify-center">
                    {uploadedImages.length >= 6 ? (
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-500 mb-2">
                        <Check className="h-6 w-6" />
                      </div>
                    ) : (
                      <ImageIcon
                        className={`h-12 w-12 ${
                          errors.photos ? "text-red-400" : "text-gray-400"
                        }`}
                      />
                    )}

                    <p
                      className={`mt-4 text-sm font-medium ${
                        errors.photos
                          ? "text-red-500"
                          : uploadedImages.length >= 6
                          ? "text-green-600"
                          : "text-gray-700"
                      }`}
                    >
                      {uploadedImages.length >= 6
                        ? "Minimum requirement met! Add more photos if you'd like."
                        : "Click to browse or drag and drop your photos here"}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Accepted formats: JPG, PNG, GIF • Max size: 25MB per file
                    </p>

                    <input
                      type="file"
                      ref={fileInputRef}
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />

                    <div className="mt-4 flex items-center">
                      <div
                        className={`h-2 w-32 bg-gray-200 rounded-full overflow-hidden ${
                          errors.photos ? "bg-red-200" : ""
                        }`}
                      >
                        <div
                          className={`h-full ${
                            uploadedImages.length >= 6
                              ? "bg-green-500"
                              : "bg-blue-500"
                          }`}
                          style={{
                            width: `${Math.min(
                              100,
                              (uploadedImages.length / 6) * 100
                            )}%`,
                          }}
                        />
                      </div>
                      <span className="ml-3 text-sm text-gray-500">
                        {uploadedImages.length}/6 required
                      </span>
                    </div>
                  </div>
                </div>

                {/* Error message */}
                {errors.photos && (
                  <p className="mt-2 text-sm text-red-500 flex items-center">
                    <X className="h-4 w-4 mr-1" />
                    Please upload at least 6 photos of your car
                  </p>
                )}

                {/* Image preview grid */}
                {uploadedImages.length > 0 && (
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-gray-700">
                        Uploaded Photos ({uploadedImages.length})
                      </h3>
                      {uploadedImages.length >= 6 ? (
                        <span className="text-green-500 text-sm flex items-center">
                          <Check className="h-4 w-4 mr-1" />
                          Minimum requirement met
                        </span>
                      ) : (
                        <span className="text-amber-500 text-sm flex items-center">
                          <Plus className="h-4 w-4 mr-1" />
                          {6 - uploadedImages.length} more required
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {uploadedImages.map((image, index) => (
                        <div key={index} className="relative group">
                          <div
                            className="aspect-square rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => setPreviewImage(image.preview)}
                          >
                            <Image
                              width={200}
                              height={250}
                              src={image.preview || "/placeholder.svg"}
                              alt={`Car photo ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <button
                            type="button"
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeImage(index);
                            }}
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}

                      {/* Add more photos button */}
                      <div
                        className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={openFileDialog}
                      >
                        <div className="flex flex-col items-center text-gray-500">
                          <Plus className="h-8 w-8" />
                          <span className="text-sm mt-2">Add More</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </FormItem>
            )}
          />

          <p className="mt-4 text-sm text-gray-500">
            To learn more about taking great car photos, check out our{" "}
            <a href="#" className="text-blue-500 hover:underline">
              photo guide
            </a>
          </p>
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-colors"
              onClick={() => setPreviewImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <Image
              width={200}
              height={250}
              src={previewImage || "/placeholder.svg"}
              alt="Preview"
              className="max-h-[90vh] max-w-full object-contain mx-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Referral</h2>

        <div className="mb-6">
          <FormField
            control={form.control}
            name="referral"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  How did you hear about us? If a user referred you please leave
                  their username.
                </FormLabel>
                <FormControl>
                  <Input placeholder="N/A" className="mt-2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Button
          type="button"
          onClick={onPrev}
          variant="outline"
          className="px-6 py-2 border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          Back
        </Button>
        <Button
          type="submit"
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white"
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting || uploadedImages.length < 6}
        >
          {isSubmitting ? "Submitting..." : "Submit Now"}
        </Button>
      </div>
    </div>
  );
}
