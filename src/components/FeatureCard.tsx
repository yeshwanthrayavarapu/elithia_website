/**
 * FeatureCard Component
 * Modern card component with pastel backgrounds, generous rounded corners,
 * and smooth hover effects inspired by Cohere Health design
 */

import React from 'react';
import { cn } from '@/lib/design-system-utils';

interface FeatureCardProps {
    children: React.ReactNode;
    background?: 'blue' | 'purple' | 'yellow' | 'pink' | 'green' | 'white' | 'teal';
    icon?: React.ReactNode;
    className?: string;
    hover?: boolean;
    padding?: 'sm' | 'md' | 'lg';
}

export default function FeatureCard({
    children,
    background = 'white',
    icon,
    className,
    hover = true,
    padding = 'lg',
}: FeatureCardProps) {
    const backgroundColors = {
        blue: 'bg-[#F0F7FF]',
        purple: 'bg-[#F9F5FF]',
        yellow: 'bg-[#FFFBEB]',
        pink: 'bg-[#FFF1F5]',
        green: 'bg-[#F0FDF4]',
        white: 'bg-white',
        teal: 'bg-mobile-teal-50',
    };

    const paddingClasses = {
        sm: 'p-6',
        md: 'p-8',
        lg: 'p-10',
    };

    return (
        <div
            className={cn(
                'rounded-2xl border border-gray-100',
                backgroundColors[background],
                paddingClasses[padding],
                hover && 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-200',
                'shadow-sm',
                className
            )}
        >
            {icon && (
                <div className="mb-6">
                    {icon}
                </div>
            )}
            {children}
        </div>
    );
}
