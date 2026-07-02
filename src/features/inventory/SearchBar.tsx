interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <input
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="Cari mobil berdasarkan brand atau model..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
        />
    );
}