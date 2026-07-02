import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement>;

export default function Card({
    className,
    ...props
}: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl border border-white/10 bg-card",
                className
            )}
            {...props}
        />
    );
}
