import brands from "@/data/brands.json";

interface FilterSidebarProps {
    selectedBrand: string;
    onBrandChange: (brand: string) => void;
}

export default function FilterSidebar({
    selectedBrand,
    onBrandChange,
}: FilterSidebarProps) {
    return (
        <aside className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-5 text-lg font-semibold">
                Filter Brand
            </h3>

            <div className="space-y-3">
                <button
                    onClick={() => onBrandChange("")}
                    className={`block w-full rounded-xl px-4 py-3 text-left text-sm transition ${
                        selectedBrand === ""
                            ? "bg-primary text-black"
                            : "bg-white/5 text-muted-foreground hover:text-primary"
                    }`}
                >
                    Semua Brand
                </button>

                {brands.map((brand) => (
                    <button
                        key={brand}
                        onClick={() => onBrandChange(brand)}
                        className={`block w-full rounded-xl px-4 py-3 text-left text-sm transition ${
                            selectedBrand === brand
                                ? "bg-primary text-black"
                                : "bg-white/5 text-muted-foreground hover:text-primary"
                        }`}
                    >
                        {brand}
                    </button>
                ))}
            </div>
        </aside>
    );
}