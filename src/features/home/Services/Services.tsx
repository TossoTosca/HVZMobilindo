import Section from "@/components/ui/section/Section";
import SectionTitle from "@/components/ui/section/SectionTitle";
import Container from "@/components/layout/Container/Container";

import { loadPublicContent, loadServices } from "@/lib/constants";

import ServiceCard from "./ServiceCard";

export default function Services() {
    const services = loadServices();
    const content = loadPublicContent();

    return (
        <Section id="services">

            <Container>

                <SectionTitle
                    title={content.servicesTitle}
                    subtitle={content.servicesSubtitle}
                />

                <div
                    className="
                        grid
                        gap-6
                        md:grid-cols-2
                        xl:grid-cols-4
                    "
                >
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                        />
                    ))}
                </div>

            </Container>

        </Section>
    );
}
