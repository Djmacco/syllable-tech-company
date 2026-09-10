export type Lang = "en" | "fr";

export interface TranslationShape {
  nav: {
    home: string;
    about: string;
    team: string;
    services: string;
    projects: string;
    contact: string;
    talk: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaTeam: string;
    ctaWork: string;
  };
  about: {
    heading: string;
    body: string;
    areas: string[];
  };
  team: {
    heading: string;
    subtitle: string;
  };
  techStack: {
    heading: string;
    subtitle: string;
  };
  services: {
    heading: string;
    items: { title: string; desc: string }[];
  };
  projects: {
    heading: string;
  };
  stats: {
    members: string;
    shipped: string;
    technologies: string;
    passion: string;
  };
  cta: {
    heading: string;
    body: string;
    button: string;
  };
  contact: {
    heading: string;
    subtitle: string;
    email: string;
    phone: string;
    whatsapp: string;
    location: string;
    locationValue: string;
  };
  footer: {
    tagline: string;
    navigation: string;
    social: string;
    rights: string;
  };
}

export const translations: Record<Lang, TranslationShape> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      team: "Team",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      talk: "Let's Talk",
    },
    hero: {
      titleLine1: "Build. Innovate.",
      titleLine2: "Scale.",
      subtitle:
        "Syllable Tech is a team of developers, designers and technology enthusiasts building modern digital solutions for businesses and organizations.",
      ctaTeam: "Explore Our Team",
      ctaWork: "View Our Work",
    },
    about: {
      heading: "We turn ideas into digital products.",
      body: "From a first sketch to something people rely on daily, we work across the full stack — design, engineering and infrastructure — so a product only has one team to answer to.",
      areas: [
        "Web development",
        "Mobile development",
        "Software engineering",
        "UI/UX design",
        "AI & machine learning",
        "Digital solutions",
      ],
    },
    team: {
      heading: "Meet the team",
      subtitle: "The people behind the ideas, products and technology.",
    },
    techStack: {
      heading: "What we build with",
      subtitle: "A stack chosen for reliability first — tools we trust to still be running smoothly a year after launch.",
    },
    services: {
      heading: "What we build",
      items: [
        { title: "Web Development", desc: "Modern, responsive and scalable web applications." },
        { title: "Mobile Development", desc: "Cross-platform mobile applications that feel native." },
        { title: "Software Engineering", desc: "Custom software solutions designed around business needs." },
        { title: "AI & Machine Learning", desc: "Intelligent systems and automation that hold up in production." },
        { title: "UI/UX Design", desc: "Simple, intuitive and engaging digital experiences." },
        { title: "Digital Solutions", desc: "Technology that solves real, specific problems." },
      ],
    },
    projects: {
      heading: "Selected work",
    },
    stats: {
      members: "Team members",
      shipped: "Projects shipped",
      technologies: "Technologies",
      passion: "Passion for technology",
    },
    cta: {
      heading: "Have an idea? Let's build it.",
      body: "Tell us what you're building and let's create something meaningful together.",
      button: "Start a Conversation",
    },
    contact: {
      heading: "Get in touch",
      subtitle: "Reach us directly — we read every message ourselves.",
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      location: "Location",
      locationValue: "Cameroon",
    },
    footer: {
      tagline: "Building modern digital solutions.",
      navigation: "Navigation",
      social: "Social",
      rights: "All rights reserved.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      team: "Équipe",
      services: "Services",
      projects: "Projets",
      contact: "Contact",
      talk: "Discutons",
    },
    hero: {
      titleLine1: "Concevoir. Innover.",
      titleLine2: "Grandir.",
      subtitle:
        "Syllable Tech est une équipe de développeurs, designers et passionnés de technologie qui conçoit des solutions numériques modernes pour les entreprises et les organisations.",
      ctaTeam: "Découvrir l'équipe",
      ctaWork: "Voir nos réalisations",
    },
    about: {
      heading: "Nous transformons les idées en produits numériques.",
      body: "D'un premier croquis à un outil que l'on utilise chaque jour, nous couvrons toute la chaîne — design, ingénierie et infrastructure — pour qu'un produit n'ait qu'une seule équipe à qui s'adresser.",
      areas: [
        "Développement web",
        "Développement mobile",
        "Ingénierie logicielle",
        "Design UI/UX",
        "IA & apprentissage automatique",
        "Solutions numériques",
      ],
    },
    team: {
      heading: "Notre équipe",
      subtitle: "Les personnes derrière les idées, les produits et la technologie.",
    },
    techStack: {
      heading: "Nos outils de travail",
      subtitle: "Une stack choisie avant tout pour sa fiabilité — des outils sur lesquels on peut compter, même un an après le lancement.",
    },
    services: {
      heading: "Ce que nous construisons",
      items: [
        { title: "Développement web", desc: "Applications web modernes, réactives et évolutives." },
        { title: "Développement mobile", desc: "Applications mobiles multiplateformes au rendu natif." },
        { title: "Ingénierie logicielle", desc: "Solutions logicielles sur mesure, pensées pour vos besoins métier." },
        { title: "IA & apprentissage automatique", desc: "Systèmes intelligents et automatisation prêts pour la production." },
        { title: "Design UI/UX", desc: "Des expériences numériques simples, intuitives et engageantes." },
        { title: "Solutions numériques", desc: "Des technologies qui résolvent de vrais problèmes concrets." },
      ],
    },
    projects: {
      heading: "Projets sélectionnés",
    },
    stats: {
      members: "Membres de l'équipe",
      shipped: "Projets livrés",
      technologies: "Technologies",
      passion: "Passion pour la technologie",
    },
    cta: {
      heading: "Une idée en tête ? Construisons-la.",
      body: "Dites-nous ce que vous voulez créer et donnons-lui vie ensemble.",
      button: "Démarrer une conversation",
    },
    contact: {
      heading: "Contactez-nous",
      subtitle: "Écrivez-nous directement — nous lisons chaque message nous-mêmes.",
      email: "E-mail",
      phone: "Téléphone",
      whatsapp: "WhatsApp",
      location: "Localisation",
      locationValue: "Cameroun",
    },
    footer: {
      tagline: "Nous construisons des solutions numériques modernes.",
      navigation: "Navigation",
      social: "Réseaux",
      rights: "Tous droits réservés.",
    },
  },
} as const;
