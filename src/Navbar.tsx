import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from './assets/logo_hakapoka.png';
import {
    FiMenu,
    FiX,
    FiChevronDown,
    FiUser
} from 'react-icons/fi';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const categories = [
        { name: 'Bibliothèque IE', link: '/services/intelligence-economique' },
        { name: 'Due Diligence', link: '/services/due-diligence' },
        { name: 'Veille Sectorielle', link: '/services/veille' },
        { name: 'Missions de Prospection', link: '/services/prospection' },
        { name: 'Formation', link: '/services/formation' },
        { name: 'E-Réputation', link: '/services/e-reputation' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm font-sans">
            {/* Top Bar */}
            {/* Main Header */}
            <div className="container mx-auto px-4 py-4 md:py-6">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <img src={logo} alt="HAKAPOKA Logo" className="w-12 h-12 object-contain" />
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 leading-none">
                                HAKAPOKA
                            </span>
                            <span className="text-xs text-primary font-bold tracking-widest uppercase">
                                Intelligence Économique
                            </span>
                        </div>
                    </Link>

                    {/* Search Bar (Desktop) - Simplified */}
                    <div className="hidden md:flex flex-1 max-w-xl mx-auto relative px-8">
                        {/* Optional Search */}
                    </div>

                    {/* Actions - Simplified for Portfolio */}
                    <div className="flex items-center space-x-6">
                        <div className="hidden md:flex items-center space-x-4">
                            <button className="flex items-center space-x-2 text-gray-800 font-bold hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-gray-50">
                                <FiUser className="text-lg" />
                                <span>Connexion</span>
                            </button>
                            <button className="px-6 py-2 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all">
                                Demander un Devis
                            </button>
                        </div>

                        <button
                            className="md:hidden text-2xl text-gray-800"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Links (Desktop) */}
            <div className="hidden md:block border-t border-gray-100 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center space-x-12">
                        <nav className="flex items-center space-x-12 h-14">
                            <Link to="/" className="flex items-center space-x-1 text-gray-800 font-medium hover:text-primary transition-colors uppercase text-sm tracking-wide">
                                <span>Accueil</span>
                            </Link>

                            {/* Moved Dropdown here */}
                            <div className="relative group flex items-center h-full">
                                <button className="h-14 flex items-center space-x-2 text-gray-800 font-medium hover:text-primary uppercase text-sm tracking-wide">
                                    <span>Nos Services</span>
                                    <FiChevronDown className="text-gray-400 group-hover:text-primary transition-colors" />
                                </button>
                                {/* Service Dropdown */}
                                <div className="absolute top-full left-0 w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top border-t-2 border-primary z-50">
                                    {categories.map((cat, idx) => (
                                        <Link key={idx} to={cat.link} className="block group/item relative px-6 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0 hover:text-primary transition-colors">
                                            <div className="flex justify-between items-center font-medium text-sm">
                                                {cat.name}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link to="/how-it-works" className="flex items-center space-x-1 text-gray-800 font-medium hover:text-primary transition-colors uppercase text-sm tracking-wide">
                                <span>Comment ça marche</span>
                            </Link>

                            <Link to="/pricing" className="flex items-center space-x-1 text-gray-800 font-medium hover:text-primary transition-colors uppercase text-sm tracking-wide">
                                <span>Tarifs</span>
                            </Link>

                            <Link to="/contact" className="flex items-center space-x-1 text-gray-800 font-medium hover:text-primary transition-colors uppercase text-sm tracking-wide">
                                <span>Contact</span>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="p-4 space-y-4">
                            <input
                                type="text"
                                placeholder="Rechercher..."
                                className="w-full h-10 border border-gray-200 rounded px-4 text-sm focus:outline-none focus:border-primary"
                            />
                            <nav className="flex flex-col space-y-2">
                                <Link to="/" className="py-2 text-gray-800 font-medium hover:text-primary border-b border-gray-50 last:border-0">Accueil</Link>
                                <Link to="/how-it-works" className="py-2 text-gray-800 font-medium hover:text-primary border-b border-gray-50 last:border-0">Comment ça marche</Link>
                                <Link to="/pricing" className="py-2 text-gray-800 font-medium hover:text-primary border-b border-gray-50 last:border-0">Tarifs</Link>
                                <Link to="/contact" className="py-2 text-gray-800 font-medium hover:text-primary border-b border-gray-50 last:border-0">Contact</Link>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
