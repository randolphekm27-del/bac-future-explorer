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
  goodToKnow: "L'IRSP forme des professionnels polyvalents en santé publique, capables de répondre aux défis sanitaires complexes. Ainsi, si vous souhaitez œuvrer dans la gestion de programmes de vaccination, l'analyse des politiques de santé, la surveillance épidémiologique ou la sensibilisation communautaire, cette formation vous préparera à intervenir sur le terrain comme dans les instances décisionnelles, en Afrique et au-delà. Opportunités : Ses diplômés intègrent des organisations internationales (OMS, UNICEF), des ministères de la Santé, des ONG spécialisées ou des structures de recherche, avec des missions allant de la réponse aux crises sanitaires à l'optimisation des systèmes de soins."
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
  goodToKnow: "La FLASH-Adjarra propose des formations en sciences humaines qui étudient la société sous différents angles. Que ce soit en géographie (pour comprendre l'espace et l'aménagement), en socio-anthropologie (pour analyser les comportements sociaux) ou en anglais (pour la communication internationale), l'accent est mis sur l'application pratique des connaissances. Une bonne option si vous aimez réfléchir aux questions de société et travailler sur le terrain."
}),
      formatSchoolPrograms({
        id: "uac-3",
        name: "Institut de Mathématiques et de Sciences Physiques (IMSP)",
        admissionRequirements: ["Classement"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Mathématiques, Physiques et Science de l'Ingénieur (MPSI)", "Physique-Chimie et Science de l'Ingénieur (PCSI)"],
        contact: {
          email: "secretariat@imsp-uac.org",
          phone: "+229 20 22 24 55",
          website: "https://www.imsp-benin.com"
        },
        description: "Pôle d'excellence pour les sciences fondamentales préparant aux grandes écoles d'ingénieurs.",
        goodToKnow: "L'IMSP forme des esprits scientifiques en physique et mathématiques pures. Ainsi, si vous visez les grandes écoles d'ingénieurs ou la recherche fondamentale, vous y apprendrez à modéliser les lois de l'univers tout en travaillant sur des cas concrets africains."
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
        goodToKnow: "La FLLAC forme des passeurs de cultures en langues et littératures. Ainsi, si vous rêvez de devenir traducteur, diplomate ou professeur, vous y développerez une maîtrise exceptionnelle des langues couplée à une profonde intelligence interculturelle."
      }),
      formatSchoolPrograms({
        id: "uac-5",
        name: "Institut National des Métiers d'Arts (INMAAC)",
        admissionRequirements: ["Classement"],
        location: "Abomey6Calavi",
        country: "Bénin",
        programs: ["Arts dramatiques", "Arts Plastiques", "Musique et Musicologie","Administration Culturelle", "Cinéma et Audiovisuel"],
        contact: {
          email: "",
          phone: "",
          website: ""
        },
        description: "Formation aux métiers des arts vivants et visuels ancrée dans le patrimoine béninois.",
        goodToKnow: "L'INMAAC forme des créateurs engagés en arts visuels et scéniques. Ainsi, si vous voulez réinventer le patrimoine béninois à travers le théâtre, la peinture ou le cinéma, vous y trouverez un cadre unique au cœur des palais royaux d'Abomey."
      }),
      formatSchoolPrograms({
        id: "uac-6",
        name: "Centre Inter Facultaire de Formation et de Recherche en Environnement pour le Développement Durable (CIFRED)",
        admissionRequirements: ["Classement"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Environnement, Hygiène et Santé publique"],
        contact: {
          email: "",
          phone: "",
          website: ""
        },
        description: "Expertise en gestion durable des écosystèmes et santé environnementale.",
        goodToKnow: "Le CIFRED forme des gardiens des écosystèmes en sciences environnementales. Ainsi, si vous souhaitez lutter contre la pollution ou concevoir des villes durables, vous y acquerrez des solutions pratiques testées dans le bassin du Niger."
      }),
      formatSchoolPrograms({
        id: "uac-7",
        name: "Institut de Cadre de Vie (ex-IGATE)",
        admissionRequirements: ["Classement"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Gestion des cadres de vie", "Gestion des changements climatiques et des écosystèmes", "Géomatique et environnement", "Planification et Gestion des espaces ruraux et urbains"],
        contact: {
          email: "",
          phone: "",
          website: ""
        },
        description: "Formation en aménagement durable des territoires et résilience climatique.",
        goodToKnow: "L’Institut du Cadre de Vie forme des spécialistes du territoire en géomatique, planification urbaine et climat. Ainsi, si vous souhaitez transformer nos villes face aux défis environnementaux, vous y apprendrez à cartographier, modéliser et réorganiser les espaces de demain."
      }),
      formatSchoolPrograms({
        id: "uac-8",
        name: "Institut National Médico-Sanitaire (INMeS)",
        admissionRequirements: ["Concours"],
        location: "Cotonou",
        country: "Bénin",
        programs: ["Sciences Obstétricales", "Sciences infirmières"],
        contact: {
          email: "",
          phone: "",
          website: ""
        },
        description: "Formation pratique aux métiers de la santé avec équipements haute-fidélité.",
        goodToKnow: "L’INMeS forme des professionnels de la santé en soins infirmiers et en obstétrique. Ainsi, si vous voulez aider les mamans et leurs bébés à rester en bonne santé, vous y apprendrez les bons gestes et les bons réflexes pour faire la différence dès les premiers instants."
      }),
      formatSchoolPrograms({
        id: "uac-9",
        name: "Institut National de l'Eau (INE)",
        admissionRequirements: ["Classement"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Hydrologie quantitative et Gestion intégrée des Ressources", "Hydrogéologie et Gestion intégrée des Ressources", "Ecohydrologie et Gestion intégrée des Ressources", "Gestion des crises et risques liés à l'eau et au climat", "Génie rural et Maîtrise de l'Eau", "Hydraulique et Assainissement", "Eau Hygiène et Assainissement (EHA)"],
        contact: {
          email: "info@c2ea.ine-uac.net",
          phone: "+229 0141552764 / 0196638124",
          website: "https://c2ea.ine-uac.net"
        },
        description: "Centre africain de référence pour la gestion intégrée des ressources en eau.",
        goodToKnow: "L’INE forme des spécialistes de l’eau capables de prévenir les pénuries, d’assainir les villes et de protéger les populations. Ainsi, si vous voulez avoir un métier utile et recherché pour relever les défis climatiques, c’est l’endroit idéal pour apprendre à faire la différence."
      }),
      formatSchoolPrograms({
        id: "uac-10",
        name: "École Nationale d'Économie Appliquée (ENEAM)",
        admissionRequirements: ["Classement"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Administration des Réseaux informatiques", "Analyse Informatique et Programmation", "Administration des Réseaux informatiques", "Assurance", "Banque et Finance de Marché", "Banque et Institutions des Micro finances", "Marketing", "Gestion des Ressources Humaines", "Gestion des Transports", "Gestion de Logistique", "Statistique Economique et Sectorielle", "Statistique Démographique et Sociale", "Planification et Gestion des Projets", "Planification et Economie du Développement Durable", "Développement Local et Régional", "Gestion Financière et Comptable"],
        contact: {
          email: "eneam@uac.bj",
          phone: "+229 21-30-41-68",
          website: "www.eneam.uac.bj"
        },
        description: "Leader en formation managériale avec accréditation internationale CAMES.",
        goodToKnow: "L’ENEAM est l’une des meilleures écoles qui forment dans les métiers les plus recherchés de notre siècle, comme la finance, l’informatique, la logistique ou encore les statistiques. Ainsi, si vous voulez trouver un bon travail, aider au développement du pays ou même créer votre propre entreprise, c’est une école qui vous donne des bases solides pour réussir."
      }),
      formatSchoolPrograms({
        id: "uac-11",
        name: "École du Patrimoine Africain (EPA)",
        admissionRequirements: ["Classement" ],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Administration Culturelle"],
        contact: {
          email: "epa@epa-prema.net",
          phone: "+229 01 96 04 46 02",
          website: "https://www.epa-prema.net"
        },
        description: "Unique en Afrique francophone pour la muséologie et l'archivage des traditions.",
        goodToKnow: "L’EPA est une école unique qui forme à la sauvegarde de la culture africaine, à travers la gestion des musées, des archives et des traditions. Ainsi, si vous aimez l’histoire, l’art ou l’identité de nos peuples, c’est l’endroit idéal pour apprendre à protéger ce que l’Afrique a de plus précieux."
      }),
      formatSchoolPrograms({
        id: "uac-12",
        name: "Faculté des Sciences Humaines et Sociales (FASHS)",
        admissionRequirements: ["Classement"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Géographie et Aménagement du Territoire","Psychologie", "Sciences de l'Éducation", "Philosophie", "Socio-Anthropologie", "Histoire et Archéologie", "Psychologie du travail et des Organisations"],
        contact: {
          email: "",
          phone: "",
          website: ""
        },
        description: "Approche interdisciplinaire des enjeux sociaux et médiatiques contemporains.",
        goodToKnow: "La FASHS forme des experts capables de décrypter les comportements humains, gérer les territoires et transmettre le savoir. Ainsi, si vous voulez comprendre les défis sociaux actuels et travailler dans l’éducation, la recherche, la communication ou le développement, cette faculté vous ouvre des portes solides pour bâtir votre avenir."
      }),
      formatSchoolPrograms({
        id: "uac-131",
        name: "École Nationale des Sciences et Techniques de l'Information et de la Communication (ENSTIC)",
        admissionRequirements: ["Concours"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Journalisme", "Métiers de l'Audiovisuel et du Multimédia"],
        contact: {
          email: "secretariat@uac.bj",
          phone: "+229 01 97 86 78 78",
          website: "non disponible"
        },
        description: "Pépinière des métiers de l'audiovisuel et du multimédia.",
        goodToKnow: "L’ENSTIC est l’école de référence pour apprendre à informer, filmer et raconter le monde. Ainsi, si vous rêvez de devenir journaliste, réalisateur ou créateur de contenus, vous y développerez les compétences pour faire entendre les voix d’aujourd’hui et influencer les idées de demain."
      }),
      formatSchoolPrograms({
        id: "uac-13",
        name: "École Nationale d'Administration (ENA) (ex ENAM)",
        admissionRequirements: ["Classement"],
        location: "Abomey Calavi",
        country: "Bénin",
        programs: ["Administration Générale", "Administration des Finances", "Secrétariat de Gestion", "Sciences et Techniques de l'Information documentaire"],
        contact: {
          email: "",
          phone: "",
          website: ""
        },
        description: "Pépinière de l'élite administrative béninoise depuis 1964.",
        goodToKnow: "L’ENA est l’école qui prépare les futurs cadres de l’État, dans la gestion, les finances et l’administration publique. Ainsi, si vous rêvez de servir votre pays, d’occuper des postes à responsabilité et de participer aux grandes décisions, c’est ici que votre parcours commence."
      }),
      formatSchoolPrograms({
        id: "uac-14",
        name: "Institut de Formation et de Recherche en Informatique (IFRI)",
        admissionRequirements: ["Classement"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Génie Logiciel", "Internet et Multimédia", "Intelligence artificielle (IA)", "Systèmes embarqués et Internet des Objets (SEIoT)", "Sécurité Informatique"],
        contact: {
          email: "ifri@uac.bj",
          phone: "+229 55 02 80 70",
          website: "https://www.ifri-uac.bj"
        },
        description: "Pionnier des nouvelles technologies en Afrique francophone.",
        goodToKnow: "L’IFRI est l’école de référence pour celles et ceux qui veulent façonner l’avenir avec la technologie. On y forme des experts en intelligence artificielle, cybersécurité, objets connectés, génie logiciel et multimédia. Ainsi, si vous rêvez de créer des applications utiles, de protéger les données sensibles, d’innover dans la santé ou l’agriculture grâce au numérique, l’IFRI vous offre les clés pour devenir un acteur incontournable de la révolution digitale en Afrique."
      }),
      formatSchoolPrograms({
        id: "uac-15",
        name: "Faculté des Sciences Agronomiques (FSA)",
        admissionRequirements: ["Classement"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Sciences et Techniques de Production Végétale", "Sciences et Techniques de Production Animale", "Aménagement et Gestion des Forêts et Parcours Naturels", "Génie Rural, Mécanisation Agricole, Pêche et Aquaculture", "Nutrition et Technologie Alimentaires", "Agroéconomie, Sociologie et Vulgarisation Rurales", "Entreprenariat Agricole"],
        contact: {
          email: "fsa.uac@uac.bj",
          phone: "229 01 41 78 71 70",
          website: "https://fsa-uac.bj"
        },
        description: "Référence régionale pour l'agriculture durable et la sécurité alimentaire.",
        goodToKnow: "La FSA est l’école qui prépare ceux qui nourriront le monde de demain. On y apprend à produire mieux, à protéger les forêts, à élever durablement, à transformer les aliments et à innover dans l’agriculture. Ainsi, si vous voulez contribuer à la sécurité alimentaire, entreprendre dans l’agro-business ou rendre nos systèmes agricoles plus résilients face au climat, la FSA vous forme aux métiers les plus essentiels de notre avenir."
      }),
      formatSchoolPrograms({
        id: "uac-16",
        name: "Faculté des Sciences de la Santé (FSS)",
        admissionRequirements: ["Classement"],
        location: "Cotonou",
        country: "Bénin",
        programs: ["Médecine Générale", "Pharmacie", "Pharmacie", "Kinésithérapie", "Assistance sociale", "Nutrition et Diététique"],
        contact: {
          email: "fss@uac.bj",
          phone: "+229 21 77 88 99",
          website: "www.fss.uac.bj"
        },
        description: "Formation médicale complète avec hôpital universitaire de référence.",
        goodToKnow: "La FSS forme les soignants et spécialistes qui prennent soin de la vie à chaque étape. On y étudie la médecine, la pharmacie, la kinésithérapie, la nutrition ou encore l’assistance sociale, avec des équipements de pointe comme un simulateur de patient unique en Afrique de l’Ouest. Ainsi, si vous rêvez d’aider, de soigner ou d’innover dans le domaine de la santé, la FSS vous offre un cadre solide pour apprendre, pratiquer et faire la différence."
      }),
      formatSchoolPrograms({
        id: "uac-17",
        name: "École Polytechnique d'Abomey-Calavi (EPAC)",
        admissionRequirements: ["Classement"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Analyse Biomédicale", "Génie de Technologie Alimentaire", "Production et Santé animale", "Génie de l'Environnement", "Génie d'Imagerie médicale et de Radiothérapie", "Génie Civil", "Génie Electrique", "Génie Mécanique et Energétique", "Génie Informatique et Télécom", "Génie Chimique procédés", "Machinisme Agricole", "Génie Biomédical (Maintenance Biomédicale et Hospitalière)"],
        contact: {
          email: "",
          phone: "",
          website: "https://epac.eacademia.bj"
        },
        description: "Formation d'ingénieurs orientée vers les défis industriels africains.",
        goodToKnow: "L’EPAC forme les ingénieurs qui construisent l’Afrique de demain, dans des domaines clés comme l’énergie, la santé, l’alimentation, l’environnement ou le numérique. Ainsi, si vous voulez concevoir des infrastructures, créer des solutions technologiques ou améliorer la vie des populations à travers l’ingénierie, l’EPAC vous ouvre les portes des secteurs les plus stratégiques et recherchés du continent."
      }),
      formatSchoolPrograms({
        id: "uac-181",
        name: "Centre de Formation et de Recherche en matière de Population (CEFORP)",
        admissionRequirements: ["Classement"],
        location: "Cotonou",
        country: "Bénin",
        programs: ["Dynamique de Population et Planification Régionale"],
        contact: {
          email: "",
          phone: "+229 63 41 92 10",
          website: ""
        },
        description: "Centre spécialisé dans l’étude des populations et l’aménagement du territoire en Afrique.",
goodToKnow: "Le CEFORP forme les experts capables d’analyser les évolutions démographiques pour mieux planifier les villes, les politiques sociales et les projets de développement. Ainsi, si vous voulez contribuer à une meilleure organisation des territoires et à des politiques publiques efficaces, vous y trouverez les outils pour agir sur le terrain."
      }),
      formatSchoolPrograms({
        id: "uac-18",
        name: "Haute École de Commerce International (HERCI)",
        admissionRequirements: ["Classement"],
        location: "Porto-Novo",
        country: "Bénin",
        programs: ["Négoce International", "Gestion des Relations Maritimes Internationales", "Commerce International"],
        contact: {
          email: "",
          phone: "",
          website: ""
        },
        description: "École spécialisée dans le commerce international et la logistique portuaire, avec un ancrage fort sur les réalités économiques africaines.",
        goodToKnow: "L’HERCI forme les futurs professionnels du négoce et des échanges internationaux, capables de comprendre les marchés africains et de gérer des flux commerciaux à l’échelle mondiale. Ainsi, si vous voulez travailler dans les ports, les douanes, les entreprises d’import-export ou lancer votre propre activité, cette école vous donne les clés pour réussir dans un monde connecté."
      }),
      formatSchoolPrograms({
  id: "uac-19",
  name: "Institut National de l'Éducation Physique (INEP) (ex INJEPS)",
  admissionRequirements: ["Concours", "Classement"],
  location: "Adjarra Docodji",
  country: "Bénin",
  programs: [
    "Éducation Physique et Sportive",
    "Entraînement Sportif",
    "Développement Communautaire",
    "Andragogie",
    "Récréologie",
    "Entrepreneuriat Social"
  ],
  contact: {
    email: "",
    phone: "+229 01 20 21 28 28",
    website: ""
  },
  description: "Pôle national de formation aux métiers du sport, de l’accompagnement social et de la motricité humaine.",
  goodToKnow: "L'INEP forme les professionnels qui encadrent les équipes nationales, les éducateurs sportifs, les acteurs du bien-être collectif, ainsi que les porteurs de projets à impact social. C’est la porte d’entrée vers une carrière dans le sport de haut niveau, l’éducation, ou l’innovation sociale par le mouvement."
}),
      formatSchoolPrograms({
  id: "uac-20",
  name: "École Normale Supérieure de Porto-Novo (ENS)",
  admissionRequirements: ["Concours"],
  location: "Porto-Novo",
  country: "Bénin",
  programs: [
    "Histoire et Géographie",
    "Espagnol",
    "Allemand",
    "Anglais",
    "Français",
    "Philosophie"
  ],
  contact: {
    email: "ens.uac@uac.bj",
    phone: "+229 01 97 69 88 73",
    website: ""
  },
  description: "Institution pionnière dans la formation des enseignants du supérieur et des cadres pédagogiques depuis 1962.",
  goodToKnow: "L’ENS incarne l’excellence académique dans les lettres et sciences humaines. Elle forme des formateurs, des pédagogues de haut niveau et des penseurs engagés, prêts à transmettre, inspirer et transformer le paysage éducatif africain."
}),
      formatSchoolPrograms({
  id: "uac-21",
  name: "Faculté de Droit et Science Politique (FADESP)",
  admissionRequirements: ["Classement"],
  location: "Abomey-Calavi",
  country: "Bénin",
  programs: ["Droit", "Sciences Politiques"],
  contact: {
    email: "",
    phone: "",
    website: ""
  },
  description: "Berceau stratégique de l’élite juridique et politique du Bénin, formant les esprits appelés à gouverner, défendre et transformer la société.",
  goodToKnow: "La FADESP cultive une pédagogie immersive : les étudiants y participent à des procès simulés à la Cour Constitutionnelle, développant ainsi un sens aigu du droit, de l’éthique et de la rhétorique."
}),
      formatSchoolPrograms({
  id: "uac-22",
  name: "Faculté des Sciences Économiques (FASEG)",
  admissionRequirements: ["Classement"],
  location: "Abomey-Calavi",
  country: "Bénin",
  programs: [
    "Sciences Economiques et de Gestion (Tronc commun)",
    "Econométrie et Statistiques Appliquées",
    "Sciences et Techniques Comptables et Financières (STCF)"
  ],
  contact: {
    email: "",
    phone: "",
    website: "https://faseg-uac.bj"
  },
  description: "Carrefour académique où se forment les architectes des systèmes économiques de demain.",
  goodToKnow: "La FASEG façonne les esprits capables de modéliser les dynamiques macroéconomiques, d’élaborer des politiques publiques et d’optimiser les performances financières des institutions nationales et internationales."
}),
      formatSchoolPrograms({
  id: "uac-23",
  name: "Faculté des Sciences et Techniques (FAST)",
  admissionRequirements: ["Classement"],
  location: "Abomey-Calavi",
  country: "Bénin",
  programs: [
    "Sciences de la Vie et de la Terre",
    "Physique-Chimie",
    "Mathématiques Informatiques et Applications",
    "Énergie Renouvelable et Système Énergétique",
    "Microbiologie et Biotechnologie Alimentaire",
    "Hydrobiologie Appliquée"
  ],
  contact: {
    email: "",
    phone: "",
    website: ""
  },
  description: "Épicentre de la recherche scientifique appliquée aux grands enjeux de demain.",
  goodToKnow: "À la FAST, vous apprenez à concevoir des innovations durables : des biotechnologies alimentaires aux énergies vertes, en passant par la modélisation mathématique des systèmes complexes. C’est le lieu idéal pour devenir un acteur de la transition écologique, énergétique et numérique en Afrique."
}),
      formatSchoolPrograms({
  id: "uac-24",
  name: "Institut Confucius",
  admissionRequirements: [""],
  location: "Abomey-Calavi",
  country: "Bénin",
  programs: ["Langue Chinoise", "Didactique du Chinois"],
  contact: {
    email: "silanickel@gmail.com",
    phone: "+229 01 67 53 79 06",
    website: ""
  },
  description: "Passerelle culturelle et linguistique entre le Bénin et la Chine.",
  goodToKnow: "L’Institut Confucius initie aux subtilités de la langue chinoise tout en facilitant des opportunités concrètes : bourses d'études, échanges culturels, certifications linguistiques officielles. Une réelle immersion dans le monde sinophone pour bâtir des carrières internationales."
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
        admissionRequirements: [ "Classement"],
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
        goodToKnow: "La FA de Parakou forme des technicien·ne·s et des ingénieur·e·s agricoles. Ainsi, si vous visez un métier utile dans la production végétale, l’élevage, la nutrition ou la gestion des ressources naturelles, cette école vous propose une formation solide et recherchée."
      }),
      formatSchoolPrograms({
        id: "up-2",
        name: "Faculté de Médecine (FM)",
        admissionRequirements: ["Classement"],
        location: "Parakou",
        country: "Bénin",
        programs: ["Médecine Humaine"],
        contact: {
          email: "fm@up.bj",
          phone: "+229 23 61 01 01",
          website: "www.fm.up.bj"
        },
        description: "Formation complète de médecins généralistes avec pratique hospitalière.",
        goodToKnow: "La FM de Parakou forme des médecins généralistes à travers un enseignement rigoureux et une forte immersion clinique. Ainsi, si vous souhaitez soigner, accompagner et répondre aux besoins de santé des populations, vous y développerez des compétences solides pour exercer avec responsabilité et efficacité."
      }),
      formatSchoolPrograms({
        id: "up-3",
        name: "ENATSE (École Nationale de Formation des Techniciens Supérieurs en Santé Publique et Surveillance Epidémiologique)",
        admissionRequirements: ["Classement"],
        location: "Parakou",
        country: "Bénin",
        programs: ["Santé Publique et Surveillance Epidémiologique"],
        contact: {
          email: "enfts@up.bj",
          phone: "+229 23 61 02 02",
          website: "www.enfts.up.bj"
        },
        description: "Spécialisation en lutte contre les épidémies et politiques sanitaires.",
        goodToKnow: "L’ENATSE forme des spécialistes capables de repérer et stopper les épidémies avant qu’elles ne se propagent. Ainsi, si vous voulez protéger des vies, prévenir les maladies et aider le pays à mieux réagir face aux crises sanitaires, c’est ici que ça commence."
      }),
      formatSchoolPrograms({
        id: "up-4",
        name: "Institut de Formation en Soins Infirmiers et Obstétricaux (IFSIO)",
        admissionRequirements: ["Concours"],
        location: "Parakou",
        country: "Bénin",
        programs: ["Soins Infirmiers", "Soins Obstétricaux"],
        contact: {
          email: "ifsi@up.bj",
          phone: "+229 23 61 03 03",
          website: "www.ifsi.up.bj"
        },
        description: "Formation pratique aux métiers de nursing et d'accouchement.",
        goodToKnow: "L’IFSIO forme celles et ceux qui veillent sur la vie, du lit d’hôpital à la salle d’accouchement. Ainsi, si vous voulez apprendre un métier concret, utile chaque jour, et qui touche directement la santé des familles, cette école vous donne les gestes et le cœur pour le faire bien."
      }),
      formatSchoolPrograms({
        id: "up-5",
        name: "Institut Universitaire de Technologie (IUT)",
        admissionRequirements: ["Classement"],
        location: "Parakou",
        country: "Bénin",
        programs: [
          "Gestion des Banques",
          "Gestion Commerciale",
          "Gestion des Entreprises",
          "Gestion des Transports et Logistique",
          "Informatique de Gestion",
          "Gestion des Ressources Humaines"
        ],
        contact: {
          email: "iut@up.bj",
          phone: " +229 01 68 12 89 42",
          website: "www.iut.up.bj"
        },
        description: "Formation professionnalisante en gestion et technologies appliquées.",
        goodToKnow: "L’IUT forme des professionnels en gestion et informatique prêts à rejoindre le monde du travail. Ainsi, si vous voulez apprendre un métier concret, avec des liens directs avec les entreprises locales, cette école vous prépare à réussir rapidement."
      }),
      formatSchoolPrograms({
        id: "up-6",
        name: "Faculté des Sciences Economiques et de Gestion (FASEG)",
        admissionRequirements: ["Classement"],
        location: "Parakou",
        country: "Bénin",
        programs: [
          "Analyse et Politique Economique",
          "Économie Agricole",
          "Economie et Finance des collectivités Locales",
          "Economie et Finance Internationales",
          "Finance et Comptabilité",
          "Marketing et Management des Organisations",
          "Entrepreneuriat et Gestion"
        ],
        contact: {
          email: "contact.faseg-up@.gouv.bj",
          phone: "+229 0123610712",
          website: "www.fasegup.com"
        },
        description: "Expertise en économie du développement et gestion d'entreprise.",
        goodToKnow: "La FASEG forme des experts en économie et gestion, essentiels au développement local et international. Ainsi, si vous souhaitez travailler dans les entreprises, les institutions ou lancer votre propre projet, cette faculté vous donne les bases solides pour réussir."
      }),
      formatSchoolPrograms({
        id: "up-7",
        name: "Faculté de Droit et Sciences Politiques (FDSP)",
        admissionRequirements: ["Classement"],
        location: "Parakou",
        country: "Bénin",
        programs: ["Droit Privé", "Droit Public", "Sciences Politiques et Relation Internationales"],
        contact: {
          email: "fdsp@up.bj",
          phone: "+229 23 61 06 06",
          website: "www.fdsp.up.bj"
        },
        description: "Formation juridique adaptée aux enjeux du Nord-Bénin.",
        goodToKnow: "La FDSP forme des juristes et politologues capables d’agir pour la justice et le développement. Ainsi, si vous voulez défendre les droits, comprendre les lois ou contribuer aux décisions publiques, cette faculté vous donne les outils pour devenir un acteur clé de la société."
      }),
      formatSchoolPrograms({
        id: "up-8",
        name: "Faculté des Lettres, Arts et Sciences Humaines (FLASH)",
        admissionRequirements: ["Classement"],
        location: "Parakou",
        country: "Bénin",
        programs: [
          "Allemand",
          "Anglais",
          "Espagnol",
          "Géographie et Aménagement du Territoire",
          "Sociologie Anthropogie",
          "Lettres Modernes"
        ],
        contact: {
          email: "flash@up.bj",
          phone: "+229 23 61 07 07",
          website: "www.flash.up.bj"
        },
        description: "Centre d'excellence en langues et sciences sociales.",
        goodToKnow: "La FLASH forme des passionnés de langues, de cultures et de sciences humaines. Ainsi, si vous aimez comprendre les sociétés, parler plusieurs langues, ou analyser les grands enjeux du monde, c’est l’école idéale pour développer votre pensée et construire une carrière dans l’enseignement, la recherche, la coopération ou la culture."
      }),
      formatSchoolPrograms({
        id: "up-9",
        name: "Ecole Nationale de Statistique, de Planification et de Démographie (ENSPD)",
        admissionRequirements: ["Concours"],
        location: "Parakou",
        country: "Bénin",
        programs: [
          "Statistique Appliquées",
          "Planification et Suivi-Evaluation"  
        ],
        contact: {
          email: "flash@up.bj",
          phone: "+229 23 61 07 07",
          website: "www.flash.up.bj"
        },
        description: "Formation en statistiques, planification et évaluation.",
        goodToKnow: "L’ENSPD forme des spécialistes des chiffres et des plans d’action pour le développement. Ainsi, si vous voulez aider à prendre de bonnes décisions pour le pays, suivre l’impact des projets ou résoudre des problèmes concrets avec des données, c’est l’école parfaite pour vous lancer."
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
        admissionRequirements: ["Concours"],
        location: "LOKOSSA",
        country: "Bénin",
        programs: [
          "Electrotechnique",
          "Electronique",
          "Comptabilité",
          "Secrétariat",
          "Génie Civil",
          "Economie",
          "Mécanique Automobile",
          "Fabrication Mécanique",
          "Economie Familiale et Sociale",
          "Hôtellerie-Restauration",
          "Froid et Climatisation",
          "Energies Renouvelables",
          "Production Animale",
          "Production Végétale",
          "Métiers des Modes et Vetements"

        ],
        contact: {
          email: "enset@unstim.bj",
          phone: "+229 22 10 10 10",
          website: "www.enset.unstim.bj"
        },
        description: "Formation des enseignants et techniciens supérieurs pour les lycées techniques.",
        goodToKnow: "L’ENSET forme les enseignants et techniciens qui font tourner les ateliers, les chantiers, les cuisines ou les fermes. Ainsi, si vous voulez maîtriser un vrai métier, transmettre votre savoir et contribuer au développement technique du pays, cette école est faite pour vous."
      }),
      formatSchoolPrograms({
        id: "unstim-2",
        name: "Institut National Supérieur de Technologie Industrielle (INSTI)",
        admissionRequirements: ["Classement"],
        location: "LOKOSSA",
        country: "Bénin",
        programs: [
          "Génie Civil",
          "Génie Energétique",
          "Génie Electrique et Informatique",
          "Maintenance des système",
          "Génie Mécanique et Productique"
        ],
        contact: {
          email: "insti@unstim.bj",
          phone: "+229 22 20 20 20",
          website: "www.insti.unstim.bj"
        },
        description: "Formation d'ingénieurs technologues immédiatement opérationnels.",
        goodToKnow: "L’INSTI forme des ingénieurs capables de concevoir, entretenir ou moderniser les machines et les infrastructures du pays. Ainsi, si vous aimez la technologie, les systèmes industriels et les solutions concrètes, c’est l’école parfaite pour construire l’avenir avec vos mains et votre tête."
      }),
      formatSchoolPrograms({
        id: "unstim-3",
        name: "Institut National Supérieur des Classes Préparatoires au Etudes d'Ingénieurs (INSPEI)",
        admissionRequirements: ["Concours"],
        location: "Abomey",
        country: "Bénin",
        programs: ["Sciences et Techniques de l'Ingénieur"],
        contact: {
          email: "inspei@unstim.bj",
          phone: "+229 22 30 30 30",
          website: "www.inspei.unstim.bj"
        },
        description: "Préparation intensive aux grandes écoles d'ingénieurs africaines et internationales.",
        goodToKnow: "L’INSPEI prépare les meilleurs talents aux grandes écoles d’ingénieurs en Afrique et dans le monde. Ainsi, si vous aimez les sciences, les défis et que vous visez l’excellence, c’est l’étape idéale pour vous hisser au sommet."
      }),
      formatSchoolPrograms({
        id: "unstim-4",
        name: "Ecole Normale Supérieure de Natitingou (ENS/Nati)",
        admissionRequirements: ["Concours"],
        location: "Natitingou",
        country: "Bénin",
        programs: [
          "Mathématiques et Informatique",
          "Physique, Chimie et Technologie",
          "Sciences de Vie et de la Terre"
        ],
        contact: {
          email: "ensnati@unstim.bj",
          phone: "+229 23 40 40 40",
          website: "www.ensnati.unstim.bj"
        },
        description: "Centre d'excellence en biosciences appliquées aux enjeux du Nord-Bénin.",
        goodToKnow: "L’ENS/Nati forme des enseignants et chercheurs en sciences exactes, avec une attention particulière aux réalités du Nord-Bénin. Ainsi, si vous aimez les maths, la nature ou la science utile au quotidien, vous y apprendrez à transmettre et à explorer ce qui fait avancer nos communautés."
      }),
      formatSchoolPrograms({
        id: "unstim-5",
        name: "Ecole Nationale Supérieure des Biosciences et Biotechnologies Appliquées (ENSBBA)",
        admissionRequirements: ["Classement"],
        location: "Dassa-Zoumè",
        country: "Bénin",
        programs: [
          "Biotechnologie Pharmaceutique",
          "Génétique Biotechnologies et Applications",
          "Génie Biologique et Bioprocédés",
          "Diététique des aliments et Nutrition"
        ],
        contact: {
          email: "ensbba@unstim.bj",
          phone: "+229 22 50 50 50",
          website: "www.ensbba.unstim.bj"
        },
        description: "Formation aux biotechnologies pour la santé et l'agro-industrie.",
        goodToKnow: "L’ENSBBA vous plonge au cœur des biotechnologies de la santé, de l’alimentation et des bio-industries. Si vous rêvez de produire des médicaments, de comprendre les gènes ou d’innover dans l’agroalimentaire, c’est ici que ça commence."
      }),
      formatSchoolPrograms({
        id: "unstim-6",
        name: "Faculté des Sciences et Techniques de Natitingou (FAST/Nati)",
        admissionRequirements: ["Baccalauréat série C, D, E", "Classement", "Maths, PCT"],
        location: "Natitingou",
        country: "Bénin",
        programs: [
          "Mathématiques Informatiques",
          "Physique Chimie"
        ],
        contact: {
          email: "fastnati@unstim.bj",
          phone: "+229 23 60 60 60",
          website: "www.fastnati.unstim.bj"
        },
        description: "Formation adaptée aux défis techniques des zones montagneuses.",
        goodToKnow: "La FAST/Nati forme aux sciences exactes avec un focus sur les technologies adaptées aux environnements montagneux, comme les constructions antisismiques et les solutions énergétiques durables."
      }),
      formatSchoolPrograms({
        id: "unstim-7",
        name: "Ecole Nationale Supérieure de Génie Energétique et Procédés (ENSGEP)",
        admissionRequirements: ["Classement"],
        location: "Abomey",
        country: "Bénin",
        programs: [
          "Friod et Climatisation",
          "Equipements motorisés"
        ],
        contact: {
          email: "ensgep@unstim.bj",
          phone: "+229 22 70 70 70",
          website: "www.ensgep.unstim.bj"
        },
        description: "Expertise en solutions énergétiques durables pour l'Afrique.",
        goodToKnow: "L'ENSGEP innove dans les systèmes énergétiques adaptés à l'Afrique, notamment à travers la conception de centrales solaires hybrides et de solutions techniques pour l'efficacité énergétique locale."
      }),
      formatSchoolPrograms({
        id: "unstim-8",
        name: "Ecole Nationale Supérieure des Travaux Publics (ENSTP)",
        admissionRequirements: ["Baccalauréat série C, D, F", "Classement", "Maths, PCT"],
        location: "Abomey",
        country: "Bénin",
        programs: [
          "Génie Civil",
          "Génie Géomatique Appliquée",
          "Architecture et Urbanisme",
          "Hydraulique et Assainissement"
        ],
        contact: {
          email: "enstp@unstim.bj",
          phone: "+229 22 80 80 80",
          website: "www.enstp.unstim.bj"
        },
        description: "Référence pour les infrastructures urbaines et hydrauliques.",
        goodToKnow: "L'ENSTP forme les ingénieurs qui conçoivent les ponts, réseaux d’eau potable et infrastructures urbaines essentielles au développement durable du Bénin et de l’Afrique."
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
