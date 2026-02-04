import { Link } from 'react-router-dom';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[var(--bg-base)] border-t border-[var(--card-border)] relative z-10 font-sans transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/assets/logo.png" alt="NexEraEco" className="h-10 w-10 rounded-lg shadow-lg" />
                            <span className="text-xl font-bold text-[var(--text-primary)]">NexEraEco</span>
                        </div>
                        <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-8 font-light">
                            Building the next generation of rooftop solar technology.
                            Empowering clean energy adoption through innovation.
                        </p>
                        <div className="inline-flex flex-col gap-1 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                            <p className="text-[var(--emerald-accent)] text-[10px] font-mono font-bold uppercase tracking-widest">Current Stage</p>
                            <p className="text-[var(--text-primary)] text-sm font-medium">TRL-4 Prototype</p>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-[var(--text-primary)] font-bold mb-6 text-sm uppercase tracking-widest">Products</h4>
                        <ul className="space-y-4">
                            <li><Link to="/products" className="text-[var(--text-muted)] hover:text-[var(--emerald-accent)] transition-all text-sm flex items-center gap-2 group">
                                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                All Products
                            </Link></li>
                            <li><Link to="/product" className="text-[var(--text-muted)] hover:text-[var(--emerald-accent)] transition-all text-sm flex items-center gap-2 group">
                                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                SolarXite
                            </Link></li>
                            <li><Link to="/prototype" className="text-[var(--text-muted)] hover:text-[var(--emerald-accent)] transition-all text-sm flex items-center gap-2 group">
                                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                Interactive Prototype
                            </Link></li>
                        </ul>
                    </div>

                    {/* Partners & Company */}
                    <div>
                        <h4 className="text-[var(--text-primary)] font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-[var(--text-muted)] hover:text-[var(--emerald-accent)] transition-all text-sm flex items-center gap-2 group">
                                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                About Us
                            </Link></li>
                            <li><Link to="/careers" className="text-[var(--text-muted)] hover:text-[var(--emerald-accent)] transition-all text-sm flex items-center gap-2 group">
                                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                Careers
                            </Link></li>
                            <li><Link to="/contact" className="text-[var(--text-muted)] hover:text-[var(--emerald-accent)] transition-all text-sm flex items-center gap-2 group">
                                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                Contact
                            </Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-[var(--text-primary)] font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:praveen19121@gmail.com" className="text-[var(--text-muted)] hover:text-[var(--emerald-accent)] transition-all text-sm flex items-center gap-3">
                                    <Mail className="w-4 h-4" />
                                    praveen19121@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/praveen-kumar-akula-30a685255/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--emerald-accent)] transition-all text-sm flex items-center gap-3">
                                    <Linkedin className="w-4 h-4" />
                                    LinkedIn Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-10 border-t border-[var(--card-border)] flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[var(--text-muted)] text-xs font-light">
                        © 2026 NexEraEco. All rights reserved. Registered Design Patent pending.
                    </p>
                    <div className="flex items-center gap-8">
                        <Link to="/partners" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] text-xs transition-colors">Partner Terms</Link>
                        <Link to="/investors" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] text-xs transition-colors">Investor Relations</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
