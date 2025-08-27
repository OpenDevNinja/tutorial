import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react'
import { div } from 'framer-motion/client'
import Breadcrumb from '../components/UI/Breadcrumb'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
        alert('Votre message a été envoyé avec succès !')
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <Breadcrumb title="Contactez-nous" subtitle="Nous sommes à votre écoute pour toute question" />

            <div className="min-h-screen bg-slate-50 py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h2 className="text-2xl font-bold text-slate-800 mb-6">Informations de contact</h2>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start">
                                    <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                                        <Mail className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">Email</h3>
                                        <p className="text-slate-600">contact@tutoratopsucces.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                                        <Phone className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">Téléphone</h3>
                                        <p className="text-slate-600">+1 844 955 3998</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-teal-100 p-3 rounded-lg mr-4">
                                        <MapPin className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">Adresse</h3>
                                        <p className="text-slate-600">4297 Beaubien, Quebec, Canada</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-orange-100 p-3 rounded-lg mr-4">
                                        <Clock className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">Horaires</h3>
                                        <p className="text-slate-600">Lun-Ven: 17h-20h | Sam: 9h-20h</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="bg-slate-200 rounded-2xl h-64">
                                {/* Intégration Google Maps ou autre service de cartographie */}
                                <div className="w-full h-full rounded-2xl flex items-center justify-center bg-gradient-to-br from-slate-300 to-slate-400">
                                    <MapPin className="w-12 h-12 text-slate-600" />
                                    <span className="ml-2 text-slate-700">Carte interactive</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg"
                        >
                            <h2 className="text-2xl font-bold text-slate-800 mb-6">Envoyez-nous un message</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            Nom complet *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            Téléphone
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            Sujet *
                                        </label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        >
                                            <option value="">Sélectionnez un sujet</option>
                                            <option value="information">Demande d'information</option>
                                            <option value="reservation">Réservation de séance</option>
                                            <option value="partnership">Partenariat</option>
                                            <option value="other">Autre</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        <MessageCircle className="w-4 h-4 inline mr-2" />
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                                >
                                    <Send className="w-5 h-5 mr-2" />
                                    Envoyer le message
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact