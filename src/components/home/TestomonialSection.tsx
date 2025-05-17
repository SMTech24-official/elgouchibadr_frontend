import { testimonials } from "@/types/FakeWebData"
import Image from "next/image"
import { AiFillStar } from "react-icons/ai"

const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                    priority={testimonial.id <= 3}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.email}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="flex items-center justify-center">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <AiFillStar key={index} className="text-yellow-500" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
