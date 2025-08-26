export const siteData = {
  company: {
    name: "Excellence Tutorat",
    tagline: "Transformez les difficultés en réussites",
    description:
      "Un accompagnement pédagogique personnalisé pour révéler le potentiel de chaque élève",
    phone: "+33 1 23 45 67 89",
    email: "contact@excellence-tutorat.fr",
    address: "123 Avenue de l'Éducation, 75001 Paris",
    social: {
      facebook: "https://facebook.com/excellencetutorat",
      twitter: "https://twitter.com/excellencetutorat",
      instagram: "https://instagram.com/excellencetutorat",
      linkedin: "https://linkedin.com/company/excellencetutorat",
    },
  },
  trainer: {
    name: "Carine CAKPO",
    title: "Formatrice Experte Certifiée",
    experience: "15+ années d'expérience",
    students: "500+ élèves accompagnés",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b75d8c9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    bio: "Diplômée en Sciences de l'Éducation avec plus de 15 ans d'expérience dans l'accompagnement pédagogique. Je me spécialise dans l'aide aux enfants et adolescents en difficulté scolaire avec une approche bienveillante et personnalisée.",
  },
  services: [
    {
      id: 1,
      title: "Soutien Scolaire Individuel",
      description:
        "Accompagnement personnalisé pour toutes les matières du primaire au lycée",
      icon: "BookOpen",
      features: [
        "Évaluation personnalisée",
        "Plan d'apprentissage adapté",
        "Suivi des progrès",
        "Matériel pédagogique inclus",
      ],
    },
    {
      id: 2,
      title: "Préparation aux Examens",
      description:
        "Préparation intensive pour le brevet, baccalauréat et concours d'entrée",
      icon: "Award",
      features: [
        "Méthodologie d'examen",
        "Tests blancs",
        "Gestion du stress",
        "Stratégies de révision",
      ],
    },
    {
      id: 3,
      title: "Aide aux Devoirs",
      description:
        "Support quotidien pour l'organisation et la réalisation des devoirs",
      icon: "GraduationCap",
      features: [
        "Organisation du travail",
        "Méthodes d'apprentissage",
        "Motivation",
        "Autonomie progressive",
      ],
    },
    {
      id: 4,
      title: "Remise à Niveau",
      description:
        "Programme intensif pour combler les lacunes et rattraper le retard",
      icon: "TrendingUp",
      features: [
        "Diagnostic approfondi",
        "Plan de rattrapage",
        "Exercices ciblés",
        "Évaluation continue",
      ],
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Mère de Léa (15 ans)",
      content:
        "Grâce à Carine, ma fille a retrouvé confiance en elle. Ses notes sont passées de 8/20 à 16/20 en mathématiques !",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      location: "Paris 15ème",
      isVideo: true,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      name: "Jean Martin",
      role: "Père de Thomas (12 ans)",
      content:
        "Un accompagnement exceptionnel. Thomas était en échec scolaire, maintenant il est dans les premiers de sa classe.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      location: "Boulogne-Billancourt",
    },
  ],
  blogPosts: [
    {
      id: 1,
      title: "5 Méthodes Efficaces pour Améliorer la Concentration",
      excerpt:
        "Découvrez des techniques éprouvées pour aider votre enfant à mieux se concentrer pendant ses études.",
      content:
        "La concentration est l'une des clés de la réussite scolaire. Dans cet article, nous explorons 5 méthodes pratiques et scientifiquement prouvées pour améliorer la capacité de concentration de votre enfant...",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      author: "Carine CAKPO",
      date: "2024-03-15",
      category: "Méthodologie",
      readTime: "5 min",
    },
  ],
  faqs: [
    {
      question: "Comment se déroule la première séance ?",
      answer:
        "La première séance est une séance d'évaluation gratuite où nous identifions les besoins spécifiques de l'élève et établissons un plan d'action personnalisé.",
    },
    {
      question: "Proposez-vous des cours en ligne ?",
      answer:
        "Oui, nous proposons des cours en ligne via une plateforme sécurisée avec tous les outils nécessaires pour un apprentissage efficace.",
    },
  ],
  availability: {
    "2025-08-26": ["09:00", "14:00", "16:30"],
    "2025-08-28": ["10:00", "15:00"],
    "2025-08-30": ["09:30", "11:00", "14:30"],
  },
};

export const levels = [
  "Préscolaire",
  "Primaire",
  "Secondaire",
  "Adultes aux prises avec des défis particuliers",
];
