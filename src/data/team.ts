export interface TeamMember {
  name: string;
  role: { en: string; fr: string };
  image: string;
  description: { en: string; fr: string };
  stack: string[];
  github: string;
  linkedin: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Amina Njoya",
    role: { en: "Founder & Full-Stack Developer", fr: "Fondatrice & Développeuse Full-Stack" },
    image: "/images/team-1.jpg",
    description: {
      en: "Leads product direction and builds the systems that hold everything together, from APIs to deployment pipelines.",
      fr: "Pilote la direction produit et construit les systèmes qui font tenir l'ensemble, des API aux pipelines de déploiement.",
    },
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    github: "#",
    linkedin: "#",
  },
  {
    name: "Brice Talla",
    role: { en: "Mobile Engineer", fr: "Ingénieur Mobile" },
    image: "/images/team-2.jpg",
    description: {
      en: "Ships cross-platform apps that feel native, with a focus on offline-first design for low-connectivity regions.",
      fr: "Livre des applications multiplateformes au rendu natif, pensées offline-first pour les zones à faible connectivité.",
    },
    stack: ["Flutter", "React Native", "Firebase", "Kotlin"],
    github: "#",
    linkedin: "#",
  },
  {
    name: "Chelsea Mbeki",
    role: { en: "Product Designer", fr: "Designeuse Produit" },
    image: "/images/team-3.jpg",
    description: {
      en: "Turns rough ideas into interfaces people understand instantly, with a close eye on accessibility and pace.",
      fr: "Transforme des idées brutes en interfaces immédiatement compréhensibles, avec une attention constante à l'accessibilité.",
    },
    stack: ["Figma", "Design Systems", "Prototyping"],
    github: "#",
    linkedin: "#",
  },
  {
    name: "Divine Ashu",
    role: { en: "Backend Engineer", fr: "Ingénieur Backend" },
    image: "/images/team-4.jpg",
    description: {
      en: "Designs data models and services built to hold up under real traffic, not just the demo.",
      fr: "Conçoit des modèles de données et des services taillés pour tenir sous un vrai trafic, pas seulement en démo.",
    },
    stack: ["Python", "Flask", "PostgreSQL", "Redis"],
    github: "#",
    linkedin: "#",
  },
  {
    name: "Estelle Fomo",
    role: { en: "Machine Learning Engineer", fr: "Ingénieure en Machine Learning" },
    image: "/images/team-5.jpg",
    description: {
      en: "Builds models and pipelines that solve one clear problem at a time, from forecasting to computer vision.",
      fr: "Construit des modèles et des pipelines qui résolvent un problème précis à la fois, de la prévision à la vision par ordinateur.",
    },
    stack: ["Python", "PyTorch", "Pandas", "AWS"],
    github: "#",
    linkedin: "#",
  },
  {
    name: "Franck Owona",
    role: { en: "DevOps & Infrastructure", fr: "DevOps & Infrastructure" },
    image: "/images/team-6.jpg",
    description: {
      en: "Keeps deployments boring in the best way — automated, monitored, and easy to roll back.",
      fr: "Rend les déploiements ennuyeux dans le bon sens du terme — automatisés, surveillés, faciles à annuler.",
    },
    stack: ["Docker", "GitHub Actions", "Linux", "Nginx"],
    github: "#",
    linkedin: "#",
  },
];
