// Base de données des filières avec informations indépendantes et modifiables
export interface ProgramData {
  id: string;
  name: string;
  slug: string;
  category: string;
  description?: string;
  explanation?: string; // Section "Explication" empathique
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
    explanation: "Cette filière forme des professionnels capables d'analyser et d'améliorer la santé des populations. Vous apprendrez à concevoir des programmes de prévention, à gérer des crises sanitaires et à promouvoir des politiques de santé publique adaptées aux réalités africaines.",
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
    explanation: "Vous accompagnerez les femmes tout au long de leur grossesse et lors de l'accouchement. Cette profession noble vous permettra de contribuer à la réduction de la mortalité maternelle et infantile, un enjeu majeur de santé publique en Afrique.",
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
    explanation: "Cette filière vous prépare à devenir un professionnel de santé essentiel, capable de dispenser des soins de qualité, d'éduquer les patients et de participer à la gestion des services de santé.",
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
    explanation: "Devenez un acteur clé du système de santé, capable de diagnostiquer, traiter et prévenir les maladies tout en établissant une relation de confiance avec vos patients.",
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
    explanation: "En tant que pharmacien, vous serez le garant de la qualité des médicaments et jouerez un rôle essentiel dans le conseil thérapeutique et la santé publique.",
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
    explanation: "Aidez les patients à retrouver leur mobilité et autonomie après un accident, une maladie ou un handicap grâce à des techniques de rééducation spécialisées.",
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
    explanation: "Devenez expert en alimentation saine et contribuez à améliorer la santé des populations par des conseils nutritionnels personnalisés et des programmes de prévention.",
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
    explanation: "Participez au diagnostic des maladies en réalisant des analyses biologiques précises et en contribuant à la recherche médicale.",
    duration: "4-5 ans",
    careers: ["Biologiste médical", "Technicien de laboratoire", "Responsable qualité en laboratoire", "Chercheur en biologie médicale"],
    icon: "Microscope",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "sante-publique-surveillance",
    name: "Santé Publique et Surveillance Epidémiologique",
    slug: "sante-publique-surveillance",
    category: "Santé & Médecine",
    description: "Spécialisation en lutte contre les épidémies et politiques sanitaires.",
    explanation: "Devenez un acteur clé de la prévention et du contrôle des maladies, en particulier dans les contextes épidémiques et les crises sanitaires.",
    duration: "3-5 ans",
    careers: ["Épidémiologiste", "Responsable de surveillance sanitaire", "Gestionnaire de programmes de santé", "Expert en santé publique"],
    icon: "Activity",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "soins-infirmiers",
    name: "Soins Infirmiers",
    slug: "soins-infirmiers",
    category: "Santé & Médecine",
    description: "Formation pratique aux soins infirmiers de base et spécialisés.",
    explanation: "Acquérez les compétences techniques et relationnelles essentielles pour dispenser des soins de qualité et accompagner les patients dans leur parcours de santé.",
    duration: "3 ans",
    careers: ["Infirmier généraliste", "Infirmier spécialisé", "Cadre de santé", "Formateur en soins infirmiers"],
    icon: "Heart",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "soins-obstetricaux",
    name: "Soins Obstétricaux",
    slug: "soins-obstetricaux",
    category: "Santé & Médecine",
    description: "Formation spécialisée en soins maternels et néonatals.",
    explanation: "Spécialisez-vous dans l'accompagnement des femmes enceintes, des accouchements et des soins aux nouveau-nés, contribuant ainsi à réduire la mortalité maternelle et infantile.",
    duration: "3 ans",
    careers: ["Infirmier obstétrical", "Sage-femme", "Consultant en santé reproductive", "Responsable de maternité"],
    icon: "Heart",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "assistance-sociale",
    name: "Assistance sociale",
    slug: "assistance-sociale",
    category: "Santé & Médecine",
    description: "Formation aux interventions sociales et accompagnement des personnes vulnérables.",
    explanation: "Devenez un acteur du changement social en aidant les personnes en difficulté à retrouver autonomie et dignité grâce à un accompagnement personnalisé.",
    duration: "3 ans",
    careers: ["Assistant social", "Conseiller en insertion", "Travailleur social", "Responsable de service social"],
    icon: "HandHeart",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // SCIENCES HUMAINES & SOCIALES
  {
    id: "geographie-amenagement",
    name: "Géographie et Aménagement du Territoire",
    slug: "geographie-amenagement",
    category: "Sciences Humaines & Sociales",
    description: "Étude des espaces et de leur organisation pour un développement territorial durable.",
    explanation: "Vous deviendrez un expert de l'organisation spatiale, capable de planifier le développement des villes et régions. Cette formation vous permet de contribuer à l'amélioration du cadre de vie des populations en conciliant développement économique et préservation de l'environnement.",
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
    explanation: "Décryptez les comportements humains et les dynamiques sociales pour mieux comprendre et accompagner les transformations des sociétés africaines et mondiales.",
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
    explanation: "Explorez le fonctionnement de l'esprit humain et apprenez à aider les individus à surmonter leurs difficultés psychologiques pour une meilleure qualité de vie.",
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
    explanation: "Devenez un acteur du système éducatif en contribuant à l'amélioration des méthodes pédagogiques et des politiques éducatives pour un meilleur apprentissage.",
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
    explanation: "Développez votre esprit critique et votre capacité à analyser les grands enjeux de l'humanité à travers l'histoire des idées et la réflexion personnelle.",
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
    explanation: "Explorez le passé pour mieux comprendre le présent et contribuer à la préservation du patrimoine culturel de l'humanité.",
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
    explanation: "Améliorez le bien-être et la performance des individus au travail en analysant les comportements organisationnels et en proposant des solutions adaptées.",
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
    explanation: "Devenez un acteur du changement social en mobilisant les communautés autour de projets collectifs pour améliorer leurs conditions de vie.",
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
    explanation: "Spécialisez-vous dans les méthodes pédagogiques adaptées aux adultes pour faciliter leur insertion professionnelle et leur développement personnel.",
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
    description: "Formation aux loisirs, animations et activités récréatives pour le développement social.",
    explanation: "Devenez un expert de l'animation et du loisir éducatif, capable de concevoir des programmes récréatifs qui contribuent au bien-être social et au développement communautaire.",
    duration: "3 ans",
    careers: ["Animateur socioculturel", "Directeur de centre de loisirs", "Concepteur d'activités récréatives", "Coordonnateur de programmes jeunesse"],
    icon: "Gamepad2",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // LETTRES, LANGUES ET COMMUNICATION
  {
    id: "anglais",
    name: "Anglais",
    slug: "anglais",
    category: "Lettres, Langues et Communication",
    description: "Maîtrise approfondie de la langue anglaise et de la culture anglophone.",
    explanation: "Développez une expertise linguistique et culturelle en anglais qui vous ouvrira les portes du monde professionnel international et de l'enseignement.",
    duration: "3-5 ans",
    careers: ["Enseignant d'anglais", "Traducteur-interprète", "Attaché culturel", "Responsable relations internationales"],
    icon: "Languages",
    image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "allemand",
    name: "Allemand",
    slug: "allemand",
    category: "Lettres, Langues et Communication",
    description: "Formation en langue et culture allemandes avec focus sur les relations économiques.",
    explanation: "Maîtrisez la langue de Goethe et développez une compréhension profonde de la culture germanophone, un atout majeur dans un monde globalisé.",
    duration: "3-5 ans",
    careers: ["Enseignant d'allemand", "Traducteur spécialisé", "Chargé de mission franco-allemande", "Consultant en coopération internationale"],
    icon: "Languages",
    image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "espagnol",
    name: "Espagnol",
    slug: "espagnol",
    category: "Lettres, Langues et Communication",
    description: "Étude de la langue espagnole et des cultures hispaniques et latino-américaines.",
    explanation: "Explorez la richesse de la langue espagnole et des cultures hispaniques, un avantage considérable dans un monde où l'espagnol est parlé par plus de 500 millions de personnes.",
    duration: "3-5 ans",
    careers: ["Enseignant d'espagnol", "Guide touristique spécialisé", "Responsable export Amérique latine", "Journaliste international"],
    icon: "Languages",
    image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "lettres-modernes",
    name: "Lettres Modernes",
    slug: "lettres-modernes",
    category: "Lettres, Langues et Communication",
    description: "Étude approfondie de la littérature française et francophone contemporaine.",
    explanation: "Plongez dans l'univers des mots et des idées à travers l'étude de la littérature française et francophone, développant votre esprit critique et vos capacités d'expression.",
    duration: "3-5 ans",
    careers: ["Enseignant de français", "Écrivain", "Éditeur", "Critique littéraire"],
    icon: "BookOpen",
    image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "science-langage-communication",
    name: "Science du Langage et de la Communication",
    slug: "science-langage-communication",
    category: "Lettres, Langues et Communication",
    description: "Analyse scientifique des langues, de la communication et des médias.",
    explanation: "Décryptez les mécanismes du langage et de la communication pour devenir un expert en analyse linguistique et en stratégies communicationnelles.",
    duration: "3-5 ans",
    careers: ["Linguiste", "Consultant en communication", "Responsable éditorial", "Analyste des médias"],
    icon: "MessageSquare",
    image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // SCIENCES FONDAMENTALES
  {
    id: "cycle-preparatoire-maths-physique",
    name: "Cycle préparatoire: Maths, Physique et Sciences de l'ingénieur",
    slug: "cycle-preparatoire-maths-physique",
    category: "Mathématiques, Physique et Chimie",
    description: "Préparation intensive aux concours des grandes écoles d'ingénieurs.",
    explanation: "Préparez-vous aux plus prestigieuses écoles d'ingénieurs grâce à une formation rigoureuse en mathématiques et physique qui développera votre raisonnement scientifique.",
    duration: "2-3 ans",
    careers: ["Élève ingénieur", "Chercheur en sciences", "Enseignant de mathématiques", "Consultant technique"],
    icon: "Calculator",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "physique-chimie-pcsi",
    name: "Physique-Chimie et Science de l'Ingénieur (PCSI)",
    slug: "physique-chimie-pcsi",
    category: "Mathématiques, Physique et Chimie",
    description: "Formation pluridisciplinaire en sciences physiques et chimiques.",
    explanation: "Maîtrisez les lois fondamentales de la matière et de l'énergie pour comprendre et façonner le monde technologique de demain.",
    duration: "2-3 ans",
    careers: ["Ingénieur en R&D", "Chercheur en physique", "Professeur de sciences", "Expert en énergies"],
    icon: "Atom",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // AGRICULTURE ET PRODUCTIONS
  {
    id: "sciences-production-vegetale",
    name: "Sciences et Techniques de Production Végétale",
    slug: "sciences-production-vegetale",
    category: "Agriculture et Productions Végétales/Animales",
    description: "Formation complète en agriculture moderne et production végétale durable.",
    explanation: "Devenez un expert de l'agriculture moderne en maîtrisant les techniques de production végétale durables pour nourrir les populations tout en préservant l'environnement.",
    duration: "3-5 ans",
    careers: ["Ingénieur agronome", "Conseiller agricole", "Responsable de coopérative", "Expert en agriculture durable"],
    icon: "Sprout",
    image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "sciences-production-animale",
    name: "Sciences et Techniques de Production Animale et Halieutique",
    slug: "sciences-production-animale",
    category: "Agriculture et Productions Végétales/Animales",
    description: "Spécialisation en élevage et aquaculture pour la sécurité alimentaire.",
    explanation: "Contribuez à la sécurité alimentaire en maîtrisant l'élevage moderne et l'aquaculture, secteurs essentiels pour le développement rural africain.",
    duration: "3-5 ans",
    careers: ["Zootechnicien", "Aquaculteur", "Vétérinaire", "Gestionnaire de ferme moderne"],
    icon: "Fish",
    image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "amenagement-ressources-naturelles",
    name: "Aménagement et Gestion des Ressources Naturelles",
    slug: "amenagement-ressources-naturelles",
    category: "Environnement et Développement Durable",
    description: "Gestion durable des écosystèmes et conservation de la biodiversité.",
    explanation: "Protégez notre planète en devenant un expert de la gestion durable des ressources naturelles, un enjeu crucial pour les générations futures.",
    duration: "3-5 ans",
    careers: ["Gestionnaire d'aires protégées", "Expert en biodiversité", "Consultant environnemental", "Coordonnateur de projets écologiques"],
    icon: "TreePine",
    image: "https://images.pexels.com/photos/441900/pexels-photo-441900.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "sociologie-economie-rurale",
    name: "Sociologie et Economie Rurale",
    slug: "sociologie-economie-rurale",
    category: "Sciences Humaines & Sociales",
    description: "Analyse des dynamiques sociales et économiques du monde rural.",
    explanation: "Comprenez les enjeux sociaux et économiques du monde rural pour accompagner les transformations des communautés agricoles avec sensibilité et expertise.",
    duration: "3-5 ans",
    careers: ["Sociologue rural", "Économiste agricole", "Agent de développement rural", "Consultant en politique agricole"],
    icon: "TrendingUp",
    image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "nutrition-sciences-agroalimentaires",
    name: "Nutrition et Sciences Agro-alimentaires",
    slug: "nutrition-sciences-agroalimentaires",
    category: "Santé & Médecine",
    description: "Sciences alimentaires et transformation des produits agricoles.",
    explanation: "Révolutionnez l'industrie alimentaire en développant des produits nutritifs et durables qui répondent aux besoins alimentaires des populations.",
    duration: "3-5 ans",
    careers: ["Technologue alimentaire", "Nutritionniste industriel", "Responsable qualité alimentaire", "Innovateur produits"],
    icon: "Apple",
    image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // MÉDECINE ET SANTÉ
  {
    id: "medecine-humaine",
    name: "Médecine Humaine",
    slug: "medecine-humaine",
    category: "Santé & Médecine",
    description: "Formation médicale complète pour devenir médecin généraliste ou spécialiste.",
    explanation: "Embrassez la noble profession médicale en acquérant les connaissances et compétences nécessaires pour soigner, guérir et accompagner les patients tout au long de leur vie.",
    duration: "7-9 ans",
    careers: ["Médecin généraliste", "Médecin spécialiste", "Chirurgien", "Médecin de santé publique"],
    icon: "Stethoscope",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // INGÉNIERIE ET TECHNOLOGIES
  {
    id: "electrotechnique",
    name: "Electrotechnique",
    slug: "electrotechnique",
    category: "Informatique, Télécoms et Intelligence Artificielle",
    description: "Maîtrise des systèmes électriques et de l'électronique de puissance.",
    explanation: "Maîtrisez l'énergie électrique pour concevoir et maintenir les infrastructures électriques modernes, un domaine essentiel au développement technologique.",
    duration: "3-5 ans",
    careers: ["Ingénieur électricien", "Technicien en électrotechnique", "Responsable maintenance électrique", "Consultant en énergie"],
    icon: "Zap",
    image: "https://images.pexels.com/photos/159804/technology-keyboard-computing-computer-159804.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "electronique",
    name: "Electronique",
    slug: "electronique",
    category: "Informatique, Télécoms et Intelligence Artificielle",
    description: "Conception et développement de systèmes électroniques et circuits.",
    explanation: "Explorez l'univers fascinant de l'électronique pour créer les technologies de demain, des smartphones aux systèmes embarqués les plus sophistiqués.",
    duration: "3-5 ans",
    careers: ["Ingénieur électronicien", "Concepteur de circuits", "Technicien en électronique", "Développeur systèmes embarqués"],
    icon: "Cpu",
    image: "https://images.pexels.com/photos/159804/technology-keyboard-computing-computer-159804.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "genie-civil",
    name: "Génie Civil",
    slug: "genie-civil",
    category: "Génie Civil, Mécanique et Énergétique",
    description: "Construction d'infrastructures et aménagement urbain durable.",
    explanation: "Bâtissez l'avenir en concevant et réalisant les infrastructures qui transforment nos villes et améliorent la qualité de vie des populations.",
    duration: "3-5 ans",
    careers: ["Ingénieur en génie civil", "Chef de projet BTP", "Urbaniste", "Expert en construction durable"],
    icon: "Building",
    image: "https://images.pexels.com/photos/1797414/pexels-photo-1797414.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "genie-energetique",
    name: "Génie Energétique",
    slug: "genie-energetique",
    category: "Génie Civil, Mécanique et Énergétique",
    description: "Optimisation énergétique et développement d'énergies renouvelables.",
    explanation: "Participez à la transition énergétique en développant des solutions innovantes pour une énergie propre, accessible et durable.",
    duration: "3-5 ans",
    careers: ["Ingénieur énergéticien", "Expert en énergies renouvelables", "Auditeur énergétique", "Gestionnaire de réseaux électriques"],
    icon: "Battery",
    image: "https://images.pexels.com/photos/1797414/pexels-photo-1797414.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "genie-electrique-informatique",
    name: "Génie Electrique et Informatique",
    slug: "genie-electrique-informatique",
    category: "Informatique, Télécoms et Intelligence Artificielle",
    description: "Convergence entre électricité, électronique et systèmes informatiques.",
    explanation: "Maîtrisez la convergence technologique entre électricité et informatique pour créer les systèmes intelligents de demain.",
    duration: "3-5 ans",
    careers: ["Ingénieur systèmes", "Architecte IoT", "Responsable infrastructure IT", "Expert en automatisation"],
    icon: "Microchip",
    image: "https://images.pexels.com/photos/159804/technology-keyboard-computing-computer-159804.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "genie-mecanique-productique",
    name: "Génie Mécanique et Productique",
    slug: "genie-mecanique-productique",
    category: "Génie Civil, Mécanique et Énergétique",
    description: "Conception mécanique et optimisation des processus de production.",
    explanation: "Optimisez les processus industriels en maîtrisant la mécanique et les techniques de production pour une industrie plus efficace et durable.",
    duration: "3-5 ans",
    careers: ["Ingénieur mécanique", "Responsable production", "Concepteur industriel", "Expert en productique"],
    icon: "Settings",
    image: "https://images.pexels.com/photos/1797414/pexels-photo-1797414.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "maintenance-industrielle",
    name: "Maintenance Industrielle",
    slug: "maintenance-industrielle",
    category: "Génie Civil, Mécanique et Énergétique",
    description: "Maintien en condition opérationnelle des équipements industriels.",
    explanation: "Assurez la continuité des opérations industrielles en maîtrisant les techniques de maintenance préventive et corrective des équipements complexes.",
    duration: "3-4 ans",
    careers: ["Technicien de maintenance", "Responsable maintenance", "Expert en fiabilité", "Consultant en maintenance prédictive"],
    icon: "Wrench",
    image: "https://images.pexels.com/photos/1797414/pexels-photo-1797414.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "maintenance-automobile",
    name: "Maintenance Automobile",
    slug: "maintenance-automobile",
    category: "Génie Civil, Mécanique et Énergétique",
    description: "Réparation et entretien des véhicules automobiles modernes.",
    explanation: "Maîtrisez les technologies automobiles modernes pour maintenir en parfait état les véhicules qui constituent l'épine dorsale de la mobilité moderne.",
    duration: "2-3 ans",
    careers: ["Mécanicien automobile", "Expert technique automobile", "Gestionnaire d'atelier", "Conseiller technique"],
    icon: "Car",
    image: "https://images.pexels.com/photos/1797414/pexels-photo-1797414.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // GESTION ET COMMERCE
  {
    id: "comptabilite",
    name: "Comptabilité",
    slug: "comptabilite",
    category: "Gestion, Finance et Commerce",
    description: "Gestion financière et comptable des entreprises et organisations.",
    explanation: "Devenez le pilier financier des organisations en maîtrisant la comptabilité, discipline essentielle à la santé économique de toute structure.",
    duration: "3-4 ans",
    careers: ["Comptable", "Expert-comptable", "Contrôleur de gestion", "Auditeur financier"],
    icon: "Calculator",
    image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "secretariat",
    name: "Secrétariat",
    slug: "secretariat",
    category: "Gestion, Finance et Commerce",
    description: "Assistance administrative et gestion de l'information en entreprise.",
    explanation: "Maîtrisez l'art de l'organisation et de la communication administrative pour devenir un maillon essentiel du fonctionnement efficace des organisations.",
    duration: "2-3 ans",
    careers: ["Secrétaire de direction", "Assistant administratif", "Gestionnaire de bureau", "Coordinateur administratif"],
    icon: "FileText",
    image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "economie",
    name: "Economie",
    slug: "economie",
    category: "Gestion, Finance et Commerce",
    description: "Analyse des mécanismes économiques et des politiques publiques.",
    explanation: "Décryptez les mécanismes économiques pour comprendre et influencer les dynamiques qui façonnent notre société et notre avenir collectif.",
    duration: "3-5 ans",
    careers: ["Économiste", "Analyste financier", "Conseiller en politique économique", "Chargé d'études économiques"],
    icon: "TrendingUp",
    image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // SPÉCIALITÉS TECHNIQUES
  {
    id: "mecanique-automobile",
    name: "Mécanique Automobile",
    slug: "mecanique-automobile",
    category: "Génie Civil, Mécanique et Énergétique",
    description: "Diagnostic et réparation des systèmes automobiles.",
    explanation: "Plongez dans l'univers de la mécanique automobile pour maîtriser les technologies qui nous permettent de nous déplacer et de transporter marchandises et personnes.",
    duration: "2-3 ans",
    careers: ["Mécanicien automobile", "Technicien diagnostic", "Chef d'atelier", "Formateur en mécanique"],
    icon: "Car",
    image: "https://images.pexels.com/photos/1797414/pexels-photo-1797414.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "fabrication-mecanique",
    name: "Fabrication Mécanique",
    slug: "fabrication-mecanique",
    category: "Génie Civil, Mécanique et Énergétique",
    description: "Usinage et fabrication de pièces mécaniques de précision.",
    explanation: "Créez les pièces mécaniques qui font fonctionner notre monde industriel grâce à une maîtrise technique de l'usinage et de la fabrication de précision.",
    duration: "2-3 ans",
    careers: ["Usineur", "Technicien en fabrication", "Contrôleur qualité", "Responsable atelier mécanique"],
    icon: "Cog",
    image: "https://images.pexels.com/photos/1797414/pexels-photo-1797414.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "economie-familiale-sociale",
    name: "Economie Familiale et Sociale",
    slug: "economie-familiale-sociale",
    category: "Sciences Humaines & Sociales",
    description: "Gestion du foyer et développement des compétences de vie.",
    explanation: "Développez des compétences pratiques et théoriques pour améliorer la qualité de vie des familles et des communautés à travers une approche holistique du bien-être.",
    duration: "2-3 ans",
    careers: ["Conseiller en économie sociale", "Animateur familial", "Gestionnaire de services sociaux", "Formateur en éducation familiale"],
    icon: "Home",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "hotellerie-restauration",
    name: "Hôtellerie-Restauration",
    slug: "hotellerie-restauration",
    category: "Gestion, Finance et Commerce",
    description: "Management hôtelier et arts culinaires pour le secteur touristique.",
    explanation: "Maîtrisez l'art de l'accueil et de la gastronomie pour contribuer au développement du secteur touristique, véritable moteur économique en pleine expansion.",
    duration: "2-3 ans",
    careers: ["Manager hôtelier", "Chef de cuisine", "Responsable restauration", "Consultant touristique"],
    icon: "UtensilsCrossed",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "froid-climatisation",
    name: "Froid et Climatisation",
    slug: "froid-climatisation",
    category: "Génie Civil, Mécanique et Énergétique",
    description: "Installation et maintenance des systèmes de refroidissement.",
    explanation: "Maîtrisez les technologies du froid et de la climatisation, compétences essentielles dans un contexte climatique changeant et pour le confort moderne.",
    duration: "2-3 ans",
    careers: ["Frigoriste", "Technicien climatisation", "Installateur thermique", "Responsable maintenance frigorifique"],
    icon: "Snowflake",
    image: "https://images.pexels.com/photos/1797414/pexels-photo-1797414.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "energies-renouvelables",
    name: "Energies Renouvelables",
    slug: "energies-renouvelables",
    category: "Environnement et Développement Durable",
    description: "Technologies solaires, éoliennes et autres énergies propres.",
    explanation: "Participez à la révolution énergétique en maîtrisant les technologies d'énergies renouvelables, clés de l'avenir énergétique durable de notre planète.",
    duration: "2-4 ans",
    careers: ["Technicien en énergie solaire", "Installateur éolien", "Conseiller en énergies vertes", "Chef de projet énergétique"],
    icon: "Sun",
    image: "https://images.pexels.com/photos/441900/pexels-photo-441900.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "production-animale",
    name: "Production Animale",
    slug: "production-animale",
    category: "Agriculture et Productions Végétales/Animales",
    description: "Élevage moderne et gestion des productions animales.",
    explanation: "Contribuez à la sécurité alimentaire en développant des systèmes d'élevage durables et productifs, respectueux du bien-être animal.",
    duration: "3 ans",
    careers: ["Zootechnicien", "Éleveur professionnel", "Conseiller en élevage", "Responsable d'exploitation animale"],
    icon: "PawPrint",
    image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "production-vegetale",
    name: "Production Végétale",
    slug: "production-vegetale",
    category: "Agriculture et Productions Végétales/Animales",
    description: "Techniques agricoles modernes et production végétale optimisée.",
    explanation: "Nourrissez le monde en maîtrisant les techniques agricoles modernes pour une production végétale durable et respectueuse de l'environnement.",
    duration: "3 ans",
    careers: ["Producteur agricole", "Conseiller agricole", "Technicien semencier", "Responsable d'exploitation végétale"],
    icon: "Wheat",
    image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "metiers-modes-vetements",
    name: "Métiers des Modes et Vêtements",
    slug: "metiers-modes-vetements",
    category: "Arts et Culture",
    description: "Création, confection et commercialisation dans l'industrie textile.",
    explanation: "Exprimez votre créativité dans l'univers de la mode en maîtrisant les techniques de conception, confection et commercialisation vestimentaire.",
    duration: "2-3 ans",
    careers: ["Styliste", "Couturier", "Responsable collection", "Entrepreneur mode"],
    icon: "Shirt",
    image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // FORMATIONS AGRICOLES SPÉCIALISÉES
  {
    id: "aquaculture",
    name: "Aquaculture",
    slug: "aquaculture",
    category: "Agriculture et Productions Végétales/Animales",
    description: "Élevage de poissons et fruits de mer en milieux contrôlés.",
    explanation: "Développez l'aquaculture moderne pour répondre aux besoins croissants en protéines aquatiques tout en préservant les écosystèmes marins naturels.",
    duration: "3 ans",
    careers: ["Aquaculteur", "Technicien en pisciculture", "Gestionnaire de ferme aquacole", "Expert en aquaculture durable"],
    icon: "Fish",
    image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "horticulture-espaces-verts",
    name: "Horticulture et Aménagement des espaces Verts",
    slug: "horticulture-espaces-verts",
    category: "Environnement et Développement Durable",
    description: "Création et entretien d'espaces verts et jardins ornementaux.",
    explanation: "Embellissez notre environnement en créant et entretenant des espaces verts qui améliorent la qualité de vie urbaine et contribuent à la biodiversité.",
    duration: "3 ans",
    careers: ["Horticulteur", "Paysagiste", "Gestionnaire d'espaces verts", "Entrepreneur paysager"],
    icon: "TreePine",
    image: "https://images.pexels.com/photos/441900/pexels-photo-441900.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "gestion-production-vegetale-semenciere",
    name: "Gestion et Production Végétale et Semencière",
    slug: "gestion-production-vegetale-semenciere",
    category: "Agriculture et Productions Végétales/Animales",
    description: "Production et commercialisation de semences de qualité.",
    explanation: "Participez à la base de l'agriculture en maîtrisant la production de semences de qualité, élément fondamental de la sécurité alimentaire mondiale.",
    duration: "3 ans",
    careers: ["Producteur de semences", "Sélectionneur", "Commercial en semences", "Responsable qualité semencière"],
    icon: "Seedling",
    image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // FORMATIONS TECHNIQUES COMPLÉMENTAIRES
  {
    id: "sciences-techniques-conservation-transformation",
    name: "Sciences et Techniques de Conservation et Transformation des Produits Agricoles",
    slug: "sciences-techniques-conservation-transformation",
    category: "Agriculture et Productions Végétales/Animales",
    description: "Transformation et conservation des produits agricoles pour l'industrie agroalimentaire.",
    explanation: "Maîtrisez les techniques modernes de transformation et conservation des produits agricoles pour créer de la valeur ajoutée et réduire les pertes post-récolte.",
    duration: "3 ans",
    careers: ["Technologue alimentaire", "Responsable qualité agroalimentaire", "Entrepreneur agroalimentaire", "Expert en conservation"],
    icon: "Package",
    image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "technologie-alimentaire-qualite",
    name: "Technologie Alimentaire et Contrôle Qualité",
    slug: "technologie-alimentaire-qualite",
    category: "Agriculture et Productions Végétales/Animales",
    description: "Innovation et contrôle qualité dans l'industrie alimentaire.",
    explanation: "Développez des produits alimentaires innovants tout en garantissant leur sécurité et qualité, contribuant ainsi à la santé publique et à l'innovation agroalimentaire.",
    duration: "3 ans",
    careers: ["Technologue alimentaire", "Responsable R&D alimentaire", "Auditeur qualité", "Innovation manager"],
    icon: "FlaskConical",
    image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "mecanique-agricole-motorisation",
    name: "Mécanique Agricole et Motorisation",
    slug: "mecanique-agricole-motorisation",
    category: "Génie Civil, Mécanique et Énergétique",
    description: "Maintenance et réparation des équipements agricoles motorisés.",
    explanation: "Modernisez l'agriculture en maîtrisant la mécanique des équipements agricoles pour améliorer la productivité et réduire la pénibilité du travail agricole.",
    duration: "3 ans",
    careers: ["Mécanicien agricole", "Concessionnaire matériel agricole", "Technicien SAV", "Entrepreneur en services agricoles"],
    icon: "Tractor",
    image: "https://images.pexels.com/photos/1797414/pexels-photo-1797414.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "developpement-territorial",
    name: "Développement Territorial",
    slug: "developpement-territorial",
    category: "Sciences Humaines & Sociales",
    description: "Planification et animation du développement local et régional.",
    explanation: "Participez à l'amélioration des territoires en concevant et mettant en œuvre des stratégies de développement qui répondent aux besoins des populations locales.",
    duration: "3-5 ans",
    careers: ["Chargé de mission développement", "Animateur territorial", "Consultant en développement local", "Responsable de projet territorial"],
    icon: "MapPin",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "genie-biologie-sciences-alimentaires",
    name: "Génie de Biologie et Sciences Alimentaires",
    slug: "genie-biologie-sciences-alimentaires",
    category: "Santé & Médecine",
    description: "Application de la biologie aux technologies alimentaires et biotechnologies.",
    explanation: "Combinez biologie et technologie pour développer des solutions innovantes dans l'industrie alimentaire et les biotechnologies, secteurs d'avenir.",
    duration: "3-5 ans",
    careers: ["Ingénieur biotechnologue", "Chercheur en sciences alimentaires", "Responsable R&D", "Expert en bioprocessus"],
    icon: "Dna",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "hygienes-biosciences-alimentaires",
    name: "Hygiène et Biosciences Alimentaires",
    slug: "hygienes-biosciences-alimentaires",
    category: "Santé & Médecine",
    description: "Sécurité sanitaire et microbiologie des aliments.",
    explanation: "Protégez la santé publique en maîtrisant l'hygiène alimentaire et la microbiologie pour garantir la sécurité des aliments de la production à la consommation.",
    duration: "3 ans",
    careers: ["Inspecteur sanitaire", "Microbiologiste alimentaire", "Responsable HACCP", "Expert en sécurité alimentaire"],
    icon: "Shield",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "genie-rural",
    name: "Génie Rural",
    slug: "genie-rural",
    category: "Génie Civil, Mécanique et Énergétique",
    description: "Aménagement rural et infrastructures agricoles.",
    explanation: "Transformez les campagnes en concevant et réalisant les infrastructures rurales nécessaires au développement agricole et à l'amélioration des conditions de vie.",
    duration: "3-5 ans",
    careers: ["Ingénieur rural", "Responsable aménagement rural", "Expert en infrastructure", "Consultant en développement rural"],
    icon: "Mountain",
    image: "https://images.pexels.com/photos/1797414/pexels-photo-1797414.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "genie-hydraulique-assainissement",
    name: "Génie Hydraulique et Assainissement",
    slug: "genie-hydraulique-assainissement",
    category: "Génie Civil, Mécanique et Énergétique",
    description: "Gestion de l'eau et systèmes d'assainissement urbain et rural.",
    explanation: "Contribuez à l'accès universel à l'eau potable et à l'assainissement en maîtrisant les technologies hydrauliques modernes, enjeu crucial du développement durable.",
    duration: "3-5 ans",
    careers: ["Ingénieur hydraulique", "Expert en assainissement", "Responsable réseau eau", "Consultant en gestion de l'eau"],
    icon: "Droplets",
    image: "https://images.pexels.com/photos/1797414/pexels-photo-1797414.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "hydrologie-hydrogeogie-ecohydrologie",
    name: "Hydrologie, Hydrogéologie et Écohydrologie",
    slug: "hydrologie-hydrogeogie-ecohydrologie",
    category: "Environnement et Développement Durable",
    description: "Sciences de l'eau et gestion des ressources hydriques.",
    explanation: "Devenez expert de la ressource en eau, bien précieux de plus en plus rare, pour assurer sa gestion durable et équitable dans un contexte de changement climatique.",
    duration: "3-5 ans",
    careers: ["Hydrologue", "Hydrogéologue", "Expert en ressources en eau", "Consultant en gestion hydrologique"],
    icon: "Waves",
    image: "https://images.pexels.com/photos/441900/pexels-photo-441900.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "ingenierie-mathematique-informatique",
    name: "Ingénierie Mathématique et Informatique",
    slug: "ingenierie-mathematique-informatique",
    category: "Informatique, Télécoms et Intelligence Artificielle",
    description: "Modélisation mathématique et développement informatique avancé.",
    explanation: "Maîtrisez les mathématiques appliquées et l'informatique pour résoudre des problèmes complexes dans tous les secteurs d'activité grâce à la modélisation et aux algorithmes.",
    duration: "3-5 ans",
    careers: ["Ingénieur en modélisation", "Data scientist", "Développeur algorithmes", "Consultant en optimisation"],
    icon: "Binary",
    image: "https://images.pexels.com/photos/159804/technology-keyboard-computing-computer-159804.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "genie-logiciel",
    name: "Génie Logiciel",
    slug: "genie-logiciel",
    category: "Informatique, Télécoms et Intelligence Artificielle",
    description: "Conception et développement d'applications logicielles complexes.",
    explanation: "Créez les logiciels de demain en maîtrisant les méthodologies de développement moderne pour concevoir des applications robustes, scalables et user-friendly.",
    duration: "3-5 ans",
    careers: ["Architecte logiciel", "Chef de projet IT", "Ingénieur développement", "Product owner"],
    icon: "Code2",
    image: "https://images.pexels.com/photos/159804/technology-keyboard-computing-computer-159804.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "intelligence-artificielle",
    name: "Intelligence Artificielle",
    slug: "intelligence-artificielle",
    category: "Informatique, Télécoms et Intelligence Artificielle",
    description: "Développement de systèmes intelligents et machine learning.",
    explanation: "Participez à la révolution de l'IA en développant des systèmes intelligents qui transforment notre façon de travailler, apprendre et interagir avec la technologie.",
    duration: "3-5 ans",
    careers: ["Ingénieur IA", "Data scientist", "Chercheur en IA", "Consultant en transformation digitale"],
    icon: "Brain",
    image: "https://images.pexels.com/photos/159804/technology-keyboard-computing-computer-159804.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "systemes-embarques",
    name: "Systèmes Embarqués",
    slug: "systemes-embarques",
    category: "Informatique, Télécoms et Intelligence Artificielle",
    description: "Développement de systèmes informatiques intégrés dans les objets.",
    explanation: "Créez l'Internet des Objets en développant des systèmes embarqués qui rendent nos appareils du quotidien intelligents et connectés.",
    duration: "3-5 ans",
    careers: ["Ingénieur systèmes embarqués", "Développeur IoT", "Concepteur de produits connectés", "Expert en temps réel"],
    icon: "Microchip",
    image: "https://images.pexels.com/photos/159804/technology-keyboard-computing-computer-159804.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "securite-informatique",
    name: "Sécurité Informatique",
    slug: "securite-informatique",
    category: "Informatique, Télécoms et Intelligence Artificielle",
    description: "Protection des systèmes d'information et cybersécurité.",
    explanation: "Protégez le monde numérique en devenant expert en cybersécurité, compétence cruciale dans un monde de plus en plus connecté et exposé aux cybermenaces.",
    duration: "3-5 ans",
    careers: ["Expert en cybersécurité", "Consultant sécurité", "Analyste SOC", "Responsable sécurité IT"],
    icon: "Shield",
    image: "https://images.pexels.com/photos/159804/technology-keyboard-computing-computer-159804.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "reseaux-telecommunications",
    name: "Réseaux et Télécommunications",
    slug: "reseaux-telecommunications",
    category: "Informatique, Télécoms et Intelligence Artificielle",
    description: "Architecture et gestion des réseaux de communication.",
    explanation: "Connectez le monde en maîtrisant les technologies de réseaux et télécommunications qui permettent à l'information de circuler instantanément à travers la planète.",
    duration: "3-5 ans",
    careers: ["Ingénieur réseaux", "Administrateur systèmes", "Architecte réseau", "Expert en télécoms"],
    icon: "Network",
    image: "https://images.pexels.com/photos/159804/technology-keyboard-computing-computer-159804.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "programmation-web-mobile",
    name: "Programmation Web et Mobile",
    slug: "programmation-web-mobile",
    category: "Informatique, Télécoms et Intelligence Artificielle",
    description: "Développement d'applications web et mobiles modernes.",
    explanation: "Créez les applications qui façonnent notre quotidien numérique en maîtrisant les technologies web et mobile les plus avancées.",
    duration: "3 ans",
    careers: ["Développeur web", "Développeur mobile", "Full-stack developer", "Expert UX/UI"],
    icon: "Smartphone",
    image: "https://images.pexels.com/photos/159804/technology-keyboard-computing-computer-159804.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "climatologie-meteorologie",
    name: "Climatologie et Météorologie",
    slug: "climatologie-meteorologie",
    category: "Environnement et Développement Durable",
    description: "Étude du climat et prévision météorologique.",
    explanation: "Comprenez et prévisez les phénomènes climatiques pour aider les sociétés à s'adapter au changement climatique et optimiser leurs activités.",
    duration: "3-5 ans",
    careers: ["Climatologue", "Météorologue", "Expert en adaptation climatique", "Conseiller en risques climatiques"],
    icon: "CloudRain",
    image: "https://images.pexels.com/photos/441900/pexels-photo-441900.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "geomatique",
    name: "Géomatique",
    slug: "geomatique",
    category: "Environnement et Développement Durable",
    description: "Technologies géospatiales et systèmes d'information géographique.",
    explanation: "Maîtrisez les technologies géospatiales pour analyser et représenter notre territoire, outil indispensable pour l'aménagement, l'environnement et la planification.",
    duration: "3-5 ans",
    careers: ["Géomaticien", "Analyste SIG", "Cartographe numérique", "Expert en télédétection"],
    icon: "MapPin",
    image: "https://images.pexels.com/photos/441900/pexels-photo-441900.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "changement-climatique-cadre-vie",
    name: "Changement Climatique et Cadre de Vie",
    slug: "changement-climatique-cadre-vie",
    category: "Environnement et Développement Durable",
    description: "Adaptation au changement climatique et amélioration du cadre de vie.",
    explanation: "Préparez les territoires aux défis climatiques en développant des stratégies d'adaptation qui protègent les populations tout en améliorant leur qualité de vie.",
    duration: "3-5 ans",
    careers: ["Expert en adaptation climatique", "Consultant environnemental", "Planificateur urbain", "Responsable développement durable"],
    icon: "Thermometer",
    image: "https://images.pexels.com/photos/441900/pexels-photo-441900.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "planification-amenagement-espaces-urbains",
    name: "Planification et Aménagement des Espaces Urbains",
    slug: "planification-amenagement-espaces-urbains",
    category: "Génie Civil, Mécanique et Énergétique",
    description: "Conception et aménagement durable des villes.",
    explanation: "Construisez les villes de demain en maîtrisant l'urbanisme durable pour créer des espaces de vie harmonieux, fonctionnels et respectueux de l'environnement.",
    duration: "3-5 ans",
    careers: ["Urbaniste", "Planificateur urbain", "Consultant en aménagement", "Expert en ville durable"],
    icon: "Building2",
    image: "https://images.pexels.com/photos/1797414/pexels-photo-1797414.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "gestion-environnement",
    name: "Gestion de l'Environnement",
    slug: "gestion-environnement",
    category: "Environnement et Développement Durable",
    description: "Management environnemental et développement durable.",
    explanation: "Devenez acteur de la transition écologique en maîtrisant les outils de gestion environnementale pour concilier développement économique et protection de la planète.",
    duration: "3-5 ans",
    careers: ["Gestionnaire environnemental", "Consultant en développement durable", "Responsable RSE", "Expert en évaluation environnementale"],
    icon: "Recycle",
    image: "https://images.pexels.com/photos/441900/pexels-photo-441900.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "gestion-ressources-humaines",
    name: "Gestion des Ressources Humaines",
    slug: "gestion-ressources-humaines",
    category: "Gestion, Finance et Commerce",
    description: "Management des talents et développement organisationnel.",
    explanation: "Valorisez le capital humain en maîtrisant les techniques modernes de gestion des ressources humaines pour créer des environnements de travail épanouissants et performants.",
    duration: "3-5 ans",
    careers: ["Responsable RH", "Consultant en ressources humaines", "Chargé de recrutement", "Responsable formation"],
    icon: "Users",
    image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "gestion-projets-programmes",
    name: "Gestion de Projets et Programmes",
    slug: "gestion-projets-programmes",
    category: "Gestion, Finance et Commerce",
    description: "Pilotage et coordination de projets complexes.",
    explanation: "Menez à bien des projets ambitieux en maîtrisant les méthodologies de gestion de projet pour transformer les idées en réalisations concrètes et durables.",
    duration: "3-5 ans",
    careers: ["Chef de projet", "Directeur de programme", "Consultant en gestion de projet", "Project manager"],
    icon: "Target",
    image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "finance-comptabilite-banque",
    name: "Finance, Comptabilité et Banque",
    slug: "finance-comptabilite-banque",
    category: "Gestion, Finance et Commerce",
    description: "Expertise financière et services bancaires.",
    explanation: "Maîtrisez l'univers financier pour accompagner les entreprises et particuliers dans leurs décisions économiques et leur développement financier.",
    duration: "3-5 ans",
    careers: ["Analyste financier", "Conseiller bancaire", "Contrôleur de gestion", "Expert-comptable"],
    icon: "CreditCard",
    image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "finance-assurance",
    name: "Finance et Assurance",
    slug: "finance-assurance",
    category: "Gestion, Finance et Commerce",
    description: "Gestion des risques et produits d'assurance.",
    explanation: "Protégez l'avenir en maîtrisant les mécanismes de l'assurance et de la gestion des risques pour sécuriser les projets de vie et d'entreprise.",
    duration: "3-5 ans",
    careers: ["Courtier en assurance", "Gestionnaire de risques", "Actuaire", "Conseiller en assurance"],
    icon: "Shield",
    image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "marketing-communication",
    name: "Marketing et Communication",
    slug: "marketing-communication",
    category: "Gestion, Finance et Commerce",
    description: "Stratégies marketing et communication d'entreprise.",
    explanation: "Créez de la valeur en maîtrisant les techniques marketing et communication pour connecter les marques à leurs publics dans un monde digitalisé.",
    duration: "3-5 ans",
    careers: ["Responsable marketing", "Chargé de communication", "Digital marketing manager", "Brand manager"],
    icon: "Megaphone",
    image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "commerce-vente",
    name: "Commerce et Vente",
    slug: "commerce-vente",
    category: "Gestion, Finance et Commerce",
    description: "Techniques commerciales et gestion des ventes.",
    explanation: "Excellez dans l'art de la vente en maîtrisant les techniques commerciales modernes pour développer les entreprises et satisfaire les besoins clients.",
    duration: "2-3 ans",
    careers: ["Commercial", "Responsable des ventes", "Business developer", "Key account manager"],
    icon: "ShoppingCart",
    image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "transport-logistique",
    name: "Transport et Logistique",
    slug: "transport-logistique",
    category: "Gestion, Finance et Commerce",
    description: "Gestion des flux de marchandises et supply chain.",
    explanation: "Optimisez les flux mondiaux en maîtrisant la logistique moderne pour assurer l'acheminement efficace des biens dans une économie globalisée.",
    duration: "3 ans",
    careers: ["Responsable logistique", "Supply chain manager", "Transitaire", "Gestionnaire de flotte"],
    icon: "Truck",
    image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "statistique-planification",
    name: "Statistique et Planification",
    slug: "statistique-planification",
    category: "Mathématiques, Physique et Chimie",
    description: "Analyse statistique et planification stratégique.",
    explanation: "Transformez les données en décisions éclairées en maîtrisant les statistiques et la planification pour guider les organisations vers le succès.",
    duration: "3-5 ans",
    careers: ["Statisticien", "Data analyst", "Planificateur stratégique", "Consultant en aide à la décision"],
    icon: "BarChart3",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "entrepreneuriat-developpement-durable",
    name: "Entrepreneuriat et Développement Durable",
    slug: "entrepreneuriat-developpement-durable",
    category: "Gestion, Finance et Commerce",
    description: "Création d'entreprises responsables et durables.",
    explanation: "Créez l'économie de demain en développant des entreprises qui concilient performance économique, impact social positif et respect de l'environnement.",
    duration: "3 ans",
    careers: ["Entrepreneur social", "Consultant en développement durable", "Créateur d'entreprise", "Impact investor"],
    icon: "Lightbulb",
    image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "patrimoine-culturel-tourisme",
    name: "Patrimoine Culturel et Tourisme",
    slug: "patrimoine-culturel-tourisme",
    category: "Arts et Culture",
    description: "Valorisation du patrimoine et développement touristique.",
    explanation: "Préservez et valorisez les richesses culturelles en développant un tourisme durable qui fait découvrir le patrimoine tout en bénéficiant aux communautés locales.",
    duration: "3 ans",
    careers: ["Guide touristique", "Responsable développement touristique", "Conservateur du patrimoine", "Entrepreneur touristique"],
    icon: "Camera",
    image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "arts-plastiques",
    name: "Arts Plastiques",
    slug: "arts-plastiques",
    category: "Arts et Culture",
    description: "Expression artistique et techniques plastiques contemporaines.",
    explanation: "Exprimez votre créativité et développez votre sensibilité artistique pour contribuer à l'enrichissement culturel de la société à travers les arts visuels.",
    duration: "3-5 ans",
    careers: ["Artiste plasticien", "Enseignant d'arts plastiques", "Commissaire d'exposition", "Médiateur culturel"],
    icon: "Palette",
    image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "arts-dramatiques",
    name: "Arts Dramatiques",
    slug: "arts-dramatiques",
    category: "Arts et Culture",
    description: "Formation théâtrale et expression scénique.",
    explanation: "Développez votre art dramatique pour transmettre des émotions et des messages à travers le théâtre, vecteur puissant de culture et de transformation sociale.",
    duration: "3 ans",
    careers: ["Comédien", "Metteur en scène", "Animateur théâtral", "Enseignant d'art dramatique"],
    icon: "Drama",
    image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "musicologie",
    name: "Musicologie",
    slug: "musicologie",
    category: "Arts et Culture",
    description: "Étude scientifique de la musique et de ses traditions.",
    explanation: "Explorez l'univers musical sous tous ses aspects pour comprendre, préserver et transmettre les richesses musicales de votre culture et du monde.",
    duration: "3-5 ans",
    careers: ["Musicologue", "Ethnomusicologue", "Critique musical", "Conservateur musical"],
    icon: "Music",
    image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "cinema-audiovisuel",
    name: "Cinéma et Audiovisuel",
    slug: "cinema-audiovisuel",
    category: "Arts et Culture",
    description: "Production et réalisation cinématographique et audiovisuelle.",
    explanation: "Racontez des histoires qui marquent en maîtrisant les techniques du cinéma et de l'audiovisuel, arts majeurs de notre époque moderne.",
    duration: "3 ans",
    careers: ["Réalisateur", "Monteur", "Chef opérateur", "Producteur audiovisuel"],
    icon: "Video",
    image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "administration-culturelle",
    name: "Administration Culturelle",
    slug: "administration-culturelle",
    category: "Arts et Culture",
    description: "Gestion d'institutions et projets culturels.",
    explanation: "Donnez vie aux projets culturels en maîtrisant leur gestion administrative et financière pour rendre l'art et la culture accessibles à tous.",
    duration: "3 ans",
    careers: ["Administrateur culturel", "Gestionnaire de projets culturels", "Responsable mécénat", "Directeur d'équipement culturel"],
    icon: "Building",
    image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "communication-multimedia",
    name: "Communication et Multimédia",
    slug: "communication-multimedia",
    category: "Lettres, Langues et Communication",
    description: "Communication digitale et création multimédia.",
    explanation: "Maîtrisez les outils de communication moderne pour créer des contenus multimédia percutants qui captent l'attention dans l'univers digital.",
    duration: "3 ans",
    careers: ["Community manager", "Créateur de contenu", "Webdesigner", "Responsable communication digitale"],
    icon: "Monitor",
    image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "journalisme",
    name: "Journalisme",
    slug: "journalisme",
    category: "Lettres, Langues et Communication",
    description: "Information, investigation et communication médiatique.",
    explanation: "Informez et éclairez le public en maîtrisant les techniques journalistiques pour contribuer à une société démocratique bien informée.",
    duration: "3 ans",
    careers: ["Journaliste", "Reporter", "Rédacteur web", "Présentateur"],
    icon: "Newspaper",
    image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "mathematiques-pure",
    name: "Mathématiques Pure",
    slug: "mathematiques-pure",
    category: "Mathématiques, Physique et Chimie",
    description: "Mathématiques fondamentales et recherche théorique.",
    explanation: "Explorez l'univers fascinant des mathématiques pures pour contribuer à l'avancement des connaissances fondamentales qui sous-tendent toutes les sciences.",
    duration: "3-5 ans",
    careers: ["Mathématicien", "Chercheur en mathématiques", "Enseignant-chercheur", "Consultant en modélisation"],
    icon: "Calculator",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "physique-fondamentale",
    name: "Physique Fondamentale",
    slug: "physique-fondamentale",
    category: "Mathématiques, Physique et Chimie",
    description: "Physique théorique et expérimentale avancée.",
    explanation: "Percez les mystères de l'univers en étudiant la physique fondamentale pour comprendre les lois qui régissent notre cosmos.",
    duration: "3-5 ans",
    careers: ["Physicien", "Chercheur en physique", "Enseignant de physique", "Expert en instrumentation"],
    icon: "Atom",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "chimie-appliquee",
    name: "Chimie Appliquée",
    slug: "chimie-appliquee",
    category: "Mathématiques, Physique et Chimie",
    description: "Chimie industrielle et applications technologiques.",
    explanation: "Transformez la matière pour créer des solutions innovantes dans l'industrie, la pharmacie, l'environnement et bien d'autres domaines.",
    duration: "3-5 ans",
    careers: ["Chimiste", "Ingénieur chimiste", "Responsable R&D", "Expert en qualité"],
    icon: "FlaskConical",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "droit-prive",
    name: "Droit Privé",
    slug: "droit-prive",
    category: "Droit et Sciences Politiques",
    description: "Droit des contrats, droit des affaires et droit civil.",
    explanation: "Maîtrisez les règles qui régissent les relations entre particuliers et entreprises pour défendre leurs droits et sécuriser leurs transactions.",
    duration: "3-5 ans",
    careers: ["Avocat", "Juriste d'entreprise", "Notaire", "Conseiller juridique"],
    icon: "Scale",
    image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "droit-public",
    name: "Droit Public",
    slug: "droit-public",
    category: "Droit et Sciences Politiques",
    description: "Droit administratif, constitutionnel et relations avec l'État.",
    explanation: "Comprenez les mécanismes du pouvoir public pour contribuer au bon fonctionnement des institutions et à la protection des droits citoyens.",
    duration: "3-5 ans",
    careers: ["Magistrat administratif", "Conseiller juridique public", "Attaché d'administration", "Expert en droit public"],
    icon: "Gavel",
    image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "science-politique",
    name: "Science Politique",
    slug: "science-politique",
    category: "Droit et Sciences Politiques",
    description: "Analyse des systèmes politiques et des relations de pouvoir.",
    explanation: "Décryptez les mécanismes du pouvoir et de la gouvernance pour contribuer à une meilleure compréhension et amélioration de nos systèmes démocratiques.",
    duration: "3-5 ans",
    careers: ["Politologue", "Conseiller politique", "Analyste politique", "Chargé de mission gouvernementale"],
    icon: "Users",
    image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "relations-internationales",
    name: "Relations Internationales",
    slug: "relations-internationales",
    category: "Droit et Sciences Politiques",
    description: "Diplomatie, coopération internationale et géopolitique.",
    explanation: "Contribuez à la paix et à la coopération mondiale en maîtrisant les relations internationales dans un monde de plus en plus interconnecté.",
    duration: "3-5 ans",
    careers: ["Diplomate", "Attaché d'ambassade", "Expert en coopération", "Analyste géopolitique"],
    icon: "Globe",
    image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "administration-publique",
    name: "Administration Publique",
    slug: "administration-publique",
    category: "Droit et Sciences Politiques",
    description: "Gestion des services publics et administration territoriale.",
    explanation: "Servez l'intérêt général en maîtrisant l'administration publique pour améliorer l'efficacité des services rendus aux citoyens.",
    duration: "3-5 ans",
    careers: ["Administrateur territorial", "Gestionnaire public", "Chef de service public", "Consultant en administration"],
    icon: "Building2",
    image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "justice-criminologie",
    name: "Justice et Criminologie",
    slug: "justice-criminologie",
    category: "Droit et Sciences Politiques",
    description: "Système judiciaire et étude des phénomènes criminels.",
    explanation: "Contribuez à une justice équitable en comprenant les mécanismes du crime et en participant à l'amélioration du système judiciaire.",
    duration: "3-5 ans",
    careers: ["Criminologue", "Conseiller en prévention", "Éducateur spécialisé", "Médiateur pénal"],
    icon: "Scale",
    image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "entrepreneuriat-social",
    name: "Entrepreneuriat Social",
    slug: "entrepreneuriat-social",
    category: "Sciences Humaines & Sociales",
    description: "Formation pour créer des entreprises à impact social positif.",
    explanation: "Combine business et solidarité en développant des projets économiquement viables qui répondent aux besoins sociaux et environnementaux de votre communauté.",
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
    explanation: "Devenez expert des questions démographiques pour anticiper les besoins en infrastructures, services et politiques publiques des territoires en mutation.",
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
    explanation: "Maîtrisez la langue allemande et plongez dans la richesse culturelle de l'espace germanophone, un atout précieux dans un contexte de coopération internationale accrue.",
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
    explanation: "Devenez un expert de la langue internationale par excellence et ouvrez-vous les portes d'une carrière sans frontières dans l'enseignement, la traduction ou les relations internationales.",
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
    explanation: "Explorez la diversité culturelle du monde hispanique tout en acquérant des compétences linguistiques très recherchées dans les domaines du tourisme, du commerce et de la diplomatie.",
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
    explanation: "Plongez dans l'univers des lettres pour développer votre esprit critique, votre créativité et votre maîtrise de la langue française, atouts précieux dans de nombreux métiers.",
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
    explanation: "Décryptez les mécanismes du langage et de la communication pour mieux comprendre les interactions humaines et développer des compétences applicables dans de nombreux secteurs professionnels.",
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
    explanation: "Maîtrisez le mandarin et découvrez la civilisation chinoise pour devenir un acteur privilégié des échanges économiques et culturels entre l'Afrique et la Chine.",
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
    explanation: "Spécialisez-vous dans la transmission de la langue chinoise en développant des méthodes pédagogiques adaptées aux apprenants africains.",
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
    explanation: "Exprimez votre créativité sur scène et devenez un acteur complet maîtrisant les techniques du jeu théâtral, de la mise en scène et de l'animation culturelle.",
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
    explanation: "Développez votre expression artistique tout en acquérant les techniques et connaissances nécessaires pour faire carrière dans le monde de l'art et de la création visuelle.",
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
    explanation: "Alliez pratique instrumentale et connaissance approfondie des théories musicales pour devenir un musicien complet ou un expert en sciences de la musique.",
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
    explanation: "Devenez un professionnel de la culture capable de concevoir, gérer et promouvoir des projets artistiques et culturels au service du développement local.",
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
    explanation: "Plongez dans l'univers du 7ème art et des médias audiovisuels pour devenir un professionnel créatif et technique de cette industrie en plein essor en Afrique.",
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
    explanation: "Acquérez les compétences techniques pointues nécessaires pour travailler dans les coulisses de la production audiovisuelle et des nouveaux médias numériques.",
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
    explanation: "Devenez un acteur de la préservation et de la mise en valeur du riche patrimoine culturel africain, un enjeu crucial pour le développement touristique et identitaire du continent.",
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
    explanation: "Devenez la voix qui informe et éduque la société. En tant que journaliste, vous jouerez un rôle essentiel dans la démocratie en enquêtant, analysant et transmettant l'information de manière objective et responsable.",
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
    explanation: "Analysez les mécanismes de la communication sous tous ses aspects (médias, organisations, relations interpersonnelles) pour devenir un expert en stratégies de communication.",
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
    explanation: "Devenez un expert du système juridique et contribuez à la construction d'un État de droit en Afrique, que ce soit comme avocat, magistrat ou conseiller juridique.",
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
    explanation: "Analysez les enjeux de pouvoir et les dynamiques politiques pour comprendre et influencer les décisions qui façonnent l'avenir des sociétés africaines et du monde.",
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
    explanation: "Préparez-vous à gérer les services publics et à participer à la modernisation de l'administration pour un meilleur service aux citoyens.",
    duration: "3-5 ans",
    careers: ["Administrateur civil", "Directeur d'administration", "Chef de service public", "Consultant en gouvernance"],
    icon: "Building2",
    image: "https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: "administration-des-finances",
    name: "Administration des Finances",
    slug: "administration-des-finances",
    category: "Droit & Sciences Politiques",
    description: "Formation spécialisée en gestion financière publique et fiscalité.",
    explanation: "Spécialisez-vous dans la gestion des finances publiques et la fiscalité, des compétences cruciales pour le bon fonctionnement de l'État et des collectivités.",
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
    explanation: "Devenez un professionnel polyvalent du soutien administratif, indispensable au bon fonctionnement des organisations publiques et privées.",
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
    explanation: "Maîtrisez l'organisation et la diffusion de l'information dans un monde où la gestion des connaissances est un enjeu stratégique pour toutes les organisations.",
    duration: "3-5 ans",
    careers: ["Documentaliste", "Archiviste", "Gestionnaire de base de données", "Responsable de centre documentaire"],
    icon: "Database",
    image: "https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

// Fonction pour récupérer un programme par son slug
export const getProgramBySlug = (slug: string): ProgramData | undefined => {
  return programsData.find(program => program.slug === slug);
};

// Fonction pour récupérer des programmes par catégorie
export const getProgramsByCategory = (category: string): ProgramData[] => {
  return programsData.filter(program => program.category === category);
};

// Fonction pour rechercher des programmes
export const searchPrograms = (query: string): ProgramData[] => {
  const searchTerm = query.toLowerCase();
  return programsData.filter(program => 
    program.name.toLowerCase().includes(searchTerm) ||
    (program.description && program.description.toLowerCase().includes(searchTerm)) ||
    (program.explanation && program.explanation.toLowerCase().includes(searchTerm)) ||
    program.careers.some(career => career.toLowerCase().includes(searchTerm))
  );
};

// Fonction pour obtenir toutes les catégories
export const getAllCategories = (): string[] => {
  const categories = Array.from(new Set(programsData.map(program => program.category)));
  return categories.sort();
};
