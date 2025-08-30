import React from 'react'
import { motion } from 'framer-motion'
import { Play, Star, CheckCircle } from 'lucide-react'
import heroImg from '../../assets/im1.png'
const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Arrière-plan avec division diagonale */}
            <div className="absolute inset-0 bg-white"></div>
            <div
                className="absolute inset-0 "
          
            />

            {/* Éléments décoratifs subtils */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-100 rounded-full opacity-20 blur-2xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[85vh]">
                    {/* Contenu texte à gauche - Fond blanc */}
                    <div className="space-y-8 lg:pr-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold border border-indigo-100"
                        >
                            <Star className="w-4 h-4 mr-2 fill-current" />
                            Accompagnement pédagogique d'excellence
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-slate-900"
                        >
                            Transformez les{' '}
                            <span className="text-red-600">difficultés scolaires</span>
                            <br />
                            en{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                                réussites exceptionnelles
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl"
                        >
                            Un accompagnement personnalisé et professionnel pour les élèves
                            du primaire et les adultes. Méthodologie éprouvée, résultats garantis.
                        </motion.p>

                        {/* Points clés */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-3"
                        >
                            {[
                                'Suivi personnalisé adapté à chaque élève',
                                'Méthodes pédagogiques innovantes',
                                'Résultats mesurables et durables'
                            ].map((point, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{point}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <a
                                href="/reservation"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-center group"
                            >
                                Réserver maintenant
                                <motion.div
                                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                                    whileHover={{ x: 2 }}
                                >
                                    →
                                </motion.div>
                            </a>
                            <button className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 border-slate-200 hover:border-slate-300">
                                <Play className="w-5 h-5 mr-2 fill-current" />
                                Voir la vidéo
                            </button>
                        </motion.div>
                    </div>

                    {/* Image à droite */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="relative lg:pl-8"
                    >
                        <div className="relative">
                            {/* Image principale */}
                            <div className="relative overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={heroImg}
                                    alt="Étudiant en cours particulier"
                                    className="w-full h-[400px] sm:h-[500px] lg:h-[550px] object-cover transition-transform duration-700 hover:scale-105"
                                />
                               
                            </div>

                            {/* Card flottante avec statistiques */}
                            <motion.div
                                initial={{ opacity: 0, y: 20, x: -20 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="absolute -bottom-8 left-1 bg-white rounded-xl shadow-xl p-6 border border-slate-100"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-black text-indigo-600">98%</div>
                                        <div className="text-xs text-slate-600 font-medium">Réussite</div>
                                    </div>
                                    <div className="w-px h-8 bg-slate-200"></div>
                                    <div className="text-center">
                                        <div className="text-2xl font-black text-purple-600">500+</div>
                                        <div className="text-xs text-slate-600 font-medium">Élèves</div>
                                    </div>
                                    <div className="w-px h-8 bg-slate-200"></div>
                                    <div className="text-center">
                                        <div className="text-2xl font-black text-green-600">5★</div>
                                        <div className="text-xs text-slate-600 font-medium">Note</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Éléments décoratifs */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-10 blur-xl"></div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full opacity-10 blur-xl"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Pattern décoratif en bas */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </section>
    )
}

export default Hero