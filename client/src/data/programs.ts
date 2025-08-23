import { universities } from "./universities";
import { PROGRAM_DETAILS_DATABASE, getProgramDetailsById, type ProgramDetails } from "./program-details";

export interface Program {
  id: string;
  name: string;
  slug: string;
  category: string;
  duration: string;
  level: string;
  description: string;
  detailedDescription: string;
  icon: string;
  image: string;
  careers: string[];
  subjects: string[];
  skills: {
    hard: string[];
    soft: string[];
  };
  degrees: string[];
  admissionRequirements: string[];
  schoolsCount?: number;
  testimonials?: {
    name: string;
    role: string;
    company: string;
    quote: string;
    image?: string;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  salary?: {
    entry: string;
    average: string;
    senior: string;
  };
  // Référence vers les détails complets (si disponibles)
  detailsId?: string;
}

// Mapping des filières vers leurs IDs de détails complets
const PROGRAM_TO_DETAILS_MAPPING: Record<string, string> = {
  "informatique-technologies": "PROG_001",
  "droit-sciences-juridiques": "PROG_002", 
  "genie-civil-architecture": "PROG_003",
  // Ajouter ici d'autres mappings au fur et à mesure
};

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

// Programmes détaillés avec contenu personnalisé
const detailedPrograms: Program[] = [
  {
    id: "1",
    name: "Informatique et Technologies",
    slug: "informatique-technologies",
    category: "Sciences et Technologies",
    duration: "3-5 ans",
    level: "Licence, Master, Doctorat",
    description: "Formation complète en informatique couvrant programmation, systèmes, réseaux et intelligence artificielle.",
    detailedDescription: "La filière Informatique et Technologies forme des professionnels capables de concevoir, développer et maintenir des systèmes informatiques complexes. Cette formation combine théorie et pratique pour maîtriser les langages de programmation, les bases de données, l'intelligence artificielle, la cybersécurité et le développement web/mobile. Les étudiants acquièrent une expertise technique solide tout en développant leur capacité d'analyse et de résolution de problèmes.",
    icon: "Code",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
    careers: [
      "Développeur Full-Stack",
      "Ingénieur logiciel", 
      "Data Scientist",
      "Architecte système",
      "Expert en cybersécurité",
      "Chef de projet IT",
      "Consultant technique",
      "Administrateur système",
      "Développeur mobile",
      "Ingénieur DevOps"
    ],
    subjects: [
      "Programmation (Java, Python, C++, JavaScript)",
      "Structures de données et algorithmes",
      "Bases de données relationnelles et NoSQL",
      "Génie logiciel et méthodologies Agile",
      "Réseaux et télécommunications",
      "Intelligence artificielle et Machine Learning",
      "Cybersécurité et cryptographie",
      "Développement web (HTML, CSS, React, Node.js)",
      "Systèmes d'exploitation (Linux, Windows)",
      "Architecture des ordinateurs",
      "Interface utilisateur (UX/UI)",
      "Mathématiques appliquées et statistiques"
    ],
    skills: {
      hard: [
        "Maîtrise de plusieurs langages de programmation",
        "Conception et optimisation de bases de données",
        "Développement d'applications web et mobile",
        "Administration de systèmes et réseaux",
        "Analyse et traitement de données",
        "Sécurisation des systèmes informatiques",
        "Utilisation d'outils de développement (Git, Docker, Kubernetes)"
      ],
      soft: [
        "Résolution de problèmes complexes",
        "Pensée analytique et logique",
        "Travail en équipe sur des projets techniques",
        "Communication technique avec clients non-techniques",
        "Apprentissage continu des nouvelles technologies",
        "Gestion de projets et respect des délais",
        "Créativité dans la conception de solutions"
      ]
    },
    degrees: [
      "Licence en Informatique (Bac+3)",
      "Master en Génie Logiciel (Bac+5)",
      "Master en Intelligence Artificielle (Bac+5)",
      "Master en Cybersécurité (Bac+5)",
      "Doctorat en Informatique (Bac+8)"
    ],
    admissionRequirements: [
      "Baccalauréat série C, D ou équivalent",
      "Bonnes bases en mathématiques",
      "Logique et capacités d'abstraction",
      "Pour Master : Licence en informatique ou domaine connexe",
      "Concours d'entrée selon l'établissement"
    ],
    testimonials: [
      {
        name: "Marie Koffi",
        role: "Développeuse Full-Stack",
        company: "TechAfrique",
        quote: "Cette formation m'a donné toutes les compétences pour réussir dans le développement web. Je travaille maintenant sur des projets innovants qui impactent des milliers d'utilisateurs."
      },
      {
        name: "Jean Togbé",
        role: "Chef de projet IT",
        company: "Orange Bénin",
        quote: "Grâce à ma formation en informatique, j'ai pu évoluer rapidement et diriger des équipes techniques sur des projets stratégiques."
      }
    ],
    seo: {
      title: "Études en Informatique au Bénin | Formations et Débouchés",
      description: "Découvrez les formations en informatique au Bénin : programmation, IA, cybersécurité. Débouchés, universités, et tout ce qu'il faut savoir.",
      keywords: ["informatique Bénin", "formation programmation", "études IT", "développeur", "ingénieur logiciel"]
    },
    salary: {
      entry: "250 000 - 400 000 FCFA/mois",
      average: "500 000 - 800 000 FCFA/mois",
      senior: "1 000 000+ FCFA/mois"
    },
    schoolsCount: 12
  },
  {
    id: "2",
    name: "Droit et Sciences Juridiques",
    slug: "droit-sciences-juridiques",
    category: "Droit et Sciences Juridiques",
    duration: "3-5 ans",
    level: "Licence, Master, Doctorat",
    description: "Formation complète en droit pour devenir juriste, avocat ou magistrat avec spécialisations multiples.",
    detailedDescription: "La filière Droit et Sciences Juridiques forme des professionnels du droit capables d'évoluer dans tous les secteurs juridiques. Cette formation rigoureuse couvre le droit civil, pénal, commercial, international et administratif. Les étudiants développent des compétences d'analyse, d'argumentation et de conseil juridique essentielles pour exercer en cabinet d'avocat, dans l'administration publique, en entreprise ou dans la magistrature.",
    icon: "Scale",
    image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=800",
    careers: [
      "Avocat généraliste ou spécialisé",
      "Magistrat (juge, procureur)",
      "Notaire",
      "Juriste d'entreprise",
      "Conseiller juridique",
      "Huissier de justice",
      "Médiateur",
      "Juriste en droit international",
      "Inspecteur du travail",
      "Commissaire-priseur"
    ],
    subjects: [
      "Droit civil (personnes, famille, contrats, biens)",
      "Droit pénal général et spécial",
      "Droit commercial et des sociétés",
      "Droit administratif et constitutionnel",
      "Procédure civile et pénale",
      "Droit du travail et sécurité sociale",
      "Droit international public et privé",
      "Droit fiscal et douanier",
      "Histoire du droit et institutions",
      "Économie politique",
      "Méthodes de recherche juridique",
      "Déontologie et éthique professionnelle"
    ],
    skills: {
      hard: [
        "Maîtrise des codes et textes juridiques",
        "Rédaction d'actes et de contrats",
        "Plaidoirie et techniques d'audience",
        "Recherche et analyse jurisprudentielle",
        "Conseil et consultation juridique",
        "Procédures judiciaires et administratives",
        "Négociation et médiation"
      ],
      soft: [
        "Argumentation et rhétorique",
        "Esprit d'analyse et de synthèse",
        "Intégrité et déontologie",
        "Capacité d'écoute et d'empathie",
        "Gestion du stress et des conflits",
        "Communication orale et écrite excellente",
        "Rigueur et méticulosité"
      ]
    },
    degrees: [
      "Licence en Droit (Bac+3)",
      "Master en Droit des Affaires (Bac+5)",
      "Master en Droit Public (Bac+5)",
      "Master en Droit International (Bac+5)",
      "Doctorat en Droit (Bac+8)"
    ],
    admissionRequirements: [
      "Baccalauréat toutes séries (A, B, C, D)",
      "Excellente maîtrise du français",
      "Capacités de rédaction et d'expression",
      "Goût pour la lecture et l'analyse",
      "Pour Master : Licence en droit",
      "Concours d'entrée pour certaines écoles"
    ],
    testimonials: [
      {
        name: "Maître Fatou Gbédji",
        role: "Avocate au Barreau de Cotonou",
        company: "Cabinet Gbédji & Associés",
        quote: "Ma formation en droit m'a permis d'ouvrir mon propre cabinet et de défendre les droits de mes clients avec expertise et passion."
      },
      {
        name: "Dr. Kossivi Agbéko",
        role: "Magistrat",
        company: "Cour d'Appel de Porto-Novo",
        quote: "Les études de droit offrent une formation intellectuelle exceptionnelle qui ouvre les portes de nombreuses carrières prestigieuses."
      }
    ],
    seo: {
      title: "Études de Droit au Bénin | Formations Juridiques et Débouchés",
      description: "Découvrez les formations en droit au Bénin : avocat, magistrat, notaire. Universités, débouchés et tout sur les études juridiques.",
      keywords: ["droit Bénin", "études juridiques", "avocat", "magistrat", "formation droit"]
    },
    salary: {
      entry: "200 000 - 350 000 FCFA/mois",
      average: "400 000 - 700 000 FCFA/mois",
      senior: "800 000+ FCFA/mois"
    },
    schoolsCount: 8
  },
  {
    id: "3",
    name: "Génie Civil et Architecture",
    slug: "genie-civil-architecture",
    category: "Sciences et Technologies",
    duration: "3-5 ans",
    level: "Licence, Master, Doctorat",
    description: "Formation d'ingénieurs et architectes pour la conception et construction d'infrastructures modernes.",
    detailedDescription: "La filière Génie Civil et Architecture forme des professionnels capables de concevoir, calculer et superviser la construction d'ouvrages d'art, bâtiments et infrastructures. Cette formation combine sciences exactes, techniques de construction et créativité architecturale. Les diplômés maîtrisent les matériaux, les structures, l'hydraulique et l'urbanisme pour créer des espaces fonctionnels, durables et esthétiques.",
    icon: "Building",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
    careers: [
      "Ingénieur en génie civil",
      "Architecte",
      "Chef de projet BTP",
      "Ingénieur structure",
      "Urbaniste",
      "Ingénieur en hydraulique",
      "Économiste de la construction",
      "Contrôleur technique",
      "Entrepreneur en BTP",
      "Ingénieur en géotechnique"
    ],
    subjects: [
      "Mathématiques appliquées et physique",
      "Résistance des matériaux",
      "Béton armé et construction métallique",
      "Mécanique des sols et géotechnique",
      "Hydraulique et hydrologie",
      "Topographie et géométrie descriptive",
      "Dessin technique et DAO/CAO",
      "Économie de la construction",
      "Gestion de projet et planification",
      "Droit de la construction",
      "Développement durable et éco-construction",
      "Architecture et design urbain"
    ],
    skills: {
      hard: [
        "Calculs de structures et dimensionnement",
        "Maîtrise des logiciels de CAO (AutoCAD, Revit)",
        "Lecture et conception de plans",
        "Contrôle qualité et expertise technique",
        "Gestion de chantier et coordination",
        "Étude de sol et fondations",
        "Normes et réglementations du BTP"
      ],
      soft: [
        "Leadership et management d'équipes",
        "Résolution de problèmes techniques complexes",
        "Communication avec différents corps de métiers",
        "Sens de l'organisation et rigueur",
        "Créativité et vision spatiale",
        "Capacité d'adaptation aux contraintes",
        "Sens des responsabilités et sécurité"
      ]
    },
    degrees: [
      "Licence en Génie Civil (Bac+3)",
      "Master en Génie Civil (Bac+5)",
      "Master en Architecture (Bac+5)",
      "Master en Urbanisme (Bac+5)",
      "Doctorat en Génie Civil (Bac+8)"
    ],
    admissionRequirements: [
      "Baccalauréat série C ou D avec mention",
      "Excellentes bases en mathématiques et physique",
      "Capacités de représentation spatiale",
      "Goût pour le dessin technique",
      "Pour Master : Licence en génie civil ou architecture",
      "Concours d'entrée très sélectif"
    ],
    testimonials: [
      {
        name: "Ing. Paul Akouété",
        role: "Directeur Technique",
        company: "SOBEBAT",
        quote: "Ma formation en génie civil m'a permis de diriger des projets d'envergure nationale et de contribuer au développement des infrastructures du pays."
      },
      {
        name: "Archi. Sophie Houénou",
        role: "Architecte Principale",
        company: "Cabinet d'Architecture Moderne",
        quote: "L'architecture allie technique et créativité. Cette formation m'a donné les outils pour créer des espaces qui transforment la vie des gens."
      }
    ],
    seo: {
      title: "Génie Civil et Architecture au Bénin | Formations BTP",
      description: "Études en génie civil et architecture au Bénin : ingénieur, architecte, BTP. Formations, débouchés et universités.",
      keywords: ["génie civil Bénin", "architecture", "BTP", "ingénieur civil", "formation construction"]
    },
    salary: {
      entry: "300 000 - 500 000 FCFA/mois",
      average: "600 000 - 1 000 000 FCFA/mois",
      senior: "1 200 000+ FCFA/mois"
    },
    schoolsCount: 6
  }
];

// Extraction et fusion avec programmes détaillés
function extractAllPrograms(): Program[] {
  const programMap = new Map<string, Program>();
  
  // Ajouter d'abord les programmes avec détails complets depuis la base de données centralisée
  Object.values(PROGRAM_DETAILS_DATABASE).forEach(details => {
    const program: Program = {
      id: details.id,
      name: details.name,
      slug: details.slug,
      category: details.category,
      duration: details.duration,
      level: details.level,
      description: details.description,
      detailedDescription: details.detailedDescription,
      icon: details.icon,
      image: details.image,
      careers: details.careersSection.careers.map(career => career.title),
      subjects: details.studiesSection.levels.flatMap(level => level.subjects).slice(0, 10), // Limiter à 10 matières
      skills: {
        hard: details.skillsSection.technical.skills.slice(0, 7), // Limiter à 7 compétences
        soft: details.skillsSection.soft.skills.slice(0, 7)
      },
      degrees: details.studiesSection.levels.map(level => level.name),
      admissionRequirements: details.admissionSection.requirements,
      schoolsCount: details.schoolsCount || 0,
      testimonials: details.testimonialsSection?.testimonials,
      seo: {
        title: `Études en ${details.name} au Bénin | Formations et Débouchés`,
        description: details.description,
        keywords: [details.name.toLowerCase(), "formation Bénin", details.category.toLowerCase()]
      },
      salary: details.salary,
      detailsId: details.id
    };
    programMap.set(program.slug, program);
  });
  
  let programId = Object.keys(PROGRAM_DETAILS_DATABASE).length + 1;

  // Ajouter les autres programmes des universités
  universities.forEach(university => {
    university.schools.forEach(school => {
      school.programs.forEach(programName => {
        const slug = createProgramSlug(programName);
        
        if (programMap.has(slug)) {
          // Programme existant - augmenter le nombre d'écoles
          const existingProgram = programMap.get(slug)!;
          existingProgram.schoolsCount = (existingProgram.schoolsCount || 0) + 1;
        } else {
          // Nouveau programme générique
          const category = getCategoryForProgram(programName);
          const careers = getCareersForProgram(programName, category);
          const icon = getIconForCategory(category);
          const image = getImageForCategory(category);
          const detailsId = PROGRAM_TO_DETAILS_MAPPING[slug]; // Vérifier s'il y a des détails complets
          
          programMap.set(slug, {
            id: programId.toString(),
            name: programName,
            slug,
            category,
            duration: "3-5 ans",
            level: "Licence/Master",
            description: getDescriptionForProgram(programName, category),
            detailedDescription: getDetailedDescriptionForProgram(programName, category),
            icon,
            image,
            careers,
            subjects: getSubjectsForProgram(programName, category),
            skills: getSkillsForProgram(category),
            degrees: getDegreesForProgram(category),
            admissionRequirements: getAdmissionRequirementsForProgram(category),
            seo: getSEOForProgram(programName, category),
            schoolsCount: 1,
            detailsId // Référence vers les détails complets si disponible
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

// Fonction pour obtenir la description détaillée par programme
function getDetailedDescriptionForProgram(programName: string, category: string): string {
  const name = programName.toLowerCase();
  
  if (name.includes("médecine")) {
    return "Cette formation médicale rigoureuse prépare les futurs médecins à diagnostiquer, traiter et prévenir les maladies. L'enseignement combine cours théoriques approfondis, travaux pratiques en laboratoire et stages cliniques dans les hôpitaux. Les étudiants acquièrent une connaissance approfondie du corps humain, des pathologies et des traitements modernes.";
  }
  if (name.includes("droit")) {
    return "La formation juridique développe l'esprit d'analyse, la rigueur et la capacité d'argumentation nécessaires pour comprendre et appliquer le droit. Les étudiants étudient les différentes branches du droit, apprennent à rédiger des actes juridiques et à conseiller les particuliers et entreprises dans leurs démarches légales.";
  }
  if (name.includes("informatique")) {
    return "Cette formation technologique prépare aux métiers du numérique en combinant programmation, systèmes informatiques et nouvelles technologies. Les étudiants développent des applications, gèrent des bases de données et conçoivent des solutions informatiques innovantes pour répondre aux besoins des entreprises modernes.";
  }
  
  return `Cette formation en ${category.toLowerCase()} combine théorie et pratique pour former des professionnels compétents et adaptés aux besoins du marché du travail actuel.`;
}

// Fonction pour obtenir les matières par programme
function getSubjectsForProgram(programName: string, category: string): string[] {
  const name = programName.toLowerCase();
  
  if (name.includes("médecine")) {
    return ["Anatomie humaine", "Physiologie", "Pharmacologie", "Pathologie", "Microbiologie", "Sémiologie médicale", "Médecine interne", "Chirurgie générale", "Pédiatrie", "Gynécologie-obstétrique"];
  }
  if (name.includes("droit")) {
    return ["Droit civil", "Droit pénal", "Droit commercial", "Droit administratif", "Procédure civile", "Droit du travail", "Droit international", "Histoire du droit", "Économie politique", "Méthodes juridiques"];
  }
  if (name.includes("informatique")) {
    return ["Programmation", "Structures de données", "Bases de données", "Réseaux informatiques", "Systèmes d'exploitation", "Génie logiciel", "Intelligence artificielle", "Développement web", "Sécurité informatique", "Mathématiques appliquées"];
  }
  
  // Matières génériques par catégorie
  switch (category) {
    case "Santé":
      return ["Sciences biomédicales", "Anatomie", "Physiologie", "Pathologie", "Pharmacologie", "Pratique clinique"];
    case "Économie et Gestion":
      return ["Économie générale", "Comptabilité", "Finance", "Management", "Marketing", "Statistiques", "Droit des affaires"];
    case "Éducation":
      return ["Pédagogie", "Psychologie de l'enfant", "Didactique", "Méthodes d'enseignement", "Évaluation", "Gestion de classe"];
    default:
      return ["Matières fondamentales", "Méthodologie", "Pratique professionnelle", "Stage en entreprise", "Projet de fin d'études"];
  }
}

// Fonction pour obtenir les compétences par catégorie
function getSkillsForProgram(category: string): { hard: string[], soft: string[] } {
  switch (category) {
    case "Santé":
      return {
        hard: ["Diagnostic médical", "Techniques de soins", "Utilisation d'équipements médicaux", "Prescription médicamenteuse"],
        soft: ["Empathie", "Communication avec patients", "Gestion du stress", "Travail d'équipe médical"]
      };
    case "Droit et Sciences Juridiques":
      return {
        hard: ["Rédaction juridique", "Plaidoirie", "Recherche jurisprudentielle", "Conseil juridique"],
        soft: ["Argumentation", "Éthique professionnelle", "Négociation", "Esprit d'analyse"]
      };
    case "Sciences et Technologies":
      return {
        hard: ["Programmation", "Analyse technique", "Conception de systèmes", "Résolution de problèmes techniques"],
        soft: ["Créativité", "Apprentissage continu", "Travail en équipe", "Communication technique"]
      };
    default:
      return {
        hard: ["Compétences techniques spécialisées", "Maîtrise des outils professionnels", "Analyse et synthèse"],
        soft: ["Communication", "Travail d'équipe", "Adaptabilité", "Sens des responsabilités"]
      };
  }
}

// Fonction pour obtenir les diplômes par catégorie
function getDegreesForProgram(category: string): string[] {
  return [
    "Licence (Bac+3)",
    "Master (Bac+5)",
    "Doctorat (Bac+8)"
  ];
}

// Fonction pour obtenir les conditions d'admission par catégorie
function getAdmissionRequirementsForProgram(category: string): string[] {
  switch (category) {
    case "Santé":
      return ["Baccalauréat série C ou D", "Excellent niveau en sciences", "Concours d'entrée très sélectif", "Aptitudes physiques et mentales"];
    case "Droit et Sciences Juridiques":
      return ["Baccalauréat toutes séries", "Excellente maîtrise du français", "Capacités de rédaction", "Esprit d'analyse"];
    case "Sciences et Technologies":
      return ["Baccalauréat série C ou D", "Bonnes bases en mathématiques", "Logique et capacités d'abstraction", "Concours d'entrée"];
    default:
      return ["Baccalauréat", "Dossier scolaire", "Motivation pour la filière", "Entretien ou concours selon l'établissement"];
  }
}

// Fonction pour obtenir les métadonnées SEO
function getSEOForProgram(programName: string, category: string): { title: string, description: string, keywords: string[] } {
  return {
    title: `Études en ${programName} au Bénin | Formations et Débouchés`,
    description: `Découvrez les formations en ${programName.toLowerCase()} au Bénin : débouchés, universités, et tout ce qu'il faut savoir sur cette filière.`,
    keywords: [programName.toLowerCase(), "formation Bénin", category.toLowerCase(), "études supérieures", "débouchés"]
  };
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

// Fonction pour obtenir les programmes en vedette (programmes avec détails complets)
function getFeaturedPrograms(): Program[] {
  return programs.filter(program => program.detailsId);
}

// Fonction pour récupérer les détails complets d'un programme
export function getProgramFullDetails(slug: string): ProgramDetails | null {
  const program = getProgramBySlug(slug);
  if (!program || !program.detailsId) return null;
  
  return getProgramDetailsById(program.detailsId);
}

// Fonction pour vérifier si un programme a des détails complets
export function programHasFullDetails(slug: string): boolean {
  const program = getProgramBySlug(slug);
  return !!(program && program.detailsId);
}

export { getFeaturedPrograms };