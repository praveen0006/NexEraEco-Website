import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Zap, ExternalLink, Mail, Phone, Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const containerRef = useRef(null);
    const sectionsRef = useRef([]);

    useGSAP(() => {
        // --- HERO TEXT ANIMATION ---
        const tl = gsap.timeline();
        tl.from(".hero-reveal", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out"
        });

        // --- SCROLL REVEALS ---
        sectionsRef.current.forEach((section) => {
            gsap.from(section.querySelectorAll(".scroll-reveal"), {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // --- SUBTLE GRADIENT DRIFT ---
        gsap.to(".bg-gradient-mesh", {
            x: "5%",
            y: "5%",
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }, { scope: containerRef });

    const addToRefs = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    return (
        <div ref={containerRef} className="bg-[var(--bg-base)] text-[var(--text-base)] transition-colors duration-500 overflow-hidden font-sans">

            {/* --- CLEAN BACKGROUND MESH --- */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
                <div className="bg-gradient-mesh absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_20%_30%,var(--emerald-accent),transparent_50%),radial-gradient(circle_at_80%_70%,var(--teal-accent),transparent_50%)] opacity-20"></div>
                <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzv9id0ph/image/upload/v1673510000/noise_ntnwpf.png')] opacity-[0.02] mix-blend-overlay"></div>
            </div>

            {/* --- HERO SECTION: CLEAN SAAS --- */}
            <section className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="hero-reveal section-label">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--emerald-accent)] animate-pulse"></span>
                        <span>Directing Nature's Energy</span>
                    </div>

                    <h1 className="hero-reveal text-5xl md:text-8xl font-bold tracking-tight text-[var(--text-primary)] mb-8 leading-[1.1]">
                        Healing Nature <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Through IoT.</span>
                    </h1>

                    <p className="hero-reveal text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                        Building practical clean-tech innovations for a sustainable future.
                        Engineering the next generation of hardware for a healthier planet.
                    </p>

                    <div className="hero-reveal flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link to="/product" className="btn-primary w-full sm:w-auto">
                            Explore SolarXite
                        </Link>
                        <Link to="/contact" className="btn-secondary w-full sm:w-auto">
                            Contact / Request Deck
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- FLAGSHIP: SOLARXITE FOCUS (80%) --- */}
            <section ref={addToRefs} className="relative z-10 py-32 px-4 border-t border-[var(--card-border)] bg-gray-500/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="scroll-reveal">
                            <span className="section-label">Flagship Innovation</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-8 leading-tight">SolarXite — Rooftop Solar Hardware</h2>
                            <p className="text-lg text-[var(--text-base)] leading-relaxed mb-10 font-light">
                                SolarXite is a <span className="text-[var(--text-primary)] font-medium italic">TRL-4 dual-axis rooftop solar tracking system</span> designed to improve energy generation by dynamically optimizing orientation.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Residential-focused mechanical design",
                                    "Addresses urban shading constraints",
                                    "Laboratory validated prototype (TRL-4)",
                                    "Design Patent Granted"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                            <Zap className="w-3 h-3 text-[var(--emerald-accent)]" />
                                        </div>
                                        <span className="text-[var(--text-base)] font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link to="/product" className="mt-12 inline-flex items-center gap-2 text-[var(--emerald-accent)] font-bold hover:gap-4 transition-all">
                                How it works <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        <div className="scroll-reveal relative">
                            <div className="aspect-[4/5] md:aspect-square bg-[var(--bg-base)] rounded-[48px] border border-[var(--card-border)] overflow-hidden shadow-2xl relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-50"></div>
                                <img src="/assets/model.jpg" alt="SolarXite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8">
                                    <p className="text-[var(--text-primary)] text-2xl font-bold">SolarXite Build_01</p>
                                    <p className="text-[var(--emerald-accent)] font-mono text-[10px] tracking-widest mt-1 font-bold">HARDWARE VALIDATION</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PROBLEM & SOLUTION: CLEAN GRID --- */}
            <section ref={addToRefs} className="relative z-10 py-32 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    <div className="scroll-reveal card border-red-500/5 hover:border-red-500/20">
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">The Problem</h3>
                        <p className="text-[var(--text-muted)] leading-relaxed font-light">
                            Fixed rooftop panels lose significant potential output as the sun moves. Urban shading and space constraints further reduce efficiency, leading to lower generation and longer payback periods.
                        </p>
                    </div>
                    <div className="scroll-reveal card border-emerald-500/5 hover:border-emerald-500/20">
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Our Solution</h3>
                        <p className="text-[var(--text-muted)] leading-relaxed font-light">
                            SolarXite improves energy capture by dynamically adjusting panel alignment.
                            Designed to increase output <span className="text-[var(--emerald-accent)] font-medium">per panel</span> without increasing rooftop area.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- ROADMAP & IMPACT: MINIMALIST --- */}
            <section ref={addToRefs} className="relative z-10 py-32 px-4 bg-gray-500/5 border-y border-[var(--card-border)]">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="scroll-reveal mb-24">
                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-8">Current Stage & Roadmap</h2>
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[var(--emerald-accent)]/30 bg-emerald-500/5 text-[var(--emerald-accent)] font-mono text-xs font-bold uppercase tracking-widest">
                            Stage: TRL-4
                        </div>
                        <p className="mt-8 text-xl text-[var(--text-muted)] font-light">
                            Functional prototype validated under controlled lab conditions.
                            Next: <span className="text-[var(--text-primary)] italic">Outdoor durability & performance validation.</span>
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-12">
                        {[
                            { val: "+40%", label: "Yield Increase" },
                            { val: "Urban", label: "Ready Design" },
                            { val: "TRL-4", label: "Validated Stage" }
                        ].map((stat, i) => (
                            <div key={i} className="scroll-reveal group">
                                <p className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--emerald-accent)] transition-colors">{stat.val}</p>
                                <p className="text-[var(--text-muted)] font-mono text-[10px] uppercase tracking-[0.4em]">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- R&D PIPELINE: CONCEPTUAL LABELS --- */}
            <section ref={addToRefs} className="relative z-10 py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 scroll-reveal">
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">R&D Pipeline</h2>
                            <p className="text-[var(--text-muted)] font-light italic">"NexEraEco is also exploring other sustainability-focused innovations at the concept stage."</p>
                        </div>
                        <Link to="/products" className="group flex items-center gap-3 text-[var(--emerald-accent)] font-mono text-xs tracking-widest hover:text-[var(--text-primary)] transition-all">
                            EXPLORE R&D <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "Waste Segregation", desc: "IoT-enabled sorting algorithms", tag: "CONCEPT" },
                            { title: "Smart Crop Guard", desc: "IoT animal intrusion detection & precision irrigation", tag: "RESEARCH VALIDATED" }
                        ].map((item, i) => (
                            <div key={i} className="scroll-reveal card group">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--emerald-accent)] transition-colors">{item.title}</h4>
                                    <span className="text-[9px] font-mono font-bold bg-[var(--card-bg)] border border-[var(--card-border)] px-2 py-0.5 rounded text-[var(--text-muted)]">{item.tag}</span>
                                </div>
                                <p className="text-[var(--text-muted)] text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- RESEARCH CREDIBILITY --- */}
            <section className="relative z-10 py-24 border-t border-[var(--card-border)] bg-gray-500/5">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6 scroll-reveal">Research Validation</h2>
                    <p className="text-[var(--text-muted)] mb-8 font-light scroll-reveal">
                        Our research work on <span className="text-[var(--text-primary)] font-medium">Smart Crop Guard</span> optimization logic has been published on <span className="text-[var(--text-primary)] font-medium">IEEE Xplore</span>,
                        validating our approach to precision agri-tech.
                    </p>
                    <a
                        href="https://ieeexplore.ieee.org/document/11324174"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="scroll-reveal inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-[var(--emerald-accent)] text-sm font-bold hover:bg-[var(--emerald-accent)] hover:text-white transition-all"
                    >
                        View IEEE Paper <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </section>

            {/* --- CONTACT SECTION: CLEAN FOOTER --- */}
            <section ref={addToRefs} className="relative z-10 py-44 px-4 text-center">
                <div className="max-w-4xl mx-auto scroll-reveal">
                    <h2 className="text-5xl md:text-8xl font-bold text-[var(--text-primary)] mb-10 tracking-tighter">Contact</h2>
                    <p className="text-lg md:text-xl text-[var(--text-muted)] mb-16 font-light leading-relaxed max-w-2xl mx-auto">
                        Connect with us to evaluate or support our validation mission.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-8 p-12 rounded-[40px] border border-[var(--card-border)] bg-[var(--card-bg)]">
                        <div className="flex flex-col items-center gap-3 translate-y-2">
                            <Mail className="w-5 h-5 text-[var(--emerald-accent)]" />
                            <a href="mailto:praveen19121@gmail.com" className="text-[var(--text-primary)] hover:text-[var(--emerald-accent)] transition-colors font-semibold">praveen19121@gmail.com</a>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <Phone className="w-5 h-5 text-[var(--emerald-accent)]" />
                            <p className="text-[var(--text-primary)] font-semibold">+91 8639322024</p>
                        </div>
                        <div className="flex flex-col items-center gap-3 -translate-y-2">
                            <Linkedin className="w-5 h-5 text-[var(--emerald-accent)]" />
                            <a href="https://www.linkedin.com/in/praveen-kumar-akula-30a685255/" target="_blank" className="text-[var(--text-primary)] hover:text-[var(--emerald-accent)] transition-colors font-semibold shadow-emerald-500/20">Official LinkedIn</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
