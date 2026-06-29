import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
    children: ReactNode;
    as?: ElementType;
    variant?: "hero" | "section" | "card";
    className?: string;
}

export default function Heading({
    children,
    as: Component = "h2",
    variant = "section",
    className,
}: HeadingProps) {

    const variants = {
        hero: "text-5xl lg:text-7xl font-semibold tracking-tight leading-tight",
        section: "text-4xl lg:text-5xl font-semibold tracking-tight",
        card: "text-xl font-semibold",
    };

    return (
        <Component
            className={cn(
                variants[variant],
                className
            )}
        >
            {children}
        </Component>
    );
}