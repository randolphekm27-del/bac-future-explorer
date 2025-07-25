import { universities } from './universities';

export interface Program {
  id: string;
  name: string;
  slug: string;
  category: string;
  duration: string;
  description: string;
  domainDetails?: string;
  careers: string[];
  icon: string;
  schoolIds: string[]; // IDs des écoles qui proposent cette filière
}

export const programs: Program[] = [
  // === 1. SCIENCES DE LA SANTÉ ET BIOLOGIE ===
  {
    id: "prog-sante-1",
    name: "Santé publique polyvalente",
    slug: "sante-publique",
    category: "Médecine et Santé Publique",
    duration: "3 ans",
    description: "Formation en politiques sanitaires et prévention des maladies.",
    domainDetails: "Approche communautaire avec modules sur les épidémies tropicales (paludisme, Ebola). Stages dans les centres de santé primaire.",
    careers: ["Agent de santé communautaire", "Épidémiologiste", "Planificateur sanitaire"],
    icon: "ShieldPlus",
    schoolIds: ["uac-2"] // IRSP
  },
  {
    id: "prog-sante-2",
    name: "Médecine Humaine",
    slug: "medecine-humaine",
    category: "Médecine et Santé Publique",
    duration: "7 ans",
    description: "Parcours complet de formation médicale générale.",
    domainDetails: "Enseignement clinique avec rotations dans les CHU. Spécialisation possible après le doctorat.",
    careers: ["Médecin généraliste", "Spécialiste hospitalier"],
    icon: "Stethoscope",
    schoolIds: ["up-2", "uac-16"] // UP FM et UAC FSS
  },
  {
    id: "prog-env-1",
    name: "Environnement, Hygiène et Santé publique",
    slug: "environnement-sante",
    category: "Médecine et Santé Publique",
    duration: "3 ans",
    description: "Gestion des risques sanitaires et environnementaux.",
    domainDetails: "Modules sur l'assainissement, la gestion des déchets et les politiques publiques.",
    careers: ["Ingénieur sanitaire", "Consultant en environnement"],
    icon: "Leaf",
    schoolIds: ["uac-16", "up-7"] // UAC CIFRED et UP ENFTS
  },

  // === 2. SCIENCES DE L'INGÉNIEUR ET TECHNOLOGIES ===
  {
    id: "prog-eng-1",
    name: "Génie Civil",
    slug: "genie-civil",
    category: "Génie Civil, Mécanique et Énergétique",
    duration: "5 ans",
    description: "Conception et réalisation d'infrastructures.",
    domainDetails: "Logiciels professionnels (AutoCAD, Revit). Spécialisations en BTP ou hydraulique.",
    careers: ["Ingénieur travaux", "Conducteur de projets"],
    icon: "Construction",
    schoolIds: ["unstim-4", "uac-78", "up-16"] // UNSTIM INSTI, UAC EPAC, UP IUT
  },
  {
    id: "unstim-23",
    name: "Génie Energétique (Froid et climatisation)",
    slug: "froid-climatisation",
    category: "Génie Civil, Mécanique et Énergétique",
    duration: "4 ans",
    description: "Spécialisation en systèmes de réfrigération.",
    domainDetails: "Laboratoire équipé de systèmes industriels. Partenariats avec les entreprises du secteur.",
    careers: ["Technicien frigoriste", "Ingénieur en climatisation"],
    icon: "Snowflake",
    schoolIds: ["unstim-17"] // ENSGEP
  },
  {
    id: "prog-tech-1",
    name: "Informatique de Gestion",
    slug: "info-gestion",
    category: "Informatique, Télécoms et Intelligence Artificielle",
    duration: "3 ans",
    description: "Développement logiciel et gestion des SI.",
    domainDetails: "Programmation (Java, Python), bases de données (SQL), gestion de projet agile.",
    careers: ["Développeur", "Administrateur de bases de données"],
    icon: "Code",
    schoolIds: ["up-14", "unstim-18"] // UP IUT et UNSTIM INSTI
  },

  // === 3. SCIENCES SOCIALES, HUMAINES ET ARTS ===
  {
    id: "prog-sh-1",
    name: "Socio-Anthropologie",
    slug: "socio-anthropologie",
    category: "Sciences Humaines et Sociales",
    duration: "3 ans",
    description: "Étude des sociétés humaines et des cultures.",
    domainDetails: "Méthodes qualitatives appliquées aux contextes africains. Enquêtes de terrain dans les communautés rurales/urbaines.",
    careers: ["Chercheur en sciences sociales", "Consultant en développement", "Agent de projet"],
    icon: "Users",
    schoolIds: ["uac-3", "up-31"] // UAC FLASH-Adjarra et UP FLASH
  },
  {
    id: "prog-lang-1",
    name: "Anglais",
    slug: "anglais",
    category: "Lettres, Langues et Communication",
    duration: "3 ans",
    description: "Formation linguistique et culture anglo-saxonne.",
    domainDetails: "Approche professionnelle (traduction, interprétation) avec certifications TOEFL/IELTS intégrées.",
    careers: ["Enseignant", "Traducteur", "Agent touristique"],
    icon: "Languages",
    schoolIds: ["uac-4", "up-28"] // UAC FLLAC et UP FLASH
  },
  {
    id: "prog-art-1",
    name: "Arts dramatiques",
    slug: "arts-dramatiques",
    category: "Arts et Culture",
    duration: "3 ans",
    description: "Formation aux métiers du théâtre et de la scène.",
    domainDetails: "Combinaison de techniques contemporaines et traditions théâtrales africaines.",
    careers: ["Comédien", "Metteur en scène"],
    icon: "Drama",
    schoolIds: ["uac-12"] // UAC INMAAC
  },

  // === 4. ÉCONOMIE, GESTION ET DROIT ===
  {
    id: "prog-eco-1",
    name: "Finance et Comptabilité",
    slug: "finance-comptabilite",
    category: "Gestion, Finance et Commerce",
    duration: "3 ans",
    description: "Gestion financière et analyse comptable.",
    domainDetails: "Normes IFRS, logiciels SAGE, audit financier. Préparation aux certifications professionnelles.",
    careers: ["Comptable agréé", "Analyste financier"],
    icon: "CreditCard",
    schoolIds: ["up-23", "uac-43"] // UP FASEG et UAC ENEAM
  },

  // === 5. AGRICULTURE, ENVIRONNEMENT ET RESSOURCES NATURELLES ===
  {
    id: "prog-agro-1",
    name: "Sciences et Techniques de Production Végétale",
    slug: "production-vegetale",
    category: "Agriculture et Productions Végétales/Animales",
    duration: "3 ans",
    description: "Formation en agronomie et gestion des cultures.",
    domainDetails: "Techniques modernes d'irrigation, lutte intégrée contre les ravageurs. Fermes-écoles équipées.",
    careers: ["Agronome", "Gestionnaire de périmètres irrigués"],
    icon: "Sprout",
    schoolIds: ["up-1", "uac-61", "una-1", "una-2", "una-3", "una-7", "una-9", "una-10", "una-11", "una-12"] // UP FA, UAC FSA, UNA écoles agricoles
  },

  // === 6. SCIENCES FONDAMENTALES ET MATHÉMATIQUES ===
  {
    id: "uac-5",
    name: "Cycle préparatoire : Mathématiques, Physiques et Science de l'Ingénieur (MPSI)",
    slug: "prepa-mpsi",
    category: "Mathématiques, Physique et Chimie",
    duration: "2 ans",
    description: "Préparation intensive aux concours d'écoles d'ingénieurs.",
    domainDetails: "Programme exigeant avec 30h de cours/semaine. Taux de réussite >80% aux concours.",
    careers: ["Accès aux grandes écoles d'ingénieurs"],
    icon: "Calculator",
    schoolIds: ["uac-5"] // IMSP UAC
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
