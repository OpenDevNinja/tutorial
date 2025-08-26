import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Home, Settings, Users, FileText, Phone, Menu, X, BookOpen
} from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { currentPage, navigateTo } = useNavigation();

    const navigation = [
        { name: 'Accueil', id: 'home', icon: Home },
        { name: 'Services', id: 'services', icon: Settings },
        { name: 'À Propos', id: 'about', icon: Users },
        { name: 'Blog', id: 'blog', icon: FileText },
        { name: 'Contact', id: 'contact', icon: Phone }
    ];

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center py-4">
                    <motion.div
                        className="flex items-center cursor-pointer"
                        onClick={() => navigateTo('home')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                            <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <div className="ml-4">
                            <h1 className="text-2xl font-bold text-gray-800">Excellence Tutorat</h1>
                            <p className="text-sm text-gray-600">Transformez les difficultés en réussites</p>
                        </div>
                    </motion.div>

                    {/* Navigation Desktop */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => navigateTo(item.id)}
                                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${currentPage === item.id
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                                    }`}
                                whileHover={{ y: -2 }}
                                whileTap={{ y: 0 }}
                            >
                                <item.icon className="w-4 h-4 mr-2" />
                                {item.name}
                            </motion.button>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4">
                        <motion.button
                            onClick={() => navigateTo('reservation')}
                            className="hidden lg:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Réserver une séance
                        </motion.button>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Menu Mobile */}
                {isMobileMenuOpen && (
                    <motion.div
                        className="lg:hidden py-4 border-t border-gray-200"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <nav className="flex flex-col space-y-2">
                            {navigation.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        navigateTo(item.id);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-300 ${currentPage === item.id
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                                        }`}
                                >
                                    <item.icon className="w-5 h-5 mr-3" />
                                    {item.name}
                                </button>
                            ))}
                            <button
                                onClick={() => {
                                    navigateTo('reservation');
                                    setIsMobileMenuOpen(false);
                                }}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold mt-4"
                            >
                                Réserver une séance
                            </button>
                        </nav>
                    </motion.div>
                )}
            </div>
        </header>
    );
};

export default Header;