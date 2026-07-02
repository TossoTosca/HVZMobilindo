import PageLayout from "@/components/layout/PageLayout/PageLayout";
import About from "@/features/home/About/About";
import FeaturedCars from "@/features/home/FeaturedCars/FeaturedCars";

import Hero from "@/features/home/Hero/Hero";
import Services from "@/features/home/Services/Services";

export default function HomePage() {
    return (
        <PageLayout>
            <Hero />
            <Services />
            <About />
            <FeaturedCars />
        </PageLayout>
    );
}