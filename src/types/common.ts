import type { ReactNode } from "react";

export interface BaseComponentProps {
    className?: string;

    children?: ReactNode;
}

export interface NavigationItem {
    label: string;

    href: string;
}

export interface Testimonial {
    id: number;

    name: string;

    city: string;

    rating: number;

    message: string;
}

export interface SelectOption {
    label: string;

    value: string;
}