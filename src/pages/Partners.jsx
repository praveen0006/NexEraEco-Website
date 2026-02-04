import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Cpu, ArrowRight, CheckCircle2, Building2, Globe2 } from 'lucide-react';

const Partners = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        location: '',
        experience: '',
        interest: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoSubject = encodeURIComponent(`Pilot Request from ${formData.companyName}`);
        const mailtoBody = encodeURIComponent(
            `PILOT INSTALLATION REQUEST\n\n` +
            `Company: ${formData.companyName}\n` +
            `Contact: ${formData.contactName}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone || 'Not provided'}\n` +
            `Region: ${formData.location}\n` +
            `Annual Installations: ${formData.experience || 'Not specified'}\n\n` +
            `Interest/Notes:\n${formData.interest || 'None provided'}`
        );
        window.location.href = `mailto:praveen19121@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    };

    const [newsletterEmail, setNewsletterEmail] = useState('');

    const handleNewsletter = (e) => {
        e.preventDefault();
        alert(`Thank you for subscribing! We'll send updates to ${newsletterEmail}`);
        setNewsletterEmail('');
    };

    return (
        <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-base)] transition-colors duration-500 font-sans">
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <span className="section-label">EPC Partners</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-4">
                        Differentiate Your Solar Installations
                    </h1>
                    <p className="text-xl text-[var(--text-muted)] mt-6 max-w-3xl mx-auto font-light leading-relaxed">
                        Add dual-axis tracking to your rooftop offerings. Stand out from competitors
                        with technology that delivers measurably more energy from the same roof space.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                        <a href="#pilot-request" className="btn-primary">Request a Pilot</a>
                        <Link to="/product" className="btn-secondary">Learn About SolarXite</Link>
                    </div>
                </div>
            </section>

            {/* Who It's For Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-label">Ideal Partners</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4">
                            Who Is This For?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Building2 className="w-8 h-8" />,
                                title: 'Rooftop Solar EPCs',
                                desc: 'Companies installing solar systems on commercial and residential rooftops looking to offer premium options.'
                            },
                            {
                                icon: <Globe2 className="w-8 h-8" />,
                                title: 'Commercial Installers',
                                desc: 'Teams focused on warehouses, factories, and office buildings where maximizing kWh per square meter matters.'
                            },
                            {
                                icon: <Cpu className="w-8 h-8" />,
                                title: 'System Integrators',
                                desc: 'Companies assembling complete energy solutions who want to add tracking as a value-add component.'
                            }
                        ].map((item, index) => (
                            <div key={index} className="card text-center group">
                                <div className="w-16 h-16 mx-auto bg-emerald-500/10 rounded-2xl flex items-center justify-center text-[var(--emerald-accent)] mb-8 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{item.title}</h3>
                                <p className="text-[var(--text-muted)] text-sm font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Installation Envelope Section */}
            <section className="py-24 bg-gray-500/5 border-y border-[var(--card-border)] px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-label">Technical Specs</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4">
                            Installation Envelope
                        </h2>
                        <p className="text-[var(--text-muted)] mt-4 font-light italic">Key specifications for planning your SolarXite installations</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { label: 'Rooftop Type', value: 'Flat & Low-Slope', note: 'RCC, metal sheet, or reinforced structures' },
                            { label: 'Panel Compatibility', value: 'Standard PV Modules', note: 'Works with most 400W-550W panels' },
                            { label: 'Tracking Range', value: 'Dual-Axis', note: '±45° azimuth, ±30° elevation' },
                            { label: 'Power Supply', value: 'Self-Powered Option', note: 'Can run on panel output or grid' },
                            { label: 'Control System', value: 'Automated', note: 'Light sensors + algorithm-based tracking' },
                            { label: 'Wind Rating', value: 'TBD (Testing)', note: 'Outdoor validation in progress' }
                        ].map((spec, index) => (
                            <div key={index} className="card text-center">
                                <p className="text-[var(--emerald-accent)] text-[10px] font-mono font-bold uppercase tracking-widest mb-4">{spec.label}</p>
                                <p className="text-2xl font-bold text-[var(--text-primary)] mb-2">{spec.value}</p>
                                <p className="text-[var(--text-muted)] text-sm font-light">{spec.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-label">Why Partner</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4">
                            Benefits for EPC Partners
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            { num: 1, title: 'Competitive Differentiation', desc: 'Stand out from other EPCs offering identical fixed-panel installations. SolarXite gives you a unique selling point that competitors don\'t have.' },
                            { num: 2, title: 'Higher Project Value', desc: 'Tracking systems command premium pricing. Increase your average project value while delivering measurably better ROI to customers.' },
                            { num: 3, title: 'Early Mover Advantage', desc: 'Be among the first to offer rooftop tracking in your region. Build expertise and customer references before competitors catch up.' },
                            { num: 4, title: 'Technical Support', desc: 'We provide installation guidance, training, and ongoing technical support to ensure successful deployments.' }
                        ].map((benefit) => (
                            <div key={benefit.num} className="card !p-8 flex gap-6 group">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-xl font-bold text-white flex-shrink-0 shadow-lg shadow-emerald-500/10">
                                    {benefit.num}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--emerald-accent)] transition-colors">{benefit.title}</h3>
                                    <p className="text-[var(--text-muted)] text-sm font-light leading-relaxed">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study Section */}
            <section id="case-studies" className="py-24 bg-gray-500/5 border-y border-[var(--card-border)] px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-label">Results</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4">
                            Pilot Case Studies
                        </h2>
                        <p className="text-[var(--text-muted)] mt-4 font-light italic">Performance data from pilot installations (coming after outdoor validation)</p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="card text-center !p-12">
                            <Zap className="w-12 h-12 text-[var(--emerald-accent)] mx-auto mb-6 animate-pulse" />
                            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Pilot Data Coming Soon</h3>
                            <p className="text-[var(--text-muted)] mb-10 font-light leading-relaxed">
                                We're currently in lab validation (TRL-4) with outdoor testing planned next.
                                Once we have real-world performance data, we'll publish detailed case studies.
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-left max-w-md mx-auto mb-10">
                                {['Location & Weather', 'System Size (kW)', 'Baseline Output', 'Tracked Output', 'Energy Gain %', 'ROI Analysis'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-[var(--text-muted)] text-sm font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-[var(--emerald-accent)]" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <a href="#pilot-request" className="btn-primary">Be Part of Our Pilot Program</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pilot Request Form */}
            <section id="pilot-request" className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-label">Get Started</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4">
                            Request a Pilot Installation
                        </h2>
                        <p className="text-[var(--text-muted)] mt-4 font-light">Interested in being an early adopter? Tell us about your installation capabilities.</p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <form onSubmit={handleSubmit} className="card !p-12 space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-xs font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Company Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.companyName}
                                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                        className="w-full px-5 py-4 bg-[var(--input-bg)] border border-[var(--card-border)] rounded-2xl text-[var(--text-primary)] placeholder-slate-500 focus:outline-none focus:border-[var(--emerald-accent)] transition-colors"
                                        placeholder="Company name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Contact Person *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.contactName}
                                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                                        className="w-full px-5 py-4 bg-[var(--input-bg)] border border-[var(--card-border)] rounded-2xl text-[var(--text-primary)] placeholder-slate-500 focus:outline-none focus:border-[var(--emerald-accent)] transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-xs font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Email *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-5 py-4 bg-[var(--input-bg)] border border-[var(--card-border)] rounded-2xl text-[var(--text-primary)] placeholder-slate-500 focus:outline-none focus:border-[var(--emerald-accent)] transition-colors"
                                        placeholder="you@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Phone</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-5 py-4 bg-[var(--input-bg)] border border-[var(--card-border)] rounded-2xl text-[var(--text-primary)] placeholder-slate-500 focus:outline-none focus:border-[var(--emerald-accent)] transition-colors"
                                        placeholder="+91 00000 00000"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Primary Operating Region *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    className="w-full px-5 py-4 bg-[var(--input-bg)] border border-[var(--card-border)] rounded-2xl text-[var(--text-primary)] placeholder-slate-500 focus:outline-none focus:border-[var(--emerald-accent)] transition-colors"
                                    placeholder="e.g., Bengaluru, Hubballi"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">What interests you most?</label>
                                <textarea
                                    value={formData.interest}
                                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                                    rows={4}
                                    className="w-full px-5 py-4 bg-[var(--input-bg)] border border-[var(--card-border)] rounded-2xl text-[var(--text-primary)] placeholder-slate-500 focus:outline-none focus:border-[var(--emerald-accent)] transition-colors resize-none"
                                    placeholder="Tell us about your customer needs..."
                                />
                            </div>

                            <button type="submit" className="btn-primary w-full justify-center group">
                                Submit Pilot Request
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partners;
