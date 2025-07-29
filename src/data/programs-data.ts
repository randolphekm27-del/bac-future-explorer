// Base de données des filières avec informations indépendantes et modifiables
export interface ProgramData {
  id: string;
  name: string;
  slug: string;
  category: string;
  description?: string;
  duration?: string;
  careers: string[];
  icon: string;
  image?: string;
}

// Données des filières - MODIFIABLES MANUELLEMENT
export const programsData: ProgramData[] = [
  // INFORMATIQUE & TECHNOLOGIES
  {
    id: "informatique",
    name: "Informatique",
    slug: "informatique",
    category: "Informatique & Technologies",
    description: "Formation complète en développement logiciel, systèmes d'information et nouvelles technologies.",
    duration: "3-5 ans",
    careers: ["Développeur", "Ingénieur logiciel", "Chef de projet IT", "Data Scientist"],
    icon: "Code",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "genie-electrique",
    name: "Génie Électrique",
    slug: "genie-electrique",
    category: "Informatique & Technologies",
    description: "Spécialisation en électronique, télécommunications et systèmes électriques.",
    duration: "5 ans",
    careers: ["Ingénieur électronique", "Technicien télécom", "Automaticien", "Ingénieur systèmes"],
    icon: "Zap",
    image: "https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "telecommunications",
    name: "Télécommunications",
    slug: "telecommunications",
    category: "Informatique & Technologies",
    description: "Formation aux réseaux, communications numériques et technologies mobiles.",
    duration: "5 ans",
    careers: ["Ingénieur télécom", "Architecte réseau", "Consultant IT", "Chef de projet télécom"],
    icon: "Radio",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // MÉDECINE & SANTÉ
  {
    id: "medecine",
    name: "Médecine",
    slug: "medecine",
    category: "Médecine & Santé",
    description: "Formation médicale complète pour devenir médecin généraliste ou spécialiste.",
    duration: "7-10 ans",
    careers: ["Médecin généraliste", "Médecin spécialiste", "Chirurgien", "Chercheur médical"],
    icon: "Heart",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "sciences-infirmieres",
    name: "Sciences Infirmières",
    slug: "sciences-infirmieres",
    category: "Médecine & Santé",
    description: "Formation aux soins infirmiers et à la santé communautaire.",
    duration: "3-4 ans",
    careers: ["Infirmier", "Sage-femme", "Gestionnaire de santé", "Infirmier spécialisé"],
    icon: "Heart",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "pharmacie",
    name: "Pharmacie",
    slug: "pharmacie",
    category: "Médecine & Santé",
    description: "Formation pharmaceutique et gestion des médicaments.",
    duration: "6 ans",
    careers: ["Pharmacien", "Pharmacien hospitalier", "Chercheur pharmaceutique", "Inspecteur pharmacie"],
    icon: "Pill",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // GESTION & COMMERCE
  {
    id: "sciences-economiques",
    name: "Sciences Économiques",
    slug: "sciences-economiques",
    category: "Gestion & Commerce",
    description: "Analyse économique, finance et gestion des entreprises.",
    duration: "3-5 ans",
    careers: ["Économiste", "Analyste financier", "Consultant", "Banquier"],
    icon: "TrendingUp",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "gestion-marketing",
    name: "Gestion Marketing",
    slug: "gestion-marketing",
    category: "Gestion & Commerce",
    description: "Marketing digital, communication et stratégies commerciales.",
    duration: "3-5 ans",
    careers: ["Chef marketing", "Commercial", "Community manager", "Entrepreneur"],
    icon: "TrendingUp",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "comptabilite-finance",
    name: "Comptabilité Finance",
    slug: "comptabilite-finance",
    category: "Gestion & Commerce",
    description: "Comptabilité, audit et gestion financière des entreprises.",
    duration: "3-5 ans",
    careers: ["Comptable", "Auditeur", "Contrôleur de gestion", "Expert-comptable"],
    icon: "Calculator",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // GÉNIE CIVIL & CONSTRUCTION
  {
    id: "genie-civil",
    name: "Génie Civil",
    slug: "genie-civil",
    category: "Génie Civil & Construction",
    description: "Construction, infrastructure et aménagement du territoire.",
    duration: "5 ans",
    careers: ["Ingénieur civil", "Chef de chantier", "Architecte", "Urbaniste"],
    icon: "Building",
    image: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "hydraulique",
    name: "Hydraulique",
    slug: "hydraulique",
    category: "Génie Civil & Construction",
    description: "Gestion de l'eau, assainissement et infrastructures hydrauliques.",
    duration: "5 ans",
    careers: ["Ingénieur hydraulique", "Gestionnaire eau", "Consultant environnement", "Chef de projet eau"],
    icon: "Droplets",
    image: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // AGRICULTURE & ENVIRONNEMENT
  {
    id: "agronomie",
    name: "Agronomie",
    slug: "agronomie",
    category: "Agriculture & Environnement",
    description: "Production agricole, développement rural et sécurité alimentaire.",
    duration: "5 ans",
    careers: ["Ingénieur agronome", "Conseiller agricole", "Chercheur agricole", "Entrepreneur agricole"],
    icon: "Sprout",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "environnement",
    name: "Sciences de l'Environnement",
    slug: "environnement",
    category: "Agriculture & Environnement",
    description: "Protection environnementale et développement durable.",
    duration: "3-5 ans",
    careers: ["Expert environnement", "Consultant développement durable", "Gestionnaire ressources naturelles", "Éco-conseiller"],
    icon: "Leaf",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // DROIT & SCIENCES POLITIQUES
  {
    id: "droit",
    name: "Droit",
    slug: "droit",
    category: "Droit & Sciences Politiques",
    description: "Formation juridique complète et sciences politiques.",
    duration: "5 ans",
    careers: ["Avocat", "Magistrat", "Juriste d'entreprise", "Notaire"],
    icon: "Scale",
    image: "https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "administration-publique",
    name: "Administration Publique",
    slug: "administration-publique",
    category: "Droit & Sciences Politiques",
    description: "Gestion publique et administration des collectivités.",
    duration: "3-5 ans",
    careers: ["Administrateur public", "Gestionnaire collectivité", "Diplomate", "Analyste politique"],
    icon: "Building2",
    image: "https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // LETTRES & LANGUES
  {
    id: "lettres-modernes",
    name: "Lettres Modernes",
    slug: "lettres-modernes",
    category: "Lettres & Langues",
    description: "Littérature, linguistique et communication écrite.",
    duration: "3-5 ans",
    careers: ["Professeur", "Journaliste", "Écrivain", "Traducteur"],
    icon: "BookOpen",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "langues-etrangeres",
    name: "Langues Étrangères",
    slug: "langues-etrangeres",
    category: "Lettres & Langues",
    description: "Anglais, allemand, espagnol et autres langues internationales.",
    duration: "3-5 ans",
    careers: ["Traducteur", "Interprète", "Professeur de langues", "Guide touristique"],
    icon: "Languages",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // ARTS & CULTURE
  {
    id: "arts-plastiques",
    name: "Arts Plastiques",
    slug: "arts-plastiques",
    category: "Arts & Culture",
    description: "Création artistique, design et arts visuels.",
    duration: "3-5 ans",
    careers: ["Artiste", "Designer", "Professeur d'arts", "Conservateur musée"],
    icon: "Palette",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "musique",
    name: "Musique",
    slug: "musique",
    category: "Arts & Culture",
    description: "Formation musicale, composition et performance.",
    duration: "3-5 ans",
    careers: ["Musicien", "Compositeur", "Professeur de musique", "Producteur musical"],
    icon: "Music",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // SCIENCES FONDAMENTALES
  {
    id: "mathematiques",
    name: "Mathématiques",
    slug: "mathematiques",
    category: "Sciences Fondamentales",
    description: "Mathématiques pures et appliquées, statistiques.",
    duration: "3-5 ans",
    careers: ["Mathématicien", "Statisticien", "Actuaire", "Professeur de maths"],
    icon: "Calculator",
    image: "https://images.pexels.com/photos/6256/mathematics-computation-mathe-algebra.jpg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "physique-chimie",
    name: "Physique-Chimie",
    slug: "physique-chimie",
    category: "Sciences Fondamentales",
    description: "Sciences physiques et chimiques fondamentales.",
    duration: "3-5 ans",
    careers: ["Physicien", "Chimiste", "Chercheur", "Professeur de sciences"],
    icon: "Atom",
    image: "https://images.pexels.com/photos/6256/mathematics-computation-mathe-algebra.jpg?auto=compress&cs=tinysrgb&w=400"
  }
];

// Fonction pour obtenir une filière par son slug
export const getProgramBySlug = (slug: string): ProgramData | undefined => {
  return programsData.find(program => program.slug === slug);
};

// Fonction pour obtenir une filière par son nom (avec correspondance flexible)
export const getProgramByName = (name: string): ProgramData | undefined => {
  const normalizedName = name.toLowerCase().trim();
  
  // Recherche exacte d'abord
  let program = programsData.find(p => p.name.toLowerCase() === normalizedName);
  
  // Recherche partielle si pas trouvé
  if (!program) {
    program = programsData.find(p => 
      p.name.toLowerCase().includes(normalizedName) ||
      normalizedName.includes(p.name.toLowerCase())
    );
  }
  
  return program;
};

// Fonction pour obtenir toutes les catégories
export const getAllCategories = (): string[] => {
  const categories = new Set(programsData.map(program => program.category));
  return Array.from(categories).sort();
};

// Fonction pour obtenir les filières par catégorie
export const getProgramsByCategory = (category: string): ProgramData[] => {
  return programsData.filter(program => program.category === category);
};