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
    name: "Binde Mac Vette",
    role: { en: "Co-Founder & ML / IoT Engineer", fr: "Cofondateur & Ingénieur ML / IoT" },
    image: "/images/team-2.png",
    description: {
      en: "Builds the intelligence layer — models and pipelines that go from forecasting to computer vision — then wires it into real hardware. Focused on smart, connected products: home automation and IoT systems that turn code into something you can actually touch.",
      fr: "Construit la couche d'intelligence — modèles et pipelines allant de la prévision à la vision par ordinateur — puis la connecte à du matériel réel. Concentré sur les produits connectés intelligents : domotique et systèmes IoT qui transforment le code en quelque chose de concret.",
    },
    stack: ["Python", "PyTorch", "React", "Node.js", "IoT"],
    github: "#",
    linkedin: "#",
  },
  {
    name: "Achille Leba",
    role: { en: "Co-Founder & Automation Engineer", fr: "Cofondateur & Ingénieur Automatisation" },
    image: "/images/team-1.jpg",
    description: {
      en: "Turns repetitive work into one-click automation. From Python scripts that save hours to Java desktop tools and dashboards that make data actually useful — the boring stuff, handled, so nobody else has to.",
      fr: "Transforme les tâches répétitives en automatisations en un clic. Des scripts Python qui font gagner des heures aux applications Java de bureau et tableaux de bord qui rendent la donnée vraiment utile — le travail fastidieux, pris en charge.",
    },
    stack: ["Python", "Java", "Automation", "Data Analytics"],
    github: "#",
    linkedin: "#",
  },
  {
    name: "Aboubakar Dalhatou",
    role: { en: "Co-Founder & Full-Stack Web Developer", fr: "Cofondateur & Développeur Web Full-Stack" },
    image: "/images/team-3.jpg",
    description: {
      en: "Designs and builds the websites people actually enjoy using — clean, fast and functional from the first click. Handles the full loop: coding the interface, testing it until it breaks, then fixing it until it doesn't.",
      fr: "Conçoit et développe des sites que l'on prend plaisir à utiliser — propres, rapides et fonctionnels dès le premier clic. Gère tout le cycle : coder l'interface, la tester jusqu'à la casser, puis la corriger jusqu'à ce qu'elle tienne.",
    },
    stack: ["HTML", "CSS", "JavaScript", "React"],
    github: "#",
    linkedin: "#",
  },
  {
    name: "Zenaba Sheila Floriane",
    role: { en: "Co-Founder & Operations & Digital Marketing", fr: "Cofondatrice & Opérations & Marketing Digital" },
    image: "/images/team-4.jpg",
    description: {
      en: "Keeps the business side of building tech running smoothly — from day-to-day operations to getting the work in front of the right people. Also codes on the web side when a project needs an extra pair of hands.",
      fr: "Fait tourner le versant business de la tech au quotidien — des opérations courantes à la mise en avant du travail auprès des bonnes personnes. Code aussi côté web quand un projet a besoin d'un coup de main supplémentaire.",
    },
    stack: ["PHP", "HTML", "MySQL", "CSS", "JavaScript"],
    github: "#",
    linkedin: "#",
  },
];
