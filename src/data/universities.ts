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
    image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
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
  image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800",
  description: "L'Université de Parakou est un pôle académique majeur du nord du Bénin, reconnue pour ses formations de qualité en agriculture, santé, droit et sciences économiques.",
  slug: "universite-parakou",
  schools: [
    {
      id: "up-1",
      name: "Faculté d'Agronomie (FA)",
      admissionRequirements: ["Baccalauréat série C ou D", "Concours d'entrée ou classement sur dossier"],
      location: "Parakou",
      country: "Bénin",
      programs: [
        "Sciences et Techniques de Production Végétale : Prépare aux métiers de conseiller agricole, entrepreneur en agriculture ou spécialiste de la production végétale.",
        "Sciences et Techniques de Production Animale et Halieutique : Mène vers des carrières de technicien d’élevage, pisciculteur ou responsable de projets halieutiques.",
        "Aménagement et Gestion des Ressources Naturelles : Ouvre la voie aux professions d’agent forestier, gestionnaire des ressources naturelles et consultant en environnement.",
        "Sociologie et Économie Rurales : Conduit à des métiers de développement rural, gestion de coopératives et consultance en économie rurale.",
        "Nutrition et Sciences Agroalimentaires : Forme des techniciens et ingénieurs en sécurité alimentaire, qualité agroalimentaire et nutrition."
      ],
      contact: {
        email: "fa@up.bj",
        phone: "+229 23 61 01 23",
        website: "www.fa.up.bj"
      },
      description: "Une formation complète et pratique pour préparer les étudiants aux métiers de l’agriculture moderne et durable."
    },
    {
      id: "up-2",
      name: "Faculté de Médecine (FM)",
      admissionRequirements: ["Baccalauréat série C ou D", "Concours sélectif"],
      location: "Parakou",
      country: "Bénin",
      programs: [
        "Médecine humaine : Prépare à devenir médecin généraliste ou spécialiste au sein des hôpitaux et cliniques."
      ],
      contact: {
        email: "fm@up.bj",
        phone: "+229 23 61 02 45",
        website: "www.fm.up.bj"
      },
      description: "Une formation médicale complète qui prépare des praticiens compétents au service de la santé publique."
    },
    {
      id: "up-3",
      name: "Institut de Formation en Soins Infirmiers et Obstétricaux (IFSIO)",
      admissionRequirements: ["Baccalauréat série C ou D", "Concours d’entrée"],
      location: "Parakou",
      country: "Bénin",
      programs: [
        "Soins infirmiers : Pour former des infirmiers diplômés et compétents dans divers domaines de la santé.",
        "Soins obstétricaux : Pour devenir sage-femme ou technicien spécialisé en santé maternelle et infantile."
      ],
      contact: {
        email: "ifsio@up.bj",
        phone: "+229 23 61 03 67",
        website: "www.ifsio.up.bj"
      },
      description: "Une école dédiée à la formation de professionnels de santé hautement qualifiés."
    },
    {
      id: "up-4",
      name: "Institut Universitaire de Technologie (IUT)",
      admissionRequirements: ["Baccalauréat série C ou D", "Concours d’entrée"],
      location: "Parakou",
      country: "Bénin",
      programs: [
        "Informatique de Gestion : Prépare aux métiers de développeur, administrateur systèmes et data analyst.",
        "Gestion des Transports et Logistique : Pour des postes dans le fret, transit, et la supply chain.",
        "Maintenance Industrielle : Ouvre les portes des métiers de technicien de maintenance et d’ingénieur industriel.",
        "Énergies Renouvelables : Prépare des experts en installation et gestion des systèmes énergétiques solaires ou verts."
      ],
      contact: {
        email: "iut@up.bj",
        phone: "+229 23 61 04 89",
        website: "www.iut.up.bj"
      },
      description: "Une formation technique et professionnelle orientée vers les besoins du marché et l’innovation."
    },
    {
      id: "up-5",
      name: "Faculté des Sciences Économiques et de Gestion (FASEG)",
      admissionRequirements: ["Baccalauréat série A, B, C ou D", "Sélection sur dossier ou concours"],
      location: "Parakou",
      country: "Bénin",
      programs: [
        "Entrepreneuriat et Gestion des Entreprises : Prépare des entrepreneurs, gestionnaires et chefs de projet.",
        "Finance et Comptabilité : Forme des analystes financiers, auditeurs et experts-comptables.",
        "Marketing et Management des Organisations : Prépare aux métiers de chef de produit, responsable marketing et consultant en stratégie."
      ],
      contact: {
        email: "faseg@up.bj",
        phone: "+229 23 61 05 12",
        website: "www.faseg.up.bj"
      },
      description: "Un centre d’excellence en sciences économiques et gestion pour former les leaders de demain."
    },
    {
      id: "up-6",
      name: "Faculté de Droit et de Sciences Politiques (FDSP)",
      admissionRequirements: ["Baccalauréat toutes séries", "Sélection sur dossier ou entretien"],
      location: "Parakou",
      country: "Bénin",
      programs: [
        "Droit public et privé : Forme des juristes, avocats, greffiers et magistrats.",
        "Sciences Politiques et Relations Internationales : Prépare aux carrières de diplomate, consultant politique ou attaché culturel."
      ],
      contact: {
        email: "fdsp@up.bj",
        phone: "+229 23 61 06 34",
        website: "www.fdsp.up.bj"
      },
      description: "Une faculté pour les futurs juristes, politiciens et experts en relations internationales."
    }
  ]
},
  {
  id: "3",
  name: "Université Nationale des Sciences, Technologies, Ingénierie et Mathématiques (UNSTIM)",
  location: "Abomey",
  type: "Public",
  image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800",
  description: "L’UNSTIM est une université de pointe au Bénin, dédiée aux formations technologiques, scientifiques et d’ingénierie, avec un fort accent sur l’innovation et les solutions pratiques aux défis du développement.",
  slug: "universite-unstim",
  schools: [
    {
      id: "unstim-1",
      name: "Institut Universitaire de Technologie (IUT Lokossa)",
      admissionRequirements: ["Baccalauréat série C, D, E, F", "Concours d’entrée"],
      location: "Lokossa",
      country: "Bénin",
      programs: [
        "Génie Électrique et Informatique Industrielle : Forme des techniciens supérieurs et ingénieurs capables de concevoir et maintenir des systèmes électriques et automatisés.",
        "Génie Mécanique et Productique : Prépare aux métiers de technicien de maintenance, concepteur de systèmes mécaniques et chef d’atelier.",
        "Génie Civil : Ouvre la voie aux postes de conducteur de travaux, chef de chantier ou ingénieur BTP.",
        "Informatique Appliquée : Prépare à devenir développeur logiciel, administrateur réseau ou data analyst."
      ],
      contact: {
        email: "iutlokossa@unstim.bj",
        phone: "+229 23 41 02 34",
        website: "www.iutlokossa.unstim.bj"
      },
      description: "Un centre de formation technique et professionnelle pour les métiers de l’ingénierie et de l’informatique."
    },
    {
      id: "unstim-2",
      name: "École Nationale Supérieure des Biosciences et Biotechnologies Appliquées (ENSBBA)",
      admissionRequirements: ["Baccalauréat série D ou C", "Sélection sur dossier ou concours"],
      location: "Abomey",
      country: "Bénin",
      programs: [
        "Biotechnologies : Prépare des spécialistes en recherche, bio-industrie et production pharmaceutique.",
        "Agro-industrie : Forme des cadres pour les industries agroalimentaires et la gestion de la qualité.",
        "Santé et Biosciences : Offre des débouchés dans les laboratoires, centres de recherche et industries médicales."
      ],
      contact: {
        email: "ensbba@unstim.bj",
        phone: "+229 23 41 03 21",
        website: "www.ensbba.unstim.bj"
      },
      description: "Une école qui associe science et technologie pour développer des solutions innovantes en santé et en agroalimentaire."
    },
    {
      id: "unstim-3",
      name: "École Nationale Supérieure de Génie Électrique et Informatique (ENSGEI)",
      admissionRequirements: ["Baccalauréat série C, D ou E", "Concours très sélectif"],
      location: "Abomey",
      country: "Bénin",
      programs: [
        "Génie Électrique : Prépare des ingénieurs en réseaux électriques, systèmes d’énergie et automatismes.",
        "Informatique Industrielle : Forme des experts en automatisation, robotique et systèmes embarqués."
      ],
      contact: {
        email: "ensgei@unstim.bj",
        phone: "+229 23 41 04 56",
        website: "www.ensgei.unstim.bj"
      },
      description: "Une formation d’ingénieurs alliant électricité, informatique et technologies industrielles."
    },
    {
      id: "unstim-4",
      name: "École Nationale Supérieure de Génie Mécanique et Énergétique (ENSGME)",
      admissionRequirements: ["Baccalauréat série C, D ou F", "Concours d’entrée"],
      location: "Abomey",
      country: "Bénin",
      programs: [
        "Génie Mécanique : Prépare des ingénieurs en conception mécanique, production industrielle et maintenance.",
        "Énergie et Thermique : Ouvre des carrières dans les énergies renouvelables, le froid industriel et la climatisation."
      ],
      contact: {
        email: "ensgme@unstim.bj",
        phone: "+229 23 41 05 12",
        website: "www.ensgme.unstim.bj"
      },
      description: "Une école au service de l’innovation en énergie, mécanique et efficacité industrielle."
    },
    {
      id: "unstim-5",
      name: "École Nationale Supérieure des Mathématiques et Sciences Physiques (ENSP)",
      admissionRequirements: ["Baccalauréat série C ou D", "Concours très sélectif"],
      location: "Abomey",
      country: "Bénin",
      programs: [
        "Mathématiques Appliquées : Forme des statisticiens, data scientists et modélisateurs.",
        "Physique Appliquée : Prépare des ingénieurs en physique industrielle, énergie et instrumentation."
      ],
      contact: {
        email: "ensp@unstim.bj",
        phone: "+229 23 41 06 45",
        website: "www.ensp.unstim.bj"
      },
      description: "Une école dédiée aux sciences fondamentales pour des carrières en recherche, ingénierie et innovation."
    }
  ]
},
  {
    id: "4",
    name: "Université Nationale d'Agriculture (UNA)",
    location: "Porto-Novo",
    type: "Public",
    image: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800",
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