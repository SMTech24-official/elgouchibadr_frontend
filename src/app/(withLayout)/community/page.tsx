import ProductCard from "@/components/card/ProductCard";
import { filterCarData } from "@/types/FakeWebData";

export default function Page() {
  return (
    <div>
      <div className="container">
        <div className="grid lg:grid-cols-4 grid-cols-1">
          <div className="col-span-3">

          </div>
          <div>
            <div className="grid grid-cols-1  gap-6 py-4">
              {filterCarData.slice(0, 3).map((car) => (
                <ProductCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
