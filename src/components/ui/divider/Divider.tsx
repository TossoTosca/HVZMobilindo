import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface DividerProps extends HTMLAttributes<HTMLHRElement> {}

export default function Divider({
    className,
    ...props
}: DividerProps) {
    return (
        <hr
            className={cn(
                "border-0 border-t border-white/10",
                className
            )}
            {...props}
        />
    );
}