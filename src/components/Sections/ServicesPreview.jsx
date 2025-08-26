import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Users, GraduationCap, UserCheck } from 'lucide-react'

const ServicesPreview = () => {
    const services = [
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Préscolaire",
            description: "Éveil et développement des compétences fondamentales pour les tout-petits",
            color: "bg-blue-100 text-blue-600"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Primaire",
            description: "Renforcement des bases et accompagnement dans toutes les matières",
            color: "bg-purple-100 text-purple-600"
        },
        {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "Secondaire",
            description: "Préparation aux examens et soutien spécialisé par matière",
            color: "bg-indigo-100 text-indigo-600"
        },
        {
            icon: <UserCheck className="w-8 h-8" />,
            title: "Adultes",
            description: "Formation continue et remise à niveau pour les professionnels",
            color: "bg-teal-100 text-teal-600"
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
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">Nos services</h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Des programmes adaptés à chaque niveau et besoin éducatif
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">{service.title}</h3>
                            <p className="text-slate-600">{service.description}</p>
                        </motion.div>
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
                        to="/services"
                        className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Découvrir tous nos services
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default ServicesPreview