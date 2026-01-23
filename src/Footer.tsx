export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10 font-sans">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.472V5.25c0-.464-.297-.899-.75-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold">Bibliothèque CIEC</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Le centre de ressources en intelligence économique de référence en Afrique Centrale. L'information est un pouvoir - nous vous aidons à le maîtriser.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map(social => (
                                <a key={social} href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                                    <span className="sr-only">{social}</span>
                                    <div className="w-4 h-4 bg-white/20"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Explorer</h3>
                        <ul className="space-y-4 text-gray-400">
                            {['À Propos', 'Services', 'Notre Blog', 'Contactez-nous', 'Devenir Partenaire'].map(item => (
                                <li key={item}>
                                    <a href="#" className="hover:text-primary transition-colors flex items-center">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Catégories</h3>
                        <ul className="space-y-4 text-gray-400">
                            {['Tendances Économiques', 'Analyse de Marché', 'Droit des Affaires', 'Géopolitique', 'Innovation'].map(item => (
                                <li key={item}>
                                    <a href="#" className="hover:text-primary transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Infos Contact</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start space-x-3">
                                <span className="text-primary mt-1">📍</span>
                                <span>Akwa, Douala, Cameroun<br />BP 1234</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-primary">📞</span>
                                <span>+237 600 00 00 00</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-primary">✉️</span>
                                <span>contact@ciec-library.cm</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© 2024 Bibliothèque CIEC. Tous droits réservés.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Politique de Confidentialité</a>
                        <a href="#" className="hover:text-white">Conditions d'Utilisation</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
