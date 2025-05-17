import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  return (
    <div className="container py-[80px]">
      <div>
        <h2 className="text-[32px] text-center font-semibold mb-4">
          Frequently Asked Questions (FAQ)
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Do I need to be on Airbnb?</AccordionTrigger>
            <AccordionContent className="text-txtsecondary">
              No
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I hide my address?</AccordionTrigger>
            <AccordionContent className="text-txtsecondary">
              Yes
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do I get paid?</AccordionTrigger>
            <AccordionContent className="text-txtsecondary">
              You handle your own bookings
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What happens after I submit my property?
            </AccordionTrigger>
            <AccordionContent className="text-txtsecondary">
              We review it and contact you within 24–48 hours.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              How do I get paid?
            </AccordionTrigger>
            <AccordionContent className="text-txtsecondary">
              You handle your own bookings.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Can I hide my address?
            </AccordionTrigger>
            <AccordionContent className="text-txtsecondary">
              Yes
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
