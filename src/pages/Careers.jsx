import { Link } from 'react-router-dom';
import { Rocket, Leaf, Cpu, BookOpen, Users, Shield, Briefcase, Mail } from 'lucide-react';

const Careers = () => {
    return (
        <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-base)] transition-colors duration-500 font-sans">
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <span className="section-label">Join Our Team</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-4">
                        Careers at NexEraEco
                    </h1>
                    <p className="text-xl text-[var(--text-muted)] mt-6 max-w-3xl mx-auto font-light leading-relaxed">
                        Help us build the future of rooftop solar technology. We're looking for passionate
                        individuals who want to make a real impact in clean energy.
                    </p>
                </div>
            </section>

            {/* Current Stage Notice */}
            <section className="py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-[40px] p-10 text-center backdrop-blur-sm">
                        <h4 className="text-[var(--emerald-accent)] font-mono font-bold tracking-[0.2em] uppercase text-xs mb-4">Startup Stage</h4>
                        <p className="text-[var(--text-muted)] font-light max-w-2xl mx-auto leading-relaxed">
                            NexEraEco is currently a <strong className="text-[var(--text-primary)]">3-member startup</strong>.
                            We're at <strong className="text-[var(--text-primary)]">TRL-4</strong> with a validated working prototype and are actively preparing for outdoor field testing.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Join Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-label">Why NexEraEco</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4">
                            Why Join Us?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Rocket className="w-8 h-8" />,
                                title: 'Ground Floor',
                                desc: 'Join at the earliest stage and help shape the company\'s direction and culture.'
                            },
                            {
                                icon: <Leaf className="w-8 h-8" />,
                                title: 'Climate Impact',
                                desc: 'Work on technology that directly contributes to clean energy adoption and sustainability.'
                            },
                            {
                                icon: <Cpu className="w-8 h-8" />,
                                title: 'Real Engineering',
                                desc: 'Work on tangible hardware products—from prototyping to production.'
                            },
                            {
                                icon: <BookOpen className="w-8 h-8" />,
                                title: 'Steep Learning',
                                desc: 'Experience a rapid growth curve hands-on across multiple engineering domains.'
                            },
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: 'Zero Bureaucracy',
                                desc: 'Small team, direct communication, and immediate impact on every decision.'
                            },
                            {
                                icon: <Shield className="w-8 h-8" />,
                                title: 'Patented Tech',
                                desc: 'Build with IP-protected innovation that has global market disruption potential.'
                            }
                        ].map((item, index) => (
                            <div key={index} className="card group">
                                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-[var(--emerald-accent)] mb-8 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{item.title}</h3>
                                <p className="text-[var(--text-muted)] text-sm font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Areas We're Looking For */}
            <section className="py-24 bg-gray-500/5 border-y border-[var(--card-border)] px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="section-label">Future Openings</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4">
                            Upcoming Talents
                        </h2>
                        <p className="text-[var(--text-muted)] mt-6 max-w-2xl mx-auto font-light">
                            While we don't have formal openings today, we're building a network of talented individuals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            { title: 'Mechanical Design', desc: 'Product casing, structural integrity, and CAD' },
                            { title: 'Embedded Systems', desc: 'Firmware development (C++), motor control logic' },
                            { title: 'IoT & Software', desc: 'Monitoring dashboards, cloud integration (AWS/GCP)' },
                            { title: 'Electronics & PCBs', desc: 'Circuit design, power management, sensor fusion' }
                        ].map((role, index) => (
                            <div key={index} className="card !p-8 flex items-start gap-6 hover:bg-[var(--card-bg)] transition-colors">
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-[var(--emerald-accent)] flex-shrink-0">
                                    <Briefcase className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1">{role.title}</h4>
                                    <p className="text-[var(--text-muted)] text-sm font-light leading-relaxed">{role.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Express Interest CTA */}
            <section className="py-32 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="p-16 md:p-24 rounded-[64px] bg-gradient-to-br from-emerald-600/10 to-teal-600/10 border border-emerald-500/20 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-8">
                                Interested in Joining?
                            </h2>
                            <p className="text-[var(--text-muted)] mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                                Share your background and your vision for a greener future. We're always looking for the next spark of innovation.
                            </p>
                            <Link to="/contact" className="btn-primary">
                                <Mail className="w-5 h-5" />
                                Express Interest
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
