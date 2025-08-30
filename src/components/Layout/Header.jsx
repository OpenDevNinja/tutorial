
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
 import { Play, Star, Menu, X, GraduationCap, CheckCircle, Calendar, Users, Target, ArrowRight } from 'lucide-react'
import logo1 from '../../assets/logo.jpeg'
import logo2 from '../../assets/logo1.jpeg'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navigation = [
        { name: 'Accueil', path: '/' },
        { name: 'À propos', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Réservation', path: '/reservation' },
        // { name: 'Blog', path: '/blog' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'bg-white text-slate-900 shadow-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
                <div className="flex justify-between items-center py-6">
                    {/* <div className="flex items-center space-x-2">
                        <div className={`p-2 rounded-lg ${isScrolled ? 'bg-indigo-600' : 'bg-indigo-600'
                            }`}>
                            <GraduationCap className="h-8 w-8 text-white" />
                        </div>
                        <span className="text-xl font-bold">Top Succès Tutorat </span>
                    </div> */}
                    <div className="flex items-center  h-[24px]  w-40">
                        <div >
                            {isScrolled ? (
                                <img src={logo1} alt="Logo 1" className='w-36 object-contain' />
                            ) : (
                                <img src={logo2} alt="Logo 2"  />
                            )}
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.path}
                                className={`px-3 py-2 rounded-md text-[16px] font-medium transition-colors ${isScrolled
                                        ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`focus:outline-none ${isScrolled ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                                }`}
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden pb-4"
                    >
                        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-lg ${isScrolled ? 'bg-slate-800' : 'bg-slate-100'
                            }`}>
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isScrolled
                                            ? 'text-slate-300 hover:text-white hover:bg-slate-700'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                                        }`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.header>
    )
}


export default Header