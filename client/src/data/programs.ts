import { universities } from "./universities";

export interface Program {
  id: string;
  name: string;
  slug: string;
  category: string;
  duration?: string;
  level?: string;
  price?: string;
  description?: string;
  icon: string;
  careers: string[];
  schoolsCount?: number;
  image?: string;
}

// Fonction pour créer un slug à partir du nom de la filière
export function createProgramSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Supprime les accents
    .replace(/[^\w\s]/g, "") // Supprime la ponctuation
    .replace(/\s+/g, "-") // Remplace les espaces par des tirets
    .trim();
}

// Extraction et fusion intelligente des programmes de toutes les universités
function extractAllPrograms(): Program[] {
  const programMap = new Map<string, Program>();
  let programId = 1;

  universities.forEach(university => {
    university.schools.forEach(school => {
      school.programs.forEach(programName => {
        const slug = createProgramSlug(programName);
        
        if (programMap.has(slug)) {
          // Programme existant - augmenter le nombre d'écoles
          const existingProgram = programMap.get(slug)!;
          existingProgram.schoolsCount = (existingProgram.schoolsCount || 0) + 1;
        } else {
          // Nouveau programme
          const category = getCategoryForProgram(programName);
          const careers = getCareersForProgram(programName, category);
          const icon = getIconForCategory(category);
          const image = getImageForCategory(category);
          
          programMap.set(slug, {
            id: programId.toString(),
            name: programName,
            slug,
            category,
            duration: "3-5 ans",
            level: "Licence/Master",
            description: getDescriptionForProgram(programName, category),
            icon,
            careers,
            schoolsCount: 1,
            image
          });
          programId++;
        }
      });
    });
  });

  return Array.from(programMap.values()).sort((a, b) => a.name.localeCompare(b.name));
}

// Fonction pour déterminer la catégorie d'un programme
function getCategoryForProgram(programName: string): string {
  const name = programName.toLowerCase();
  
  if (name.includes("médecine") || name.includes("santé") || name.includes("pharmacie") || name.includes("dentaire") || name.includes("infirmier")) {
    return "Santé";
  }
  if (name.includes("droit") || name.includes("juridique") || name.includes("justice")) {
    return "Droit et Sciences Juridiques";
  }
  if (name.includes("économie") || name.includes("gestion") || name.includes("commerce") || name.includes("finance") || name.includes("comptabilité") || name.includes("management")) {
    return "Économie et Gestion";
  }
  if (name.includes("informatique") || name.includes("technologie") || name.includes("ingénieur") || name.includes("télécommunication") || name.includes("réseaux") || name.includes("système")) {
    return "Sciences et Technologies";
  }
  if (name.includes("éducation") || name.includes("enseignement") || name.includes("pédagogie") || name.includes("professeur")) {
    return "Éducation";
  }
  if (name.includes("agriculture") || name.includes("agronomie") || name.includes("vétérinaire") || name.includes("animal")) {
    return "Agriculture et Sciences Vétérinaires";
  }
  if (name.includes("art") || name.includes("musique") || name.includes("design") || name.includes("communication") || name.includes("média")) {
    return "Arts et Communication";
  }
  if (name.includes("social") || name.includes("psychologie") || name.includes("sociologie") || name.includes("anthropologie")) {
    return "Sciences Sociales";
  }
  if (name.includes("langue") || name.includes("littérature") || name.includes("traduction") || name.includes("linguistique")) {
    return "Langues et Littératures";
  }
  
  return "Autres Disciplines";
}

// Fonction pour obtenir les débouchés par programme
function getCareersForProgram(programName: string, category: string): string[] {
  const name = programName.toLowerCase();
  
  // Carrières spécifiques par programme
  if (name.includes("médecine")) {
    return ["Médecin généraliste", "Médecin spécialiste", "Chirurgien", "Urgentiste", "Pédiatre", "Gynécologue"];
  }
  if (name.includes("pharmacie")) {
    return ["Pharmacien d'officine", "Pharmacien hospitalier", "Pharmacien industriel", "Inspecteur pharmaceutique"];
  }
  if (name.includes("dentaire")) {
    return ["Chirurgien-dentiste", "Orthodontiste", "Parodontologue", "Prothésiste dentaire"];
  }
  if (name.includes("infirmier")) {
    return ["Infirmier", "Infirmier spécialisé", "Sage-femme", "Superviseur de soins"];
  }
  if (name.includes("droit")) {
    return ["Avocat", "Magistrat", "Notaire", "Juriste d'entreprise", "Conseiller juridique", "Huissier"];
  }
  if (name.includes("gestion") || name.includes("management")) {
    return ["Gestionnaire", "Chef d'entreprise", "Consultant", "Analyste financier", "Directeur commercial"];
  }
  if (name.includes("comptabilité")) {
    return ["Expert-comptable", "Auditeur", "Contrôleur de gestion", "Comptable", "Analyste financier"];
  }
  if (name.includes("informatique")) {
    return ["Développeur", "Ingénieur logiciel", "Administrateur système", "Analyste programmeur", "Chef de projet IT"];
  }
  if (name.includes("enseignement") || name.includes("éducation")) {
    return ["Professeur", "Instituteur", "Directeur d'école", "Conseiller pédagogique", "Inspecteur"];
  }
  if (name.includes("agriculture") || name.includes("agronomie")) {
    return ["Ingénieur agronome", "Technicien agricole", "Conseiller agricole", "Chef d'exploitation"];
  }
  
  // Carrières génériques par catégorie
  switch (category) {
    case "Santé":
      return ["Professionnel de santé", "Technicien médical", "Gestionnaire de santé"];
    case "Droit et Sciences Juridiques":
      return ["Juriste", "Conseiller juridique", "Assistant juridique"];
    case "Économie et Gestion":
      return ["Gestionnaire", "Analyste", "Conseiller financier"];
    case "Sciences et Technologies":
      return ["Ingénieur", "Technicien", "Consultant technique"];
    case "Éducation":
      return ["Enseignant", "Formateur", "Éducateur"];
    case "Agriculture et Sciences Vétérinaires":
      return ["Technicien agricole", "Conseiller rural", "Vétérinaire"];
    case "Arts et Communication":
      return ["Artiste", "Communicateur", "Designer"];
    case "Sciences Sociales":
      return ["Travailleur social", "Chercheur", "Analyste social"];
    case "Langues et Littératures":
      return ["Traducteur", "Enseignant de langues", "Interprète"];
    default:
      return ["Spécialiste", "Consultant", "Expert"];
  }
}

// Fonction pour obtenir l'icône par catégorie
function getIconForCategory(category: string): string {
  switch (category) {
    case "Santé":
      return "Heart";
    case "Droit et Sciences Juridiques":
      return "Scale";
    case "Économie et Gestion":
      return "TrendingUp";
    case "Sciences et Technologies":
      return "Code";
    case "Éducation":
      return "BookOpen";
    case "Agriculture et Sciences Vétérinaires":
      return "Sprout";
    case "Arts et Communication":
      return "Palette";
    case "Sciences Sociales":
      return "Users";
    case "Langues et Littératures":
      return "Languages";
    default:
      return "BookOpen";
  }
}

// Fonction pour obtenir l'image par catégorie
function getImageForCategory(category: string): string {
  switch (category) {
    case "Santé":
      return "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400";
    case "Droit et Sciences Juridiques":
      return "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=400";
    case "Économie et Gestion":
      return "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400";
    case "Sciences et Technologies":
      return "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400";
    case "Éducation":
      return "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=400";
    case "Agriculture et Sciences Vétérinaires":
      return "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=400";
    case "Arts et Communication":
      return "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=400";
    case "Sciences Sociales":
      return "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400";
    case "Langues et Littératures":
      return "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400";
    default:
      return "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400";
  }
}

// Fonction pour obtenir la description par programme
function getDescriptionForProgram(programName: string, category: string): string {
  const name = programName.toLowerCase();
  
  if (name.includes("médecine")) {
    return "Formation complète pour devenir médecin, couvrant anatomie, physiologie, pathologie et pratique clinique.";
  }
  if (name.includes("droit")) {
    return "Étude approfondie du système juridique, des lois et de leur application dans la société.";
  }
  if (name.includes("informatique")) {
    return "Formation aux technologies de l'information, programmation, systèmes et réseaux informatiques.";
  }
  if (name.includes("gestion")) {
    return "Apprentissage des principes de management, stratégie d'entreprise et gestion des ressources.";
  }
  if (name.includes("enseignement")) {
    return "Préparation à l'enseignement avec pédagogie, psychologie de l'enfant et didactique des matières.";
  }
  
  return `Formation spécialisée en ${category.toLowerCase()} offrant les compétences nécessaires pour exceller dans ce domaine.`;
}

// Génération des programmes
export const programs: Program[] = extractAllPrograms();

// Fonctions utilitaires
export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find(program => program.slug === slug);
}

export function getSchoolsForProgram(programSlug: string): any[] {
  const program = getProgramBySlug(programSlug);
  if (!program) return [];
  
  const schools: any[] = [];
  
  universities.forEach(university => {
    university.schools.forEach(school => {
      if (school.programs.some(programName => createProgramSlug(programName) === programSlug)) {
        schools.push({
          ...school,
          universityName: university.name,
          universitySlug: university.slug,
          universityType: university.type
        });
      }
    });
  });
  
  return schools;
}

export function getProgramsByCategory(category: string): Program[] {
  return programs.filter(program => program.category === category);
}

export function getAllCategories(): string[] {
  const categories = new Set(programs.map(program => program.category));
  return Array.from(categories).sort();
}