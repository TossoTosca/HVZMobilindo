import { useMemo, useState, type FormEvent } from "react";
import { LogOut, Pencil, Plus, RotateCcw, Save, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import cars from "@/data/cars.json";
import servicesData from "@/data/services.json";
import Container from "@/components/layout/Container/Container";
import Badge from "@/components/ui/badge/Badge";
import { Button } from "@/components/ui/button/button";
import GlassCard from "@/components/ui/card/GlassCard";
import { Input } from "@/components/ui/input/Input";
import { Modal } from "@/components/ui/modal/Modal";
import Section from "@/components/ui/section/Section";
import Heading from "@/components/ui/typography/Heading";
import Text from "@/components/ui/typography/Text";
import {
  defaultPublicContent,
  loadInquiries,
  loadInventory,
  loadPublicContent,
  loadSales,
  loadServices,
  STORAGE_KEYS,
  type CustomerInquiry,
  type PublicContent,
  type SalesSubmission,
} from "@/lib/constants";
import { getAdminSession, logoutAdmin } from "@/lib/auth";
import type { Car } from "@/types/car";
import type { Service } from "@/types/service";

type DashboardTab = "overview" | "inventory" | "content" | "leads";
type CarDraft = Omit<Car, "id">;
type DeleteTarget =
  | { kind: "car"; id: number }
  | { kind: "service"; id: number }
  | { kind: "sale"; id: number }
  | { kind: "inquiry"; id: number }
  | null;

const emptyCar: CarDraft = {
  brand: "",
  model: "",
  year: new Date().getFullYear(),
  transmission: "Automatic",
  fuel: "Bensin",
  mileage: 0,
  price: 0,
  image: "/images/cars/placeholder.jpg",
  featured: false,
};

const tabs: { value: DashboardTab; label: string }[] = [
  { value: "overview", label: "Ringkasan" },
  { value: "inventory", label: "Inventory" },
  { value: "content", label: "Konten Publik" },
  { value: "leads", label: "Sales & Leads" },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const session = getAdminSession();
  const [tab, setTab] = useState<DashboardTab>("overview");
  const [inventory, setInventory] = useState<Car[]>(loadInventory);
  const [services, setServices] = useState<Service[]>(loadServices);
  const [publicContent, setPublicContent] =
    useState<PublicContent>(loadPublicContent);
  const [sales, setSales] = useState<SalesSubmission[]>(loadSales);
  const [inquiries, setInquiries] = useState<CustomerInquiry[]>(loadInquiries);
  const [carDraft, setCarDraft] = useState<CarDraft>(emptyCar);
  const [editingCarId, setEditingCarId] = useState<number | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<DeleteTarget>(null);
  const [notice, setNotice] = useState("");

  const totalValue = useMemo(
    () => inventory.reduce((sum, car) => sum + Number(car.price), 0),
    [inventory]
  );
  const newLeadCount =
    sales.filter((item) => item.status === "Baru").length +
    inquiries.filter((item) => item.status === "Baru").length;

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 3000);
  };

  const saveInventory = (next: Car[]) => {
    setInventory(next);
    localStorage.setItem(STORAGE_KEYS.inventory, JSON.stringify(next));
  };

  const handleCarSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalized: CarDraft = {
      ...carDraft,
      brand: carDraft.brand.trim(),
      model: carDraft.model.trim(),
      year: Number(carDraft.year),
      mileage: Number(carDraft.mileage),
      price: Number(carDraft.price),
      image: carDraft.image.trim() || "/favicon.svg",
    };

    if (editingCarId !== null) {
      saveInventory(
        inventory.map((car) =>
          car.id === editingCarId ? { ...normalized, id: editingCarId } : car
        )
      );
      showNotice("Data mobil berhasil diperbarui.");
    } else {
      saveInventory([{ ...normalized, id: Date.now() }, ...inventory]);
      showNotice("Mobil baru berhasil ditambahkan.");
    }

    setCarDraft(emptyCar);
    setEditingCarId(null);
  };

  const startEditCar = (car: Car) => {
    const { id, ...draft } = car;
    setEditingCarId(id);
    setCarDraft(draft);
    setTab("inventory");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const saveServices = () => {
    localStorage.setItem(STORAGE_KEYS.services, JSON.stringify(services));
    showNotice("Daftar layanan berhasil disimpan.");
  };

  const savePublicContent = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem(
      STORAGE_KEYS.publicContent,
      JSON.stringify(publicContent)
    );
    showNotice("Konten halaman publik berhasil disimpan.");
  };

  const updateSales = (next: SalesSubmission[]) => {
    setSales(next);
    localStorage.setItem(STORAGE_KEYS.sales, JSON.stringify(next));
  };

  const updateInquiries = (next: CustomerInquiry[]) => {
    setInquiries(next);
    localStorage.setItem(STORAGE_KEYS.inquiries, JSON.stringify(next));
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;

    if (deleteTarget.kind === "car") {
      saveInventory(inventory.filter((item) => item.id !== deleteTarget.id));
    } else if (deleteTarget.kind === "service") {
      const next = services.filter((item) => item.id !== deleteTarget.id);
      setServices(next);
      localStorage.setItem(STORAGE_KEYS.services, JSON.stringify(next));
    } else if (deleteTarget.kind === "sale") {
      updateSales(sales.filter((item) => item.id !== deleteTarget.id));
    } else {
      updateInquiries(inquiries.filter((item) => item.id !== deleteTarget.id));
    }

    setDeleteTarget(null);
    showNotice("Data berhasil dihapus.");
  };

  const resetMockData = () => {
    localStorage.removeItem(STORAGE_KEYS.inventory);
    localStorage.removeItem(STORAGE_KEYS.services);
    localStorage.removeItem(STORAGE_KEYS.publicContent);
    setInventory(cars as Car[]);
    setServices(servicesData as Service[]);
    setPublicContent(defaultPublicContent);
    showNotice("Data CMS dikembalikan ke JSON awal.");
  };

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin/login", { replace: true });
  };

  return (
    <Section>
      <Container>
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div className="space-y-3">
            <Badge variant="glass">Admin Dashboard</Badge>
            <Heading className="text-4xl">CMS HVZMobilindo</Heading>
            <Text muted>
              Halo, {session?.name ?? "Admin"}. Semua perubahan tersimpan lokal
              untuk kebutuhan mock frontend.
            </Text>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="glass" onClick={resetMockData}>
              <RotateCcw /> Reset CMS
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              <LogOut /> Keluar
            </Button>
          </div>
        </div>

        {notice && (
          <div role="status" className="mb-6 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-300">
            {notice}
          </div>
        )}

        <div className="mb-8 flex gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] p-2">
          {tabs.map((item) => (
            <Button
              key={item.value}
              variant={tab === item.value ? "gold" : "ghost"}
              onClick={() => setTab(item.value)}
              className="shrink-0"
            >
              {item.label}
            </Button>
          ))}
        </div>

        {tab === "overview" && (
          <div className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard label="Total Inventory" value={`${inventory.length} unit`} />
              <StatCard label="Featured Cars" value={`${inventory.filter((car) => car.featured).length} unit`} />
              <StatCard label="Nilai Inventory" value={`Rp ${totalValue.toLocaleString("id-ID")}`} />
              <StatCard label="Lead Baru" value={`${newLeadCount} lead`} />
            </div>
            <GlassCard className="p-6">
              <Heading className="text-2xl">Aktivitas Mock</Heading>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <Summary label="Penawaran Jual" value={sales.length} />
                <Summary label="Permintaan Layanan" value={inquiries.length} />
                <Summary label="Layanan Aktif" value={services.length} />
              </div>
            </GlassCard>
          </div>
        )}

        {tab === "inventory" && (
          <div className="grid gap-8 xl:grid-cols-[380px_1fr]">
            <GlassCard className="h-fit p-6">
              <Heading className="text-2xl">{editingCarId ? "Edit Mobil" : "Tambah Mobil"}</Heading>
              <form className="mt-6 space-y-4" onSubmit={handleCarSubmit}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                  <Input label="Brand" value={carDraft.brand} onChange={(event) => setCarDraft((value) => ({ ...value, brand: event.target.value }))} required />
                  <Input label="Model" value={carDraft.model} onChange={(event) => setCarDraft((value) => ({ ...value, model: event.target.value }))} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Tahun" type="number" min="1980" value={carDraft.year} onChange={(event) => setCarDraft((value) => ({ ...value, year: Number(event.target.value) }))} required />
                  <Input label="Kilometer" type="number" min="0" value={carDraft.mileage} onChange={(event) => setCarDraft((value) => ({ ...value, mileage: Number(event.target.value) }))} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Transmisi" value={carDraft.transmission} onChange={(event) => setCarDraft((value) => ({ ...value, transmission: event.target.value }))} required />
                  <Input label="Bahan Bakar" value={carDraft.fuel} onChange={(event) => setCarDraft((value) => ({ ...value, fuel: event.target.value }))} required />
                </div>
                <Input label="Harga" type="number" min="0" value={carDraft.price} onChange={(event) => setCarDraft((value) => ({ ...value, price: Number(event.target.value) }))} required />
                <Input label="Path Gambar" value={carDraft.image} onChange={(event) => setCarDraft((value) => ({ ...value, image: event.target.value }))} />
                <label className="flex items-center gap-3 text-sm text-muted-foreground">
                  <input type="checkbox" checked={carDraft.featured} onChange={(event) => setCarDraft((value) => ({ ...value, featured: event.target.checked }))} />
                  Tampilkan sebagai mobil pilihan
                </label>
                <div className="flex gap-3">
                  <Button type="submit" variant="gold" className="flex-1"><Save /> {editingCarId ? "Simpan" : "Tambah"}</Button>
                  {editingCarId && <Button type="button" variant="ghost" onClick={() => { setEditingCarId(null); setCarDraft(emptyCar); }}>Batal</Button>}
                </div>
              </form>
            </GlassCard>

            <GlassCard className="overflow-hidden p-6">
              <Heading className="text-2xl">Daftar Inventory</Heading>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[720px] text-sm">
                  <thead><tr className="border-b border-white/10 text-left text-muted-foreground"><th className="py-3">Mobil</th><th>Tahun</th><th>Harga</th><th>Status</th><th>Aksi</th></tr></thead>
                  <tbody>
                    {inventory.map((car) => (
                      <tr key={car.id} className="border-b border-white/10 last:border-0">
                        <td className="py-4 font-medium">{car.brand} {car.model}</td>
                        <td>{car.year}</td>
                        <td className="text-primary">Rp {car.price.toLocaleString("id-ID")}</td>
                        <td><Badge variant={car.featured ? "default" : "glass"}>{car.featured ? "Featured" : "Available"}</Badge></td>
                        <td><div className="flex gap-2"><Button size="icon" variant="glass" aria-label="Edit mobil" onClick={() => startEditCar(car)}><Pencil /></Button><Button size="icon" variant="destructive" aria-label="Hapus mobil" onClick={() => setDeleteTarget({ kind: "car", id: car.id })}><Trash2 /></Button></div></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </div>
        )}

        {tab === "content" && (
          <div className="space-y-8">
            <GlassCard className="p-6">
              <Heading className="text-2xl">Hero & About</Heading>
              <form className="mt-6 space-y-4" onSubmit={savePublicContent}>
                <Input label="Judul Hero" value={publicContent.heroTitle} onChange={(event) => setPublicContent((value) => ({ ...value, heroTitle: event.target.value }))} required />
                <Input label="Deskripsi Hero" value={publicContent.heroSubtitle} onChange={(event) => setPublicContent((value) => ({ ...value, heroSubtitle: event.target.value }))} required />
                <div className="grid gap-4 md:grid-cols-2">
                  <Input label="Judul Services" value={publicContent.servicesTitle} onChange={(event) => setPublicContent((value) => ({ ...value, servicesTitle: event.target.value }))} required />
                  <Input label="Deskripsi Services" value={publicContent.servicesSubtitle} onChange={(event) => setPublicContent((value) => ({ ...value, servicesSubtitle: event.target.value }))} required />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input label="Judul About" value={publicContent.aboutTitle} onChange={(event) => setPublicContent((value) => ({ ...value, aboutTitle: event.target.value }))} required />
                  <Input label="Deskripsi About" value={publicContent.aboutDescription} onChange={(event) => setPublicContent((value) => ({ ...value, aboutDescription: event.target.value }))} required />
                </div>
                <Button type="submit" variant="gold"><Save /> Simpan Konten Publik</Button>
              </form>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div><Heading className="text-2xl">Kelola Services</Heading><Text muted className="mt-2 text-sm">Tambah, ubah, dan hapus layanan pada landing page.</Text></div>
                <Button variant="outlineGold" onClick={() => setServices((value) => [...value, { id: Date.now(), title: "Layanan Baru", description: "Deskripsi layanan", icon: "Car" }])}><Plus /> Tambah Layanan</Button>
              </div>
              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                {services.map((service) => (
                  <div key={service.id} className="space-y-4 rounded-2xl border border-white/10 p-5">
                    <Input label="Nama Layanan" value={service.title} onChange={(event) => setServices((list) => list.map((item) => item.id === service.id ? { ...item, title: event.target.value } : item))} />
                    <Input label="Deskripsi" value={service.description} onChange={(event) => setServices((list) => list.map((item) => item.id === service.id ? { ...item, description: event.target.value } : item))} />
                    <div className="flex gap-3"><Input label="Icon Lucide" value={service.icon} onChange={(event) => setServices((list) => list.map((item) => item.id === service.id ? { ...item, icon: event.target.value } : item))} /><Button size="icon" variant="destructive" className="mt-7" aria-label="Hapus layanan" onClick={() => setDeleteTarget({ kind: "service", id: service.id })}><Trash2 /></Button></div>
                  </div>
                ))}
              </div>
              <Button variant="gold" className="mt-6" onClick={saveServices}><Save /> Simpan Services</Button>
            </GlassCard>
          </div>
        )}

        {tab === "leads" && (
          <div className="space-y-8">
            <LeadTable
              title="Sales Management"
              empty="Belum ada penawaran jual mobil."
              rows={sales.map((item) => ({ id: item.id, primary: item.name, secondary: `${item.brand} ${item.model} (${item.year})`, contact: item.phone, status: item.status, date: item.createdAt }))}
              onStatus={(id) => updateSales(sales.map((item) => item.id === id ? { ...item, status: item.status === "Baru" ? "Diproses" : "Selesai" } : item))}
              onDelete={(id) => setDeleteTarget({ kind: "sale", id })}
            />
            <LeadTable
              title="Permintaan Layanan"
              empty="Belum ada permintaan layanan."
              rows={inquiries.map((item) => ({ id: item.id, primary: item.name, secondary: `${item.action}${item.car ? ` • ${item.car}` : ""}`, contact: item.phone, status: item.status, date: item.createdAt }))}
              onStatus={(id) => updateInquiries(inquiries.map((item) => item.id === id ? { ...item, status: "Ditindaklanjuti" } : item))}
              onDelete={(id) => setDeleteTarget({ kind: "inquiry", id })}
            />
          </div>
        )}
      </Container>

      <Modal open={Boolean(deleteTarget)} onOpenChange={(open) => !open && setDeleteTarget(null)} title="Hapus data?" description="Tindakan ini menghapus data dari penyimpanan mock browser." confirmText="Hapus" confirmVariant="destructive" onConfirm={confirmDelete} />
    </Section>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return <GlassCard className="p-6"><Text muted className="text-sm">{label}</Text><p className="mt-3 text-2xl font-bold text-primary">{value}</p></GlassCard>;
}

function Summary({ label, value }: { label: string; value: number }) {
  return <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5"><p className="text-3xl font-bold text-primary">{value}</p><Text muted className="mt-2 text-sm">{label}</Text></div>;
}

interface LeadRow { id: number; primary: string; secondary: string; contact: string; status: string; date: string }

function LeadTable({ title, empty, rows, onStatus, onDelete }: { title: string; empty: string; rows: LeadRow[]; onStatus: (id: number) => void; onDelete: (id: number) => void }) {
  return (
    <GlassCard className="p-6">
      <Heading className="text-2xl">{title}</Heading>
      {rows.length === 0 ? <Text muted className="mt-5">{empty}</Text> : (
        <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[680px] text-sm"><thead><tr className="border-b border-white/10 text-left text-muted-foreground"><th className="py-3">Nama</th><th>Kebutuhan</th><th>Kontak</th><th>Tanggal</th><th>Status</th><th>Aksi</th></tr></thead><tbody>
          {rows.map((row) => <tr key={row.id} className="border-b border-white/10 last:border-0"><td className="py-4 font-medium">{row.primary}</td><td>{row.secondary}</td><td>{row.contact}</td><td>{new Date(row.date).toLocaleDateString("id-ID")}</td><td><Badge variant={row.status === "Baru" ? "warning" : "success"}>{row.status}</Badge></td><td><div className="flex gap-2"><Button variant="glass" onClick={() => onStatus(row.id)}>Proses</Button><Button size="icon" variant="destructive" aria-label="Hapus lead" onClick={() => onDelete(row.id)}><Trash2 /></Button></div></td></tr>)}
        </tbody></table></div>
      )}
    </GlassCard>
  );
}
