import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiChevronLeft, FiChevronRight, FiBookmark, FiList, FiZoomIn, FiZoomOut } from 'react-icons/fi';

export const BookReader = () => {
    // const { bookId } = useParams();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const totalPages = 150;

    return (
        <div className="flex flex-col h-screen bg-gray-100 font-sans">
            {/* Toolbar */}
            <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 shadow-sm z-10">
                <div className="flex items-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors mr-4"
                        title="Retour"
                    >
                        <FiArrowLeft className="text-xl" />
                    </button>
                    <div>
                        <h1 className="text-sm font-bold text-gray-900 leading-tight">Guerre économique et Intelligence Économique</h1>
                        <p className="text-xs text-gray-500">Christian Harbulot • Chapitre 1</p>
                    </div>
                </div>

                <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="hidden md:flex items-center space-x-2 border-r border-gray-200 pr-4 mr-2">
                        <button className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-lg" title="Table des matières">
                            <FiList />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-lg" title="Marque-pages">
                            <FiBookmark />
                        </button>
                    </div>
                    <div className="hidden md:flex items-center space-x-2">
                        <button className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-lg">
                            <FiZoomOut />
                        </button>
                        <span className="text-xs font-medium text-gray-600">100%</span>
                        <button className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-lg">
                            <FiZoomIn />
                        </button>
                    </div>
                    <button className="p-2 bg-primary text-white rounded-lg hover:bg-primary-hover shadow-sm text-sm font-bold px-4 hidden sm:block">
                        Télécharger PDF
                    </button>
                </div>
            </div>

            {/* Main Reader Area */}
            <div className="flex-grow flex overflow-hidden">
                {/* Book Content */}
                <div className="flex-grow overflow-y-auto bg-gray-200 flex justify-center p-4 md:p-8">
                    <div className="bg-white shadow-2xl w-full max-w-3xl min-h-[1000px] p-8 md:p-16 relative">
                        {/* Fake Page Content */}
                        <div className="text-gray-800 leading-relaxed space-y-6 max-w-2xl mx-auto">
                            <span className="text-xs text-gray-400 block text-right">Page {page}</span>

                            <h2 className="text-3xl font-bold text-gray-900 mb-8 pt-4 border-b pb-4">Introduction à la Guerre Économique</h2>

                            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                                La fin de la guerre froide n'a pas signifié la fin des conflits, mais leur déplacement vers le champ économique. Aujourd'hui, les États et les entreprises s'affrontent pour la conquête des marchés, le contrôle des technologies et la maîtrise des normes.
                            </p>

                            <p>
                                Dans ce contexte hyper-concurrentiel, l'information devient une arme stratégique. Il ne s'agit plus seulement de savoir, mais de savoir avant les autres, et surtout, de savoir utiliser l'information pour déstabiliser un concurrent ou influencer une décision politique. L'intelligence économique n'est donc pas une simple veille documentaire, mais une véritable démarche offensive.
                            </p>

                            <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-gray-600 bg-gray-50 my-8">
                                "La guerre économique est la forme moderne de la guerre tout court. Elle ne tue pas physiquement, mais elle tue socialement, détruit des industries et asservit des nations."
                            </blockquote>

                            <div className="my-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">1. Les nouveaux paradigmes de la puissance</h3>
                                <p>
                                    La richesse d'une nation ne se mesure plus uniquement à son PIB ou à ses ressources naturelles, mais à sa capacité à innover et à protéger ses intérêts immatériels. La Chine, les États-Unis, et de plus en plus de pays émergents, ont intégré cette dimension dans leur stratégie de puissance nationale.
                                </p>
                            </div>

                            <p>
                                Pour les entreprises africaines, comprendre ces mécanismes est vital. L'absence de stratégie d'intelligence économique expose nos marchés à des prédations extérieures et limite notre capacité à nous projeter à l'international. Il est temps de passer de la défensive à la stratégie.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="h-14 bg-white border-t border-gray-200 flex items-center justify-center space-x-8 px-4 z-10">
                <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                    <FiChevronLeft />
                    <span className="hidden sm:inline">Précédent</span>
                </button>

                <span className="text-sm font-medium text-gray-900">
                    Page <input type="number" value={page} readOnly className="w-12 text-center border rounded mx-1" /> sur {totalPages}
                </span>

                <button
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                    <span className="hidden sm:inline">Suivant</span>
                    <FiChevronRight />
                </button>
            </div>
        </div>
    );
};
