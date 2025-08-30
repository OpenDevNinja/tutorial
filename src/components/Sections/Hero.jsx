import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Star, CheckCircle, X } from 'lucide-react'
// Import de l'image et vidéo locales - ajustez les chemins selon votre structure
import heroImg from '../../assets/f2.png'
import videoFile from '../../assets/vid.mp4'

const Hero = () => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

    const openVideoModal = () => setIsVideoModalOpen(true)
    const closeVideoModal = () => setIsVideoModalOpen(false)

    return (
        <>
            <section className="relative min-h-screen overflow-hidden">
                {/* Image d'arrière-plan */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${heroImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />

                {/* Overlay avec dégradé pour la partie gauche */}
                <div className="absolute inset-0 z-1">
                    <div className="h-full w-full bg-gradient-to-r from-white via-white/95 to-transparent lg:w-3/5"></div>
                </div>

                {/* Overlay supplémentaire avec dégradé diagonal pour un effet plus sophistiqué */}
                <div className="absolute inset-0 z-2">
                    <div className="h-full w-full bg-gradient-to-br from-indigo-50/50 via-transparent to-transparent lg:w-2/3"></div>
                </div>

                {/* Éléments décoratifs subtils */}
                <div className="absolute top-20 right-20 w-64 h-64 bg-indigo-100 rounded-full opacity-20 blur-3xl z-3"></div>
                <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-100 rounded-full opacity-30 blur-2xl z-3"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[85vh]">
                        {/* Contenu texte à gauche avec fond semi-transparent */}
                        <div className="space-y-8 lg:pr-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center bg-white/90 backdrop-blur-sm text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold border border-indigo-100 shadow-sm"
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
                                className="text-lg lg:text-xl text-slate-700 leading-relaxed max-w-xl font-medium"
                            >
                                Un accompagnement personnalisé et professionnel pour les élèves
                                du primaire et les adultes. Méthodologie éprouvée, résultats garantis.
                            </motion.p>

                            {/* Points clés avec fond semi-transparent */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="space-y-3 bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/50"
                            >
                                {[
                                    'Suivi personnalisé adapté à chaque élève',
                                    'Méthodes pédagogiques innovantes',
                                    'Résultats mesurables et durables'
                                ].map((point, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span className="text-slate-800 font-semibold">{point}</span>
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
                                    className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl text-center group backdrop-blur-sm"
                                >
                                    Réserver maintenant
                                    <motion.div
                                        className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                                        whileHover={{ x: 2 }}
                                    >
                                        →
                                    </motion.div>
                                </a>
                                <button
                                    onClick={openVideoModal}
                                    className="inline-flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 border-white/70 hover:border-white shadow-lg group"
                                >
                                    <Play className="w-5 h-5 mr-2 fill-current group-hover:scale-110 transition-transform duration-200" />
                                    Voir la vidéo
                                </button>
                            </motion.div>
                        </div>

                        {/* Colonne droite vide pour laisser voir l'image */}
                        <div className="hidden lg:block"></div>
                    </div>
                </div>

                {/* Pattern décoratif en bas */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-10"></div>
            </section>

            {/* Modal Vidéo */}
            <AnimatePresence>
                {isVideoModalOpen && (
                    <>
                        {/* Overlay du modal */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                            onClick={closeVideoModal}
                        />

                        {/* Contenu du modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3, type: "spring", damping: 25 }}
                            className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
                        >
                            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl pointer-events-auto">
                                {/* Bouton de fermeture */}
                                <button
                                    onClick={closeVideoModal}
                                    className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-2 rounded-full transition-all duration-200 group"
                                    aria-label="Fermer la vidéo"
                                >
                                    <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200" />
                                </button>

                                {/* Lecteur vidéo */}
                                <video
                                    className="w-full h-full object-contain"
                                    controls
                                    autoPlay
                                    // Décommentez et ajustez le chemin de votre vidéo locale
                                    src={videoFile}
                                    // Pour la démo, j'utilise une vidéo exemple
                                   //</div> src="https://www.w3schools.com/html/mov_bbb.mp4"
                                >
                                    <source type="video/mp4" />
                                    Votre navigateur ne supporte pas la lecture de vidéos.
                                </video>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Hero