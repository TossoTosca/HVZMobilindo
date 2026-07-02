import Container from "@/components/layout/Container/Container";
import GlassCard from "@/components/ui/card/GlassCard";
import Badge from "@/components/ui/badge/Badge";
import Section from "@/components/ui/section/Section";
import Heading from "@/components/ui/typography/Heading";
import Text from "@/components/ui/typography/Text";

import company from "@/data/company.json";
import { loadPublicContent } from "@/lib/constants";

export default function About() {
    const content = loadPublicContent();

    return (
        <Section id="about">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-2">

                    <div className="space-y-6">
                        <Badge variant="glass">
                            Tentang Kami
                        </Badge>

                        <Heading variant="section">
                            {content.aboutTitle}
                        </Heading>

                        <Text muted>
                            {content.aboutDescription}
                        </Text>

                        <Text>
                            Berawal dari kecintaan <strong>{company.owner}</strong> terhadap dunia otomotif,
                            HVZMobilindo tumbuh menjadi showroom mobil bekas yang
                            mengutamakan kejujuran, transparansi, dan kepuasan pelanggan.
                        </Text>
                    </div>

                    <GlassCard className="p-8">
                        <div className="grid grid-cols-2 gap-6">

                            <div>
                                <h3 className="text-4xl font-bold text-primary">
                                    {company.carsSold}+
                                </h3>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    Unit Terjual
                                </p>
                            </div>

                            <div>
                                <h3 className="text-4xl font-bold text-primary">
                                    {company.happyCustomers}+
                                </h3>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    Pelanggan Puas
                                </p>
                            </div>

                            <div>
                                <h3 className="text-4xl font-bold text-primary">
                                    {company.experience}
                                </h3>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    Pengalaman
                                </p>
                            </div>

                            <div>
                                <h3 className="text-4xl font-bold text-primary">
                                    {company.location}
                                </h3>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    Lokasi
                                </p>
                            </div>

                        </div>
                    </GlassCard>

                </div>
            </Container>
        </Section>
    );
}
