/**
 * Design System Utility Functions
 * Helper functions for consistent className composition and design token access
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with proper precedence
 * Uses clsx for conditional classes and tailwind-merge for deduplication
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Responsive container wrapper
 */
export function container(className?: string) {
    return cn("max-w-[1400px] mx-auto px-6", className);
}

/**
 * Section padding utilities
 */
export const sectionPadding = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-20 lg:py-24",
    lg: "py-20 md:py-24 lg:py-32",
    xl: "py-24 md:py-32 lg:py-40",
} as const;

/**
 * Get section padding classes
 */
export function getSection(size: keyof typeof sectionPadding = "md", className?: string) {
    return cn(sectionPadding[size], className);
}

/**
 * Focus ring utility for accessibility
 */
export function focusRing(className?: string) {
    return cn(
        "outline-none focus-visible:ring-2 focus-visible:ring-mobile-teal-500 focus-visible:ring-offset-2",
        className
    );
}

/**
 * Transition utilities
 */
export const transitions = {
    fast: "transition-all duration-150 ease-out",
    base: "transition-all duration-200 ease-out",
    slow: "transition-all duration-300 ease-out",
    colors: "transition-colors duration-200 ease-out",
    transform: "transition-transform duration-200 ease-out",
} as const;

/**
 * Get transition classes
 */
export function getTransition(type: keyof typeof transitions = "base", className?: string) {
    return cn(transitions[type], className);
}

/**
 * Card variants
 */
export const cardVariants = {
    default: "bg-white rounded-2xl border border-gray-100 shadow-sm",
    elevated: "bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow",
    bordered: "bg-white rounded-2xl border-2 border-gray-200",
    flat: "bg-white rounded-2xl",
    glass: "glass-card rounded-2xl",
    dark: "bg-mobile-navy-800 rounded-2xl border border-white/10",
} as const;

/**
 * Get card variant classes
 */
export function getCard(variant: keyof typeof cardVariants = "default", className?: string) {
    return cn(cardVariants[variant], className);
}

/**
 * Button size variants
 */
export const buttonSizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
} as const;

/**
 * Get button size classes
 */
export function getButtonSize(size: keyof typeof buttonSizes = "md") {
    return buttonSizes[size];
}

/**
 * Grid utilities
 */
export const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
} as const;

/**
 * Get responsive grid classes
 */
export function getGrid(cols: keyof typeof gridCols, gap: string = "gap-6", className?: string) {
    return cn("grid", gridCols[cols], gap, className);
}

/**
 * Gradient backgrounds
 */
export const gradients = {
    teal: "bg-gradient-to-br from-mobile-teal-500 to-mobile-teal-700",
    navy: "bg-gradient-to-br from-mobile-navy-800 to-mobile-navy-900",
    tealToGreen: "bg-gradient-to-r from-mobile-teal-600 to-green-500",
    subtle: "bg-gradient-to-b from-mobile-teal-50/50 to-white",
} as const;

/**
 * Get gradient background classes
 */
export function getGradient(type: keyof typeof gradients, className?: string) {
    return cn(gradients[type], className);
}

/**
 * Text size variants with responsive scaling
 */
export const textSizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl md:text-4xl",
    "4xl": "text-4xl md:text-5xl",
    "5xl": "text-5xl md:text-6xl lg:text-7xl",
} as const;

/**
 * Heading variants
 */
export const headings = {
    h1: "font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight",
    h2: "font-serif text-4xl md:text-5xl font-bold leading-tight",
    h3: "font-serif text-3xl md:text-4xl font-bold leading-snug",
    h4: "font-bold text-xl md:text-2xl leading-snug",
    h5: "font-bold text-lg md:text-xl leading-snug",
    h6: "font-bold text-base md:text-lg leading-snug",
} as const;

/**
 * Get heading classes
 */
export function getHeading(level: keyof typeof headings, className?: string) {
    return cn(headings[level], className);
}

/**
 * Hover scale effect
 */
export function hoverScale(scale: "sm" | "md" | "lg" = "md") {
    const scales = {
        sm: "hover:scale-[1.02]",
        md: "hover:scale-105",
        lg: "hover:scale-110",
    };
    return cn("transition-transform duration-200 ease-out", scales[scale]);
}

/**
 * Truncate text utilities
 */
export const truncate = {
    single: "truncate",
    double: "line-clamp-2",
    triple: "line-clamp-3",
} as const;
