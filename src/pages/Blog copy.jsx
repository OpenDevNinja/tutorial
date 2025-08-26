import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Calendar, Clock, ArrowRight, X, ChevronLeft,
    BookOpen, Tag, User, Search
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import BlogCard from '../components/BlogCard';
import { siteData } from '../data/siteData';
import { useNavigation } from '../hooks/useNavigation';

const BlogPage = () => {
    const { navigateTo } = useNavigation();
    const [selectedPost, setSelectedPost] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tous');

    const categories = ["Tous", "Méthodologie", "Bien-être", "Organisation"];

    const filteredPosts = siteData.blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    if (selectedPost) {
        return (
            <div>
                <Breadcrumb items={[
                    { label: 'Accueil', href: true, onClick: () => navigateTo('home') },
                    { label: 'Blog', href: true, onClick: () => setSelectedPost(null) },
                    { label: selectedPost.title }
                ]} />

                <article className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="mb-12">
                            <motion.img
                                src={selectedPost.image}
                                alt={selectedPost.title}
                                className="w-full h-96 object-cover rounded-3xl shadow-2xl mb-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />

                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center space-x-4">
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                        {selectedPost.category}
                                    </span>
                                    <span className="text-gray-600">{selectedPost.readTime} de lecture</span>
                                </div>
                                <button
                                    onClick={() => setSelectedPost(null)}
                                    className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                                {selectedPost.title}
                            </h1>

                            <div className="flex items-center mb-8">
                                <img
                                    src={siteData.trainer.image}
                                    alt={selectedPost.author}
                                    className="w-12 h-12 rounded-full mr-4 object-cover"
                                />
                                <div>
                                    <p className="font-medium text-gray-800">{selectedPost.author}</p>
                                    <p className="text-gray-600 text-sm">
                                        {new Date(selectedPost.date).toLocaleDateString('fr-FR', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                {selectedPost.excerpt}
                            </p>
                            <div className="text-gray-700 leading-relaxed space-y-6">
                                {selectedPost.content.split('\n\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => setSelectedPost(null)}
                                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    <ChevronLeft className="w-5 h-5 mr-2" />
                                    Retour au blog
                                </button>
                                <motion.button
                                    onClick={() => navigateTo('contact')}
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Prendre rendez-vous
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }

    return (
        <div>
            <Breadcrumb items={[
                { label: 'Accueil', href: true, onClick: () => navigateTo('home') },
                { label: 'Blog' }
            ]} />

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Ressources pédagogiques
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                            Blog
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Conseils, astuces et réflexions pour accompagner la réussite scolaire de votre enfant
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters */}
            <section className="py-12 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-wrap justify-center gap-4">
                            {categories.map((category, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-3 rounded-full border-2 font-medium transition-all duration-300 ${selectedCategory === category
                                            ? 'border-blue-500 text-blue-600 bg-blue-50'
                                            : 'border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-500'
                                        }`}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ y: 0 }}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>

                        <div className="relative">
                            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Rechercher un article..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-3 rounded-full border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {filteredPosts.length > 0 ? (
                        <div className="grid lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post, index) => (
                                <BlogCard key={index} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="bg-gray-50 p-8 rounded-3xl max-w-md mx-auto">
                                <div className="bg-gray-200 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                                    <Search className="w-8 h-8 text-gray-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Aucun article trouvé</h3>
                                <p className="text-gray-600">
                                    Aucun article ne correspond à votre recherche. Essayez d'autres termes.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-3xl">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Restez Informés
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Recevez nos derniers conseils et astuces directement dans votre boîte mail
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Votre adresse email"
                                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <motion.button
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                S'abonner
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;