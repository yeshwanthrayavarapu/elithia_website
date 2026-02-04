/**
 * StatsDisplay Component
 * Large metric display with vibrant accent colors
 * Perfect for showcasing key achievements and statistics
 */

import React from 'react';
import { cn } from '@/lib/design-system-utils';

interface StatsDisplayProps {
    value: string;
    label: string;
    accent?: 'magenta' | 'teal' | 'blue' | 'green';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export default function StatsDisplay({
    value,
    label,
    accent = 'teal',
    size = 'md',
    className,
}: StatsDisplayProps) {
    const accentColors = {
        magenta: 'text-[#E5205E]',
        teal: 'text-mobile-teal-600',
        blue: 'text-blue-600',
        green: 'text-green-600',
    };

    const valueSizes = {
        sm: 'text-4xl md:text-5xl',
        md: 'text-5xl md:text-6xl',
        lg: 'text-6xl md:text-7xl',
    };

    const labelSizes = {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
    };

    return (
        <div className={cn('flex flex-col', className)}>
            <div className={cn(
                'font-bold leading-none mb-2',
                valueSizes[size],
                accentColors[accent]
            )}>
                {value}
            </div>
            <div className={cn(
                'font-bold uppercase tracking-wider text-gray-500',
                labelSizes[size]
            )}>
                {label}
            </div>
        </div>
    );
}
