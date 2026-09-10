export interface Project {
  name: string;
  description: string;
  image: string;
  stack: string[];
  link: string;
}

export const projects: Project[] = [
  {
    name: "Fielda",
    description:
      "A field-operations platform helping agricultural cooperatives track harvests, payments and logistics from a single dashboard.",
    image: "/images/project-1.jpg",
    stack: ["React", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    name: "Kasi Pay",
    description:
      "A mobile-money reconciliation tool that merges statements from multiple providers into one clear ledger.",
    image: "/images/project-2.jpg",
    stack: ["Flutter", "Python", "Flask"],
    link: "#",
  },
  {
    name: "Cliniq",
    description:
      "An appointment and patient-records system built for clinics with unreliable internet, syncing quietly once connectivity returns.",
    image: "/images/project-3.jpg",
    stack: ["React Native", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    name: "RouteWise",
    description:
      "A demand-prediction model for delivery fleets that adjusts routes in real time as new orders come in.",
    image: "/images/project-4.jpg",
    stack: ["Python", "PyTorch", "AWS"],
    link: "#",
  },
];
