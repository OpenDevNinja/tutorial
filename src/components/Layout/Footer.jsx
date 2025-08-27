import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">Tutorat Top Succès</h3>
                        <p className="text-slate-300 mb-6">
                            Un accompagnement personnalisé et professionnel pour transformer les difficultés
                            scolaires en réussites exceptionnelles.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/carinecplumeroyale" target='_blank' className="text-slate-400 hover:text-indigo-400 transition-colors">
                                <Facebook className="h-6 w-6" />
                            </a>
                            {/* for youtube */}
                            <a href="https://youtube.com/@ccplumeroyale3258?si=-9XfNLSeM0ScjJRX" target='_blank' className="text-slate-400 hover:text-indigo-400 transition-colors">
                                <Youtube className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                                <Instagram className="h-6 w-6" />
                            </a>
                           
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-slate-300 hover:text-white transition-colors">Accueil</Link></li>
                            <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">À propos</Link></li>
                            <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Services</Link></li>
                            <li><Link to="/reservation" className="text-slate-300 hover:text-white transition-colors">Réservation</Link></li>
                            <li><Link to="/blog" className="text-slate-300 hover:text-white transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 text-indigo-400 mr-3" />
                                <span className="text-slate-300">+1 844 955 3998</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-5 w-5 text-indigo-400 mr-3" />
                                <span className="text-slate-300">contact@tutorat-excellence.fr</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="h-5 w-5 text-indigo-400 mr-3" />
                                <span className="text-slate-300">4297 Beaubien, Quebec, Canada</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="mt-12 pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h4 className="text-lg font-semibold">Abonnez-vous à notre newsletter</h4>
                            <p className="text-slate-300">Recevez des conseils et actualités sur l'éducation</p>
                        </div>
                        <div className="flex w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="px-4 py-2 rounded-l-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-64"
                            />
                            <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-lg transition-colors">
                                S'abonner
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 border-t border-slate-800 text-center text-slate-400">
                    <p>© 2025 Tutorat Top Succès. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer