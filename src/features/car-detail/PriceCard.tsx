import { useState } from "react";
import { CircleCheck } from "lucide-react";
import Badge from "@/components/ui/badge/Badge";
import { Button } from "@/components/ui/button/button";
import GlassCard from "@/components/ui/card/GlassCard";
import { Dialog } from "@/components/ui/dialog/Dialog";
import { Input } from "@/components/ui/input/Input";
import Heading from "@/components/ui/typography/Heading";
import Text from "@/components/ui/typography/Text";

import type { Car } from "@/types/car";
import { addInquiry } from "@/lib/constants";

interface PriceCardProps {
    car: Car;
}

export default function PriceCard({ car }: PriceCardProps) {
    const [action, setAction] = useState("");
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ name: "", phone: "", message: "" });

    const openDialog = (nextAction: string) => {
        setAction(nextAction);
        setSent(false);
    };

    return (
        <GlassCard className="p-6">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <Text muted className="text-sm">
                        Harga Unit
                    </Text>

                    <Heading variant="card" className="mt-2 text-primary">
                        Rp {car.price.toLocaleString("id-ID")}
                    </Heading>
                </div>

                <Badge variant="success">
                    Available
                </Badge>
            </div>

            <div className="mt-6 space-y-3">
                <Button variant="gold" className="w-full" onClick={() => openDialog("Beli Mobil")}>
                    Beli Mobil
                </Button>

                <Button variant="outlineGold" className="w-full" onClick={() => openDialog("Jadwalkan Survey")}>
                    Jadwalkan Survey
                </Button>
            </div>

            <Dialog open={Boolean(action)} onOpenChange={(open) => !open && setAction("")} title={action} description={`${car.brand} ${car.model}`}>
                {sent ? (
                    <div className="space-y-4 text-center">
                        <CircleCheck className="mx-auto h-12 w-12 text-green-400" />
                        <Text>Permintaan Anda sudah tersimpan. Tim kami akan menghubungi Anda.</Text>
                        <Button variant="gold" onClick={() => setAction("")}>Tutup</Button>
                    </div>
                ) : (
                    <form className="space-y-4" onSubmit={(event) => {
                        event.preventDefault();
                        addInquiry({ action, car: `${car.brand} ${car.model}`, ...form });
                        setSent(true);
                        setForm({ name: "", phone: "", message: "" });
                    }}>
                        <Input label="Nama" value={form.name} onChange={(event) => setForm((value) => ({ ...value, name: event.target.value }))} required />
                        <Input label="Nomor WhatsApp" type="tel" value={form.phone} onChange={(event) => setForm((value) => ({ ...value, phone: event.target.value }))} required />
                        <Input label={action === "Jadwalkan Survey" ? "Waktu yang diinginkan" : "Pesan"} value={form.message} onChange={(event) => setForm((value) => ({ ...value, message: event.target.value }))} required />
                        <Button type="submit" variant="gold" className="w-full">Kirim Permintaan</Button>
                    </form>
                )}
            </Dialog>
        </GlassCard>
    );
}
