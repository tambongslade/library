import { FiCalendar, FiClock, FiArrowRight, FiSearch } from 'react-icons/fi';
import { blogPosts } from '../data/blog';

export const Blog = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 font-sans">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Notre Journal</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Analyses & Perspectives Économiques</h1>
                    <p className="text-lg text-gray-600">
                        Découvrez les dernières tendances, études de cas et analyses stratégiques pour naviguer dans l'écosystème économique complexe de l'Afrique Centrale.
                    </p>
                </div>

                {/* Search & Categories */}
                <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-12 gap-4">
                    <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0 hide-scrollbar w-full md:w-auto">
                        {['Tous', 'Économie', 'Technologie', 'Stratégie', 'Finance', 'Innovation'].map((cat, idx) => (
                            <button
                                key={cat}
                                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors
                    ${idx === 0 ? 'bg-primary text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}
                  `}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-80">
                        <input
                            type="text"
                            placeholder="Rechercher un article..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors text-sm"
                        />
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                {/* Featured Post (First item) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl h-64 lg:h-96 group">
                        <img
                            src={blogPosts[0].image}
                            alt={blogPosts[0].title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white text-gray-900 text-xs font-bold uppercase rounded shadow-md">À la Une</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="text-primary font-bold uppercase tracking-wide">{blogPosts[0].category}</span>
                            <span className="flex items-center gap-1"><FiCalendar /> {blogPosts[0].date}</span>
                            <span className="flex items-center gap-1"><FiClock /> {blogPosts[0].readTime}</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-primary transition-colors cursor-pointer leading-tight">
                            {blogPosts[0].title}
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            {blogPosts[0].excerpt}
                        </p>

                        <div className="flex items-center gap-3 pt-4">
                            <img
                                src={`https://ui-avatars.com/api/?name=${blogPosts[0].author}&background=random`}
                                alt={blogPosts[0].author}
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">{blogPosts[0].author}</h4>
                                <span className="text-xs text-gray-500">Analyste Senior</span>
                            </div>
                        </div>

                        <button className="mt-4 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-primary transition-colors inline-flex items-center gap-2">
                            Lire l'article <FiArrowRight />
                        </button>
                    </div>
                </div>

                {/* Grid Layout for other posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.slice(1).map((post) => (
                        <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3">
                                    <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] font-bold uppercase rounded">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                                    <span className="flex items-center gap-1"><FiCalendar /> {post.date}</span>
                                    <span className="flex items-center gap-1"><FiClock /> {post.readTime}</span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-gray-100 overflow-hidden">
                                            <img src={`https://ui-avatars.com/api/?name=${post.author}&background=0F341F&color=fff`} alt={post.author} />
                                        </div>
                                        <span className="text-xs font-medium text-gray-700">{post.author}</span>
                                    </div>
                                    <span className="text-primary text-sm font-medium flex items-center gap-1 group/btn cursor-pointer">
                                        Lire <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter Callout */}
                <div className="mt-20 bg-primary rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Ne Manquez Aucune Analyse</h2>
                        <p className="mb-8 opacity-90">Inscrivez-vous pour recevoir notre condensé hebdomadaire des meilleures analyses économiques du Cameroun et d'Afrique.</p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Votre email professionnel"
                                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
                            />
                            <button className="px-6 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
                                S'abonner
                            </button>
                        </div>
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>

            </div>
        </div>
    );
};
