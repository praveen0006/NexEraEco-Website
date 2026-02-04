import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, Shield, Zap, Cpu, Send, Download } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoSubject = encodeURIComponent(formData.subject);
        const mailtoBody = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Company: ${formData.company || 'Not specified'}\n\n` +
            `Message:\n${formData.message}`
        );
        window.location.href = `mailto:praveen19121@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    };

    return (
        <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-base)] transition-colors duration-500 font-sans">
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <span className="section-label">Get in Touch</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-4">
                        Contact Us
                    </h1>
                    <p className="text-xl text-[var(--text-muted)] mt-6 max-w-2xl mx-auto font-light leading-relaxed">
                        Interested in SolarXite? We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8">Reach Out</h3>

                                <div className="space-y-8">
                                    {/* Email */}
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-[var(--emerald-accent)] flex-shrink-0 border border-emerald-500/20">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-[var(--text-muted)] text-xs font-mono uppercase tracking-widest mb-1 font-bold">Email</p>
                                            <a href="mailto:praveen19121@gmail.com" className="text-[var(--text-primary)] hover:text-[var(--emerald-accent)] transition-colors font-bold text-lg">
                                                praveen19121@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-[var(--emerald-accent)] flex-shrink-0 border border-emerald-500/20">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-[var(--text-muted)] text-xs font-mono uppercase tracking-widest mb-1 font-bold">Phone</p>
                                            <a href="tel:+918639322024" className="text-[var(--text-primary)] hover:text-[var(--emerald-accent)] transition-colors font-bold text-lg">
                                                +91 86393 22024
                                            </a>
                                        </div>
                                    </div>

                                    {/* LinkedIn */}
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-[var(--emerald-accent)] flex-shrink-0 border border-emerald-500/20">
                                            <Linkedin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-[var(--text-muted)] text-xs font-mono uppercase tracking-widest mb-1 font-bold">LinkedIn</p>
                                            <a
                                                href="https://www.linkedin.com/in/praveen-kumar-akula-30a685255/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[var(--text-primary)] hover:text-[var(--emerald-accent)] transition-colors font-bold text-lg"
                                            >
                                                Praveen Kumar Akula
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pitch Deck Download */}
                            <div className="pt-12 border-t border-[var(--card-border)]">
                                <p className="text-[var(--text-muted)] text-sm mb-6 font-light">Interested in our full technical roadmap?</p>
                                <a
                                    href="/assets/deck.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary group"
                                    download="NexEraEco_PitchDeck.pdf"
                                >
                                    <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                                    Download Pitch Deck
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="card !p-12">
                            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-5 py-4 bg-[var(--input-bg)] border border-[var(--card-border)] rounded-2xl text-[var(--text-primary)] placeholder-slate-500 focus:outline-none focus:border-[var(--emerald-accent)] transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Email Address *</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-5 py-4 bg-[var(--input-bg)] border border-[var(--card-border)] rounded-2xl text-[var(--text-primary)] placeholder-slate-500 focus:outline-none focus:border-[var(--emerald-accent)] transition-colors"
                                            placeholder="you@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Subject *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-5 py-4 bg-[var(--input-bg)] border border-[var(--card-border)] rounded-2xl text-[var(--text-primary)] placeholder-slate-500 focus:outline-none focus:border-[var(--emerald-accent)] transition-colors"
                                        placeholder="Partnership / Inquiry"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-mono font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Message *</label>
                                    <textarea
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={4}
                                        className="w-full px-5 py-4 bg-[var(--input-bg)] border border-[var(--card-border)] rounded-2xl text-[var(--text-primary)] placeholder-slate-500 focus:outline-none focus:border-[var(--emerald-accent)] transition-colors resize-none"
                                        placeholder="Tell us about your project or inquiry..."
                                    />
                                </div>

                                <button type="submit" className="btn-primary w-full justify-center py-5 group">
                                    Send Message
                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* How Can We Help Section */}
            <section className="py-24 border-t border-[var(--card-border)] px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-label">We're Here For</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mt-4">
                            How Can We Help?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: <Shield className="w-8 h-8" />,
                                title: 'EPC Partners',
                                desc: 'Looking to integrate solar tracking into your installations? Let\'s discuss partnership opportunities.',
                                link: '/partners'
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: 'Investors',
                                desc: 'Interested in supporting clean energy innovation? We\'re open to funding discussions.',
                                link: '/contact'
                            },
                            {
                                icon: <Cpu className="w-8 h-8" />,
                                title: 'General Inquiries',
                                desc: 'Have questions about SolarXite or NexEraEco? We\'re happy to help.',
                                link: '/contact'
                            }
                        ].map((item, index) => (
                            <Link key={index} to={item.link} className="card text-center group">
                                <div className="w-16 h-16 mx-auto bg-emerald-500/10 rounded-2xl flex items-center justify-center text-[var(--emerald-accent)] mb-8 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{item.title}</h3>
                                <p className="text-[var(--text-muted)] text-sm font-light leading-relaxed">{item.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
