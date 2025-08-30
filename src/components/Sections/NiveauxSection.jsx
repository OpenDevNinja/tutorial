import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, PenTool, Calculator, User, Globe, Users, Award, Heart } from 'lucide-react';

const NiveauxSection = () => {
    return (
        <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">
                        Nos programmes par niveau
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Nous adaptons notre approche pédagogique aux besoins spécifiques de chaque groupe d'âge
                        et niveau d'apprentissage pour garantir des résultats optimaux.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Section Primaire */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-lg"
                    >
                        <div className="text-center mb-8">
                            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="w-8 h-8 text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">Primaire</h3>
                            <p className="text-slate-600">
                                Renforcement des bases et accompagnement personnalisé dans toutes les matières fondamentales
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                                    <BookOpen className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-1">Lecture</h4>
                                    <p className="text-slate-600">
                                        Développement de la fluidité et de la compréhension de lecture adaptées au rythme de chaque enfant.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-purple-100 p-2 rounded-full mr-4 flex-shrink-0">
                                    <PenTool className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-1">Écriture</h4>
                                    <p className="text-slate-600">
                                        Apprentissage de l'écriture, de l'orthographe et de l'expression écrite avec des méthodes ludiques.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-teal-100 p-2 rounded-full mr-4 flex-shrink-0">
                                    <Calculator className="w-5 h-5 text-teal-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-1">Mathématiques</h4>
                                    <p className="text-slate-600">
                                        Consolidation des concepts mathématiques de base avec des approches visuelles et concrètes.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-emerald-100 p-2 rounded-full mr-4 flex-shrink-0">
                                    <User className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-1">Accompagnement personnalisé</h4>
                                    <p className="text-slate-600">
                                        Suivi individualisé pour renforcer les acquis et développer l'autonomie d'apprentissage.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Section Adultes */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-lg"
                    >
                        <div className="text-center mb-8">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">Adultes</h3>
                            <p className="text-slate-600">
                                Adultes aux prises avec des défis d'apprentissage ou d'adaptation particuliers.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-red-100 p-2 rounded-full mr-4 flex-shrink-0">
                                    <Globe className="w-5 h-5 text-red-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-1">Francisation</h4>
                                    <p className="text-slate-600">
                                        Apprentissage du français langue seconde adapté aux besoins professionnels et personnels.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-pink-100 p-2 rounded-full mr-4 flex-shrink-0">
                                    <Users className="w-5 h-5 text-pink-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-1">Intégration</h4>
                                    <p className="text-slate-600">
                                        Accompagnement pour faciliter l'intégration sociale et professionnelle dans un nouvel environnement.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-yellow-100 p-2 rounded-full mr-4 flex-shrink-0">
                                    <Award className="w-5 h-5 text-yellow-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-1">Certification</h4>
                                    <p className="text-slate-600">
                                        Préparation aux examens et certifications officielles avec un suivi personnalisé.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-indigo-100 p-2 rounded-full mr-4 flex-shrink-0">
                                    <Heart className="w-5 h-5 text-indigo-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-1">Accompagnement personnalisé</h4>
                                    <p className="text-slate-600">
                                        Soutien adapté aux défis spécifiques d'apprentissage et aux objectifs personnels de chaque adulte.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
                        <h3 className="text-xl font-semibold text-slate-800 mb-4">
                            Un accompagnement sur mesure pour tous
                        </h3>
                        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                            Quel que soit votre âge ou votre niveau, nous adaptons nos méthodes pédagogiques
                            pour répondre à vos besoins spécifiques et vous accompagner vers la réussite.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                        >
                            Découvrir nos programmes
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default NiveauxSection;