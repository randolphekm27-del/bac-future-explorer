import { universities } from './universities';

// Interface pour les programmes
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
  schoolsCount: number;
  universities: string[];
  image?: string;
  gallery?: {
    images: string[];
    description?: string;
  };
  detailedDescription?: string;
}

// Fonction pour créer un slug à partir d'un nom
const createSlugFromName = (name: string): string => {
  return name.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Fonction pour déterminer la catégorie d'un programme
const getCategoryForProgram = (name: string): string => {
  const lowerName = name.toLowerCase();
  
  if (lowerName.includes('informatique') || lowerName.includes('génie informatique') || 
      lowerName.includes('télécom') || lowerName.includes('numérique')) {
    return 'Informatique & Technologie';
  }
  if (lowerName.includes('médecine') || lowerName.includes('santé') || 
      lowerName.includes('infirmier') || lowerName.includes('obstétric') ||
      lowerName.includes('biomédical') || lowerName.includes('pharmacie')) {
    return 'Santé & Médecine';
  }
  if (lowerName.includes('génie civil') || lowerName.includes('architecture') ||
      lowerName.includes('bâtiment') || lowerName.includes('travaux publics')) {
    return 'Génie Civil & Architecture';
  }
  if (lowerName.includes('agriculture') || lowerName.includes('agronomie') ||
      lowerName.includes('production végétale') || lowerName.includes('production animale') ||
      lowerName.includes('aquaculture') || lowerName.includes('horticulture')) {
    return 'Agriculture & Environnement';
  }
  if (lowerName.includes('droit') || lowerName.includes('juridique') ||
      lowerName.includes('politique') || lowerName.includes('sciences politiques')) {
    return 'Droit & Sciences Politiques';
  }
  if (lowerName.includes('économie') || lowerName.includes('gestion') ||
      lowerName.includes('commerce') || lowerName.includes('finance') ||
      lowerName.includes('comptable')) {
    return 'Économie & Gestion';
  }
  if (lowerName.includes('langue') || lowerName.includes('littérature') ||
      lowerName.includes('anglais') || lowerName.includes('français') ||
      lowerName.includes('espagnol') || lowerName.includes('allemand') ||
      lowerName.includes('chinois') || lowerName.includes('communication')) {
    return 'Langues & Communication';
  }
  if (lowerName.includes('mathématiques') || lowerName.includes('physique') ||
      lowerName.includes('chimie') || lowerName.includes('sciences')) {
    return 'Sciences Exactes';
  }
  if (lowerName.includes('éducation') || lowerName.includes('enseignement') ||
      lowerName.includes('pédagogie') || lowerName.includes('formation')) {
    return 'Éducation & Formation';
  }
  
  return 'Autres';
};

// Fonction pour obtenir les débouchés d'un programme
const getCareersForProgram = (name: string): string[] => {
  const lowerName = name.toLowerCase();
  
  if (lowerName.includes('informatique') || lowerName.includes('génie informatique')) {
    return ['Développeur logiciel', 'Ingénieur informatique', 'Administrateur système', 'Chef de projet IT'];
  }
  if (lowerName.includes('médecine')) {
    return ['Médecin généraliste', 'Médecin spécialiste', 'Chercheur médical', 'Chef de service hospitalier'];
  }
  if (lowerName.includes('génie civil')) {
    return ['Ingénieur civil', 'Chef de chantier', 'Architecte', 'Consultant en BTP'];
  }
  if (lowerName.includes('agriculture') || lowerName.includes('agronomie')) {
    return ['Ingénieur agronome', 'Conseiller agricole', 'Entrepreneur agricole', 'Chercheur en agronomie'];
  }
  if (lowerName.includes('droit')) {
    return ['Avocat', 'Magistrat', 'Juriste d\'entreprise', 'Conseiller juridique'];
  }
  if (lowerName.includes('économie') || lowerName.includes('gestion')) {
    return ['Économiste', 'Gestionnaire', 'Analyste financier', 'Consultant en gestion'];
  }
  
  return ['Spécialiste du domaine', 'Consultant', 'Formateur', 'Entrepreneur'];
};

// Fonction pour extraire tous les programmes des universités
const extractProgramsFromUniversities = (): Program[] => {
  const programsMap = new Map<string, {
    name: string;
    schoolIds: string[];
    universities: string[];
  }>();

  // Parcourir toutes les universités et écoles pour extraire les programmes
  universities.forEach(university => {
    university.schools.forEach(school => {
      school.programs.forEach(programName => {
        const trimmedName = programName.trim();
        
        // Utiliser le nom exact comme clé pour éviter les fusions incorrectes
        const key = trimmedName;
        
        if (programsMap.has(key)) {
          const existing = programsMap.get(key)!;
          existing.schoolIds.push(school.id);
          if (!existing.universities.includes(university.name)) {
            existing.universities.push(university.name);
          }
        } else {
          programsMap.set(key, {
            name: trimmedName,
            schoolIds: [school.id],
            universities: [university.name]
          });
        }
      });
    });
  });

  // Convertir en tableau de programmes
  const programsArray: Program[] = [];
  let idCounter = 1;

  programsMap.forEach((programData, name) => {
    const slug = createSlugFromName(name);
    const category = getCategoryForProgram(name);
    const careers = getCareersForProgram(name);
    
    programsArray.push({
      id: idCounter.toString(),
      name: programData.name,
      slug,
      category,
      duration: '3-5 ans', // Durée par défaut
      description: `Formation professionnelle en ${programData.name.toLowerCase()}`,
      careers,
      icon: 'BookOpen',
      schoolIds: programData.schoolIds,
      schoolsCount: programData.schoolIds.length,
      universities: programData.universities,
      image: `https://images.pexels.com/photos/${1000000 + idCounter}/pexels-photo-${1000000 + idCounter}.jpeg?auto=compress&cs=tinysrgb&w=800`,
      gallery: {
        images: [
          `https://images.unsplash.com/photo-${1500000000000 + idCounter * 1000}?auto=format&fit=crop&w=800&q=80`,
          `https://images.unsplash.com/photo-${1500000001000 + idCounter * 1000}?auto=format&fit=crop&w=800&q=80`,
          `https://images.unsplash.com/photo-${1500000002000 + idCounter * 1000}?auto=format&fit=crop&w=800&q=80`,
          `https://images.unsplash.com/photo-${1500000003000 + idCounter * 1000}?auto=format&fit=crop&w=800&q=80`,
          `https://images.unsplash.com/photo-${1500000004000 + idCounter * 1000}?auto=format&fit=crop&w=800&q=80`
        ],
        description: `Découvrez l'univers de ${programData.name.toLowerCase()} à travers nos images de formation et de terrain professionnel.`
      },
      detailedDescription: `La filière ${programData.name} forme des professionnels qualifiés dans ce domaine d'expertise. Cette formation complète vous permettra d'acquérir toutes les compétences nécessaires pour réussir dans ce secteur en pleine expansion.`
    });
    
    idCounter++;
  });

  return programsArray.sort((a, b) => a.name.localeCompare(b.name));
};

// Générer automatiquement les programmes à partir des universités
export const programs: Program[] = extractProgramsFromUniversities();

// Fonctions utilitaires
export const getAllCategories = (): string[] => {
  const categories = [...new Set(programs.map(p => p.category))];
  return categories.sort();
};

export const getProgramBySlug = (slug: string): Program | undefined => {
  return programs.find(p => p.slug === slug);
};

export const getSchoolsForProgram = (programSlug: string): any[] => {
  const program = getProgramBySlug(programSlug);
  if (!program) return [];
  
  // Extraire toutes les écoles qui proposent ce programme
  const schools: any[] = [];
  
  universities.forEach(university => {
    university.schools.forEach(school => {
      if (school.programs.some(progName => 
        createSlugFromName(progName) === programSlug
      )) {
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