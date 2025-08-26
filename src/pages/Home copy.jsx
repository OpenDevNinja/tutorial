import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/Sections/Hero'
import ServicesPreview from '../components/Sections/ServicesPreview'

import BlogPreview from '../components/Sections/BlogPreview'
import Testimonials from './Testimonials'

const Home = () => {
    return (
        <div>
            <Hero />

            {/* Introduction Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">
                            Services en ligne adaptés à chaque besoin
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
                            Peu importent les défis que vous souhaitez surmonter, nous sommes ici pour vous aider
                            à chaque étape. Quel que soit le niveau : Préscolaire, Primaire, Secondaire, Adultes.
                        </p>
                        <Link
                            to="/services"
                            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                        >
                            Découvrir nos services
                        </Link>
                    </motion.div>
                </div>
            </section>

            <ServicesPreview />
            <Testimonials />
            <BlogPreview />

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6">Prêt à transformer l'apprentissage ?</h2>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            Réservez votre première séance et découvrez comment nous pouvons vous aider à atteindre vos objectifs.
                        </p>
                        <Link
                            to="/reservation"
                            className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                        >
                            Réserver maintenant
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Home