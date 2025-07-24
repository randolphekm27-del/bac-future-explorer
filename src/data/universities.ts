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
        name: "Institut Régional de Santé Publique (IRSP)",
        admissionRequirements: ["Baccalauréat série C, D", "Classement", "SVT, PCT, Maths"],
        location: "Ouidah",
        country: "Bénin",
        programs: ["Santé publique polyvalente"],
        contact: {
          email: "irsp@uac.bj",
          phone: "+229 21 34 56 78",
          website: "www.irsp.uac.bj"
        },
        description: "Formation en santé publique et épidémiologie pour répondre aux enjeux sanitaires locaux.",
        goodToKnow: "L'IRSP est un pilier de la santé communautaire au Bénin. Les étudiants bénéficient de stages dans des centres de santé ruraux et des partenariats avec l'OMS. Les diplômés agissent comme agents de prévention du paludisme, de la tuberculose et du VIH, avec un taux d'insertion de 95%. Une particularité : des modules sur les médecines traditionnelles validées scientifiquement."
      },
      {
        id: "uac-2",
        name: "Faculté des Lettres, Arts et Sciences Humaines-Adjarra (FLASH-Adjarra)",
        admissionRequirements: ["Baccalauréat série A1, A2, B, C, D, DEAT, DT/STI", "Classement", "Français, Hist-Géo, Maths (selon filière)"],
        location: "Adjarra",
        country: "Bénin",
        programs: ["Géographie et Aménagement", "Socio-Anthropologie", "Anglais"],
        contact: {
          email: "flash@uac.bj",
          phone: "+229 22 44 66 88",
          website: "www.flash.uac.bj"
        },
        description: "Formation pluridisciplinaire en sciences humaines avec une forte dimension terrain.",
        goodToKnow: "La FLASH-Adjarra se distingue par ses projets concrets : cartographie participative avec les municipalités, enquêtes ethnographiques. La filière Anglais offre des doubles diplômes avec des universités canadiennes. Débouchés : enseignement, ONG (UNICEF), ou recherche au LASDEL. Un atout : une médiathèque spécialisée en patrimoine oral béninois."
      },
      // ... (Les autres écoles suivent le même modèle)
        {
          id: "uac-3",
          name: "Institut de Mathématiques et de Sciences Physiques (IMSP)",
          admissionRequirements: ["Baccalauréat série C, D", "Classement", "Maths, PCT, Français"],
          location: "Abomey-Calavi",
          country: "Bénin",
          programs: ["Classes préparatoires MPSI/PCSI"],
          contact: {
            email: "imsp@uac.bj",
            phone: "+229 21 30 40 50",
            website: "www.imsp.uac.bj"
          },
          description: "Pôle d'excellence pour les sciences fondamentales préparant aux grandes écoles d'ingénieurs.",
          goodToKnow: "L'IMSP est le fleuron scientifique du Bénin avec un taux de 70% de réussite aux concours internationaux. Les élèves bénéficient de laboratoires dernier cri et de partenariats avec l'École Polytechnique (France). Particularité : programme de tutorat avec les anciens élèves travaillant au CERN ou à la NASA."
        },
        {
          id: "uac-4",
          name: "Faculté des Lettres, Langues, Arts et Communications (FLLAC)",
          admissionRequirements: ["Baccalauréat série A1, A2, B, C, D", "Classement", "Langues vivantes/Français selon filière"],
          location: "Abomey-Calavi",
          country: "Bénin",
          programs: ["Allemand", "Anglais", "Espagnol", "Lettres Modernes", "Sciences du Langage"],
          contact: {
            email: "fllac@uac.bj",
            phone: "+229 21 25 36 47",
            website: "www.fllac.uac.bj"
          },
          description: "Centre d'excellence en langues étrangères et communication interculturelle.",
          goodToKnow: "La FLLAC cultive le multilinguisme avec des certifications DELF/Goethe-Institut. Les étudiants en Allemand effectuent des stages à la GIZ, ceux en Anglais travaillent sur des sous-titrages de films nigérians. Un atout unique : le 'Labo des Contes' où l'on numérise les traditions orales en langues locales."
        },
        {
          id: "uac-5",
          name: "Institut National des Métiers d'Arts (INMAAC)",
          admissionRequirements: ["Baccalauréat série A1, A2, B, C, D", "Classement + Pratique artistique", "Français/Histoire de l'art"],
          location: "Abomey",
          country: "Bénin",
          programs: ["Arts Dramatiques", "Arts Plastiques", "Musique", "Cinéma"],
          contact: {
            email: "inmaac@uac.bj",
            phone: "+229 23 55 77 99",
            website: "www.inmaac.uac.bj"
          },
          description: "Formation aux métiers des arts vivants et visuels ancrée dans le patrimoine béninois.",
          goodToKnow: "Installé près des Palais Royaux d'Abomey (UNESCO), l'INMAAC mêle techniques contemporaines et savoir-faire traditionnels. Les étudiants créent des spectacles avec le FITHEB et exposent à la Fondation Zinsou. Débouchés : metteurs en scène, conservateurs de musée, ou entrepreneurs culturels (90% d'insertion)."
        },
        {
          id: "uac-6",
          name: "Centre Interfacultaire de Formation en Environnement (CIFRED)",
          admissionRequirements: ["Baccalauréat série C, D, EA", "Classement", "SVT, PCT, Maths"],
          location: "Abomey-Calavi",
          country: "Bénin",
          programs: ["Environnement et Santé publique"],
          contact: {
            email: "cifred@uac.bj",
            phone: "+229 21 88 77 66",
            website: "www.cifred.uac.bj"
          },
          description: "Expertise en gestion durable des écosystèmes et santé environnementale.",
          goodToKnow: "Le CIFRED agit concrètement contre la pollution du lac Nokoué et l'érosion côtière. Les étudiants utilisent des drones pour cartographier les mangroves et collaborent avec le PNUD. Débouchés : experts OMS, responsables ONG (Greenpeace Afrique), ou créateurs de startups vertes."
        },
        {
          id: "uac-7",
          name: "Institut de Cadre de Vie (ex-IGATE)",
          admissionRequirements: ["Baccalauréat série A1, A2, B, C, D", "Classement", "Maths, Géographie"],
          location: "Abomey-Calavi",
          country: "Bénin",
          programs: ["Gestion urbaine", "Changements climatiques", "Géomatique"],
          contact: {
            email: "igate@uac.bj",
            phone: "+229 21 77 66 55",
            website: "www.igate.uac.bj"
          },
          description: "Formation en aménagement durable des territoires et résilience climatique.",
          goodToKnow: "Pionnier des 'villes intelligentes' en Afrique de l'Ouest, l'institut forme aux SIG et à la planification écologique. Projets remarquables : réaménagement du marché Dantokpa avec la mairie de Cotonou. Partenariats avec l'Institut de Géographie de Paris."
        },
        {
          id: "uac-8",
          name: "Institut National Médico-Sanitaire (INMeS)",
          admissionRequirements: ["Baccalauréat série C, D", "Concours", "SVT, PCT"],
          location: "Cotonou",
          country: "Bénin",
          programs: ["Sciences Infirmières", "Sciences Obstétricales"],
          contact: {
            email: "inmes@uac.bj",
            phone: "+229 21 22 33 44",
            website: "www.inmes.uac.bj"
          },
          description: "Formation pratique aux métiers de la santé avec équipements haute-fidélité.",
          goodToKnow: "L'INMeS réduit la mortalité maternelle grâce à des simulateurs d'accouchement dernier cri. Les étudiants effectuent 300 heures de stage au CNHU. 100% des diplômés trouvent un emploi en 3 mois, notamment dans la lutte contre les épidémies (Ebola, COVID-19)."
        },
        {
          id: "uac-9",
          name: "Institut National de l'Eau (INE)",
          admissionRequirements: ["Baccalauréat série C, D, EA", "Classement", "Maths, SVT"],
          location: "Abomey-Calavi",
          country: "Bénin",
          programs: ["Hydrologie", "Hydrogéologie", "Génie rural"],
          contact: {
            email: "ine@uac.bj",
            phone: "+229 21 55 44 33",
            website: "www.ine.uac.bj"
          },
          description: "Centre africain de référence pour la gestion intégrée des ressources en eau.",
          goodToKnow: "L'INE forme les experts qui assainissent le fleuve Ouémé et développent l'irrigation au Nord-Bénin. Projet phare : pompes solaires pour les maraîchers de Dangbo. Les diplômés travaillent à l'UNESCO-IHE ou créent des entreprises sociales (kiosques à eau potable)."
        },
        {
          id: "uac-10",
          name: "École Nationale d'Économie Appliquée (ENEAM)",
          admissionRequirements: ["Baccalauréat série B, C, D", "Classement", "Maths, Économie"],
          location: "Abomey-Calavi",
          country: "Bénin",
          programs: ["Marketing", "Finance", "Gestion RH"],
          contact: {
            email: "eneam@uac.bj",
            phone: "+229 21 36 00 74",
            website: "www.eneam.uac.bj"
          },
          description: "Leader en formation managériale avec accréditation internationale CAMES.",
          goodToKnow: "Classée parmi les top 5 écoles de management ouest-africaines, l'ENEAM offre des doubles diplômes avec HEC Montréal. Ses incubateurs accompagnent la création de 50 startups/an. Réseau alumni présent dans toutes les grandes banques (Ecobank, BOA) et ministères."
        },
        {
          id: "uac-11",
          name: "École du Patrimoine Africain (EPA)",
          admissionRequirements: ["Baccalauréat série A1, A2, B", "Classement + Entretien", "Histoire"],
          location: "Porto-Novo",
          country: "Bénin",
          programs: ["Conservation du patrimoine"],
          contact: {
            email: "epa@uac.bj",
            phone: "+229 20 11 22 33",
            website: "www.epa.uac.bj"
          },
          description: "Unique en Afrique francophone pour la muséologie et l'archivage des traditions.",
          goodToKnow: "L'EPA restaure les trésors royaux d'Abomey et forme aux techniques de conservation anti-termites. Partenariats avec le Louvre et le British Museum. Débouchés : conservateurs dans les musées (Ouidah), experts UNESCO, ou guides spécialisés dans le tourisme culturel."
        },
        {
          id: "uac-12",
          name: "Faculté des Sciences Humaines et Sociales (FASHS)",
          admissionRequirements: ["Baccalauréat série A1, A2, B, C, D", "Classement", "Français, Philosophie"],
          location: "Abomey-Calavi",
          country: "Bénin",
          programs: ["Psychologie", "Journalisme", "Administration"],
          contact: {
            email: "fashs@uac.bj",
            phone: "+229 21 66 77 88",
            website: "www.fashs.uac.bj"
          },
          description: "Approche interdisciplinaire des enjeux sociaux et médiatiques contemporains.",
          goodToKnow: "La FASHS abrite le seul master en journalisme d'investigation du Bénin, avec des workshops animés par RFI. La filière Psychologie collabore avec les hôpitaux psychiatriques. Particularité : un média étudiant primé (radio/web) couvrant les questions de développement."
        },
        {
          id: "uac-13",
          name: "École Nationale d'Administration (ENA)",
          admissionRequirements: ["Baccalauréat série A1, A2, B, C, D", "Concours rigoureux", "Culture générale"],
          location: "Porto-Novo",
          country: "Bénin",
          programs: ["Administration publique", "Finances publiques"],
          contact: {
            email: "ena@uac.bj",
            phone: "+229 20 99 88 77",
            website: "www.ena.uac.bj"
          },
          description: "Pépinière de l'élite administrative béninoise depuis 1964.",
          goodToKnow: "L'ENA forme les hauts fonctionnaires qui dirigent les ministères. Cours dispensés par d'anciens ministres et experts de la Banque Mondiale. Concours d'entrée très sélectif (5% de réussite). Les diplômés occupent des postes clés comme Secrétaire Général de Gouvernement."
        },
        {
          id: "uac-14",
          name: "Institut de Formation et de Recherche en Informatique (IFRI)",
          admissionRequirements: ["Baccalauréat série C, D", "Classement", "Maths, Informatique"],
          location: "Abomey-Calavi",
          country: "Bénin",
          programs: ["Intelligence Artificielle", "Cybersécurité", "Systèmes embarqués"],
          contact: {
            email: "ifri@uac.bj",
            phone: "+229 21 44 55 66",
            website: "www.ifri.uac.bj"
          },
          description: "Pionnier des nouvelles technologies en Afrique francophone.",
          goodToKnow: "L'IFRI développe des solutions pour l'agriculture (drones de surveillance des champs) et la santé (diagnostic IA du paludisme). Partenariats avec Google Africa et l'INRIA. Les startups issues de l'IFRI lèvent en moyenne 50 millions FCFA dès leur première année."
        },
        {
          id: "uac-15",
          name: "Faculté des Sciences Agronomiques (FSA)",
          admissionRequirements: ["Baccalauréat série C, D, EA", "Classement", "SVT, Maths"],
          location: "Abomey-Calavi",
          country: "Bénin",
          programs: ["Agronomie", "Elevage", "Foresterie"],
          contact: {
            email: "fsa@uac.bj",
            phone: "+229 21 33 44 55",
            website: "www.fsa.uac.bj"
          },
          description: "Référence régionale pour l'agriculture durable et la sécurité alimentaire.",
          goodToKnow: "La FSA mène des recherches sur les cultures résistantes à la sécheresse et forme les entrepreneurs agricoles. Ferme-école de 50ha avec système d'irrigation solaire. Débouchés : responsables de coopératives, experts FAO, ou créateurs de fermes agroécologiques comme 'AgriTech Benin'."
        },
        {
          id: "uac-16",
          name: "Faculté des Sciences de la Santé (FSS)",
          admissionRequirements: ["Baccalauréat série C, D", "Concours", "SVT, PCT"],
          location: "Cotonou",
          country: "Bénin",
          programs: ["Médecine", "Pharmacie", "Kinésithérapie"],
          contact: {
            email: "fss@uac.bj",
            phone: "+229 21 77 88 99",
            website: "www.fss.uac.bj"
          },
          description: "Formation médicale complète avec hôpital universitaire de référence.",
          goodToKnow: "La FSS dispose du seul simulateur de patient haute-fidélité d'Afrique de l'Ouest. Stages au CNHU et dans les zones rurales. 80% des médecins béninois en sont diplômés. Particularité : programme de télé-médecine avec la diaspora en France."
        },
        {
          id: "uac-17",
          name: "École Polytechnique d'Abomey-Calavi (EPAC)",
          admissionRequirements: ["Baccalauréat série C, D, E", "Classement", "Maths, Physique"],
          location: "Abomey-Calavi",
          country: "Bénin",
          programs: ["Génie Civil", "Génie Electrique", "Génie Chimique"],
          contact: {
            email: "epac@uac.bj",
            phone: "+229 21 60 70 80",
            website: "www.epac.uac.bj"
          },
          description: "Formation d'ingénieurs orientée vers les défis industriels africains.",
          goodToKnow: "L'EPAC collabore avec des entreprises comme SONACOP et MTN sur des projets concrets (ponts, réseaux 5G). Atelier équipé de découpeuses laser et imprimantes 3D. Les diplômés créent des PME technologiques ou intègrent des multinationales comme Bolloré Africa Logistics."
        },
        {
          id: "uac-18",
          name: "Haute École de Commerce International (HERCI)",
          admissionRequirements: ["Baccalauréat série B, C, D", "Classement", "Maths, Langues"],
          location: "Cotonou",
          country: "Bénin",
          programs: ["Commerce International", "Logistique"],
          contact: {
            email: "herci@uac.bj",
            phone: "+229 21 50 60 70",
            website: "www.herci.uac.bj"
          },
          description: "Spécialiste du négoce et des chaînes d'approvisionnement en Afrique.",
          goodToKnow: "L'HERCI forme aux spécificités des marchés africains avec des études de cas réels (port de Cotonou, corridor Abidjan-Lagos). Programme d'échange avec HEC Montréal. Débouchés : responsables import-export, acheteurs internationaux (Total, CFAO), ou créateurs de startups logistiques."
        },
        {
          id: "uac-19",
          name: "Institut National de l'Éducation Physique (INEP)",
          admissionRequirements: ["Baccalauréat série A1, A2, B, C, D", "Tests sportifs", "EPS"],
          location: "Porto-Novo",
          country: "Bénin",
          programs: ["Entraînement sportif", "Kinésiologie"],
          contact: {
            email: "inep@uac.bj",
            phone: "+229 20 77 66 55",
            website: "www.inep.uac.bj"
          },
          description: "Centre d'excellence pour les métiers du sport et de la rééducation.",
          goodToKnow: "L'INEP a formé les coachs des équipes nationales de football et d'athlétisme. Infrastructure unique : piscine olympique et laboratoire de biomécanique. Partenariats avec la FIFA et le Comité Olympique. Débouchés : préparateurs physiques, managers de clubs, ou experts en santé par le sport."
        },
        {
          id: "uac-20",
          name: "École Normale Supérieure de Porto-Novo (ENS)",
          admissionRequirements: ["Baccalauréat série A1, A2, B, C, D", "Concours", "Discipline majeure"],
          location: "Porto-Novo",
          country: "Bénin",
          programs: ["Pédagogie", "Sciences Éducatives"],
          contact: {
            email: "ens@uac.bj",
            phone: "+229 20 88 99 00",
            website: "www.ens.uac.bj"
          },
          description: "Institution historique formant les enseignants-chercheurs depuis 1962.",
          goodToKnow: "L'ENS est le vivier des futurs professeurs d'université et inspecteurs pédagogiques. Méthodes innovantes comme les classes inversées adaptées au contexte béninois. Particularité : un programme de recherche sur les pédagogies en langues nationales (fon, yoruba)."
        },
        {
          id: "uac-21",
          name: "Faculté de Droit et Science Politique (FADESP)",
          admissionRequirements: ["Baccalauréat série A1, A2, B, C, D", "Classement", "Culture juridique"],
          location: "Abomey-Calavi",
          country: "Bénin",
          programs: ["Droit Public", "Sciences Politiques"],
          contact: {
            email: "fadesp@uac.bj",
            phone: "+229 21 70 80 90",
            website: "www.fadesp.uac.bj"
          },
          description: "Berceau de l'élite judiciaire et politique béninoise.",
          goodToKnow: "La FADESP organise des simulations de procès à la Cour Constitutionnelle et des modèles ONU. Anciens élèves : ministres, juges à la CEDEAO. Bibliothèque de 50 000 ouvrages juridiques. Débouchés : avocats, diplomates, ou experts en gouvernance (PNUD, Banque Mondiale)."
        },
        {
          id: "uac-22",
          name: "Faculté des Sciences Économiques (FASEG)",
          admissionRequirements: ["Baccalauréat série B, C, D", "Classement", "Maths, Économie"],
          location: "Abomey-Calavi",
          country: "Bénin",
          programs: ["Économétrie", "Banque-Finance"],
          contact: {
            email: "faseg@uac.bj",
            phone: "+229 21 55 66 77",
            website: "www.faseg.uac.bj"
          },
          description: "Pôle d'excellence en analyse économique quantitative.",
          goodToKnow: "La FASEG forme les experts qui élaborent les politiques économiques nationales. Laboratoire de data science équipé de Bloomberg Terminal. Partenariats avec la BCEAO et le FMI. Les diplômés travaillent dans les banques (Ecobank), ministères, ou comme consultants pour l'UEMOA."
        },
        {
          id: "uac-23",
          name: "Faculté des Sciences et Techniques (FAST)",
          admissionRequirements: ["Baccalauréat série C, D", "Classement", "Maths, Physique"],
          location: "Abomey-Calavi",
          country: "Bénin",
          programs: ["Mathématiques", "Énergies renouvelables"],
          contact: {
            email: "fast@uac.bj",
            phone: "+229 21 40 50 60",
            website: "www.fast.uac.bj"
          },
          description: "Formation scientifique orientée vers l'innovation technologique.",
          goodToKnow: "La FAST développe des solutions solaires pour les zones rurales et des biotechnologies agricoles. Projet phare : microcentrales électriques dans le Borgou. Débouchés : chercheurs (Institut de Mathématiques de Trieste), ingénieurs dans les énergies vertes, ou entrepreneurs tech."
        },
        {
          id: "uac-24",
          name: "Institut Confucius",
          admissionRequirements: ["Baccalauréat série A1, A2, B, C, D", "Entretien", "Mandarin (débutants acceptés)"],
          location: "Abomey-Calavi",
          country: "Bénin",
          programs: ["Langue Chinoise", "Études interculturelles"],
          contact: {
            email: "confucius@uac.bj",
            phone: "+229 21 90 12 34",
            website: "www.confucius.uac.bj"
          },
          description: "Centre officiel pour l'apprentissage du chinois et les échanges sino-béninois.",
          goodToKnow: "L'Institut offre des bourses d'études en Chine et des stages dans des entreprises chinoises au Bénin (CCECC, Huawei). Cours de calligraphie et de tai-chi. Débouchés : traducteurs, guides touristiques pour les investisseurs chinois, ou étudiants dans les universités partenaires (Pékin, Shanghai)."
        },
      {
        id: "uac-26",
        name: "Institut Confucius",
        admissionRequirements: ["Baccalauréat série A1, A2, B, C, D", "Entretien", "Langue Chinoise (base)"],
        location: "Abomey-Calavi",
        country: "Bénin",
        programs: ["Langue Chinoise", "Didactique du Chinois"],
        contact: {
          email: "confucius@uac.bj",
          phone: "+229 21 90 12 34",
          website: "www.confucius.uac.bj"
        },
        description: "Centre d'excellence pour l'apprentissage du mandarin et les échanges culturels sino-béninois.",
        goodToKnow: "L'Institut Confucius est votre passerelle vers la Chine ! Avec des professeurs natifs et des partenariats avec l'Université de Pékin, les étudiants peuvent obtenir des bourses pour étudier en Chine. Les diplômés travaillent comme traducteurs pour des entreprises chinoises (CCECC, Huawei) ou guides touristiques à Ganvié. Un + : des ateliers de calligraphie et de tai-chi au programme."
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
      goodToKnow: "La FA de Parakou est leader en innovation agricole avec une ferme-école de 100ha où les étudiants testent des techniques de culture résilientes au climat. Partenariats avec le CIRAD et la FAO. Les diplômés créent des coopératives agricoles ou travaillent dans des projets comme le PADAP (Plan National d'Investissement Agricole)."
    },
    {
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
      goodToKnow: "La FM dispose d'un CHU de référence régionale où les étudiants réalisent 50 accouchements et 200 consultations en moyenne durant leur cursus. Programme pionnier en télémédecine pour les zones rurales du Borgou. 85% des diplômés servent dans le système public béninois."
    },
    {
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
      goodToKnow: "Centre de formation des 'détectives de maladies' qui ont endigué les épidémies d'Ebola au Nord-Bénin. Méthodes actives avec simulations de crises sanitaires. Débouchés : OMS, ministère de la Santé, ou ONG comme Médecins Sans Frontières."
    },
    {
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
      goodToKnow: "L'IFSI forme 70% du personnel infirmier du Nord-Bénin avec un programme axé sur les réalités rurales (accouchements sans électricité, médecine traditionnelle validée). Laboratoire de simulation avec mannequins haute-fidélité. Taux de réussite au diplôme d'État : 92%."
    },
    {
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
      goodToKnow: "L'IUT collabore avec des entreprises locales comme la SONACOP et les transitaires du port de Cotonou. Programme alternance avec 6 mois en entreprise. Spécialité logistique très prisée pour les corridors Abidjan-Lagos et Niger-Bénin."
    },
    {
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
      goodToKnow: "La FASEG forme les cadres des institutions comme la Chambre de Commerce du Borgou. Projet phare : incubateur qui a lancé 30 startups agri-tech. Cours en partenariat avec l'Université de Lomé et l'ENAM du Burkina Faso."
    },
    {
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
      goodToKnow: "La FDSP est réputée pour ses cliniques juridiques offrant des consultations gratuites aux populations. Spécialisation en droit pastoral et gestion des conflits agriculteurs-éleveurs. Anciens élèves : juges à la Cour d'Appel de Parakou et médiateurs communautaires."
    },
    {
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
      goodToKnow: "La FLASH abrite le seul département d'études peules (Fulfulde) du Bénin. Projets avec les guides touristiques de la Pendjari et les ONG de développement. Bibliothèque spécialisée en traditions orales bariba et dendi."
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
        name: "Ecole Normale Supérieure de l'Enseignement Technique (ENSET)",
        admissionRequirements: ["Baccalauréat série B, C, D, G", "Concours", "Culture générale, Maths/Economie"],
        location: "Abomey",
        country: "Bénin",
        programs: [
          "Professeur adjoint en Lycées Techniques",
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
        goodToKnow: "L'ENSET est le fleuron de la formation technique au Bénin, avec des ateliers équipés de machines CNC et robots industriels. Partenariats avec l'AUF et l'UNESCO pour la modernisation des curricula. 95% des diplômés obtiennent un poste dans l'enseignement public ou les entreprises partenaires comme la SBEE."
      },
      {
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
        goodToKnow: "L'INSTI dispose du plus grand parc machines du Bénin (tour-fraiseuse numériques, bancs de test moteur). Projets concrets avec les entreprises comme le chantier du stade de l'Amitié. Spécialité froid/climatisation très prisée par les hôtels et sociétés minières."
      },
      {
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
        goodToKnow: "L'INSPEI offre le taux de réussite le plus élevé aux concours d'entrée des écoles comme l'INP-HB (Côte d'Ivoire) et l'ESMT Dakar. Programme en partenariat avec l'École Polytechnique Paris. Bibliothèque ouverte 24h/24 avec accès aux annales des 20 dernières années."
      },
      {
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
        goodToKnow: "L'ENS/Nati mène des recherches sur les plantes médicinales de l'Atakora en collaboration avec les guérisseurs traditionnels. Laboratoire de pointe pour l'analyse des maladies tropicales. Débouchés dans les hôpitaux régionaux et les ONG sanitaires."
      },
      {
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
        goodToKnow: "Pionnière dans la production locale de médicaments à base de plantes, l'ENSBBA a breveté 3 formules antipaludéennes. Partenariats avec les laboratoires béninois (LABIO) et l'Institut Pasteur. Stages obligatoires dans les unités de production pharmaceutique."
      },
      {
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
        goodToKnow: "La FAST/Nati spécialisée dans les techniques de construction antisismique et les routes en terrain accidenté. Projets concrets sur le parc W-Arly-Pendjari. Unique au Bénin : formation à la maintenance des engins miniers avec des équipements Caterpillar."
      },
      {
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
        goodToKnow: "L'ENSGEP a conçu des centrales solaires hybrides pour 50 villages du Borgou. Laboratoire unique en Afrique de l'Ouest pour le test de pompes à chaleur. Partenariats avec Total Energies et la BAD pour l'électrification rurale."
      },
      {
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
        goodToKnow: "L'ENSTP forme les experts qui construisent les ponts et réseaux d'eau potable du Bénin. Méthodes actives avec chantiers-écoles réels. 100% des diplômés trouvent un emploi dans les 6 mois, notamment dans les grands projets comme l'adduction d'eau de la Donga."
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
        "id": "una-1",
        "name": "Université Nationale d’Agriculture",
        "admissionRequirements": ["Baccalauréat série C, D, E, F1, F2, F3, DEAT (selon filière)", "Classement aux examens", "Matières spécifiques (Maths, SVT, SPCT, etc.)"],
        "location": "Non précisé dans le document",
        "country": "Bénin",
        "programs": [
          "Agriculture (EAG)",
          "Horticulture et Aménagement des Espaces Verts (EHAEV)",
          "Industrie des Produits Agro-Alimentaires et Nutrition Humaine (IPA-NH)",
          "Industrie des Bio-Ressources (IBR)",
          "Génie de Conditionnement Emballage et Stockage des Produits Alimentaires (GCES)",
          "Aquaculture (EAq)",
          "Gestion et Production Végétale et Semencière (EGPVS)",
          "Agroéquipement (EGR)",
          "Electrification Rurale et Energies Renouvelables (ERER)",
          "Infrastructures Hydrauliques et Assainissement (EGR)",
          "Productions et Santé Animales (EGER)",
          "Finance Agricole (EAPA)",
          "Gestion des Exploitations Agricoles et Entreprises Rurales (EAPA)",
          "Sociologie Rurale et Vulgarisation Agricole (ESRNA)",
          "Foresterie Tropicale (EFort)"
        ],
        "contact": {
          "email": "contact@una.bj",
          "phone": "+229 21 23 45 67",
          "website": "www.una.bj"
        },
        "description": "Institution leader en formation agricole et agro-industrielle, offrant des programmes techniques et professionnels pour répondre aux besoins du secteur agricole et rural.",
        "goodToKnow": "L'Université Nationale d’Agriculture est un pôle d'excellence pour les métiers verts au Bénin. Avec des quotas d'admission compétitifs et des filières alignées sur les besoins du marché, elle forme des techniciens hautement qualifiés en agriculture, agroalimentaire et gestion des ressources naturelles. Les étudiants bénéficient d'une pédagogie pratique, avec accès à des fermes-écoles et des partenariats industriels. Particularité : certaines filières comme l'agroéquipement et l'électrification rurale sont rares dans la sous-région, offrant des débouchés immédiats."
      },
      {
        "id": "una-2",
        "name": "Ecole d’Agriculture (EAG)",
        "admissionRequirements": ["Baccalauréat série C, D, DEAT/Résine et espaces", "Classement", "Matières : SVT (pour C/D), Maths, SPCT"],
        "location": "Non précisé dans le document",
        "country": "Bénin",
        "programs": ["Agriculture"],
        "contact": {
          "email": "eag@una.bj",
          "phone": "+229 21 23 45 68",
          "website": "www.una.bj/eag"
        },
        "description": "Formation technique en agriculture, production végétale et gestion des entreprises agricoles.",
        "goodToKnow": "Cette filière forme des techniciens polyvalents capables d'intervenir sur toute la chaîne de valeur agricole. Le programme intègre des modules innovants comme l'agriculture digitale et les biotechnologies. Avec seulement 39 places disponibles, la sélection est rigoureuse mais les diplômés sont très recherchés par les coopératives agricoles et les sociétés d'agrobusiness."
      },
      {
        "id": "una-3",
        "name": "Ecole d’Horticulture et d’Aménagement des Espaces Verts (EHAEV)",
        "admissionRequirements": ["Baccalauréat série C, D, DEAT PV et Foresterie", "Classement", "Matières : SVT, Maths, SPCT"],
        "location": "Non précisé dans le document",
        "country": "Bénin",
        "programs": ["Horticulture et Aménagement des espaces Verts"],
        "contact": {
          "email": "ehaev@una.bj",
          "phone": "+229 21 23 45 69",
          "website": "www.una.bj/ehaev"
        },
        "description": "Spécialisée dans la production horticole, l'aménagement paysager et la gestion des espaces verts.",
        "goodToKnow": "Avec l'urbanisation croissante en Afrique, cette filière offre d'excellentes opportunités. Les étudiants apprennent à concevoir des jardins urbains, gérer des pépinières et utiliser des techniques comme l'hydroponie. Le quota de 68 places en fait l'une des filières les plus accessibles. Les diplômés travaillent souvent pour les municipalités ou créent leurs entreprises d'aménagement paysager."
      },
      {
        "id": "una-4",
        "name": "Industrie des Produits Agro-Alimentaires et Nutrition Humaine (IPA-NH)",
        "admissionRequirements": ["Baccalauréat série C, D, DEAT/Nutrition et Technologie Alimentaire", "Classement", "Matières : SVT, Maths, SPCT"],
        "location": "Non précisé dans le document",
        "country": "Bénin",
        "programs": ["Transformation des produits agricoles", "Nutrition humaine"],
        "contact": {
          "email": "ipa@una.bj",
          "phone": "+229 21 23 45 70",
          "website": "www.una.bj/ipa"
        },
        "description": "Formation en transformation agroalimentaire, contrôle qualité et éducation nutritionnelle.",
        "goodToKnow": "Cette filière répond à un besoin crucial en Afrique : réduire les pertes post-récolte et améliorer la qualité nutritionnelle des aliments. Les étudiants manipulent des équipements industriels et apprennent les normes internationales. Avec seulement 30 places, c'est l'une des filières les plus sélectives. Les diplômés sont recrutés par des usines agroalimentaires ou lancent des unités de transformation locales."
      },
      {
        "id": "una-5",
        "name": "Industrie des Bio-Ressources (IBR)",
        "admissionRequirements": ["Baccalauréat série C, D, DEAT/Nutrition et Technologie Alimentaire", "Classement", "Matières : SVT, Maths, SPCT"],
        "location": "Non précisé dans le document",
        "country": "Bénin",
        "programs": ["Biotechnologie", "Cosmétique et phytothérapie"],
        "contact": {
          "email": "ibr@una.bj",
          "phone": "+229 21 23 45 71",
          "website": "www.una.bj/ibr"
        },
        "description": "Formation axée sur la valorisation des bio-ressources pour les industries cosmétiques et énergétiques.",
        "goodToKnow": "Filière pionnière dans la valorisation des plantes locales pour créer des produits à haute valeur ajoutée. Les étudiants apprennent à extraire des huiles essentielles, produire du biogaz ou formuler des cosmétiques naturels. Avec 28 places seulement, cette formation rare ouvre des portes dans l'industrie pharmaceutique et cosmétique, secteurs en plein boom en Afrique."
      },
      {
        "id": "una-6",
        "name": "Ecole d'Aquaculture (EAq)",
        "admissionRequirements": ["Baccalauréat série C, D, DEAT/Pêche et aquaculture", "Classement", "Matières : SVT, Maths, SPCT"],
        "location": "Non précisé dans le document",
        "country": "Bénin",
        "programs": ["Aquaculture"],
        "contact": {
          "email": "eaq@una.bj",
          "phone": "+229 21 23 45 72",
          "website": "www.una.bj/eaq"
        },
        "description": "Formation technique en production aquacole, conception d'aliments et gestion d'élevages.",
        "goodToKnow": "Avec la raréfaction des ressources halieutiques naturelles, l'aquaculture est un secteur d'avenir. Cette filière forme des experts en élevage de poissons, crustacés et algues. Particularité : les étudiants apprennent à concevoir des systèmes aquaponiques combinant poissons et cultures. Les 39 diplômés annuels sont rapidement employés par des fermes aquacoles ou des projets de développement."
      },
      {
        "id": "una-7",
        "name": "Ecole de Foresterie Tropicale (EFort)",
        "admissionRequirements": ["Baccalauréat série C, D", "Classement", "Matières : Maths, SPCT, SVT"],
        "location": "Non précisé dans le document",
        "country": "Bénin",
        "programs": ["Foresterie Tropicale"],
        "contact": {
          "email": "efort@una.bj",
          "phone": "+229 21 23 45 73",
          "website": "www.una.bj/efort"
        },
        "description": "Formation en gestion des forêts tropicales, conservation des ressources et transformation du bois.",
        "goodToKnow": "Cette filière unique prépare à la gestion durable des forêts d'Afrique tropicale. Les étudiants étudient l'écologie forestière, la carbonisation et les produits forestiers non ligneux comme le miel. Avec seulement 33 places, la formation est intensive mais débouche sur des carrières dans les parcs nationaux, les ONG environnementales ou l'industrie du bois certifié."
      },
      {
        "id": "una-8",
        "name": "Ecole de Sociologie Rurale et de Vulgarisation Agricole (ESRNA)",
        "admissionRequirements": ["Baccalauréat série C, D, DEAT (toutes options)", "Classement", "Matières : Maths, SPCT, SVT"],
        "location": "Non précisé dans le document",
        "country": "Bénin",
        "programs": ["Sociologie rurale", "Vulgarisation agricole"],
        "contact": {
          "email": "esrna@una.bj",
          "phone": "+229 21 23 45 74",
          "website": "www.una.bj/esrna"
        },
        "description": "Formation en développement rural, gestion des organisations paysannes et politiques agricoles.",
        "goodToKnow": "Filière cruciale pour le développement agricole, elle forme des intermédiaires entre chercheurs, politiques et agriculteurs. Les 56 étudiants annuels apprennent les techniques de vulgarisation, l'analyse des politiques agricoles et la gestion des coopératives. Débouchés variés : des ministères aux ONG en passant par les projets de développement international."
      },
      {
        "id": "una-9",
        "name": "Ecole de Gestion et d'Exploitation des Systèmes d'Elevage (EGER)",
        "admissionRequirements": ["Baccalauréat série C, D, DEAT/Production animale", "Classement", "Matières : SVT, Maths, SPCT (pour C/D)"],
        "location": "Non précisé dans le document",
        "country": "Bénin",
        "programs": ["Productions et Santé Animales"],
        "contact": {
          "email": "eger@una.bj",
          "phone": "+229 21 23 45 75",
          "website": "www.una.bj/eger"
        },
        "description": "Formation en élevage, santé animale et transformation des produits animaux.",
        "goodToKnow": "Avec 68 places, c'est l'une des plus grosses filières de l'université. Le programme couvre toute la chaîne de valeur de l'élevage : alimentation animale, santé, transformation laitière... Les diplômés créent souvent des fermes modernes ou travaillent pour des sociétés d'aliments pour bétail. Particularité : des modules sur l'élevage d'insectes comestibles, une alternative protéique d'avenir."
      },
      {
        "id": "una-10",
        "name": "Ecole de Génie Rural (EGR)",
        "admissionRequirements": ["Baccalauréat série C, D, E, F1, F2, F3, DT (selon spécialité)", "Classement", "Matières : Maths, SPCT, Mécanique/Electrotechnique"],
        "location": "Non précisé dans le document",
        "country": "Bénin",
        "programs": ["Agroéquipement", "Electrification Rurale", "Infrastructures Hydrauliques"],
        "contact": {
          "email": "egr@una.bj",
          "phone": "+229 21 23 45 76",
          "website": "www.una.bj/egr"
        },
        "description": "Formation en machinisme agricole, énergies renouvelables et génie civil rural.",
        "goodToKnow": "Cette école forme les ingénieurs de terrain indispensables à la modernisation agricole. Les spécialités en agroéquipement (21 places) et électrification rurale (23 places) sont particulièrement demandées. Les étudiants travaillent sur des projets concrets comme l'installation de systèmes solaires ou la réparation de tracteurs. Débouchés immédiats dans les sociétés de service et les projets d'infrastructures rurales."
      }
    ]
  }
];

// Fonction utilitaire pour récupérer une université par son slug
export const getUniversityBySlug = (slug: string): University | undefined => {
  return universities.find(university => university.slug === slug);
};
