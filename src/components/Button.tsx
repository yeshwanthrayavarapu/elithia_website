/**
 * Button Component - Refactored
 * Enhanced button with multiple variants, sizes, states, and improved accessibility
 */

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/design-system-utils';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'vibrant';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    className?: string;
    onClick?: () => void;
    icon?: string;
    iconPosition?: 'left' | 'right';
    loading?: boolean;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    fullWidth?: boolean;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    className,
    onClick,
    icon,
    iconPosition = 'right',
    loading = false,
    disabled = false,
    type = 'button',
    fullWidth = false,
}: ButtonProps) {
    const baseStyles = cn(
        "inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mobile-teal-500 focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
        "active:scale-95 transform"
    );

    const variants = {
        primary: "bg-mobile-navy-900 text-white shadow-lg hover:bg-mobile-navy-800 hover:shadow-xl hover:-translate-y-1 hover:scale-105",
        secondary: "bg-mobile-teal-600 text-white shadow-md hover:bg-mobile-teal-700 hover:shadow-lg hover:-translate-y-1 hover:scale-105",
        vibrant: "bg-mobile-teal-600 text-white shadow-lg shadow-mobile-teal-600/30 hover:bg-mobile-teal-700 hover:shadow-xl hover:shadow-mobile-teal-700/40 hover:-translate-y-1 hover:scale-105",
        outline: "bg-white text-mobile-navy-900 border-2 border-gray-200 shadow-sm hover:bg-slate-50 hover:border-mobile-navy-900/20 hover:shadow-md hover:-translate-y-0.5",
        ghost: "bg-transparent text-mobile-navy-900 hover:bg-slate-100",
        destructive: "bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg hover:-translate-y-1",
    };

    const sizes = {
        sm: "h-8 px-3 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
    };

    const combinedClasses = cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
    );

    const iconElement = icon && (
        <span className={cn(
            "material-symbols-outlined",
            size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg'
        )}>
            {icon}
        </span>
    );

    const loadingSpinner = (
        <svg
            className={cn(
                "animate-spin",
                size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'
            )}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            />
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
        </svg>
    );

    const content = (
        <>
            {loading && loadingSpinner}
            {!loading && icon && iconPosition === 'left' && iconElement}
            <span>{children}</span>
            {!loading && icon && iconPosition === 'right' && iconElement}
        </>
    );

    if (href && !disabled) {
        return (
            <Link href={href} className={combinedClasses}>
                {content}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={combinedClasses}
        >
            {content}
        </button>
    );
}
