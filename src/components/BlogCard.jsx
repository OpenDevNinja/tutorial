import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';

const BlogCard = ({ post }) => {
    const { navigateTo } = useNavigation();

    const handleClick = () => {
        navigateTo('blog');
        // Vous pourriez aussi passer l'ID du post pour afficher le détail
    };

    return (
        <motion.article
            className="group cursor-pointer"
            onClick={handleClick}
            whileHover={{ y: -5 }}
        >
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                        </span>
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString('fr-FR')}
                        </div>
                        <div className="flex items-center text-sm text-blue-600">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                        </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img
                                src="https://images.unsplash.com/photo-1494790108755-2616b75d8c9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                                alt={post.author}
                                className="w-8 h-8 rounded-full mr-3 object-cover"
                            />
                            <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

export default BlogCard;