import { Link } from 'react-router-dom';
import { Lightbulb, Shield, Zap, Cpu, ArrowRight, ExternalLink } from 'lucide-react';

const Products = () => {
    const products = [
        {
            id: 'solarxite',
            name: 'SolarXite',
            tagline: 'Dual-Axis Solar Tracking for Rooftops',
            status: 'TRL-4 Prototype',
            statusColor: 'emerald',
            description: 'Our flagship product—a compact dual-axis solar tracking system designed specifically for rooftop installations. Maximize energy capture from the same roof space.',
            features: ['Dual-axis tracking', 'Rooftop-optimized design', 'Design patent granted', 'Lab validated'],
            stage: 'Lab validation complete. Outdoor field testing pending.',
            link: '/product',
            image: '/assets/model.jpg',
            available: true
        },
        {
            id: 'crop-guard',
            name: 'Smart Crop Guard',
            tagline: 'Animal Intrusion Detection & Precision Irrigation',
            status: 'Research Validated',
            statusColor: 'emerald',
            description: 'A dual-purpose IoT system designed to protect crops from animal intrusion while optimizing water usage through precision irrigation. Developed to synchronize with solar tracking hardware for maximum sustainable efficiency.',
            features: ['Animal Intrusion Detection', 'Precision Irrigation', 'Solar-Sync Hardware', 'IoT Monitoring'],
            stage: 'Core logic published on IEEE Xplore. Hardware in conceptual R&D.',
            link: 'https://ieeexplore.ieee.org/document/11324174',
            image: null,
            available: true,
            external: true
        }
    ];

    return (
        <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-base)] transition-colors duration-500 font-sans">
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <span className="section-label">Our Portfolio</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-4">
                        Products
                    </h1>
                    <p className="text-xl text-[var(--text-muted)] mt-6 max-w-3xl mx-auto font-light leading-relaxed">
                        Innovative clean energy solutions designed to maximize efficiency and accessibility.
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16 md:py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-12">
                        {products.map((product, index) => (
                            <div
                                key={product.id}
                                className={`card !p-8 md:!p-16 ${!product.available ? 'opacity-60' : ''}`}
                            >
                                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                    {/* Image/Placeholder */}
                                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                        {product.image ? (
                                            <div className="relative group">
                                                <div className="absolute inset-0 bg-[var(--emerald-accent)]/20 blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="rounded-[32px] shadow-2xl border border-[var(--card-border)] w-full grayscale hover:grayscale-0 transition-all duration-1000"
                                                />
                                            </div>
                                        ) : (
                                            <div className="aspect-video bg-[var(--input-bg)] rounded-[32px] border border-[var(--card-border)] flex items-center justify-center">
                                                <div className="text-center">
                                                    <Lightbulb className="w-16 h-16 text-[var(--text-muted)] opacity-20 mx-auto mb-4" />
                                                    <p className="text-[var(--text-muted)] font-mono text-sm tracking-widest">COMING SOON</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase ${product.statusColor === 'emerald'
                                                ? 'bg-emerald-500/10 text-[var(--emerald-accent)] border border-emerald-500/20'
                                                : 'bg-slate-500/10 text-[var(--text-muted)] border border-slate-500/20'
                                                }`}>
                                                {product.status}
                                            </span>
                                        </div>

                                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                                            {product.name}
                                        </h2>
                                        <p className="text-[var(--emerald-accent)] text-lg mb-8 font-medium">{product.tagline}</p>

                                        <p className="text-[var(--text-muted)] mb-8 leading-relaxed font-light text-lg">
                                            {product.description}
                                        </p>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-3 mb-10">
                                            {product.features.map((feature, i) => (
                                                <span
                                                    key={i}
                                                    className="px-4 py-2 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl text-sm text-[var(--text-base)] font-medium shadow-sm"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Stage Notice */}
                                        <div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-6 mb-10">
                                            <p className="text-amber-600 dark:text-amber-400 text-sm italic">
                                                <strong className="not-italic mr-2 uppercase tracking-wide">Current Stage:</strong> {product.stage}
                                            </p>
                                        </div>

                                        {product.available && product.link && (
                                            product.external ? (
                                                <a href={product.link} target="_blank" rel="noopener noreferrer" className="btn-secondary group">
                                                    View IEEE Paper
                                                    <ExternalLink className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
                                                </a>
                                            ) : (
                                                <Link to={product.link} className="btn-primary group">
                                                    Learn More
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-24 bg-gray-500/5 border-y border-[var(--card-border)] px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-label">Our Philosophy</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4">
                            How We Build Products
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: <Shield className="w-8 h-8" />,
                                title: 'Validated Claims Only',
                                desc: 'We only share performance data after thorough testing. No inflated promises.'
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: 'Real-World Focus',
                                desc: 'Products designed for practical deployment, not just lab demonstrations.'
                            },
                            {
                                icon: <Cpu className="w-8 h-8" />,
                                title: 'Transparent Progress',
                                desc: 'Clear communication about development stages and timelines.'
                            }
                        ].map((item, index) => (
                            <div key={index} className="card text-center group">
                                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-[var(--card-border)] rounded-2xl flex items-center justify-center text-[var(--emerald-accent)] mb-8 group-hover:scale-110 transition-transform">
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
            <section className="py-24 px-4 text-center">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-8 leading-tight">
                        Interested in Our Products?
                    </h2>
                    <p className="text-[var(--text-muted)] mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        Whether you're an EPC partner, investor, or potential customer, we'd love to discuss how our technology can help you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="btn-primary">Contact Us</Link>
                        <Link to="/partners" className="btn-secondary">Partner With Us</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
