
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CompliancePage() {
    return (
        <div className="min-h-screen bg-white font-sans text-mobile-navy-900 selection:bg-mobile-teal-100 selection:text-mobile-navy-900">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 px-6 text-center max-w-5xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider mb-6">
                    Now solving for 2025 Reporting
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-mobile-navy-900 mb-8 leading-tight">
                    The Intelligence Layer for <br /> <span className="text-mobile-teal-600 underline decoration-4 decoration-mobile-teal-200/50 underline-offset-8">Regulated Care</span>
                </h1>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Elithia transforms voice data into compliant documentation. We automate the critical path from bedside care to mandatory reporting with deterministic precision.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="px-8 py-4 rounded bg-mobile-teal-700 text-white font-bold shadow-xl hover:bg-mobile-teal-800 transition-all">
                        See Platform
                    </button>
                    <button className="px-8 py-4 rounded bg-white text-mobile-navy-900 border border-gray-200 font-bold hover:border-mobile-navy-900 transition-colors">
                        Read the Whitepaper
                    </button>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <h2 className="font-serif text-4xl font-bold mb-4">Voice-to-Compliance Workflow</h2>
                        <p className="text-slate-500">Our infrastructure handles the complexity of unstructured clinical data, converting it into rigorous, audit-ready records, without changing how your staff works.</p>
                    </div>

                    <div className="space-y-32">
                        {/* Step 1: Capture */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="size-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-8">
                                    <span className="material-symbols-outlined text-2xl">mic</span>
                                </div>
                                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2 block">Step 1</span>
                                <h3 className="font-serif text-3xl font-bold mb-4">Capture</h3>
                                <h4 className="font-bold text-lg text-slate-700 mb-4">Voice-First Activity Logging</h4>
                                <p className="text-slate-500 leading-relaxed mb-6">
                                    Care staff simply speak. Whether it’s a handover note, an incident report, or a routine check, Elithia captures high-fidelity audio directly at the point of care. No more typing at the nurse's station hours after the event.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm text-slate-600"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Ambient noise cancellation optimized for care homes</li>
                                    <li className="flex items-center gap-3 text-sm text-slate-600"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Multi-speaker diarization distinguishes staff from residents</li>
                                    <li className="flex items-center gap-3 text-sm text-slate-600"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Offline-first architecture for spotty connectivity</li>
                                </ul>
                            </div>
                            <div className="order-1 lg:order-2 bg-white rounded-3xl shadow-xl p-8 border border-gray-100 relative">
                                {/* Step 1 UI Mockup - Waveform */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">SJ</div>
                                    <div>
                                        <div className="text-sm font-bold">Sarah Jenkins</div>
                                        <div className="text-xs text-slate-400">RN • Level 2</div>
                                    </div>
                                    <div className="ml-auto flex items-center gap-2 text-red-500 bg-red-50 px-2 py-1 rounded text-xs font-bold animate-pulse">
                                        <span className="material-symbols-outlined text-[10px]">fiber_manual_record</span> REC
                                    </div>
                                </div>
                                <div className="h-24 flex items-center justify-center gap-1 mb-8">
                                    {[...Array(20)].map((_, i) => (
                                        <div key={i} className="w-1.5 bg-mobile-teal-500 rounded-full animate-bounce" style={{ height: Math.max(10, Math.random() * 60) + 'px', animationDelay: i * 0.05 + 's' }}></div>
                                    ))}
                                </div>
                                <p className="text-center font-mono text-sm text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                    "...patient fell while attempting to stand..."
                                </p>
                            </div>
                        </div>

                        {/* Step 2: Structure */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 relative">
                                {/* Step 2 Mockup */}
                                <div className="space-y-4">
                                    <div className="p-4 rounded-lg border border-gray-100 bg-slate-50">
                                        <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">UNSTRUCTURED INPUT</div>
                                        <p className="text-sm text-slate-600 italic">"Resident reported pain in left hip after the fall."</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <span className="material-symbols-outlined text-mobile-teal-500">arrow_downward</span>
                                    </div>
                                    <div className="p-4 rounded-lg border border-mobile-teal-100 bg-mobile-teal-50/30">
                                        <div className="text-[10px] text-mobile-teal-600 uppercase tracking-wider mb-2">STRUCTURED DATA</div>
                                        <div className="flex gap-2">
                                            <span className="px-2 py-1 rounded bg-purple-100 text-purple-700 text-xs font-bold">ENTITY: Resident</span>
                                            <span className="px-2 py-1 rounded bg-red-100 text-red-700 text-xs font-bold">SYMPTOM: Pain</span>
                                            <span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-bold">SOURCE: Reported</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="size-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-8">
                                    <span className="material-symbols-outlined text-2xl">account_tree</span>
                                </div>
                                <span className="text-purple-600 font-bold uppercase tracking-widest text-xs mb-2 block">Step 2</span>
                                <h3 className="font-serif text-3xl font-bold mb-4">Structure</h3>
                                <h4 className="font-bold text-lg text-slate-700 mb-4">AI-Assisted Data Categorization</h4>
                                <p className="text-slate-500 leading-relaxed mb-6">
                                    Raw audio is transcribed and structured into clinical ontologies. We map unstructured narrative directly to your care management system's fields, identifying key entities like medication, behaviors, and vital signs.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm text-slate-600"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Automatic mapping to SNOMED-CT terminology</li>
                                    <li className="flex items-center gap-3 text-sm text-slate-600"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Context-aware entity extraction (e.g. distinguishing "fall" season vs. injury)</li>
                                    <li className="flex items-center gap-3 text-sm text-slate-600"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> PII redaction before cloud processing</li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 3: Report */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="size-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-8">
                                    <span className="material-symbols-outlined text-2xl">description</span>
                                </div>
                                <span className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-2 block">Step 3</span>
                                <h3 className="font-serif text-3xl font-bold mb-4">Report</h3>
                                <h4 className="font-bold text-lg text-slate-700 mb-4">Automated SIRS & Mandatory Reporting</h4>
                                <p className="text-slate-500 leading-relaxed mb-6">
                                    Elithia flags reportable incidents instantly. We pre-fill mandatory government forms (like SIRS in Australia) based on the structured data, ready for a manager's final review.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm text-slate-600"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Real-time alerts for Priority 1 incidents</li>
                                    <li className="flex items-center gap-3 text-sm text-slate-600"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Pre-populated NDIS and Aged Care Quality portal forms</li>
                                    <li className="flex items-center gap-3 text-sm text-slate-600"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Full audit trail of data lineage from voice to report</li>
                                </ul>
                            </div>
                            <div className="order-1 lg:order-2 bg-white rounded-3xl shadow-xl p-8 border border-gray-100 relative">
                                {/* Step 3 UI Mockup - Form */}
                                <div className="border border-orange-200 bg-orange-50 rounded-lg p-4 mb-4 flex gap-3">
                                    <span className="material-symbols-outlined text-orange-600">warning</span>
                                    <div>
                                        <div className="font-bold text-orange-800 text-sm">SIRS Incident Report</div>
                                        <div className="text-xs text-orange-700">Draft Ready • Priority 1</div>
                                    </div>
                                    <button className="ml-auto bg-white text-orange-700 text-xs font-bold px-3 py-1 rounded border border-orange-200">Review</button>
                                </div>
                                <div className="space-y-4 opacity-50">
                                    <div className="h-8 bg-slate-100 rounded w-full"></div>
                                    <div className="h-8 bg-slate-100 rounded w-2/3"></div>
                                    <div className="h-24 bg-slate-100 rounded w-full"></div>
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <button className="bg-mobile-navy-900 text-white text-xs font-bold px-4 py-2 rounded">Sign & Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dark Section - Deterministic Rules */}
            <section className="py-24 bg-mobile-navy-900 text-white">
                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="inline-block px-3 py-1 rounded bg-mobile-teal-900 text-mobile-teal-400 text-[10px] font-bold uppercase tracking-wider mb-6 border border-mobile-teal-700">Governance Layer</span>
                        <h2 className="font-serif text-4xl font-bold mb-6">Not a "Black Box".<br />Deterministic Rules.</h2>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            In regulated industries, AI hallucinations are a liability. Elithia uses a hybrid architecture: LLMs for understanding nuance, but hard-coded deterministic rules for compliance decisions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="size-8 rounded bg-mobile-teal-900 text-mobile-teal-400 flex items-center justify-center font-bold font-mono">1</div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Rule-Based Enforcement</h4>
                                    <p className="text-sm text-gray-400">If incident matches specific criteria (e.g., "unreasonable use of force"), reporting is triggered automatically. Artificial Intelligence asks.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="size-8 rounded bg-mobile-teal-900 text-mobile-teal-400 flex items-center justify-center font-bold font-mono">2</div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Human-in-the-Loop Validation</h4>
                                    <p className="text-sm text-gray-400">Every automated draft must be verified by a qualified RN or Manager. We provide the draft, you provide the signature.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-mobile-navy-800 rounded-xl p-6 border border-white/10 font-mono text-sm shadow-2xl">
                        {/* Code/Logic Visualization */}
                        <div className="flex gap-2 mb-4">
                            <div className="size-3 rounded-full bg-red-500"></div>
                            <div className="size-3 rounded-full bg-yellow-500"></div>
                            <div className="size-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="space-y-2 text-gray-400">
                            <p><span className="text-purple-400">if</span> (incident.type == <span className="text-green-400">"PhysicalAssault"</span>) {"{"}</p>
                            <p className="pl-4 text-white">priority = <span className="text-orange-400">Priority.HIGH</span>;</p>
                            <p className="pl-4">notify(<span className="text-blue-400">Roles.CLINICAL_MANAGER</span>);</p>
                            <p className="pl-4">draftReport(<span className="text-blue-400">Forms.SIRS_TYPE_1</span>);</p>
                            <p>{"}"} <span className="text-purple-400">else</span> {"{"}</p>
                            <p className="pl-4">logActivity();</p>
                            <p>{"}"}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 border-b border-gray-100">
                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div>
                        <div className="text-5xl font-bold text-mobile-navy-900 mb-2">40%</div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Reduction in Documentation Time</div>
                    </div>
                    <div>
                        <div className="text-5xl font-bold text-mobile-navy-900 mb-2">100%</div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Incident Report Traceability</div>
                    </div>
                    <div>
                        <div className="text-5xl font-bold text-mobile-navy-900 mb-2">24/7</div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Compliance Monitoring</div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 text-center">
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-mobile-navy-900 mb-6">Ready to secure your compliance workflow?</h2>
                <p className="text-slate-500 mb-10">Join the leading Aged Care providers in Australia using Elithia to protect residents and staff with transparent AI infrastructure.</p>
                <div className="flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto">
                    <input type="email" placeholder="Enter your work email" className="px-6 py-4 rounded border border-gray-200 outline-none focus:border-mobile-navy-900 flex-1" />
                    <button className="px-8 py-4 rounded bg-mobile-teal-700 text-white font-bold hover:bg-mobile-teal-800 transition-colors">Book a Demo</button>
                </div>
                <div className="flex justify-center gap-8 mt-10 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-green-500"></span> SOC2 Type II</span>
                    <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-blue-500"></span> HIPAA Compliant</span>
                    <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-purple-500"></span> GDPR Ready</span>
                </div>
            </section>

            <Footer />
        </div>
    );
}
