export interface TechCategory {
  category: string;
  items: string[];
}

export const technologies: TechCategory[] = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { category: "Backend", items: ["Node.js", "NestJS", "Python", "Flask"] },
  { category: "Mobile", items: ["Flutter", "React Native"] },
  { category: "Database", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { category: "AI & ML", items: ["Python", "PyTorch", "Machine Learning"] },
  { category: "Tools", items: ["Git", "GitHub", "Docker"] },
];
