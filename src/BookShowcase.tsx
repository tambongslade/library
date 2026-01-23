import { FiHeart, FiShoppingCart, FiEye, FiStar } from 'react-icons/fi';
import { booksData } from './data/books';

export const BookShowcase = () => {
    // Use a subset of books for the homepage
    const featuredBooks = booksData.slice(0, 4);

    return (
        <section className="py-20 bg-white font-sans">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Nos Collections</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Ressources Tendances</h2>
                    </div>
                    <a href="#" className="hidden md:flex items-center text-gray-600 hover:text-primary font-medium transition-colors">
                        Voir Tout
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredBooks.map((book) => (
                        <div key={book.id} className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300">
                            {/* Image Container */}
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Overlay Actions */}
                                <div className="absolute inset-x-0 bottom-4 flex justify-center gap-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-primary hover:text-white shadow-lg transition-colors" title="Ajouter au panier">
                                        <FiShoppingCart />
                                    </button>
                                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-primary hover:text-white shadow-lg transition-colors" title="Aperçu">
                                        <FiEye />
                                    </button>
                                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-primary hover:text-white shadow-lg transition-colors" title="Favoris">
                                        <FiHeart />
                                    </button>
                                </div>

                                {/* Badges */}
                                {book.tag && (
                                    <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold text-white rounded-full uppercase tracking-wide shadow-sm
                      ${book.tag === 'Meilleure Vente' ? 'bg-secondary' : 'bg-primary'}
                    `}>
                                        {book.tag}
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <div className="text-xs text-gray-500 mb-2 uppercase font-medium">{book.category}</div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1 line-clamp-1 group-hover:text-primary transition-colors cursor-pointer">{book.title}</h3>
                                <p className="text-gray-500 text-sm mb-3">{book.author}</p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-primary text-xl">${book.price}</span>
                                        {book.originalPrice && (
                                            <span className="text-gray-400 text-sm line-through">${book.originalPrice}</span>
                                        )}
                                    </div>
                                    <div className="flex text-yellow-400 text-sm">
                                        {[...Array(5)].map((_, i) => (
                                            <FiStar key={i} className={i < book.rating ? "fill-current" : "text-gray-300"} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
