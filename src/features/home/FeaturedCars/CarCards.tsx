import GlassCard from "@/components/ui/card/GlassCard";
import { buttonVariants } from "@/components/ui/button/button";
import Badge from "@/components/ui/badge/Badge";
import Heading from "@/components/ui/typography/Heading";
import Text from "@/components/ui/typography/Text";
import { Link } from "react-router-dom";

import type { Car } from "@/types/car";

interface CarCardProps {
    car: Car;
}

export default function CarCard({
    car,
}: CarCardProps) {
    return (
        <GlassCard className="overflow-hidden">

            <img
                src={car.image}
                alt={car.model}
                onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = "/favicon.svg";
                }}
                className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
            />

            <div className="space-y-4 p-6">

                <Badge variant="glass">
                    {car.brand}
                </Badge>

                <Heading variant="card">
                    {car.model}
                </Heading>

                <Text muted>
                    {car.year} • {car.transmission} • {car.fuel}
                </Text>

                <div className="flex items-center justify-between">

                    <h3 className="text-2xl font-bold text-primary">
                        Rp {car.price.toLocaleString("id-ID")}
                    </h3>

                    <Link
                        to={`/inventory/${car.id}`}
                        className={buttonVariants({
                            variant: "outlineGold",
                        })}
                    >
                        Detail
                    </Link>
                </div>

            </div>

        </GlassCard>
    );
}
