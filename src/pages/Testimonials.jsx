import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Star, MessageCircle, User } from 'lucide-react'
import Modal from '../components/UI/Modal'

const Testimonials = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)

    const testimonials = [
        {
            id: 1,
            name: "Marie Dubois",
            role: "Mère de Léa (15 ans)",
            content: "Grâce à Carine, ma fille a retrouvé confiance en elle. Ses notes sont passées de 8/20 à 16/20 en mathématiques en seulement 3 mois !",
            rating: 5,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            location: "Paris 15ème",
            isVideo: true,
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 2,
            name: "Jean Martin",
            role: "Père de Thomas (12 ans)",
            content: "Un accompagnement exceptionnel. Thomas était en échec scolaire, maintenant il est dans les premiers de sa classe. Merci pour cette transformation incroyable !",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            location: "Boulogne-Billancourt",
            isVideo: false
        },
        {
            id: 3,
            name: "Sophie Leroy",
            role: "Mère de jumeaux (9 ans)",
            content: "Carine a su s'adapter aux besoins spécifiques de mes jumeaux. L'un avait besoin de soutien en français, l'autre en mathématiques. Résultats spectaculaires pour les deux !",
            rating: 5,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80",
            location: "Versailles",
            isVideo: true,
            videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0"
        },
        {
            id: 4,
            name: "Pierre Moreau",
            role: "Père d'Emma (16 ans)",
            content: "Le bac de français approchait et Emma stressait énormément. Grâce aux séances de préparation intensives, elle a obtenu 17/20 à l'oral. Un immense merci !",
            rating: 5,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            location: "Neuilly-sur-Seine",
            isVideo: false
        },
        {
            id: 5,
            name: "Céline Petit",
            role: "Mère de Lucas (14 ans)",
            content: "Lucas avait complètement décroché après le confinement. Carine a su le remotiver et lui redonner le goût d'apprendre. Ses professeurs ont noté une nette amélioration.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80",
            location: "Saint-Germain-en-Laye",
            isVideo: true,
            videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4"
        },
        {
            id: 6,
            name: "Antoine Blanc",
            role: "Parent de Chloé (11 ans)",
            content: "Le soutien scolaire classique n'avait pas fonctionné. L'approche personnalisée de Carine a fait des miracles. Chloé adore maintenant ses séances de tutorat !",
            rating: 5,
            image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db1604?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
            location: "Levallois-Perret",
            isVideo: false
        }
    ]

    const videoTestimonials = testimonials.filter(testimonial => testimonial.isVideo)
    const textTestimonials = testimonials.filter(testimonial => !testimonial.isVideo)

    return (
        <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">Ils nous font confiance</h2>
                    <p className="text-xl text-slate-600">Découvrez les témoignages de parents et élèves</p>
                </motion.div>

                {/* Témoignages Vidéo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center justify-center mb-10">
                        <div className="bg-indigo-100 p-3 rounded-full mr-4">
                            <Play className="w-6 h-6 text-indigo-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">Témoignages en vidéo</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {videoTestimonials.map((testimonial) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div
                                    className="relative h-48 bg-gradient-to-br from-indigo-100 to-purple-100 cursor-pointer group"
                                    onClick={() => setSelectedVideo(testimonial.videoUrl)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-white rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <Play className="w-8 h-8 text-indigo-600" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 text-white font-semibold">
                                        Voir le témoignage
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex mb-3">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>

                                    <p className="text-slate-600 mb-4 italic">"{testimonial.content}"</p>

                                    <div className="flex items-center">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover mr-3"
                                        />
                                        <div>
                                            <p className="font-semibold text-slate-800">{testimonial.name}</p>
                                            <p className="text-sm text-slate-600">{testimonial.role}</p>
                                            <p className="text-xs text-slate-500">{testimonial.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Témoignages Texte */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-center mb-10">
                        <div className="bg-purple-100 p-3 rounded-full mr-4">
                            <MessageCircle className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">Témoignages écrits</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {textTestimonials.map((testimonial) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                <p className="text-slate-600 mb-6 italic">"{testimonial.content}"</p>

                                <div className="flex items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover mr-3"
                                    />
                                    <div>
                                        <p className="font-semibold text-slate-800">{testimonial.name}</p>
                                        <p className="text-sm text-slate-600">{testimonial.role}</p>
                                        <p className="text-xs text-slate-500">{testimonial.location}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-slate-600 mb-6">Rejoignez les nombreux parents satisfaits</p>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                        Réserver une séance d'essai
                    </button>
                </motion.div>
            </div>

            {/* Modal Vidéo */}
            {selectedVideo && (
                <Modal onClose={() => setSelectedVideo(null)}>
                    <div className="w-full h-96">
                        <iframe
                            width="100%"
                            height="100%"
                            src={selectedVideo}
                            title="Témoignage vidéo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-xl"
                        ></iframe>
                    </div>
                </Modal>
            )}
        </section>
    )
}

export default Testimonials