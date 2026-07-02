import Container from "@/components/layout/Container/Container";
import Badge from "@/components/ui/badge/Badge";
import GlassCard from "@/components/ui/card/GlassCard";
import Section from "@/components/ui/section/Section";
import Heading from "@/components/ui/typography/Heading";
import Text from "@/components/ui/typography/Text";

import SellForm from "./SellForm";

export default function SellCar() {
    return (
        <Section>
            <Container>
                <div className="grid gap-12 lg:grid-cols-[1fr_520px]">
                    <div className="space-y-8">
                        <Badge variant="glass">
                            Titip Jual Mobil
                        </Badge>

                        <div className="space-y-5">
                            <Heading as="h1" variant="section">
                                Jual mobil Anda dengan proses yang lebih aman dan transparan.
                            </Heading>

                            <Text muted>
                                HVZMobilindo membantu pemilik kendaraan menjual mobil
                                bekas dengan proses yang rapi, komunikasi jelas, dan
                                pendekatan profesional.
                            </Text>
                        </div>

                        <div className="grid gap-5 md:grid-cols-3">
                            <GlassCard className="p-5">
                                <h3 className="text-2xl font-bold text-primary">01</h3>
                                <Text muted className="mt-2 text-sm">
                                    Kirim data kendaraan.
                                </Text>
                            </GlassCard>

                            <GlassCard className="p-5">
                                <h3 className="text-2xl font-bold text-primary">02</h3>
                                <Text muted className="mt-2 text-sm">
                                    Tim kami melakukan pengecekan.
                                </Text>
                            </GlassCard>

                            <GlassCard className="p-5">
                                <h3 className="text-2xl font-bold text-primary">03</h3>
                                <Text muted className="mt-2 text-sm">
                                    Mobil dipasarkan kepada calon pembeli.
                                </Text>
                            </GlassCard>
                        </div>
                    </div>

                    <SellForm />
                </div>
            </Container>
        </Section>
    );
}