import {
    BadgeDollarSign,
    Car,
    CircleCheck,
    Handshake,
    MessageCircleMore,
    type LucideIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button/button";
import GlassCard from "@/components/ui/card/GlassCard";
import { Dialog } from "@/components/ui/dialog/Dialog";
import { Input } from "@/components/ui/input/Input";
import Heading from "@/components/ui/typography/Heading";
import Text from "@/components/ui/typography/Text";
import { addInquiry } from "@/lib/constants";

import type { Service } from "@/types/service";

const serviceIcons: Record<string, LucideIcon> = {
    BadgeDollarSign,
    Car,
    Handshake,
    MessageCircleMore,
};

interface ServiceCardProps {
    service: Service;
}

export default function ServiceCard({
    service,
}: ServiceCardProps) {
    const [open, setOpen] = useState(false);
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ name: "", phone: "", message: "" });
    const Icon = serviceIcons[service.icon] ?? Car;

    return (
        <GlassCard
            className="
                group
                h-full
                p-8
                transition-all
                duration-300
                hover:border-primary/30
            "
        >
            <div className="space-y-6">

                <div
                    className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-primary/10
                        text-primary
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:bg-primary
                        group-hover:text-black
                    "
                >
                    <Icon className="size-8" />
                </div>

                <Heading variant="card">
                    {service.title}
                </Heading>

                <Text muted>
                    {service.description}
                </Text>

                <Button variant="outlineGold" className="w-full" onClick={() => setOpen(true)}>
                    Pilih Layanan
                </Button>

            </div>

            <Dialog
                open={open}
                onOpenChange={setOpen}
                title={service.title}
                description="Tinggalkan kontak Anda. Tim HVZMobilindo akan segera menghubungi Anda."
            >
                {sent ? (
                    <div className="space-y-4 text-center">
                        <CircleCheck className="mx-auto h-12 w-12 text-green-400" />
                        <Text>Permintaan Anda sudah tersimpan. Terima kasih.</Text>
                        <Button variant="gold" onClick={() => setOpen(false)}>Tutup</Button>
                    </div>
                ) : (
                    <form
                        className="space-y-4"
                        onSubmit={(event) => {
                            event.preventDefault();
                            addInquiry({ action: service.title, ...form });
                            setSent(true);
                            setForm({ name: "", phone: "", message: "" });
                        }}
                    >
                        <Input
                            label="Nama"
                            value={form.name}
                            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                            required
                        />
                        <Input
                            label="Nomor WhatsApp"
                            type="tel"
                            value={form.phone}
                            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                            required
                        />
                        <Input
                            label="Pesan"
                            value={form.message}
                            onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                            helperText="Opsional"
                        />
                        <Button type="submit" variant="gold" className="w-full">Kirim Permintaan</Button>
                    </form>
                )}
            </Dialog>
        </GlassCard>
    );
}
