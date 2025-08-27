import React from 'react'
import { motion } from 'framer-motion'
import { Award, GraduationCap, Users, Heart } from 'lucide-react'
import Breadcrumb from '../components/UI/Breadcrumb'
import { div } from 'framer-motion/client'

const About = () => {
    return (
        <>
            <Breadcrumb title="À propos de nous" subtitle="Découvrez notre mission et notre approche pour transformer l'éducation" />
            <div className="min-h-screen bg-white py-12">


                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">


                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold text-slate-800 mb-6">Notre histoire</h2>
                            <p className="text-lg text-slate-600 mb-6">
                                Fondé en 2010, Tutorat Top Succès est né de la passion pour l'éducation et
                                du désir d'aider chaque élève à réaliser son potentiel maximum.
                            </p>
                            <p className="text-lg text-slate-600">
                                Notre approche personnalisée et bienveillante a permis à des centaines d'élèves
                                de surmonter leurs difficultés scolaires et de retrouver confiance en eux.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                                alt="Équipe Tutorat Top Succès"
                                className="rounded-2xl shadow-lg"
                            />
                        </motion.div>
                    </div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                    >
                        <div className="text-center">
                            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-indigo-600" />
                            </div>
                            <div className="text-3xl font-bold text-slate-800 mb-2">500+</div>
                            <div className="text-slate-600">Élèves accompagnés</div>
                        </div>

                        <div className="text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-purple-600" />
                            </div>
                            <div className="text-3xl font-bold text-slate-800 mb-2">15+</div>
                            <div className="text-slate-600">Années d'expérience</div>
                        </div>

                        <div className="text-center">
                            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <GraduationCap className="w-8 h-8 text-emerald-600" />
                            </div>
                            <div className="text-3xl font-bold text-slate-800 mb-2">98%</div>
                            <div className="text-slate-600">De réussite</div>
                        </div>

                        <div className="text-center">
                            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-8 h-8 text-pink-600" />
                            </div>
                            <div className="text-3xl font-bold text-slate-800 mb-2">100%</div>
                            <div className="text-slate-600">Satisfaction</div>
                        </div>
                    </motion.div>

                    {/* Mission Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="bg-slate-50 rounded-2xl p-8"
                    >
                        <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Notre mission</h2>
                        <p className="text-lg text-slate-600 text-center max-w-4xl mx-auto">
                            Offrir un accompagnement éducatif personnalisé de qualité qui permet à chaque élève,
                            quelque soit son niveau, de surmonter ses difficultés, de reprendre confiance en lui
                            et d'atteindre la réussite scolaire.
                        </p>
                    </motion.div>
                </div>
            </div>

        </>
    )
}

export default About