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
        goodToKnow: "L'ENEAM est reconnue pour ses partenariats avec des entreprises locales et internationales. Les étudiants bénéficient de stages pratiques dès la 2ème année et d'un taux d'insertion professionnelle de 85% après le diplôme."
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
        goodToKnow: "La FAST dispose de laboratoires modernes et d'équipements de pointe. Les formations sont très recherchées par les entreprises technologiques et les centres de recherche."
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
        goodToKnow: "Les études médicales durent 7 ans minimum. L'accès est très sélectif avec moins de 10% d'admission. Un internat hospitalier est obligatoire en dernière année."
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
        goodToKnow: "La FADESP forme les futurs magistrats, avocats et diplomates du Bénin. Les débouchés incluent la fonction publique, le secteur privé et les organisations internationales."
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
        goodToKnow: "L'EPAC est l'école d'ingénieurs la plus prestigieuse du Bénin. Les diplômés sont très recherchés dans le BTP, l'industrie et les bureaux d'études techniques."
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
        goodToKnow: "La FLASH propose des formations polyvalentes avec de nombreux débouchés dans l'enseignement, les médias, la culture et le développement social."
      }
    ]
  },
  {
    id: "2",
    name: "Université de Parakou (UP)",
    location: "Parakou",
    type: "Public",
    image: "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Université moderne du Nord-Bénin, spécialisée dans l'agriculture et les sciences appliquées.",
    slug: "universite-parakou",
    schools: [
      {
        id: "up-1",
        name: "Faculté d'Agronomie (FA)",
        admissionRequirements: ["Baccalauréat série C ou D", "Test d'aptitude", "Entretien de motivation"],
        location: "Parakou",
        country: "Bénin",
        programs: ["Agronomie", "Zootechnie", "Foresterie", "Sécurité alimentaire"],
        contact: {
          email: "agronomie@up.bj",
          phone: "+229 23 61 02 34",
          website: "www.fa.up.bj"
        },
        description: "Excellence en sciences agricoles et développement rural.",
        goodToKnow: "La FA dispose d'une ferme expérimentale de 200 hectares. Les étudiants participent à des projets concrets avec les communautés rurales et bénéficient de stages dans des organisations agricoles internationales."
      },
      {
        id: "up-2",
        name: "Institut de Technologie Alimentaire (ITA)",
        admissionRequirements: ["Baccalauréat série C", "Concours d'entrée", "Aptitudes en chimie"],
        location: "Parakou",
        country: "Bénin",
        programs: ["Technologie alimentaire", "Nutrition", "Qualité alimentaire", "Transformation"],
        contact: {
          email: "ita@up.bj",
          phone: "+229 23 61 03 45",
          website: "www.ita.up.bj"
        },
        description: "Formation spécialisée en transformation et conservation des aliments.",
        goodToKnow: "L'ITA possède des laboratoires de pointe et une usine pilote. Les diplômés sont très recherchés dans l'industrie agroalimentaire et les organismes de contrôle qualité."
      },
      {
        id: "up-3",
        name: "École Normale Supérieure de Parakou (ENS)",
        admissionRequirements: ["Baccalauréat toutes séries", "Concours national", "Aptitudes pédagogiques"],
        location: "Parakou",
        country: "Bénin",
        programs: ["Formation des enseignants", "Mathématiques", "Sciences", "Lettres"],
        contact: {
          email: "ens@up.bj",
          phone: "+229 23 61 04 56",
          website: "www.ens.up.bj"
        },
        description: "Formation des futurs enseignants du secondaire.",
        goodToKnow: "L'ENS garantit un emploi dans l'enseignement public après obtention du diplôme. Les étudiants sont rémunérés pendant leur formation et s'engagent à enseigner pendant 10 ans minimum."
      },
      {
        id: "up-4",
        name: "Faculté des Sciences et Techniques (FST)",
        admissionRequirements: ["Baccalauréat série C ou D", "Test de mathématiques", "Dossier académique"],
        location: "Parakou",
        country: "Bénin",
        programs: ["Informatique", "Télécommunications", "Énergies renouvelables", "Géologie"],
        contact: {
          email: "fst@up.bj",
          phone: "+229 23 61 05 67",
          website: "www.fst.up.bj"
        },
        description: "Innovation technologique et recherche appliquée.",
        goodToKnow: "La FST collabore avec des universités européennes et offre des programmes d'échange. Elle dispose d'un incubateur d'entreprises technologiques pour accompagner les projets étudiants."
      },
      {
        id: "up-5",
        name: "Faculté de Médecine (FM)",
        admissionRequirements: ["Baccalauréat série C ou D", "Concours très sélectif", "Examen médical"],
        location: "Parakou",
        country: "Bénin",
        programs: ["Médecine générale", "Médecine communautaire", "Santé publique", "Pharmacie"],
        contact: {
          email: "medecine@up.bj",
          phone: "+229 23 61 06 78",
          website: "www.fm.up.bj"
        },
        description: "Formation médicale adaptée aux défis sanitaires africains.",
        goodToKnow: "La FM met l'accent sur la médecine tropicale et communautaire. Les stages se déroulent dans des centres de santé ruraux, préparant les futurs médecins aux réalités du terrain."
      },
      {
        id: "up-6",
        name: "Institut Universitaire de Technologie (IUT)",
        admissionRequirements: ["Baccalauréat série C, D ou F", "Dossier de candidature", "Entretien technique"],
        location: "Parakou",
        country: "Bénin",
        programs: ["Génie électrique", "Maintenance industrielle", "Informatique", "Génie civil"],
        contact: {
          email: "iut@up.bj",
          phone: "+229 23 61 07 89",
          website: "www.iut.up.bj"
        },
        description: "Formation professionnelle en 3 ans avec stages en entreprise.",
        goodToKnow: "L'IUT privilégie la formation pratique avec 50% du temps en stage. Les étudiants travaillent sur des projets réels d'entreprises et bénéficient d'un excellent taux d'insertion professionnelle."
      }
    ]
  },
  // Continue with other universities...
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