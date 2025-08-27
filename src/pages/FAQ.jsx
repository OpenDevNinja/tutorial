import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, BookOpen, Clock, CreditCard, Mail } from 'lucide-react'
import { div } from 'framer-motion/client'
import Breadcrumb from '../components/UI/Breadcrumb'

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState('general')
    const [openItems, setOpenItems] = useState({})

    const toggleItem = (id) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    const categories = [
        {
            id: 'general',
            name: 'Général',
            icon: <HelpCircle className="w-5 h-5" />,
            questions: [
                {
                    id: 'gen-1',
                    question: "Qui peut bénéficier de vos services de tutorat ?",
                    answer: "Nos services s'adressent aux élèves du primaire et aux adultes. Que ce soit pour du soutien scolaire, de la remise à niveau ou de l'aide aux devoirs, nous adaptons notre approche à chaque apprenant."
                },
                {
                    id: 'gen-2',
                    question: "Comment se déroule la première séance ?",
                    answer: "La première séance est une séance d'évaluation gratuite où nous faisons connaissance avec l'élève, identifions ses difficultés et définissons ensemble un plan d'action personnalisé."
                },
                {
                    id: 'gen-3',
                    question: "Proposez-vous des cours en groupe ou individuels ?",
                    answer: "Nous proposons les deux formats selon les besoins. Les cours individuels permettent un accompagnement personnalisé, tandis que les cours en groupe (max. 4 élèves) favorisent les échanges et l'apprentissage collaboratif."
                }
            ]
        },
        {
            id: 'courses',
            name: 'Cours',
            icon: <BookOpen className="w-5 h-5" />,
            questions: [
                {
                    id: 'course-1',
                    question: "Quelles matières proposez-vous ?",
                    answer: "Nous couvrons l'ensemble des matières principales : lecture, écriture et mathématiques, ainsi que de l'aide aux devoirs toutes matières confondues."
                },
                {
                    id: 'course-2',
                    question: "Comment sont sélectionnés vos formateurs ?",
                    answer: "Nos formateurs sont rigoureusement sélectionnés sur leur expertise académique, leur expérience pédagogique et leurs qualités humaines. Tous sont diplômés et passent par un processus de recrutement exigeant."
                },
                // {
                //     id: 'course-3',
                //     question: "Proposez-vous une préparation aux examens ?",
                //     answer: "Oui, nous proposons des préparations spécifiques pour le brevet, le baccalauréat, ainsi que pour divers concours. Ces préparations incluent des entraînements aux épreuves, des revisions ciblées et des techniques de gestion du stress."
                // }
            ]
        },
        {
            id: 'schedule',
            name: 'Horaires & Disponibilités',
            icon: <Clock className="w-5 h-5" />,
            questions: [
                {
                    id: 'sched-1',
                    question: "Quels sont vos horaires d'ouverture ?",
                    answer: "Nous sommes disponibles du lundi au vendredi, de 17h à 20h et samedi, de 9h à 20h. Les cours peuvent avoir lieu en semaine, le week-end, et même en soirée selon les disponibilités des formateurs."
                },
                {
                    id: 'sched-2',
                    question: "Comment fonctionne la réservation de séances ?",
                    answer: "Vous pouvez réserver vos séances via notre plateforme en ligne, par téléphone ou par email. Nous vous recommandons de réserver à l'avance pour garantir la disponibilité des crénaux horaire qui vous conviennent."
                },
                {
                    id: 'sched-3',
                    question: "Puis-je annuler ou reporter une séance ?",
                    answer: "Oui, vous pouvez annuler ou reporter une séance sans frais jusqu'à 24h à l'avance. Passé ce délai, la séance peut être facturée. Nous faisons preuve de souplesse en cas d'empêchement exceptionnel."
                }
            ]
        },
        {
            id: 'payment',
            name: 'Tarifs & Paiement',
            icon: <CreditCard className="w-5 h-5" />,
            questions: [
                {
                    id: 'pay-1',
                    question: "Quels sont vos tarifs ?",
                    answer: "Nos tarifs varient selon le niveau, la durée et le type de cours (individuel ou en groupe). Une séance d'évaluation gratuite vous permet d'obtenir un devis personnalisé adapté à vos besoins."
                },
                {
                    id: 'pay-2',
                    question: "Quels modes de paiement acceptez-vous ?",
                    answer: "Nous acceptons les paiements par virement Interac."
                },
                {
                    id: 'pay-3',
                    question: "Proposez-vous des forfaits ou des abonnements ?",
                    answer: "Oui, nous proposons différents forfaits (5, 10 ou 20 séances) qui permettent de bénéficier de tarifs préférentiels. Nous avons également des abonnements mensuels pour un accompagnement régulier."
                }
            ]
        }
    ]

    const currentCategory = categories.find(cat => cat.id === activeCategory)

    return (
       <>
            <Breadcrumb title="Foire aux questions" subtitle="Trouvez les réponses aux questions les plus fréquentes" />

            <div className="min-h-screen bg-slate-50 py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl font-bold text-slate-800 mb-4">Foire aux questions</h1>
                        <p className="text-xl text-slate-600">Trouvez les réponses aux questions les plus fréquentes</p>
                    </motion.div>

                    {/* Category Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-wrap gap-4 justify-center mb-12"
                    >
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center px-6 py-3 rounded-full font-medium transition-colors ${activeCategory === category.id
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-white text-slate-700 hover:bg-slate-100'
                                    }`}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.name}
                            </button>
                        ))}
                    </motion.div>

                    {/* FAQ Items */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4 mb-12"
                    >
                        {currentCategory.questions.map((item, index) => (
                            <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className="w-full flex justify-between items-center p-6 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                                >
                                    <span>{item.question}</span>
                                    <ChevronDown className={`w-5 h-5 transform transition-transform ${openItems[item.id] ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {openItems[item.id] && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-slate-600">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </motion.div>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center"
                    >
                        <Mail className="w-12 h-12 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold mb-4">Vous ne trouvez pas de réponse ?</h2>
                        <p className="text-indigo-100 mb-6">Notre équipe est là pour répondre à toutes vos questions</p>
                        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                            Nous contacter
                        </button>
                    </motion.div>
                </div>
            </div>
       </>
    )
}

export default FAQ