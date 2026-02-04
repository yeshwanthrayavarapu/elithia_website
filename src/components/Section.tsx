/**
 * Section Component
 * Reusable section wrapper with consistent padding and max-width
 */

import { cn } from "@/lib/design-system-utils";
import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    size?: "sm" | "md" | "lg" | "xl";
    background?: "white" | "gray" | "dark" | "gradient" | "none";
    pattern?: boolean;
    id?: string;
}

const backgroundStyles = {
    white: "bg-white",
    gray: "bg-slate-50",
    dark: "bg-mobile-navy-900 text-white",
    gradient: "bg-gradient-to-b from-mobile-teal-50/50 to-white",
    none: "",
};

const sizeStyles = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-20 lg:py-24",
    lg: "py-20 md:py-24 lg:py-32",
    xl: "py-24 md:py-32 lg:py-40",
};

export default function Section({
    children,
    className,
    size = "md",
    background = "none",
    pattern = false,
    id,
}: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "relative overflow-hidden",
                sizeStyles[size],
                backgroundStyles[background],
                pattern && "grid-pattern",
                className
            )}
        >
            <div className="max-w-[1400px] mx-auto px-6">
                {children}
            </div>
        </section>
    );
}
