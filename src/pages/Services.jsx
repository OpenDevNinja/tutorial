import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Users, GraduationCap, UserCheck, Target, Clock, Shield, Award } from 'lucide-react'
import { div } from 'framer-motion/m'
import Breadcrumb from '../components/UI/Breadcrumb'

const Services = () => {
    const services = [
        {
            icon: <BookOpen className="w-10 h-10" />,
            title: "Préscolaire",
            description: "Éveil et développement des compétences fondamentales",
            features: ["Éveil à la lecture", "Développement psychomoteur", "Socialisation", "Activités ludiques"],
            color: "bg-blue-100 text-blue-600"
        },
        {
            icon: <Users className="w-10 h-10" />,
            title: "Primaire",
            description: "Renforcement des bases et accompagnement complet",
            features: ["Mathématiques", "Français", "Lecture", "Méthodologie"],
            color: "bg-purple-100 text-purple-600"
        },
        {
            icon: <GraduationCap className="w-10 h-10" />,
            title: "Secondaire",
            description: "Préparation aux examens et soutien spécialisé",
            features: ["Mathématiques", "Physique-Chimie", "Français", "Philosophie", "Langues"],
            color: "bg-indigo-100 text-indigo-600"
        },
        {
            icon: <UserCheck className="w-10 h-10" />,
            title: "Adultes",
            description: "Formation continue et remise à niveau",
            features: ["Alphabétisation", "Français Langue Étrangère", "Remise à niveau", "Préparation concours"],
            color: "bg-teal-100 text-teal-600"
        }
    ]

    const features = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Approche personnalisée",
            description: "Programmes adaptés aux besoins spécifiques de chaque apprenant"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Flexibilité horaire",
            description: "Cours disponibles en semaine, week-end et en soirée"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Encadrement qualifié",
            description: "Des professionnels expérimentés et diplômés"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Résultats garantis",
            description: "98% de nos élèves atteignent leurs objectifs"
        }
    ]

    return (

       <>
  <Breadcrumb title="Nos services" subtitle="Découvrez nos offres d'accompagnement éducatif" />
        <div className="min-h-screen bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                                {service.icon}
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h2>
                            <p className="text-slate-600 mb-6">{service.description}</p>
                            <ul className="space-y-2">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                                        <span className="text-slate-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Features Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-16"
                >
                    <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi nous choisir ?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-indigo-100">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">Prêt à commencer ?</h2>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Réservez votre première séance d'évaluation gratuite et découvrez comment nous pouvons vous aider
                    </p>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                        Réserver une séance d'essai
                    </button>
                </motion.div>
            </div>
        </div>
       </>
    )
}

export default Services