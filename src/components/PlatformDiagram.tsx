
"use client";
import React from 'react';

export default function PlatformDiagram() {
    return (
        <section className="py-32 bg-slate-900 overflow-hidden relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mobile-teal-500/10 rounded-full blur-[120px]"></div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-mobile-teal-400 font-bold text-xs uppercase tracking-widest mb-3 block">The Intelligence Layer</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Orchestrating <span className="text-transparent bg-clip-text bg-gradient-to-r from-mobile-teal-400 to-green-400">Care Data</span></h2>
                </div>

                <div className="relative h-[600px] flex items-center justify-center">

                    {/* Central Core */}
                    <div className="relative z-20 flex flex-col items-center justify-center size-48 rounded-full bg-slate-900 border-2 border-mobile-teal-500/50 shadow-[0_0_60px_rgba(20,184,166,0.3)] backdrop-blur-md">
                        <div className="absolute inset-0 rounded-full border border-mobile-teal-500/20 animate-[ping_3s_ease-out_infinite]"></div>
                        <div className="size-16 rounded-xl bg-gradient-to-br from-mobile-teal-500 to-slate-800 flex items-center justify-center mb-2 shadow-lg">
                            <span className="font-serif font-bold text-3xl text-white">E</span>
                        </div>
                        <div className="text-white font-bold tracking-widest uppercase text-xs">Elithia Core</div>
                    </div>

                    {/* Orbiting Satellites - Using absolute positioning for 'orbit' effect conceptually, but here creating a static robust layout with moving 'data' for reliability across screens */}

                    {/* Top Left: Voice */}
                    <div className="absolute top-[10%] left-[10%] md:left-[20%] p-6 rounded-2xl bg-slate-800/80 border border-slate-700 backdrop-blur-md hover:border-mobile-teal-500 transition-colors w-64 animate-fade-in-up">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="size-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center"><span className="material-symbols-outlined">mic</span></div>
                            <h3 className="font-bold text-white">Voice Data</h3>
                        </div>
                        <p className="text-xs text-slate-400">Unstructured audio from bedside interactions.</p>
                        {/* Connection Line */}
                        <svg className="absolute -bottom-20 -right-20 w-40 h-40 pointer-events-none text-slate-800 hidden md:block" style={{ transform: 'rotate(45deg)' }}>
                            <path d="M0,20 Q40,20 40,60" fill="none" stroke="currentColor" strokeWidth="2" />
                            <circle r="3" fill="#2dd4bf">
                                <animateMotion dur="3s" repeatCount="indefinite" path="M0,20 Q40,20 40,60" />
                            </circle>
                        </svg>
                    </div>

                    {/* Top Right: Systems */}
                    <div className="absolute top-[10%] right-[10%] md:right-[20%] p-6 rounded-2xl bg-slate-800/80 border border-slate-700 backdrop-blur-md hover:border-mobile-teal-500 transition-colors w-64 animate-fade-in-up [animation-delay:200ms]">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="size-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center"><span className="material-symbols-outlined">dns</span></div>
                            <h3 className="font-bold text-white">EHR Systems</h3>
                        </div>
                        <p className="text-xs text-slate-400">Clinical history, medication, and care plans.</p>
                        {/* Connection Line */}
                        <svg className="absolute -bottom-20 -left-20 w-40 h-40 pointer-events-none text-slate-800 hidden md:block" style={{ transform: 'rotate(-45deg)' }}>
                            <path d="M40,20 Q0,20 0,60" fill="none" stroke="currentColor" strokeWidth="2" />
                            <circle r="3" fill="#2dd4bf">
                                <animateMotion dur="3.5s" repeatCount="indefinite" path="M40,20 Q0,20 0,60" />
                            </circle>
                        </svg>
                    </div>

                    {/* Bottom Center: Regulatory */}
                    <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 p-6 rounded-2xl bg-slate-800/80 border border-slate-700 backdrop-blur-md hover:border-mobile-teal-500 transition-colors w-64 animate-fade-in-up [animation-delay:600ms]">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="size-10 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center"><span className="material-symbols-outlined">gavel</span></div>
                            <h3 className="font-bold text-white">Regulation</h3>
                        </div>
                        <p className="text-xs text-slate-400">Real-time mapping to Aged Care Quality Standards.</p>
                        {/* Connection Line */}
                        <svg className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 pointer-events-none text-slate-800 hidden md:block">
                            <path d="M20,40 Q20,0 20,0" fill="none" stroke="currentColor" strokeWidth="2" />
                            <circle r="3" fill="#2dd4bf">
                                <animateMotion dur="4s" repeatCount="indefinite" path="M20,40 Q20,0 20,0" />
                            </circle>
                        </svg>
                    </div>

                    {/* Animated Connectors SVG Layer */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="#2dd4bf" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                        {/* Lines connecting corners to center */}
                        {/* Top Left */}
                        <path d="M300 150 L 650 300" stroke="url(#lineGradient)" strokeWidth="1" strokeOpacity="0.3" fill="none" />
                        <circle r="3" fill="#2dd4bf">
                            <animateMotion dur="2s" repeatCount="indefinite" path="M300 150 L 650 300" />
                        </circle>

                        {/* Top Right */}
                        <path d="M1100 150 L 750 300" stroke="url(#lineGradient)" strokeWidth="1" strokeOpacity="0.3" fill="none" />
                        <circle r="3" fill="#2dd4bf">
                            <animateMotion dur="2.5s" repeatCount="indefinite" path="M1100 150 L 750 300" />
                        </circle>

                        {/* Bottom Center */}
                        <path d="M700 500 L 700 380" stroke="url(#lineGradient)" strokeWidth="1" strokeOpacity="0.3" fill="none" />
                        <circle r="3" fill="#2dd4bf">
                            <animateMotion dur="2.2s" repeatCount="indefinite" path="M700 500 L 700 380" />
                        </circle>
                    </svg>

                </div>
            </div>
        </section>
    );
}
