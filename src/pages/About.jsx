import { Link } from 'react-router-dom';
import { Linkedin, Shield, Zap, Cpu, CheckCircle, Eye } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-base)] transition-colors duration-500 font-sans">
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <span className="section-label">Our Story</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-4">
                        About NexEraEco
                    </h1>
                    <p className="text-xl text-[var(--text-muted)] mt-6 max-w-3xl mx-auto font-light leading-relaxed">
                        Building the next generation of rooftop solar technology to accelerate clean energy adoption.
                    </p>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <div className="card group hover:border-[var(--emerald-accent)]/20">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-[var(--emerald-accent)]">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--text-primary)]">Our Mission</h3>
                            </div>
                            <p className="text-[var(--text-muted)] leading-relaxed font-light">
                                To make rooftop solar more efficient and accessible for everyone. We believe that smarter
                                solar technology can accelerate the transition to clean energy, one rooftop at a time.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="card group hover:border-teal-500/20">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-teal-500/10 rounded-2xl flex items-center justify-center text-[var(--teal-accent)]">
                                    <Eye className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--text-primary)]">Our Vision</h3>
                            </div>
                            <p className="text-[var(--text-muted)] leading-relaxed font-light">
                                A world where every rooftop solar installation operates at peak efficiency. We envision
                                SolarXite becoming the standard for intelligent solar tracking, maximizing clean energy
                                generation across millions of homes and businesses.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why We Started Section */}
            <section className="py-24 bg-gray-500/5 border-y border-[var(--card-border)] px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="section-label">The Beginning</span>
                            <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4 mb-8">
                                Why We Started
                            </h3>
                            <div className="space-y-6">
                                <p className="text-[var(--text-muted)] leading-relaxed font-light">
                                    NexEraEco was born from a simple observation: while ground-mounted solar trackers
                                    have existed for years, rooftop installations—where most residential and commercial
                                    solar lives—were stuck with fixed panels.
                                </p>
                                <p className="text-[var(--text-muted)] leading-relaxed font-light">
                                    We asked: why should rooftop solar owners miss out on the efficiency gains of tracking
                                    technology? That question led us to develop SolarXite—a compact, affordable dual-axis
                                    tracker designed from the ground up for rooftops.
                                </p>
                                <p className="text-[var(--text-muted)] leading-relaxed font-light">
                                    With a patented design and working prototype, we're now on a mission to bring this
                                    technology to market and help rooftop solar reach its full potential.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] opacity-20"></div>
                            <img
                                src="/assets/prototype.jpg"
                                alt="SolarXite Prototype"
                                className="rounded-[40px] shadow-2xl border border-[var(--card-border)] grayscale hover:grayscale-0 transition-all duration-1000 relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-label">The People</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4">
                            Meet Our Team
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {/* Founder */}
                        <div className="card text-center p-12">
                            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-[32px] flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-emerald-500/10">
                                APK
                            </div>
                            <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Akula Praveen Kumar</h4>
                            <p className="text-[var(--emerald-accent)] text-sm mb-6 font-mono font-bold tracking-widest uppercase">Founder & Lead Engineer</p>
                            <p className="text-[var(--text-muted)] text-sm mb-8 font-light leading-relaxed">
                                Driving the vision and technical development of SolarXite.
                                Passionate about renewable energy and sustainable technology.
                            </p>
                            <a
                                href="https://www.linkedin.com/in/praveen-kumar-akula-30a685255/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[var(--emerald-accent)] hover:text-[var(--text-primary)] transition-all font-bold text-sm"
                            >
                                <Linkedin className="w-4 h-4" />
                                LinkedIn Profile
                            </a>
                        </div>

                        {/* Core Team */}
                        <div className="card text-center p-12">
                            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-[32px] flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-teal-500/10">
                                +2
                            </div>
                            <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Core Team</h4>
                            <p className="text-[var(--emerald-accent)] text-sm mb-6 font-mono font-bold tracking-widest uppercase">Engineering & Operations</p>
                            <p className="text-[var(--text-muted)] text-sm mb-8 font-light leading-relaxed">
                                A dedicated 3-member team working across hardware design, embedded systems,
                                and product development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-24 bg-gray-500/5 border-y border-[var(--card-border)] px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-label">Milestones</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4">
                            What We've Achieved
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: <Shield className="w-8 h-8" />,
                                title: 'Design Patent',
                                desc: 'Registered design patent from the Government of India.'
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: 'TRL-4 Prototype',
                                desc: 'Working prototype validated in lab conditions.'
                            },
                            {
                                icon: <Cpu className="w-8 h-8" />,
                                title: 'Active R&D',
                                desc: 'Ongoing development towards outdoor field testing.'
                            }
                        ].map((item, index) => (
                            <div key={index} className="card text-center group">
                                <div className="w-16 h-16 mx-auto bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-[var(--emerald-accent)] mb-8 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{item.title}</h3>
                                <p className="text-[var(--text-muted)] text-sm font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 text-center">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-8">
                        Want to Work With Us?
                    </h2>
                    <p className="text-[var(--text-muted)] mb-12 max-w-xl mx-auto font-light leading-relaxed">
                        We're open to partnerships, investments, and collaborations to heal nature through IoT.
                    </p>
                    <Link to="/contact" className="btn-primary">Get in Touch</Link>
                </div>
            </section>
        </div>
    );
};

export default About;
