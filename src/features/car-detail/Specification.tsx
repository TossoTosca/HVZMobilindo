import GlassCard from "@/components/ui/card/GlassCard";
import Heading from "@/components/ui/typography/Heading";
import Text from "@/components/ui/typography/Text";

import type { Car } from "@/types/car";

interface SpecificationProps {
    car: Car;
}

export default function Specification({ car }: SpecificationProps) {
    const specifications = [
        ["Brand", car.brand],
        ["Model", car.model],
        ["Tahun", car.year],
        ["Transmisi", car.transmission],
        ["Bahan Bakar", car.fuel],
        ["Kilometer", `${car.mileage.toLocaleString("id-ID")} km`],
    ];

    return (
        <GlassCard className="p-6">
            <Heading variant="card">Spesifikasi Kendaraan</Heading>

            <div className="mt-6 space-y-4">
                {specifications.map(([label, value]) => (
                    <div
                        key={label}
                        className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                    >
                        <Text muted className="text-sm">
                            {label}
                        </Text>

                        <p className="text-sm font-medium">
                            {value}
                        </p>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
}