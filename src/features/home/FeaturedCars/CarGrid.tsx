import { loadInventory } from "@/lib/constants";

import CarCard from "./CarCards";

export default function CarGrid() {
    const cars = loadInventory();
    const featuredCars = cars.filter(
        (car) => car.featured
    );

    return (
        <div
            className="
                grid
                gap-8
                md:grid-cols-2
                xl:grid-cols-3
            "
        >
            {featuredCars.map((car) => (
                <CarCard
                    key={car.id}
                    car={car}
                />
            ))}
        </div>
    );
}
