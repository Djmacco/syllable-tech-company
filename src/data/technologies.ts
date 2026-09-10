export interface TechCategory {
  category: { en: string; fr: string };
  items: string[];
}

export const technologies: TechCategory[] = [
  { category: { en: "Frontend", fr: "Frontend" }, items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { category: { en: "Backend", fr: "Backend" }, items: ["Node.js", "NestJS", "Python", "Flask"] },
  { category: { en: "Mobile", fr: "Mobile" }, items: ["Flutter", "React Native"] },
  { category: { en: "Database", fr: "Base de données" }, items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { category: { en: "AI & ML", fr: "IA & ML" }, items: ["Python", "PyTorch", "Machine Learning"] },
  { category: { en: "Tools", fr: "Outils" }, items: ["Git", "GitHub", "Docker"] },
];
