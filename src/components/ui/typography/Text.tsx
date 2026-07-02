import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
    muted?: boolean;
}

export default function Text({
    className,
    muted,
    ...props
}: TextProps) {
    return (
        <p
            className={cn(
                "leading-8",
                muted && "text-muted-foreground",
                className
            )}
            {...props}
        />
    );
}