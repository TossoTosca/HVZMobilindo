import Badge from "@/components/ui/badge/Badge";
import { buttonVariants } from "@/components/ui/button/button";
import { loadPublicContent } from "@/lib/constants";
import { Link } from "react-router-dom";
import HeroStats from "./HeroStats";

export default function HeroContent() {
    const content = loadPublicContent();

    return (
        <div className="space-y-8">

            <Badge variant="glass">
                Trusted Used Car Marketplace
            </Badge>

            <div className="space-y-6">

                <h1 className="text-5xl font-bold leading-tight lg:text-7xl">
                    {content.heroTitle}
                </h1>

                <p className="max-w-xl text-lg leading-8 text-muted-foreground">

                    {content.heroSubtitle}

                </p>

            </div>

            <div className="flex flex-wrap gap-4">

                <Link to="/inventory" className={buttonVariants({ variant: "gold", size: "lg" })}>
                    Lihat Mobil
                </Link>

                <Link to="/sell" className={buttonVariants({ variant: "outlineGold", size: "lg" })}>
                    Jual Mobil Anda
                </Link>

            </div>

            <HeroStats />

        </div>
    );
}
