import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BookOpen, Hand, Heart, Focus, TrendingUp, Smile, ArrowRight } from 'lucide-react';
import heroImg from '../../assets/h1.png'
const ServicesSection = () => {
   
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={heroImg}
                                alt="Nos services spécialisés"
                                className="w-full h-[800px] object-cover rounded-2xl shadow-lg"
                            />
                        </motion.div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">
                            Nos services s'adressent aux apprenants confrontés à :
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Nous accompagnons chaque élève avec des approches personnalisées adaptées à ses défis
                            spécifiques, dans un environnement bienveillant et professionnel.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                                    <Brain className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-1">
                                        Un trouble développemental du langage – dysphasie
                                    </h3>
                                    <p className="text-slate-600">
                                        Accompagnement spécialisé pour développer les compétences langagières.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-indigo-100 p-2 rounded-full mr-4 flex-shrink-0">
                                    <BookOpen className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-1">
                                        Un trouble du langage écrit – dyslexie et/ou dysorthographie
                                    </h3>
                                    <p className="text-slate-600">
                                        Méthodes adaptées pour surmonter les difficultés de lecture et d'écriture.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-purple-100 p-2 rounded-full mr-4 flex-shrink-0">
                                    <Hand className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-1">
                                        Un trouble développemental de la coordination – dyspraxie
                                    </h3>
                                    <p className="text-slate-600">
                                        Stratégies pour améliorer la coordination et les gestes d'apprentissage.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-pink-100 p-2 rounded-full mr-4 flex-shrink-0">
                                    <Heart className="w-6 h-6 text-pink-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-1">Un trouble anxieux</h3>
                                    <p className="text-slate-600">
                                        Approche bienveillante pour gérer l'anxiété et retrouver confiance.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-teal-100 p-2 rounded-full mr-4 flex-shrink-0">
                                    <Focus className="w-6 h-6 text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-1">Un TDA ou un TDA/H</h3>
                                    <p className="text-slate-600">
                                        Techniques spécialisées pour améliorer l'attention et la concentration.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-orange-100 p-2 rounded-full mr-4 flex-shrink-0">
                                    <TrendingUp className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-1">Une faible motivation scolaire</h3>
                                    <p className="text-slate-600">
                                        Méthodes pour redonner le goût d'apprendre et développer l'autonomie.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-emerald-100 p-2 rounded-full mr-4 flex-shrink-0">
                                    <Smile className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-1">Une faible estime de soi</h3>
                                    <p className="text-slate-600">
                                        Accompagnement pour renforcer la confiance et valoriser les réussites.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a
                                href="/contact"
                                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
                            >
                                En savoir plus sur nos services
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;