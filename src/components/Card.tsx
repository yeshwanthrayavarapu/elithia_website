/**
 * Card Component
 * Flexible card component with consistent styling and variants
 */

import { cn } from "@/lib/design-system-utils";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    variant?: "default" | "elevated" | "bordered" | "flat" | "glass" | "dark";
    padding?: "none" | "sm" | "md" | "lg";
    hover?: boolean;
    onClick?: () => void;
}

const variantStyles = {
    default: "bg-white rounded-2xl border border-gray-100 shadow-sm",
    elevated: "bg-white rounded-2xl border border-gray-100 shadow-lg",
    bordered: "bg-white rounded-2xl border-2 border-gray-200",
    flat: "bg-white rounded-2xl",
    glass: "glass-card rounded-2xl",
    dark: "bg-mobile-navy-800 rounded-2xl border border-white/10",
};

const paddingStyles = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
};

export default function Card({
    children,
    className,
    variant = "default",
    padding = "md",
    hover = false,
    onClick,
}: CardProps) {
    return (
        <div
            className={cn(
                "relative",
                variantStyles[variant],
                paddingStyles[padding],
                hover && "transition-all duration-200 hover:shadow-xl hover:-translate-y-1",
                onClick && "cursor-pointer",
                className
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
