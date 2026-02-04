import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Cpu, ArrowRight, ChevronDown, CheckCircle2, Award, FileText, Download, Info } from 'lucide-react';

const Product = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            question: "Why not just use fixed panels?",
            answer: "Fixed panels are simpler, but they only capture optimal sunlight for a few hours each day. SolarXite's dual-axis tracking keeps panels pointed at the sun from sunrise to sunset, increasing energy capture by 25-40%. For rooftops with limited space, this means significantly more power from the same area."
        },
        {
            question: "Why not just add more panels instead?",
            answer: "More panels require more roof space, more mounting hardware, and higher upfront costs. With SolarXite, you get more energy from fewer panels—ideal for space-constrained rooftops where every square meter matters."
        },
        {
            question: "What about maintenance concerns?",
            answer: "SolarXite is designed for minimal maintenance. The tracking mechanism uses sealed, weather-resistant components with an expected lifespan matching the solar panels themselves. Routine maintenance is limited to periodic visual inspections."
        },
        {
            question: "Is it suitable for all rooftops?",
            answer: "SolarXite is designed for flat and low-slope rooftops with adequate structural capacity. We recommend a structural assessment before installation. Our team can help evaluate your rooftop's suitability."
        },
        {
            question: "How much power does the tracker consume?",
            answer: "The tracking system consumes minimal power—typically less than 1% of the panel's output. The net energy gain far exceeds this consumption, resulting in significantly higher overall energy production."
        }
    ];

    const validationStages = [
        {
            status: 'completed',
            title: 'Lab Validation',
            stage: 'TRL-4',
            items: ['Functional prototype built', 'Lab testing completed', 'Performance data collected', 'Design patent granted']
        },
        {
            status: 'current',
            title: 'Outdoor Testing',
            stage: 'TRL-5',
            items: ['Field prototype deployment', 'Real-world performance testing', 'Weather resilience validation', 'Comparative analysis with fixed panels']
        },
        {
            status: 'future',
            title: 'Pilot Deployment',
            stage: 'TRL-6',
            items: ['Partner installation sites', 'Long-term monitoring', 'User feedback integration', 'Manufacturing preparation']
        }
    ];

    return (
        <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-base)] transition-colors duration-500 font-sans">
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <span className="section-label">Our Technology</span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[var(--text-primary)] mt-4">
                        SolarXite
                    </h1>
                    <p className="text-xl text-[var(--text-muted)] mt-6 max-w-3xl mx-auto font-light leading-relaxed">
                        Dual-axis solar tracking hardware designed specifically for rooftop installations.
                        Maximize your solar output without expanding your footprint.
                    </p>
                </div>
            </section>

            {/* Problem/Solution Section */}
            <section className="py-16 md:py-24 px-4 text-center">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Problem */}
                        <div className="card bg-red-500/[0.02] border-red-500/10 !p-12">
                            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">The Problem</h3>
                            <p className="text-[var(--text-base)] font-light leading-relaxed">
                                Traditional fixed-angle rooftop solar panels capture only a fraction of available sunlight.
                                As the sun moves across the sky, fixed panels lose efficiency—especially during morning and
                                evening hours. This means you're leaving 25-40% of potential energy on the table.
                            </p>
                        </div>
                        {/* Solution */}
                        <div className="card bg-emerald-500/[0.02] border-emerald-500/10 !p-12">
                            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Our Solution</h3>
                            <p className="text-[var(--text-base)] font-light leading-relaxed">
                                SolarXite brings smart, automated dual-axis tracking to rooftops. Our system continuously
                                adjusts panel orientation to follow the sun's path, maximizing energy capture throughout
                                the day. Designed for rooftop constraints: compact, lightweight, and easy to integrate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-24 bg-gray-500/5 border-y border-[var(--card-border)] px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-label">The Technology</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4">
                            How It Works
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {[
                            { step: 1, title: 'Light Sensing', desc: 'Precision light sensors detect the sun\'s position in real-time, calculating optimal panel orientation.' },
                            { step: 2, title: 'Smart Control', desc: 'Our intelligent controller processes sensor data and commands the dual-axis motors for precise positioning.' },
                            { step: 3, title: 'Continuous Tracking', desc: 'The system continuously adjusts throughout the day, maintaining perpendicular alignment with sunlight.' }
                        ].map((item) => (
                            <div key={item.step} className="text-center group">
                                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{item.title}</h3>
                                <p className="text-[var(--text-muted)] font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Section */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="section-label">Visual</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4">
                            Product Gallery
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { img: '/assets/model.jpg', title: '3D Model Render', desc: 'Design visualization' },
                            { img: '/assets/prototype.jpg', title: 'Working Prototype', desc: 'TRL-4 validated lab prototype' },
                            { img: '/assets/patent.png', title: 'Design Patent', desc: 'Registered with Government of India' }
                        ].map((item, idx) => (
                            <div key={idx} className="card !p-2 group">
                                <div className="aspect-square rounded-2xl overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all duration-700">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">{item.title}</h4>
                                    <p className="text-[var(--text-muted)] text-sm font-light">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IP & Recognition */}
            <section className="py-24 bg-gray-500/5 border-y border-[var(--card-border)] px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-16">
                        <span className="section-label">Intellectual Property</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4">
                            IP & Recognition
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Patent Card */}
                        <div className="card !p-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-[var(--emerald-accent)] mb-8">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Design Patent</h3>
                            <div className="space-y-2 text-[var(--text-muted)] text-sm font-light mb-8">
                                <p><strong className="text-[var(--text-primary)] not-italic">Patent No:</strong> 428970-001</p>
                                <p><strong className="text-[var(--text-primary)] not-italic">Date:</strong> September 2024</p>
                                <p><strong className="text-[var(--text-primary)] not-italic">Authority:</strong> Government of India</p>
                            </div>
                            <a
                                href="/assets/patent.pdf"
                                target="_blank"
                                className="inline-flex items-center gap-2 text-[var(--emerald-accent)] hover:opacity-80 transition-opacity font-bold"
                            >
                                <FileText className="w-4 h-4" />
                                View Certificate
                            </a>
                        </div>

                        {/* Recognition Card */}
                        <div className="card !p-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-8">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Recognition</h3>
                            <div className="space-y-4 text-[var(--text-muted)] font-light">
                                <p className="leading-relaxed">
                                    Shortlisted for the <strong className="text-[var(--text-primary)]">MisFits Innovation Program</strong>,
                                    recognizing market-disruptive potential in clean energy hardware.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Validation Section */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="section-label">Progress</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4">
                            Validation & Testing
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {validationStages.map((stage, index) => (
                            <div
                                key={index}
                                className={`card !p-10 ${stage.status === 'completed'
                                    ? 'border-emerald-500/20 bg-emerald-500/[0.02]'
                                    : stage.status === 'current'
                                        ? 'border-[var(--emerald-accent)]/50 border-dashed animate-pulse'
                                        : 'opacity-50'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${stage.status === 'completed'
                                        ? 'bg-emerald-500/10 text-[var(--emerald-accent)]'
                                        : stage.status === 'current'
                                            ? 'bg-emerald-500/20 text-[var(--emerald-accent)]'
                                            : 'bg-slate-500/10 text-[var(--text-muted)]'
                                        }`}>
                                        {stage.status === 'completed' ? '✓ Complete' : stage.status === 'current' ? '→ Current' : '○ Future'}
                                    </span>
                                    <span className="text-[var(--text-muted)] text-sm font-mono font-bold tracking-tighter">{stage.stage}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">{stage.title}</h3>
                                <ul className="space-y-4">
                                    {stage.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-[var(--text-muted)] text-sm font-light">
                                            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${stage.status === 'completed' ? 'text-[var(--emerald-accent)]' : 'text-slate-600'
                                                }`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product FAQ */}
            <section id="faq" className="py-24 bg-gray-500/5 border-y border-[var(--card-border)] px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-label">F.A.Q</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4">
                            Questions?
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="card !p-0 overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--card-bg)] transition-colors"
                                >
                                    <span className="font-bold text-[var(--text-primary)]">{faq.question}</span>
                                    <ChevronDown className={`w-5 h-5 text-[var(--text-muted)] transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 border-t border-[var(--card-border)]' : 'max-h-0'}`}>
                                    <div className="p-6 text-[var(--text-muted)] font-light leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-16 bg-amber-500/5 border border-amber-500/10 rounded-2xl p-6 italic">
                        <div className="flex gap-4">
                            <Info className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                                <strong className="not-italic text-amber-600 dark:text-amber-400">INDICATIVE DATA:</strong> Performance figures are based on lab testing and mathematical simulations.
                                Field validation is ongoing. Results may vary by location and installation quality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 text-center">
                <div className="max-w-5xl mx-auto card !p-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-8">
                        Interested in SolarXite?
                    </h2>
                    <p className="text-[var(--text-muted)] mb-12 max-w-2xl mx-auto font-light leading-relaxed text-lg">
                        Whether you're an EPC partner, investor, or potential customer, we'd love to hear from you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="btn-primary">Get in Touch</Link>
                        <Link to="/partners" className="btn-secondary">EPC Partnerships</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Product;
