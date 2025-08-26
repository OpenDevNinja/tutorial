import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Mail, Phone, MessageCircle, CheckCircle } from 'lucide-react'
import CalendarComponent from '../components/UI/Calendar'
import { div } from 'framer-motion/client';
import Breadcrumb from '../components/UI/Breadcrumb';

// Données simulées
const trainerAvailability = {
    "2025-08-26": ["09:00", "14:00", "16:30"],
    "2025-08-28": ["10:00", "15:00"],
    "2025-08-30": ["09:30", "11:00", "14:30"],
    "2025-09-02": ["09:00", "13:00", "16:00"],
    "2025-09-05": ["10:30", "14:00"],
    "2025-09-07": ["09:00", "15:30"],
    "2025-09-09": ["11:00", "16:00"],
    "2025-09-12": ["09:30", "14:30"],
    "2025-09-14": ["10:00", "15:00"],
    "2025-09-16": ["09:00", "13:30", "16:30"],
};

const Reservation = () => {
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState('')
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        acceptTerms: false
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        if (!formData.acceptTerms || !selectedDate || !selectedTime) {
            alert('Veuillez remplir tous les champs et accepter les conditions.')
            return
        }

        setIsSubmitting(true)
        try {
            // Simulation de l'envoi des données
            await new Promise(resolve => setTimeout(resolve, 2000))
            console.log('Réservation:', { ...formData, date: selectedDate, time: selectedTime })
            alert('Votre réservation a été enregistrée avec succès ! Un email de confirmation vous sera envoyé.')

            // Réinitialisation
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: '',
                acceptTerms: false
            })
            setSelectedDate(null)
            setSelectedTime('')
        } catch (error) {
            console.error("Erreur:", error)
            alert('Une erreur est survenue. Veuillez réessayer.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
       <>
            <Breadcrumb title="Réservez votre séance" subtitle="        Choisissez une date et heure disponible pour votre première séance de tutorat" />
            <div className="min-h-screen bg-slate-50 py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                 

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Calendrier et sélection d'horaire */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg"
                        >
                            <div className="flex items-center mb-6">
                                <Calendar className="w-8 h-8 text-indigo-600 mr-3" />
                                <h2 className="text-2xl font-bold text-slate-800">Sélectionnez une date</h2>
                            </div>

                            <CalendarComponent
                                availability={trainerAvailability}
                                selectedDate={selectedDate}
                                onDateSelect={setSelectedDate}
                            />

                            {selectedDate && trainerAvailability[selectedDate] && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="mt-8"
                                >
                                    <div className="flex items-center mb-4">
                                        <Clock className="w-6 h-6 text-indigo-600 mr-3" />
                                        <h3 className="text-xl font-semibold text-slate-800">Heures disponibles</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        {trainerAvailability[selectedDate].map(time => (
                                            <button
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={`p-3 rounded-lg font-semibold transition-all ${selectedTime === time
                                                    ? 'bg-indigo-600 text-white shadow-md'
                                                    : 'bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700'
                                                    }`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>

                        {/* Formulaire de réservation */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-white p-8 rounded-2xl shadow-lg"
                        >
                            <h2 className="text-2xl font-bold text-slate-800 mb-6">Vos informations</h2>

                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            <User className="w-4 h-4 inline mr-2" />
                                            Prénom *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            Nom *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        <Mail className="w-4 h-4 inline mr-2" />
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        <Phone className="w-4 h-4 inline mr-2" />
                                        Téléphone *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        <MessageCircle className="w-4 h-4 inline mr-2" />
                                        Questions ou points à aborder
                                    </label>
                                    <textarea
                                        rows="4"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>

                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <label className="flex items-start">
                                        <input
                                            type="checkbox"
                                            required
                                            checked={formData.acceptTerms}
                                            onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                                            className="mt-1 mr-3 w-5 h-5 text-indigo-600 rounded"
                                        />
                                        <span className="text-sm text-slate-600">
                                            J'accepte les termes et conditions. En fournissant mon numéro de téléphone,
                                            j'accepte de recevoir des SMS de confirmation.
                                        </span>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={!selectedDate || !selectedTime || !formData.acceptTerms || isSubmitting}
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                            Traitement en cours...
                                        </>
                                    ) : (
                                        <>
                                            <CheckCircle className="w-5 h-5 mr-2" />
                                            Confirmer ma réservation
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>

       </>
    )
}


export default Reservation