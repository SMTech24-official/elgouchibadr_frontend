/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { CarStep1 } from "@/components/forms/carforms/CarStep1";
import { CarStep2 } from "@/components/forms/carforms/CarStep2";
import { CarStep3 } from "@/components/forms/carforms/CarStep3";
import { formSchema,step1Schema, step2Schema, FormValues } from "@/components/forms/FormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1);
  const methods = useForm<FormValues>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      dealerType: "Dealer",
      additionalFees: "",
      name: "",
      contactNumber: "",
      vin: "",
      year: "",
      make: "",
      model: "",
      transmissionType: "",
      mileage: "",
      transmissionDetails: "",
      modified: "Completely stock",
      modificationDetails: "",
      mechanicalIssues: "No",
      mechanicalIssuesDetails: "",
      carLocation: "United States",
      zipCode: "",
      carLocationState: "United States",
      cityProvince: "",
      forSaleElsewhere: "No",
      forSaleElsewhereDetails: "",
      titleLocation: "United States",
      state: "",
      vehicleTitled: "No",
      titleStatus: "",
      setReservePrice: "No",
      referral: "",
    },
  });

  const totalSteps = 3;

  const nextStep = async () => {
    let isValid = false;

    if (currentStep === 1) {
      isValid = await methods.trigger(Object.keys(step1Schema.shape) as any);
    } else if (currentStep === 2) {
      isValid = await methods.trigger(Object.keys(step2Schema.shape) as any);
    }

    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted with data:", data);
  };
  return (
    <div>
      <section className="px-6 py-10  mx-auto container">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Tell us about your car
        </h2>
        <p className="text-gray-700 mb-4">
          Please give us some basics about yourself and the car you’d like to
          sell. We’ll also need details about the car’s title status as well as
          6 photos that highlight the car’s exterior and interior condition.
        </p>
        <p className="text-gray-700">
          We’ll respond to your application within a business day. Once
          accepted, we’ll ask for more details and at least 50 high-res photos,
          then work with you to build a custom and professional listing and get
          the auction live.
        </p>

        <div className="py-[50px]">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              {/* <StepIndicator
                currentStep={currentStep}
                totalSteps={totalSteps}
              /> */}

              {currentStep === 1 && <CarStep1 onNext={nextStep} />}
              {currentStep === 2 && (
                <CarStep2 onNext={nextStep} onPrev={prevStep} />
              )}
              {currentStep === 3 && <CarStep3 onPrev={prevStep} />}
            </form>
          </FormProvider>
        </div>
      </section>
    </div>
  );
}
