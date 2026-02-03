
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    href?: string;
    className?: string;
    onClick?: () => void;
    icon?: string;
}

export default function Button({ children, variant = 'primary', href, className = '', onClick, icon }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-bold rounded transition-all duration-200 active:scale-95";

    const variants = {
        primary: "bg-mobile-navy-900 text-white shadow-lg hover:bg-mobile-navy-800 hover:shadow-xl hover:-translate-y-0.5",
        secondary: "bg-mobile-teal-600 text-white shadow-md hover:bg-mobile-teal-700 hover:shadow-lg hover:-translate-y-0.5",
        outline: "bg-white text-mobile-navy-900 border border-gray-200 shadow-sm hover:bg-slate-50 hover:border-mobile-navy-900/20",
        ghost: "bg-transparent text-mobile-navy-900 hover:bg-slate-100",
    };

    const sizes = "px-6 py-3 text-sm";

    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes} ${className}`;

    const content = (
        <>
            {children}
            {icon && <span className="material-symbols-outlined ml-2 text-lg">{icon}</span>}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={combinedClasses}>
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={combinedClasses}>
            {content}
        </button>
    );
}
