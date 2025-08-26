import React from 'react';
import { motion } from 'framer-motion';
import {
    Phone, Mail, MapPin, Facebook, Twitter, Instagram,
    Linkedin, BookOpen, ArrowRight
} from 'lucide-react';
import { siteData } from '../data/siteData';
import { useNavigation } from '../hooks/useNavigation';

const Footer = () => {
    const { navigateTo } = useNavigation();

    const navigation = [
        { name: 'Accueil', id: 'home' },
        { name: 'Services', id: 'services' },
        { name: 'À Propos', id: 'about' },
        { name: 'Blog', id: 'blog' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                                <BookOpen className="w-8 h-8 text-white" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-2xl font-bold">{siteData.company.name}</h3>
                                <p className="text-gray-400">{siteData.company.tagline}</p>
                            </div>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            {siteData.company.description}
                        </p>
                        <div className="flex space-x-4">
                            <motion.a
                                href={siteData.company.social.facebook}
                                className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors"
                                whileHover={{ y: -3 }}
                                whileTap={{ y: 0 }}
                            >
                                <Facebook className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href={siteData.company.social.twitter}
                                className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors"
                                whileHover={{ y: -3 }}
                                whileTap={{ y: 0 }}
                            >
                                <Twitter className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href={siteData.company.social.instagram}
                                className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors"
                                whileHover={{ y: -3 }}
                                whileTap={{ y: 0 }}
                            >
                                <Instagram className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href={siteData.company.social.linkedin}
                                className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors"
                                whileHover={{ y: -3 }}
                                whileTap={{ y: 0 }}
                            >
                                <Linkedin className="w-5 h-5" />
                            </motion.a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Navigation</h4>
                        <nav className="space-y-3">
                            {navigation.map(item => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => navigateTo(item.id)}
                                    className="block text-gray-400 hover:text-white transition-colors text-left"
                                    whileHover={{ x: 5 }}
                                >
                                    {item.name}
                                </motion.button>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact</h4>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                                <span className="text-gray-300">{siteData.company.phone}</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                                <span className="text-gray-300">{siteData.company.email}</span>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                                <span className="text-gray-300">{siteData.company.address}</span>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="mt-8">
                            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                            <div className="flex flex-col gap-2">
                                <input
                                    type="email"
                                    placeholder="Votre email"
                                    className="px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                                <motion.button
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    S'abonner
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2025 {siteData.company.name}. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;