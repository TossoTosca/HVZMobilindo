import Container from "@/components/layout/Container/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative overflow-hidden pt-24 lg:pt-32"
        >
            <Container>
                <div
                    className="
                    grid
                    gap-16
                    items-center
                    lg:grid-cols-2
                    min-h-[85vh]
                "
                >
                    <HeroContent />

                    <HeroImage />
                </div>
            </Container>
        </section>
    );
}