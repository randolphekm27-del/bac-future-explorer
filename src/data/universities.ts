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
];

// Fonction utilitaire pour récupérer une université par son slug
export const getUniversityBySlug = (slug: string): University | undefined => {
  return universities.find(university => university.slug === slug);
};