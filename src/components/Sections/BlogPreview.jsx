import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'

const BlogPreview = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Comment aider votre enfant à surmonter ses difficultés en mathématiques",
            excerpt: "Découvrez des méthodes efficaces pour transformer l'apprentissage des mathématiques...",
            date: "12 Mai 2023",
            author: "Carine CAKPO",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            title: "5 astuces pour améliorer la concentration chez les enfants",
            excerpt: "La concentration est un défi pour beaucoup d'enfants. Voici des techniques éprouvées...",
            date: "28 Avril 2023",
            author: "Carine CAKPO",
            image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            title: "L'importance de la confiance en soi dans la réussite scolaire",
            excerpt: "La confiance en soi est souvent le facteur déterminant entre l'échec et la réussite...",
            date: "15 Avril 2023",
            author: "Carine CAKPO",
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ]

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
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">Notre blog</h2>
                    <p className="text-xl text-slate-600">Conseils et actualités sur l'éducation</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <div className="flex items-center text-sm text-slate-500 mb-3">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    <span className="mr-4">{post.date}</span>
                                    <User className="w-4 h-4 mr-1" />
                                    <span>{post.author}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-800 mb-3">{post.title}</h3>
                                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                                <Link
                                    to={`/blog/${post.id}`}
                                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                                >
                                    Lire la suite
                                    <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link
                        to="/blog"
                        className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Voir tous les articles
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default BlogPreview