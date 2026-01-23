import { motion } from 'framer-motion';
import heroImage from './assets/hero.png';

export const Hero = () => {
    return (
        <section className="relative w-full h-[600px] md:h-[700px] bg-gray-100 overflow-hidden font-sans">
            {/* Background Image Layer */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={heroImage}
                    alt="Bibliothèque d'Intelligence Économique au Cameroun"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
            </div>

            <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="max-w-2xl pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded bg-secondary/10 text-secondary font-bold text-sm mb-4 tracking-wider uppercase border border-secondary/20">
                            Bienvenue à la Bibliothèque CIEC
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
                            La Plus Grande Bibliothèque <span className="text-primary relative inline-block">
                                Économique
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                </svg>
                            </span> <br />
                            en <span className="text-secondary">Afrique Centrale</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                            Accédez à plus de 10 000 ressources sur l'intelligence économique, l'analyse de marché et la stratégie d'entreprise. Le savoir pour décider.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg shadow-xl shadow-primary/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                Commencer à Lire
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 font-bold rounded-lg shadow-sm transition-all flex items-center justify-center">
                                Suggérer un Livre
                            </button>
                        </div>

                        {/* Stats or Trust Indicators */}
                        <div className="mt-12 flex items-center gap-8 pt-8 border-t border-gray-200/60">
                            <div>
                                <h4 className="text-2xl font-bold text-gray-900">12k+</h4>
                                <p className="text-sm text-gray-500">Utilisateurs</p>
                            </div>
                            <div className="w-px h-10 bg-gray-300"></div>
                            <div>
                                <h4 className="text-2xl font-bold text-gray-900">850+</h4>
                                <p className="text-sm text-gray-500">Études de Cas</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
