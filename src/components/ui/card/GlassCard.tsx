import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface GlassCardProps
    extends HTMLAttributes<HTMLDivElement> {}

export default function GlassCard({
    className,
    ...props
}: GlassCardProps) {
    return (
        <div
            className={cn(
                `
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl

                shadow-lg
                shadow-black/20

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-black/30
                `,
                className
            )}
            {...props}
        />
    );
}