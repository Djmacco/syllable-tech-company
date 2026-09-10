export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  stack: string[];
  github: string;
  linkedin: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Amina Njoya",
    role: "Founder & Full-Stack Developer",
    image: "/images/team-1.jpg",
    description:
      "Leads product direction and builds the systems that hold everything together, from APIs to deployment pipelines.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    github: "#",
    linkedin: "#",
  },
  {
    name: "Brice Talla",
    role: "Mobile Engineer",
    image: "/images/team-2.jpg",
    description:
      "Ships cross-platform apps that feel native, with a focus on offline-first design for low-connectivity regions.",
    stack: ["Flutter", "React Native", "Firebase", "Kotlin"],
    github: "#",
    linkedin: "#",
  },
  {
    name: "Chelsea Mbeki",
    role: "Product Designer",
    image: "/images/team-3.jpg",
    description:
      "Turns rough ideas into interfaces people understand instantly, with a close eye on accessibility and pace.",
    stack: ["Figma", "Design Systems", "Prototyping"],
    github: "#",
    linkedin: "#",
  },
  {
    name: "Divine Ashu",
    role: "Backend Engineer",
    image: "/images/team-4.jpg",
    description:
      "Designs data models and services built to hold up under real traffic, not just the demo.",
    stack: ["Python", "Flask", "PostgreSQL", "Redis"],
    github: "#",
    linkedin: "#",
  },
  {
    name: "Estelle Fomo",
    role: "Machine Learning Engineer",
    image: "/images/team-5.jpg",
    description:
      "Builds models and pipelines that solve one clear problem at a time, from forecasting to computer vision.",
    stack: ["Python", "PyTorch", "Pandas", "AWS"],
    github: "#",
    linkedin: "#",
  },
  {
    name: "Franck Owona",
    role: "DevOps & Infrastructure",
    image: "/images/team-6.jpg",
    description:
      "Keeps deployments boring in the best way — automated, monitored, and easy to roll back.",
    stack: ["Docker", "GitHub Actions", "Linux", "Nginx"],
    github: "#",
    linkedin: "#",
  },
];
