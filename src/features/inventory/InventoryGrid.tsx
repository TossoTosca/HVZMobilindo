import CarCard from "../home/FeaturedCars/CarCards";
import type { Car } from "@/types/car";
import { loadInventory } from "@/lib/constants";

interface InventoryGridProps {
    search: string;
    selectedBrand: string;
}

export default function InventoryGrid({
    search,
    selectedBrand,
}: InventoryGridProps) {
    const filteredCars = (loadInventory() as Car[]).filter((car) => {
        const keyword = search.toLowerCase();

        const matchSearch =
            car.brand.toLowerCase().includes(keyword) ||
            car.model.toLowerCase().includes(keyword);

        const matchBrand =
            selectedBrand === "" || car.brand === selectedBrand;

        return matchSearch && matchBrand;
    });

    if (filteredCars.length === 0) {
        return (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-muted-foreground">
                Mobil tidak ditemukan.
            </div>
        );
    }

    return (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
            ))}
        </div>
    );
}
