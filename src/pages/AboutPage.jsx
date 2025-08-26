import React from 'react';
import { motion } from 'framer-motion';
import {
    Heart, Target, Shield, Lightbulb,
    GraduationCap, Award, ChevronRight
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { siteData } from '../data/siteData';
import { useNavigation } from '../hooks/useNavigation';

const AboutPage = () => {
    const { navigateTo } = useNavigation();

    const achievements = [
        { year: "2009", title: "Création d'Excellence Tutorat", description: "Lancement de notre centre avec une vision claire : révéler le potentiel de chaque élève" },
        { year: "2012", title: "100 élèves accompagnés", description: "Première grande étape avec des résultats exceptionnels" },
        { year: "2016", title: "Expansion des services", description: "Développement de programmes spécialisés pour tous les niveaux" },
        { year: "2020", title: "Digitalisation", description: "Adaptation rapide avec les cours en ligne pendant la pandémie" },
        { year: "2025", title: "500+ réussites", description: "Aujourd'hui, plus de 500 élèves ont retrouvé confiance et excellence" }
    ];

    const values = [
        { icon: Heart, title: "Bienveillance", description: "Créer un environnement sécurisant où chaque élève peut s'épanouir sans jugement" },
        { icon: Target, title: "Excellence", description: "Viser l'excellence dans chaque accompagnement avec des méthodes éprouvées" },
        { icon: Shield, title: "Engagement", description: "S'engager pleinement dans la réussite de chaque élève avec détermination" },
        { icon: Lightbulb, title: "Innovation", description: "Intégrer les dernières recherches pédagogiques dans nos méthodes d'enseignement" }
    ];

    return (
        <div>
            <Breadcrumb items={[
                { label: 'Accueil', href: true, onClick: () => navigateTo('home') },
                { label: 'À Propos' }
            ]} />

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                            À Propos
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            L'histoire d'une passion pour l'éducation et l'accompagnement des jeunes vers la réussite
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">Notre Histoire</h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Excellence Tutorat est né en 2009 d'une conviction profonde : chaque enfant possède un potentiel unique qui ne demande qu'à être révélé. Fondé par {siteData.trainer.name}, diplômée en Sciences de l'Éducation, notre centre s'est rapidement imposé comme une référence dans l'accompagnement pédagogique personnalisé.
                                </p>
                                <p>
                                    Au fil des années, nous avons développé une approche unique qui combine expertise académique, bienveillance et méthodes innovantes. Notre mission va au-delà des simples cours de soutien : nous accompagnons chaque élève dans la construction de sa confiance en soi et de son autonomie.
                                </p>
                                <p>
                                    Aujourd'hui, avec plus de 500 élèves accompagnés et un taux de réussite de 95%, nous continuons d'évoluer pour offrir le meilleur accompagnement possible à chaque famille qui nous fait confiance.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <motion.img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                                alt="Notre histoire"
                                className="w-full rounded-3xl shadow-2xl"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            />
                            <motion.div
                                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl shadow-xl"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="text-white text-center">
                                    <div className="text-3xl font-bold">15+</div>
                                    <div className="text-blue-200">Années d'expertise</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Notre Parcours</h2>
                        <p className="text-xl text-gray-600">Les étapes clés de notre développement</p>
                    </div>

                    <div className="space-y-8">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start group"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex-shrink-0 w-24 text-right mr-8">
                                    <div className="text-2xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                        {achievement.year}
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 mr-8 group-hover:scale-150 transition-transform duration-300"></div>
                                <div className="flex-1 pb-8">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Nos Valeurs</h2>
                        <p className="text-xl text-gray-600">Les principes qui guident chacune de nos actions</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;

                            return (
                                <motion.div
                                    key={index}
                                    className="flex items-start group"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Notre Équipe</h2>
                        <p className="text-xl text-gray-600">Des professionnels passionnés au service de la réussite</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white p-12 rounded-3xl shadow-lg">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="text-center lg:text-left">
                                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{siteData.trainer.name}</h3>
                                    <p className="text-xl text-blue-600 mb-4">{siteData.trainer.title}</p>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{siteData.trainer.bio}</p>

                                    <div className="space-y-3">
                                        <div className="flex items-center justify-center lg:justify-start">
                                            <GraduationCap className="w-5 h-5 text-blue-600 mr-3" />
                                            <span className="text-gray-700">Diplômée en Sciences de l'Éducation</span>
                                        </div>
                                        <div className="flex items-center justify-center lg:justify-start">
                                            <Award className="w-5 h-5 text-purple-600 mr-3" />
                                            <span className="text-gray-700">{siteData.trainer.experience}</span>
                                        </div>
                                        <div className="flex items-center justify-center lg:justify-start">
                                            <Heart className="w-5 h-5 text-pink-600 mr-3" />
                                            <span className="text-gray-700">{siteData.trainer.students}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <motion.img
                                        src={siteData.trainer.image}
                                        alt={siteData.trainer.name}
                                        className="w-80 h-80 object-cover rounded-3xl shadow-2xl mx-auto"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full opacity-5"></div>
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white rounded-full opacity-5"></div>

                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                        Prêt à nous rejoindre ?
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                        Rejoignez les centaines de familles qui nous font confiance pour l'éducation de leurs enfants
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            onClick={() => navigateTo('contact')}
                            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Nous contacter
                        </motion.button>
                        <motion.button
                            onClick={() => navigateTo('reservation')}
                            className="border border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Réserver une séance
                        </motion.button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;