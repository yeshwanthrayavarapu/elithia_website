
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MobilePage() {
    return (
        <div className="min-h-screen bg-white font-sans text-mobile-navy-900 selection:bg-mobile-teal-100 selection:text-mobile-navy-900">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 bg-slate-50/50 relative overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider mb-6">
                            <span className="size-1.5 rounded-full bg-green-600 animate-pulse"></span> Live Operational Sync
                        </div>
                        <h1 className="font-serif text-5xl md:text-6xl font-bold text-mobile-navy-900 mb-6 leading-tight">
                            Built for the <br /><span className="italic text-mobile-teal-600">Clinical Workflow.</span>
                        </h1>
                        <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                            Frontline documentation, guided compliance, and voice-first data capture — designed for the reality of care. Audit-Ready from day one.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-mobile-navy-900 text-white font-bold rounded shadow-lg hover:bg-mobile-navy-800 transition-colors">Start Platform Demo</button>
                            <button className="px-6 py-3 bg-white text-mobile-navy-900 font-bold rounded shadow border border-gray-200 hover:bg-gray-50 transition-colors">View Platform Tour</button>
                        </div>
                    </div>
                    <div className="relative flex justify-center">
                        {/* Phone Mockup */}
                        <div className="w-[300px] bg-mobile-navy-900 rounded-[3rem] p-4 shadow-2xl border-4 border-gray-800 relative z-10">
                            <div className="bg-white rounded-[2.2rem] overflow-hidden h-[600px] relative">
                                {/* Phone Status Bar */}
                                <div className="h-6 bg-white flex justify-between items-center px-6 text-[10px] font-bold text-gray-800">
                                    <span>9:41</span>
                                    <div className="flex gap-1">
                                        <span className="material-symbols-outlined text-[10px]">signal_cellular_alt</span>
                                        <span className="material-symbols-outlined text-[10px]">wifi</span>
                                        <span className="material-symbols-outlined text-[10px]">battery_full</span>
                                    </div>
                                </div>

                                {/* App Content */}
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <div className="text-xs text-slate-400">Good Morning,</div>
                                            <div className="font-serif font-bold text-xl text-mobile-navy-900">Sarah Jenkins</div>
                                        </div>
                                        <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">S</div>
                                    </div>

                                    <div className="bg-mobile-teal-50 rounded-2xl p-4 mb-6 relative overflow-hidden">
                                        <div className="text-xs font-bold text-mobile-teal-700 mb-1">Shift: 07:00 - 15:00</div>
                                        <div className="text-xs text-mobile-teal-600 mb-2">Wing B</div>
                                        <div className="h-1 bg-mobile-teal-200 rounded-full w-full mb-1">
                                            <div className="h-full bg-mobile-teal-500 w-1/3 rounded-full"></div>
                                        </div>
                                    </div>

                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Priority Tasks (3)</h3>

                                    <div className="space-y-3">
                                        <div className="bg-white border border-red-100 rounded-xl p-4 shadow-sm">
                                            <div className="flex justify-between mb-2">
                                                <div className="font-bold text-sm text-mobile-navy-900">Insulin Administration</div>
                                                <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded">OVERDUE</span>
                                            </div>
                                            <div className="text-xs text-slate-500">Resident: Michael Chen (Room 102)</div>
                                            <button className="w-full mt-3 py-2 bg-red-50 text-red-600 font-bold text-xs rounded hover:bg-red-100 transition-colors flex items-center justify-center gap-1">
                                                <span className="material-symbols-outlined text-sm">edit_document</span> Log Now
                                            </button>
                                        </div>

                                        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                                            <div className="flex justify-between mb-2">
                                                <div className="font-bold text-sm text-mobile-navy-900">Morning Hygiene</div>
                                                <span className="text-[10px] font-bold text-mobile-teal-600 bg-mobile-teal-50 px-2 py-0.5 rounded">10:00 AM</span>
                                            </div>
                                            <div className="text-xs text-slate-500">Resident: Anna Smith (Room 104)</div>
                                            <button className="w-full mt-3 py-2 bg-slate-50 text-slate-600 font-bold text-xs rounded hover:bg-slate-100 transition-colors">Start Timer</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Mic Button */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 size-14 bg-mobile-navy-900 rounded-full flex items-center justify-center text-white shadow-xl shadow-mobile-navy-900/30">
                                    <span className="material-symbols-outlined text-2xl">mic</span>
                                </div>
                            </div>
                        </div>

                        {/* Background Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-mobile-teal-200/20 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </section>

            {/* Document Care Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-[1400px] mx-auto mb-16">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-mobile-navy-900 mb-6">Document Care — <span className="italic text-mobile-teal-600">As It Happens</span></h2>
                    <p className="text-slate-500 max-w-2xl">Capture clinical data at the source. Tools designed for the speed of frontline work, creating structured data instantly without the admin overhead.</p>
                </div>

                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Voice-to-Notes", icon: "graphic_eq", desc: "Speak naturally. Our engine parses voice commands into structured SOAP notes instantly, removing manual typing." },
                        { title: "Time & Task Capture", icon: "timer", desc: "Integrated active timers track precise care delivery duration automatically, ensuring billing accuracy." },
                        { title: "Evidence Capture", icon: "camera_alt", desc: "Securely document incidents with photos. Automatic location tagging and immutable timestamps prevent disputes." }
                    ].map((item, i) => (
                        <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-shadow bg-white group">
                            <div className="bg-slate-50 h-48 rounded-xl mb-8 flex items-center justify-center relative overflow-hidden">
                                {/* Abstract visual for each card */}
                                {i === 0 && <span className="material-symbols-outlined text-6xl text-mobile-teal-300 animate-pulse">graphic_eq</span>}
                                {i === 1 && <span className="font-mono text-4xl font-bold text-mobile-teal-600">00:14:23</span>}
                                {i === 2 && <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400&h=300" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform" alt="Tablet usage" />}
                            </div>
                            <div className="flex gap-4 mb-4">
                                <span className="material-symbols-outlined text-mobile-teal-600">{item.icon}</span>
                                <h3 className="font-bold text-xl text-mobile-navy-900">{item.title}</h3>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-[1400px] mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg">
                        <span className="material-symbols-outlined text-mobile-teal-600 mt-1">wifi_off</span>
                        <div>
                            <h4 className="font-bold text-mobile-navy-900 text-sm">Full Offline Sync</h4>
                            <p className="text-xs text-slate-500 mt-1">Internet isn't guaranteed in every room. Elithia stores data locally on device and syncs seamlessly with conflict resolution logic when connectivity is restored.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg">
                        <span className="material-symbols-outlined text-mobile-teal-600 mt-1">history</span>
                        <div>
                            <h4 className="font-bold text-mobile-navy-900 text-sm">Re-traceable Timestamps</h4>
                            <p className="text-xs text-slate-500 mt-1">Blockchain-style event logging creates a defensible, undeniable record of every interaction.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg">
                        <span className="material-symbols-outlined text-mobile-teal-600 mt-1">quiz</span>
                        <div>
                            <h4 className="font-bold text-mobile-navy-900 text-sm">Full History Query</h4>
                            <p className="text-xs text-slate-500 mt-1">Complete audit trails provide instants for compliance review without IT requests.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinical Intelligence Engine */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-mobile-teal-600 font-bold text-xs uppercase tracking-widest mb-3 block">Technical Superiority</span>
                        <h2 className="font-serif text-4xl font-bold text-mobile-navy-900 mb-6">The Clinical Intelligence Engine.</h2>
                        <p className="text-slate-500 mb-8 leading-relaxed">More than just transcription. Our proprietary AI is tuned for the chaotic reality of care environments, ensuring 99.9% accuracy in clinical contexts.</p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="size-10 rounded bg-white text-mobile-teal-600 shadow-sm flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined">medical_services</span></div>
                                <div>
                                    <h4 className="font-bold text-mobile-navy-900">Care-Tuned Terminology</h4>
                                    <p className="text-sm text-slate-500 mt-1">Recognizes 50,000+ specialized clinical terms, abbreviations, and floor slang that generic models miss.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="size-10 rounded bg-white text-mobile-teal-600 shadow-sm flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined">format_list_bulleted</span></div>
                                <div>
                                    <h4 className="font-bold text-mobile-navy-900">Context-Aware Structuring</h4>
                                    <p className="text-sm text-slate-500 mt-1">Automatically sorts unstructured speech into formatted SOAP notes, Vitals, and Incident fields.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="size-10 rounded bg-white text-mobile-teal-600 shadow-sm flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined">privacy_tip</span></div>
                                <div>
                                    <h4 className="font-bold text-mobile-navy-900">Smart PII Redaction</h4>
                                    <p className="text-sm text-slate-500 mt-1">On-device processing removes patient names and sensitive identifiers before cloud transmission.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                        <div className="flex items-start gap-4 mb-8">
                            <span className="material-symbols-outlined text-mobile-teal-300 text-4xl">mic</span>
                            <div className="bg-slate-100 p-4 rounded-lg rounded-tl-none text-slate-600 italic text-sm">
                                "Patient in 302 refusing meds again, claiming nausea. BP is 140 over 90."
                            </div>
                        </div>
                        <div className="flex justify-center mb-8">
                            <span className="material-symbols-outlined text-gray-300">arrow_downward</span>
                        </div>
                        <div className="border border-mobile-teal-100 rounded-xl overflow-hidden">
                            <div className="bg-mobile-teal-50 px-4 py-2 border-b border-mobile-teal-100 flex justify-between items-center">
                                <span className="text-[10px] font-bold text-mobile-teal-700 uppercase">Structured Output</span>
                                <span className="text-[10px] font-bold text-white bg-green-500 px-2 py-0.5 rounded">High Confidence</span>
                            </div>
                            <div className="p-4 space-y-2 text-sm">
                                <div className="flex justify-between border-b border-gray-50 pb-2">
                                    <span className="text-slate-400">Observation</span>
                                    <span className="font-bold text-mobile-navy-900">Medication Refusal</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-50 pb-2">
                                    <span className="text-slate-400">Reason</span>
                                    <span className="font-bold text-mobile-navy-900">Nausea</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Vitals (BP)</span>
                                    <span className="font-bold text-mobile-navy-900">140/90 mmHg</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tailored Experiences */}
            <section className="py-24 bg-white text-center px-6">
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-mobile-navy-900 mb-6">Tailored Experiences</h2>
                <p className="text-slate-500 max-w-2xl mx-auto mb-16">The interface adapts automatically based on user role, stripping away noise to focus on what matters.</p>

                <div className="flex justify-center gap-4 mb-16">
                    <button className="px-6 py-2 rounded-full bg-mobile-navy-900 text-white font-bold text-sm">Care Worker</button>
                    <button className="px-6 py-2 rounded-full bg-white border border-gray-200 text-slate-500 font-bold text-sm hover:border-mobile-navy-900 transition-colors">Supervisor</button>
                    <button className="px-6 py-2 rounded-full bg-white border border-gray-200 text-slate-500 font-bold text-sm hover:border-mobile-navy-900 transition-colors">Compliance</button>
                </div>

                {/* Role Mockup Area - Using the Phone mockup again but maybe simpler */}
                <div className="max-w-[300px] mx-auto bg-mobile-navy-900 rounded-[3rem] p-4 shadow-2xl border-4 border-gray-800">
                    <div className="bg-white rounded-[2.2rem] overflow-hidden h-[500px] p-6 text-left relative">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">Good Morning</div>
                        <h3 className="font-serif text-2xl font-bold text-mobile-navy-900 mb-8">Sarah Jenkins</h3>

                        <div className="space-y-4">
                            <div className="p-4 rounded-xl border border-red-100 bg-red-50">
                                <div className="flex justify-between mb-1">
                                    <span className="font-bold text-red-700 text-sm">Insulin Administration</span>
                                    <span className="text-[10px] font-bold text-red-500">OVERDUE</span>
                                </div>
                                <div className="text-xs text-red-600 mb-3">Resident: Michael Chen (Room 102)</div>
                                <button className="w-full py-2 bg-white text-red-600 font-bold text-xs rounded border border-red-200 flex items-center justify-center gap-1"><span className="material-symbols-outlined text-sm">edit</span> Log Now</button>
                            </div>

                            <div className="p-4 rounded-xl border border-mobile-teal-100 bg-mobile-teal-50">
                                <div className="flex justify-between mb-1">
                                    <span className="font-bold text-mobile-teal-900 text-sm">Morning Hygiene</span>
                                    <span className="text-[10px] font-bold text-mobile-teal-600">10:00 AM</span>
                                </div>
                                <div className="text-xs text-mobile-teal-700 mb-3">Resident: Anna Smith (Room 104)</div>
                                <button className="w-full py-2 bg-white text-mobile-teal-700 font-bold text-xs rounded border border-mobile-teal-200">Start Timer</button>
                            </div>
                        </div>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 size-12 bg-mobile-navy-900 rounded-full flex items-center justify-center text-white shadow-lg">
                            <span className="material-symbols-outlined">mic</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enterprise Grade Footer Strip */}
            <section className="py-24 bg-white border-t border-gray-100 px-6">
                <div className="max-w-[1400px] mx-auto">
                    <h3 className="font-serif text-2xl font-bold text-mobile-navy-900 mb-12">Enterprise-Grade Infrastructure</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="flex gap-6">
                            <span className="material-symbols-outlined text-mobile-teal-600 text-4xl">wifi_tethering</span>
                            <div>
                                <h4 className="font-bold text-lg text-mobile-navy-900 mb-2">Full Offline Sync</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">Internet isn't guaranteed in every room. Elithia stores data locally on device and syncs seamlessly with conflict resolution logic when connectivity is restored.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <span className="material-symbols-outlined text-mobile-teal-600 text-4xl">lock</span>
                            <div>
                                <h4 className="font-bold text-lg text-mobile-navy-900 mb-2">FIPS-Standard Encryption</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">Security that meets federal requirements. All data at rest on the device and in transit to the cloud is secured with military-grade AES-256 encryption.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
