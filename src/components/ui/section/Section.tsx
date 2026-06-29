import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {}

export default function Section({
    className,
    ...props
}: SectionProps) {
    return (
        <section
            className={cn(
                "relative py-24",
                className
            )}
            {...props}
        />
    );
}