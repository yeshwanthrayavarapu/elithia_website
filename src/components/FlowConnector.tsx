/**
 * FlowConnector Component
 * Curved SVG arrows and flow lines for guiding user attention
 * Adds visual narrative between sections
 */

import React from 'react';
import { cn } from '@/lib/design-system-utils';

interface FlowConnectorProps {
    direction?: 'down' | 'right' | 'curved';
    color?: 'magenta' | 'teal' | 'navy';
    className?: string;
    animated?: boolean;
}

export default function FlowConnector({
    direction = 'down',
    color = 'teal',
    className,
    animated = false,
}: FlowConnectorProps) {
    const colors = {
        magenta: '#E5205E',
        teal: '#0D9488',
        navy: '#0B1C24',
    };

    const strokeColor = colors[color];

    if (direction === 'down') {
        return (
            <div className={cn('flex justify-center', className)}>
                <svg
                    width="24"
                    height="40"
                    viewBox="0 0 24 40"
                    fill="none"
                    className={cn(animated && 'animate-bounce')}
                >
                    <path
                        d="M12 0 L12 32 M12 32 L6 26 M12 32 L18 26"
                        stroke={strokeColor}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        );
    }

    if (direction === 'right') {
        return (
            <div className={cn('flex items-center', className)}>
                <svg
                    width="40"
                    height="24"
                    viewBox="0 0 40 24"
                    fill="none"
                    className={cn(animated && 'animate-pulse')}
                >
                    <path
                        d="M0 12 L32 12 M32 12 L26 6 M32 12 L26 18"
                        stroke={strokeColor}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        );
    }

    // Curved connector
    return (
        <div className={cn('flex justify-center', className)}>
            <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                className={cn(animated && 'animate-pulse')}
            >
                <path
                    d="M10 10 Q30 30 50 50"
                    stroke={strokeColor}
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                />
                <path
                    d="M50 50 L44 46 M50 50 L46 44"
                    stroke={strokeColor}
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}
