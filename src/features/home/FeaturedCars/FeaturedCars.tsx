import Container from "@/components/layout/Container/Container";

import Section from "@/components/ui/section/Section";
import SectionTitle from "@/components/ui/section/SectionTitle";

import CarGrid from "./CarGrid";

export default function FeaturedCars() {
    return (
        <Section id="cars">

            <Container>

                <SectionTitle
                    title="Mobil Pilihan"
                    subtitle="Beberapa kendaraan terbaik yang saat ini tersedia di HVZMobilindo."
                />

                <CarGrid />

            </Container>

        </Section>
    );
}