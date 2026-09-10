export interface Project {
  name: string;
  description: { en: string; fr: string };
  image: string;
  stack: string[];
  link: string;
}

export const projects: Project[] = [
  {
    name: "Fielda",
    description: {
      en: "A field-operations platform helping agricultural cooperatives track harvests, payments and logistics from a single dashboard.",
      fr: "Une plateforme d'opérations terrain qui aide les coopératives agricoles à suivre récoltes, paiements et logistique depuis un tableau de bord unique.",
    },
    image: "/images/project-1.jpg",
    stack: ["React", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    name: "Kasi Pay",
    description: {
      en: "A mobile-money reconciliation tool that merges statements from multiple providers into one clear ledger.",
      fr: "Un outil de réconciliation mobile money qui fusionne les relevés de plusieurs opérateurs en un registre unique et clair.",
    },
    image: "/images/project-2.jpg",
    stack: ["Flutter", "Python", "Flask"],
    link: "#",
  },
  {
    name: "Cliniq",
    description: {
      en: "An appointment and patient-records system built for clinics with unreliable internet, syncing quietly once connectivity returns.",
      fr: "Un système de rendez-vous et de dossiers patients conçu pour les cliniques à connexion instable, qui se synchronise dès le retour du réseau.",
    },
    image: "/images/project-3.jpg",
    stack: ["React Native", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    name: "RouteWise",
    description: {
      en: "A demand-prediction model for delivery fleets that adjusts routes in real time as new orders come in.",
      fr: "Un modèle de prédiction de la demande pour les flottes de livraison, qui ajuste les trajets en temps réel selon les nouvelles commandes.",
    },
    image: "/images/project-4.jpg",
    stack: ["Python", "PyTorch", "AWS"],
    link: "#",
  },
];
