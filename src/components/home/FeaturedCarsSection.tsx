import { cars } from "@/data/cars";
import CarCard from "./CarCard";

export default function FeaturedCarsSection() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Featured Cars
          </h2>
          <p className="text-muted-foreground mt-2">
            Pilihan mobil terbaik yang tersedia saat ini
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}