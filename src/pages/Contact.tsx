import { FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi';

export const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 font-sans">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Nous Situer</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contactez la Bibliothèque CIEC</h1>
                    <p className="text-lg text-gray-600">
                        Notre équipe est à votre disposition pour vous guider dans vos recherches et vous accompagner dans l'accès à l'information stratégique.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Contact Info Cards */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl mb-6">
                            <FiMapPin />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Notre Bureau</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Boulevard de la Liberté<br />
                            Akwa, Douala<br />
                            Cameroun, BP 1234
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl mb-6">
                            <FiPhone />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Téléphone / Fax</h3>
                        <p className="text-gray-600 leading-relaxed">
                            +237 600 00 00 00<br />
                            +237 233 00 00 00
                        </p>
                        <p className="text-sm text-gray-500 mt-2">Du Lundi au Vendredi, 8h-18h</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl mb-6">
                            <FiMail />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-600 leading-relaxed">
                            info@ciec-library.cm<br />
                            support@ciec-library.cm
                        </p>
                        <p className="text-sm text-gray-500 mt-2">Réponse sous 24h</p>
                    </div>
                </div>

                {/* Form and Map Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            Envoyez-nous un message
                        </h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom Complet</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:bg-white transition-colors" placeholder="Votre nom" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:bg-white transition-colors" placeholder="votre@email.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                                <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:bg-white transition-colors">
                                    <option>Demande d'adhésion</option>
                                    <option>Question sur un ouvrage</option>
                                    <option>Partenariat</option>
                                    <option>Autre</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:bg-white transition-colors" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                            </div>

                            <button type="button" className="w-full py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2">
                                Envoyer le Message <FiSend />
                            </button>
                        </form>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-gray-200 rounded-2xl overflow-hidden min-h-[400px] relative">
                        {/* Simulated Google Map */}
                        <img
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000"
                            alt="Carte de localisation"
                            className="w-full h-full object-cover grayscale opacity-60"
                        />
                        <div className="absolute inset-0 flex items-center justify-center p-8 bg-black/10">
                            <div className="bg-white p-4 rounded-lg shadow-xl flex items-center gap-3 animate-bounce">
                                <div className="text-primary text-2xl"><FiMapPin /></div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">CIEC Library</p>
                                    <p className="text-xs text-gray-500">Akwa, Douala</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
