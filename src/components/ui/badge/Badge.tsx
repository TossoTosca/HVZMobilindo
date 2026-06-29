import type { HTMLAttributes } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-black",

                outline:
                    "border border-primary text-primary",

                glass:
                    "border border-white/10 bg-white/5 backdrop-blur",

                success:
                    "bg-green-500/15 text-green-400",

                warning:
                    "bg-yellow-500/15 text-yellow-400",

                danger:
                    "bg-red-500/15 text-red-400",
            },
        },

        defaultVariants: {
            variant: "default",
        },
    }
);

interface BadgeProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

export default function Badge({
    className,
    variant,
    ...props
}: BadgeProps) {
    return (
        <div
            className={cn(
                badgeVariants({ variant }),
                className
            )}
            {...props}
        />
    );
}