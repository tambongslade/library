import { useState } from 'react';
import { FiGrid, FiList, FiShoppingCart, FiEye, FiHeart, FiStar } from 'react-icons/fi';
import { booksData } from '../data/books';

export const Shop = () => {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [priceRange, setPriceRange] = useState(100);

    const categories = [
        { name: 'Économie', count: 120 },
        { name: 'Stratégie d\'Affaires', count: 85 },
        { name: 'Science des Données', count: 64 },
        { name: 'Finance', count: 42 },
        { name: 'Leadership', count: 30 },
        { name: 'Géopolitique', count: 18 },
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-8 font-sans">
            <div className="container mx-auto px-4">

                {/* Breadcrumb / Title */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Boutique</h1>
                    <p className="text-sm text-gray-500 mt-2">Accueil / Boutique</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">

                        {/* Categories */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Catégories</h3>
                            <ul className="space-y-3">
                                {categories.map((cat) => (
                                    <li key={cat.name} className="flex justify-between items-center text-gray-600 hover:text-primary cursor-pointer group">
                                        <span className="text-sm group-hover:translate-x-1 transition-transform">{cat.name}</span>
                                        <span className="text-xs bg-gray-100 text-gray-500 py-0.5 px-2 rounded-full group-hover:bg-primary/10 group-hover:text-primary">{cat.count}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Price Filter */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Filtrer par Prix</h3>
                            <div className="mb-4">
                                <input
                                    type="range"
                                    min="0"
                                    max="200"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                                <div className="flex justify-between text-sm text-gray-600 mt-2">
                                    <span>0 $</span>
                                    <span className="font-bold text-primary">{priceRange} $</span>
                                </div>
                            </div>
                        </div>

                        {/* Popular Tags */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Mots-clés Populaires</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Économie', 'Marché', 'Croissance', 'Tendances', 'Afrique', 'Numérique', 'Finance'].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded hover:bg-primary hover:text-white cursor-pointer transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Bestseller Widget */}
                        <div className="hidden lg:block bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Livre en Vedette</h3>
                            <div className="flex gap-4">
                                <img
                                    src={booksData[0].image}
                                    alt="Featured"
                                    className="w-20 h-28 object-cover rounded shadow-sm"
                                />
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 leading-tight mb-1">{booksData[0].title}</h4>
                                    <p className="text-xs text-primary font-bold mb-2">{booksData[0].price} $</p>
                                    <button className="text-xs font-bold underline hover:text-primary">Voir Détails</button>
                                </div>
                            </div>
                        </div>

                    </aside>

                    {/* Main Content */}
                    <main className="flex-1">

                        {/* Toolbar */}
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="flex items-center gap-4">
                                <span className="text-gray-500 text-sm">Affichage de 1–8 sur 24 résultats</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 border-r border-gray-200 pr-4">
                                    <span className="text-sm text-gray-500">Trier par:</span>
                                    <select className="text-sm border-none bg-transparent font-medium text-gray-800 focus:outline-none cursor-pointer">
                                        <option>Défaut</option>
                                        <option>Prix: Croissant</option>
                                        <option>Prix: Décroissant</option>
                                        <option>Plus Récents</option>
                                    </select>
                                </div>
                                <div className="flex gap-2 text-gray-400">
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                                    >
                                        <FiGrid />
                                    </button>
                                    <button
                                        onClick={() => setViewMode('list')}
                                        className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                                    >
                                        <FiList />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
                            {booksData.map((book) => (
                                viewMode === 'grid' ? (
                                    // GRID CARD
                                    <div key={book.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                        <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                                            <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                                            {/* Tags */}
                                            {book.tag && (
                                                <div className="absolute top-3 left-3 px-2 py-1 bg-secondary text-white text-[10px] font-bold uppercase rounded tracking-wider">
                                                    {book.tag}
                                                </div>
                                            )}

                                            {/* Actions Overlay */}
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                                <button className="w-10 h-10 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg" title="Ajouter au Panier">
                                                    <FiShoppingCart />
                                                </button>
                                                <button className="w-10 h-10 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 shadow-lg" title="Aperçu">
                                                    <FiEye />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="p-4">
                                            <div className="text-xs text-gray-500 uppercase font-bold mb-1">{book.category}</div>
                                            <h3 className="font-bold text-gray-900 mb-1 truncate hover:text-primary cursor-pointer">{book.title}</h3>
                                            <p className="text-sm text-gray-500 mb-3">{book.author}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="font-bold text-primary text-lg">{book.price} $</span>
                                                <div className="flex text-yellow-400 text-xs">
                                                    {[...Array(5)].map((_, i) => (
                                                        <FiStar key={i} className={i < book.rating ? "fill-current" : "text-gray-300"} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    // LIST CARD
                                    <div key={book.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all flex h-48 sm:h-56">
                                        <div className="w-32 sm:w-40 flex-shrink-0 relative bg-gray-100">
                                            <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="p-6 flex flex-col justify-center flex-1">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">{book.category}</div>
                                                    <h3 className="font-bold text-gray-900 text-xl mb-2 hover:text-primary cursor-pointer">{book.title}</h3>
                                                </div>
                                                <span className="font-bold text-primary text-2xl">{book.price} $</span>
                                            </div>
                                            <p className="text-gray-500 text-sm mb-4 line-clamp-2">{book.author} — Guide complet sur {book.category} explorant les dynamiques de marché et les stratégies d'intelligence.</p>

                                            <div className="mt-auto flex gap-3">
                                                <button className="px-4 py-2 bg-primary text-white rounded font-medium text-sm hover:bg-primary-hover transition-colors flex items-center gap-2">
                                                    <FiShoppingCart /> Ajouter
                                                </button>
                                                <button className="p-2 border border-gray-200 rounded text-gray-500 hover:text-primary hover:border-primary transition-colors">
                                                    <FiHeart />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-12 flex justify-center gap-2">
                            <button className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors">1</button>
                            <button className="w-10 h-10 rounded bg-primary text-white flex items-center justify-center font-bold">2</button>
                            <button className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors">3</button>
                            <button className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors">...</button>
                            <button className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors">12</button>
                        </div>

                    </main>
                </div>
            </div>
        </div>
    );
};
