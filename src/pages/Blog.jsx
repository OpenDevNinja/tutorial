import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, Search, Tag, ArrowRight } from 'lucide-react'
import { div } from 'framer-motion/client'
import Breadcrumb from '../components/UI/Breadcrumb'

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('Tous')

    const categories = ['Tous', 'Pédagogie', 'Mathématiques', 'Français', 'Conseils', 'Actualités']

    const blogPosts = [
        {
            id: 1,
            title: "Comment aider votre enfant à surmonter ses difficultés en mathématiques",
            excerpt: "Découvrez des méthodes efficaces pour transformer l'apprentissage des mathématiques et rendre cette matière accessible et même amusante pour votre enfant...",
            date: "12 Mai 2023",
            author: "Carine CAKPO",
            category: "Mathématiques",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            readTime: "5 min"
        },
        {
            id: 2,
            title: "5 astuces pour améliorer la concentration chez les enfants",
            excerpt: "La concentration est un défi pour beaucoup d'enfants. Voici des techniques éprouvées pour les aider à développer leur capacité de concentration...",
            date: "28 Avril 2023",
            author: "Carine CAKPO",
            category: "Conseils",
            image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            readTime: "4 min"
        },
        {
            id: 3,
            title: "L'importance de la confiance en soi dans la réussite scolaire",
            excerpt: "La confiance en soi est souvent le facteur déterminant entre l'échec et la réussite scolaire. Découvrez comment la cultiver chez votre enfant...",
            date: "15 Avril 2023",
            author: "Carine CAKPO",
            category: "Pédagogie",
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            readTime: "6 min"
        },
        {
            id: 4,
            title: "Les bienfaits de la lecture quotidienne chez les jeunes enfants",
            excerpt: "La lecture régulière offre des bénéfices considérables pour le développement cognitif et émotionnel des enfants. Voici pourquoi et comment instaurer cette habitude...",
            date: "3 Avril 2023",
            author: "Carine CAKPO",
            category: "Français",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            readTime: "7 min"
        },
        {
            id: 5,
            title: "Adapter les méthodes d'apprentissage aux différents styles cognitifs",
            excerpt: "Chaque enfant apprend différemment. Découvrez comment identifier le style d'apprentissage de votre enfant et adapter les méthodes en conséquence...",
            date: "22 Mars 2023",
            author: "Carine CAKPO",
            category: "Pédagogie",
            image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            readTime: "8 min"
        },
        {
            id: 6,
            title: "Nouvelles réformes éducatives : ce qui change pour nos enfants",
            excerpt: "Le système éducatif évolue constamment. Tour d'horizon des dernières réformes et de leur impact sur l'apprentissage de nos enfants...",
            date: "10 Mars 2023",
            author: "Carine CAKPO",
            category: "Actualités",
            image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            readTime: "5 min"
        }
    ]

    const filteredPosts = activeCategory === 'Tous'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory)

    return (
        <>
            <Breadcrumb title="Blog" subtitle="Découvrez nos derniers: conseils, astuces et ressources" />

            <div className="min-h-screen bg-slate-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                   

                    {/* Search and Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-12"
                    >
                        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                            <div className="relative w-full md:w-96">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Rechercher un article..."
                                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-white text-slate-700 hover:bg-slate-100'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Blog Posts Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                    >
                        {filteredPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex items-center justify-between text-sm text-slate-500 mb-3">
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            <span className="mr-4">{post.date}</span>
                                            <User className="w-4 h-4 mr-1" />
                                            <span>{post.author}</span>
                                        </div>
                                        <span>{post.readTime}</span>
                                    </div>

                                    <div className="flex items-center mb-3">
                                        <Tag className="w-4 h-4 text-indigo-600 mr-2" />
                                        <span className="text-indigo-600 font-medium">{post.category}</span>
                                    </div>

                                    <h2 className="text-xl font-semibold text-slate-800 mb-3 hover:text-indigo-600 transition-colors cursor-pointer">
                                        {post.title}
                                    </h2>

                                    <p className="text-slate-600 mb-4">{post.excerpt}</p>

                                    <button className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                                        Lire la suite
                                        <ArrowRight className="w-4 h-4 ml-1" />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* Pagination */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex justify-center"
                    >
                        <div className="flex space-x-2">
                            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold">1</button>
                            <button className="px-4 py-2 bg-white text-slate-700 rounded-lg font-semibold hover:bg-slate-100">2</button>
                            <button className="px-4 py-2 bg-white text-slate-700 rounded-lg font-semibold hover:bg-slate-100">3</button>
                            <button className="px-4 py-2 bg-white text-slate-700 rounded-lg font-semibold hover:bg-slate-100">Suivant</button>
                        </div>
                    </motion.div>
                </div>
            </div>

        </>
    )
}

export default Blog