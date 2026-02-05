import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookShowcase } from '../BookShowcase';
import { FiCheckCircle, FiSearch, FiTrendingUp, FiMapPin, FiAward, FiShield } from 'react-icons/fi';
import serviceDueDiligence from '../assets/service_duediligence.png';
import serviceMonitoring from '../assets/service_monitoring.png';
import serviceProspection from '../assets/service_prospection.png';
import serviceTraining from '../assets/service_training.png';
import serviceReputation from '../assets/service_reputation.png';

const servicesData: Record<string, { title: string, subtitle: string, description: string, features: string[], icon: any, image: string }> = {
    'due-diligence': {
        title: "Due Diligence Institutionnelle",
        subtitle: "Sécurisez vos partenariats stratégiques",
        description: "Nous proposons des contrats annuels pour fournir des rapports d'antécédents approfondis sur les partenaires commerciaux internationaux. Notre objectif est de vous permettre d'éviter les 'projets éléphants blancs' et de minimiser les risques liés à la conformité et à la réputation.",
        features: [
            "Vérification approfondie des antécédents (KYC/KYB)",
            "Analyse de la solvabilité et de la réputation",
            "Cartographie des réseaux d'influence",
            "Détection des risques politiques et réglementaires"
        ],
        icon: FiSearch,
        image: serviceDueDiligence
    },
    'veille': {
        title: "Veille Sectorielle",
        subtitle: "Anticipez les mutations de votre marché",
        description: "Recevez des rapports mensuels personnalisés pour rester informé des dynamiques de votre environnement. Nous surveillons pour vous les indicateurs clés qui impactent votre activité.",
        features: [
            "Analyse détaillée de la concurrence",
            "Suivi de l'évolution des tarifs douaniers",
            "Surveillance des risques institutionnels et réglementaires",
            "Analyse d'impact des nouvelles lois de finances"
        ],
        icon: FiTrendingUp,
        image: serviceMonitoring
    },
    'prospection': {
        title: "Missions de Prospection",
        subtitle: "Votre passerelle vers l'Afrique Centrale",
        description: "Nous facilitons votre implantation en organisant vos missions commerciales de A à Z. De la logistique à la mise en relation, nous sommes votre partenaire terrain.",
        features: [
            "Organisation de rencontres institutionnelles et B2B",
            "Logistique complète de voyage d'affaires",
            "Briefings sécuritaires et économiques",
            "Accompagnement lors des rendez-vous stratégiques"
        ],
        icon: FiMapPin,
        image: serviceProspection
    },
    'formation': {
        title: "Formation en Intelligence Économique",
        subtitle: "Montez en compétence avec des experts",
        description: "Nous proposons des programmes certifiants intensifs pour former vos équipes aux méthodologies de pointe en veille et intelligence économique.",
        features: [
            "Programmes certifiants de deux semaines",
            "Animation par des experts internationaux",
            "Ateliers pratiques et cas réels",
            "Support de cours et suivi post-formation"
        ],
        icon: FiAward,
        image: serviceTraining
    },
    'e-reputation': {
        title: "E-Réputation & Influence",
        subtitle: "Maîtrisez votre image numérique",
        description: "Un service complet de protection et de gestion de l'identité numérique pour les professionnels, dirigeants et entreprises exposés.",
        features: [
            "Audit et cartographie de la présence en ligne",
            "Nettoyage de l'empreinte numérique et déréférencement",
            "Veille et protection contre le cyberharcèlement",
            "Construction d'image positive et Personal Branding"
        ],
        icon: FiShield,
        image: serviceReputation
    }
};

export const ServiceDetail = () => {
    const { serviceId } = useParams();

    // Normalize the service ID to ensure consistent matching
    const normalizedId = serviceId?.toLowerCase().trim();

    if (normalizedId === 'bibliotheque' || normalizedId === 'intelligence-economique') {
        return <BookShowcase />;
    }

    const service = normalizedId ? servicesData[normalizedId] : null;

    if (!service) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Service non trouvé ({serviceId})</h2>
                    <p className="text-gray-600">Le service demandé n'existe pas ou a été déplacé.</p>
                </div>
            </div>
        );
    }

    const Icon = service.icon;

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Header Section */}
            <div className="relative py-32 overflow-hidden flex items-center justify-center text-center">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    {/* Overlay removed as requested */}
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-xl mb-6 backdrop-blur-sm border border-white/20">
                            <Icon className="text-3xl text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {service.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
                            {service.subtitle}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">
                            Description du Service
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            {service.description}
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                                <FiCheckCircle className="text-primary mr-2" />
                                Pourquoi choisir ce service ?
                            </h4>
                            <p className="text-sm text-gray-600">
                                Notre expertise reconnue et notre connaissance approfondie du terrain nous permettent de vous offrir des solutions sur mesure, adaptées aux réalités du marché camerounais et sous-régional.
                            </p>
                        </div>

                        <div className="mt-8">
                            <button className="px-8 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg shadow-lg transition-all w-full md:w-auto">
                                Demander un devis
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">
                            Ce que nous proposons
                        </h3>
                        <div className="space-y-4">
                            {service.features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mt-1 mr-4">
                                        <span className="text-secondary font-bold text-sm">{idx + 1}</span>
                                    </div>
                                    <p className="text-gray-800 font-medium pt-1">{feature}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Contact CTA */}
                        <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10 text-center">
                            <p className="text-gray-700 mb-4 font-medium">Besoin de plus d'informations sur ce service ?</p>
                            <a href="/contact" className="text-primary font-bold hover:underline">Contactez nos experts &rarr;</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
