import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageCircle, Play, Star, CheckCircle, X, ChevronLeft, ChevronRight, Heart, BookOpen, Award, GraduationCap, ChevronDown } from 'lucide-react';

// Données simulées (remplacez par vos vraies données)
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
  "2025-09-19": ["11:00", "14:00"],
  "2025-09-21": ["09:30", "15:30"],
  "2025-09-23": ["10:00", "14:30"],
  "2025-09-26": ["09:00", "16:00"],
  "2025-09-28": ["10:30", "13:00", "15:00"],
  "2025-09-30": ["09:30", "14:00"],
};

const testimonials = [
  {
    id: 1,
    name: "Marie Dupont",
    role: "Mère de famille",
    content: "Grâce à cette formatrice, mon fils a retrouvé confiance en lui et ses notes se sont considérablement améliorées. Une vraie transformation !",
    rating: 5,
    isVideo: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    location: "Paris",
  },
  {
    id: 2,
    name: "Jean Martin",
    role: "Parent d'élève",
    content: "Un accompagnement personnalisé et professionnel. Ma fille était en échec scolaire, maintenant elle excelle. Je recommande vivement !",
    rating: 5,
    isVideo: false,
    location: "Lyon",
  },
  {
    id: 3,
    name: "Sophie Dubois",
    role: "Maman de deux enfants",
    content: "Mes enfants étaient en difficulté, maintenant ils sont dans le top de leur classe. Merci infiniment pour cette méthode !",
    rating: 5,
    isVideo: true,
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
    location: "Marseille",
  }
];

const App = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    acceptTerms: false
  });
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [availableDates, setAvailableDates] = useState(trainerAvailability);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  const questions = [
    "Votre enfant a-t-il des difficultés scolaires persistantes ?",
    "Cherchez-vous des méthodes d'apprentissage personnalisées ?",
    "Voulez-vous améliorer la confiance en soi de votre enfant ?",
    "Souhaitez-vous un accompagnement professionnel et bienveillant ?",
    "Désirez-vous voir des résultats concrets rapidement ?"
  ];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const isDateAvailable = (date) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    return availableDates[dateStr];
  };

  const handleDateSelect = (date) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    setSelectedDate(dateStr);
    setSelectedTime('');
  };

  const handleFormSubmit = async () => {
    if (!formData.acceptTerms || !selectedDate || !selectedTime) {
      alert('Veuillez remplir tous les champs et accepter les conditions.');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulation de l'envoi des données
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Réservation:', { ...formData, date: selectedDate, time: selectedTime });
      alert('Votre réservation a été enregistrée avec succès ! Un email de confirmation vous sera envoyé.');

      // Réinitialisation
      setShowCalendar(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        acceptTerms: false
      });
      setSelectedDate(null);
      setSelectedTime('');
    } catch (error) {
      console.error("Erreur:", error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];
    const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

    // En-tête des jours
    const dayHeaders = dayNames.map(day => (
      <div key={day} className="text-center font-semibold text-slate-700 py-3 text-sm">
        {day}
      </div>
    ));

    // Cases vides
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Jours du mois
    for (let date = 1; date <= daysInMonth; date++) {
      const isAvailable = isDateAvailable(date);
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
      const isSelected = selectedDate === dateStr;

      days.push(
        <div key={date} className="p-1">
          <button
            onClick={() => isAvailable && handleDateSelect(date)}
            disabled={!isAvailable}
            className={`w-12 h-12 rounded-xl text-sm font-semibold transition-all duration-300 ${isAvailable
                ? isSelected
                  ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-indigo-700 hover:bg-indigo-50 border-2 border-indigo-100 hover:border-indigo-300 hover:shadow-md'
                : 'text-slate-300 cursor-not-allowed bg-slate-50'
              }`}
          >
            {date}
          </button>
        </div>
      );
    }

    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => {
              if (currentMonth === 0) {
                setCurrentMonth(11);
                setCurrentYear(currentYear - 1);
              } else {
                setCurrentMonth(currentMonth - 1);
              }
            }}
            className="p-3 hover:bg-slate-100 rounded-full transition-all duration-300 hover:shadow-md"
          >
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h3 className="text-xl font-bold text-slate-800">
            {months[currentMonth]} {currentYear}
          </h3>
          <button
            onClick={() => {
              if (currentMonth === 11) {
                setCurrentMonth(0);
                setCurrentYear(currentYear + 1);
              } else {
                setCurrentMonth(currentMonth + 1);
              }
            }}
            className="p-3 hover:bg-slate-100 rounded-full transition-all duration-300 hover:shadow-md"
          >
            <ChevronRight className="w-6 h-6 text-slate-600" />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 mb-4">
          {dayHeaders}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {days}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
        {/* Éléments décoratifs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Accompagnement pédagogique d'excellence
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Réservez votre séance
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                de tutorat
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Un accompagnement personnalisé et professionnel pour transformer
              les difficultés scolaires en réussites exceptionnelles
            </p>

            <button
              onClick={() => setShowCalendar(true)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Réserver maintenant
            </button>
          </div>
        </div>
      </header>

      {/* Section Présentation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Experte certifiée
              </div>

              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Rencontrez votre formatrice experte
              </h2>

              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Carine CAKPO</h3>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Forte de plus de 15 ans d'expérience dans l'accompagnement pédagogique,
                je me spécialise dans l'aide aux enfants et adolescents en difficulté scolaire.
                Mon approche bienveillante et personnalisée a permis à des centaines d'élèves
                de retrouver confiance en eux et d'exceller dans leurs études.
              </p>

              <div className="space-y-4">
                <div className="flex items-center bg-slate-50 p-4 rounded-xl">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <GraduationCap className="w-6 h-6 text-indigo-600" />
                  </div>
                  <span className="text-slate-700 font-medium">Diplômée en Sciences de l'Éducation</span>
                </div>
                <div className="flex items-center bg-slate-50 p-4 rounded-xl">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="text-slate-700 font-medium">15+ années d'expérience reconnue</span>
                </div>
                <div className="flex items-center bg-slate-50 p-4 rounded-xl">
                  <div className="bg-emerald-100 p-3 rounded-full mr-4">
                    <Heart className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="text-slate-700 font-medium">500+ élèves accompagnés avec succès</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 text-center">
              <div className="relative inline-block">
                <div className="w-96 h-96 mx-auto bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
                  <img
                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/8wePFx6pRPVG52rJNgWE/media/65541f3c0410d2b9026e9a81.png"
                    alt="Carine CAKPO - Formatrice experte"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
                {/* Éléments décoratifs */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-200 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 rounded-full opacity-50 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Message Accrocheur */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full opacity-5"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white rounded-full opacity-5"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Votre chemin vers le succès pourrait être à portée d'une
            <span className="block text-yellow-300">simple réunion de travail...</span>
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
            Découvrez comment transformer les difficultés de votre enfant
            en opportunités de croissance exceptionnelle
          </p>
          <button
            onClick={() => {
              setSelectedVideo('https://www.youtube.com/embed/ScMzIvxBSi4');
              setShowVideoModal(true);
            }}
            className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <Play className="w-6 h-6 mr-3" />
            Découvrir ma méthode en vidéo
          </button>
        </div>
      </section>

      {/* Section Questions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Si vous pouvez répondre OUI à ces questions,
            </h2>
            <p className="text-xl text-indigo-600 font-semibold">
              alors réservez votre séance maintenant !
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {questions.map((question, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded-full mr-4 group-hover:bg-emerald-200 transition-colors duration-300">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <p className="text-slate-700 font-medium text-lg leading-relaxed">{question}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowCalendar(true)}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Oui, je veux réserver ma séance !
            </button>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Ce que disent les parents
            </h2>
            <p className="text-xl text-slate-600">
              Des résultats qui parlent d'eux-mêmes
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group border border-slate-200">
                {testimonial.isVideo ? (
                  <div
                    className="w-full h-48 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:shadow-md transition-shadow duration-300 cursor-pointer"
                    onClick={() => {
                      setSelectedVideo(testimonial.videoUrl);
                      setShowVideoModal(true);
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                    <div className="relative z-10 bg-white rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-indigo-600" />
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl mb-6 flex items-center justify-center">
                    <User className="w-16 h-16 text-slate-400" />
                  </div>
                )}

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-slate-600 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-slate-200 pt-4">
                  <p className="font-bold text-slate-800 text-lg">{testimonial.name}</p>
                  <p className="text-indigo-600 font-medium">{testimonial.role}</p>
                  <p className="text-slate-400 text-sm mt-1">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowCalendar(true)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Réservez votre séance pour obtenir les mêmes résultats !
            </button>
          </div>
        </div>
      </section>

      {/* Modal Calendrier */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-indigo-50 rounded-t-3xl">
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-bold text-slate-800">Réservez votre séance</h3>
                <button
                  onClick={() => setShowCalendar(false)}
                  className="text-slate-400 hover:text-slate-600 p-2 hover:bg-white rounded-full transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Calendrier */}
                <div>
                  <h4 className="text-xl font-bold mb-6 flex items-center text-slate-800">
                    <Calendar className="w-6 h-6 mr-3 text-indigo-600" />
                    Sélectionnez une date
                  </h4>
                  {renderCalendar()}

                  {/* Heures disponibles */}
                  {selectedDate && availableDates[selectedDate] && (
                    <div className="mt-8">
                      <h4 className="text-xl font-bold mb-6 flex items-center text-slate-800">
                        <Clock className="w-6 h-6 mr-3 text-indigo-600" />
                        Heures disponibles
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {availableDates[selectedDate].map(time => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-4 rounded-xl font-semibold transition-all duration-300 ${selectedTime === time
                                ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                                : 'bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-md'
                              }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Formulaire */}
                <div>
                  <h4 className="text-xl font-bold mb-6 text-slate-800">Vos informations</h4>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full p-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
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
                          className="w-full p-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
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
                        className="w-full p-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
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
                        className="w-full p-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
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
                        className="w-full p-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                      />
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl">
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          required
                          checked={formData.acceptTerms}
                          onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                          className="mt-1 mr-4 w-5 h-5 text-indigo-600 rounded"
                        />
                        <span className="text-sm text-slate-600 leading-relaxed">
                          J'accepte les termes et conditions fournis par l'entreprise.
                          En fournissant mon numéro de téléphone, j'accepte de recevoir des SMS de l'entreprise.
                        </span>
                      </label>
                    </div>

                    <button
                      type="button"
                      onClick={handleFormSubmit}
                      disabled={!selectedDate || !selectedTime || !formData.acceptTerms || isSubmitting}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-slate-400 disabled:to-slate-500 text-white py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Traitement en cours...
                        </>
                      ) : (
                        'Confirmer ma réservation'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Vidéo */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-slate-800">
                Vidéo de présentation
              </h3>
              <button
                onClick={() => {
                  setShowVideoModal(false);
                  setSelectedVideo('');
                }}
                className="text-slate-400 hover:text-slate-600 p-2 hover:bg-slate-100 rounded-full transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {selectedVideo ? (
                <div className="w-full h-96 mb-6">
                  <iframe
                    width="100%"
                    height="100%"
                    src={selectedVideo}
                    title="Vidéo de présentation"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl"
                  ></iframe>
                </div>
              ) : (
                <div className="w-full h-96 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                  <div className="relative z-10 bg-white rounded-full p-6 shadow-xl">
                    <Play className="w-16 h-16 text-indigo-600" />
                  </div>
                </div>
              )}

              <div className="text-center">
                <p className="text-lg text-slate-600 mb-6">
                  Découvrez ma méthode révolutionnaire qui a transformé la vie de centaines d'élèves.
                </p>
                <button
                  onClick={() => {
                    setShowVideoModal(false);
                    setSelectedVideo('');
                    setShowCalendar(true);
                  }}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Réserver ma séance maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="bg-indigo-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Transformez l'avenir de votre enfant</h3>
          <p className="text-slate-400 text-lg mb-8">
            Chaque grande réussite commence par un premier pas
          </p>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-500">
              © 2025 Séances de Tutorat - Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;