import { FiCheck } from 'react-icons/fi';

const PricingCard = ({ title, price, features, recommended = false }: { title: string, price: string, features: string[], recommended?: boolean }) => (
    <div className={`relative p-8 bg-white border rounded-2xl ${recommended ? 'border-primary shadow-xl scale-105 z-10' : 'border-gray-100 shadow-sm hover:shadow-md transition-shadow'}`}>
        {recommended && (
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wide">
                Recommandé
            </div>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-baseline mb-6">
            <span className="text-4xl font-bold text-gray-900">{price}</span>
            <span className="text-gray-500 ml-2">/ mois</span>
        </div>
        <ul className="space-y-4 mb-8">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-600">
                    <FiCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                    {feature}
                </li>
            ))}
        </ul>
        <button className={`w-full py-3 rounded-lg font-bold transition-colors ${recommended ? 'bg-primary text-white hover:bg-primary-hover' : 'bg-gray-50 text-gray-900 hover:bg-gray-100'}`}>
            Choisir ce plan
        </button>
    </div>
);

export const Pricing = () => {
    return (
        <div className="bg-white min-h-screen font-sans py-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm bg-primary/10 px-4 py-2 rounded-full">Tarification</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-6">Des offres adaptées à vos besoins</h1>
                    <p className="text-xl text-gray-600">Choisissez le plan qui correspond le mieux à votre stratégie d'intelligence économique.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    <PricingCard
                        title="Standard"
                        price="50 000 FCFA"
                        features={[
                            "Accès à la bibliothèque numérique (Livres)",
                            "Actualités sectorielles hebdomadaires",
                            "Newsletters mensuelles",
                            "Support par email"
                        ]}
                    />
                    <PricingCard
                        title="Professionnel"
                        price="150 000 FCFA"
                        recommended={true}
                        features={[
                            "Tout du plan Standard",
                            "Accès aux vidéos et conférences",
                            "Rapports d'analyses sectorielles (5/mois)",
                            "Accès prioritaire aux nouvelles publications",
                            "Support prioritaire"
                        ]}
                    />
                    <PricingCard
                        title="Entreprise"
                        price="Sur Devis"
                        features={[
                            "Accès illimité à toutes les ressources",
                            "Rapports personnalisés à la demande",
                            "Formations d'équipes (2 sessions/an)",
                            "Due Diligence (3 dossiers/an)",
                            "Gestionnaire de compte dédié"
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};
