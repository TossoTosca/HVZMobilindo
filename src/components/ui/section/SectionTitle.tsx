interface SectionTitleProps {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    align?: "left" | "center";
}

export default function SectionTitle({
    eyebrow,
    title,
    subtitle,
    align = "center",
}: SectionTitleProps) {
    return (
        <div
            className={`mb-16 ${
                align === "center" ? "text-center" : "text-left"
            }`}
        >
            {eyebrow && (
                <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-3">
                    {eyebrow}
                </p>
            )}

            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                {title}
            </h2>

            {subtitle && (
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}