import cars from "@/data/cars.json";
import company from "@/data/company.json";
import services from "@/data/services.json";
import type { Car } from "@/types/car";
import type { Service } from "@/types/service";

export const STORAGE_KEYS = {
  inventory: "hvz_dashboard_inventory",
  publicContent: "hvz_public_text_content",
  services: "hvz_dashboard_services",
  sales: "hvz_sales_submissions",
  inquiries: "hvz_customer_inquiries",
} as const;

export interface PublicContent {
  heroTitle: string;
  heroSubtitle: string;
  servicesTitle: string;
  servicesSubtitle: string;
  aboutTitle: string;
  aboutDescription: string;
}

export interface SalesSubmission {
  id: number;
  createdAt: string;
  status: "Baru" | "Diproses" | "Selesai";
  name: string;
  phone: string;
  brand: string;
  model: string;
  year: string;
  expectedPrice: string;
  notes: string;
}

export interface CustomerInquiry {
  id: number;
  createdAt: string;
  status: "Baru" | "Ditindaklanjuti";
  action: string;
  name: string;
  phone: string;
  message: string;
  car?: string;
}

export const defaultPublicContent: PublicContent = {
  heroTitle: "Temukan Mobil Bekas Berkualitas dengan Harga Terbaik.",
  heroSubtitle:
    "Berawal dari kecintaan Muhammad Hafiz Fadilah terhadap dunia otomotif, HVZMobilindo hadir sebagai showroom mobil bekas yang mengutamakan kualitas, transparansi, serta pelayanan terbaik.",
  servicesTitle: "Layanan Kami",
  servicesSubtitle:
    "HVZMobilindo hadir tidak hanya sebagai showroom mobil bekas, tetapi juga sebagai partner terpercaya dalam setiap proses jual beli kendaraan.",
  aboutTitle: company.name,
  aboutDescription: company.description,
};

function readStorage<T>(key: string, fallback: T): T {
  const value = localStorage.getItem(key);
  if (!value) return fallback;

  try {
    return JSON.parse(value) as T;
  } catch {
    localStorage.removeItem(key);
    return fallback;
  }
}

export function loadInventory(): Car[] {
  return readStorage<Car[]>(STORAGE_KEYS.inventory, cars as Car[]);
}

export function loadPublicContent(): PublicContent {
  return {
    ...defaultPublicContent,
    ...readStorage<Partial<PublicContent>>(STORAGE_KEYS.publicContent, {}),
  };
}

export function loadServices(): Service[] {
  return readStorage<Service[]>(STORAGE_KEYS.services, services as Service[]);
}

export function loadSales(): SalesSubmission[] {
  return readStorage<SalesSubmission[]>(STORAGE_KEYS.sales, []);
}

export function loadInquiries(): CustomerInquiry[] {
  return readStorage<CustomerInquiry[]>(STORAGE_KEYS.inquiries, []);
}

export function addInquiry(
  inquiry: Omit<CustomerInquiry, "id" | "createdAt" | "status">
) {
  const current = loadInquiries();
  const next: CustomerInquiry = {
    ...inquiry,
    id: Date.now(),
    createdAt: new Date().toISOString(),
    status: "Baru",
  };
  localStorage.setItem(STORAGE_KEYS.inquiries, JSON.stringify([next, ...current]));
}
