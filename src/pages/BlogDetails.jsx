import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, Clock, Tag, ArrowLeft, Play, MessageCircle, Share } from 'lucide-react'

const BlogDetails = () => {
    const { id } = useParams()
    const [isPlaying, setIsPlaying] = useState(false)

    // Données simulées (remplacer par vos données réelles)
    const blogPost = {
        id: 1,
        title: "Comment aider votre enfant à surmonter ses difficultés en mathématiques",
        content: `
      <p>Les mathématiques sont souvent perçues comme une matière difficile par de nombreux élèves. Pourtant, avec les bonnes méthodes et un accompagnement adapté, il est possible de transformer cette appréhension en passion.</p>
      
      <h2>Comprendre les difficultés</h2>
      <p>La première étape pour aider votre enfant est de comprendre la nature de ses difficultés. S'agit-il de :</p>
      <ul>
        <li>Problèmes de compréhension des concepts fondamentaux</li>
        <li>Difficultés à appliquer les formules</li>
        <li>Manque de confiance en soi</li>
        <li>Problèmes de concentration</li>
      </ul>
      
      <h2>Nos méthodes éprouvées</h2>
      <p>Chez Tutorat Top Succès, nous avons développé des méthodes spécifiques pour chaque type de difficulté :</p>
      
      <h3>Apprentissage par le jeu</h3>
      <p>Pour les plus jeunes, nous utilisons des jeux éducatifs qui rendent les mathématiques concrètes et amusantes.</p>
      
      <h3>Approche visuelle</h3>
      <p>Nous employons des techniques visuelles pour aider à la compréhension des concepts abstraits.</p>
      
      <h3>Exercices pratiques</h3>
      <p>Des mises en situation réelles permettent de comprendre l'utilité des mathématiques dans la vie quotidienne.</p>
      
      <blockquote>
        "La patience et la persévérance sont les clés de la réussite en mathématiques. Chaque enfant apprend à son rythme."
      </blockquote>
      
      <h2>Résultats tangibles</h2>
      <p>Nos élèves ont montré une amélioration significative de leurs résultats :</p>
      <ul>
        <li>+40% de moyenne en mathématiques</li>
        <li>90% des élèves retrouvent confiance en eux</li>
        <li>75% développent un réel intérêt pour la matière</li>
      </ul>
    `,
        excerpt: "Découvrez des méthodes efficaces pour transformer l'apprentissage des mathématiques...",
        date: "12 Mai 2023",
        author: "Carine CAKPO",
        category: "Mathématiques",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        readTime: "5 min",
        tags: ["Mathématiques", "Éducation", "Apprentissage", "Enfants"]
    }

    const relatedPosts = [
        {
            id: 2,
            title: "5 astuces pour améliorer la concentration chez les enfants",
            date: "28 Avril 2023",
            image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
            id: 3,
            title: "L'importance de la confiance en soi dans la réussite scolaire",
            date: "15 Avril 2023",
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
            id: 4,
            title: "Les bienfaits de la lecture quotidienne chez les jeunes enfants",
            date: "3 Avril 2023",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        }
    ]

    const handleVideoPlay = () => {
        setIsPlaying(true)
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Bouton retour */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Retour au blog
                    </Link>
                </motion.div>

                {/* Image principale */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8"
                >
                    <img
                        src={blogPost.image}
                        alt={blogPost.title}
                        className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-md"
                    />
                </motion.div>

                {/* En-tête de l'article */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="flex flex-wrap items-center text-sm text-slate-500 mb-4">
                        <div className="flex items-center mr-6 mb-2">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{blogPost.date}</span>
                        </div>
                        <div className="flex items-center mr-6 mb-2">
                            <User className="w-4 h-4 mr-1" />
                            <span>{blogPost.author}</span>
                        </div>
                        <div className="flex items-center mr-6 mb-2">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{blogPost.readTime} de lecture</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <Tag className="w-4 h-4 mr-1" />
                            <span className="text-indigo-600 font-medium">{blogPost.category}</span>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                        {blogPost.title}
                    </h1>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {blogPost.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </motion.header>

                {/* Contenu de l'article */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="prose prose-lg max-w-none mb-12"
                >
                    <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
                </motion.article>

                {/* Actions (partage, commentaires) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap gap-4 mb-12 py-6 border-t border-b border-slate-200"
                >
                    <button className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Laisser un commentaire
                    </button>
                    <button className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors">
                        <Share className="w-5 h-5 mr-2" />
                        Partager cet article
                    </button>
                </motion.div>

                {/* Section "Comment travailler avec nous" */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8 items-center mb-16"
                >
                    <div>
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">Comment travailler avec nous</h2>
                        <div className="space-y-4 text-slate-600">
                            <p>Notre processus de collaboration est conçu pour maximiser les résultats tout en respectant le rythme d'apprentissage de chaque élève.</p>

                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <div className="bg-indigo-100 text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                                    <p><strong>Évaluation initiale</strong> : Nous commençons par une séance d'évaluation gratuite pour identifier les forces et les faiblesses.</p>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-indigo-100 text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
                                    <p><strong>Plan personnalisé</strong> : Nous élaborons un programme sur mesure adapté aux besoins spécifiques de l'élève.</p>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-indigo-100 text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
                                    <p><strong>Séances régulières</strong> : Nous organisons des séances aux horaires qui vous conviennent, en présentiel ou en ligne.</p>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-indigo-100 text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">4</div>
                                    <p><strong>Suivi et ajustements</strong> : Nous évaluons régulièrement les progrès et ajustons notre approche si nécessaire.</p>
                                </div>
                            </div>

                            <p className="pt-4">Notre objectif est de rendre l'apprentissage agréable et efficace, tout en donnant à chaque élève les outils pour réussir par lui-même.</p>
                        </div>
                    </div>

                    <div className="order-first md:order-last">
                        <img
                            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                            alt="Comment travailler avec nous"
                            className="w-full h-96 object-cover rounded-2xl shadow-lg"
                        />
                    </div>
                </motion.section>

                {/* Section Vidéo */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8 items-center mb-16"
                >
                    <div>
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">Notre méthode en action</h2>
                        <div className="space-y-4 text-slate-600">
                            <p>Découvrez comment notre approche personnalisée fait la différence dans l'apprentissage des mathématiques.</p>

                            <p>Cette vidéo montre une séance typique où notre formatrice utilise des techniques interactives pour aider un élève à comprendre des concepts complexes.</p>

                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                                    <span>Techniques d'apprentissage visuelles</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                                    <span>Exercices pratiques et concrets</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                                    <span>Encouragement et renforcement positif</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                                    <span>Adaptation au rythme de l'élève</span>
                                </li>
                            </ul>

                            <p className="pt-4">Cette méthode a déjà aidé des centaines d'élèves à surmonter leurs difficultés et à retrouver confiance en leurs capacités.</p>
                        </div>
                    </div>

                    <div className="relative">
                        {!isPlaying ? (
                            <div
                                className="w-full h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center cursor-pointer relative overflow-hidden group"
                                onClick={handleVideoPlay}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                                <div className="relative z-10 bg-white rounded-full p-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                    <Play className="w-12 h-12 text-indigo-600" />
                                </div>
                                <div className="absolute bottom-4 left-4 z-10 text-white font-semibold">
                                    Cliquez pour lire la vidéo
                                </div>
                            </div>
                        ) : (
                            <video
                                controls
                                autoPlay
                                className="w-full h-96 rounded-2xl object-cover"
                            >
                                <source src="/videos/methode-tutorat.mp4" type="video/mp4" />
                                Votre navigateur ne supporte pas la lecture de vidéos.
                            </video>
                        )}
                    </div>
                </motion.section>

                {/* Articles similaires */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">Articles similaires</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {relatedPosts.map((post) => (
                            <article key={post.id} className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                    <p className="text-sm text-slate-500 mb-2">{post.date}</p>
                                    <h3 className="font-semibold text-slate-800 mb-2 line-clamp-2">{post.title}</h3>
                                    <Link
                                        to={`/blog/${post.id}`}
                                        className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                                    >
                                        Lire la suite
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    )
}

export default BlogDetails