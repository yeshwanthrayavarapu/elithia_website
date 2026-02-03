
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-white font-sans text-mobile-navy-900 selection:bg-mobile-teal-100 selection:text-mobile-navy-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-gradient-to-b from-mobile-teal-50/50 to-white">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="max-w-2xl">
                        <div className="flex gap-2 mb-6">
                            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider">New</span>
                            <span className="text-[10px] font-bold text-mobile-teal-600 uppercase tracking-wider flex items-center gap-1">
                                The Compliance Engine <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
                            </span>
                        </div>
                        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-mobile-navy-900">
                            The intelligence infrastructure for <span className="italic text-mobile-teal-600">compliant care.</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                            Transform voice-first data capture into audit-ready records. Elithia automates compliance for the new regulatory era.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 rounded bg-mobile-navy-900 text-white font-bold shadow-xl hover:bg-mobile-navy-800 transition-all transform hover:-translate-y-0.5">
                                Run Platform Demo
                            </button>
                            <button className="px-8 py-4 rounded bg-white text-mobile-navy-900 border border-gray-200 font-bold hover:border-mobile-navy-900 transition-colors flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg">play_circle</span>
                                Watch Video
                            </button>
                        </div>
                        <p className="mt-6 text-xs text-slate-400">
                            * Trusted by 70+ aged care providers across Australia.
                        </p>
                    </div>
                    <div className="relative">
                        {/* Abstract Dashboard Visual */}
                        <div className="relative z-10 bg-white rounded-2xl shadow-2xl shadow-mobile-navy-900/10 border border-gray-100 p-6 aspect-[4/3] flex flex-col overflow-hidden">
                            <div className="flex items-center justify-between mb-8 border-b border-gray-50 pb-4">
                                <div className="flex gap-2">
                                    <div className="size-3 rounded-full bg-red-400"></div>
                                    <div className="size-3 rounded-full bg-yellow-400"></div>
                                    <div className="size-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="text-xs text-slate-400 font-mono">dashboard.elithia.ai</div>
                            </div>
                            <div className="flex-1 flex gap-6">
                                <div className="w-1/3 space-y-4">
                                    <div className="h-24 rounded-lg bg-mobile-teal-50 border border-mobile-teal-100 p-4">
                                        <div className="text-3xl font-bold text-mobile-teal-700 mb-1">100%</div>
                                        <div className="h-1 w-full bg-mobile-teal-200 rounded-full">
                                            <div className="h-full w-full bg-mobile-teal-600 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="h-24 rounded-lg bg-white border border-gray-100 p-4 shadow-sm">
                                        <div className="text-3xl font-bold text-mobile-navy-900 mb-1">24</div>
                                        <div className="text-xs text-slate-500">Live Incidents</div>
                                    </div>
                                </div>
                                <div className="w-2/3 bg-slate-50 rounded-xl p-4 border border-gray-100 relative">
                                    <div className="absolute top-4 right-4 size-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                                        <span className="material-symbols-outlined text-sm">mic</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
                                        <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
                                        <div className="h-2 w-5/6 bg-slate-200 rounded"></div>
                                    </div>
                                    <div className="mt-8 bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex gap-3 items-center">
                                        <div className="size-8 rounded bg-green-100 flex items-center justify-center text-green-700">
                                            <span className="material-symbols-outlined text-sm">check</span>
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-mobile-navy-900">Compliance Check Passed</div>
                                            <div className="text-[10px] text-slate-500">Standards 3.2(a) Met</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Floating Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 animate-[float_4s_ease-in-out_infinite]">
                                <div className="size-10 rounded-full bg-mobile-teal-500 flex items-center justify-center text-white">
                                    <span className="material-symbols-outlined">auto_awesome</span>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-mobile-navy-900">Automated Coding</div>
                                    <div className="text-xs text-slate-500">Natural language processing complete.</div>
                                </div>
                            </div>
                        </div>
                        {/* Background decorative blobs */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-mobile-teal-200/30 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </section>

            {/* Trusted By */}
            <section className="py-12 border-y border-gray-50 bg-white">
                <div className="max-w-[1400px] mx-auto px-6">
                    <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        {['Opal Health', 'Regis Aged Care', 'Estia Health', 'Bolton Clarke', 'Japara'].map((brand, i) => (
                            <span key={i} className="text-xl font-serif font-bold text-mobile-navy-900">{brand}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Operational Intelligence */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 mb-16 text-center">
                    <span className="text-mobile-teal-600 font-bold text-xs uppercase tracking-widest mb-3 block">Industry Specific Solutions</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-mobile-navy-900">Operational Intelligence for <span className="italic">Every Care Setting</span></h2>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Residential Aged Care", icon: "apartment", color: "bg-green-50 text-green-600" },
                        { title: "Home Care", icon: "home_health", color: "bg-blue-50 text-blue-600" },
                        { title: "Disability Support", icon: "accessible", color: "bg-purple-50 text-purple-600" },
                        { title: "NDIS Care", icon: "volunteer_activism", color: "bg-orange-50 text-orange-600" },
                    ].map((item, i) => (
                        <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl hover:border-mobile-teal-100 transition-all group bg-white">
                            <div className={`size-12 rounded-xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                            </div>
                            <h3 className="font-serif font-bold text-xl text-mobile-navy-900 mb-3">{item.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                Automated SIRS reporting and critical funding evidence collection. Turn static policies into active flows.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Scale Care Stats */}
            <section className="py-24 bg-mobile-gray-50/50">
                <div className="max-w-[1400px] mx-auto px-6 text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-mobile-navy-900 mb-6">Scale care without scaling risk.</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">Traditional documentation slows you down. Elithia moves at the speed of care.</p>
                </div>
                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <span className="material-symbols-outlined text-8xl text-mobile-teal-600">verified</span>
                        </div>
                        <div className="size-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-6">
                            <span className="material-symbols-outlined">check_circle</span>
                        </div>
                        <h3 className="text-5xl font-bold text-mobile-navy-900 mb-2">100%</h3>
                        <p className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-4">Audit Trail</p>
                        <p className="text-sm text-slate-500">Every interaction is cryptographically hashed, timestamped, and mapped to the relevant Aged Care Quality Standards.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group">
                        <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                            <span className="material-symbols-outlined">schedule</span>
                        </div>
                        <h3 className="text-5xl font-bold text-mobile-navy-900 mb-2">2hr/day</h3>
                        <p className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-4">Saved per Clinician</p>
                        <p className="text-sm text-slate-500">Eliminate after-hours charting. Voice-to-text captures notes during care, and AI structures the data effortlessly.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group">
                        <div className="size-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 mb-6">
                            <span className="material-symbols-outlined">bolt</span>
                        </div>
                        <h3 className="text-5xl font-bold text-mobile-navy-900 mb-2">Real-time</h3>
                        <p className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-4">SIRS Readiness</p>
                        <p className="text-sm text-slate-500">Detect potential Serious Incident Response Scheme (SIRS) events immediately. Not weeks later via audit.</p>
                    </div>
                </div>
            </section>

            {/* Infrastructure Flow */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 text-center mb-16">
                    <span className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-3 block">Unified Platform</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-mobile-navy-900">The Infrastructure for <span className="italic">Real-Time Governance</span></h2>
                </div>

                <div className="max-w-4xl mx-auto px-6 relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-200 -z-10 hidden md:block"></div>

                    <div className="flex flex-col gap-8 md:gap-12 items-center">
                        {/* Level 1 */}
                        <div className="bg-white border border-gray-200 rounded-full px-8 py-4 shadow-lg text-center relative z-10 w-full md:w-auto hover:border-mobile-navy-900 transition-colors">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-mobile-navy-900 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Tier 1</div>
                            <h3 className="font-bold text-mobile-navy-900 text-lg">Board & Executive Leadership</h3>
                            <p className="text-xs text-slate-500 mt-1">Real-time Quality Indicator Monitoring • Approved Risk Appetite</p>
                        </div>

                        <span className="material-symbols-outlined text-gray-300">arrow_downward</span>

                        {/* Level 2 */}
                        <div className="bg-mobile-teal-50 border border-mobile-teal-200 rounded-full px-8 py-4 shadow-lg text-center relative z-10 w-full md:w-auto hover:border-mobile-teal-500 transition-colors">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-mobile-teal-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Tier 2</div>
                            <h3 className="font-bold text-mobile-teal-800 text-lg">Clinical Governance & Management</h3>
                            <p className="text-xs text-mobile-teal-600 mt-1">Rapid Root Cause Analysis • Staff Performance Monitoring • Audit Readiness</p>
                        </div>

                        <span className="material-symbols-outlined text-gray-300">arrow_downward</span>

                        {/* Level 3 */}
                        <div className="bg-white border border-gray-200 rounded-full px-8 py-4 shadow-lg text-center relative z-10 w-full md:w-auto hover:border-mobile-navy-900 transition-colors flex items-center gap-4 justify-between">
                            <div className="text-left">
                                <div className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase inline-block mb-1">Tier 3</div>
                                <h3 className="font-bold text-mobile-navy-900 text-lg">Frontline Care Staff (RNs, PCAs)</h3>
                                <p className="text-xs text-slate-500">Voice-First Documentation • Workflows • Bedside Assessments</p>
                            </div>
                            <div className="bg-green-50 border border-green-100 p-2 rounded text-left hidden sm:block">
                                <div className="text-[10px] font-bold text-green-700 flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">check_circle</span> Outcomes</div>
                                <div className="text-[10px] text-green-600">Standard 3.2 Met</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proven Outcomes - Dark Section */}
            <section className="py-24 bg-mobile-navy-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mobile-teal-500/10 rounded-full blur-[100px]"></div>
                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Proven Outcomes</h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-md">See the difference 90 days makes. Faster documentation, 100% compliant incident reporting, and zero funding revenue missed.</p>
                        <div className="inline-flex items-center gap-4 bg-white/5 rounded-lg p-4 border border-white/10">
                            <div className="text-4xl font-bold text-mobile-teal-400">32%</div>
                            <div className="text-sm font-medium text-gray-300">Reduction in admin labor costs</div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-mobile-navy-800 p-6 rounded-xl border border-white/5">
                            <div className="flex justify-between text-sm font-bold text-gray-300 mb-2">
                                <span>Daily Documentation Time (mins/resident)</span>
                                <span className="text-mobile-teal-400">Target &gt; 15 mins</span>
                            </div>
                            <div className="w-full h-4 bg-mobile-navy-900 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-mobile-teal-500 to-mobile-teal-300 w-[25%] rounded-full relative">
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-mobile-navy-900">12 MINS</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-mobile-navy-800 p-6 rounded-xl border border-white/5">
                            <div className="flex justify-between text-sm font-bold text-gray-300 mb-2">
                                <span>SIRS Reporting Delay (Incident to Report)</span>
                                <span className="text-mobile-teal-400">Target: Immediate</span>
                            </div>
                            <div className="w-full h-4 bg-mobile-navy-900 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-[5%] rounded-full relative"></div>
                            </div>
                            <div className="mt-2 text-xs text-blue-400 font-bold flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">bolt</span> Instant
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance for New Rules */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 mb-16">
                    <span className="text-mobile-teal-600 font-bold text-xs uppercase tracking-widest mb-3 block">New Era Readiness</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-mobile-navy-900 max-w-2xl">Compliance designed for the <span className="italic">new rules.</span></h2>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="flex gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 opacity-60">
                            <div className="size-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-bold text-sm">1</div>
                            <div>
                                <h3 className="font-bold text-mobile-navy-900 mb-1">Legacy Approach</h3>
                                <p className="text-sm text-slate-500">Wait for Audit failure, retrospective entry, disconnected from actual care delivery.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 rounded-xl bg-white border border-mobile-teal-100 shadow-xl relative z-10 transform translate-x-4">
                            <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-mobile-teal-500 text-white p-1 rounded-full shadow-lg z-20">
                                <span className="material-symbols-outlined text-sm">arrow_downward</span>
                            </div>
                            <div className="size-8 rounded-full bg-mobile-teal-100 text-mobile-teal-700 flex items-center justify-center font-bold text-sm">2</div>
                            <div>
                                <h3 className="font-bold text-mobile-navy-900 mb-1">The Elithia Bridge</h3>
                                <p className="text-sm text-slate-500">AI captures, standardizes and verifies clinical data into structured regulatory fields.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 rounded-xl bg-green-50 border border-green-100">
                            <div className="size-8 rounded-full bg-green-200 text-green-700 flex items-center justify-center font-bold text-sm">3</div>
                            <div>
                                <h3 className="font-bold text-mobile-navy-900 mb-1">Outcome</h3>
                                <p className="text-sm text-slate-600">Proactive compliance, richer clinical narratives, and better safety outcomes.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {[
                            { title: "Ambient Capture", desc: "No special devices. AI runs in the background on mobile or tablets, capturing conversations and care interactions instantly without manual notes.", icon: "graphic_eq" },
                            { title: "Automated Coding", desc: "Clinical notes automatically coded to SNOMED-CT and mapped to NDIS/Aged Care Pricing (AN-ACC) to ensure maximum rightful reimbursement.", icon: "account_tree" },
                            { title: "Risk Prevention", desc: "Per-patient logic monitors vitals, moods, and incidents against historical data to flag declines BEFORE they hit the ED.", icon: "shield" }
                        ].map((feat, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="mt-1">
                                    <span className="material-symbols-outlined text-mobile-teal-600">{feat.icon}</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-mobile-navy-900 text-lg mb-2">{feat.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
                                </div>
                            </div>
                        ))}

                        <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                            <h4 className="font-bold text-mobile-navy-900 mb-2">Why It Matters: The Cost of Non-Compliance</h4>
                            <p className="text-xs text-slate-500 mb-4">The 2024 Regulatory Framework introduces stricter penalties for governance failures.</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-2 text-xs font-bold text-red-600">
                                    <span className="size-2 rounded-full bg-red-600"></span> Risk of Sanctions & Accreditation Loss
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-red-600">
                                    <span className="size-2 rounded-full bg-red-600"></span> Civil & Criminal penalties for Directors
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Built for Workflow */}
            <section className="py-24 bg-mobile-navy-900 text-white">
                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <h2 className="font-serif text-4xl font-bold mb-6">Built for the Clinical Workflow</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">We start at the bedside (or lounge room). Tools redesigned for the experience of RNs, AINs, and care workers so compliance actually works.</p>
                        <ul className="space-y-3 mb-8">
                            {['Intelligent voice dictation', 'Offline-first capability', 'Post-acute assessment flows'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="size-5 rounded-full bg-mobile-teal-500 flex items-center justify-center text-mobile-navy-900 text-xs font-bold"><span className="material-symbols-outlined text-xs">check</span></div>
                                    <span className="text-sm font-bold text-gray-200">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="px-6 py-3 bg-white text-mobile-navy-900 font-bold rounded hover:bg-gray-100 transition-colors">Explore Features</button>
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-mobile-navy-800 p-8 rounded-2xl border border-white/10 hover:border-mobile-teal-500/50 transition-colors group">
                            <div className="size-12 rounded bg-mobile-teal-900 text-mobile-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><span className="material-symbols-outlined">mic</span></div>
                            <h3 className="font-bold text-lg mb-2">Voice Ops</h3>
                            <p className="text-sm text-gray-400">Assessments, wound care, medication management.</p>
                        </div>
                        <div className="bg-mobile-navy-800 p-8 rounded-2xl border border-white/10 hover:border-mobile-teal-500/50 transition-colors group">
                            <div className="size-12 rounded bg-blue-900 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><span className="material-symbols-outlined">spa</span></div>
                            <h3 className="font-bold text-lg mb-2">Lifestyle</h3>
                            <p className="text-sm text-gray-400">Activity participation, social engagement logs.</p>
                        </div>
                        <div className="bg-mobile-navy-800 p-8 rounded-2xl border border-white/10 hover:border-mobile-teal-500/50 transition-colors group">
                            <div className="size-12 rounded bg-yellow-900 text-yellow-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><span className="material-symbols-outlined">folder_managed</span></div>
                            <h3 className="font-bold text-lg mb-2">Care Mgrs</h3>
                            <p className="text-sm text-gray-400">Funding improvements, case/family conferencing.</p>
                        </div>
                        <div className="bg-mobile-navy-800 p-8 rounded-2xl border border-white/10 hover:border-mobile-teal-500/50 transition-colors group">
                            <div className="size-12 rounded bg-red-900 text-red-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><span className="material-symbols-outlined">warning</span></div>
                            <h3 className="font-bold text-lg mb-2">Governance</h3>
                            <p className="text-sm text-gray-400">Incident reporting, mandatory reporting, QI.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote */}
            <section className="py-32 bg-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <span className="text-6xl text-gray-200 font-serif">"</span>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-mobile-navy-900 leading-tight mb-8 -mt-6">
                        Elithia didn't just save us time on paperwork. It gave us the visibility to improve our star rating from 3 to 5 within six months by surfacing care gaps we didn't know existed.
                    </h2>
                    <div className="flex flex-col items-center gap-2">
                        <div className="size-16 rounded-full bg-slate-200 overflow-hidden">
                            {/* Avatar Placeholder */}
                            <svg className="w-full h-full text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 24H0V0h24v24z" fill="none" /><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                        </div>
                        <div>
                            <div className="font-bold text-mobile-navy-900">Sarah Jenkins</div>
                            <div className="text-sm text-slate-500">Head of Clinical Governance, Southern Cross Care</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero CTA */}
            <section className="py-12 px-6 bg-white">
                <div className="max-w-[1400px] mx-auto rounded-3xl bg-mobile-navy-900 relative overflow-hidden px-6 py-24 text-center">
                    {/* Background Gradients */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(13,148,136,0.2),transparent)]"></div>
                    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-mobile-teal-500/30 rounded-full blur-[100px]"></div>

                    <div className="relative z-10">
                        <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-8">Ready to modernize your compliance?</h2>
                        <p className="text-gray-300 text-lg mb-10">Join the forward-thinking aged care providers using Elithia for better care and effortless compliance.</p>
                        <div className="flex justify-center gap-4">
                            <button className="px-8 py-4 bg-white text-mobile-navy-900 font-bold rounded shadow-lg hover:bg-gray-100 transition-colors">Request a Demo</button>
                            <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/10 transition-colors">Calculate ROI</button>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
}
