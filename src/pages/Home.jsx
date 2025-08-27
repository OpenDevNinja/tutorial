import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play, CheckCircle, Calendar, Users, Target, ArrowRight } from 'lucide-react'
import Hero from '../components/Sections/Hero'
import ServicesPreview from '../components/Sections/ServicesPreview'
import Testimonials from './Testimonials'
import BlogPreview from '../components/Sections/BlogPreview'

const Home = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)

    const handleVideoPlay = () => {
        setIsVideoPlaying(true)
    }

    const questions = [
        "Votre enfant a-t-il des difficultés scolaires persistantes ?",
        "Cherchez-vous des méthodes d'apprentissage personnalisées ?",
        "Voulez-vous améliorer la confiance en soi de votre enfant ?",
        "Souhaitez-vous un accompagnement professionnel et bienveillant ?",
        "Désirez-vous voir des résultats concrets rapidement ?",
        "Avez-vous des questions sur le sujet de l'accompagnement ?",
       
    ];

    return (
        <>
            <Hero />

          
            <ServicesPreview />


               {/* Section Questions */}
                  <section className="py-20 bg-slate-50">
                    <div className="max-w-6xl mx-auto px-6">
                      <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-800 mb-6">
                          Si vous pouvez répondre OUI à ces questions,
                        </h2>
                        <p className="text-xl text-indigo-600 font-semibold">
                          alors réservez votre séance maintenant !
                        </p>
                      </div>
            
                      <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {questions.map((question, index) => (
                          <div key={index} className="group bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-start">
                              <div className="bg-emerald-100 p-2 rounded-full mr-4 group-hover:bg-emerald-200 transition-colors duration-300">
                                <CheckCircle className="w-6 h-6 text-emerald-600" />
                              </div>
                              <p className="text-slate-700 font-medium text-lg leading-relaxed">{question}</p>
                            </div>
                          </div>
                        ))}
                      </div>
            
                      
                    </div>
                  </section>
            


            {/* Section "Comment travailler avec nous" */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-12 items-center"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-slate-800 mb-6">Comment travailler avec nous</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Notre processus de collaboration est conçu pour maximiser les résultats tout en respectant
                                le rythme d'apprentissage de chaque élève. Voici comment nous procédons :
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-indigo-100 p-2 rounded-full mr-4 flex-shrink-0">
                                        <Calendar className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-1">1. Évaluation initiale gratuite</h3>
                                        <p className="text-slate-600">Nous commençons par une séance de diagnostic pour identifier les forces et les défis spécifiques.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-purple-100 p-2 rounded-full mr-4 flex-shrink-0">
                                        <Target className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-1">2. Plan personnalisé</h3>
                                        <p className="text-slate-600">Nous élaborons un programme sur mesure adapté aux besoins et objectifs de l'élève.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-teal-100 p-2 rounded-full mr-4 flex-shrink-0">
                                        <Users className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-1">3. Séances régulières</h3>
                                        <p className="text-slate-600">Nous organisons des séances aux horaires qui vous conviennent en ligne.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-emerald-100 p-2 rounded-full mr-4 flex-shrink-0">
                                        <CheckCircle className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-1">4. Suivi et ajustements</h3>
                                        <p className="text-slate-600">Nous évaluons régulièrement les progrès et ajustons notre approche si nécessaire.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Link
                                    to="/reservation"
                                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold"
                                >
                                    Réserver une évaluation gratuite
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </div>
                        </div>

                        <div className="order-first md:order-last">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Comment travailler avec nous"
                                    className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section Vidéo */}
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
                            <h2 className="text-3xl font-bold text-slate-800 mb-6">Découvrez notre méthode en action</h2>
                            <p className="text-lg text-slate-600 mb-6">
                                Notre approche pédagogique unique a déjà transformé l'apprentissage de centaines d'élèves.
                                Voyez par vous-même comment nous rendons les concepts complexes accessibles à tous.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-indigo-600 rounded-full mr-3"></div>
                                    <span className="text-slate-700">Techniques d'apprentissage interactives et engageantes</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-indigo-600 rounded-full mr-3"></div>
                                    <span className="text-slate-700">Techniques adaptées au style d'apprentissage et au rythme de l'enfant</span>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-indigo-600 rounded-full mr-3"></div>
                                    <span className="text-slate-700">Matériel pédagogique adapté à chaque niveau</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-indigo-600 rounded-full mr-3"></div>
                                    <span className="text-slate-700">Encouragement constant et renforcement positif</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-indigo-600 rounded-full mr-3"></div>
                                    <span className="text-slate-700">Suivi personnalisé des progrès accomplis</span>
                                </div>
                            </div>

                            
                        </div>

                        <div className="relative">
                            {!isVideoPlaying ? (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="w-full h-[400px] bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center cursor-pointer relative overflow-hidden group"
                                    onClick={handleVideoPlay}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                                    <div className="relative z-10 bg-white rounded-full p-5 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                        <Play className="w-10 h-10 text-indigo-600" />
                                    </div>
                                    <div className="absolute bottom-6 left-6 z-10 text-white font-semibold">
                                        Cliquez pour découvrir notre méthode
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg"
                                >
                                    <video
                                        controls
                                        autoPlay
                                        className="w-full h-full object-cover"
                                    >
                                        <source src="/videos/methode-tutorat.mp4" type="video/mp4" />
                                        Votre navigateur ne supporte pas la lecture de vidéos.
                                    </video>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

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
        </>
    )
}

export default Home