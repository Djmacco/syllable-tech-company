export interface Project {
  name: string;
  description: { en: string; fr: string };
  image: string;
  stack: string[];
  link: string;
}

// Images below are temporary stand-ins (hotlinked, royalty-free) until real
// product screenshots are provided — just swap the `image` value for each
// project once you have them, no other changes needed.
export const projects: Project[] = [
  {
    name: "AI Inventory Management System",
    description: {
      en: "Real-time stock tracking with AI-driven demand forecasting — know what's running low before it actually runs out. Built for businesses juggling multiple warehouses and sales channels at once.",
      fr: "Suivi des stocks en temps réel avec prévision de la demande par IA — sachez ce qui va manquer avant que ça n'arrive. Conçu pour les entreprises qui gèrent plusieurs entrepôts et canaux de vente à la fois.",
    },
    image: "https://picsum.photos/seed/syllable-inventory/800/500",
    stack: ["NestJS", "PostgreSQL", "React", "Docker"],
    link: "#",
  },
  {
    name: "Bike & Car Tracking App",
    description: {
      en: "Live GPS tracking for motorbike and car fleets, with route history, geofencing alerts and driver activity logs — built for fleet owners who need to know where every vehicle is, right now.",
      fr: "Suivi GPS en temps réel pour flottes de motos et de voitures, avec historique des trajets, alertes de géorepérage et journaux d'activité des conducteurs — pour les gestionnaires de flotte qui veulent savoir où se trouve chaque véhicule, à tout instant.",
    },
    image: "https://picsum.photos/seed/syllable-tracking/800/500",
    stack: ["Flutter", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    name: "House Listing Platform",
    description: {
      en: "A clean, searchable listings platform connecting renters and buyers directly with verified property owners — filter by location, budget and property type without the middleman markup.",
      fr: "Une plateforme d'annonces claire et facile à parcourir, mettant en relation locataires et acheteurs directement avec des propriétaires vérifiés — filtrez par localisation, budget et type de bien, sans intermédiaire.",
    },
    image: "https://picsum.photos/seed/syllable-housing/800/500",
    stack: ["React", "Next.js", "PostgreSQL"],
    link: "#",
  },
  {
    name: "Restaurant Ordering & Management",
    description: {
      en: "An all-in-one system for restaurants — digital menus, table reservations and order management in one dashboard, so staff spend less time juggling notepads and more time serving customers.",
      fr: "Un système tout-en-un pour restaurants — menus numériques, réservations de tables et gestion des commandes dans un seul tableau de bord, pour que le personnel passe moins de temps avec des carnets et plus de temps avec les clients.",
    },
    image: "https://picsum.photos/seed/syllable-restaurant/800/500",
    stack: ["PHP", "MySQL", "JavaScript"],
    link: "#",
  },
  {
    name: "E-Commerce Platform",
    description: {
      en: "A fast, mobile-friendly storefront built for local merchants — product catalogs, secure checkout and order tracking, designed to work well even on slower connections.",
      fr: "Une boutique en ligne rapide et adaptée au mobile, conçue pour les commerçants locaux — catalogues de produits, paiement sécurisé et suivi des commandes, pensée pour bien fonctionner même avec une connexion lente.",
    },
    image: "https://picsum.photos/seed/syllable-ecommerce/800/500",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    name: "Hotel Management System",
    description: {
      en: "Handles bookings, room availability and staff scheduling from a single dashboard — built to cut down the back-and-forth between front desk, housekeeping and reservations.",
      fr: "Gère les réservations, la disponibilité des chambres et les plannings du personnel depuis un seul tableau de bord — conçu pour réduire les allers-retours entre la réception, le ménage et les réservations.",
    },
    image: "https://picsum.photos/seed/syllable-hotel/800/500",
    stack: ["React", "Flask", "MySQL"],
    link: "#",
  },
];
