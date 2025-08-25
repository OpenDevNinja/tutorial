import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageCircle, Play, Star, CheckCircle, X, ChevronLeft, ChevronRight, Heart, BookOpen, Award, GraduationCap, ChevronDown } from 'lucide-react';
import { db } from './firebase';
import { collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';
import { trainerAvailability, testimonials } from './data/availability';

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
  const [availableDates, setAvailableDates] = useState(trainerAvailability);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Charger les disponibilités depuis Firebase si nécessaire
    const fetchAvailability = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "availability"));
        const availabilityData = {};
        querySnapshot.forEach((doc) => {
          availabilityData[doc.id] = doc.data().timeSlots;
        });
        setAvailableDates({ ...trainerAvailability, ...availabilityData });
      } catch (error) {
        console.error("Erreur lors du chargement des disponibilités:", error);
      }
    };

    fetchAvailability();
  }, []);

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
      // Sauvegarde des données dans Firebase
      const docRef = await addDoc(collection(db, "bookings"), {
        ...formData,
        date: selectedDate,
        time: selectedTime,
        createdAt: serverTimestamp(),
        status: "pending"
      });

      console.log('Réservation enregistrée avec ID:', docRef.id);
      alert('Votre réservation a été enregistrée avec succès ! Un email de confirmation vous sera envoyé.');

      // Réinitialisation du formulaire
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
      console.error("Erreur lors de l'enregistrement:", error);
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
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'
              : 'text-slate-300 cursor-not-allowed'
              }`}
          >
            {date}
          </button>
        </div>
      );
    }

    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
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
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
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
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-slate-50 to-white shadow-sm relative overflow-hidden">
        {/* Effet de lumière */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-100 rounded-full opacity-30 blur-xl"></div>

        <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-6 relative inline-block">
              Réservez votre séance de tutorat
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-blue-400 rounded-full"></span>
            </h1>

            <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto mb-2">
              Un accompagnement personnalisé pour la réussite de votre enfant
            </p>

            {/* Séparateur décoratif */}
            <div className="flex justify-center mt-10">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-blue-200 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
            </div>
          </div>
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
              <div className="relative w-80 h-80 mx-auto md:mx-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-50"></div>

                <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/8wePFx6pRPVG52rJNgWE/media/65541f3c0410d2b9026e9a81.png"
                  
                  alt="" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Carine CAKPO</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Forte de plus de 15 ans d'expérience dans l'accompagnement pédagogique,
                je me spécialise dans l'aide aux enfants et adolescents en difficulté scolaire.
                Mon approche bienveillante et personnalisée a permis à des centaines d'élèves
                de retrouver confiance en eux et d'exceller dans leurs études.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <GraduationCap className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-slate-700">Diplômée en Sciences de l'Éducation</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-slate-700">15+ années d'expérience</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-slate-700">500+ élèves accompagnés avec succès</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Message Accrocheur */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Votre chemin vers le succès pourrait être à portée d'une simple réunion de travail...
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Découvrez comment transformer les difficultés de votre enfant en opportunités de croissance
          </p>
          <button
            onClick={() => setShowVideoModal(true)}
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-lg"
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
              <div key={index} className="flex items-start p-6 bg-slate-50 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                <p className="text-slate-700 font-medium">{question}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => setShowCalendar(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-lg"
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-all">
                {testimonial.isVideo && (
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-50"></div>
                    <div className="relative z-10 bg-white rounded-full p-3 shadow-lg">
                      <Play className="w-8 h-8 text-blue-600" />
                    </div>
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
                  <p className="text-slate-400 text-xs mt-1">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => setShowCalendar(true)}
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all transform hover:-translate-y-1 shadow-lg"
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
            <div className="p-6 border-b flex justify-between items-center bg-slate-50">
              <h3 className="text-2xl font-bold text-slate-800">Réservez votre séance</h3>
              <button
                onClick={() => setShowCalendar(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Calendrier */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    Sélectionnez une date
                  </h4>
                  {renderCalendar()}

                  {/* Heures disponibles */}
                  {selectedDate && availableDates[selectedDate] && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-blue-600" />
                        Heures disponibles
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {availableDates[selectedDate].map(time => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-lg font-medium transition-all ${selectedTime === time
                              ? 'bg-blue-600 text-white shadow-md'
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
                          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        <Mail className="w-4 h-4 inline mr-1" />
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        <Phone className="w-4 h-4 inline mr-1" />
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        <MessageCircle className="w-4 h-4 inline mr-1" />
                        Écrivez ici vos questions ou les points que vous trouvez nécessaires qu'on aborde lors de l'appel stratégique
                      </label>
                      <textarea
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                      disabled={!selectedDate || !selectedTime || !formData.acceptTerms || isSubmitting}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all transform hover:-translate-y-0.5 shadow-md flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      ) : null}
                      {isSubmitting ? 'Traitement...' : 'Confirmer ma réservation'}
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
              className="float-right text-slate-400 hover:text-slate-600 mb-4 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Accédez à la vidéo de présentation
            </h3>

            <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-50"></div>
              <div className="relative z-10 bg-white rounded-full p-4 shadow-lg">
                <Play className="w-12 h-12 text-blue-600" />
              </div>
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
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:-translate-y-0.5 shadow-md"
            >
              Réserver ma séance pour voir la vidéo
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <p className="text-slate-400">
            © 2025 Séances de Tutorat - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;