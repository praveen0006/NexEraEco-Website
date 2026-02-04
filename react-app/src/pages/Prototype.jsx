import { motion } from 'framer-motion';
import { FadeIn } from '../components/ui/Reveal';
import { LayoutGrid, Binary, Zap, Cpu } from 'lucide-react';

const Prototype = () => {
    return (
        <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-base)] transition-colors duration-500 font-sans overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial from-emerald-500/5 via-transparent to-transparent opacity-50"></div>
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--card-border)] to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <FadeIn>
                        <span className="section-label mb-6 inline-block">Prototyping Lab</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-primary)] tracking-tight mb-6 leading-tight">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Anatomy</span>
                        </h1>
                        <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed font-light">
                            A closer look at the engineering behind SolarXite. High-performance hardware built for extreme rooftop conditions.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Image Showcase Section */}
            <section className="py-20 relative px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="relative aspect-video bg-[var(--card-bg)] rounded-[40px] border border-[var(--card-border)] shadow-2xl overflow-hidden group">
                        {/* Prototype Image */}
                        <img
                            src="/assets/prototype.jpg"
                            alt="SolarXite Prototype"
                            className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] via-transparent to-transparent opacity-90 transition-colors duration-500"></div>

                        <div className="absolute bottom-10 left-10">
                            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2 transition-colors duration-500">SolarXite Build_01</h2>
                            <p className="text-[var(--emerald-accent)] font-mono text-xs uppercase tracking-[0.3em] font-bold">Hardware Validation Stage</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bento Grid Gallery */}
            <section className="py-24 bg-gray-500/5 border-y border-[var(--card-border)] px-4">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Craftsmanship Details</h2>
                            <p className="text-[var(--text-muted)] font-mono text-xs tracking-widest uppercase">DESIGNED & ASSEMBLED IN-HOUSE</p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Large Main Item */}
                        <div className="md:col-span-2 md:row-span-2 min-h-[500px] relative group overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)]">
                            <img src="/assets/model.jpg" alt="Assembly" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
                                <div>
                                    <h4 className="text-[var(--text-primary)] font-bold text-2xl">Main Assembly</h4>
                                    <p className="text-[var(--text-base)] text-sm mt-2 font-light">Full system integration test with dual-axis movement capability.</p>
                                </div>
                            </div>
                        </div>

                        {/* Build Detail */}
                        <div className="md:col-span-2 card !p-12 flex flex-col justify-center">
                            <div className="mb-6">
                                <span className="text-[var(--emerald-accent)] font-mono text-xs uppercase tracking-[0.2em] font-bold">Build Detail 03</span>
                                <h3 className="text-3xl font-bold text-[var(--text-primary)] mt-3">Structural Frame</h3>
                            </div>
                            <p className="text-[var(--text-muted)] leading-relaxed italic text-lg font-light">
                                "Lightweight, corrosion-resistant aluminum alloy optimized for rooftop loads."
                            </p>
                            <div className="mt-8 flex gap-3">
                                <span className="px-4 py-2 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-[10px] text-[var(--emerald-accent)] font-bold tracking-widest uppercase">AL-6061</span>
                                <span className="px-4 py-2 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-[10px] text-[var(--emerald-accent)] font-bold tracking-widest uppercase">WIND-SAFE</span>
                            </div>
                        </div>

                        {/* Component Items */}
                        {[
                            { img: '/assets/voltage-sensor.png', name: 'SENSING', label: 'VOLTAGE MODULE' },
                            { img: '/assets/stepper-motor.png', name: 'ACTUATION', label: 'STEPPER MOTOR' },
                            { img: '/assets/arduino-mega.png', name: 'COMPUTE', label: 'CONTROLLER' }
                        ].map((comp, idx) => (
                            <div key={idx} className={`md:col-span-1 h-[300px] relative group overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)]`}>
                                <img
                                    src={comp.img}
                                    alt={comp.label}
                                    className="w-full h-full object-contain p-10 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute bottom-4 left-4 right-4 bg-[var(--header-bg)] backdrop-blur-xl px-4 py-2 rounded-2xl border border-[var(--card-border)]">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[var(--emerald-accent)] text-[10px] font-mono font-bold tracking-widest">{comp.name}</span>
                                        <span className="text-[var(--text-muted)] text-[10px] font-bold">{comp.label}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Prototype;
