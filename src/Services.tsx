import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import serviceLibrary from './assets/service_library.png';
import serviceDueDiligence from './assets/service_duediligence.png';
import serviceMonitoring from './assets/service_monitoring.png';
import serviceProspection from './assets/service_prospection.png';
import serviceTraining from './assets/service_training.png';
import serviceReputation from './assets/service_reputation.png';


const ServiceCard = ({ title, description, details, image, link }: { title: string, description: string, details: string[], image: string, link: string }) => {
    const navigate = useNavigate();
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
            }}
            onClick={() => navigate(link)}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100 flex flex-col h-full overflow-hidden"
        >
            <div className="h-48 overflow-hidden relative">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-8 flex flex-col flex-grow relative">
                {/* Background decoration */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gray-50 rounded-tl-full -mr-4 -mb-4 z-0 transition-colors group-hover:bg-primary/5"></div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors relative z-10">
                    {title}
                </h3>

                <p className="text-gray-600 mb-6 relative z-10 text-sm">
                    {description}
                </p>

                <ul className="space-y-2 mb-8 flex-grow relative z-10">
                    {details.map((item, idx) => (
                        <li key={idx} className="flex items-start text-xs text-gray-500">
                            <span className="mr-2 text-primary mt-1">•</span>
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wide mt-auto relative z-10">
                    Découvrir
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
            </div>
        </motion.div>
    );
};

export const Services = () => {
    const services = [
        {
            title: 'Bibliothèque IE',
            description: 'Plateforme numérique par abonnement offrant un accès à des ressources documentaires spécialisées.',
            details: [
                'Thèses de doctorat en intelligence économique',
                'Revues scientifiques spécialisées',
                'Livres numériques (gratuits et payants)',
                'Rapports d\'analyses sectorielles'
            ],
            image: serviceLibrary, // Keep the generated image
            link: '/services/intelligence-economique'
        },
        {
            title: 'Due Diligence',
            description: 'Sécurisez vos partenariats avec des rapports d\'antécédents approfondis sur vos futurs collaborateurs.',
            details: [
                'Vérification de partenaires internationaux',
                'Prévention des "projets éléphants blancs"',
                'Analyse de risque de conformité',
                'Enquêtes de réputation'
            ],
            image: serviceDueDiligence,
            link: '/services/due-diligence'
        },
        {
            title: 'Veille Sectorielle',
            description: 'Rapports mensuels personnalisés pour anticiper les évolutions de votre marché.',
            details: [
                'Analyse de la concurrence',
                'Évolution des tarifs douaniers',
                'Alertes risques institutionnels',
                'Impact des lois de finances'
            ],
            image: serviceMonitoring,
            link: '/services/veille'
        },
        {
            title: 'Missions de Prospection',
            description: 'Votre partenaire logistique et institutionnel pour réussir votre implantation en Afrique.',
            details: [
                'Organisation de rencontres B2B/B2G',
                'Logistique de voyage d\'affaires',
                'Mise en relation institutionnelle',
                'Accompagnement terrain'
            ],
            image: serviceProspection,
            link: '/services/prospection'
        },
        {
            title: 'Formation en Intelligence Économique',
            description: 'Programmes certifiants animés par des experts internationaux en intelligence économique.',
            details: [
                'Sessions intensives de deux semaines',
                'Maîtrise des outils de l\'IE',
                'Certification reconnue',
                'Cas pratiques réels'
            ],
            image: serviceTraining, // Changed to image
            link: '/services/formation'
        },
        {
            title: 'E-Réputation',
            description: 'Protection intégrale de votre identité numérique et construction de votre image de marque.',
            details: [
                'Audit et cartographie présence web',
                'Nettoyage (Déréférencement)',
                'Veille et protection cyberharcèlement',
                'Personal Branding des dirigeants'
            ],
            image: serviceReputation,
            link: '/services/e-reputation'
        }
    ];

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden" id="services">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-primary font-bold tracking-wider uppercase text-sm bg-primary/10 px-4 py-2 rounded-full">Nos Expertises</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-6">Des solutions stratégiques pour votre croissance</h2>
                    <p className="text-xl text-gray-600">Nous accompagnons les décideurs dans la maîtrise de l'information stratégique pour sécuriser leurs décisions.</p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
