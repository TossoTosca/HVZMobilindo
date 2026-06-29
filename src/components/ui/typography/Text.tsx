import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TextProps {
    children: ReactNode;
    muted?: boolean;
    className?: string;
}

export default function Text({
    children,
    muted,
    className,
}: TextProps) {
    return (
        <p
            className={cn(
                "leading-relaxed",
                muted && "text-muted-foreground",
                className
            )}
        >
            {children}
        </p>
    );
}