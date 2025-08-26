import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageCircle, Play, Star, CheckCircle, X, ChevronLeft, ChevronRight, Heart, BookOpen, Award, GraduationCap, ChevronDown, Menu, Home, Settings, Users, FileText, Phone as ContactIcon, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Target, Lightbulb, TrendingUp, Shield, Zap, Globe } from 'lucide-react';

// Données centralisées
const siteData = {
  company: {
    name: "Excellence Tutorat",
    tagline: "Transformez les difficultés en réussites",
    description: "Un accompagnement pédagogique personnalisé pour révéler le potentiel de chaque élève",
    phone: "+33 1 23 45 67 89",
    email: "contact@excellence-tutorat.fr",
    address: "123 Avenue de l'Éducation, 75001 Paris",
    social: {
      facebook: "https://facebook.com/excellencetutorat",
      twitter: "https://twitter.com/excellencetutorat",
      instagram: "https://instagram.com/excellencetutorat",
      linkedin: "https://linkedin.com/company/excellencetutorat"
    }
  },
  trainer: {
    name: "Carine CAKPO",
    title: "Formatrice Experte Certifiée",
    experience: "15+ années d'expérience",
    students: "500+ élèves accompagnés",
    image: "https://images.unsplash.com/photo-1494790108755-2616b75d8c9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    bio: "Diplômée en Sciences de l'Éducation avec plus de 15 ans d'expérience dans l'accompagnement pédagogique. Je me spécialise dans l'aide aux enfants et adolescents en difficulté scolaire avec une approche bienveillante et personnalisée."
  },
  services: [
    {
      id: 1,
      title: "Soutien Scolaire Individuel",
      description: "Accompagnement personnalisé pour toutes les matières du primaire au lycée",
      price: "45€/heure",
      duration: "1h",
      features: ["Évaluation personnalisée", "Plan d'apprentissage adapté", "Suivi des progrès", "Matériel pédagogique inclus"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
    },
    {
      id: 2,
      title: "Préparation aux Examens",
      description: "Préparation intensive pour le brevet, baccalauréat et concours d'entrée",
      price: "55€/heure",
      duration: "1h30",
      features: ["Méthodologie d'examen", "Tests blancs", "Gestion du stress", "Stratégies de révision"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "Aide aux Devoirs",
      description: "Support quotidien pour l'organisation et la réalisation des devoirs",
      price: "35€/heure",
      duration: "1h",
      features: ["Organisation du travail", "Méthodes d'apprentissage", "Motivation", "Autonomie progressive"],
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      title: "Remise à Niveau",
      description: "Programme intensif pour combler les lacunes et rattraper le retard",
      price: "50€/heure",
      duration: "1h30",
      features: ["Diagnostic approfondi", "Plan de rattrapage", "Exercices ciblés", "Évaluation continue"],
      image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Mère de Léa (15 ans)",
      content: "Grâce à Carine, ma fille a retrouvé confiance en elle. Ses notes sont passées de 8/20 à 16/20 en mathématiques !",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      location: "Paris 15ème"
    },
    {
      id: 2,
      name: "Jean Martin",
      role: "Père de Thomas (12 ans)",
      content: "Un accompagnement exceptionnel. Thomas était en échec scolaire, maintenant il est dans les premiers de sa classe.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      location: "Boulogne-Billancourt"
    },
    {
      id: 3,
      name: "Sophie Lefebvre",
      role: "Maman de Julie et Pierre",
      content: "Mes deux enfants étaient en difficulté. Aujourd'hui, ils excellent et ont retrouvé le goût d'apprendre !",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b75d8c9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      location: "Neuilly-sur-Seine"
    }
  ],
  blogPosts: [
    {
      id: 1,
      title: "5 Méthodes Efficaces pour Améliorer la Concentration",
      excerpt: "Découvrez des techniques éprouvées pour aider votre enfant à mieux se concentrer pendant ses études.",
      content: "La concentration est l'une des clés de la réussite scolaire. Dans cet article, nous explorons 5 méthodes pratiques et scientifiquement prouvées pour améliorer la capacité de concentration de votre enfant...",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      author: "Carine CAKPO",
      date: "2024-03-15",
      category: "Méthodologie",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Comment Gérer le Stress des Examens",
      excerpt: "Les techniques de relaxation et de préparation mentale pour aborder sereinement les examens.",
      content: "Le stress des examens peut paralyser même les meilleurs élèves. Voici des stratégies concrètes pour transformer cette anxiété en énergie positive...",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      author: "Carine CAKPO",
      date: "2024-03-10",
      category: "Bien-être",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "L'Importance de l'Organisation dans la Réussite Scolaire",
      excerpt: "Comment une bonne organisation peut transformer les résultats scolaires de votre enfant.",
      content: "L'organisation n'est pas qu'une compétence, c'est un véritable atout pour la réussite. Découvrez comment l'enseigner efficacement...",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      author: "Carine CAKPO",
      date: "2024-03-05",
      category: "Organisation",
      readTime: "6 min"
    }
  ],
  availability: {
    "2025-08-26": ["09:00", "14:00", "16:30"],
    "2025-08-28": ["10:00", "15:00"],
    "2025-08-30": ["09:30", "11:00", "14:30"],
    "2025-09-02": ["09:00", "13:00", "16:00"],
    "2025-09-05": ["10:30", "14:00"],
    "2025-09-07": ["09:00", "15:30"],
    "2025-09-09": ["11:00", "16:00"],
    "2025-09-12": ["09:30", "14:30"],
    "2025-09-14": ["10:00", "15:00"],
    "2025-09-16": ["09:00", "13:30", "16:30"]
  }
};

// Composant Breadcrumb
const Breadcrumb = ({ items }) => (
  <nav className="bg-slate-50 py-4">
    <div className="max-w-7xl mx-auto px-6">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 text-slate-400 mx-2" />}
            {item.href ? (
              <button
                onClick={() => item.onClick && item.onClick()}
                className="text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <span className="text-slate-600">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  </nav>
);

// Composant Header
const Header = ({ currentPage, onPageChange, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navigation = [
    { name: 'Accueil', id: 'home', icon: Home },
    { name: 'Services', id: 'services', icon: Settings },
    { name: 'À Propos', id: 'about', icon: Users },
    { name: 'Blog', id: 'blog', icon: FileText },
    { name: 'Contact', id: 'contact', icon: ContactIcon }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-xl">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-slate-800">{siteData.company.name}</h1>
              <p className="text-sm text-slate-600">{siteData.company.tagline}</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${currentPage === item.id
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                  }`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => onPageChange('contact')}
              className="hidden lg:block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Réserver une séance
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-slate-100"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-300 ${currentPage === item.id
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                    }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  onPageChange('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold mt-4"
              >
                Réserver une séance
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Composant Footer
const Footer = ({ onPageChange }) => (
  <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-xl">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold">{siteData.company.name}</h3>
              <p className="text-slate-400">{siteData.company.tagline}</p>
            </div>
          </div>
          <p className="text-slate-300 mb-6 leading-relaxed">
            {siteData.company.description}
          </p>
          <div className="flex space-x-4">
            <a href={siteData.company.social.facebook} className="bg-slate-700 p-3 rounded-lg hover:bg-slate-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href={siteData.company.social.twitter} className="bg-slate-700 p-3 rounded-lg hover:bg-slate-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href={siteData.company.social.instagram} className="bg-slate-700 p-3 rounded-lg hover:bg-slate-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={siteData.company.social.linkedin} className="bg-slate-700 p-3 rounded-lg hover:bg-slate-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Navigation</h4>
          <nav className="space-y-3">
            {[
              { name: 'Accueil', id: 'home' },
              { name: 'Services', id: 'services' },
              { name: 'À Propos', id: 'about' },
              { name: 'Blog', id: 'blog' },
              { name: 'Contact', id: 'contact' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className="block text-slate-400 hover:text-white transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Contact</h4>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-indigo-400" />
              <span className="text-slate-300">{siteData.company.phone}</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-indigo-400" />
              <span className="text-slate-300">{siteData.company.email}</span>
            </div>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 text-indigo-400 mt-1" />
              <span className="text-slate-300">{siteData.company.address}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 mt-12 pt-8 text-center">
        <p className="text-slate-400">
          © 2025 {siteData.company.name}. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
);

// Page d'Accueil
const HomePage = ({ onPageChange }) => {
  const features = [
    {
      icon: Target,
      title: "Approche Personnalisée",
      description: "Chaque élève est unique. Nos méthodes s'adaptent aux besoins spécifiques de votre enfant."
    },
    {
      icon: TrendingUp,
      title: "Résultats Mesurables",
      description: "Un suivi rigoureux des progrès avec des évaluations régulières et des rapports détaillés."
    },
    {
      icon: Heart,
      title: "Accompagnement Bienveillant",
      description: "Un environnement sécurisant qui favorise la confiance en soi et l'épanouissement."
    },
    {
      icon: Shield,
      title: "Expertise Reconnue",
      description: "Plus de 15 ans d'expérience et des centaines de réussites à notre actif."
    }
  ];

  const stats = [
    { number: "500+", label: "Élèves accompagnés" },
    { number: "95%", label: "Taux de réussite" },
    { number: "15+", label: "Années d'expérience" },
    { number: "4.9/5", label: "Note moyenne" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Éducation et apprentissage"
              className="w-full h-full object-cover opacity-5"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Accompagnement d'excellence depuis 2009
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
                Révélez le
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Potentiel
                </span>
                de votre enfant
              </h1>

              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Transformez les difficultés scolaires en opportunités de croissance avec notre méthode éprouvée et personnalisée
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onPageChange('contact')}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Réserver une consultation gratuite
                </button>
                <button
                  onClick={() => onPageChange('services')}
                  className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  Découvrir nos services
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={siteData.trainer.image}
                  alt={siteData.trainer.name}
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-2xl shadow-xl">
                <div className="text-white">
                  <p className="text-2xl font-bold">{siteData.trainer.name}</p>
                  <p className="text-indigo-200">{siteData.trainer.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Pourquoi choisir Excellence Tutorat ?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Notre approche unique combine expertise pédagogique, bienveillance et méthodes innovantes pour garantir la réussite de votre enfant
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Nos Services
            </h2>
            <p className="text-xl text-slate-600">
              Des solutions adaptées à chaque besoin
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {siteData.services.slice(0, 4).map((service, index) => (
              <div key={index} className="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
                    <span className="text-slate-500">/ {service.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onPageChange('services')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center"
            >
              Voir tous nos services
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Témoignages
            </h2>
            <p className="text-xl text-slate-600">
              La réussite de nos élèves, notre plus belle récompense
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {siteData.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-bold text-slate-800">{testimonial.name}</p>
                    <p className="text-indigo-600 text-sm">{testimonial.role}</p>
                    <p className="text-slate-400 text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full opacity-5"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white rounded-full opacity-5"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Prêt à transformer l'avenir scolaire de votre enfant ?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
            Réservez dès maintenant votre consultation gratuite et découvrez comment nous pouvons aider votre enfant à exceller
          </p>
          <button
            onClick={() => onPageChange('contact')}
            className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Réserver ma consultation gratuite
          </button>
        </div>
      </section>
    </div>
  );
};

// Page Services
const ServicesPage = ({ onPageChange }) => {
  const [selectedService, setSelectedService] = useState(null);

  const additionalFeatures = [
    { icon: Zap, title: "Résultats rapides", description: "Premiers résultats visibles dès les premières séances" },
    { icon: Globe, title: "Cours en ligne", description: "Flexibilité totale avec nos cours à distance" },
    { icon: Shield, title: "Garantie satisfaction", description: "Satisfait ou remboursé sous 30 jours" },
    { icon: Heart, title: "Suivi personnalisé", description: "Un accompagnement adapté à chaque profil d'élève" }
  ];

  return (
    <div>
      <Breadcrumb items={[
        { label: 'Accueil', href: true, onClick: () => onPageChange('home') },
        { label: 'Services' }
      ]} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Services de tutorat"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              Des solutions pédagogiques personnalisées pour chaque étape du parcours scolaire de votre enfant
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {siteData.services.map((service, index) => (
              <div key={index} className="group bg-slate-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-white/90 text-slate-800 px-4 py-2 rounded-full font-bold text-lg">
                      {service.price}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-slate-500">
                      <span className="font-medium">Durée: {service.duration}</span>
                    </div>
                    <button
                      onClick={() => onPageChange('contact')}
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Réserver
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Nos Avantages
            </h2>
            <p className="text-xl text-slate-600">
              Ce qui fait la différence dans notre accompagnement
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Tarification Transparente
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Nos prix sont fixes et transparents. Aucun frais caché, aucune surprise.
              Première séance d'évaluation offerte pour tous nos nouveaux élèves.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-slate-800 mb-2">Séance découverte</h3>
                <p className="text-2xl font-bold text-indigo-600">Gratuite</p>
                <p className="text-slate-600 text-sm">Évaluation et plan personnalisé</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-slate-800 mb-2">Forfait 10 séances</h3>
                <p className="text-2xl font-bold text-indigo-600">-10%</p>
                <p className="text-slate-600 text-sm">Économie garantie</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-slate-800 mb-2">Suivi familial</h3>
                <p className="text-2xl font-bold text-indigo-600">Inclus</p>
                <p className="text-slate-600 text-sm">Rapports réguliers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Page À Propos
const AboutPage = ({ onPageChange }) => {
  const achievements = [
    { year: "2009", title: "Création d'Excellence Tutorat", description: "Lancement de notre centre avec une vision claire : révéler le potentiel de chaque élève" },
    { year: "2012", title: "100 élèves accompagnés", description: "Première grande étape avec des résultats exceptionnels" },
    { year: "2016", title: "Expansion des services", description: "Développement de programmes spécialisés pour tous les niveaux" },
    { year: "2020", title: "Digitalisation", description: "Adaptation rapide avec les cours en ligne pendant la pandémie" },
    { year: "2025", title: "500+ réussites", description: "Aujourd'hui, plus de 500 élèves ont retrouvé confiance et excellence" }
  ];

  const values = [
    { icon: Heart, title: "Bienveillance", description: "Créer un environnement sécurisant où chaque élève peut s'épanouir sans jugement" },
    { icon: Target, title: "Excellence", description: "Viser l'excellence dans chaque accompagnement avec des méthodes éprouvées" },
    { icon: Shield, title: "Engagement", description: "S'engager pleinement dans la réussite de chaque élève avec détermination" },
    { icon: Lightbulb, title: "Innovation", description: "Intégrer les dernières recherches pédagogiques dans nos méthodes d'enseignement" }
  ];

  return (
    <div>
      <Breadcrumb items={[
        { label: 'Accueil', href: true, onClick: () => onPageChange('home') },
        { label: 'À Propos' }
      ]} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="À propos"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              À Propos
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              L'histoire d'une passion pour l'éducation et l'accompagnement des jeunes vers la réussite
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Notre Histoire</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Excellence Tutorat est né en 2009 d'une conviction profonde : chaque enfant possède un potentiel unique qui ne demande qu'à être révélé. Fondé par {siteData.trainer.name}, diplômée en Sciences de l'Éducation, notre centre s'est rapidement imposé comme une référence dans l'accompagnement pédagogique personnalisé.
                </p>
                <p>
                  Au fil des années, nous avons développé une approche unique qui combine expertise académique, bienveillance et méthodes innovantes. Notre mission va au-delà des simples cours de soutien : nous accompagnons chaque élève dans la construction de sa confiance en soi et de son autonomie.
                </p>
                <p>
                  Aujourd'hui, avec plus de 500 élèves accompagnés et un taux de réussite de 95%, nous continuons d'évoluer pour offrir le meilleur accompagnement possible à chaque famille qui nous fait confiance.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                alt="Notre histoire"
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-2xl shadow-xl">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-indigo-200">Années d'expertise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Notre Parcours</h2>
            <p className="text-xl text-slate-600">Les étapes clés de notre développement</p>
          </div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start group">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-2xl font-bold text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                    {achievement.year}
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-indigo-600 rounded-full mt-2 mr-8 group-hover:scale-150 transition-transform duration-300"></div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{achievement.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Nos Valeurs</h2>
            <p className="text-xl text-slate-600">Les principes qui guident chacune de nos actions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <div key={index} className="flex items-start group">
                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Notre Équipe</h2>
            <p className="text-xl text-slate-600">Des professionnels passionnés au service de la réussite</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-12 rounded-3xl shadow-lg">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-slate-800 mb-2">{siteData.trainer.name}</h3>
                  <p className="text-xl text-indigo-600 mb-4">{siteData.trainer.title}</p>
                  <p className="text-slate-600 mb-6 leading-relaxed">{siteData.trainer.bio}</p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center lg:justify-start">
                      <GraduationCap className="w-5 h-5 text-indigo-600 mr-3" />
                      <span className="text-slate-700">Diplômée en Sciences de l'Éducation</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start">
                      <Award className="w-5 h-5 text-purple-600 mr-3" />
                      <span className="text-slate-700">{siteData.trainer.experience}</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start">
                      <Heart className="w-5 h-5 text-pink-600 mr-3" />
                      <span className="text-slate-700">{siteData.trainer.students}</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <img
                    src={siteData.trainer.image}
                    alt={siteData.trainer.name}
                    className="w-80 h-80 object-cover rounded-3xl shadow-2xl mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Page Blog
const BlogPage = ({ onPageChange }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = ["Tous", "Méthodologie", "Bien-être", "Organisation"];

  if (selectedPost) {
    return (
      <div>
        <Breadcrumb items={[
          { label: 'Accueil', href: true, onClick: () => onPageChange('home') },
          { label: 'Blog', href: true, onClick: () => setSelectedPost(null) },
          { label: selectedPost.title }
        ]} />

        <article className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-12">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-96 object-cover rounded-3xl shadow-2xl mb-8"
              />

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedPost.category}
                  </span>
                  <span className="text-slate-600">{selectedPost.readTime} de lecture</span>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-slate-400 hover:text-slate-600 p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                {selectedPost.title}
              </h1>

              <div className="flex items-center mb-8">
                <img
                  src={siteData.trainer.image}
                  alt={selectedPost.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-medium text-slate-800">{selectedPost.author}</p>
                  <p className="text-slate-600 text-sm">
                    {new Date(selectedPost.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {selectedPost.excerpt}
              </p>
              <div className="text-slate-700 leading-relaxed space-y-6">
                {selectedPost.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Retour au blog
                </button>
                <button
                  onClick={() => onPageChange('contact')}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Prendre rendez-vous
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div>
      <Breadcrumb items={[
        { label: 'Accueil', href: true, onClick: () => onPageChange('home') },
        { label: 'Blog' }
      ]} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Blog"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Conseils, astuces et réflexions pour accompagner la réussite scolaire de votre enfant
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 rounded-full border-2 border-slate-200 text-slate-600 hover:border-indigo-500 hover:text-indigo-600 transition-colors font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {siteData.blogPosts.map((post, index) => (
              <article key={index} className="group cursor-pointer" onClick={() => setSelectedPost(post)}>
                <div className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-slate-500">
                        {new Date(post.date).toLocaleDateString('fr-FR')}
                      </span>
                      <span className="text-sm text-indigo-600">{post.readTime}</span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={siteData.trainer.image}
                          alt={post.author}
                          className="w-8 h-8 rounded-full mr-3 object-cover"
                        />
                        <span className="text-sm text-slate-600">{post.author}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-indigo-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Restez Informés
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Recevez nos derniers conseils et astuces directement dans votre boîte mail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Page Contact avec système de réservation
const ContactPage = ({ onPageChange }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      info: siteData.company.phone,
      subInfo: "Lun-Ven: 9h-18h"
    },
    {
      icon: Mail,
      title: "Email",
      info: siteData.company.email,
      subInfo: "Réponse sous 24h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      info: siteData.company.address,
      subInfo: "Cours à domicile ou en ligne"
    }
  ];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const isDateAvailable = (date) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    return siteData.availability[dateStr];
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
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Réservation:', { ...formData, date: selectedDate, time: selectedTime });
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

    const dayHeaders = dayNames.map(day => (
      <div key={day} className="text-center font-semibold text-slate-700 py-3 text-sm">
        {day}
      </div>
    ));

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

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
    <div>
      <Breadcrumb items={[
        { label: 'Accueil', href: true, onClick: () => onPageChange('home') },
        { label: 'Contact' }
      ]} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Contact"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              Prêt à transformer l'avenir scolaire de votre enfant ? Réservez votre consultation gratuite
            </p>
            <button
              onClick={() => setShowCalendar(true)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Réserver maintenant
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{info.title}</h3>
                <p className="text-slate-600 font-medium mb-1">{info.info}</p>
                <p className="text-slate-500 text-sm">{info.subInfo}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 p-12 rounded-3xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  Envoyez-nous un message
                </h2>
                <p className="text-slate-600">
                  Nous vous répondrons dans les plus brefs délais
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    required
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
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  />
                </div>
                <div className="lg:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="6"
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                    placeholder="Parlez-nous des besoins de votre enfant..."
                  />
                </div>
                <div className="lg:col-span-2">
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Envoyer le message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Notre Localisation</h2>
            <p className="text-slate-600">Nous nous déplaçons également à domicile dans toute l'Île-de-France</p>
          </div>

          <div className="bg-slate-200 h-96 rounded-3xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600">Carte interactive disponible ici</p>
              <p className="text-slate-500 text-sm">{siteData.company.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Calendrier */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-indigo-50 rounded-t-3xl">
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-bold text-slate-800">Réservez votre consultation gratuite</h3>
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
                  {selectedDate && siteData.availability[selectedDate] && (
                    <div className="mt-8">
                      <h4 className="text-xl font-bold mb-6 flex items-center text-slate-800">
                        <Clock className="w-6 h-6 mr-3 text-indigo-600" />
                        Heures disponibles
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {siteData.availability[selectedDate].map(time => (
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
                          className="w-full p-4 border-2 border-slate-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
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
                        Message (optionnel)
                      </label>
                      <textarea
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                        placeholder="Parlez-nous des besoins de votre enfant..."
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
                          J'accepte les conditions générales et la politique de confidentialité.
                          En fournissant mes coordonnées, j'accepte d'être contacté par Excellence Tutorat.
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
                          Confirmation en cours...
                        </>
                      ) : (
                        'Confirmer ma consultation gratuite'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Composant principal de l'application
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} />;
      case 'services':
        return <ServicesPage onPageChange={handlePageChange} />;
      case 'about':
        return <AboutPage onPageChange={handlePageChange} />;
      case 'blog':
        return <BlogPage onPageChange={handlePageChange} />;
      case 'contact':
        return <ContactPage onPageChange={handlePageChange} />;
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentPage={currentPage}
        onPageChange={handlePageChange}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main>
        {renderCurrentPage()}
      </main>

      <Footer onPageChange={handlePageChange} />
    </div>
  );
};

export default App;