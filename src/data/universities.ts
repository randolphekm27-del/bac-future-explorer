export interface School {
  id: string;
  name: string;
  admissionRequirements: string[];
  location: string;
  country: string;
  programs: string[];
  contact: {
    email: string;
    phone: string;
    website: string;
  };
  description: string;
}

export interface University {
  id: string;
  name: string;
  location: string;
  type: "Public" | "Privé";
  image: string;
  description: string;
  slug: string;
  schools: School[];
}

export const universities: University[] = [
  {
    id: "1",
    name: "Université d'Abomey-Calavi (UAC)",
    location: "Abomey-Calavi",
    type: "Public",
    image: "https://via.placeholder.com/200",
    description: "L'UAC est la plus grande université du Bénin, offrant une large gamme de programmes dans diverses disciplines.",
    slug: "universite-abomey-calavi",
    schools: [
      {
        id: "uac-1",
        name: "École Nationale d'Économie Appliquée et de Management (ENEAM)",
        admissionRequirements: ["Baccalauréat série C, D ou E", "Concours d'entrée", "Dossier scolaire"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Gestion", "Économie", "Finance", "Marketing"],
        contact: {
          email: "eneam@uac.bj",
          phone: "+229 21 36 00 74",
          website: "www.eneam.uac.bj"
        },
        description: "Formation d'excellence en management et économie appliquée."
      },
      {
        id: "uac-2",
        name: "Faculté des Sciences et Techniques (FAST)",
        admissionRequirements: ["Baccalauréat série C ou D", "Concours d'entrée", "Test de mathématiques"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Informatique", "Mathématiques", "Physique", "Chimie"],
        contact: {
          email: "fast@uac.bj",
          phone: "+229 21 36 01 23",
          website: "www.fast.uac.bj"
        },
        description: "Centre d'excellence pour les sciences exactes et appliquées."
      },
      {
        id: "uac-3",
        name: "Faculté des Sciences de la Santé (FSS)",
        admissionRequirements: ["Baccalauréat série C ou D", "Concours très sélectif", "Aptitudes médicales"],
        location: "Cotonou",
        country: "Bénin",
        programs: ["Médecine", "Pharmacie", "Odontologie", "Sciences infirmières"],
        contact: {
          email: "fss@uac.bj",
          phone: "+229 21 30 01 46",
          website: "www.fss.uac.bj"
        },
        description: "Formation médicale de référence en Afrique de l'Ouest."
      },
      {
        id: "uac-4",
        name: "Faculté de Droit et de Science Politique (FADESP)",
        admissionRequirements: ["Baccalauréat toutes séries", "Dossier d'inscription", "Entretien d'orientation"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Droit", "Science Politique", "Relations Internationales", "Administration"],
        contact: {
          email: "fadesp@uac.bj",
          phone: "+229 21 36 02 17",
          website: "www.fadesp.uac.bj"
        },
        description: "Excellence en formation juridique et sciences politiques."
      },
      {
        id: "uac-5",
        name: "École Polytechnique d'Abomey-Calavi (EPAC)",
        admissionRequirements: ["Baccalauréat série C ou D", "Concours d'entrée sélectif", "Niveau excellent en mathématiques"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Génie Civil", "Génie Électrique", "Génie Mécanique", "Architecture"],
        contact: {
          email: "epac@uac.bj",
          phone: "+229 21 36 03 45",
          website: "www.epac.uac.bj"
        },
        description: "Formation d'ingénieurs de haut niveau."
      },
      {
        id: "uac-6",
        name: "Faculté des Lettres, Arts et Sciences Humaines (FLASH)",
        admissionRequirements: ["Baccalauréat série A, B ou toute autre série", "Dossier d'inscription", "Test de langue"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Communication", "Sociologie", "Philosophie", "Langues"],
        contact: {
          email: "flash@uac.bj",
          phone: "+229 21 36 04 78",
          website: "www.flash.uac.bj"
        },
        description: "Centre de formation en sciences humaines et sociales."
      }
    ]
  },
  {
    id: "2",
    name: "Université de Parakou (UP)",
    location: "Parakou",
    type: "Public",
    image: "https://via.placeholder.com/200",
    description: "L'UP est une université publique située dans le nord du Bénin, spécialisée dans l'agriculture et les sciences de la santé.",
    slug: "universite-parakou",
    schools: [
      {
        id: "up-1",
        name: "Faculté d'Agronomie",
        admissionRequirements: ["Baccalauréat série C ou D", "Concours d'entrée", "Connaissance en sciences naturelles"],
        location: "Parakou",
        country: "Bénin",
        programs: ["Agronomie", "Zootechnie", "Sciences du Sol", "Économie Rurale"],
        contact: {
          email: "agro@up.bj",
          phone: "+229 23 61 01 23",
          website: "www.agro.up.bj"
        },
        description: "Excellence en formation agricole et développement rural."
      },
      {
        id: "up-2",
        name: "Faculté de Médecine",
        admissionRequirements: ["Baccalauréat série C ou D", "Concours très sélectif", "Excellence scolaire"],
        location: "Parakou",
        country: "Bénin",
        programs: ["Médecine", "Médecine Vétérinaire", "Sciences Biomédicales", "Santé Publique"],
        contact: {
          email: "medecine@up.bj",
          phone: "+229 23 61 02 45",
          website: "www.medecine.up.bj"
        },
        description: "Formation médicale adaptée aux réalités du Nord Bénin."
      },
      {
        id: "up-3",
        name: "École Normale Supérieure de Parakou",
        admissionRequirements: ["Baccalauréat toutes séries", "Concours de la fonction publique", "Vocation pédagogique"],
        location: "Parakou",
        country: "Bénin",
        programs: ["Formation des Enseignants", "Pédagogie", "Sciences de l'Éducation", "Psychologie"],
        contact: {
          email: "ens@up.bj",
          phone: "+229 23 61 03 67",
          website: "www.ens.up.bj"
        },
        description: "Formation des enseignants du secondaire."
      },
      {
        id: "up-4",
        name: "Institut de Recherche pour le Développement",
        admissionRequirements: ["Master ou équivalent", "Projet de recherche", "Partenariat institutionnel"],
        location: "Parakou",
        country: "Bénin",
        programs: ["Recherche Agricole", "Développement Durable", "Innovation Technologique", "Sciences Sociales"],
        contact: {
          email: "ird@up.bj",
          phone: "+229 23 61 04 89",
          website: "www.ird.up.bj"
        },
        description: "Recherche appliquée pour le développement."
      },
      {
        id: "up-5",
        name: "Faculté des Sciences Économiques et Sociales",
        admissionRequirements: ["Baccalauréat série A, B, C ou D", "Dossier d'inscription", "Test d'aptitude"],
        location: "Parakou",
        country: "Bénin",
        programs: ["Économie", "Sociologie", "Gestion", "Développement Local"],
        contact: {
          email: "fses@up.bj",
          phone: "+229 23 61 05 12",
          website: "www.fses.up.bj"
        },
        description: "Formation en sciences économiques et sociales."
      },
      {
        id: "up-6",
        name: "Institut Universitaire de Technologie",
        admissionRequirements: ["Baccalauréat série C ou D", "Concours d'entrée", "Orientation technique"],
        location: "Parakou",
        country: "Bénin",
        programs: ["Génie Rural", "Maintenance Industrielle", "Informatique Appliquée", "Énergies Renouvelables"],
        contact: {
          email: "iut@up.bj",
          phone: "+229 23 61 06 34",
          website: "www.iut.up.bj"
        },
        description: "Formation technique et professionnelle."
      }
    ]
  },
  {
    id: "3",
    name: "Université Nationale des Sciences, Technologies, Ingénierie et Mathématiques (UNSTIM)",
    location: "Abomey",
    type: "Public",
    image: "https://via.placeholder.com/200",
    description: "L'UNSTIM est spécialisée dans les sciences, technologies, ingénierie et mathématiques.",
    slug: "universite-unstim",
    schools: [
      {
        id: "unstim-1",
        name: "École d'Ingénierie",
        admissionRequirements: ["Baccalauréat série C ou D", "Concours très sélectif", "Excellence en sciences"],
        location: "Abomey",
        country: "Bénin",
        programs: ["Génie Civil", "Génie Électrique", "Génie Industriel", "Génie Informatique"],
        contact: {
          email: "ingenierie@unstim.bj",
          phone: "+229 22 50 01 23",
          website: "www.ingenierie.unstim.bj"
        },
        description: "Formation d'ingénieurs de classe mondiale."
      },
      {
        id: "unstim-2",
        name: "Institut de Mathématiques Appliquées",
        admissionRequirements: ["Baccalauréat série C", "Test de mathématiques avancé", "Passion pour les mathématiques"],
        location: "Abomey",
        country: "Bénin",
        programs: ["Mathématiques", "Statistiques", "Recherche Opérationnelle", "Actuariat"],
        contact: {
          email: "maths@unstim.bj",
          phone: "+229 22 50 02 45",
          website: "www.maths.unstim.bj"
        },
        description: "Excellence en mathématiques appliquées."
      },
      {
        id: "unstim-3",
        name: "Faculté des Sciences Exactes",
        admissionRequirements: ["Baccalauréat série C ou D", "Concours d'entrée", "Solides bases scientifiques"],
        location: "Abomey",
        country: "Bénin",
        programs: ["Physique", "Chimie", "Biologie", "Sciences de la Terre"],
        contact: {
          email: "sciences@unstim.bj",
          phone: "+229 22 50 03 67",
          website: "www.sciences.unstim.bj"
        },
        description: "Formation scientifique d'excellence."
      },
      {
        id: "unstim-4",
        name: "École de Technologie",
        admissionRequirements: ["Baccalauréat série C, D ou F", "Test technique", "Aptitude manuelle"],
        location: "Abomey",
        country: "Bénin",
        programs: ["Technologies Industrielles", "Maintenance", "Automatisme", "Robotique"],
        contact: {
          email: "techno@unstim.bj",
          phone: "+229 22 50 04 89",
          website: "www.techno.unstim.bj"
        },
        description: "Innovation technologique et industrielle."
      },
      {
        id: "unstim-5",
        name: "Institut de Recherche Scientifique",
        admissionRequirements: ["Master en sciences", "Projet de recherche", "Encadrement académique"],
        location: "Abomey",
        country: "Bénin",
        programs: ["Recherche Appliquée", "Innovation", "Transfert de Technologie", "Propriété Intellectuelle"],
        contact: {
          email: "recherche@unstim.bj",
          phone: "+229 22 50 05 12",
          website: "www.recherche.unstim.bj"
        },
        description: "Recherche scientifique de pointe."
      },
      {
        id: "unstim-6",
        name: "École d'Informatique et Télécommunications",
        admissionRequirements: ["Baccalauréat série C ou D", "Test de logique", "Aptitude informatique"],
        location: "Abomey",
        country: "Bénin",
        programs: ["Informatique", "Réseaux et Télécommunications", "Intelligence Artificielle", "Cybersécurité"],
        contact: {
          email: "info@unstim.bj",
          phone: "+229 22 50 06 34",
          website: "www.info.unstim.bj"
        },
        description: "Excellence en informatique et nouvelles technologies."
      }
    ]
  },
  {
    id: "4",
    name: "Université Nationale d'Agriculture (UNA)",
    location: "Porto-Novo",
    type: "Public",
    image: "https://via.placeholder.com/200",
    description: "L'UNA est dédiée à l'enseignement et à la recherche dans le domaine de l'agriculture.",
    slug: "universite-agriculture",
    schools: [
      {
        id: "una-1",
        name: "École d'Agronomie Tropicale",
        admissionRequirements: ["Baccalauréat série C ou D", "Passion pour l'agriculture", "Test de connaissances rurales"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Agronomie", "Agriculture Tropicale", "Agroécologie", "Sciences du Sol"],
        contact: {
          email: "agro@una.bj",
          phone: "+229 20 21 01 23",
          website: "www.agro.una.bj"
        },
        description: "Spécialisation en agriculture tropicale durable."
      },
      {
        id: "una-2",
        name: "Institut de Zootechnie",
        admissionRequirements: ["Baccalauréat série C ou D", "Intérêt pour l'élevage", "Connaissance animale de base"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Zootechnie", "Élevage", "Nutrition Animale", "Santé Animale"],
        contact: {
          email: "zootechnie@una.bj",
          phone: "+229 20 21 02 45",
          website: "www.zootechnie.una.bj"
        },
        description: "Excellence en sciences animales."
      },
      {
        id: "una-3",
        name: "École de Foresterie",
        admissionRequirements: ["Baccalauréat série C ou D", "Passion environnementale", "Aptitude terrain"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Foresterie", "Gestion des Ressources Naturelles", "Écologie", "Conservation"],
        contact: {
          email: "foresterie@una.bj",
          phone: "+229 20 21 03 67",
          website: "www.foresterie.una.bj"
        },
        description: "Préservation et gestion durable des forêts."
      },
      {
        id: "una-4",
        name: "Institut de Technologie Alimentaire",
        admissionRequirements: ["Baccalauréat série C ou D", "Intérêt agroalimentaire", "Bases en chimie"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Technologie Alimentaire", "Transformation Agroalimentaire", "Nutrition", "Qualité Alimentaire"],
        contact: {
          email: "alimentaire@una.bj",
          phone: "+229 20 21 04 89",
          website: "www.alimentaire.una.bj"
        },
        description: "Innovation en transformation agroalimentaire."
      },
      {
        id: "una-5",
        name: "École d'Économie Rurale",
        admissionRequirements: ["Baccalauréat toutes séries", "Intérêt développement rural", "Test économie"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Économie Rurale", "Développement Rural", "Coopératives Agricoles", "Microfinance"],
        contact: {
          email: "economie@una.bj",
          phone: "+229 20 21 05 12",
          website: "www.economie.una.bj"
        },
        description: "Développement économique rural intégré."
      },
      {
        id: "una-6",
        name: "Institut de Recherche Agricole",
        admissionRequirements: ["Master en agriculture", "Projet recherche", "Expérience terrain"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Recherche Agricole", "Innovation Rurale", "Biotechnologie Agricole", "Amélioration Génétique"],
        contact: {
          email: "recherche@una.bj",
          phone: "+229 20 21 06 34",
          website: "www.recherche.una.bj"
        },
        description: "Recherche agricole de pointe."
      }
    ]
  },
  {
    id: "5",
    name: "Institut de Mathématiques et de Sciences Physiques (IMSP)",
    location: "Dangbo",
    type: "Public",
    image: "https://via.placeholder.com/200",
    description: "L'IMSP est un institut de recherche et d'enseignement en mathématiques et sciences physiques.",
    slug: "institut-imsp",
    schools: [
      {
        id: "imsp-1",
        name: "École de Mathématiques Pures",
        admissionRequirements: ["Baccalauréat série C", "Excellence en mathématiques", "Test de niveau élevé"],
        location: "Dangbo",
        country: "Bénin",
        programs: ["Mathématiques", "Algèbre", "Analyse", "Géométrie"],
        contact: {
          email: "maths@imsp.bj",
          phone: "+229 20 22 01 23",
          website: "www.maths.imsp.bj"
        },
        description: "Formation d'élite en mathématiques pures."
      },
      {
        id: "imsp-2",
        name: "Institut de Physique Théorique",
        admissionRequirements: ["Baccalauréat série C", "Excellence en physique", "Bases mathématiques solides"],
        location: "Dangbo",
        country: "Bénin",
        programs: ["Physique", "Physique Théorique", "Mécanique Quantique", "Relativité"],
        contact: {
          email: "physique@imsp.bj",
          phone: "+229 20 22 02 45",
          website: "www.physique.imsp.bj"
        },
        description: "Recherche fondamentale en physique théorique."
      },
      {
        id: "imsp-3",
        name: "Centre de Statistiques Appliquées",
        admissionRequirements: ["Baccalauréat série C", "Aptitude statistique", "Logique mathématique"],
        location: "Dangbo",
        country: "Bénin",
        programs: ["Statistiques", "Probabilités", "Analyse de Données", "Biostatistiques"],
        contact: {
          email: "stats@imsp.bj",
          phone: "+229 20 22 03 67",
          website: "www.stats.imsp.bj"
        },
        description: "Excellence en statistiques et probabilités."
      },
      {
        id: "imsp-4",
        name: "École d'Informatique Mathématique",
        admissionRequirements: ["Baccalauréat série C", "Logique algorithmique", "Passion informatique"],
        location: "Dangbo",
        country: "Bénin",
        programs: ["Informatique", "Informatique Mathématique", "Algorithmes", "Calcul Scientifique"],
        contact: {
          email: "info@imsp.bj",
          phone: "+229 20 22 04 89",
          website: "www.info.imsp.bj"
        },
        description: "Informatique théorique et appliquée."
      },
      {
        id: "imsp-5",
        name: "Laboratoire de Recherche",
        admissionRequirements: ["Master ou équivalent", "Projet recherche avancé", "Publication scientifique"],
        location: "Dangbo",
        country: "Bénin",
        programs: ["Recherche Fondamentale", "Publications", "Doctorat", "Post-doctorat"],
        contact: {
          email: "labo@imsp.bj",
          phone: "+229 20 22 05 12",
          website: "www.labo.imsp.bj"
        },
        description: "Recherche fondamentale de niveau international."
      },
      {
        id: "imsp-6",
        name: "Centre d'Excellence Scientifique",
        admissionRequirements: ["Excellence académique", "Sélection rigoureuse", "Potentiel recherche"],
        location: "Dangbo",
        country: "Bénin",
        programs: ["Formation d'Excellence", "Encadrement Personnalisé", "Bourses d'Études", "Échanges Internationaux"],
        contact: {
          email: "excellence@imsp.bj",
          phone: "+229 20 22 06 34",
          website: "www.excellence.imsp.bj"
        },
        description: "Centre d'excellence scientifique régional."
      }
    ]
  },
  {
    id: "6",
    name: "Université Africaine de Technologie et de Management (UATM)",
    location: "Cotonou",
    type: "Privé",
    image: "https://via.placeholder.com/200",
    description: "L'UATM est une université privée offrant des formations en gestion et technologie.",
    slug: "universite-uatm",
    schools: [
      {
        id: "uatm-1",
        name: "Business School",
        admissionRequirements: ["Baccalauréat toutes séries", "Test d'aptitude", "Frais de scolarité"],
        location: "Cotonou",
        country: "Bénin",
        programs: ["Gestion", "Marketing", "Finance", "Management"],
        contact: {
          email: "business@uatm.edu",
          phone: "+229 21 31 01 23",
          website: "www.business.uatm.edu"
        },
        description: "École de commerce de référence."
      },
      {
        id: "uatm-2",
        name: "École de Technologie",
        admissionRequirements: ["Baccalauréat série C ou D", "Test technique", "Motivation technologique"],
        location: "Cotonou",
        country: "Bénin",
        programs: ["Informatique", "Réseaux", "Développement Web", "Maintenance"],
        contact: {
          email: "tech@uatm.edu",
          phone: "+229 21 31 02 45",
          website: "www.tech.uatm.edu"
        },
        description: "Innovation technologique appliquée."
      },
      {
        id: "uatm-3",
        name: "Institut de Communication",
        admissionRequirements: ["Baccalauréat toutes séries", "Test de créativité", "Portfolio"],
        location: "Cotonou",
        country: "Bénin",
        programs: ["Communication", "Journalisme", "Relations Publiques", "Marketing Digital"],
        contact: {
          email: "comm@uatm.edu",
          phone: "+229 21 31 03 67",
          website: "www.comm.uatm.edu"
        },
        description: "Communication moderne et digitale."
      },
      {
        id: "uatm-4",
        name: "École de Management International",
        admissionRequirements: ["Baccalauréat + niveau anglais", "Test international", "Projet professionnel"],
        location: "Cotonou",
        country: "Bénin",
        programs: ["Management International", "Commerce International", "Négociation", "Logistique"],
        contact: {
          email: "international@uatm.edu",
          phone: "+229 21 31 04 89",
          website: "www.international.uatm.edu"
        },
        description: "Formation internationale en management."
      },
      {
        id: "uatm-5",
        name: "Centre d'Innovation Entrepreneuriale",
        admissionRequirements: ["Projet d'entreprise", "Motivation entrepreneuriale", "Business plan"],
        location: "Cotonou",
        country: "Bénin",
        programs: ["Entrepreneuriat", "Innovation", "Start-up", "Incubation"],
        contact: {
          email: "innovation@uatm.edu",
          phone: "+229 21 31 05 12",
          website: "www.innovation.uatm.edu"
        },
        description: "Accompagnement entrepreneurial complet."
      },
      {
        id: "uatm-6",
        name: "Institut de Formation Continue",
        admissionRequirements: ["Expérience professionnelle", "Projet formation", "Financement disponible"],
        location: "Cotonou",
        country: "Bénin",
        programs: ["Formation Continue", "Certification", "MBA", "Executive Education"],
        contact: {
          email: "continue@uatm.edu",
          phone: "+229 21 31 06 34",
          website: "www.continue.uatm.edu"
        },
        description: "Formation pour professionnels en activité."
      }
    ]
  }
];

export const getUniversityBySlug = (slug: string): University | undefined => {
  return universities.find(university => university.slug === slug);
};

export const getSchoolById = (schoolId: string): { school: School; university: University } | undefined => {
  for (const university of universities) {
    const school = university.schools.find(s => s.id === schoolId);
    if (school) {
      return { school, university };
    }
  }
  return undefined;
};