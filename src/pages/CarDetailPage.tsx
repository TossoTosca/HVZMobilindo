import { useParams } from "react-router-dom";

import PageLayout from "@/components/layout/PageLayout/PageLayout";
import Container from "@/components/layout/Container/Container";
import Section from "@/components/ui/section/Section";
import Heading from "@/components/ui/typography/Heading";
import Text from "@/components/ui/typography/Text";

import Gallery from "@/features/car-detail/Gallery";
import Specification from "@/features/car-detail/Specification";
import PriceCard from "@/features/car-detail/PriceCard";
import ContactSeller from "@/features/car-detail/ContactSeller";

import { loadInventory } from "@/lib/constants";

export default function CarDetailPage() {
    const { id } = useParams();

    const car = loadInventory().find(
        (item) => String(item.id) === id
    );

    if (!car) {
        return (
            <PageLayout>
                <Section>
                    <Container>
                        <Heading as="h1" variant="section">
                            Mobil tidak ditemukan
                        </Heading>

                        <Text muted className="mt-4">
                            Unit yang Anda cari tidak tersedia di inventory HVZMobilindo.
                        </Text>
                    </Container>
                </Section>
            </PageLayout>
        );
    }

    return (
        <PageLayout>
            <Section>
                <Container>
                    <div className="mb-10">
                        <Text muted>
                            {car.brand} / {car.model}
                        </Text>

                        <Heading as="h1" variant="section" className="mt-3">
                            {car.brand} {car.model}
                        </Heading>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
                        <div className="space-y-8">
                            <Gallery car={car} />
                            <Specification car={car} />
                        </div>

                        <div className="space-y-8">
                            <PriceCard car={car} />
                            <ContactSeller car={car} />
                        </div>
                    </div>
                </Container>
            </Section>
        </PageLayout>
    );
}
