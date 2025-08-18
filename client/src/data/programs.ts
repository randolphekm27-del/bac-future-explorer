// Version simplifiée des données de programmes après suppression des fichiers complexes
export interface Program {
  id: string;
  name: string;
  slug: string;
  category: string;
  duration: string;
  description: string;
  careers: string[];
  icon: string;
  schoolIds: string[];
}

// Données simplifiées des programmes
export const programs: Program[] = [
  {
    id: "1",
    name: "Informatique et Intelligence Artificielle",
    slug: "informatique-ia",
    category: "Technologie",
    duration: "3-5 ans",
    description: "Formation complète en développement logiciel et intelligence artificielle",
    careers: ["Développeur", "Ingénieur IA", "Data Scientist"],
    icon: "💻",
    schoolIds: ["1", "2"]
  },
  {
    id: "2", 
    name: "Médecine Générale",
    slug: "medecine",
    category: "Santé",
    duration: "7 ans",
    description: "Formation médicale complète pour devenir médecin",
    careers: ["Médecin", "Chirurgien", "Spécialiste"],
    icon: "🏥",
    schoolIds: ["3"]
  },
  {
    id: "3",
    name: "Génie Civil",
    slug: "genie-civil", 
    category: "Ingénierie",
    duration: "5 ans",
    description: "Formation en construction et infrastructures",
    careers: ["Ingénieur Civil", "Architecte", "Chef de chantier"],
    icon: "🏗️",
    schoolIds: ["1", "4"]
  }
];

// Fonctions utilitaires
export const getAllCategories = (): string[] => {
  const categories = [...new Set(programs.map(p => p.category))];
  return categories.sort();
};

export const getProgramBySlug = (slug: string): Program | undefined => {
  return programs.find(p => p.slug === slug);
};

export const getSchoolsForProgram = (programSlug: string): any[] => {
  // Retourne un tableau vide pour maintenir la compatibilité
  return [];
};

// Fonctions supplémentaires pour maintenir la compatibilité
export const createProgramSlug = (name: string): string => {
  return name.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
};

export const getProgramDetails = (slug: string) => {
  return getProgramBySlug(slug);
};

export const getSchoolsByIds = (ids: string[]): any[] => {
  return [];
};