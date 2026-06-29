import Badge from "@/components/ui/badge/Badge";
import { Button } from "@/components/ui/button/button";
import HeroStats from "./HeroStats";

export default function HeroContent() {
    return (
        <div className="space-y-8">

            <Badge variant="glass">
                Trusted Used Car Marketplace
            </Badge>

            <div className="space-y-6">

                <h1 className="text-5xl font-bold leading-tight lg:text-7xl">

                    Temukan

                    <span className="text-primary">
                        {" "}
                        Mobil Bekas{" "}
                    </span>

                    Berkualitas
                    dengan Harga Terbaik.

                </h1>

                <p className="max-w-xl text-lg leading-8 text-muted-foreground">

                    Berawal dari kecintaan Muhammad Hafiz Fadilah terhadap
                    dunia otomotif, HVZMobilindo hadir sebagai showroom mobil
                    bekas yang mengutamakan kualitas, transparansi,
                    serta pelayanan terbaik.

                </p>

            </div>

            <div className="flex flex-wrap gap-4">

                <Button
                    variant="gold"
                    size="lg"
                >
                    Explore Cars
                </Button>

                <Button
                    variant="outlineGold"
                    size="lg"
                >
                    Sell Your Car
                </Button>

            </div>

            <HeroStats />

        </div>
    );
}