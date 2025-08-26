import React from 'react';
import { motion } from 'framer-motion';
import {
    Phone, Mail, MapPin, Send, MessageCircle,
    Facebook, Twitter, Instagram, Linkedin
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { siteData } from '../data/siteData';
import { useNavigation } from '../hooks/useNavigation';

const ContactPage = () => {
    const { navigateTo } = useNavigation();

    const contactInfo = [
        {
            icon: Phone,
            title: "Téléphone",
            info: siteData.company.phone,
            subInfo: "Lun-Ven: 9h-18h"
        },
        {
            icon: Mail,
            title: "Email",
            info: siteData.company.email,
            subInfo: "Réponse sous 24h"
        },
        {
            icon: MapPin,
            title: "Adresse",
            info: siteData.company.address,
            subInfo: "Cours à domicile ou en ligne"
        }
    ];

    const socialLinks = [
        { icon: Facebook, href: siteData.company.social.facebook, color: "bg-blue-600" },
        { icon: Twitter, href: siteData.company.social.twitter, color: "bg-blue-400" },
        { icon: Instagram, href: siteData.company.social.instagram, color: "bg-pink-600" },
        { icon: Linkedin, href: siteData.company.social.linkedin, color: "bg-blue-700" }
    ];

    return (
        <div>
            <Breadcrumb items={[
                { label: 'Accueil', href: true, onClick: () => navigateTo('home') },
                { label: 'Contact' }
            ]} />

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                            Contactez-nous
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                            Une question, un projet ? Nous sommes à votre écoute pour répondre à toutes vos interrogations.
                        </p>
                        <motion.button
                            onClick={() => navigateTo('reservation')}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Réserver une consultation
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {contactInfo.map((info, index) => {
                            const IconComponent = info.icon;

                            return (
                                <motion.div
                                    key={index}
                                    className="text-center group"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                                    <p className="text-gray-600 font-medium mb-1">{info.info}</p>
                                    <p className="text-gray-500 text-sm">{info.subInfo}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Contact Form */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-50 p-12 rounded-3xl">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                    Envoyez-nous un message
                                </h2>
                                <p className="text-gray-600">
                                    Nous vous répondrons dans les plus brefs délais
                                </p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid lg:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Prénom *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Nom *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Téléphone *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        <MessageCircle className="w-4 h-4 inline mr-2" />
                                        Message *
                                    </label>
                                    <textarea
                                        rows="6"
                                        required
                                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                        placeholder="Comment pouvons-nous vous aider ?"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Send className="w-5 h-5 mr-2" />
                                    Envoyer le message
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Links */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Suivez-nous</h2>
                        <p className="text-gray-600">Rejoignez notre communauté sur les réseaux sociaux</p>
                    </div>

                    <div className="flex justify-center space-x-6">
                        {socialLinks.map((social, index) => {
                            const IconComponent = social.icon;

                            return (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${social.color} text-white p-4 rounded-2xl hover:shadow-lg transition-all duration-300`}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ y: 0, scale: 1 }}
                                >
                                    <IconComponent className="w-6 h-6" />
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Localisation</h2>
                        <p className="text-gray-600">Nous nous déplaçons également à domicile dans toute l'Île-de-France</p>
                    </div>

                    <div className="bg-gray-200 h-96 rounded-3xl flex items-center justify-center">
                        <div className="text-center">
                            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600">Carte interactive disponible ici</p>
                            <p className="text-gray-500 text-sm mt-2">{siteData.company.address}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;