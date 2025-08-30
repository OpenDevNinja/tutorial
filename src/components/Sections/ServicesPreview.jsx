import React, { useState } from 'react'
import { Users, UserCheck, ArrowRight, Sparkles, Target, BookOpen } from 'lucide-react'

const ServicesPreview = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const services = [
        {
            icon: <Users className="w-10 h-10" />,
            title: "Primaire",
            description: "Renforcement des bases et accompagnement personnalisé dans toutes les matières fondamentales",
            features: ["Lecture ","Écriture ", "Mathématiques", "Accompagnement personnalisé"],
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-200",
            hoverColor: "group-hover:bg-purple-100"
        },
        {
            icon: <UserCheck className="w-10 h-10" />,
            title: "Adultes",
            description: "Adultes aux prises avec des défis d'apprentissage ou d'adaptation particuliers.",
            features: ["Francisation ", "Intégration ", "Certification", "Accompagnement personnalisé"],
            color: "from-teal-500 to-teal-600",
            bgColor: "bg-teal-50",
            borderColor: "border-teal-200",
            hoverColor: "group-hover:bg-teal-100"
        }
    ]

    const handleServicesClick = () => {
        // Navigation logic can be added here
        console.log('Navigate to services page')
    }

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.7; }
                    50% { opacity: 0.4; }
                }
                @keyframes card-appear {
                    from { opacity: 0; transform: translateY(40px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }
                .animate-slide-up {
                    animation: slide-up 0.6s ease-out 0.3s both;
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }
                .animate-card-appear {
                    animation: card-appear 0.6s ease-out forwards;
                }
            `}</style>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
                <div className="absolute top-40 right-10 w-40 h-40 bg-gradient-to-r from-teal-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-teal-100 px-6 py-2 rounded-full mb-6">
                        <Sparkles className="w-5 h-5 text-purple-600" />
                        <span className="text-sm font-semibold text-slate-700">Excellence Éducative</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent mb-6">
                        Nos Services d'Excellence
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Des programmes sur-mesure conçus pour accompagner chaque apprenant vers la réussite,
                        avec une approche personnalisée et des méthodes pédagogiques innovantes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 animate-card-appear"
                            onClick={handleServicesClick}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                animationDelay: `${index * 200}ms`
                            }}
                        >
                            <div className={`${service.bgColor} ${service.borderColor} border-2 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden ${service.hoverColor}`}>
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                                {/* Floating icon container */}
                                <div className="relative">
                                    <div className={`bg-gradient-to-r ${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ${hoveredIndex === index ? 'animate-float' : ''}`}>
                                        <div className="text-white">
                                            {service.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-600 text-lg leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
                                        {service.description}
                                    </p>

                                    {/* Features list */}
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                                                <span className="text-sm text-slate-600 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                   
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

              
            </div>
        </section>
    )
}

export default ServicesPreview