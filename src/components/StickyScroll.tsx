
"use client";
import React, { useState, useEffect, useRef } from 'react';

const ITEMS = [
    {
        id: "residential",
        title: "Residential Aged Care",
        desc: "Automated SIRS reporting and critical funding evidence collection. Turn static policies into active flows.",
        icon: "apartment",
        color: "bg-green-50 text-green-600",
        stats: { value: "15%", label: "Increase in AN-ACC Claiming" }
    },
    {
        id: "home",
        title: "Home Care",
        desc: "Remote monitoring and voice-first visit notes. Ensure lone-worker safety and quality standard adherence.",
        icon: "home_health",
        color: "bg-blue-50 text-blue-600",
        stats: { value: "100%", label: "Visit Verification" }
    },
    {
        id: "disability",
        title: "Disability Support",
        desc: "Incident management tuned for NDIS practice standards. Empower support workers with guided decision trees.",
        icon: "accessible",
        color: "bg-purple-50 text-purple-600",
        stats: { value: "40hr", label: "Admin Saved / Month" }
    }
];

export default function StickyScroll() {
    const [activeId, setActiveId] = useState("residential");
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("data-id");
                        if (id) setActiveId(id);
                    }
                });
            },
            { rootMargin: "-50% 0px -50% 0px" }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const activeItem = ITEMS.find(i => i.id === activeId) || ITEMS[0];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="mb-16 text-center">
                    <span className="text-mobile-teal-600 font-bold text-xs uppercase tracking-widest mb-3 block">Industry Specific Solutions</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-mobile-navy-900">Operational Intelligence for <span className="italic">Every Care Setting</span></h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left: Scrollable Content */}
                    <div className="w-full lg:w-1/2 space-y-24">
                        {ITEMS.map((item, index) => (
                            <div
                                key={item.id}
                                ref={(el) => { sectionRefs.current[index] = el }}
                                data-id={item.id}
                                className={`transition-opacity duration-500 p-6 rounded-2xl border border-transparent ${activeId === item.id ? 'opacity-100 bg-slate-50 border-gray-100' : 'opacity-40'}`}
                            >
                                <div className={`size-12 rounded-xl ${item.color} flex items-center justify-center mb-6`}>
                                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                </div>
                                <h3 className="font-serif font-bold text-2xl text-mobile-navy-900 mb-3">{item.title}</h3>
                                <p className="text-lg text-slate-500 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right: Sticky Visual */}
                    <div className="hidden lg:block w-1/2 relative">
                        <div className="sticky top-32">
                            <div className="bg-mobile-navy-900 rounded-3xl p-8 shadow-2xl overflow-hidden relative min-h-[400px] flex items-center justify-center transition-all duration-500">
                                {/* Dynamic Background Blob */}
                                <div key={activeItem.id + '-bg'} className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[80px] opacity-30 animate-pulse ${activeItem.id === 'residential' ? 'bg-green-500' :
                                        activeItem.id === 'home' ? 'bg-blue-500' : 'bg-purple-500'
                                    }`}></div>

                                <div className="relative z-10 text-center text-white">
                                    <div className={`size-20 rounded-2xl ${activeItem.color} mx-auto mb-6 flex items-center justify-center shadow-lg transition-all duration-500 scale-100 ${activeId === activeItem.id ? 'scale-110' : ''}`}>
                                        <span className="material-symbols-outlined text-4xl">{activeItem.icon}</span>
                                    </div>
                                    <div className="text-6xl font-serif font-bold mb-2 transition-all duration-500">{activeItem.stats.value}</div>
                                    <div className="text-sm font-bold uppercase tracking-wider text-white/60 mb-8">{activeItem.stats.label}</div>

                                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-xs font-bold backdrop-blur-sm border border-white/10">
                                        <span className="size-2 rounded-full bg-green-400 animate-pulse"></span>
                                        Live Data Feed
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
