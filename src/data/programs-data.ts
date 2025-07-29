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
  // SANTÉ PUBLIQUE & MÉDECINE
  {
    id: "sante-publique-polyvalente",
    name: "Santé publique polyvalente",
    slug: "sante-publique-polyvalente",
    category: "Santé & Médecine",
    description: "Formation en santé publique et épidémiologie pour répondre aux enjeux sanitaires locaux.",
    duration: "3-5 ans",
    careers: ["Responsable de programmes de santé", "Épidémiologiste", "Gestionnaire de systèmes de santé", "Consultant en politiques sanitaires"],
    icon: "Heart",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "sciences-obstetricales",
    name: "Sciences Obstétricales",
    slug: "sciences-obstetricales",
    category: "Santé & Médecine",
    description: "Formation spécialisée en santé maternelle et infantile.",
    duration: "4 ans",
    careers: ["Sage-femme", "Consultant en santé reproductive", "Responsable de maternité", "Formateur en santé maternelle"],
    icon: "Heart",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "sciences-infirmieres",
    name: "Sciences infirmières",
    slug: "sciences-infirmieres",
    category: "Santé & Médecine",
    description: "Formation aux soins infirmiers et gestion des services de santé.",
    duration: "3-4 ans",
    careers: ["Infirmier diplômé", "Cadre de santé", "Infirmier spécialisé", "Gestionnaire de services infirmiers"],
    icon: "Heart",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "medecine-generale",
    name: "Médecine Générale",
    slug: "medecine-generale",
    category: "Santé & Médecine",
    description: "Formation médicale complète pour devenir médecin généraliste.",
    duration: "7 ans",
    careers: ["Médecin généraliste", "Médecin de santé publique", "Chercheur en médecine", "Médecin humanitaire"],
    icon: "Heart",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "pharmacie",
    name: "Pharmacie",
    slug: "pharmacie",
    category: "Santé & Médecine",
    description: "Formation pharmaceutique complète incluant la gestion des médicaments et la recherche.",
    duration: "6 ans",
    careers: ["Pharmacien d'officine", "Pharmacien hospitalier", "Chercheur pharmaceutique", "Responsable qualité en industrie pharmaceutique"],
    icon: "Pill",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "kinesitherapie",
    name: "Kinésithérapie",
    slug: "kinesitherapie",
    category: "Santé & Médecine",
    description: "Formation en rééducation fonctionnelle et thérapie physique.",
    duration: "4 ans",
    careers: ["Kinésithérapeute", "Rééducateur fonctionnel", "Kinésithérapeute du sport", "Ergothérapeute"],
    icon: "Activity",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "nutrition-dietetique",
    name: "Nutrition et Diététique",
    slug: "nutrition-dietetique",
    category: "Santé & Médecine",
    description: "Formation en alimentation, nutrition clinique et santé publique nutritionnelle.",
    duration: "3-4 ans",
    careers: ["Nutritionniste", "Diététicien", "Consultant en sécurité alimentaire", "Chercheur en nutrition"],
    icon: "Utensils",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "analyse-biomedicale",
    name: "Analyse Biomédicale",
    slug: "analyse-biomedicale",
    category: "Santé & Médecine",
    description: "Formation en biologie médicale et analyses diagnostiques.",
    duration: "4-5 ans",
    careers: ["Biologiste médical", "Technicien de laboratoire", "Responsable qualité en laboratoire", "Chercheur en biologie médicale"],
    icon: "Microscope",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // SCIENCES HUMAINES & SOCIALES
  {
    id: "geographie-amenagement",
    name: "Géographie et Aménagement du Territoire",
    slug: "geographie-amenagement",
    category: "Sciences Humaines & Sociales",
    description: "Étude des espaces et de leur organisation pour un développement territorial durable.",
    duration: "3-5 ans",
    careers: ["Géographe", "Aménageur du territoire", "Urbaniste", "Consultant en développement local"],
    icon: "Map",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "socio-anthropologie",
    name: "Socio-Anthropologie",
    slug: "socio-anthropologie",
    category: "Sciences Humaines & Sociales",
    description: "Analyse des sociétés et des cultures contemporaines.",
    duration: "3-5 ans",
    careers: ["Sociologue", "Anthropologue", "Chercheur en sciences sociales", "Consultant en développement communautaire"],
    icon: "Users",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "psychologie",
    name: "Psychologie",
    slug: "psychologie",
    category: "Sciences Humaines & Sociales",
    description: "Étude scientifique des comportements humains et des processus mentaux.",
    duration: "3-5 ans",
    careers: ["Psychologue clinicien", "Psychologue du travail", "Conseiller d'orientation", "Chercheur en psychologie"],
    icon: "Brain",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "sciences-education",
    name: "Sciences de l'Éducation",
    slug: "sciences-education",
    category: "Sciences Humaines & Sociales",
    description: "Formation aux théories et pratiques éducatives.",
    duration: "3-5 ans",
    careers: ["Enseignant", "Formateur d'adultes", "Concepteur de programmes éducatifs", "Consultant en pédagogie"],
    icon: "GraduationCap",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "philosophie",
    name: "Philosophie",
    slug: "philosophie",
    category: "Sciences Humaines & Sociales",
    description: "Étude des questions fondamentales sur l'existence, la connaissance, la raison et les valeurs.",
    duration: "3-5 ans",
    careers: ["Enseignant en philosophie", "Chercheur en sciences humaines", "Consultant en éthique", "Rédacteur spécialisé"],
    icon: "BookOpen",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "histoire-archeologie",
    name: "Histoire et Archéologie",
    slug: "histoire-archeologie",
    category: "Sciences Humaines & Sociales",
    description: "Étude des sociétés humaines à travers leur histoire et leurs vestiges matériels.",
    duration: "3-5 ans",
    careers: ["Historien", "Archéologue", "Conservateur de musée", "Enseignant-chercheur"],
    icon: "Landmark",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "psychologie-travail",
    name: "Psychologie du travail et des Organisations",
    slug: "psychologie-travail",
    category: "Sciences Humaines & Sociales",
    description: "Application de la psychologie au monde du travail et aux organisations.",
    duration: "3-5 ans",
    careers: ["Psychologue du travail", "Responsable RH", "Consultant en organisation", "Coach professionnel"],
    icon: "Briefcase",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "developpement-communautaire",
    name: "Développement Communautaire",
    slug: "developpement-communautaire",
    category: "Sciences Humaines & Sociales",
    description: "Formation pour intervenir dans le développement local et l'animation sociale.",
    duration: "3 ans",
    careers: ["Animateur communautaire", "Agent de développement local", "Coordinateur de projets sociaux", "Consultant en développement"],
    icon: "Handshake",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "andragogie",
    name: "Andragogie",
    slug: "andragogie",
    category: "Sciences Humaines & Sociales",
    description: "Science de la formation des adultes et de l'apprentissage tout au long de la vie.",
    duration: "3 ans",
    careers: ["Formateur d'adultes", "Concepteur de programmes de formation", "Consultant en ressources humaines", "Coordinateur pédagogique"],
    icon: "UserCog",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "recreologie",
    name: "Récréologie",
    slug: "recreologie",
    category: "Sciences Humaines & Sociales",
    description: "Science des loisirs et des activités récréatives.",
    duration: "3 ans",
    careers: ["Animateur socioculturel", "Responsable d'équipements de loisirs", "Concepteur d'activités récréatives", "Tourisme sportif"],
    icon: "Gamepad2",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "entrepreneuriat-social",
    name: "Entrepreneuriat Social",
    slug: "entrepreneuriat-social",
    category: "Sciences Humaines & Sociales",
    description: "Formation pour créer des entreprises à impact social positif.",
    duration: "3 ans",
    careers: ["Entrepreneur social", "Gestionnaire de coopérative", "Responsable d'ONG", "Consultant en innovation sociale"],
    icon: "HeartHandshake",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "dynamique-population",
    name: "Dynamique de Population et Planification Régionale",
    slug: "dynamique-population",
    category: "Sciences Humaines & Sociales",
    description: "Analyse des évolutions démographiques et de leurs impacts sur l'aménagement du territoire.",
    duration: "3-5 ans",
    careers: ["Démographe", "Planificateur régional", "Chercheur en population", "Consultant en développement"],
    icon: "Users",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // LANGUES & LITTÉRATURE
  {
    id: "allemand",
    name: "Allemand",
    slug: "allemand",
    category: "Langues & Littérature",
    description: "Étude approfondie de la langue, littérature et culture allemandes.",
    duration: "3-5 ans",
    careers: ["Enseignant d'allemand", "Traducteur", "Interprète", "Chargé de coopération internationale"],
    icon: "Languages",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "anglais",
    name: "Anglais",
    slug: "anglais",
    category: "Langues & Littérature",
    description: "Étude approfondie de la langue, littérature et cultures anglophones.",
    duration: "3-5 ans",
    careers: ["Enseignant d'anglais", "Traducteur", "Interprète", "Rédacteur bilingue"],
    icon: "Languages",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "espagnol",
    name: "Espagnol",
    slug: "espagnol",
    category: "Langues & Littérature",
    description: "Étude approfondie de la langue, littérature et cultures hispanophones.",
    duration: "3-5 ans",
    careers: ["Enseignant d'espagnol", "Traducteur", "Interprète", "Chargé de coopération internationale"],
    icon: "Languages",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "lettres-modernes",
    name: "Lettres Modernes",
    slug: "lettres-modernes",
    category: "Langues & Littérature",
    description: "Étude de la littérature française et francophone, linguistique et analyse textuelle.",
    duration: "3-5 ans",
    careers: ["Enseignant de lettres", "Rédacteur", "Correcteur", "Concepteur-rédacteur"],
    icon: "BookOpen",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "science-langage",
    name: "Science du Langage et de la Communication",
    slug: "science-langage",
    category: "Langues & Littérature",
    description: "Étude scientifique des langues et des processus de communication.",
    duration: "3-5 ans",
    careers: ["Linguiste", "Orthophoniste", "Expert en communication", "Consultant en communication"],
    icon: "MessageSquare",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "chinois",
    name: "Langue Chinoise",
    slug: "langue-chinoise",
    category: "Langues & Littérature",
    description: "Étude approfondie de la langue et culture chinoises.",
    duration: "3-5 ans",
    careers: ["Enseignant de chinois", "Traducteur", "Interprète", "Chargé de relations sino-africaines"],
    icon: "Languages",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "didactique-chinois",
    name: "Didactique du Chinois",
    slug: "didactique-chinois",
    category: "Langues & Littérature",
    description: "Méthodologie d'enseignement du chinois comme langue étrangère.",
    duration: "2-3 ans",
    careers: ["Enseignant de chinois", "Concepteur de méthodes d'apprentissage", "Formateur de professeurs de chinois"],
    icon: "BookOpen",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // ARTS & CULTURE
  {
    id: "arts-dramatiques",
    name: "Arts dramatiques",
    slug: "arts-dramatiques",
    category: "Arts & Culture",
    description: "Formation aux techniques du théâtre et de l'interprétation scénique.",
    duration: "3-5 ans",
    careers: ["Comédien", "Metteur en scène", "Animateur culturel", "Professeur d'art dramatique"],
    icon: "Drama",
    image: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "arts-plastiques",
    name: "Arts Plastiques",
    slug: "arts-plastiques",
    category: "Arts & Culture",
    description: "Formation aux techniques des arts visuels et à la création artistique.",
    duration: "3-5 ans",
    careers: ["Artiste plasticien", "Graphiste", "Professeur d'arts plastiques", "Directeur artistique"],
    icon: "Palette",
    image: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "musique-musicologie",
    name: "Musique et Musicologie",
    slug: "musique-musicologie",
    category: "Arts & Culture",
    description: "Formation musicale pratique et théorique, étude scientifique de la musique.",
    duration: "3-5 ans",
    careers: ["Musicien", "Compositeur", "Musicologue", "Professeur de musique"],
    icon: "Music",
    image: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "administration-culturelle",
    name: "Administration Culturelle",
    slug: "administration-culturelle",
    category: "Arts & Culture",
    description: "Gestion des institutions et projets culturels.",
    duration: "3-5 ans",
    careers: ["Administrateur culturel", "Directeur de centre culturel", "Chargé de production", "Consultant en politiques culturelles"],
    icon: "Landmark",
    image: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "cinema-audiovisuel",
    name: "Cinéma et Audiovisuel",
    slug: "cinema-audiovisuel",
    category: "Arts & Culture",
    description: "Formation aux métiers du cinéma, de la télévision et des nouveaux médias.",
    duration: "3-5 ans",
    careers: ["Réalisateur", "Cadreur", "Monteur", "Producteur audiovisuel"],
    icon: "Film",
    image: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "metiers-audiovisuel",
    name: "Métiers de l'Audiovisuel et du Multimédia",
    slug: "metiers-audiovisuel",
    category: "Arts & Culture",
    description: "Formation technique aux métiers de la production audiovisuelle et numérique.",
    duration: "3-5 ans",
    careers: ["Technicien audiovisuel", "Concepteur multimédia", "Ingénieur du son", "Opérateur de prise de vue"],
    icon: "Video",
    image: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "gestion-patrimoine",
    name: "Gestion du patrimoine Culturel",
    slug: "gestion-patrimoine",
    category: "Arts & Culture",
    description: "Formation à la conservation et valorisation du patrimoine matériel et immatériel.",
    duration: "3-5 ans",
    careers: ["Conservateur de musée", "Responsable de patrimoine", "Médiateur culturel", "Expert en restauration"],
    icon: "Castle",
    image: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // JOURNALISME & COMMUNICATION
  {
    id: "journalisme",
    name: "Journalisme",
    slug: "journalisme",
    category: "Journalisme & Communication",
    description: "Formation aux techniques journalistiques et à l'éthique de l'information.",
    duration: "3-5 ans",
    careers: ["Journaliste", "Rédacteur en chef", "Reporter", "Correspondant étranger"],
    icon: "Newspaper",
    image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "science-communication",
    name: "Science du Langage et de la Communication",
    slug: "science-communication",
    category: "Journalisme & Communication",
    description: "Approche scientifique des processus de communication et des médias.",
    duration: "3-5 ans",
    careers: ["Expert en communication", "Consultant média", "Responsable communication", "Chargé des relations publiques"],
    icon: "Megaphone",
    image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // DROIT & SCIENCES POLITIQUES
  {
    id: "droit",
    name: "Droit",
    slug: "droit",
    category: "Droit & Sciences Politiques",
    description: "Formation complète en droit privé, public et des affaires.",
    duration: "5 ans",
    careers: ["Avocat", "Magistrat", "Juriste d'entreprise", "Notaire"],
    icon: "Scale",
    image: "https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "sciences-politiques",
    name: "Sciences Politiques",
    slug: "sciences-politiques",
    category: "Droit & Sciences Politiques",
    description: "Étude des phénomènes politiques, des institutions et des relations internationales.",
    duration: "3-5 ans",
    careers: ["Diplomate", "Analyste politique", "Chargé de mission internationale", "Conseiller politique"],
    icon: "Landmark",
    image: "https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "administration-generale",
    name: "Administration Générale",
    slug: "administration-generale",
    category: "Droit & Sciences Politiques",
    description: "Formation à la gestion des administrations publiques et des collectivités.",
    duration: "3-5 ans",
    careers: ["Administrateur civil", "Directeur d'administration", "Chef de service public", "Consultant en gouvernance"],
    icon: "Building2",
    image: "https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "administration-finances",
    name: "Administration des Finances",
    slug: "administration-finances",
    category: "Droit & Sciences Politiques",
    description: "Formation spécialisée en gestion financière publique et fiscalité.",
    duration: "3-5 ans",
    careers: ["Inspecteur des finances", "Contrôleur financier", "Gestionnaire budgétaire", "Expert fiscal"],
    icon: "Banknote",
    image: "https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "secretariat-gestion",
    name: "Secrétariat de Gestion",
    slug: "secretariat-gestion",
    category: "Droit & Sciences Politiques",
    description: "Formation aux techniques de secrétariat administratif et de gestion documentaire.",
    duration: "2-3 ans",
    careers: ["Secrétaire administratif", "Assistant de direction", "Gestionnaire documentaire", "Assistant juridique"],
    icon: "FileText",
    image: "https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "information-documentaire",
    name: "Sciences et Techniques de l'Information documentaire",
    slug: "information-documentaire",
    category: "Droit & Sciences Politiques",
    description: "Gestion des systèmes d'information et des ressources documentaires.",
    duration: "3-5 ans",
    careers: ["Documentaliste", "Archiviste", "Gestionnaire de base de données", "Veilleur stratégique"],
    icon: "Library",
    image: "https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // SCIENCES ÉCONOMIQUES & GESTION
  {
    id: "sciences-economiques",
    name: "Sciences Économiques et de Gestion",
    slug: "sciences-economiques",
    category: "Sciences Économiques & Gestion",
    description: "Formation fondamentale en économie, gestion et analyse des marchés.",
    duration: "3-5 ans",
    careers: ["Économiste", "Analyste économique", "Conseiller en gestion", "Chercheur en économie"],
    icon: "LineChart",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "econometrie-statistiques",
    name: "Économétrie et Statistiques Appliquées",
    slug: "econometrie-statistiques",
    category: "Sciences Économiques & Gestion",
    description: "Formation avancée en modélisation économique et analyse statistique.",
    duration: "3-5 ans",
    careers: ["Économètre", "Statisticien", "Analyste de données", "Expert en modélisation"],
    icon: "Calculator",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "comptabilite-finance",
    name: "Sciences et Techniques Comptables et Financières",
    slug: "comptabilite-finance",
    category: "Sciences Économiques & Gestion",
    description: "Formation professionnelle en comptabilité, audit et gestion financière.",
    duration: "3-5 ans",
    careers: ["Comptable", "Auditeur", "Contrôleur de gestion", "Expert-comptable"],
    icon: "Calculator",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "banque-finance",
    name: "Banque et Finance de Marché",
    slug: "banque-finance",
    category: "Sciences Économiques & Gestion",
    description: "Formation spécialisée en gestion bancaire et marchés financiers.",
    duration: "3-5 ans",
    careers: ["Banquier", "Analyste financier", "Gestionnaire de portefeuille", "Conseiller en investissement"],
    icon: "Banknote",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "microfinance",
    name: "Banque et Institutions des Micro finances",
    slug: "microfinance",
    category: "Sciences Économiques & Gestion",
    description: "Formation à la gestion des institutions de microfinance et inclusion financière.",
    duration: "3-5 ans",
    careers: ["Gestionnaire de microfinance", "Conseiller en inclusion financière", "Analyste de crédit", "Responsable d'agence MFI"],
    icon: "Coins",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "marketing",
    name: "Marketing",
    slug: "marketing",
    category: "Sciences Économiques & Gestion",
    description: "Formation aux stratégies marketing et études de marché.",
    duration: "3-5 ans",
    careers: ["Chef de produit", "Responsable marketing", "Chargé d'études", "Responsable commercial"],
    icon: "Megaphone",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "gestion-ressources-humaines",
    name: "Gestion des Ressources Humaines",
    slug: "gestion-ressources-humaines",
    category: "Sciences Économiques & Gestion",
    description: "Formation à la gestion du capital humain dans les organisations.",
    duration: "3-5 ans",
    careers: ["Responsable RH", "Chargé de recrutement", "Gestionnaire de carrière", "Consultant en RH"],
    icon: "Users",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "gestion-transports",
    name: "Gestion des Transports",
    slug: "gestion-transports",
    category: "Sciences Économiques & Gestion",
    description: "Formation à la logistique et gestion des systèmes de transport.",
    duration: "3-5 ans",
    careers: ["Responsable logistique", "Gestionnaire de flotte", "Planificateur transport", "Consultant en mobilité"],
    icon: "Truck",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "gestion-logistique",
    name: "Gestion de Logistique",
    slug: "gestion-logistique",
    category: "Sciences Économiques & Gestion",
    description: "Formation à la gestion des chaînes d'approvisionnement et flux logistiques.",
    duration: "3-5 ans",
    careers: ["Logisticien", "Responsable supply chain", "Gestionnaire d'entrepôt", "Planificateur production"],
    icon: "Package",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "statistique-economique",
    name: "Statistique Economique et Sectorielle",
    slug: "statistique-economique",
    category: "Sciences Économiques & Gestion",
    description: "Formation à l'analyse statistique appliquée aux secteurs économiques.",
    duration: "3-5 ans",
    careers: ["Statisticien économique", "Analyste sectoriel", "Chargé d'études statistiques", "Data analyst"],
    icon: "BarChart2",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "statistique-demographique",
    name: "Statistique Démographique et Sociale",
    slug: "statistique-demographique",
    category: "Sciences Économiques & Gestion",
    description: "Formation à l'analyse des données démographiques et sociales.",
    duration: "3-5 ans",
    careers: ["Démographe", "Statisticien social", "Analyste des politiques sociales", "Chercheur en démographie"],
    icon: "PieChart",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "gestion-projets",
    name: "Planification et Gestion des Projets",
    slug: "gestion-projets",
    category: "Sciences Économiques & Gestion",
    description: "Formation aux méthodologies de gestion et évaluation de projets.",
    duration: "3-5 ans",
    careers: ["Chef de projet", "Gestionnaire de programmes", "Évaluateur de projets", "Consultant en gestion de projets"],
    icon: "ClipboardList",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "economie-developpement",
    name: "Planification et Economie du Développement Durable",
    slug: "economie-developpement",
    category: "Sciences Économiques & Gestion",
    description: "Formation aux stratégies de développement économique durable.",
    duration: "3-5 ans",
    careers: ["Économiste du développement", "Planificateur économique", "Consultant en développement", "Chargé de mission ONG"],
    icon: "Globe",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "developpement-local",
    name: "Développement Local et Régional",
    slug: "developpement-local",
    category: "Sciences Économiques & Gestion",
    description: "Formation aux politiques et stratégies de développement territorial.",
    duration: "3-5 ans",
    careers: ["Agent de développement local", "Chargé de mission territoriale", "Consultant en aménagement", "Gestionnaire de programmes locaux"],
    icon: "MapPin",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "gestion-financiere",
    name: "Gestion Financière et Comptable",
    slug: "gestion-financiere",
    category: "Sciences Économiques & Gestion",
    description: "Formation professionnelle en gestion financière et comptabilité approfondie.",
    duration: "3-5 ans",
    careers: ["Contrôleur financier", "Directeur financier", "Expert-comptable", "Auditeur financier"],
    icon: "Wallet",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "assurance",
    name: "Assurance",
    slug: "assurance",
    category: "Sciences Économiques & Gestion",
    description: "Formation aux techniques d'assurance et gestion des risques.",
    duration: "3-5 ans",
    careers: ["Actuaire", "Courtier en assurance", "Gestionnaire de sinistres", "Responsable produits assurance"],
    icon: "Shield",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "negoce-international",
    name: "Négoce International",
    slug: "negoce-international",
    category: "Sciences Économiques & Gestion",
    description: "Formation aux techniques du commerce international et gestion des échanges.",
    duration: "3-5 ans",
    careers: ["Négociant international", "Responsable import-export", "Chargé de clientèle internationale", "Consultant en commerce extérieur"],
    icon: "Globe",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "relations-maritimes",
    name: "Gestion des Relations Maritimes Internationales",
    slug: "relations-maritimes",
    category: "Sciences Économiques & Gestion",
    description: "Formation spécialisée dans le commerce et la logistique portuaire internationale.",
    duration: "3-5 ans",
    careers: ["Agent maritime", "Responsable portuaire", "Commissionnaire de transport", "Gestionnaire de trafic maritime"],
    icon: "Ship",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "commerce-international",
    name: "Commerce International",
    slug: "commerce-international",
    category: "Sciences Économiques & Gestion",
    description: "Formation aux techniques du commerce et marketing international.",
    duration: "3-5 ans",
    careers: ["Responsable export", "Chargé de développement international", "Acheteur international", "Responsable supply chain internationale"],
    icon: "Plane",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // SCIENCES & TECHNOLOGIES
  {
    id: "mathematiques-informatique",
    name: "Mathématiques Informatiques et Applications",
    slug: "mathematiques-informatique",
    category: "Sciences & Technologies",
    description: "Formation à l'interface entre mathématiques pures et applications informatiques.",
    duration: "3-5 ans",
    careers: ["Mathématicien appliqué", "Data scientist", "Analyste quantitatif", "Chercheur en modélisation"],
    icon: "Sigma",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "physique-chimie",
    name: "Physique-Chimie",
    slug: "physique-chimie",
    category: "Sciences & Technologies",
    description: "Formation fondamentale en physique et chimie avec applications pratiques.",
    duration: "3-5 ans",
    careers: ["Physicien", "Chimiste", "Enseignant-chercheur", "Ingénieur de recherche"],
    icon: "Atom",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "sciences-vie-terre",
    name: "Sciences de la Vie et de la Terre",
    slug: "sciences-vie-terre",
    category: "Sciences & Technologies",
    description: "Étude des organismes vivants et des systèmes terrestres.",
    duration: "3-5 ans",
    careers: ["Biologiste", "Géologue", "Enseignant en SVT", "Chercheur en sciences naturelles"],
    icon: "Leaf",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "energie-renouvelable",
    name: "Énergie Renouvelable et Système Énergétique",
    slug: "energie-renouvelable",
    category: "Sciences & Technologies",
    description: "Formation aux technologies des énergies propres et gestion des systèmes énergétiques.",
    duration: "3-5 ans",
    careers: ["Ingénieur en énergies renouvelables", "Technicien en énergie solaire", "Consultant en transition énergétique", "Gestionnaire de projets énergétiques"],
    icon: "BatteryFull",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "microbiologie-biotechnologie",
    name: "Microbiologie et Biotechnologie Alimentaire",
    slug: "microbiologie-biotechnologie",
    category: "Sciences & Technologies",
    description: "Formation aux applications biotechnologiques en industrie agroalimentaire.",
    duration: "3-5 ans",
    careers: ["Microbiologiste", "Biotechnologue", "Responsable qualité agroalimentaire", "Chercheur en biotechnologies"],
    icon: "FlaskConical",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "hydrobiologie",
    name: "Hydrobiologie Appliquée",
    slug: "hydrobiologie",
    category: "Sciences & Technologies",
    description: "Étude des écosystèmes aquatiques et de leurs ressources biologiques.",
    duration: "3-5 ans",
    careers: ["Hydrobiologiste", "Gestionnaire des ressources halieutiques", "Expert en écosystèmes aquatiques", "Chercheur en biologie marine"],
    icon: "Fish",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "genie-logiciel",
    name: "Génie Logiciel",
    slug: "genie-logiciel",
    category: "Sciences & Technologies",
    description: "Conception, développement et maintenance de systèmes logiciels complexes.",
    duration: "5 ans",
    careers: ["Ingénieur logiciel", "Architecte logiciel", "Développeur full-stack", "Responsable qualité logicielle"],
    icon: "Code",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "internet-multimedia",
    name: "Internet et Multimédia",
    slug: "internet-multimedia",
    category: "Sciences & Technologies",
    description: "Conception et développement d'applications web et contenus multimédias.",
    duration: "3-5 ans",
    careers: ["Développeur web", "Concepteur multimédia", "Webmaster", "UX/UI designer"],
    icon: "MonitorPlay",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "intelligence-artificielle",
    name: "Intelligence artificielle (IA)",
    slug: "intelligence-artificielle",
    category: "Sciences & Technologies",
    description: "Conception de systèmes intelligents et algorithmes d'apprentissage automatique.",
    duration: "5 ans",
    careers: ["Ingénieur en IA", "Data scientist", "Expert en machine learning", "Chercheur en intelligence artificielle"],
    icon: "BrainCircuit",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "systemes-embarques",
    name: "Systèmes embarqués et Internet des Objets (SEIoT)",
    slug: "systemes-embarques",
    category: "Sciences & Technologies",
    description: "Conception de systèmes électroniques intelligents et connectés.",
    duration: "5 ans",
    careers: ["Ingénieur en systèmes embarqués", "Concepteur IoT", "Développeur firmware", "Expert en électronique numérique"],
    icon: "Cpu",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "securite-informatique",
    name: "Sécurité Informatique",
    slug: "securite-informatique",
    category: "Sciences & Technologies",
    description: "Protection des systèmes d'information et cybersécurité.",
    duration: "5 ans",
    careers: ["Expert en cybersécurité", "Pentester", "Responsable de la sécurité des SI", "Analyste SOC"],
    icon: "ShieldCheck",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "genie-electrique",
    name: "Génie Électrique",
    slug: "genie-electrique",
    category: "Sciences & Technologies",
    description: "Conception et maintenance des systèmes électriques et énergétiques.",
    duration: "5 ans",
    careers: ["Ingénieur électricien", "Responsable maintenance électrique", "Concepteur de réseaux électriques", "Expert en énergie"],
    icon: "Zap",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "genie-mecanique",
    name: "Génie Mécanique et Energétique",
    slug: "genie-mecanique",
    category: "Sciences & Technologies",
    description: "Conception de systèmes mécaniques et optimisation énergétique.",
    duration: "5 ans",
    careers: ["Ingénieur mécanicien", "Thermicien", "Responsable maintenance industrielle", "Concepteur de systèmes énergétiques"],
    icon: "Cog",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "genie-chimique",
    name: "Génie Chimique procédés",
    slug: "genie-chimique",
    category: "Sciences & Technologies",
    description: "Conception et optimisation des procédés chimiques industriels.",
    duration: "5 ans",
    careers: ["Ingénieur procédés", "Responsable production chimique", "Expert en sécurité industrielle", "Chercheur en génie chimique"],
    icon: "FlaskRound",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "genie-biomedical",
    name: "Génie Biomédical (Maintenance Biomédicale et Hospitalière)",
    slug: "genie-biomedical",
    category: "Sciences & Technologies",
    description: "Maintenance et gestion des équipements médicaux hospitaliers.",
    duration: "5 ans",
    careers: ["Ingénieur biomédical", "Responsable maintenance hospitalière", "Technicien équipements médicaux", "Consultant en technologies médicales"],
    icon: "Stethoscope",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "genie-imagerie",
    name: "Génie d'Imagerie médicale et de Radiothérapie",
    slug: "genie-imagerie",
    category: "Sciences & Technologies",
    description: "Gestion des équipements d'imagerie médicale et de radiothérapie.",
    duration: "5 ans",
    careers: ["Ingénieur en imagerie médicale", "Physicien médical", "Responsable radiologie", "Expert en équipements de diagnostic"],
    icon: "Scan",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "genie-civil",
    name: "Génie Civil",
    slug: "genie-civil",
    category: "Sciences & Technologies",
    description: "Conception, construction et maintenance des infrastructures civiles.",
    duration: "5 ans",
    careers: ["Ingénieur civil", "Chef de chantier", "Bureau d'études", "Contrôleur technique"],
    icon: "Building",
    image: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "genie-environnement",
    name: "Génie de l'Environnement",
    slug: "genie-environnement",
    category: "Sciences & Technologies",
    description: "Solutions techniques pour la protection et la gestion de l'environnement.",
    duration: "5 ans",
    careers: ["Ingénieur environnement", "Responsable QHSE", "Expert en dépollution", "Consultant en gestion des déchets"],
    icon: "Leaf",
    image: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "genie-rural",
    name: "Génie Rural",
    slug: "genie-rural",
    category: "Sciences & Technologies",
    description: "Aménagement rural, hydraulique agricole et infrastructures rurales.",
    duration: "5 ans",
    careers: ["Ingénieur rural", "Aménageur rural", "Expert en irrigation", "Gestionnaire de projets agricoles"],
    icon: "Tractor",
    image: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "machinisme-agricole",
    name: "Machinisme Agricole",
    slug: "machinisme-agricole",
    category: "Sciences & Technologies",
    description: "Maintenance et gestion des équipements et machines agricoles.",
    duration: "3-5 ans",
    careers: ["Technicien en machinisme agricole", "Responsable parc machines", "Conseiller en équipements agricoles", "Expert en mécanisation agricole"],
    icon: "Settings",
    image: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "geomatique",
    name: "Géomatique et environnement",
    slug: "geomatique",
    category: "Sciences & Technologies",
    description: "Technologies spatiales et systèmes d'information géographique pour l'environnement.",
    duration: "3-5 ans",
    careers: ["Géomaticien", "Cartographe", "Expert SIG", "Technicien en télédétection"],
    icon: "Map",
    image: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // AGRONOMIE & SCIENCES AGRICOLES
  {
    id: "production-vegetale",
    name: "Sciences et Techniques de Production Végétale",
    slug: "production-vegetale",
    category: "Agronomie & Sciences Agricoles",
    description: "Techniques de culture et amélioration des productions végétales.",
    duration: "5 ans",
    careers: ["Agronome", "Ingénieur agronome", "Chercheur en amélioration végétale", "Conseiller agricole"],
    icon: "Wheat",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "production-animale",
    name: "Sciences et Techniques de Production Animale",
    slug: "production-animale",
    category: "Agronomie & Sciences Agricoles",
    description: "Élevage, nutrition et santé animale.",
    duration: "5 ans",
    careers: ["Zootechnicien", "Vétérinaire", "Nutritionniste animal", "Responsable d'élevage"],
    icon: "Cow",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "amenagement-forets",
    name: "Aménagement et Gestion des Forêts et Parcours Naturels",
    slug: "amenagement-forets",
    category: "Agronomie & Sciences Agricoles",
    description: "Gestion durable des ressources forestières et des espaces naturels.",
    duration: "5 ans",
    careers: ["Forestier", "Gestionnaire d'aires protégées", "Expert en aménagement forestier", "Consultant en gestion des ressources naturelles"],
    icon: "Trees",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "peche-aquaculture",
    name: "Pêche et Aquaculture",
    slug: "peche-aquaculture",
    category: "Agronomie & Sciences Agricoles",
    description: "Techniques de pêche durable et élevage aquacole.",
    duration: "5 ans",
    careers: ["Aquaculteur", "Gestionnaire des ressources halieutiques", "Technicien en pêche", "Expert en aquaculture"],
    icon: "Fish",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "technologie-alimentaire",
    name: "Nutrition et Technologie Alimentaires",
    slug: "technologie-alimentaire",
    category: "Agronomie & Sciences Agricoles",
    description: "Transformation et conservation des produits alimentaires.",
    duration: "5 ans",
    careers: ["Technologue alimentaire", "Responsable qualité agroalimentaire", "Chercheur en technologie alimentaire", "Expert en sécurité alimentaire"],
    icon: "Apple",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "agroeconomie",
    name: "Agroéconomie, Sociologie et Vulgarisation Rurales",
    slug: "agroeconomie",
    category: "Agronomie & Sciences Agricoles",
    description: "Économie agricole et développement rural.",
    duration: "5 ans",
    careers: ["Agroéconomiste", "Conseiller en développement rural", "Vulgarisateur agricole", "Chercheur en économie agricole"],
    icon: "LineChart",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "entrepreneuriat-agricole",
    name: "Entreprenariat Agricole",
    slug: "entrepreneuriat-agricole",
    category: "Agronomie & Sciences Agricoles",
    description: "Création et gestion d'entreprises agricoles innovantes.",
    duration: "5 ans",
    careers: ["Entrepreneur agricole", "Gestionnaire d'exploitation", "Conseiller en création d'entreprise agricole", "Responsable de coopérative"],
    icon: "Sprout",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "technologie-alimentaire-genie",
    name: "Génie de Technologie Alimentaire",
    slug: "technologie-alimentaire-genie",
    category: "Agronomie & Sciences Agricoles",
    description: "Conception des procédés de transformation industrielle des aliments.",
    duration: "5 ans",
    careers: ["Ingénieur en technologie alimentaire", "Responsable de production agroalimentaire", "Expert en procédés alimentaires", "Contrôleur qualité industrie agroalimentaire"],
    icon: "Croissant",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // ENVIRONNEMENT & DÉVELOPPEMENT DURABLE
  {
    id: "environnement-hygiene",
    name: "Environnement, Hygiène et Santé publique",
    slug: "environnement-hygiene",
    category: "Environnement & Développement Durable",
    description: "Gestion des risques environnementaux et santé publique.",
    duration: "3-5 ans",
    careers: ["Responsable hygiène et sécurité", "Expert en santé environnementale", "Consultant en gestion des déchets", "Chargé de mission environnement"],
    icon: "Recycle",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "gestion-cadre-vie",
    name: "Gestion des cadres de vie",
    slug: "gestion-cadre-vie",
    category: "Environnement & Développement Durable",
    description: "Aménagement et gestion durable des espaces de vie.",
    duration: "3-5 ans",
    careers: ["Urbaniste", "Aménageur territorial", "Responsable de projets d'aménagement", "Consultant en cadre de vie"],
    icon: "Home",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "changements-climatiques",
    name: "Gestion des changements climatiques et des écosystèmes",
    slug: "changements-climatiques",
    category: "Environnement & Développement Durable",
    description: "Stratégies d'adaptation et d'atténuation des changements climatiques.",
    duration: "3-5 ans",
    careers: ["Expert en climat", "Consultant en adaptation climatique", "Chargé de mission environnement", "Chercheur en écologie globale"],
    icon: "CloudSun",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "planification-urbaine",
    name: "Planification et Gestion des espaces urbains et ruraux",
    slug: "planification-urbaine",
    category: "Environnement & Développement Durable",
    description: "Aménagement durable des territoires urbains et ruraux.",
    duration: "3-5 ans",
    careers: ["Urbaniste", "Aménageur rural", "Responsable de planification territoriale", "Expert en développement local"],
    icon: "MapPin",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "risques-eau-climat",
    name: "Gestion des crises et risques liés à l'eau et au climat",
    slug: "risques-eau-climat",
    category: "Environnement & Développement Durable",
    description: "Prévention et gestion des risques hydrologiques et climatiques.",
    duration: "3-5 ans",
    careers: ["Expert en gestion des risques", "Responsable de la protection civile", "Consultant en prévention des catastrophes", "Chargé de mission environnement"],
    icon: "CloudRain",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "hydrologie",
    name: "Hydrologie quantitative et Gestion intégrée des Ressources",
    slug: "hydrologie",
    category: "Environnement & Développement Durable",
    description: "Gestion scientifique des ressources en eau.",
    duration: "3-5 ans",
    careers: ["Hydrologue", "Gestionnaire des ressources en eau", "Expert en modélisation hydrologique", "Consultant en gestion intégrée de l'eau"],
    icon: "Droplet",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "hydrogeologie",
    name: "Hydrogéologie et Gestion intégrée des Ressources",
    slug: "hydrogeologie",
    category: "Environnement & Développement Durable",
    description: "Étude et gestion des eaux souterraines.",
    duration: "3-5 ans",
    careers: ["Hydrogéologue", "Expert en eaux souterraines", "Consultant en forage", "Gestionnaire de nappes phréatiques"],
    icon: "Waves",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "ecohydrologie",
    name: "Ecohydrologie et Gestion intégrée des Ressources",
    slug: "ecohydrologie",
    category: "Environnement & Développement Durable",
    description: "Interactions entre écosystèmes et cycle hydrologique.",
    duration: "3-5 ans",
    careers: ["Écohydrologue", "Expert en gestion des écosystèmes aquatiques", "Chercheur en écologie des eaux", "Consultant en restauration de zones humides"],
    icon: "TreePine",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "hydraulique-assainissement",
    name: "Hydraulique et Assainissement",
    slug: "hydraulique-assainissement",
    category: "Environnement & Développement Durable",
    description: "Conception des systèmes hydrauliques et d'assainissement.",
    duration: "3-5 ans",
    careers: ["Ingénieur hydraulique", "Responsable d'assainissement", "Expert en réseaux d'eau", "Technicien en traitement des eaux"],
    icon: "Pipe",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "eau-hygiene",
    name: "Eau Hygiène et Assainissement (EHA)",
    slug: "eau-hygiene",
    category: "Environnement & Développement Durable",
    description: "Approvisionnement en eau potable et assainissement de base.",
    duration: "3-5 ans",
    careers: ["Expert EHA", "Responsable de programmes hydrauliques", "Technicien en assainissement", "Chargé de mission eau et assainissement"],
    icon: "GlassWater",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // ÉDUCATION PHYSIQUE & SPORT
  {
    id: "education-physique",
    name: "Éducation Physique et Sportive",
    slug: "education-physique",
    category: "Éducation Physique & Sport",
    description: "Formation à l'enseignement des activités physiques et sportives.",
    duration: "3-5 ans",
    careers: ["Professeur d'EPS", "Entraîneur sportif", "Animateur sportif", "Responsable de centre sportif"],
    icon: "Dumbbell",
    image: "https://images.pexels.com/photos/221247/pexels-photo-221247.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "entrainement-sportif",
    name: "Entraînement Sportif",
    slug: "entrainement-sportif",
    category: "Éducation Physique & Sport",
    description: "Préparation physique et technique des sportifs de haut niveau.",
    duration: "3-5 ans",
    careers: ["Entraîneur professionnel", "Préparateur physique", "Directeur technique sportif", "Consultant en performance sportive"],
    icon: "Trophy",
    image: "https://images.pexels.com/photos/221247/pexels-photo-221247.jpeg?auto=compress&cs=tinysrgb&w=400"
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
