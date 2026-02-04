/**
 * Platform Diagram - Redesigned
 * More compact, modern visualization of data orchestration
 */

"use client";
import React from 'react';
import { cn } from '@/lib/design-system-utils';

export default function PlatformDiagram() {
    const dataNodes = [
        {
            icon: "mic",
            title: "Voice Data",
            description: "Unstructured audio from bedside",
            color: "purple",
            delay: "0ms"
        },
        {
            icon: "dns",
            title: "EHR Systems",
            description: "Clinical history & care plans",
            color: "blue",
            delay: "150ms"
        },
        {
            icon: "gavel",
            title: "Regulation",
            description: "Aged Care Quality Standards",
            color: "green",
            delay: "300ms"
        }
    ];

    const colorClasses = {
        purple: "bg-purple-50 text-purple-600 border-purple-200",
        blue: "bg-blue-50 text-blue-600 border-blue-200",
        green: "bg-green-50 text-green-600 border-green-200",
    };

    return (
        <section className="py-20 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden relative">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.05)_0%,transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05)_0%,transparent_50%)]"></div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-mobile-teal-600 font-bold text-xs uppercase tracking-widest block mb-2">
                        The Intelligence Layer
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">
                        Orchestrating <span className="text-transparent bg-clip-text bg-gradient-to-r from-mobile-teal-600 to-green-600">Care Data</span>
                    </h2>
                </div>

                {/* Diagram */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                    {/* Data Source Cards */}
                    {dataNodes.map((node, index) => (
                        <div
                            key={node.title}
                            className={cn(
                                "p-6 rounded-2xl bg-white border-2 shadow-sm",
                                "hover:shadow-lg hover:border-mobile-teal-300",
                                "transition-all duration-300 animate-fade-in-up relative group",
                                colorClasses[node.color as keyof typeof colorClasses]
                            )}
                            style={{ animationDelay: node.delay }}
                        >
                            {/* Icon */}
                            <div className={cn(
                                "size-12 rounded-xl flex items-center justify-center mb-4",
                                "group-hover:scale-110 transition-transform duration-200",
                                colorClasses[node.color as keyof typeof colorClasses]
                            )}>
                                <span className="material-symbols-outlined text-2xl">{node.icon}</span>
                            </div>

                            {/* Content */}
                            <h3 className="font-bold text-slate-900 text-lg mb-2">{node.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">{node.description}</p>

                            {/* Connection Indicator */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
                                <div className="size-2 rounded-full bg-mobile-teal-500 animate-pulse"></div>
                                <div className="w-0.5 h-6 bg-gradient-to-b from-mobile-teal-500/50 to-transparent mx-auto"></div>
                            </div>
                        </div>
                    ))}

                    {/* Center Core (below cards on mobile, visually connected on desktop) */}
                    <div className="md:col-span-3 flex justify-center mt-12 md:mt-8">
                        <div className="relative group">
                            {/* Pulsing Ring */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-mobile-teal-400/40 animate-[ping_3s_ease-out_infinite]"></div>

                            {/* Core Card */}
                            <div className="relative px-8 py-6 rounded-2xl bg-gradient-to-br from-mobile-teal-500 to-mobile-teal-600 border-2 border-mobile-teal-400 shadow-xl">
                                <div className="flex items-center gap-4">
                                    {/* Logo */}
                                    <div className="size-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                                        <span className="font-serif font-bold text-2xl text-white">E</span>
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <div className="font-bold text-white text-lg uppercase tracking-wider drop-shadow-sm">Elithia Core</div>
                                        <div className="text-xs text-white/90 font-medium">AI Compliance Engine</div>
                                    </div>

                                    {/* Arrow indicator */}
                                    <div className="ml-4 hidden lg:flex items-center gap-2 text-white/70">
                                        <span className="text-xs uppercase tracking-wider font-bold">Output</span>
                                        <span className="material-symbols-outlined text-white">arrow_forward</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Output Features */}
                    <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                        {[
                            { icon: "check_circle", label: "100% Compliant Records" },
                            { icon: "insights", label: "Real-time Risk Detection" },
                            { icon: "shield", label: "Audit-Ready Reports" }
                        ].map((feature, i) => (
                            <div
                                key={feature.label}
                                className="flex items-center gap-3 p-4 rounded-xl bg-white border-2 border-slate-200 hover:border-mobile-teal-300 hover:shadow-md transition-all"
                                style={{ animationDelay: `${450 + i * 100}ms` }}
                            >
                                <div className="size-10 rounded-lg bg-mobile-teal-50 text-mobile-teal-600 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-xl">{feature.icon}</span>
                                </div>
                                <span className="text-sm font-medium text-slate-900">{feature.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
