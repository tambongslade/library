import { FiUserPlus, FiSearch, FiTrendingUp } from 'react-icons/fi';

export const HowItWorks = () => {
    const steps = [
        {
            icon: FiUserPlus,
            title: "1. Créez votre compte",
            description: "Inscrivez-vous en quelques secondes pour accéder à notre plateforme sécurisée."
        },
        {
            icon: FiSearch,
            title: "2. Explorez nos ressources",
            description: "Accédez à des milliers de documents, rapports, thèses et vidéos spécialisés."
        },
        {
            icon: FiTrendingUp,
            title: "3. Développez votre stratégie",
            description: "Utilisez nos informations exclusives pour prendre des décisions éclairées."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen font-sans py-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm bg-primary/10 px-4 py-2 rounded-full">Guide Utilisateur</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-6">Comment ça marche ?</h1>
                    <p className="text-xl text-gray-600">Un processus simple et fluide pour accéder à l'excellence en intelligence économique.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {steps.map((step, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-colors group-hover:bg-primary/10"></div>

                            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <step.icon />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-block p-1 bg-white rounded-xl shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                            alt="Dashboard HAKAPOKA"
                            className="rounded-lg max-w-full md:max-w-4xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
