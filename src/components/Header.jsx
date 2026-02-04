import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, ChevronDown, Menu, X } from 'lucide-react';

const Header = ({ isDarkMode, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const location = useLocation();

    const mainLinks = [
        { path: '/', label: 'Home' },
        {
            label: 'Products',
            dropdown: [
                { path: '/products', label: 'All Products' },
                { path: '/product', label: 'SolarXite' },
                { path: '/prototype', label: 'Interactive Prototype' }
            ]
        },
        { path: '/partners', label: 'For EPCs' },
        { path: '/about', label: 'About' },
        { path: '/careers', label: 'Careers' },
        { path: '/contact', label: 'Contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--header-bg)] backdrop-blur-xl border-b border-[var(--card-border)] transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-emerald-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img src="/assets/logo.png" alt="NexEraEco" className="h-10 w-10 rounded-lg relative z-10 shadow-[0_0_15px_rgba(16,185,129,0.1)]" />
                        </div>
                        <span className="text-xl font-bold text-[var(--text-primary)] font-sans tracking-wide group-hover:text-neon-cyan transition-colors duration-300">NexEraEco</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {mainLinks.map((link, index) => (
                            link.dropdown ? (
                                <div key={index} className="relative group">
                                    <button
                                        className="text-sm font-semibold text-[var(--text-base)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1 py-2"
                                        onMouseEnter={() => setProductsOpen(true)}
                                        onMouseLeave={() => setProductsOpen(false)}
                                    >
                                        {link.label}
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? 'rotate-180 text-neon-cyan' : ''}`} />
                                    </button>
                                    <div
                                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[var(--bg-base)] border border-[var(--card-border)] rounded-2xl shadow-xl py-2 transition-all duration-200 overflow-hidden backdrop-blur-3xl ${productsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                                            }`}
                                        onMouseEnter={() => setProductsOpen(true)}
                                        onMouseLeave={() => setProductsOpen(false)}
                                    >
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.path}
                                                to={item.path}
                                                className={`block px-5 py-3 text-sm transition-colors border-l-2 ${isActive(item.path)
                                                    ? 'text-neon-cyan bg-neon-cyan/5 border-neon-cyan'
                                                    : 'text-[var(--text-base)] hover:text-[var(--text-primary)] hover:bg-black/5 border-transparent'
                                                    }`}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-sm font-semibold transition-all duration-300 relative py-2 ${isActive(link.path)
                                        ? 'text-neon-cyan'
                                        : 'text-[var(--text-base)] hover:text-[var(--text-primary)]'
                                        }`}
                                >
                                    {link.label}
                                    <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-neon-cyan shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-transform duration-300 origin-left ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0'
                                        }`}></span>
                                </Link>
                            )
                        ))}

                        <div className="flex items-center gap-4 pl-4 border-l border-[var(--card-border)]">
                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)] hover:text-neon-cyan transition-all active:scale-90"
                                aria-label="Toggle Theme"
                            >
                                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>

                            <Link to="/investors" className="btn-primary text-xs py-2 px-6 !shadow-none hover:bg-neon-blue">
                                Investors
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
                        >
                            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-[var(--text-base)] hover:text-[var(--text-primary)] rounded-lg transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-[var(--bg-base)] border-b border-[var(--card-border)] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <nav className="px-4 py-6 space-y-1">
                    {mainLinks.map((link) => (
                        !link.dropdown ? (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${isActive(link.path) ? 'text-neon-cyan bg-neon-cyan/5' : 'text-[var(--text-base)] hover:bg-[var(--card-bg)]'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <div key={link.label}>
                                <div className="px-4 py-2 mt-2 text-xs uppercase tracking-widest text-[var(--text-muted)] font-mono">{link.label}</div>
                                {link.dropdown.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors pl-8 ${isActive(item.path) ? 'text-neon-cyan bg-neon-cyan/5' : 'text-[var(--text-muted)]'
                                            }`}
                                    >
                                        → {item.label}
                                    </Link>
                                ))}
                            </div>
                        )
                    ))}
                    <div className="pt-6 px-4 pb-2">
                        <Link
                            to="/investors"
                            onClick={() => setIsOpen(false)}
                            className="block btn-primary text-center w-full justify-center"
                        >
                            Investors
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
