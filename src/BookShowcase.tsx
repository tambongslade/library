import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiEye, FiStar, FiPlay, FiFileText, FiDownload, FiBook } from 'react-icons/fi';
import { booksData } from './data/books';

export const BookShowcase = () => {
    const navigate = useNavigate();
    // Use a subset of books for the homepage
    const featuredBooks = booksData.slice(0, 4);
    const [activeTab, setActiveTab] = useState('all');

    const videos = [
        {
            id: 1,
            title: "Comprendre l'Intelligence Économique en Afrique",
            duration: "15:30",
            thumbnail: "https://images.unsplash.com/photo-1551817958-c19a9a304e2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            category: "Conférence"
        },
        {
            id: 2,
            title: "Techniques de Veille Stratégique Avancée",
            duration: "45:00",
            thumbnail: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            category: "Formation"
        },
        {
            id: 3,
            title: "Interview: Les enjeux de la Due Diligence au Cameroun",
            duration: "22:15",
            thumbnail: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            category: "Interview"
        }
    ];

    const reports = [
        {
            id: 1,
            title: "Analyse Sectorielle : BTP au Cameroun 2024",
            type: "PDF",
            size: "2.5 MB",
            date: "Jan 2024"
        },
        {
            id: 2,
            title: "Rapport Spécial : Cyber-sécurité et PME",
            type: "PDF",
            size: "1.8 MB",
            date: "Fév 2024"
        },
        {
            id: 3,
            title: "Guide de l'Exportateur en Zone CEMAC",
            type: "PDF",
            size: "4.2 MB",
            date: "Mars 2024"
        }
    ];

    return (
        <section className="py-20 bg-white font-sans">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Bibliothèque d'Intelligence Économique</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Ressources Documentaires Spécialisées</h2>
                        <p className="mt-4 text-gray-600 max-w-2xl">
                            Plateforme numérique par abonnement offrant un accès à des ressources documentaires spécialisées pour les professionnels.
                        </p>

                        {/* Tabs */}
                        <div className="flex flex-wrap gap-4 mt-8 border-b border-gray-100 pb-1">
                            {['all', 'livres', 'videos', 'rapports'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-3 text-sm font-bold uppercase tracking-wide transition-colors relative
                                        ${activeTab === tab ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}
                                    `}
                                >
                                    {tab === 'all' && 'Tout Voir'}
                                    {tab === 'livres' && 'Livres & Thèses'}
                                    {tab === 'videos' && 'Vidéos & Conférences'}
                                    {tab === 'rapports' && 'Rapports & Analyses'}
                                    {activeTab === tab && (
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="space-y-16">

                    {/* Books Section */}
                    {(activeTab === 'all' || activeTab === 'livres') && (
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <FiBook className="mr-2 text-primary" /> Ouvrages de Référence
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {featuredBooks.map((book) => (
                                    <div key={book.id} onClick={() => navigate(`/read/${book.id}`)} className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 cursor-pointer">
                                        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                                            <img src={book.image} alt={book.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute inset-x-0 bottom-4 flex justify-center gap-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-primary hover:text-white shadow-lg transition-colors"><FiShoppingCart /></button>
                                                <button onClick={(e) => { e.stopPropagation(); navigate(`/read/${book.id}`); }} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-primary hover:text-white shadow-lg transition-colors"><FiEye /></button>
                                            </div>
                                            {book.tag && <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold text-white rounded-full uppercase tracking-wide ${book.tag === 'Meilleure Vente' ? 'bg-secondary' : 'bg-primary'}`}>{book.tag}</div>}
                                        </div>
                                        <div className="p-5">
                                            <div className="text-xs text-gray-500 mb-2 uppercase font-medium">{book.category}</div>
                                            <h3 onClick={() => navigate(`/read/${book.id}`)} className="font-bold text-gray-900 text-lg mb-1 line-clamp-1 group-hover:text-primary transition-colors cursor-pointer">{book.title}</h3>
                                            <p className="text-gray-500 text-sm mb-3">{book.author}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="font-bold text-primary text-xl">${book.price}</span>
                                                <div className="flex text-yellow-400 text-sm">{[...Array(5)].map((_, i) => <FiStar key={i} className={i < book.rating ? "fill-current" : "text-gray-300"} />)}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Videos Section */}
                    {(activeTab === 'all' || activeTab === 'videos') && (
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <FiPlay className="mr-2 text-primary" /> Vidéos & Conférences
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {videos.map((video) => (
                                    <div key={video.id} className="group cursor-pointer">
                                        <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                                            <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                                                    <FiPlay className="text-white fill-current ml-1" />
                                                </div>
                                            </div>
                                            <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded font-medium">{video.duration}</span>
                                        </div>
                                        <h4 className="font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors">{video.title}</h4>
                                        <p className="text-sm text-gray-500 mt-1">{video.category}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Reports Section */}
                    {(activeTab === 'all' || activeTab === 'rapports') && (
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <FiFileText className="mr-2 text-primary" /> Rapports & Analyses
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {reports.map((report) => (
                                    <div key={report.id} className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all group cursor-pointer">
                                        <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-primary text-xl">
                                            <FiFileText />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">{report.title}</h4>
                                            <div className="flex items-center text-xs text-gray-500 space-x-3">
                                                <span>{report.date}</span>
                                                <span>•</span>
                                                <span className="uppercase">{report.type}</span>
                                                <span>•</span>
                                                <span>{report.size}</span>
                                            </div>
                                        </div>
                                        <div className="mt-1 text-gray-400 group-hover:text-primary transition-colors">
                                            <FiDownload />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};
