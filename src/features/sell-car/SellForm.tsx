import { useState } from "react";
import { CircleCheck } from "lucide-react";

import { Button } from "@/components/ui/button/button";
import GlassCard from "@/components/ui/card/GlassCard";
import Label from "@/components/ui/typography/Label";
import { loadSales, STORAGE_KEYS } from "@/lib/constants";

const emptyForm = {
    name: "",
    phone: "",
    brand: "",
    model: "",
    year: "",
    expectedPrice: "",
    notes: "",
};

export default function SellForm() {
    const [form, setForm] = useState(emptyForm);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const submission = {
            ...form,
            id: Date.now(),
            createdAt: new Date().toISOString(),
            status: "Baru" as const,
        };
        localStorage.setItem(
            STORAGE_KEYS.sales,
            JSON.stringify([submission, ...loadSales()])
        );
        setForm(emptyForm);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <GlassCard className="flex min-h-[420px] flex-col items-center justify-center p-8 text-center">
                <CircleCheck className="h-14 w-14 text-green-400" />
                <h2 className="mt-5 text-2xl font-semibold">Penawaran berhasil dikirim</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Data kendaraan tersimpan dan dapat ditindaklanjuti melalui dashboard admin.
                </p>
                <Button variant="outlineGold" className="mt-6" onClick={() => setSubmitted(false)}>
                    Kirim Penawaran Lain
                </Button>
            </GlassCard>
        );
    }

    return (
        <GlassCard className="p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-primary"
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="phone">Nomor WhatsApp</Label>
                    <input
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-primary"
                        required
                    />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <Label htmlFor="brand">Brand Mobil</Label>
                        <input
                            id="brand"
                            name="brand"
                            value={form.brand}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-primary"
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="model">Model Mobil</Label>
                        <input
                            id="model"
                            name="model"
                            value={form.model}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-primary"
                            required
                        />
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <Label htmlFor="year">Tahun</Label>
                        <input
                            id="year"
                            name="year"
                            value={form.year}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-primary"
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="expectedPrice">Harga Harapan</Label>
                        <input
                            id="expectedPrice"
                            name="expectedPrice"
                            value={form.expectedPrice}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-primary"
                            required
                        />
                    </div>
                </div>

                <div>
                    <Label htmlFor="notes">Catatan Kondisi Mobil</Label>
                    <textarea
                        id="notes"
                        name="notes"
                        value={form.notes}
                        onChange={handleChange}
                        rows={5}
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-primary"
                    />
                </div>

                <Button type="submit" variant="gold" className="w-full">
                    Kirim Penawaran
                </Button>
            </form>
        </GlassCard>
    );
}
