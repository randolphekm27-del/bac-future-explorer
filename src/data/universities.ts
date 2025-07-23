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
  goodToKnow: string;
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

// Fonction utilitaire pour raccourcir les noms de programmes longs
export const formatProgramName = (program: string): string => {
  const keywords = {
    "Sciences et Techniques de Production Végétale": "Production Végétale",
    "Sciences et Techniques de Production Animale et Halieutique": "Production Animale",
    "Aménagement et Gestion des Ressources Naturelles": "Ressources Naturelles",
    "Sociologie et Économie Rurales": "Économie Rurale",
    "Nutrition et Sciences Agroalimentaires": "Nutrition",
    "Génie Électrique et Informatique Industrielle": "Génie Électrique",
    "Génie Mécanique et Productique": "Génie Mécanique",
    "Informatique de Gestion": "Info Gestion",
    "Gestion des Transports et Logistique": "Transport",
    "Maintenance Industrielle": "Maintenance",
    "Énergies Renouvelables": "Énergies Vertes",
    "Entrepreneuriat et Gestion des Entreprises": "Entrepreneuriat",
    "Finance et Comptabilité": "Finance",
    "Marketing et Management des Organisations": "Marketing",
    "Sciences Politiques et Relations Internationales": "Relations Internationales",
    "Droit public et privé": "Droit",
    "Biotechnologies": "Biotech",
    "Agro-industrie": "Agro-industrie",
    "Santé et Biosciences": "Biosciences",
    "Informatique Industrielle": "Info Industrielle",
    "Énergie et Thermique": "Énergie",
    "Mathématiques Appliquées": "Maths Appliquées",
    "Physique Appliquée": "Physique",
    "Agriculture Tropicale": "Agriculture",
    "Gestion des Ressources Naturelles": "Ressources Naturelles",
    "Technologie Alimentaire": "Tech Alimentaire",
    "Transformation Agroalimentaire": "Transformation",
    "Qualité Alimentaire": "Qualité",
    "Sciences du Sol": "Sciences Sol",
    "Nutrition Animale": "Nutrition",
    "Santé Animale": "Santé Animale"
  };
  
  // Si le programme contient ":", prendre la partie avant
  const baseName = program.split(" : ")[0];
  
  // Chercher un mot-clé correspondant
  for (const [full, short] of Object.entries(keywords)) {
    if (baseName.includes(full)) {
      return short;
    }
  }
  
  // Si trop long (plus de 25 caractères), tronquer intelligemment
  if (baseName.length > 25) {
    const words = baseName.split(" ");
    if (words.length > 2) {
      return words.slice(0, 2).join(" ");
    }
    return baseName.substring(0, 22) + "...";
  }
  
  return baseName;
};

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
        description: "Formation d'excellence en management et économie appliquée.",
        goodToKnow: "L'ENEAM est reconnue comme l'une des meilleures écoles de management en Afrique de l'Ouest. Les diplômés bénéficient d'un excellent taux d'insertion professionnelle (95%) et peuvent poursuivre en master ou intégrer directement le marché du travail dans des entreprises nationales et internationales."
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
        description: "Centre d'excellence pour les sciences exactes et appliquées.",
        goodToKnow: "La FAST dispose de laboratoires modernes et d'équipements informatiques de pointe. Les étudiants participent régulièrement à des projets de recherche et peuvent décrocher des stages dans des entreprises technologiques. Le cursus prépare autant à la recherche qu'au secteur privé."
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
        description: "Formation médicale de référence en Afrique de l'Ouest.",
        goodToKnow: "La FSS forme des médecins depuis plus de 40 ans avec un internat hospitalier dans les meilleurs hôpitaux du pays. La formation est très exigeante (7 ans minimum) mais offre d'excellentes perspectives. Les diplômés peuvent exercer au Bénin ou poursuivre une spécialisation à l'étranger."
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
        description: "Excellence en formation juridique et sciences politiques.",
        goodToKnow: "La FADESP forme les cadres juridiques et administratifs du pays. Les étudiants peuvent accéder au barreau après leur formation ou intégrer la fonction publique. L'école organise régulièrement des cliniques juridiques pour l'expérience pratique et maintient des partenariats avec des cabinets d'avocats."
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
        description: "Formation d'ingénieurs de haut niveau.",
        goodToKnow: "L'EPAC est l'école d'ingénierie la plus prestigieuse du Bénin. Les promotions sont limitées (50 étudiants max par filière) garantissant un encadrement personnalisé. Les diplômés sont très recherchés et trouvent facilement des emplois bien rémunérés dans le BTP, l'énergie et l'industrie."
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
        description: "Centre de formation en sciences humaines et sociales.",
        goodToKnow: "La FLASH propose une formation pluridisciplinaire qui développe l'esprit critique et les compétences en communication. Les débouchés incluent les médias, l'enseignement, la diplomatie et les ONG. L'école encourage fortement les échanges internationaux et les stages pratiques."
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
      programs: ["Production Végétale", "Production Animale", "Ressources Naturelles", "Économie Rurale", "Nutrition"],
      contact: {
        email: "fa@up.bj",
        phone: "+229 23 61 01 23",
        website: "www.fa.up.bj"
      },
      description: "Une formation complète et pratique pour préparer les étudiants aux métiers de l'agriculture moderne et durable.",
      goodToKnow: "La FA de Parakou dispose d'une ferme expérimentale de 200 hectares où les étudiants pratiquent directement. L'école maintient des partenariats avec des ONG agricoles et offre de nombreuses opportunités de stage. Les diplômés sont très recherchés par les projets de développement rural."
    },
    {
      id: "up-2",
      name: "Faculté de Médecine (FM)",
      admissionRequirements: ["Baccalauréat série C ou D", "Concours sélectif"],
      location: "Parakou",
      country: "Bénin",
      programs: ["Médecine"],
      contact: {
        email: "fm@up.bj",
        phone: "+229 23 61 02 45",
        website: "www.fm.up.bj"
      },
      description: "Une formation médicale complète qui prépare des praticiens compétents au service de la santé publique.",
      goodToKnow: "La FM de Parakou est la deuxième faculté de médecine du pays. Elle se spécialise dans la médecine tropicale et communautaire. Les étudiants effectuent leur internat au CHU de Parakou, réputé pour sa qualité des soins. La formation dure 7 ans avec de bonnes perspectives d'emploi."
    },
    {
      id: "up-3",
      name: "Institut de Formation en Soins Infirmiers et Obstétricaux (IFSIO)",
      admissionRequirements: ["Baccalauréat série C ou D", "Concours d'entrée"],
      location: "Parakou",
      country: "Bénin",
      programs: ["Soins infirmiers", "Soins obstétricaux"],
      contact: {
        email: "ifsio@up.bj",
        phone: "+229 23 61 03 67",
        website: "www.ifsio.up.bj"
      },
      description: "Une école dédiée à la formation de professionnels de santé hautement qualifiés.",
      goodToKnow: "L'IFSIO forme des professionnels de santé très demandés. La formation de 3 ans inclut de nombreux stages pratiques. Les diplômés trouvent facilement du travail dans les hôpitaux, cliniques privées ou ONG de santé. Possibilité de spécialisation après le diplôme."
    },
    {
      id: "up-4",
      name: "Institut Universitaire de Technologie (IUT)",
      admissionRequirements: ["Baccalauréat série C ou D", "Concours d'entrée"],
      location: "Parakou",
      country: "Bénin",
      programs: ["Info Gestion", "Transport", "Maintenance", "Énergies Vertes"],
      contact: {
        email: "iut@up.bj",
        phone: "+229 23 61 04 89",
        website: "www.iut.up.bj"
      },
      description: "Une formation technique et professionnelle orientée vers les besoins du marché et l'innovation.",
      goodToKnow: "L'IUT de Parakou privilégie la pratique avec 50% du temps en ateliers et stages. Les entreprises partenaires recrutent directement les diplômés. Formation courte (2-3 ans) avec insertion professionnelle immédiate. Possibilité de poursuivre en licence professionnelle."
    },
    {
      id: "up-5",
      name: "Faculté des Sciences Économiques et de Gestion (FASEG)",
      admissionRequirements: ["Baccalauréat série A, B, C ou D", "Sélection sur dossier ou concours"],
      location: "Parakou",
      country: "Bénin",
      programs: ["Entrepreneuriat", "Finance", "Marketing"],
      contact: {
        email: "faseg@up.bj",
        phone: "+229 23 61 05 12",
        website: "www.faseg.up.bj"
      },
      description: "Un centre d'excellence en sciences économiques et gestion pour former les leaders de demain.",
      goodToKnow: "La FASEG a un incubateur d'entreprises qui accompagne les étudiants entrepreneurs. De nombreux diplômés créent leur propre entreprise avec un taux de réussite élevé. L'école maintient des liens étroits avec la chambre de commerce et les banques locales."
    },
    {
      id: "up-6",
      name: "Faculté de Droit et de Sciences Politiques (FDSP)",
      admissionRequirements: ["Baccalauréat toutes séries", "Sélection sur dossier ou entretien"],
      location: "Parakou",
      country: "Bénin",
      programs: ["Droit", "Relations Internationales"],
      contact: {
        email: "fdsp@up.bj",
        phone: "+229 23 61 06 34",
        website: "www.fdsp.up.bj"
      },
      description: "Une faculté pour les futurs juristes, politiciens et experts en relations internationales.",
      goodToKnow: "La FDSP de Parakou se distingue par ses formations en droit coutumier africain. Les étudiants peuvent participer à des missions d'observation électorale et stages dans les tribunaux. Excellente préparation aux concours de la magistrature et du barreau."
    }
  ]
},
  {
    id: "3",
    name: "Université Nationale des Sciences, Technologies, Ingénierie et Mathématiques (UNSTIM)",
    location: "Abomey",
    type: "Public",
    image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "L'UNSTIM est une université de pointe au Bénin, dédiée aux formations technologiques, scientifiques et d'ingénierie, avec un fort accent sur l'innovation et les solutions pratiques aux défis du développement.",
    slug: "universite-unstim",
    schools: [
      {
        id: "unstim-1",
        name: "Institut Universitaire de Technologie (IUT Lokossa)",
        admissionRequirements: ["Baccalauréat série C, D, E, F", "Concours d'entrée"],
        location: "Lokossa",
        country: "Bénin",
        programs: ["Génie Électrique", "Génie Mécanique", "Génie Civil", "Informatique Appliquée"],
        contact: {
          email: "iutlokossa@unstim.bj",
          phone: "+229 23 41 02 34",
          website: "www.iutlokossa.unstim.bj"
        },
        description: "Un centre de formation technique et professionnelle pour les métiers de l'ingénierie et de l'informatique.",
        goodToKnow: "L'IUT Lokossa est équipé d'ateliers modernes et maintient des partenariats avec l'industrie. Formation pratique intensive avec 60% d'ateliers. Les diplômés sont immédiatement opérationnels et très recherchés par les entreprises du secteur BTP et technologique."
      },
      {
        id: "unstim-2",
        name: "École Nationale Supérieure des Biosciences et Biotechnologies Appliquées (ENSBBA)",
        admissionRequirements: ["Baccalauréat série D ou C", "Sélection sur dossier ou concours"],
        location: "Abomey",
        country: "Bénin",
        programs: ["Biotech", "Agro-industrie", "Biosciences"],
        contact: {
          email: "ensbba@unstim.bj",
          phone: "+229 23 41 03 21",
          website: "www.ensbba.unstim.bj"
        },
        description: "Une école qui associe science et technologie pour développer des solutions innovantes en santé et en agroalimentaire.",
        goodToKnow: "L'ENSBBA dispose de laboratoires de recherche de pointe et collabore avec des instituts internationaux. Les étudiants participent à des projets de recherche appliquée. Excellent taux de placement dans l'industrie pharmaceutique et agroalimentaire (90%)."
      },
      {
        id: "unstim-3",
        name: "École Nationale Supérieure de Génie Électrique et Informatique (ENSGEI)",
        admissionRequirements: ["Baccalauréat série C, D ou E", "Concours très sélectif"],
        location: "Abomey",
        country: "Bénin",
        programs: ["Génie Électrique", "Info Industrielle"],
        contact: {
          email: "ensgei@unstim.bj",
          phone: "+229 23 41 04 56",
          website: "www.ensgei.unstim.bj"
        },
        description: "Une formation d'ingénieurs alliant électricité, informatique et technologies industrielles.",
        goodToKnow: "L'ENSGEI forme l'élite technique du pays. Partenariats avec EDF et des entreprises technologiques européennes. Formation incluant des stages à l'étranger. Les diplômés accèdent rapidement à des postes d'ingénieurs seniors."
      },
      {
        id: "unstim-4",
        name: "École Nationale Supérieure de Génie Mécanique et Énergétique (ENSGME)",
        admissionRequirements: ["Baccalauréat série C, D ou F", "Concours d'entrée"],
        location: "Abomey",
        country: "Bénin",
        programs: ["Génie Mécanique", "Énergie"],
        contact: {
          email: "ensgme@unstim.bj",
          phone: "+229 23 41 05 12",
          website: "www.ensgme.unstim.bj"
        },
        description: "Une école au service de l'innovation en énergie, mécanique et efficacité industrielle.",
        goodToKnow: "L'ENSGME se spécialise dans les énergies renouvelables et l'efficacité énergétique. Laboratoire d'énergies solaires unique en Afrique de l'Ouest. Les diplômés sont pionniers dans la transition énergétique du continent."
      },
      {
        id: "unstim-5",
        name: "École Nationale Supérieure des Mathématiques et Sciences Physiques (ENSP)",
        admissionRequirements: ["Baccalauréat série C ou D", "Concours très sélectif"],
        location: "Abomey",
        country: "Bénin",
        programs: ["Maths Appliquées", "Physique"],
        contact: {
          email: "ensp@unstim.bj",
          phone: "+229 23 41 06 45",
          website: "www.ensp.unstim.bj"
        },
        description: "Une école dédiée aux sciences fondamentales pour des carrières en recherche, ingénierie et innovation.",
        goodToKnow: "L'ENSP forme des chercheurs et data scientists de haut niveau. Collaborations avec des universités européennes et américaines. Les diplômés poursuivent souvent en doctorat ou intègrent des centres de recherche internationaux."
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
        programs: ["Agronomie", "Agriculture", "Agroécologie", "Sciences Sol"],
        contact: {
          email: "agro@una.bj",
          phone: "+229 20 21 01 23",
          website: "www.agro.una.bj"
        },
        description: "Spécialisation en agriculture tropicale durable.",
        goodToKnow: "L'École d'Agronomie dispose de champs d'expérimentation et de serres modernes. Formation axée sur l'agriculture durable et les techniques innovantes. Partenariats avec des coopératives agricoles pour stages pratiques. Taux d'insertion excellent dans l'agrobusiness."
      },
      {
        id: "una-2",
        name: "Institut de Zootechnie",
        admissionRequirements: ["Baccalauréat série C ou D", "Intérêt pour l'élevage", "Connaissance animale de base"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Zootechnie", "Élevage", "Nutrition", "Santé Animale"],
        contact: {
          email: "zootechnie@una.bj",
          phone: "+229 20 21 02 45",
          website: "www.zootechnie.una.bj"
        },
        description: "Excellence en sciences animales.",
        goodToKnow: "L'Institut dispose d'une ferme d'élevage avec diverses espèces animales pour la formation pratique. Collaborations avec des vétérinaires et éleveurs professionnels. Formation complète incluant la gestion d'élevage moderne et la santé animale."
      },
      {
        id: "una-3",
        name: "École de Foresterie",
        admissionRequirements: ["Baccalauréat série C ou D", "Passion environnementale", "Aptitude terrain"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Foresterie", "Ressources Naturelles", "Écologie", "Conservation"],
        contact: {
          email: "foresterie@una.bj",
          phone: "+229 20 21 03 67",
          website: "www.foresterie.una.bj"
        },
        description: "Préservation et gestion durable des forêts.",
        goodToKnow: "L'École de Foresterie travaille étroitement avec les parcs nationaux du Bénin. Formation incluant des missions sur terrain en forêt tropicale. Les diplômés contribuent activement à la préservation de la biodiversité et aux projets environnementaux."
      },
      {
        id: "una-4",
        name: "Institut de Technologie Alimentaire",
        admissionRequirements: ["Baccalauréat série C ou D", "Intérêt agroalimentaire", "Bases en chimie"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Tech Alimentaire", "Transformation", "Nutrition", "Qualité"],
        contact: {
          email: "alimentaire@una.bj",
          phone: "+229 20 21 04 89",
          website: "www.alimentaire.una.bj"
        },
        description: "Innovation en transformation agroalimentaire.",
        goodToKnow: "L'Institut dispose d'un laboratoire de transformation alimentaire et d'une unité pilote de production. Formation pratique avec développement de nouveaux produits. Partenariats avec l'industrie agroalimentaire pour stages et emplois."
      },
      {
        id: "una-5",
        name: "École d'Économie Rurale",
        admissionRequirements: ["Baccalauréat toutes séries", "Intérêt pour le développement rural", "Notions d'économie"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Économie Rurale", "Développement Rural", "Coopératives", "Microfinance"],
        contact: {
          email: "economie@una.bj",
          phone: "+229 20 21 05 12",
          website: "www.economie.una.bj"
        },
        description: "Formation aux enjeux économiques du monde rural.",
        goodToKnow: "L'École forme des spécialistes du développement rural et de l'économie agricole. Collaborations avec des ONG et projets de développement. Les diplômés deviennent conseillers en développement rural, gestionnaires de projets agricoles ou créent leurs propres structures."
      },
      {
        id: "una-6",
        name: "Institut d'Horticulture et d'Aménagement Paysager",
        admissionRequirements: ["Baccalauréat série C ou D", "Passion pour les plantes", "Créativité artistique"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Horticulture", "Aménagement Paysager", "Jardinage", "Plantes Ornementales"],
        contact: {
          email: "horticulture@una.bj",
          phone: "+229 20 21 06 34",
          website: "www.horticulture.una.bj"
        },
        description: "Art et science des jardins et espaces verts.",
        goodToKnow: "L'Institut dispose de jardins botaniques et de serres spécialisées. Formation alliant technique horticole et design paysager. Les diplômés travaillent dans l'aménagement urbain, les jardins privés ou créent leur entreprise d'espaces verts."
      }
    ]
  }
];

// Fonction utilitaire pour récupérer une université par son slug
export const getUniversityBySlug = (slug: string): University | undefined => {
  return universities.find(university => university.slug === slug);
};