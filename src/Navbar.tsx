import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FiSearch,
    FiShoppingBag,
    FiMapPin,
    FiMenu,
    FiX,
    FiChevronDown,
    FiUser
} from 'react-icons/fi';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const categories = [
        { name: 'Intelligence Économique', items: ['Analyse Concurrentielle', 'Tendances Marché', 'Gestion des Risques'] },
        { name: 'Stratégie d\'Affaires', items: ['Planification Stratégique', 'Innovation', 'Leadership'] },
        { name: 'Analyse de Données', items: ['Big Data', 'Visualisation', 'Modélisation Prédictive'] },
        { name: 'Marchés Mondiaux', items: ['Marchés Émergents', 'Politique Commerciale', 'Forex'] },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm font-sans">
            {/* Top Bar */}
            <div className="bg-gray-50 border-b border-gray-100 hidden md:block">
                <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center space-x-4">
                        <span>Douala, Cameroun</span>
                        <span className="text-primary font-medium">Ouvert: Lun - Ven (8:00 - 18:00)</span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <a href="#" className="hover:text-primary transition-colors">Adhésion</a>
                        <a href="#" className="hover:text-primary transition-colors">Offres & Coupons</a>
                        <div className="flex items-center space-x-2 text-gray-800 font-medium cursor-pointer hover:text-primary">
                            <FiUser />
                            <span>Mon Compte</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4 py-4 md:py-6">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                            {/* Placeholder Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.472V5.25c0-.464-.297-.899-.75-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                            CIEC <span className="text-primary">Bibliothèque</span>
                        </span>
                    </Link>

                    {/* Search Bar (Desktop) */}
                    <div className="hidden md:flex flex-1 max-w-2xl mx-8 relative">
                        <div className="relative w-full flex">
                            <div className="relative group w-40 border-r border-gray-200">
                                <button className="w-full h-12 bg-gray-50 border border-gray-200 rounded-l-lg px-4 flex items-center justify-between text-gray-600 hover:bg-gray-100 transition-colors">
                                    <span className="text-sm">Catégories</span>
                                    <FiChevronDown />
                                </button>
                            </div>
                            <input
                                type="text"
                                placeholder="Rechercher des ressources..."
                                className="flex-1 h-12 border border-gray-200 border-l-0 px-4 focus:outline-none focus:border-primary transition-colors text-sm"
                            />
                            <button className="w-14 h-12 bg-primary hover:bg-primary-hover text-white rounded-r-lg flex items-center justify-center transition-all duration-300 shadow-lg shadow-primary/20">
                                <FiSearch className="text-xl" />
                            </button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-6">
                        <button className="hidden md:flex flex-col items-center group">
                            <div className="relative">
                                <FiMapPin className="text-2xl text-gray-600 group-hover:text-primary transition-colors" />
                            </div>
                            <span className="text-xs text-gray-500 mt-1 font-medium">Localisation</span>
                        </button>

                        <button className="flex flex-col items-center group relative">
                            <div className="relative">
                                <FiShoppingBag className="text-2xl text-gray-600 group-hover:text-primary transition-colors" />
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] flex items-center justify-center rounded-full font-bold shadow-sm border-2 border-white">0</span>
                            </div>
                            <span className="hidden md:block text-xs text-gray-500 mt-1 font-medium">Panier</span>
                        </button>

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
                    <div className="flex items-center space-x-8">
                        <div className="relative group">
                            <button className="h-14 flex items-center space-x-3 px-6 bg-secondary text-white font-medium tracking-wide">
                                <FiMenu className="text-lg" />
                                <span>TOUS LES RAYONS</span>
                            </button>

                            {/* Mega Menu Dropdown */}
                            <div className="absolute top-full left-0 w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top border-t-2 border-primary">
                                {categories.map((cat, idx) => (
                                    <div key={idx} className="group/item relative px-6 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0">
                                        <div className="flex justify-between items-center text-gray-700 font-medium text-sm group-hover/item:text-primary">
                                            {cat.name}
                                            <FiChevronDown className="transform -rotate-90 text-gray-300" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <nav className="flex items-center space-x-8 h-14">
                            <Link to="/" className="flex items-center space-x-1 text-gray-800 font-medium hover:text-primary transition-colors uppercase text-sm tracking-wide">
                                <span>Accueil</span>
                            </Link>
                            <Link to="/shop" className="flex items-center space-x-1 text-gray-800 font-medium hover:text-primary transition-colors uppercase text-sm tracking-wide">
                                <span>Boutique</span>
                            </Link>
                            <Link to="/blog" className="flex items-center space-x-1 text-gray-800 font-medium hover:text-primary transition-colors uppercase text-sm tracking-wide">
                                <span>Blog</span>
                            </Link>
                            <Link to="/contact" className="flex items-center space-x-1 text-gray-800 font-medium hover:text-primary transition-colors uppercase text-sm tracking-wide">
                                <span>Contact</span>
                            </Link>
                        </nav>

                        <div className="ml-auto flex items-center space-x-2">
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded uppercase">Nouveau</span>
                            <span className="text-sm font-medium text-gray-600">Info COVID-19: Nous sommes ouverts</span>
                        </div>
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
                                <Link to="/shop" className="py-2 text-gray-800 font-medium hover:text-primary border-b border-gray-50 last:border-0">Boutique</Link>
                                <Link to="/blog" className="py-2 text-gray-800 font-medium hover:text-primary border-b border-gray-50 last:border-0">Blog</Link>
                                <Link to="/contact" className="py-2 text-gray-800 font-medium hover:text-primary border-b border-gray-50 last:border-0">Contact</Link>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
