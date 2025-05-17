export default function WhyChooseUsSection() {
  return (
    <section className="w-full bg-primary py-[70px] px-4 text-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us!</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <p className="text-5xl font-bold mb-2">25K+</p>
            <p className="text-xl">Auctions completed</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-5xl font-bold mb-2">$580M+</p>
            <p className="text-xl">Value of cars sold</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-5xl font-bold mb-2">83%+</p>
            <p className="text-xl">Sell-through rate</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-5xl font-bold mb-2">775K+</p>
            <p className="text-xl">Registered members</p>
          </div>
        </div>
      </div>
    </section>
  )
}
