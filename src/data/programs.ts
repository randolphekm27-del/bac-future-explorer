import { universities } from './universities';

export interface Program {
  id: string;
  name: string;
  slug: string;
  category: string;
  duration: string;
  description: string;
  careers: string[];
  icon: string;
  schoolIds: string[]; // IDs des écoles qui proposent cette filière
}

export const programs: Program[] = [
  // UAC - Université d'Abomey-Calavi
  {
    id: "1",
    name: "Santé publique polyvalente",
    slug: "sante-publique-polyvalente",
    category: "Sciences de la Santé",
    duration: "4-5 ans",
    description: "Formation en santé communautaire, épidémiologie et gestion des systèmes de santé.",
    careers: ["Responsable santé publique", "Épidémiologiste", "Gestionnaire de programmes sanitaires"],
    icon: "Users",
    schoolIds: ["uac-3"]
  },
  {
    id: "2",
    name: "Géographie et Aménagement du Territoire",
    slug: "geographie-amenagement",
    category: "Sciences Humaines",
    duration: "3-5 ans",
    description: "Étude des espaces terrestres et de leur organisation par les sociétés.",
    careers: ["Urbaniste", "Aménageur territorial", "Géomaticien"],
    icon: "Map",
    schoolIds: ["uac-2"]
  },
  {
    id: "3",
    name: "Socio-Anthropologie",
    slug: "socio-anthropologie",
    category: "Sciences Sociales",
    duration: "3-5 ans",
    description: "Analyse des sociétés humaines et des cultures à travers leurs structures sociales.",
    careers: ["Chercheur", "Consultant en développement", "Chargé d'études"],
    icon: "Users",
    schoolIds: ["uac-2"]
  },
  {
    id: "4",
    name: "Anglais",
    slug: "anglais",
    category: "Lettres et Langues",
    duration: "3-5 ans",
    description: "Maîtrise approfondie de la langue anglaise et de ses cultures.",
    careers: ["Enseignant", "Traducteur", "Interprète"],
    icon: "BookOpen",
    schoolIds: ["uac-4"]
  },
  {
    id: "5",
    name: "Cycle préparatoire MPSI",
    slug: "mpsi",
    category: "Sciences Exactes",
    duration: "2 ans",
    description: "Préparation intensive en mathématiques, physique et sciences de l'ingénieur.",
    careers: ["Ingénieur", "Chercheur", "Enseignant"],
    icon: "BookOpen",
    schoolIds: ["uac-2"]
  },
  {
    id: "6",
    name: "Cycle préparatoire PCSI",
    slug: "pcsi",
    category: "Sciences Exactes",
    duration: "2 ans",
    description: "Formation intensive en physique, chimie et sciences de l'ingénieur.",
    careers: ["Ingénieur", "Chercheur", "Enseignant"],
    icon: "BookOpen",
    schoolIds: ["uac-2"]
  },
  {
    id: "7",
    name: "Allemand",
    slug: "allemand",
    category: "Lettres et Langues",
    duration: "3-5 ans",
    description: "Maîtrise approfondie de la langue allemande et de ses cultures.",
    careers: ["Enseignant", "Traducteur", "Interprète"],
    icon: "BookOpen",
    schoolIds: ["uac-4", "up-27"]
  },
  {
    id: "8",
    name: "Espagnol",
    slug: "espagnol",
    category: "Lettres et Langues",
    duration: "3-5 ans",
    description: "Maîtrise approfondie de la langue espagnole et de ses cultures.",
    careers: ["Enseignant", "Traducteur", "Interprète"],
    icon: "BookOpen",
    schoolIds: ["uac-4", "up-29"]
  },
  {
    id: "9",
    name: "Lettres Modernes",
    slug: "lettres-modernes",
    category: "Lettres et Langues",
    duration: "3-5 ans",
    description: "Étude approfondie de la littérature et de la langue française.",
    careers: ["Enseignant", "Écrivain", "Rédacteur"],
    icon: "BookOpen",
    schoolIds: ["uac-4", "up-32"]
  },
  {
    id: "10",
    name: "Science du Langage et de la Communication",
    slug: "science-langage",
    category: "Sciences Humaines",
    duration: "3-5 ans",
    description: "Analyse scientifique des langages et des processus de communication.",
    careers: ["Orthophoniste", "Expert en communication", "Chercheur"],
    icon: "Users",
    schoolIds: ["uac-4"]
  },

  // UP - Université de Parakou
  {
    id: "101",
    name: "Sciences et Techniques de Production Végétale",
    slug: "production-vegetale",
    category: "Sciences Agricoles",
    duration: "3-5 ans",
    description: "Formation en techniques modernes de production et amélioration des plantes.",
    careers: ["Agronome", "Gestionnaire de ferme", "Chercheur"],
    icon: "Briefcase",
    schoolIds: ["up-1", "una-3"]
  },
  {
    id: "102",
    name: "Sciences et Techniques de Production Animale et Halieutique",
    slug: "production-animale",
    category: "Sciences Agricoles",
    duration: "3-5 ans",
    description: "Formation en élevage, pêche et gestion des ressources animales.",
    careers: ["Vétérinaire", "Aquaculteur", "Gestionnaire d'élevage"],
    icon: "Briefcase",
    schoolIds: ["up-2", "una-8"]
  },
  {
    id: "103",
    name: "Aménagement et Gestion des Ressources Naturelles",
    slug: "amenagement-ressources",
    category: "Sciences Environnementales",
    duration: "3-5 ans",
    description: "Formation en gestion durable des écosystèmes et ressources naturelles.",
    careers: ["Gestionnaire de parc", "Expert en environnement", "Consultant"],
    icon: "Map",
    schoolIds: ["up-3", "una-12"]
  },
  {
    id: "104",
    name: "Sociologie et Economie Rurale",
    slug: "sociologie-rurale",
    category: "Sciences Sociales",
    duration: "3-5 ans",
    description: "Analyse des dynamiques sociales et économiques en milieu rural.",
    careers: ["Sociologue", "Planificateur rural", "Chercheur"],
    icon: "Users",
    schoolIds: ["up-4", "una-11"]
  },

  // UNSTIM
  {
    id: "201",
    name: "Electrotechnique",
    slug: "electrotechnique",
    category: "Ingénierie",
    duration: "3-5 ans",
    description: "Formation en conception et maintenance des systèmes électriques.",
    careers: ["Ingénieur électricien", "Technicien supérieur", "Concepteur"],
    icon: "BookOpen",
    schoolIds: ["unstim-3"]
  },
  {
    id: "202",
    name: "Génie Civil",
    slug: "genie-civil",
    category: "Ingénierie",
    duration: "5 ans",
    description: "Formation en construction, infrastructures et gestion de projets BTP.",
    careers: ["Ingénieur civil", "Chef de chantier", "Bureau d'études"],
    icon: "BookOpen",
    schoolIds: ["unstim-4", "uac-78"]
  },
  {
    id: "203",
    name: "Froid et Climatisation",
    slug: "froid-climatisation",
    category: "Ingénierie",
    duration: "3-5 ans",
    description: "Formation en systèmes de réfrigération et conditionnement d'air.",
    careers: ["Technicien frigoriste", "Ingénieur thermicien", "Maintenance"],
    icon: "BookOpen",
    schoolIds: ["unstim-10"]
  },
  {
    id: "204",
    name: "Energies Renouvelables",
    slug: "energies-renouvelables",
    category: "Ingénierie",
    duration: "3-5 ans",
    description: "Formation en technologies solaires, éoliennes et biomasse.",
    careers: ["Ingénieur énergie", "Technicien en énergie verte", "Consultant"],
    icon: "BookOpen",
    schoolIds: ["unstim-12", "una-14"]
  },

  // UNA - Université Nationale d'Agriculture
  {
    id: "301",
    name: "Agriculture",
    slug: "agriculture",
    category: "Sciences Agricoles",
    duration: "3-5 ans",
    description: "Formation complète en techniques agricoles modernes.",
    careers: ["Agronome", "Exploitant agricole", "Conseiller agricole"],
    icon: "Briefcase",
    schoolIds: ["una-1"]
  },
  {
    id: "302",
    name: "Aquaculture",
    slug: "aquaculture",
    category: "Sciences Agricoles",
    duration: "3-5 ans",
    description: "Formation en élevage d'organismes aquatiques et gestion piscicole.",
    careers: ["Aquaculteur", "Gestionnaire de ferme aquacole", "Expert"],
    icon: "Briefcase",
    schoolIds: ["una-7"]
  },
  {
    id: "303",
    name: "Finance agricole",
    slug: "finance-agricole",
    category: "Sciences Économiques",
    duration: "3-5 ans",
    description: "Spécialisation en gestion financière des exploitations agricoles.",
    careers: ["Financier agricole", "Gestionnaire de coopérative", "Analyste"],
    icon: "Briefcase",
    schoolIds: ["una-9"]
  },
  {
    id: "304",
    name: "Agroéquipement",
    slug: "agroequipement",
    category: "Ingénierie Agricole",
    duration: "3-5 ans",
    description: "Formation en machinisme agricole et gestion des équipements.",
    careers: ["Ingénieur agroéquipement", "Technicien spécialisé", "Maintenance"],
    icon: "BookOpen",
    schoolIds: ["una-13"]
  }
];

// Fonction utilitaire pour créer un slug propre
export const createProgramSlug = (programName: string): string => {
  return programName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[&]/g, 'et')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

export const getProgramBySlug = (slug: string): Program | undefined => {
  return programs.find(program => program.slug === slug);
};

export const getSchoolsForProgram = (programSlug: string) => {
  const program = getProgramBySlug(programSlug);
  if (!program) return [];

  const schools = [];
  for (const university of universities) {
    for (const school of university.schools) {
      if (program.schoolIds.includes(school.id)) {
        schools.push({
          school,
          university
        });
      }
    }
  }
  return schools;
};

export const getProgramsForSchool = (schoolId: string): Program[] => {
  return programs.filter(program => program.schoolIds.includes(schoolId));
};
