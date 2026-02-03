
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TrustPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-mobile-navy-900 selection:bg-mobile-teal-100 selection:text-mobile-navy-900">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 text-center max-w-5xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider mb-6 border border-green-100">
                    Enterprise Grade Security
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-mobile-navy-900 mb-8 leading-tight">
                    Trust is our <span className="relative z-10">infrastructure.<span className="absolute bottom-2 left-0 w-full h-3 bg-green-200/50 -z-10"></span></span>
                </h1>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                    We build deterministic compliance layers for regulated industries. Fully transparent, strictly governed, and wall-tested for the Australian Aged Care sector.
                </p>
                <div className="flex justify-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Not AI Generated</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> ISO 27001 Compliant</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Australian Hosted</span>
                </div>
            </section>

            {/* Regulatory Roadmap */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="font-serif text-3xl font-bold text-mobile-navy-900 mb-6">Aligned with Aged Care Rules 2025</h2>
                        <p className="text-slate-500 leading-relaxed max-w-lg mb-8">
                            The regulatory landscape is shifting. Elithia's compliance engine is pre-configured to meet the stringent requirements of the upcoming Aged Care Rules 2025. Our models are trained to specifically identify and flag non-compliance events in real-time, ensuring provider governance meets the new statutory standards.
                        </p>
                        <div className="space-y-4">
                            {['Automatic Mandatory Quality Indicators v3.0', 'Mandatory meeting minutes detection', 'Restrictive Practices waitlist list'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-mobile-navy-900 font-bold">
                                    <div className="size-6 rounded bg-green-100 text-green-600 flex items-center justify-center"><span className="material-symbols-outlined text-sm">verified</span></div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 shadow-lg relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100">Compliance Monitor</div>
                        <div className="space-y-4 mt-8">
                            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500 shadow-sm">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-bold text-mobile-navy-900">Standard 3.2(b) • Personal Care</span>
                                    <span className="text-[10px] text-slate-400">Just now</span>
                                </div>
                                <p className="text-xs text-slate-500">Documentation verified against care plan requirements.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500 shadow-sm opacity-70">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-bold text-mobile-navy-900">SIRS Reporting Threshold</span>
                                    <span className="text-[10px] text-slate-400">10m ago</span>
                                </div>
                                <p className="text-xs text-slate-500">Potential reportable incident flagged for review.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Regulatory Timeline */}
            <section className="py-24 bg-white border-y border-gray-100">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-mobile-navy-900 mb-2">Regulatory Roadmap</h2>
                            <p className="text-slate-500 text-sm">Our compliance infrastructure is built to evolve.</p>
                        </div>
                        <a href="#" className="text-mobile-teal-600 font-bold text-xs flex items-center gap-1">Plan Full Roadmap <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
                    </div>

                    <div className="relative border-l border-gray-200 ml-4 space-y-12">
                        <div className="relative pl-8">
                            <span className="absolute -left-1.5 top-1.5 size-3 rounded-full bg-mobile-navy-900 ring-4 ring-white"></span>
                            <div className="text-xs font-bold text-slate-400 uppercase mb-1">February • 2025</div>
                            <h3 className="font-bold text-lg text-mobile-navy-900 mb-2">Quality Standards v3 Gap Analysis</h3>
                            <p className="text-sm text-slate-500 max-w-2xl">Rolling release of context AI models for the Strengthening Quality Standards, ensuring all care documentation generated aligns with new dignity and respect domains.</p>
                        </div>
                        <div className="relative pl-8">
                            <span className="absolute -left-1.5 top-1.5 size-3 rounded-full bg-gray-300 ring-4 ring-white"></span>
                            <div className="text-xs font-bold text-slate-400 uppercase mb-1">July • 2025</div>
                            <h3 className="font-bold text-lg text-mobile-navy-900 mb-2">New Aged Care Act Implementation</h3>
                            <p className="text-sm text-slate-500 max-w-2xl">Automatic system updates to reflect the new Rights Based framework, including mandatory duty of care checks on all generated incident reports.</p>
                        </div>
                        <div className="relative pl-8">
                            <span className="absolute -left-1.5 top-1.5 size-3 rounded-full bg-gray-300 ring-4 ring-white"></span>
                            <div className="text-xs font-bold text-slate-400 uppercase mb-1">Late • 2025</div>
                            <h3 className="font-bold text-lg text-mobile-navy-900 mb-2">Support at Home Program Integration</h3>
                            <p className="text-sm text-slate-500 max-w-2xl">Expansion of the Trust & Safety layer to accommodate distributed care models and remote monitoring data streams.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Sovereignty */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="bg-mobile-navy-900 rounded-2xl p-8 relative overflow-hidden h-80 flex items-end">
                        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Australia_map_coloured.svg/2000px-Australia_map_coloured.svg.png')] bg-cover opacity-10 mix-blend-overlay"></div>
                        <div className="bg-black/50 backdrop-blur-sm p-4 rounded border border-white/10 relative z-10 w-full">
                            <div className="text-xs font-bold text-white mb-1 flex items-center gap-2"><span className="material-symbols-outlined text-green-400 text-sm">cloud_done</span> Data residency guaranteed</div>
                            <div className="text-[10px] text-gray-400">Cryptographically secured storage in Australian zones.</div>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-serif text-3xl font-bold text-mobile-navy-900 mb-6">Strict Data Sovereignty</h2>
                        <p className="text-slate-500 mb-8 leading-relaxed">
                            We understand that health data is sensitive and sovereignty is non-negotiable. Elithia ensures 100% of your data resides within Australian borders. We utilize sovereign-based cloud infrastructure (Sydney & Melbourne) with no data egress to foreign jurisdictions, fully complying with the Privacy Act 1988 and APPs.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="p-4 rounded border border-gray-100 bg-slate-50">
                                <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                                <div className="text-xs text-slate-500 font-bold">Australian Hosted</div>
                            </div>
                            <div className="p-4 rounded border border-gray-100 bg-slate-50">
                                <div className="text-2xl font-bold text-mobile-teal-600 mb-1">Zero</div>
                                <div className="text-xs text-slate-500 font-bold">Offshore Processing</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Architecture Dark Section */}
            <section className="bg-mobile-navy-900 text-white py-24">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 px-2 py-1 rounded inline-flex items-center gap-1 mb-4">
                            <span className="material-symbols-outlined text-xs">lock</span> Military-Grade Protection
                        </span>
                        <h2 className="font-serif text-4xl font-bold">Security Architecture</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl">Our platform is built on a "Zero Trust" philosophy. We employ a defense-in-depth strategy ensuring every layer of the stack, from the database to the edge.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Encrypted at Rest", desc: "All resident and provider records are encrypted using AES-256 GCM. Keys are managed via restricted HSM modules.", icon: "lock" },
                            { title: "Encryption in Transit", desc: "Data in motion is protected via TLS 1.3 protocol. We refuse HTTP or protocol primacies downgraded attacks.", icon: "sync_lock" },
                            { title: "Audit Center Auth", desc: "Mandatory MFA for all administrative access. Support for hardware security keys (YubiKey) for IT/Admin users.", icon: "fingerprint" },
                            { title: "Continuous Scanning", desc: "Regular third-party penetration testing and automated vulnerability scanning on CI/CD pipeline.", icon: "security_update_warning" }
                        ].map((item, i) => (
                            <div key={i} className="bg-mobile-navy-800 p-8 rounded-2xl border border-white/5 hover:bg-mobile-navy-800/80 transition-colors">
                                <div className="size-10 rounded bg-mobile-teal-900/50 text-mobile-teal-400 flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                </div>
                                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hallucinations */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-mobile-navy-900 mb-4">Deterministic AI: Zero Hallucinations</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">In healthcare surveillance, close enough isn't good enough. We use Retrieval Augmented Generation (RAG) with strict source attribution.</p>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Source Anchoring", desc: "Every AI output is anchored to a specific timestamp in the source audio transcription. If the source doesn't exist, the AI will not generate an answer.", icon: "anchor" },
                        { title: "Fact Verification", desc: "Multiple specialist agents cross-reference generated summaries against the structured fact factbase before presentation to user.", icon: "fact_check" },
                        { title: "Guardrails & Controls", desc: "Hard-coded boundaries prevent the model from engaging in speculative reasoning or providing medical advice beyond administrative compliance.", icon: "fence" }
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-gray-100">
                            <div className="size-10 rounded bg-white text-mobile-teal-600 flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                                <span className="material-symbols-outlined">{item.icon}</span>
                            </div>
                            <h3 className="font-bold text-mobile-navy-900 text-lg mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Audit Trails */}
            <section className="py-24">
                <div className="max-w-[1400px] mx-auto px-6 bg-slate-50 rounded-3xl p-12 lg:p-24 relative overflow-hidden">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-mobile-navy-900 mb-6">Comprehensive Audit Trails</h2>
                            <p className="text-slate-500 mb-8 leading-relaxed">Transparency is the cornerstone of trust. Elithia provides an immutable log of every AI interaction, decision, and data access point.</p>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <span className="material-symbols-outlined text-mobile-navy-900">history_edu</span>
                                    <div>
                                        <h4 className="font-bold text-mobile-navy-900 text-sm">Decision Lineage</h4>
                                        <p className="text-xs text-slate-500">Trace any compliance flagging back to the raw input data and model version.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="material-symbols-outlined text-mobile-navy-900">visibility</span>
                                    <div>
                                        <h4 className="font-bold text-mobile-navy-900 text-sm">Access Logs</h4>
                                        <p className="text-xs text-slate-500">Complete record of who accessed what record, when, and for what purpose.</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="inline-block mt-8 text-mobile-teal-600 font-bold text-xs uppercase hover:underline">View Audit Trail Specs</a>
                        </div>
                        <div className="bg-mobile-navy-900 rounded-xl p-6 shadow-2xl font-mono text-xs overflow-hidden">
                            <div className="flex bg-mobile-navy-800 p-2 rounded mb-4 text-gray-400 gap-4 text-[10px]">
                                <span>USER: ADMIN_01</span>
                                <span>IP: 192.168.1.42</span>
                                <span>SESSION: ID_992A</span>
                            </div>
                            <div className="space-y-2 text-green-400">
                                <p>&gt; [10:42:01] GET /api/v1/incidents/INC-2024-001</p>
                                <p>&gt; [10:42:01] AUTH_CHECK: PERMISSION_GRANTED (Role: Clinical_Lead)</p>
                                <p>&gt; [10:42:02] DECRYPT_FIELD: 'incident_description'</p>
                                <p>&gt; [10:42:02] DOWNLOAD_AUDIO: 'recording_772.wav'</p>
                                <p className="text-gray-500">&gt; [10:42:03] LOG_WRITE: ACCESS_EVENT recorded to ledger block #882910</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Governance & Human Oversight Circle */}
            <section className="py-24 bg-white text-center">
                <h2 className="font-serif text-3xl font-bold text-mobile-navy-900 mb-16">Governance & Human Oversight</h2>
                <div className="max-w-[1400px] mx-auto px-6 relative">
                    <div className="absolute top-8 left-0 w-full h-0.5 bg-gray-100 -z-10 hidden md:block"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6">
                            <div className="size-16 rounded-full bg-white border-2 border-slate-200 mx-auto mb-6 flex items-center justify-center text-slate-400 z-10 relative">
                                <span className="material-symbols-outlined">share</span>
                            </div>
                            <h3 className="font-bold text-mobile-navy-900 mb-2">1. AI Analysis & Flagging</h3>
                            <p className="text-xs text-slate-500">Elithia processes clinical notes and automatically flags potential non-compliance or risks based on the Aged Care Standards.</p>
                        </div>
                        <div className="bg-white p-6">
                            <div className="size-16 rounded-full bg-white border-2 border-slate-200 mx-auto mb-6 flex items-center justify-center text-slate-400 z-10 relative">
                                <span className="material-symbols-outlined">gavel</span>
                            </div>
                            <h3 className="font-bold text-mobile-navy-900 mb-2">2. Staff Review</h3>
                            <p className="text-xs text-slate-500">Qualified RNs or Care Managers review the flagged items in the dashboard. They can accept, reject, or modify the AI's findings.</p>
                        </div>
                        <div className="bg-white p-6">
                            <div className="size-16 rounded-full bg-white border-2 border-green-500 mx-auto mb-6 flex items-center justify-center text-green-500 z-10 relative bg-green-50">
                                <span className="material-symbols-outlined">verified</span>
                            </div>
                            <h3 className="font-bold text-mobile-navy-900 mb-2">3. Validated Submission</h3>
                            <p className="text-xs text-slate-500">Only verified data is committed to the permanent record. The system logs the approving human for accountability.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transparency Report */}
            <section className="py-20 border-t border-gray-100">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex justify-between items-center mb-10">
                        <h3 className="font-bold text-mobile-navy-900 flex items-center gap-2"><span className="material-symbols-outlined text-green-600">spa</span> Transparency Report</h3>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-green-600 uppercase">
                            <span className="size-2 rounded-full bg-green-500 animate-pulse"></span> Systems Operational
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-4xl font-serif font-bold text-mobile-navy-900 mb-1">99.99%</div>
                            <div className="text-[10px] uppercase font-bold text-slate-400">Uptime SLA</div>
                        </div>
                        <div>
                            <div className="text-4xl font-serif font-bold text-mobile-navy-900 mb-1">&lt;15ms</div>
                            <div className="text-[10px] uppercase font-bold text-slate-400">API Latency</div>
                        </div>
                        <div>
                            <div className="text-4xl font-serif font-bold text-mobile-navy-900 mb-1">0.0%</div>
                            <div className="text-[10px] uppercase font-bold text-slate-400">Data Breaches</div>
                        </div>
                        <div>
                            <div className="text-4xl font-serif font-bold text-mobile-navy-900 mb-1">24/7</div>
                            <div className="text-[10px] uppercase font-bold text-slate-400">Support Coverage</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-2xl mx-auto px-6 text-center mb-12">
                    <h2 className="font-serif text-3xl font-bold text-mobile-navy-900">Frequently Asked Questions</h2>
                </div>
                <div className="max-w-3xl mx-auto px-6 space-y-4">
                    {['How do you prevent hallucinations in AI reports?', 'Where exactly is my data stored?', 'Is your AI model trained on my private data?', 'Who owns the data processed by Elithia?'].map((q, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 flex justify-between items-center cursor-pointer hover:border-gray-300">
                            <span className="font-bold text-mobile-navy-900 text-sm">{q}</span>
                            <span className="material-symbols-outlined text-slate-400">expand_more</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trust Footer - Minimal */}
            <div className="py-12 bg-white text-center border-t border-gray-100">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-4 tracking-widest">Trusted by Industry Leaders & Regulators</p>
                <div className="flex justify-center gap-12 opacity-40 grayscale">
                    <span className="material-symbols-outlined text-3xl">public</span>
                    <span className="material-symbols-outlined text-3xl">verified_user</span>
                    <span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
                    <span className="material-symbols-outlined text-3xl">policy</span>
                </div>
            </div>

            <Footer />
        </div>
    );
}
