import React from 'react';
import { motion } from 'framer-motion';
import {
    Zap, Globe, Shield, Heart, CheckCircle, ArrowRight
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { siteData } from '../data/siteData';
import { useNavigation } from '../hooks/useNavigation';

const ServicesPage = () => {
    const { navigateTo } = useNavigation();

    const additionalFeatures = [
        { icon: Zap, title: "Résultats rapides", description: "Premiers résultats visibles dès les premières séances" },
        { icon: Globe, title: "Cours en ligne", description: "Flexibilité totale avec nos cours à distance" },
        { icon: Shield, title: "Garantie satisfaction", description: "Satisfait ou remboursé sous 30 jours" },
        { icon: Heart, title: "Suivi personnalisé", description: "Un accompagnement adapté à chaque profil d'élève" }
    ];

    return (
        <div>
            <Breadcrumb items={[
                { label: 'Accueil', href: true, onClick: () => navigateTo('home') },
                { label: 'Services' }
            ]} />

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                            Nos Services
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Des solutions pédagogiques personnalisées pour chaque étape du parcours scolaire de votre enfant
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {siteData.services.map((service, index) => {
                            const IconComponent = require('lucide-react')[service.icon];

                            return (
                                <motion.div
                                    key={index}
                                    className="group bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden flex items-center justify-center">
                                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                                            <IconComponent className="w-12 h-12 text-blue-600" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
                                    </div>

                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                                        <div className="space-y-3 mb-8">
                                            {service.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <motion.button
                                                onClick={() => navigateTo('reservation')}
                                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Réserver
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Additional Features */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            Nos Avantages
                        </h2>
                        <p className="text-xl text-gray-600">
                            Ce qui fait la différence dans notre accompagnement
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-8">
                        {additionalFeatures.map((feature, index) => {
                            const IconComponent = feature.icon;

                            return (
                                <motion.div
                                    key={index}
                                    className="text-center group"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </motion.div>
                            );
                        })}
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
                        Prêt à commencer ?
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                        Réservez dès maintenant votre consultation gratuite et découvrez comment nous pouvons aider votre enfant à exceller
                    </p>
                    <motion.button
                        onClick={() => navigateTo('reservation')}
                        className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Réserver ma consultation gratuite
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;