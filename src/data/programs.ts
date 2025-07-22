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
  {
    id: "1",
    name: "Informatique",
    slug: "informatique",
    category: "Sciences et Technologie",
    duration: "3-5 ans",
    description: "Formation en programmation, bases de données, réseaux et intelligence artificielle.",
    careers: ["Développeur logiciel", "Administrateur système", "Data Scientist", "Expert en cybersécurité"],
    icon: "BookOpen",
    schoolIds: ["uac-2", "unstim-6", "uatm-2", "imsp-4"]
  },
  {
    id: "2",
    name: "Gestion",
    slug: "gestion",
    category: "Sciences Économiques",
    duration: "3-5 ans",
    description: "Formation en comptabilité, marketing, ressources humaines et management.",
    careers: ["Comptable", "Manager", "Responsable marketing", "Consultant en entreprise"],
    icon: "Briefcase",
    schoolIds: ["uac-1", "up-5", "uatm-1", "uatm-4"]
  },
  {
    id: "3",
    name: "Médecine",
    slug: "medecine",
    category: "Sciences de la Santé",
    duration: "7-8 ans",
    description: "Formation en anatomie, physiologie, pathologie et pratique clinique.",
    careers: ["Médecin généraliste", "Chirurgien", "Pédiatre", "Cardiologue"],
    icon: "Users",
    schoolIds: ["uac-3", "up-2"]
  },
  {
    id: "4",
    name: "Droit",
    slug: "droit",
    category: "Sciences Juridiques",
    duration: "3-5 ans",
    description: "Formation en droit civil, pénal, administratif et international.",
    careers: ["Avocat", "Magistrat", "Juriste d'entreprise", "Notaire"],
    icon: "BookOpen",
    schoolIds: ["uac-4"]
  },
  {
    id: "5",
    name: "Agronomie",
    slug: "agronomie",
    category: "Sciences Agricoles",
    duration: "3-5 ans",
    description: "Formation en production végétale, élevage, gestion des ressources naturelles.",
    careers: ["Ingénieur agronome", "Conseiller agricole", "Chercheur en agronomie"],
    icon: "Briefcase",
    schoolIds: ["up-1", "una-1", "una-2"]
  },
  {
    id: "6",
    name: "Communication",
    slug: "communication",
    category: "Sciences Humaines",
    duration: "3-5 ans",
    description: "Formation en journalisme, relations publiques, médias numériques.",
    careers: ["Journaliste", "Chargé de communication", "Community manager", "Attaché de presse"],
    icon: "Users",
    schoolIds: ["uac-6", "uatm-3"]
  },
  {
    id: "7",
    name: "Génie Civil",
    slug: "genie-civil",
    category: "Ingénierie",
    duration: "5 ans",
    description: "Formation en construction, infrastructures, géotechnique et gestion de projets.",
    careers: ["Ingénieur civil", "Chef de projet", "Architecte", "Consultant en BTP"],
    icon: "BookOpen",
    schoolIds: ["uac-5", "unstim-1"]
  },
  {
    id: "8",
    name: "Mathématiques",
    slug: "mathematiques",
    category: "Sciences Exactes",
    duration: "3-5 ans",
    description: "Formation en mathématiques pures et appliquées, statistiques et recherche opérationnelle.",
    careers: ["Professeur", "Statisticien", "Actuaire", "Chercheur"],
    icon: "BookOpen",
    schoolIds: ["uac-2", "unstim-2", "imsp-1", "imsp-3"]
  },
  {
    id: "9",
    name: "Finance",
    slug: "finance",
    category: "Sciences Économiques",
    duration: "3-5 ans",
    description: "Formation en finance d'entreprise, banque, assurance et marchés financiers.",
    careers: ["Analyste financier", "Banquier", "Conseiller financier", "Auditeur"],
    icon: "Briefcase",
    schoolIds: ["uac-1", "uatm-1"]
  },
  {
    id: "10",
    name: "Marketing",
    slug: "marketing",
    category: "Sciences Économiques",
    duration: "3-5 ans",
    description: "Formation en marketing stratégique, digital, communication et vente.",
    careers: ["Responsable marketing", "Chef de produit", "Community manager", "Consultant"],
    icon: "Users",
    schoolIds: ["uac-1", "uatm-1", "uatm-3"]
  }
];

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