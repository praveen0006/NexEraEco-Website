import { Link } from 'react-router-dom';
import { Info, BarChart3, Target, ShieldCheck, Milestone, ArrowRight, Download, MessageSquare } from 'lucide-react';

const Investors = () => {
    return (
        <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-base)] transition-colors duration-500 font-sans">
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <span className="section-label">For Investors</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-4">
                        Invest in the Future of Solar
                    </h1>
                    <p className="text-xl text-[var(--text-muted)] mt-6 max-w-3xl mx-auto font-light leading-relaxed">
                        Join us in bringing smart solar tracking technology to millions of rooftops.
                    </p>
                </div>
            </section>

            {/* Current Status Notice */}
            <section className="py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-amber-500/5 border border-amber-500/10 rounded-[32px] p-8 backdrop-blur-sm">
                        <div className="flex items-start gap-6">
                            <Info className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="text-amber-600 dark:text-amber-400 font-bold mb-3 uppercase tracking-wider text-xs">Stage Disclosure</h4>
                                <p className="text-[var(--text-muted)] text-sm leading-relaxed font-light">
                                    NexEraEco is a <strong className="text-[var(--text-primary)]">pre-revenue startup</strong> at <strong className="text-[var(--text-primary)]">TRL-4</strong> (lab-validated prototype).
                                    We have not conducted any commercial pilots or generated revenue. Outdoor field validation is our next milestone.
                                    All investment discussions are speculative at this stage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Opportunity Section */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="section-label">The Opportunity</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4 mb-8">
                                Why Rooftop Solar Tracking?
                            </h2>
                            <div className="space-y-6 text-[var(--text-muted)] leading-relaxed font-light text-lg">
                                <p>
                                    The global rooftop solar market is projected to reach $150+ billion by 2030, yet virtually
                                    all these installations use fixed-angle panels—leaving significant energy potential untapped.
                                </p>
                                <p>
                                    While ground-mounted solar trackers have existed for years, a practical, affordable
                                    tracking solution for rooftops has remained elusive—until now.
                                </p>
                                <p>
                                    SolarXite is designed specifically for this underserved market segment, with a patented
                                    design that addresses the unique constraints of rooftop installations.
                                </p>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[var(--emerald-accent)]/20 blur-[120px] opacity-20"></div>
                            <img
                                src="/assets/model.jpg"
                                alt="SolarXite Technology"
                                className="rounded-[48px] shadow-2xl border border-[var(--card-border)] relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What We've Achieved */}
            <section className="py-24 bg-gray-500/5 border-y border-[var(--card-border)] px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="section-label">Traction</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4">
                            What We've Achieved
                        </h2>
                        <p className="text-[var(--text-muted)] mt-6 font-light italic">Honest milestones without exaggeration</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Target className="w-8 h-8" />,
                                title: 'TRL-4 Prototype',
                                desc: 'Working prototype validated in lab conditions',
                                status: 'complete'
                            },
                            {
                                icon: <ShieldCheck className="w-8 h-8" />,
                                title: 'Design Patent',
                                desc: 'Registered with Government of India',
                                status: 'complete'
                            },
                            {
                                icon: <Milestone className="w-8 h-8" />,
                                title: 'MisFits Shortlist',
                                desc: 'Shortlisted in prestigious innovation program',
                                status: 'complete'
                            },
                            {
                                icon: <Globe2 className="w-8 h-8" />,
                                title: 'Outdoor Testing',
                                desc: 'Field validation planned for next phase',
                                status: 'pending'
                            }
                        ].map((item, index) => (
                            <div key={index} className="card text-center group">
                                <div className="w-16 h-16 mx-auto bg-emerald-500/10 rounded-2xl flex items-center justify-center text-[var(--emerald-accent)] mb-8 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3">{item.title}</h4>
                                <p className="text-[var(--text-muted)] text-sm mb-6 leading-relaxed font-light">{item.desc}</p>
                                <span className={`inline-flex px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${item.status === 'complete'
                                    ? 'bg-emerald-500/10 text-[var(--emerald-accent)] border border-emerald-500/20'
                                    : 'bg-slate-500/10 text-[var(--text-muted)] border border-slate-500/20'
                                    }`}>
                                    {item.status === 'complete' ? '✓ Complete' : '○ Pending'}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* What We Haven't Done Yet */}
                    <div className="mt-20 max-w-3xl mx-auto">
                        <div className="card !p-12">
                            <h4 className="text-xl font-bold text-[var(--text-primary)] mb-8">What We Haven't Done Yet</h4>
                            <ul className="grid sm:grid-cols-2 gap-6">
                                {[
                                    'Outdoor field testing with real weather',
                                    'Commercial pilot installations',
                                    'Revenue generation or sales',
                                    'Manufacturing at scale'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-[var(--text-muted)] text-sm leading-relaxed">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Invest Now */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-label">The Case</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4">
                            Why Consider Early Investment?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: <BarChart3 className="w-6 h-6" />,
                                title: 'First Mover in Niche',
                                desc: 'Few players are focusing on rooftop solar tracking specifically. Early positioning in an underserved market.'
                            },
                            {
                                icon: <ShieldCheck className="w-6 h-6" />,
                                title: 'IP Protection',
                                desc: 'Patented design provides defensibility. Unique approach to rooftop constraints.'
                            },
                            {
                                icon: <Globe2 className="w-6 h-6" />,
                                title: 'Favorable Market',
                                desc: 'Rooftop solar adoption growing rapidly. Energy efficiency increasingly important for ROI.'
                            }
                        ].map((item, index) => (
                            <div key={index} className="card group">
                                <div className="text-[var(--emerald-accent)] mb-6 group-hover:translate-x-1 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{item.title}</h3>
                                <p className="text-[var(--text-muted)] text-sm font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use of Funds */}
            <section className="py-24 bg-gray-500/5 border-y border-[var(--card-border)] px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-label">Fund Allocation</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4">
                            How Funds Would Be Used
                        </h2>
                        <div className="mt-6 flex justify-center">
                            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
                                <span className="text-[var(--text-muted)] text-xs font-mono font-bold uppercase tracking-widest">Total Seeking</span>
                                <span className="text-[var(--emerald-accent)] text-2xl font-bold">₹10 Lakh</span>
                                <span className="text-[var(--text-muted)] text-[10px] font-mono font-bold uppercase tracking-widest bg-slate-500/10 px-2 py-1 rounded-lg">Seed / Grant</span>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        {[
                            { label: 'Prototype Refinement', percent: 60, desc: 'Outdoor validation & TRL-5 transition' },
                            { label: 'Mechanical & Electronics', percent: 25, desc: 'Component optimization & manufacturing prep' },
                            { label: 'Certification', percent: 10, desc: 'Compliance & field certification prep' },
                            { label: 'Operations', percent: 5, desc: 'Admin & patent filing management' }
                        ].map((item, index) => (
                            <div key={index} className="card !p-8">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-[var(--text-primary)] font-bold">{item.label}</span>
                                    <span className="text-[var(--emerald-accent)] font-mono font-bold text-lg">{item.percent}%</span>
                                </div>
                                <div className="w-full bg-[var(--input-bg)] rounded-full h-2 mb-4 overflow-hidden border border-[var(--card-border)]">
                                    <div
                                        className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-1000"
                                        style={{ width: `${item.percent}%` }}
                                    ></div>
                                </div>
                                <p className="text-[var(--text-muted)] text-xs font-light tracking-wide">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 text-center">
                <div className="max-w-3xl mx-auto card !p-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">
                        Interested in Learning More?
                    </h2>
                    <p className="text-[var(--text-muted)] mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        We're happy to discuss our technology, roadmap, and vision with potential investors.
                        Reach out for a conversation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="btn-primary group">
                            <MessageSquare className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                            Start a Conversation
                        </Link>
                        <a
                            href="/assets/deck.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary group"
                            download="NexEraEco_PitchDeck.pdf"
                        >
                            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                            Download Pitch Deck
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Assuming Globe2 is missing from imports
const Globe2 = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
    </svg>
);

export default Investors;
