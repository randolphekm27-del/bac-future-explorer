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

export const formatProgramName = (program: string): string => {
  const keywords = {
    "Sciences et Techniques de Production Végétale": "Production Végétale",
    "Sciences et Techniques de Production Animale": "Production Animale",
    "Sciences et Techniques de Production Animale et Halieutique": "Production Animale",
    "Aménagement et Gestion des Ressources Naturelles": "Gestion Ressources Naturelles",
    "Aménagement et Gestion des Forêts et Parcours Naturels": "Gestion Forestière",
    "Sociologie et Economie Rurale": "Sociologie Rurale",
    "Nutrition et Science Agro-alimentaire": "Nutrition Agroalimentaire",
    "Nutrition et Technologie Alimentaires": "Technologie Alimentaire",
    "Génie Électrique et Informatique Industrielle": "Génie Électrique",
    "Génie Mécanique et Productique": "Génie Mécanique",
    "Informatique de Gestion": "Info Gestion",
    "Gestion des Transports et Logistique": "Transport & Logistique",
    "Gestion des Transports": "Gestion Transport",
    "Gestion de Logistique": "Logistique",
    "Maintenance Industrielle": "Maintenance",
    "Énergies Renouvelables": "Énergies Vertes",
    "Energie Renouvelable et Système Energétique": "Énergies Renouvelables",
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
    "Gestion des Ressources Naturelles": "Gestion Ressources",
    "Technologie Alimentaire": "Tech Alimentaire",
    "Transformation Agroalimentaire": "Transformation Agro",
    "Qualité Alimentaire": "Qualité Alimentaire",
    "Sciences du Sol": "Sciences Sol",
    "Nutrition Animale": "Nutrition Animale",
    "Santé Animale": "Santé Animale",
    "Géographie et Aménagement du Territoire": "Géographie & Aménagement",
    "Socio-Anthropologie": "Socio-Anthropologie",
    "Science du Langage et de la Communication": "Sciences du Langage",
    "Administration Culturelle": "Admin Culturelle",
    "Arts dramatiques": "Arts Dramatiques",
    "Arts Plastiques": "Arts Plastiques",
    "Musique et Musicologie": "Musicologie",
    "Cinéma et Audiovisuel": "Cinéma",
    "Environnement, Hygiène et Santé publique": "Santé Environnementale",
    "Sciences du cadre de vie": "Sciences Cadre de Vie",
    "Changements climatiques et savoirs endogènes": "Changements Climatiques",
    "Géomatique et Environnement": "Géomatique",
    "Planification et Gestion des espaces urbains et ruraux": "Aménagement Urbain-Rural",
    "Sciences Obstétricales": "Obstétrique",
    "Hydrologie quantitative et Gestion intégrée des Ressources": "Hydrologie",
    "Hydrogéologie et Gestion intégrée des Ressources": "Hydrogéologie",
    "Ecohydrologie et Gestion intégrée des Ressources": "Ecohydrologie",
    "Gestion des crises et risques liés à l'eau et au climat": "Gestion Risques Eau",
    "Génie rural et Maîtrise de l'Eau": "Génie Rural",
    "Hydraulique et Assainissement": "Hydraulique",
    "Eau Hygiène et Assainissement (EHA)": "Eau & Assainissement",
    "Administration des Réseaux informatiques": "Admin Réseaux",
    "Analyse Informatique et Programmation": "Programmation",
    "Assurance": "Assurance",
    "Banque et Finance de Marché": "Banque-Finance",
    "Banque et Institutions des Micro finances": "Microfinance",
    "Gestion des Ressources Humaines": "GRH",
    "Statistique Economique et Sectorielle": "Statistique Économique",
    "Statistique Démographique et Sociale": "Statistique Sociale",
    "Planification et Gestion des Projets": "Gestion de Projets",
    "Planification et Economie du Développement Durable": "Développement Durable",
    "Développement Local et Régional": "Développement Local",
    "Gestion Financière et Comptable": "Gestion Financière",
    "Gestion du Patrimoine Culturel": "Patrimoine Culturel",
    "Sciences de l'Éducation": "Sciences Éducation",
    "Lettres Modernes": "Lettres Modernes",
    "Histoire et Archéologie": "Histoire-Archéologie",
    "Psychologie du travail et des Organisations": "Psychologie du Travail",
    "Journalisme": "Journalisme",
    "Métiers de l'Audiovisuel et du Multimédia": "Audiovisuel",
    "Administration Générale": "Admin Générale",
    "Administration des Finances": "Admin Finances",
    "Secrétariat de Gestion": "Secrétariat",
    "Sciences et Techniques de l'Information documentaire": "Info-Doc",
    "Génie Logiciel": "Génie Logiciel",
    "Internet et Multimédia": "Multimédia",
    "Intelligence artificielle (IA)": "Intelligence Artificielle",
    "Systèmes embarqués et Internet des Objets (SEIoT)": "IoT & Systèmes Embarqués",
    "Sécurité Informatique": "Cybersécurité",
    "Céréaliculture, Standardologie et Ressources Biologiques": "Céréaliculture",
    "Microbiologie et Biotechnologie Alimentaire": "Microbio & Biotech",
    "Hydrobiologie Appliquée": "Hydrobiologie",
    "Langue Chinoise": "Chinois",
    "Didactique du Chinois": "Enseignement Chinois",
    "Cycle préparatoire : Mathématiques, Physiques et Science de l'Ingénieur (MPSI)": "Prépa MPSI",
    "Cycle préparatoire : Physique-Chimie et Science de l'Ingénieur (PCSI)": "Prépa PCSI",
    "Génie de Technologie Alimentaire": "Génie Alimentaire",
    "Production et Santé animale": "Production Animale",
    "Génie de l'Environnement": "Génie Environnemental",
    "Génie d'Imagerie médicale et de Radiothérapie": "Imagerie Médicale",
    "Génie Civil": "Génie Civil",
    "Génie Electrique": "Génie Électrique",
    "Génie Mécanique et Energétique": "Génie Mécanique",
    "Génie Informatique et Télécom": "Génie Info-Télécom",
    "Génie Chimique procédés": "Génie Chimique",
    "Machinisme Agricole": "Machinisme Agricole",
    "Génie Biomédical (Maintenance Biomédicale et Hospitalière)": "Génie Biomédical",
    "Dynamique de Population et Planification Régionale": "Démographie",
    "Négoce International": "Commerce International",
    "Gestion des Relations Maritimes Internationales": "Relations Maritimes",
    "Commerce International": "Commerce International",
    "Education Physique et Sportive": "EPS",
    "Entrainement Sportif": "Entraînement Sportif",
    "Développement communautaire": "Développement Communautaire",
    "Animation": "Animation",
    "Récréologie": "Récréologie",
    "Entrepreneuriat social": "Entrepreneuriat Social",
    "Français": "Français",
    "Philosophie": "Philosophie",
    "Droit": "Droit",
    "Sciences Politiques": "Sciences Politiques",
    "Sciences Economiques et de Gestion (Tronc commun)": "Économie-Gestion",
    "Econométrie et Statistiques Appliquées": "Économétrie",
    "Sciences et Techniques Comptables et Financières (STCF)": "Comptabilité-Finance",
    "Sciences de la Vie et de la Terre": "SVT",
    "Physique-Chimie": "Physique-Chimie",
    "Mathématiques Informatiques et Applications": "Maths-Info"
  };
  
  const baseName = program.split(" : ")[0];
  
  for (const [full, short] of Object.entries(keywords)) {
    if (baseName.includes(full)) {
      return short;
    }
  }
  
  if (baseName.length > 25) {
    const words = baseName.split(" ");
    if (words.length > 2) {
      return words.slice(0, 2).join(" ");
    }
    return baseName.substring(0, 22) + "...";
  }
  
  return baseName;
};

const formatSchoolPrograms = (school: School): School => {
  return {
    ...school,
    programs: school.programs.map(p => formatProgramName(p))
  };
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
      formatSchoolPrograms({
  id: "uac-1",
  name: "Institut Régional de Santé Publique (IRSP)",
  admissionRequirements: ["Classement"],
  location: "Ouidah",
  country: "Bénin",
  programs: ["Santé publique polyvalente"],
  contact: {
    email: "irsp@irsp-ouidah.org",
    phone: "+229 55 99 20 20",
    website: "https://irsp-ouidah.org"
  },
  description: "Formation en santé publique et épidémiologie pour répondre aux enjeux sanitaires locaux.",
  goodToKnow: `
    L'IRSP forme des professionnels polyvalents en santé publique, capables de répondre aux défis sanitaires complexes. 
    Ainsi, si vous souhaitez œuvrer dans la gestion de programmes de vaccination, l'analyse des politiques de santé, 
    la surveillance épidémiologique ou la sensibilisation communautaire, cette formation vous préparera à intervenir 
    sur le terrain comme dans les instances décisionnelles, en Afrique et au-delà.
    
    Opportunités : Ses diplômés intègrent des organisations internationales (OMS, UNICEF), des ministères de la Santé, 
    des ONG spécialisées ou des structures de recherche, avec des missions allant de la réponse aux crises sanitaires 
    à l'optimisation des systèmes de soins.
  `
}),
      formatSchoolPrograms({
  id: "uac-2",
  name: "Faculté des Lettres, Arts et Sciences Humaines-Adjarra (FLASH-Adjarra)",
  admissionRequirements: ["Classement"],
  location: "Adjarra",
  country: "Bénin",
  programs: ["Géographie et Aménagement du Territoire", "Socio-Anthropologie", "Anglais"],
  contact: {
    email: "flash@uac.bj",
    phone: "+229 22 44 66 88",
    website: ""
  },
  description: "Formation pluridisciplinaire en sciences humaines avec une forte dimension terrain.",
  goodToKnow: `
    La FLASH-Adjarra propose des formations en sciences humaines qui étudient la société sous différents angles. 
    Que ce soit en géographie (pour comprendre l'espace et l'aménagement), en socio-anthropologie (pour analyser 
    les comportements sociaux) ou en anglais (pour la communication internationale), l'accent est mis sur l'application 
    pratique des connaissances. Une bonne option si vous aimez réfléchir aux questions de société et travailler sur le terrain.
  `
}),
      formatSchoolPrograms({
        id: "uac-3",
        name: "Institut de Mathématiques et de Sciences Physiques (IMSP)",
        admissionRequirements: ["Classement"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Cycle préparatoire : Mathématiques, Physiques et Science de l'Ingénieur (MPSI)", "Cycle préparatoire : Physique-Chimie et Science de l'Ingénieur (PCSI)"],
        contact: {
          email: "secretariat@imsp-uac.org",
          phone: "+229 20 22 24 55",
          website: "https://www.imsp-benin.com"
        },
        description: "Pôle d'excellence pour les sciences fondamentales préparant aux grandes écoles d'ingénieurs.",
        goodToKnow: `L'IMSP forme des esprits scientifiques en physique et mathématiques pures. Ainsi, si vous visez les grandes écoles d'ingénieurs ou la recherche fondamentale, vous y apprendrez à modéliser les lois de l'univers tout en travaillant sur des cas concrets africains.`
      }),
      formatSchoolPrograms({
        id: "uac-4",
        name: "Faculté des Lettres, Langues, Arts et Communications (FLLAC)",
        admissionRequirements: ["Classement"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Allemand", "Espagnol", "Lettres Modernes", "Science du Langage et de la Communication"],
        contact: {
          email: "",
          phone: "",
          website: ""
        },
        description: "Centre d'excellence en langues étrangères et communication interculturelle.",
        goodToKnow: `La FLLAC forme des passeurs de cultures en langues et littératures. Ainsi, si vous rêvez de devenir traducteur, diplomate ou professeur, vous y développerez une maîtrise exceptionnelle des langues couplée à une profonde intelligence interculturelle.`me."
      }),
      formatSchoolPrograms({
        id: "uac-5",
        name: "Institut National des Métiers d'Arts (INMAAC)",
        admissionRequirements: ["Classement"],
        location: "Abomey6Calavi",
        country: "Bénin",
        programs: ["Arts dramatiques", "Arts Plastiques", "Musique et Musicologie", "Cinéma et Audiovisuel"],
        contact: {
          email: "",
          phone: "",
          website: ""
        },
        description: "Formation aux métiers des arts vivants et visuels ancrée dans le patrimoine béninois.",
        goodToKnow: `L'INMAAC forme des créateurs engagés en arts visuels et scéniques. Ainsi, si vous voulez réinventer le patrimoine béninois à travers le théâtre, la peinture ou le cinéma, vous y trouverez un cadre unique au cœur des palais royaux d'Abomey.`
      }),
      formatSchoolPrograms({
        id: "uac-6",
        name: "Centre Interfacultaire de Formation en Environnement (CIFRED)",
        admissionRequirements: ["Baccalauréat série C, D, EA", "Classement", "SVT, PCT, Maths"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Environnement, Hygiène et Santé publique", "Sciences du cadre de vie"],
        contact: {
          email: "cifred@uac.bj",
          phone: "+229 21 88 77 66",
          website: "www.cifred.uac.bj"
        },
        description: "Expertise en gestion durable des écosystèmes et santé environnementale.",
        goodToKnow: `Le CIFRED forme des gardiens des écosystèmes en sciences environnementales. Ainsi, si vous souhaitez lutter contre la pollution ou concevoir des villes durables, vous y acquerrez des solutions pratiques testées dans le bassin du Niger.`
      }),
      formatSchoolPrograms({
        id: "uac-7",
        name: "Institut de Cadre de Vie (ex-IGATE)",
        admissionRequirements: ["Baccalauréat série A1, A2, B, C, D", "Classement", "Maths, Géographie"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Changements climatiques et savoirs endogènes", "Géomatique et Environnement", "Planification et Gestion des espaces urbains et ruraux"],
        contact: {
          email: "igate@uac.bj",
          phone: "+229 21 77 66 55",
          website: "www.igate.uac.bj"
        },
        description: "Formation en aménagement durable des territoires et résilience climatique.",
        goodToKnow: "Pionnier des 'villes intelligentes' en Afrique de l'Ouest."
      }),
      formatSchoolPrograms({
        id: "uac-8",
        name: "Institut National Médico-Sanitaire (INMeS)",
        admissionRequirements: ["Baccalauréat série C, D", "Concours", "SVT, PCT"],
        location: "Cotonou",
        country: "Bénin",
        programs: ["Sciences Obstétricales"],
        contact: {
          email: "inmes@uac.bj",
          phone: "+229 21 22 33 44",
          website: "www.inmes.uac.bj"
        },
        description: "Formation pratique aux métiers de la santé avec équipements haute-fidélité.",
        goodToKnow: "L'INMeS réduit la mortalité maternelle."
      }),
      formatSchoolPrograms({
        id: "uac-9",
        name: "Institut National de l'Eau (INE)",
        admissionRequirements: ["Baccalauréat série C, D, EA", "Classement", "Maths, SVT"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Hydrologie quantitative et Gestion intégrée des Ressources", "Hydrogéologie et Gestion intégrée des Ressources", "Ecohydrologie et Gestion intégrée des Ressources", "Gestion des crises et risques liés à l'eau et au climat", "Génie rural et Maîtrise de l'Eau", "Hydraulique et Assainissement", "Eau Hygiène et Assainissement (EHA)"],
        contact: {
          email: "ine@uac.bj",
          phone: "+229 21 55 44 33",
          website: "www.ine.uac.bj"
        },
        description: "Centre africain de référence pour la gestion intégrée des ressources en eau.",
        goodToKnow: "L'INE forme les experts qui assainissent le fleuve Ouémé."
      }),
      formatSchoolPrograms({
        id: "uac-10",
        name: "École Nationale d'Économie Appliquée (ENEAM)",
        admissionRequirements: ["Baccalauréat série B, C, D", "Classement", "Maths, Économie"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Administration des Réseaux informatiques", "Analyse Informatique et Programmation", "Assurance", "Banque et Finance de Marché", "Banque et Institutions des Micro finances", "Marketing", "Gestion des Ressources Humaines", "Gestion des Transports", "Gestion de Logistique", "Statistique Economique et Sectorielle", "Statistique Démographique et Sociale", "Planification et Gestion des Projets", "Planification et Economie du Développement Durable", "Développement Local et Régional", "Gestion Financière et Comptable", "Gestion du Patrimoine Culturel"],
        contact: {
          email: "eneam@uac.bj",
          phone: "+229 21 36 00 74",
          website: "www.eneam.uac.bj"
        },
        description: "Leader en formation managériale avec accréditation internationale CAMES.",
        goodToKnow: "Classée parmi les top 5 écoles de management ouest-africaines."
      }),
      formatSchoolPrograms({
        id: "uac-11",
        name: "École du Patrimoine Africain (EPA)",
        admissionRequirements: ["Baccalauréat série A1, A2, B", "Classement + Entretien", "Histoire"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Administration Culturelle"],
        contact: {
          email: "epa@uac.bj",
          phone: "+229 20 11 22 33",
          website: "www.epa.uac.bj"
        },
        description: "Unique en Afrique francophone pour la muséologie et l'archivage des traditions.",
        goodToKnow: "L'EPA restaure les trésors royaux d'Abomey."
      }),
      formatSchoolPrograms({
        id: "uac-12",
        name: "Faculté des Sciences Humaines et Sociales (FASHS)",
        admissionRequirements: ["Baccalauréat série A1, A2, B, C, D", "Classement", "Français, Philosophie"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Géographie et Aménagement du Territoire", "Sciences de l'Éducation", "Lettres Modernes", "Histoire et Archéologie", "Psychologie du travail et des Organisations", "Journalisme", "Métiers de l'Audiovisuel et du Multimédia"],
        contact: {
          email: "fashs@uac.bj",
          phone: "+229 21 66 77 88",
          website: "www.fashs.uac.bj"
        },
        description: "Approche interdisciplinaire des enjeux sociaux et médiatiques contemporains.",
        goodToKnow: "La FASHS abrite le seul master en journalisme d'investigation du Bénin."
      }),
      formatSchoolPrograms({
        id: "uac-13",
        name: "École Nationale d'Administration (ENA)",
        admissionRequirements: ["Baccalauréat série A1, A2, B, C, D", "Concours rigoureux", "Culture générale"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Administration Générale", "Administration des Finances", "Secrétariat de Gestion", "Sciences et Techniques de l'Information documentaire"],
        contact: {
          email: "ena@uac.bj",
          phone: "+229 20 99 88 77",
          website: "www.ena.uac.bj"
        },
        description: "Pépinière de l'élite administrative béninoise depuis 1964.",
        goodToKnow: "L'ENA forme les hauts fonctionnaires qui dirigent les ministères."
      }),
      formatSchoolPrograms({
        id: "uac-14",
        name: "Institut de Formation et de Recherche en Informatique (IFRI)",
        admissionRequirements: ["Baccalauréat série C, D", "Classement", "Maths, Informatique"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Génie Logiciel", "Internet et Multimédia", "Intelligence artificielle (IA)", "Systèmes embarqués et Internet des Objets (SEIoT)", "Sécurité Informatique"],
        contact: {
          email: "ifri@uac.bj",
          phone: "+229 21 44 55 66",
          website: "www.ifri.uac.bj"
        },
        description: "Pionnier des nouvelles technologies en Afrique francophone.",
        goodToKnow: "L'IFRI développe des solutions pour l'agriculture et la santé."
      }),
      formatSchoolPrograms({
        id: "uac-15",
        name: "Faculté des Sciences Agronomiques (FSA)",
        admissionRequirements: ["Baccalauréat série C, D, EA", "Classement", "SVT, Maths"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Sciences et Techniques de Production Végétale", "Sciences et Techniques de Production Animale", "Aménagement et Gestion des Forêts et Parcours Naturels", "Génie Rural, Mécanisation Agricole, Pêche et Aquaculture", "Nutrition et Technologie Alimentaires", "Agroéconomie, Sociologie et Vulgarisation Rurales", "Entreprenariat Agricole"],
        contact: {
          email: "fsa@uac.bj",
          phone: "+229 21 33 44 55",
          website: "www.fsa.uac.bj"
        },
        description: "Référence régionale pour l'agriculture durable et la sécurité alimentaire.",
        goodToKnow: "La FSA mène des recherches sur les cultures résistantes à la sécheresse."
      }),
      formatSchoolPrograms({
        id: "uac-16",
        name: "Faculté des Sciences de la Santé (FSS)",
        admissionRequirements: ["Baccalauréat série C, D", "Concours", "SVT, PCT"],
        location: "Cotonou",
        country: "Bénin",
        programs: ["Médecine Générale", "Pharmacie", "Kinésithérapie", "Assistance sociale", "Nutrition et Diététique", "Analyse Biomédicale"],
        contact: {
          email: "fss@uac.bj",
          phone: "+229 21 77 88 99",
          website: "www.fss.uac.bj"
        },
        description: "Formation médicale complète avec hôpital universitaire de référence.",
        goodToKnow: "La FSS dispose du seul simulateur de patient haute-fidélité d'Afrique de l'Ouest."
      }),
      formatSchoolPrograms({
        id: "uac-17",
        name: "École Polytechnique d'Abomey-Calavi (EPAC)",
        admissionRequirements: ["Baccalauréat série C, D, E", "Classement", "Maths, Physique"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Génie de Technologie Alimentaire", "Production et Santé animale", "Génie de l'Environnement", "Génie d'Imagerie médicale et de Radiothérapie", "Génie Civil", "Génie Electrique", "Génie Mécanique et Energétique", "Génie Informatique et Télécom", "Génie Chimique procédés", "Machinisme Agricole", "Génie Biomédical (Maintenance Biomédicale et Hospitalière)"],
        contact: {
          email: "epac@uac.bj",
          phone: "+229 21 60 70 80",
          website: "www.epac.uac.bj"
        },
        description: "Formation d'ingénieurs orientée vers les défis industriels africains.",
        goodToKnow: "L'EPAC collabore avec des entreprises comme SONACOP et MTN."
      }),
      formatSchoolPrograms({
        id: "uac-18",
        name: "Haute École de Commerce International (HERCI)",
        admissionRequirements: ["Baccalauréat série B, C, D", "Classement", "Maths, Langues"],
        location: "Cotonou",
        country: "Bénin",
        programs: ["Négoce International", "Gestion des Relations Maritimes Internationales", "Commerce International"],
        contact: {
          email: "herci@uac.bj",
          phone: "+229 21 50 60 70",
          website: "www.herci.uac.bj"
        },
        description: "Spécialiste du négoce et des chaînes d'approvisionnement en Afrique.",
        goodToKnow: "L'HERCI forme aux spécificités des marchés africains."
      }),
      formatSchoolPrograms({
        id: "uac-19",
        name: "Institut National de l'Éducation Physique (INEP)",
        admissionRequirements: ["Baccalauréat série A1, A2, B, C, D", "Tests sportifs", "EPS"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Education Physique et Sportive", "Entrainement Sportif", "Développement communautaire", "Animation", "Récréologie", "Entrepreneuriat social"],
        contact: {
          email: "inep@uac.bj",
          phone: "+229 20 77 66 55",
          website: "www.inep.uac.bj"
        },
        description: "Centre d'excellence pour les métiers du sport et de la rééducation.",
        goodToKnow: "L'INEP a formé les coachs des équipes nationales."
      }),
      formatSchoolPrograms({
        id: "uac-20",
        name: "École Normale Supérieure de Porto-Novo (ENS)",
        admissionRequirements: ["Baccalauréat série A1, A2, B, C, D", "Concours", "Discipline majeure"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Français", "Philosophie"],
        contact: {
          email: "ens@uac.bj",
          phone: "+229 20 88 99 00",
          website: "www.ens.uac.bj"
        },
        description: "Institution historique formant les enseignants-chercheurs depuis 1962.",
        goodToKnow: "L'ENS est le vivier des futurs professeurs d'université."
      }),
      formatSchoolPrograms({
        id: "uac-21",
        name: "Faculté de Droit et Science Politique (FADESP)",
        admissionRequirements: ["Baccalauréat série A1, A2, B, C, D", "Classement", "Culture juridique"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Droit", "Sciences Politiques"],
        contact: {
          email: "fadesp@uac.bj",
          phone: "+229 21 70 80 90",
          website: "www.fadesp.uac.bj"
        },
        description: "Berceau de l'élite judiciaire et politique béninoise.",
        goodToKnow: "La FADESP organise des simulations de procès à la Cour Constitutionnelle."
      }),
      formatSchoolPrograms({
        id: "uac-22",
        name: "Faculté des Sciences Économiques (FASEG)",
        admissionRequirements: ["Baccalauréat série B, C, D", "Classement", "Maths, Économie"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Sciences Economiques et de Gestion (Tronc commun)", "Econométrie et Statistiques Appliquées", "Sciences et Techniques Comptables et Financières (STCF)"],
        contact: {
          email: "faseg@uac.bj",
          phone: "+229 21 55 66 77",
          website: "www.faseg.uac.bj"
        },
        description: "Pôle d'excellence en analyse économique quantitative.",
        goodToKnow: "La FASEG forme les experts qui élaborent les politiques économiques nationales."
      }),
      formatSchoolPrograms({
        id: "uac-23",
        name: "Faculté des Sciences et Techniques (FAST)",
        admissionRequirements: ["Baccalauréat série C, D", "Classement", "Maths, Physique"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Sciences de la Vie et de la Terre", "Physique-Chimie", "Mathématiques Informatiques et Applications", "Energie Renouvelable et Système Energétique", "Céréaliculture, Standardologie et Ressources Biologiques", "Microbiologie et Biotechnologie Alimentaire", "Hydrobiologie Appliquée"],
        contact: {
          email: "fast@uac.bj",
          phone: "+229 21 40 50 60",
          website: "www.fast.uac.bj"
        },
        description: "Formation scientifique orientée vers l'innovation technologique.",
        goodToKnow: "La FAST développe des solutions solaires pour les zones rurales."
      }),
      formatSchoolPrograms({
        id: "uac-24",
        name: "Institut Confucius",
        admissionRequirements: ["Baccalauréat série A1, A2, B, C, D", "Entretien", "Mandarin (débutants acceptés)"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Langue Chinoise", "Didactique du Chinois"],
        contact: {
          email: "confucius@uac.bj",
          phone: "+229 21 90 12 34",
          website: "www.confucius.uac.bj"
        },
        description: "Centre officiel pour l'apprentissage du chinois et les échanges sino-béninois.",
        goodToKnow: "L'Institut offre des bourses d'études en Chine."
      })
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
      formatSchoolPrograms({
        id: "up-1",
        name: "Faculté d'Agronomie (FA)",
        admissionRequirements: ["Baccalauréat série C, D, DEAT", "Classement", "Maths, PCT, SVT"],
        location: "Parakou",
        country: "Bénin",
        programs: [
          "Sciences et Techniques de Production Végétale",
          "Sciences et Techniques de Production Animale et Halieutique",
          "Aménagement et Gestion des Ressources Naturelles",
          "Sociologie et Economie Rurale",
          "Nutrition et Sciences Agro-alimentaires"
        ],
        contact: {
          email: "fa@up.bj",
          phone: "+229 23 61 00 00",
          website: "www.fa.up.bj"
        },
        description: "Formation d'excellence en agronomie et développement rural.",
        goodToKnow: "La FA de Parakou est leader en innovation agricole avec une ferme-école de 100ha."
      }),
      formatSchoolPrograms({
        id: "up-2",
        name: "Faculté de Médecine (FM)",
        admissionRequirements: ["Baccalauréat série C, D", "Classement", "Maths, PCT, SVT"],
        location: "Parakou",
        country: "Bénin",
        programs: ["Médecine Humaine"],
        contact: {
          email: "fm@up.bj",
          phone: "+229 23 61 01 01",
          website: "www.fm.up.bj"
        },
        description: "Formation complète de médecins généralistes avec pratique hospitalière.",
        goodToKnow: "La FM dispose d'un CHU de référence régionale."
      }),
      formatSchoolPrograms({
        id: "up-3",
        name: "ENFTS (École Nationale de Formation en Santé Publique)",
        admissionRequirements: ["Baccalauréat série C, D", "Classement", "Maths, PCT, SVT"],
        location: "Parakou",
        country: "Bénin",
        programs: ["Santé Publique et Surveillance Epidémiologique"],
        contact: {
          email: "enfts@up.bj",
          phone: "+229 23 61 02 02",
          website: "www.enfts.up.bj"
        },
        description: "Spécialisation en lutte contre les épidémies et politiques sanitaires.",
        goodToKnow: "Centre de formation des 'détectives de maladies'."
      }),
      formatSchoolPrograms({
        id: "up-4",
        name: "Institut de Formation en Soins Infirmiers (IFSI)",
        admissionRequirements: ["Baccalauréat série C, D", "Concours", "PCT, SVT"],
        location: "Parakou",
        country: "Bénin",
        programs: ["Soins Infirmiers", "Soins Obstétricaux"],
        contact: {
          email: "ifsi@up.bj",
          phone: "+229 23 61 03 03",
          website: "www.ifsi.up.bj"
        },
        description: "Formation pratique aux métiers de nursing et d'accouchement.",
        goodToKnow: "L'IFSI forme 70% du personnel infirmier du Nord-Bénin."
      }),
      formatSchoolPrograms({
        id: "up-5",
        name: "Institut Universitaire de Technologie (IUT)",
        admissionRequirements: ["Baccalauréat série B, C, D, G", "Classement", "Maths, Français, Anglais"],
        location: "Parakou",
        country: "Bénin",
        programs: [
          "Gestion des Banques",
          "Gestion Commerciale",
          "Gestion des Entreprises",
          "Gestion des Transports et Logistique",
          "Informatique de Gestion"
        ],
        contact: {
          email: "iut@up.bj",
          phone: "+229 23 61 04 04",
          website: "www.iut.up.bj"
        },
        description: "Formation professionnalisante en gestion et technologies appliquées.",
        goodToKnow: "L'IUT collabore avec des entreprises locales."
      }),
      formatSchoolPrograms({
        id: "up-6",
        name: "Faculté des Sciences Economiques et de Gestion (FASEG)",
        admissionRequirements: ["Baccalauréat série B, C, D, G", "Classement", "Maths, Économie, Anglais"],
        location: "Parakou",
        country: "Bénin",
        programs: [
          "Analyse et Politique Economique",
          "Économie Agricole",
          "Finance et Comptabilité",
          "Entrepreneuriat et Gestion"
        ],
        contact: {
          email: "faseg@up.bj",
          phone: "+229 23 61 05 05",
          website: "www.faseg.up.bj"
        },
        description: "Expertise en économie du développement et gestion d'entreprise.",
        goodToKnow: "La FASEG forme les cadres des institutions comme la Chambre de Commerce du Borgou."
      }),
      formatSchoolPrograms({
        id: "up-7",
        name: "Faculté de Droit et Sciences Politiques (FDSP)",
        admissionRequirements: ["Baccalauréat série A1, A2, B, C, D", "Classement", "Français, Culture juridique"],
        location: "Parakou",
        country: "Bénin",
        programs: ["Droit Privé", "Droit Public", "Sciences Politiques"],
        contact: {
          email: "fdsp@up.bj",
          phone: "+229 23 61 06 06",
          website: "www.fdsp.up.bj"
        },
        description: "Formation juridique adaptée aux enjeux du Nord-Bénin.",
        goodToKnow: "La FDSP est réputée pour ses cliniques juridiques."
      }),
      formatSchoolPrograms({
        id: "up-8",
        name: "Faculté des Lettres, Arts et Sciences Humaines (FLASH)",
        admissionRequirements: ["Baccalauréat série A1, A2, B, C, D", "Classement", "Langues vivantes/Français"],
        location: "Parakou",
        country: "Bénin",
        programs: [
          "Allemand",
          "Anglais",
          "Espagnol",
          "Géographie",
          "Sociologie"
        ],
        contact: {
          email: "flash@up.bj",
          phone: "+229 23 61 07 07",
          website: "www.flash.up.bj"
        },
        description: "Centre d'excellence en langues et sciences sociales.",
        goodToKnow: "La FLASH abrite le seul département d'études peules (Fulfulde) du Bénin."
      })
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
      formatSchoolPrograms({
        id: "unstim-1",
        name: "Ecole Normale Supérieure de l'Enseignement Technique (ENSET)",
        admissionRequirements: ["Baccalauréat série B, C, D, G", "Concours", "Culture générale, Maths/Economie"],
        location: "Abomey",
        country: "Bénin",
        programs: [
          "Electrotechnique",
          "Génie Civil",
          "Maintenance Industrielle"
        ],
        contact: {
          email: "enset@unstim.bj",
          phone: "+229 22 10 10 10",
          website: "www.enset.unstim.bj"
        },
        description: "Formation des enseignants et techniciens supérieurs pour les lycées techniques.",
        goodToKnow: "L'ENSET est le fleuron de la formation technique au Bénin."
      }),
      formatSchoolPrograms({
        id: "unstim-2",
        name: "Institut National Supérieur de Technologie Industrielle (INSTI)",
        admissionRequirements: ["Baccalauréat série C, D, F, DT", "Classement/Concours", "Maths, PCT selon filière"],
        location: "Abomey",
        country: "Bénin",
        programs: [
          "Génie Civil",
          "Génie Energétique",
          "Informatique et Télécoms",
          "Maintenance Automobile"
        ],
        contact: {
          email: "insti@unstim.bj",
          phone: "+229 22 20 20 20",
          website: "www.insti.unstim.bj"
        },
        description: "Formation d'ingénieurs technologues immédiatement opérationnels.",
        goodToKnow: "L'INSTI dispose du plus grand parc machines du Bénin."
      }),
      formatSchoolPrograms({
        id: "unstim-3",
        name: "Institut National Supérieur des Classes Préparatoires (INSPEI)",
        admissionRequirements: ["Baccalauréat série C, D", "Concours national", "Maths, PCT"],
        location: "Abomey",
        country: "Bénin",
        programs: ["Sciences de l'Ingénieur"],
        contact: {
          email: "inspei@unstim.bj",
          phone: "+229 22 30 30 30",
          website: "www.inspei.unstim.bj"
        },
        description: "Préparation intensive aux grandes écoles d'ingénieurs africaines et internationales.",
        goodToKnow: "L'INSPEI offre le taux de réussite le plus élevé aux concours."
      }),
      formatSchoolPrograms({
        id: "unstim-4",
        name: "Ecole Normale Supérieure de Natitingou (ENS/Nati)",
        admissionRequirements: ["Baccalauréat série C, D", "Concours", "SVT, PCT"],
        location: "Natitingou",
        country: "Bénin",
        programs: [
          "Biotechnologies Médicales",
          "Génie Biologique",
          "Diététique"
        ],
        contact: {
          email: "ensnati@unstim.bj",
          phone: "+229 23 40 40 40",
          website: "www.ensnati.unstim.bj"
        },
        description: "Centre d'excellence en biosciences appliquées aux enjeux du Nord-Bénin.",
        goodToKnow: "L'ENS/Nati mène des recherches sur les plantes médicinales."
      }),
      formatSchoolPrograms({
        id: "unstim-5",
        name: "Ecole Nationale Supérieure des Biosciences (ENSBBA)",
        admissionRequirements: ["Baccalauréat série C, D", "Classement", "SVT, Maths"],
        location: "Abomey",
        country: "Bénin",
        programs: [
          "Biotechnologie Pharmaceutique",
          "Génétique Appliquée"
        ],
        contact: {
          email: "ensbba@unstim.bj",
          phone: "+229 22 50 50 50",
          website: "www.ensbba.unstim.bj"
        },
        description: "Formation aux biotechnologies pour la santé et l'agro-industrie.",
        goodToKnow: "Pionnière dans la production locale de médicaments."
      }),
      formatSchoolPrograms({
        id: "unstim-6",
        name: "Faculté des Sciences et Techniques de Natitingou (FAST/Nati)",
        admissionRequirements: ["Baccalauréat série C, D, E", "Classement", "Maths, PCT"],
        location: "Natitingou",
        country: "Bénin",
        programs: [
          "Génie Civil",
          "Géomatique Appliquée",
          "Équipements Motorisés"
        ],
        contact: {
          email: "fastnati@unstim.bj",
          phone: "+229 23 60 60 60",
          website: "www.fastnati.unstim.bj"
        },
        description: "Formation adaptée aux défis techniques des zones montagneuses.",
        goodToKnow: "La FAST/Nati spécialisée dans les techniques de construction antisismique."
      }),
      formatSchoolPrograms({
        id: "unstim-7",
        name: "Ecole Nationale Supérieure de Génie Energétique (ENSGEP)",
        admissionRequirements: ["Baccalauréat série C, D, F", "Classement", "Maths, Physique"],
        location: "Abomey",
        country: "Bénin",
        programs: [
          "Énergies Renouvelables",
          "Froid Industriel"
        ],
        contact: {
          email: "ensgep@unstim.bj",
          phone: "+229 22 70 70 70",
          website: "www.ensgep.unstim.bj"
        },
        description: "Expertise en solutions énergétiques durables pour l'Afrique.",
        goodToKnow: "L'ENSGEP a conçu des centrales solaires hybrides."
      }),
      formatSchoolPrograms({
        id: "unstim-8",
        name: "Ecole Nationale Supérieure des Travaux Publics (ENSTP)",
        admissionRequirements: ["Baccalauréat série C, D, F", "Classement", "Maths, PCT"],
        location: "Abomey",
        country: "Bénin",
        programs: [
          "Architecture Urbaine",
          "Hydraulique et Assainissement"
        ],
        contact: {
          email: "enstp@unstim.bj",
          phone: "+229 22 80 80 80",
          website: "www.enstp.unstim.bj"
        },
        description: "Référence pour les infrastructures urbaines et hydrauliques.",
        goodToKnow: "L'ENSTP forme les experts qui construisent les ponts et réseaux d'eau potable."
      })
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
      formatSchoolPrograms({
        id: "una-1",
        name: "Ecole d'Agriculture (EAG)",
        admissionRequirements: ["Baccalauréat série C, D, DEAT/Résine et espaces", "Classement", "SVT, Maths, SPCT"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Agriculture"],
        contact: {
          email: "eag@una.bj",
          phone: "+229 21 23 45 68",
          website: "www.una.bj/eag"
        },
        description: "Formation technique en agriculture et production végétale.",
        goodToKnow: "Formation polyvalente avec seulement 39 places disponibles. Débouchés dans les entreprises agricoles et l'enseignement technique."
      }),
      formatSchoolPrograms({
        id: "una-2",
        name: "Ecole d'Horticulture et d'Aménagement des Espaces Verts (EHAEV)",
        admissionRequirements: ["Baccalauréat série C, D, DEAT PV et Foresterie", "Classement", "SVT, Maths, SPCT"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Horticulture et Aménagement des espaces Verts"],
        contact: {
          email: "ehaev@una.bj",
          phone: "+229 21 23 45 69",
          website: "www.una.bj/ehaev"
        },
        description: "Spécialisée dans la production horticole et l'aménagement paysager.",
        goodToKnow: "68 places disponibles. Débouchés dans l'aménagement urbain et la production horticole."
      }),
      formatSchoolPrograms({
        id: "una-3",
        name: "Ecole de Gestion et de Production Végétale et Semencière (EGPVS)",
        admissionRequirements: ["Baccalauréat série C, D, DEAT PV", "Classement", "SVT, Maths, SPCT"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Gestion et Production Végétale et Semencière"],
        contact: {
          email: "egpvs@una.bj",
          phone: "+229 21 23 45 70",
          website: "www.una.bj/egpvs"
        },
        description: "Formation en production végétale et gestion des semences.",
        goodToKnow: "82 places disponibles. Débouchés dans la recherche agricole et l'entreprenariat végétal."
      }),
      formatSchoolPrograms({
        id: "una-4",
        name: "Industrie des Produits Agro-Alimentaires et Nutrition Humaine (IPA-NH)",
        admissionRequirements: ["Baccalauréat série C, D, DEAT/Nutrition et Technologie Alimentaire", "Classement", "SVT, Maths, SPCT"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Industrie des Produits Agro-Alimentaires et Nutrition Humaine"],
        contact: {
          email: "ipa@una.bj",
          phone: "+229 21 23 45 71",
          website: "www.una.bj/ipa"
        },
        description: "Formation en transformation agroalimentaire et nutrition.",
        goodToKnow: "30 places disponibles. Débouchés dans les industries agroalimentaires et l'éducation nutritionnelle."
      }),
      formatSchoolPrograms({
        id: "una-5",
        name: "Industrie des Bio-Ressources (IBR)",
        admissionRequirements: ["Baccalauréat série C, D, DEAT/Nutrition et Technologie Alimentaire", "Classement", "SVT, Maths, SPCT"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Industrie des Bio-Ressources"],
        contact: {
          email: "ibr@una.bj",
          phone: "+229 21 23 45 72",
          website: "www.una.bj/ibr"
        },
        description: "Formation en valorisation des bio-ressources.",
        goodToKnow: "28 places disponibles. Débouchés dans les industries cosmétiques et de phytothérapie."
      }),
      formatSchoolPrograms({
        id: "una-6",
        name: "Génie de Conditionnement Emballage et Stockage des Produits Alimentaires (GCES)",
        admissionRequirements: ["Baccalauréat série C, D, DEAT/Nutrition et Technologie Alimentaire", "Classement", "SVT, Maths, SPCT"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Génie de Conditionnement Emballage et Stockage des Produits Alimentaires"],
        contact: {
          email: "gces@una.bj",
          phone: "+229 21 23 45 73",
          website: "www.una.bj/gces"
        },
        description: "Formation en conditionnement et stockage des produits alimentaires.",
        goodToKnow: "30 places disponibles. Débouchés dans la conception d'emballages et structures de stockage."
      }),
      formatSchoolPrograms({
        id: "una-7",
        name: "Ecole d'Aquaculture (EAq)",
        admissionRequirements: ["Baccalauréat série C, D, DEAT/Pêche et aquaculture", "Classement", "SVT, Maths, SPCT"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Aquaculture"],
        contact: {
          email: "eaq@una.bj",
          phone: "+229 21 23 45 74",
          website: "www.una.bj/eaq"
        },
        description: "Formation en production aquacole et gestion des élevages.",
        goodToKnow: "39 places disponibles. Débouchés dans les entreprises aquacoles et la conception d'aliments."
      }),
      formatSchoolPrograms({
        id: "una-8",
        name: "Ecole de Génie Rural (EGR)",
        admissionRequirements: ["Baccalauréat série C, D, E, F1, F2, F3, DT", "Classement", "Maths, SPCT selon spécialité"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Agroéquipement", "Electrification Rurale et Energies renouvelables", "Infrastructures Hydrauliques et Assainissement"],
        contact: {
          email: "egr@una.bj",
          phone: "+229 21 23 45 75",
          website: "www.una.bj/egr"
        },
        description: "Formation en machinisme agricole et énergies renouvelables.",
        goodToKnow: "Débouchés dans les entreprises de maintenance et projets d'électrification rurale."
      }),
      formatSchoolPrograms({
        id: "una-9",
        name: "Ecole de Gestion et d'Exploitation des Systèmes d'Elevage (EGER)",
        admissionRequirements: ["Baccalauréat série C, D, DEAT/Production animale", "Classement", "SVT, Maths, SPCT"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Productions et Santé Animales"],
        contact: {
          email: "eger@una.bj",
          phone: "+229 21 23 45 76",
          website: "www.una.bj/eger"
        },
        description: "Formation en élevage et santé animale.",
        goodToKnow: "68 places disponibles. Débouchés dans les fermes agro-vétérinaires et cliniques animales."
      }),
      formatSchoolPrograms({
        id: "una-10",
        name: "Ecole d'Agrobusiness et de Politiques Agricoles (EAPA)",
        admissionRequirements: ["Baccalauréat série C, D, DEAT", "Classement", "Maths, SPCT, SVT"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Finance agricole", "Gestion des Exploitations Agricoles et Entreprises Rurales"],
        contact: {
          email: "eapa@una.bj",
          phone: "+229 21 23 45 77",
          website: "www.una.bj/eapa"
        },
        description: "Formation en gestion d'entreprises agricoles et politiques agricoles.",
        goodToKnow: "Débouchés dans la gestion de coopératives et l'analyse de marché agricole."
      }),
      formatSchoolPrograms({
        id: "una-11",
        name: "Ecole de Sociologie Rurale et de Vulgarisation Agricole (ESRNA)",
        admissionRequirements: ["Baccalauréat série C, D, DEAT", "Classement", "Maths, SPCT, SVT"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Sociologie rurale et Vulgarisation Agricole"],
        contact: {
          email: "esrna@una.bj",
          phone: "+229 21 23 45 78",
          website: "www.una.bj/esrna"
        },
        description: "Formation en développement rural et vulgarisation agricole.",
        goodToKnow: "56 places disponibles. Débouchés dans les organisations paysannes et projets de développement."
      }),
      formatSchoolPrograms({
        id: "una-12",
        name: "Ecole de Foresterie Tropicale (EFort)",
        admissionRequirements: ["Baccalauréat série C, D", "Classement", "Maths, SPCT, SVT"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Foresterie Tropicale"],
        contact: {
          email: "efort@una.bj",
          phone: "+229 21 23 45 79",
          website: "www.una.bj/efort"
        },
        description: "Formation en gestion des forêts tropicales.",
        goodToKnow: "33 places disponibles. Débouchés dans la conservation des ressources et la transformation du bois."
      })
    ]
  }
];

export const getUniversityBySlug = (slug: string): University | undefined => {
  return universities.find(university => university.slug === slug);
};
