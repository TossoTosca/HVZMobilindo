import { useState } from "react";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button/button";
import GlassCard from "@/components/ui/card/GlassCard";
import { Dialog } from "@/components/ui/dialog/Dialog";
import { Input } from "@/components/ui/input/Input";
import Heading from "@/components/ui/typography/Heading";
import Text from "@/components/ui/typography/Text";

import company from "@/data/company.json";
import { addInquiry } from "@/lib/constants";
import type { Car } from "@/types/car";

export default function ContactSeller({ car }: { car: Car }) {
    const [open, setOpen] = useState(false);
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ name: "", phone: "", message: "" });

    return (
        <GlassCard className="p-6">
            <Heading variant="card">
                Hubungi Penjual
            </Heading>

            <Text muted className="mt-3">
                Konsultasikan unit pilihan Anda langsung dengan tim HVZMobilindo.
            </Text>

            <div className="mt-6 space-y-4 text-sm">
                <div>
                    <p className="text-muted-foreground">Showroom</p>
                    <p className="font-medium">{company.name}</p>
                </div>

                <div>
                    <p className="text-muted-foreground">Lokasi</p>
                    <p className="font-medium">{company.location}</p>
                </div>

                <div>
                    <p className="text-muted-foreground">Telepon</p>
                    <p className="font-medium">{company.phone}</p>
                </div>

                <div>
                    <p className="text-muted-foreground">Email</p>
                    <p className="font-medium">{company.email}</p>
                </div>
            </div>

            <Button variant="glass" className="mt-6 w-full" onClick={() => setOpen(true)}>
                Hubungi Penjual
            </Button>

            <Dialog open={open} onOpenChange={setOpen} title="Hubungi Penjual" description={`${car.brand} ${car.model}`}>
                {sent ? (
                    <div className="space-y-4 text-center">
                        <CircleCheck className="mx-auto h-12 w-12 text-green-400" />
                        <Text>Pesan Anda sudah tersimpan dan siap ditindaklanjuti.</Text>
                        <Button variant="gold" onClick={() => setOpen(false)}>Tutup</Button>
                    </div>
                ) : (
                    <form className="space-y-4" onSubmit={(event) => {
                        event.preventDefault();
                        addInquiry({ action: "Hubungi Penjual", car: `${car.brand} ${car.model}`, ...form });
                        setSent(true);
                    }}>
                        <Input label="Nama" value={form.name} onChange={(event) => setForm((value) => ({ ...value, name: event.target.value }))} required />
                        <Input label="Nomor WhatsApp" type="tel" value={form.phone} onChange={(event) => setForm((value) => ({ ...value, phone: event.target.value }))} required />
                        <Input label="Pesan" value={form.message} onChange={(event) => setForm((value) => ({ ...value, message: event.target.value }))} />
                        <Button type="submit" variant="gold" className="w-full">Kirim Pesan</Button>
                    </form>
                )}
            </Dialog>
        </GlassCard>
    );
}
