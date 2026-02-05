import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImage from './assets/hero_hakapoka.png';

export const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className="relative w-full h-[600px] md:h-[700px] bg-gray-100 overflow-hidden font-sans">
            {/* Background Image Layer */}
            <div className="absolute inset-0 w-full h-full">
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    src={heroImage}
                    alt="HAKAPOKA Intelligence Économique"
                    className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent"></div>
            </div>

            <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="max-w-2xl pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded bg-secondary/10 text-secondary font-bold text-sm mb-6 tracking-wider uppercase backdrop-blur-sm border border-secondary/20">
                            Leader en Intelligence Économique
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
                            Maîtrisez l'Information, <br />
                            <span className="text-primary">Dominez votre Marché.</span>
                        </h1>
                        <p className="text-lg text-gray-700 mb-10 max-w-lg leading-relaxed font-medium">
                            HAKAPOKA accompagne les décideurs avec des solutions d'intelligence économique, de due diligence et de veille stratégique pour sécuriser vos avantages concurrentiels en Afrique.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg shadow-xl shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300">
                                Découvrir nos services
                            </button>
                            <button
                                onClick={() => navigate('/services/bibliotheque')}
                                className="px-8 py-4 bg-white/50 hover:bg-white text-gray-900 border border-gray-200 font-bold rounded-lg backdrop-blur-md transition-all duration-300"
                            >
                                Accéder à la Bibliothèque
                            </button>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-12 flex items-center gap-8 pt-8 border-t border-gray-200/60"
                    >
                        <div>
                            <span className="block text-3xl font-bold text-secondary">500+</span>
                            <span className="text-sm text-gray-600 font-medium">Rapports Livrés</span>
                        </div>
                        <div className="h-10 w-px bg-gray-300"></div>
                        <div>
                            <span className="block text-3xl font-bold text-secondary">98%</span>
                            <span className="text-sm text-gray-600 font-medium">Clients Satisfaits</span>
                        </div>
                        <div className="h-10 w-px bg-gray-300"></div>
                        <div>
                            <span className="block text-3xl font-bold text-secondary">15+</span>
                            <span className="text-sm text-gray-600 font-medium">Pays Couverts</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
