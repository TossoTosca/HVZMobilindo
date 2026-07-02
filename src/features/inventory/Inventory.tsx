import { useState } from "react";

import Container from "@/components/layout/Container/Container";
import Section from "@/components/ui/section/Section";
import SectionTitle from "@/components/ui/section/SectionTitle";


import InventoryGrid from "./InventoryGrid";
import SearchBar from "./SearchBar";
import FilterSidebar from "./FilterSideBar";

export default function Inventory() {
    const [search, setSearch] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");

    return (
        <Section>
            <Container>
                <SectionTitle
                    title="Inventory Mobil"
                    subtitle="Temukan pilihan mobil bekas berkualitas yang tersedia di HVZMobilindo."
                />

                <div className="mb-8">
                    <SearchBar
                        value={search}
                        onChange={setSearch}
                    />
                </div>

                <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
                    <FilterSidebar
                        selectedBrand={selectedBrand}
                        onBrandChange={setSelectedBrand}
                    />

                    <InventoryGrid
                        search={search}
                        selectedBrand={selectedBrand}
                    />
                </div>
            </Container>
        </Section>
    );
}