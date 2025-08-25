import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageCircle, Play, Star, CheckCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Configuration Firebase (à remplacer par vos vraies clés)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "123456789",
  appId: "YOUR_APP_ID"
};

const App = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [showVideoModal, setShowVideoModal] = useState(false);
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

  // Données de disponibilité (simulation)
  const availableDates = {
    '2025-08-26': ['09:00', '14:00', '16:30'],
    '2025-08-28': ['10:00', '15:00'],
    '2025-08-30': ['09:30', '11:00', '14:30'],
    '2025-09-02': ['09:00', '13:00', '16:00'],
    '2025-09-05': ['10:30', '14:00'],
    '2025-09-07': ['09:00', '15:30'],
    '2025-09-09': ['11:00', '16:00'],
    '2025-09-12': ['09:30', '14:30']
  };

  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  const testimonials = [
    {
      name: "Marie Dupont",
      role: "Mère de famille",
      content: "Grâce à cette formatrice, mon fils a retrouvé confiance en lui et ses notes se sont considérablement améliorées.",
      rating: 5,
      isVideo: true
    },
    {
      name: "Jean Martin",
      role: "Parent",
      content: "Un accompagnement personnalisé et professionnel. Je recommande vivement ces séances.",
      rating: 5,
      isVideo: false
    },
    {
      name: "Sophie Dubois",
      role: "Maman",
      content: "Ma fille était en difficulté, maintenant elle excelle dans ses études. Merci infiniment !",
      rating: 5,
      isVideo: true
    }
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

    try {
      // Ici vous intégrerez Firebase pour sauvegarder les données
      console.log('Données de réservation:', {
        ...formData,
        date: selectedDate,
        time: selectedTime,
        timestamp: new Date().toISOString()
      });

      alert('Votre réservation a été enregistrée avec succès ! Un email de confirmation vous sera envoyé.');
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
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];
    const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

    // En-tête des jours de la semaine
    const dayHeaders = dayNames.map(day => (
      <div key={day} className="text-center font-medium text-slate-600 py-2">
        {day}
      </div>
    ));

    // Cases vides pour aligner le premier jour
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
            className={`w-10 h-10 rounded-full text-sm font-medium transition-all ${isAvailable
                ? isSelected
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200 border-2 border-blue-300'
                : 'text-slate-400 cursor-not-allowed'
              }`}
          >
            {date}
          </button>
        </div>
      );
    }

    return (
      <div className="bg-white p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => {
              if (currentMonth === 0) {
                setCurrentMonth(11);
                setCurrentYear(currentYear - 1);
              } else {
                setCurrentMonth(currentMonth - 1);
              }
            }}
            className="p-2 hover:bg-slate-100 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h3 className="text-lg font-semibold text-slate-800">
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
            className="p-2 hover:bg-slate-100 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayHeaders}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-slate-800 text-center">
            Réservez votre séance de tutorat
          </h1>
          <p className="text-slate-600 text-center mt-2">
            Un accompagnement personnalisé pour la réussite de votre enfant
          </p>
        </div>
      </header>

      {/* Section Présentation */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Rencontrez votre formatrice experte
              </h2>
              <div className="w-80 h-80 mx-auto md:mx-0 bg-slate-200 rounded-full flex items-center justify-center mb-6">
                <User className="w-32 h-32 text-slate-400" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Marie-Claire Dubois</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Forte de plus de 15 ans d'expérience dans l'accompagnement pédagogique,
                je me spécialise dans l'aide aux enfants et adolescents en difficulté scolaire.
                Mon approche bienveillante et personnalisée a permis à des centaines d'élèves
                de retrouver confiance en eux et d'exceller dans leurs études.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">Diplômée en Sciences de l'Éducation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">15+ années d'expérience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-700">500+ élèves accompagnés avec succès</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Message Accrocheur */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Votre chemin vers le succès pourrait être à portée d'une simple réunion de travail...
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Découvrez comment transformer les difficultés de votre enfant en opportunités de croissance
          </p>
          <button
            onClick={() => setShowVideoModal(true)}
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            <Play className="w-6 h-6 mr-3" />
            Découvrir ma méthode en vidéo
          </button>
        </div>
      </section>

      {/* Section Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Si vous pouvez répondre OUI à ces questions, alors réservez votre séance maintenant !
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {questions.map((question, index) => (
              <div key={index} className="flex items-start p-6 bg-slate-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                <p className="text-slate-700 font-medium">{question}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => setShowCalendar(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Oui, je veux réserver ma séance !
            </button>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Ce que disent les parents
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                {testimonial.isVideo && (
                  <div className="w-full h-48 bg-slate-200 rounded-lg mb-4 flex items-center justify-center">
                    <Play className="w-12 h-12 text-slate-400" />
                  </div>
                )}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-slate-800">{testimonial.name}</p>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => setShowCalendar(true)}
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Réservez votre séance pour obtenir les mêmes résultats !
            </button>
          </div>
        </div>
      </section>

      {/* Modal Calendrier */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex justify-between items-center">
              <h3 className="text-2xl font-bold text-slate-800">Réservez votre séance</h3>
              <button
                onClick={() => setShowCalendar(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Calendrier */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Sélectionnez une date</h4>
                  {renderCalendar()}

                  {/* Heures disponibles */}
                  {selectedDate && availableDates[selectedDate] && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-4">Heures disponibles</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {availableDates[selectedDate].map(time => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-lg font-medium transition-colors ${selectedTime === time
                                ? 'bg-blue-600 text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
                  <h4 className="text-lg font-semibold mb-4">Vos informations</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Nom *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Écrivez ici vos questions ou les points que vous trouvez nécessaires qu'on aborde lors de l'appel stratégique
                      </label>
                      <textarea
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          required
                          checked={formData.acceptTerms}
                          onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                          className="mt-1 mr-3"
                        />
                        <span className="text-sm text-slate-600">
                          J'accepte les termes et conditions fournis par l'entreprise.
                          En fournissant mon numéro de téléphone, j'accepte de recevoir des SMS de l'entreprise.
                        </span>
                      </label>
                    </div>

                    <button
                      type="button"
                      onClick={handleFormSubmit}
                      disabled={!selectedDate || !selectedTime || !formData.acceptTerms}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
                    >
                      Confirmer ma réservation
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-8 text-center">
            <button
              onClick={() => setShowVideoModal(false)}
              className="float-right text-slate-400 hover:text-slate-600 mb-4"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Accédez à la vidéo de présentation
            </h3>

            <div className="w-full h-64 bg-slate-200 rounded-lg mb-6 flex items-center justify-center">
              <Play className="w-16 h-16 text-slate-400" />
            </div>

            <p className="text-slate-600 mb-6">
              Pour accéder à ma vidéo de présentation exclusive et découvrir ma méthode,
              veuillez d'abord réserver votre séance gratuite.
            </p>

            <button
              onClick={() => {
                setShowVideoModal(false);
                setShowCalendar(true);
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Réserver ma séance pour voir la vidéo
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2025 Séances de Tutorat - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;