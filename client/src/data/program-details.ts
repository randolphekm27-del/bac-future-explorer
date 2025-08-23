
// Système centralisé des détails des filières
// Chaque filière a un ID unique et ses informations complètes

export interface ProgramDetails {
  id: string;
  name: string;
  slug: string;
  category: string;
  duration: string;
  level: string;
  description: string;
  detailedDescription: string;
  icon: string;
  image: string;
  heroSection: {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
    highlights: string[];
  };
  aboutSection: {
    title: string;
    content: string[];
    keyPoints: string[];
  };
  careersSection: {
    title: string;
    description: string;
    careers: {
      title: string;
      description: string;
      salary: string;
      requirements: string[];
      growth: string;
    }[];
  };
  studiesSection: {
    title: string;
    duration: string;
    levels: {
      name: string;
      duration: string;
      description: string;
      subjects: string[];
    }[];
  };
  skillsSection: {
    title: string;
    technical: {
      title: string;
      skills: string[];
    };
    soft: {
      title: string;
      skills: string[];
    };
  };
  admissionSection: {
    title: string;
    requirements: string[];
    process: string[];
    tips: string[];
  };
  testimonialsSection?: {
    title: string;
    testimonials: {
      name: string;
      role: string;
      company: string;
      quote: string;
      image?: string;
    }[];
  };
  resourcesSection: {
    title: string;
    resources: {
      title: string;
      description: string;
      link: string;
      type: "university" | "program" | "career" | "guide";
    }[];
  };
  salary?: {
    entry: string;
    average: string;
    senior: string;
  };
  schoolsCount?: number;
}

// Base de données centralisée des détails des filières
export const PROGRAM_DETAILS_DATABASE: Record<string, ProgramDetails> = {
  "PROG_001": {
    id: "PROG_001",
    name: "Informatique et Technologies",
    slug: "informatique-technologies",
    category: "Sciences et Technologies",
    duration: "3-5 ans",
    level: "Licence, Master, Doctorat",
    description: "Formation complète en informatique couvrant programmation, systèmes, réseaux et intelligence artificielle.",
    detailedDescription: "La filière Informatique et Technologies forme des professionnels capables de concevoir, développer et maintenir des systèmes informatiques complexes qui transforment notre société.",
    icon: "Code",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
    heroSection: {
      title: "Informatique et Technologies",
      subtitle: "Façonnez l'avenir numérique du Bénin",
      description: "Devenez un expert en technologies de l'information et contribuez à la transformation digitale de l'Afrique. Une formation complète qui vous ouvre les portes du monde tech international.",
      backgroundImage: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200",
      highlights: [
        "Secteur le plus porteur au Bénin",
        "Possibilités de travail à distance",
        "Salaires attractifs dès le début",
        "Évolution rapide de carrière"
      ]
    },
    aboutSection: {
      title: "Une formation d'excellence pour les métiers du futur",
      content: [
        "L'informatique et les technologies représentent aujourd'hui le secteur le plus dynamique et prometteur au Bénin. Cette filière forme des professionnels capables de concevoir, développer et maintenir des systèmes informatiques complexes qui transforment notre société.",
        "Notre programme combine une solide formation théorique avec une approche pratique intensive. Vous maîtriserez les langages de programmation les plus demandés, les architectures système modernes, et les technologies émergentes comme l'intelligence artificielle et la blockchain.",
        "Au-delà des compétences techniques, cette formation développe votre capacité d'analyse, votre créativité et votre aptitude à résoudre des problèmes complexes. Vous apprendrez à travailler en équipe sur des projets d'envergure et à communiquer efficacement avec des clients non-techniques."
      ],
      keyPoints: [
        "Formation pratique avec 60% de projets concrets",
        "Partenariats avec les entreprises tech du Bénin",
        "Accès aux dernières technologies et outils",
        "Accompagnement vers l'emploi et l'entrepreneuriat",
        "Possibilités de stages à l'international",
        "Communauté active d'anciens diplômés"
      ]
    },
    careersSection: {
      title: "Des carrières passionnantes et bien rémunérées",
      description: "Le secteur informatique offre une diversité de métiers avec d'excellentes perspectives d'évolution et des salaires attractifs dès l'entrée sur le marché du travail.",
      careers: [
        {
          title: "Développeur Full-Stack",
          description: "Créez des applications web et mobile complètes, de l'interface utilisateur aux bases de données. Maîtrisez les technologies front-end et back-end pour développer des solutions digitales innovantes.",
          salary: "250 000 - 600 000 FCFA/mois",
          requirements: ["JavaScript/TypeScript", "React/Vue.js", "Node.js", "Bases de données"],
          growth: "Évolution vers Lead Developer ou CTO en 3-5 ans"
        },
        {
          title: "Data Scientist",
          description: "Analysez les données pour extraire des insights précieux et aider les entreprises à prendre des décisions stratégiques. Utilisez l'IA et le machine learning pour résoudre des problèmes complexes.",
          salary: "300 000 - 800 000 FCFA/mois",
          requirements: ["Python/R", "Machine Learning", "Statistiques", "Visualisation de données"],
          growth: "Évolution vers Chief Data Officer ou consultant indépendant"
        },
        {
          title: "Expert en Cybersécurité",
          description: "Protégez les systèmes informatiques contre les cyberattaques. Concevez des stratégies de sécurité et formez les équipes aux bonnes pratiques de protection des données.",
          salary: "350 000 - 900 000 FCFA/mois",
          requirements: ["Sécurité réseau", "Cryptographie", "Audit de sécurité", "Gestion des risques"],
          growth: "Secteur en forte demande, évolution vers CISO"
        }
      ]
    },
    studiesSection: {
      title: "Un parcours d'études progressif et complet",
      duration: "3 à 8 ans selon la spécialisation",
      levels: [
        {
          name: "Licence en Informatique (Bac+3)",
          duration: "3 ans",
          description: "Formation fondamentale couvrant les bases de l'informatique et de la programmation. Acquisition des compétences essentielles pour débuter dans le secteur tech.",
          subjects: [
            "Programmation (Java, Python, C++)",
            "Structures de données et algorithmes",
            "Bases de données relationnelles",
            "Réseaux et systèmes d'exploitation",
            "Génie logiciel et méthodologies",
            "Mathématiques appliquées",
            "Anglais technique",
            "Projet de fin d'études"
          ]
        },
        {
          name: "Master en Génie Logiciel (Bac+5)",
          duration: "2 ans",
          description: "Spécialisation avancée en développement logiciel, architecture système et gestion de projets techniques. Formation aux technologies de pointe et aux méthodes de développement modernes.",
          subjects: [
            "Architecture logicielle avancée",
            "Développement web et mobile",
            "Intelligence artificielle",
            "Sécurité informatique",
            "Cloud Computing et DevOps",
            "Gestion de projets IT",
            "Innovation et entrepreneuriat tech",
            "Stage en entreprise (6 mois)"
          ]
        }
      ]
    },
    skillsSection: {
      title: "Compétences développées tout au long de la formation",
      technical: {
        title: "Compétences techniques",
        skills: [
          "Maîtrise de 5+ langages de programmation (Java, Python, JavaScript, C++, SQL)",
          "Développement d'applications web modernes (React, Angular, Vue.js)",
          "Création d'applications mobile natives et hybrides",
          "Conception et optimisation de bases de données (MySQL, PostgreSQL, MongoDB)",
          "Administration de systèmes Linux/Windows et réseaux",
          "Sécurisation des applications et infrastructures",
          "Utilisation d'outils DevOps (Docker, Kubernetes, CI/CD)",
          "Analyse et traitement de données massives",
          "Développement d'algorithmes d'intelligence artificielle",
          "Architecture de systèmes distribués et microservices"
        ]
      },
      soft: {
        title: "Qualités humaines et professionnelles",
        skills: [
          "Résolution créative de problèmes complexes",
          "Pensée analytique et logique structurée",
          "Capacité d'apprentissage continu des nouvelles technologies",
          "Travail collaboratif en équipes multidisciplinaires",
          "Communication technique claire avec des non-spécialistes",
          "Gestion efficace du temps et des priorités",
          "Adaptabilité aux changements technologiques rapides",
          "Leadership technique et mentorat d'équipes",
          "Esprit d'innovation et de créativité",
          "Rigueur et attention aux détails dans le code"
        ]
      }
    },
    admissionSection: {
      title: "Comment intégrer cette formation d'excellence",
      requirements: [
        "Baccalauréat série C ou D avec mention (minimum 12/20)",
        "Excellentes bases en mathématiques et sciences physiques",
        "Capacités de logique et d'abstraction démontrées",
        "Maîtrise du français et notions d'anglais",
        "Motivation forte pour les technologies",
        "Pour Master : Licence en informatique ou domaine connexe avec mention"
      ],
      process: [
        "Dépôt de candidature en ligne avec dossier complet",
        "Concours d'entrée écrit (mathématiques, logique, culture générale)",
        "Entretien de motivation avec présentation d'un projet personnel",
        "Test pratique de programmation (pour les niveaux avancés)",
        "Validation du dossier académique et des recommandations",
        "Inscription définitive après acceptation"
      ],
      tips: [
        "Commencez à apprendre la programmation avant l'entrée (Python recommandé)",
        "Participez à des hackathons et concours de programmation",
        "Créez un portfolio de projets personnels sur GitHub",
        "Suivez l'actualité technologique et les tendances du secteur",
        "Améliorez votre niveau d'anglais (essentiel dans la tech)",
        "Rejoignez des communautés de développeurs locales"
      ]
    },
    testimonialsSection: {
      title: "Témoignages de nos diplômés",
      testimonials: [
        {
          name: "Marie Koffi",
          role: "Développeuse Full-Stack Senior",
          company: "TechAfrique",
          quote: "Cette formation m'a donné toutes les compétences pour réussir dans le développement web. Je travaille maintenant sur des projets innovants qui impactent des milliers d'utilisateurs à travers l'Afrique."
        },
        {
          name: "Jean Togbé",
          role: "Chef de projet IT",
          company: "Orange Bénin",
          quote: "Grâce à ma formation en informatique, j'ai pu évoluer rapidement et diriger des équipes techniques sur des projets stratégiques."
        }
      ]
    },
    resourcesSection: {
      title: "Ressources pour approfondir",
      resources: [
        {
          title: "Guide des universités tech au Bénin",
          description: "Comparatif détaillé des formations informatiques disponibles",
          link: "/universities?filter=tech",
          type: "university"
        },
        {
          title: "Roadmap développeur 2025",
          description: "Parcours recommandé pour devenir développeur professionnel",
          link: "https://roadmap.sh/",
          type: "guide"
        },
        {
          title: "Communauté des développeurs béninois",
          description: "Rejoignez le réseau des professionnels tech du Bénin",
          link: "https://chat.whatsapp.com/FUpGT490JQ98CCidAHOLcw",
          type: "career"
        }
      ]
    },
    salary: {
      entry: "250 000 - 400 000 FCFA/mois",
      average: "500 000 - 800 000 FCFA/mois",
      senior: "1 000 000+ FCFA/mois"
    },
    schoolsCount: 12
  },

  "PROG_002": {
    id: "PROG_002",
    name: "Droit et Sciences Juridiques",
    slug: "droit-sciences-juridiques",
    category: "Droit et Sciences Juridiques",
    duration: "3-5 ans",
    level: "Licence, Master, Doctorat",
    description: "Formation complète en droit pour devenir juriste, avocat ou magistrat avec spécialisations multiples.",
    detailedDescription: "La filière Droit et Sciences Juridiques forme des professionnels du droit capables d'évoluer dans tous les secteurs juridiques.",
    icon: "Scale",
    image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=800",
    heroSection: {
      title: "Droit et Sciences Juridiques",
      subtitle: "Défendez la justice et façonnez la société",
      description: "Formez-vous aux métiers du droit et de la justice. Une profession prestigieuse qui vous permet de défendre les droits, conseiller les entreprises et contribuer à l'évolution de la société béninoise.",
      backgroundImage: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1200",
      highlights: [
        "Profession prestigieuse et respectée",
        "Diversité des spécialisations possibles",
        "Revenus attractifs après quelques années",
        "Impact social et sociétal important"
      ]
    },
    aboutSection: {
      title: "Une formation rigoureuse pour les gardiens du droit",
      content: [
        "Les études de droit forment des professionnels capables d'évoluer dans tous les secteurs juridiques. Cette formation rigoureuse couvre l'ensemble du système juridique béninois et international, du droit civil au droit des affaires, en passant par le droit pénal et administratif.",
        "L'enseignement développe votre esprit d'analyse, votre capacité d'argumentation et votre sens de la justice. Vous apprendrez à interpréter les textes de loi, à rédiger des actes juridiques et à plaider avec éloquence devant les tribunaux.",
        "Cette formation exigeante vous prépare à exercer en cabinet d'avocat, dans l'administration publique, en entreprise ou dans la magistrature. Elle ouvre également la voie vers des carrières internationales dans les organisations juridiques mondiales."
      ],
      keyPoints: [
        "Formation complète en droit béninois et international",
        "Stages pratiques dans les cabinets et tribunaux",
        "Cliniques juridiques pour aider les populations",
        "Participation aux plaidoiries et concours d'éloquence",
        "Réseau professionnel fort avec les praticiens",
        "Possibilités d'échanges avec les universités étrangères"
      ]
    },
    careersSection: {
      title: "Des métiers au service de la justice et du droit",
      description: "Le secteur juridique offre de nombreuses opportunités de carrière, allant de l'exercice libéral aux fonctions publiques, en passant par le conseil en entreprise.",
      careers: [
        {
          title: "Avocat au Barreau",
          description: "Défendez vos clients devant les tribunaux, conseillez en matière juridique et rédigez des actes. Spécialisez-vous en droit des affaires, droit pénal, droit de la famille ou autres domaines.",
          salary: "200 000 - 1 000 000+ FCFA/mois",
          requirements: ["CAPA (Certificat d'Aptitude à la Profession d'Avocat)", "Stage au barreau", "Inscription à l'Ordre"],
          growth: "Évolution vers associé de cabinet ou création de son propre cabinet"
        },
        {
          title: "Magistrat",
          description: "Rendez la justice en tant que juge ou poursuivez les infractions comme procureur. Participez au fonctionnement de l'institution judiciaire et à l'application de la loi.",
          salary: "300 000 - 800 000 FCFA/mois",
          requirements: ["Concours de la magistrature", "École Nationale de la Magistrature", "Serment professionnel"],
          growth: "Évolution vers les hautes juridictions (Cour Suprême, Cour Constitutionnelle)"
        },
        {
          title: "Notaire",
          description: "Authentifiez les actes juridiques importants (ventes, successions, contrats). Conseillez les particuliers et entreprises dans leurs démarches juridiques officielles.",
          salary: "250 000 - 600 000 FCFA/mois",
          requirements: ["Stage notarial", "Examen professionnel", "Installation en étude"],
          growth: "Profession libérale avec clientèle fidèle et revenus stables"
        }
      ]
    },
    studiesSection: {
      title: "Un cursus juridique complet et exigeant",
      duration: "4 à 8 ans selon la spécialisation",
      levels: [
        {
          name: "Licence en Droit (Bac+3)",
          duration: "3 ans",
          description: "Formation fondamentale en droit béninois et international. Acquisition des bases juridiques essentielles et méthodologie du droit.",
          subjects: [
            "Droit civil général",
            "Droit constitutionnel",
            "Droit pénal général",
            "Droit administratif",
            "Histoire du droit",
            "Introduction générale au droit",
            "Méthodologie juridique",
            "Institutions judiciaires"
          ]
        },
        {
          name: "Master 1 en Droit (Bac+4)",
          duration: "1 an",
          description: "Approfondissement des connaissances et première spécialisation selon les parcours : droit privé, droit public, droit des affaires.",
          subjects: [
            "Droit civil spécialisé",
            "Procédure civile",
            "Droit pénal spécial",
            "Droit commercial",
            "Droit international",
            "Stage en cabinet ou tribunal",
            "Mémoire de recherche",
            "Clinique juridique"
          ]
        }
      ]
    },
    skillsSection: {
      title: "Compétences développées dans cette formation d'excellence",
      technical: {
        title: "Compétences juridiques techniques",
        skills: [
          "Maîtrise approfondie des codes et textes juridiques béninois",
          "Rédaction d'actes juridiques complexes (contrats, testaments, statuts)",
          "Techniques de plaidoirie et d'argumentation devant les tribunaux",
          "Recherche jurisprudentielle et analyse de la doctrine",
          "Conseil juridique personnalisé selon les situations",
          "Maîtrise des procédures civiles, pénales et administratives",
          "Négociation et médiation dans les conflits",
          "Droit international et droit comparé",
          "Utilisation des outils juridiques numériques",
          "Veille juridique et mise à jour des connaissances"
        ]
      },
      soft: {
        title: "Qualités humaines et professionnelles",
        skills: [
          "Argumentation persuasive et rhétorique maîtrisée",
          "Esprit d'analyse critique et de synthèse",
          "Intégrité morale et déontologie professionnelle irréprochable",
          "Capacité d'écoute empathique et de conseil",
          "Gestion du stress et des situations conflictuelles",
          "Communication orale et écrite d'excellence",
          "Rigueur méthodologique et attention aux détails",
          "Sens de la justice et de l'équité",
          "Diplomatie et tact dans les relations",
          "Confidentialité et discrétion professionnelle"
        ]
      }
    },
    admissionSection: {
      title: "Intégrer les études de droit : exigences et processus",
      requirements: [
        "Baccalauréat toutes séries (A, B, C, D) avec mention préférable",
        "Excellente maîtrise de la langue française (écrite et orale)",
        "Capacités de rédaction et d'expression argumentée",
        "Goût prononcé pour la lecture et l'analyse de textes",
        "Culture générale solide et curiosité intellectuelle",
        "Sens de la justice et intérêt pour les questions de société"
      ],
      process: [
        "Inscription en ligne sur la plateforme universitaire",
        "Constitution du dossier avec relevés de notes et recommandations",
        "Test d'aptitude en français et culture générale (certaines universités)",
        "Entretien de motivation pour évaluer la vocation juridique",
        "Classement selon les résultats et places disponibles",
        "Inscription administrative après acceptation"
      ],
      tips: [
        "Lisez régulièrement la presse juridique et les décisions de justice",
        "Participez à des concours d'éloquence et de débat",
        "Visitez les tribunaux pour observer les audiences publiques",
        "Rencontrez des professionnels du droit pour comprendre leurs métiers",
        "Développez votre culture générale et votre expression écrite",
        "Préparez-vous aux études longues et exigeantes (minimum 4-5 ans)"
      ]
    },
    testimonialsSection: {
      title: "Paroles de nos diplômés en droit",
      testimonials: [
        {
          name: "Maître Fatou Gbédji",
          role: "Avocate au Barreau de Cotonou",
          company: "Cabinet Gbédji & Associés",
          quote: "Ma formation en droit m'a permis d'ouvrir mon propre cabinet et de défendre les droits de mes clients avec expertise et passion."
        },
        {
          name: "Dr. Kossivi Agbéko",
          role: "Magistrat à la Cour d'Appel",
          company: "Cour d'Appel de Porto-Novo",
          quote: "Les études de droit offrent une formation intellectuelle exceptionnelle qui ouvre les portes de nombreuses carrières prestigieuses."
        }
      ]
    },
    resourcesSection: {
      title: "Ressources pour approfondir vos connaissances",
      resources: [
        {
          title: "Facultés de Droit au Bénin",
          description: "Guide complet des formations juridiques disponibles",
          link: "/universities?filter=droit",
          type: "university"
        },
        {
          title: "Code civil béninois",
          description: "Textes fondamentaux du droit béninois",
          link: "https://droit-afrique.com/uploads/Benin-Code-civil.pdf",
          type: "guide"
        },
        {
          title: "Barreau du Bénin",
          description: "Informations sur la profession d'avocat",
          link: "https://barreaubenin.org",
          type: "career"
        }
      ]
    },
    salary: {
      entry: "200 000 - 350 000 FCFA/mois",
      average: "400 000 - 700 000 FCFA/mois",
      senior: "800 000+ FCFA/mois"
    },
    schoolsCount: 8
  },

  "PROG_003": {
    id: "PROG_003",
    name: "Génie Civil et Architecture",
    slug: "genie-civil-architecture",
    category: "Sciences et Technologies",
    duration: "3-5 ans",
    level: "Licence, Master, Doctorat",
    description: "Formation d'ingénieurs et architectes pour la conception et construction d'infrastructures modernes.",
    detailedDescription: "La filière Génie Civil et Architecture forme des professionnels capables de concevoir, calculer et superviser la construction d'ouvrages d'art, bâtiments et infrastructures.",
    icon: "Building",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
    heroSection: {
      title: "Génie Civil et Architecture",
      subtitle: "Bâtissez l'infrastructure de demain",
      description: "Concevez et construisez les infrastructures qui transforment le Bénin. Une formation d'ingénieur qui combine créativité architecturale, expertise technique et vision du développement durable.",
      backgroundImage: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200",
      highlights: [
        "Secteur en pleine expansion au Bénin",
        "Projets d'infrastructure gouvernementaux",
        "Salaires attractifs dès la sortie",
        "Possibilités d'entrepreneuriat"
      ]
    },
    aboutSection: {
      title: "Ingénierie et architecture : créer l'avenir bâti du Bénin",
      content: [
        "Le génie civil et l'architecture forment des professionnels capables de concevoir, calculer et superviser la construction d'ouvrages d'art, de bâtiments et d'infrastructures. Cette formation d'excellence combine sciences exactes, techniques de construction avancées et créativité architecturale.",
        "Vous maîtriserez les matériaux modernes, les techniques de construction durables, l'hydraulique urbaine et l'urbanisme intelligent. La formation intègre les enjeux environnementaux et les standards internationaux de construction.",
        "Nos diplômés créent des espaces fonctionnels, durables et esthétiques qui améliorent la qualité de vie des populations. Ils participent aux grands projets d'infrastructure qui transforment le paysage urbain et rural du Bénin."
      ],
      keyPoints: [
        "Formation théorique solide et pratique intensive sur chantiers",
        "Utilisation des logiciels de CAO/DAO les plus récents",
        "Projets réels en partenariat avec les entreprises BTP",
        "Stages obligatoires dans les grandes entreprises de construction",
        "Formation aux normes internationales et développement durable",
        "Réseau professionnel fort avec les acteurs du BTP"
      ]
    },
    careersSection: {
      title: "Construisez votre carrière dans le BTP",
      description: "Le secteur du BTP au Bénin connaît une croissance exceptionnelle avec les grands projets d'infrastructure. Les ingénieurs et architectes sont très recherchés.",
      careers: [
        {
          title: "Ingénieur en Génie Civil",
          description: "Concevez et supervisez la construction de bâtiments, ponts, routes et infrastructures. Calculez les structures, gérez les chantiers et assurez la qualité des ouvrages.",
          salary: "300 000 - 800 000 FCFA/mois",
          requirements: ["Calculs de structures", "Gestion de chantier", "Logiciels CAO", "Leadership"],
          growth: "Évolution vers Directeur Technique ou création d'entreprise BTP"
        },
        {
          title: "Architecte",
          description: "Créez des espaces de vie innovants et fonctionnels. Concevez des bâtiments qui allient esthétique, fonctionnalité et respect de l'environnement.",
          salary: "250 000 - 700 000 FCFA/mois",
          requirements: ["Design architectural", "Logiciels 3D", "Réglementation urbaine", "Créativité"],
          growth: "Évolution vers Architecte en chef ou agence d'architecture"
        },
        {
          title: "Chef de Projet BTP",
          description: "Dirigez des projets de construction de A à Z. Coordonnez les équipes, gérez les budgets et assurez le respect des délais et de la qualité.",
          salary: "350 000 - 900 000 FCFA/mois",
          requirements: ["Gestion de projet", "Coordination d'équipes", "Budgétisation", "Négociation"],
          growth: "Évolution vers Directeur de projets ou Directeur Général"
        }
      ]
    },
    studiesSection: {
      title: "Un cursus d'ingénieur complet et professionnalisant",
      duration: "5 à 8 ans selon la spécialisation",
      levels: [
        {
          name: "Licence en Génie Civil (Bac+3)",
          duration: "3 ans",
          description: "Formation fondamentale en sciences de l'ingénieur et bases du génie civil. Acquisition des compétences essentielles en calculs, matériaux et construction.",
          subjects: [
            "Mathématiques appliquées et physique",
            "Résistance des matériaux",
            "Mécanique des sols",
            "Topographie et géométrie descriptive",
            "Dessin technique et DAO",
            "Matériaux de construction",
            "Hydraulique générale",
            "Économie de la construction"
          ]
        },
        {
          name: "Master en Génie Civil (Bac+5)",
          duration: "2 ans",
          description: "Spécialisation avancée en ingénierie civile avec choix de parcours : structures, hydraulique, géotechnique ou management de projets BTP.",
          subjects: [
            "Béton armé et construction métallique",
            "Calculs de structures avancés",
            "Géotechnique et fondations",
            "Hydraulique urbaine",
            "Gestion de projets BTP",
            "Développement durable",
            "Stage en entreprise (6 mois)",
            "Projet de fin d'études"
          ]
        }
      ]
    },
    skillsSection: {
      title: "Compétences d'ingénieur pour bâtir l'avenir",
      technical: {
        title: "Compétences techniques d'ingénieur",
        skills: [
          "Calculs de structures et dimensionnement d'ouvrages complexes",
          "Maîtrise des logiciels de CAO (AutoCAD, Revit, ArchiCAD, Tekla)",
          "Lecture et conception de plans techniques détaillés",
          "Contrôle qualité et expertise technique des constructions",
          "Gestion complète de chantier et coordination des corps de métiers",
          "Étude de sol et conception de fondations adaptées",
          "Application des normes et réglementations du BTP",
          "Estimation des coûts et planification des travaux",
          "Utilisation des matériaux modernes et écologiques",
          "Techniques de construction parasismique et anticyclonique"
        ]
      },
      soft: {
        title: "Qualités humaines d'ingénieur",
        skills: [
          "Leadership naturel et management d'équipes pluridisciplinaires",
          "Résolution créative de problèmes techniques complexes",
          "Communication efficace avec tous les corps de métiers",
          "Sens aigu de l'organisation et rigueur méthodologique",
          "Créativité et vision spatiale développée",
          "Capacité d'adaptation aux contraintes techniques et budgétaires",
          "Sens des responsabilités et conscience sécuritaire",
          "Négociation avec clients, fournisseurs et administrations",
          "Gestion du stress et des urgences de chantier",
          "Vision stratégique et anticipation des besoins"
        ]
      }
    },
    admissionSection: {
      title: "Intégrer une formation d'ingénieur d'excellence",
      requirements: [
        "Baccalauréat série C ou D avec mention bien ou très bien",
        "Excellentes bases en mathématiques et physique",
        "Capacités de représentation spatiale et géométrique",
        "Goût pour le dessin technique et la conception",
        "Aptitudes au travail en équipe et au leadership",
        "Résistance physique pour les visites de chantier"
      ],
      process: [
        "Concours d'entrée très sélectif (mathématiques, physique, logique)",
        "Épreuve de dessin technique et géométrie descriptive",
        "Entretien de motivation avec présentation d'un projet",
        "Test psychotechnique pour évaluer les aptitudes spatiales",
        "Classement national selon les résultats obtenus",
        "Inscription dans l'école selon le rang de classement"
      ],
      tips: [
        "Renforcez vos bases en mathématiques et physique dès la Terminale",
        "Pratiquez le dessin technique et la géométrie dans l'espace",
        "Visitez des chantiers pour comprendre la réalité du métier",
        "Rencontrez des ingénieurs pour découvrir leurs spécialités",
        "Préparez-vous intensivement aux concours (classes préparatoires recommandées)",
        "Développez votre culture générale technique et scientifique"
      ]
    },
    testimonialsSection: {
      title: "Témoignages d'ingénieurs diplômés",
      testimonials: [
        {
          name: "Ing. Paul Akouété",
          role: "Directeur Technique",
          company: "SOBEBAT",
          quote: "Ma formation en génie civil m'a permis de diriger des projets d'envergure nationale et de contribuer au développement des infrastructures du pays."
        },
        {
          name: "Archi. Sophie Houénou",
          role: "Architecte Principale",
          company: "Cabinet d'Architecture Moderne",
          quote: "L'architecture allie technique et créativité de façon unique. Cette formation m'a donné les outils pour créer des espaces qui transforment positivement la vie des gens."
        }
      ]
    },
    resourcesSection: {
      title: "Ressources pour les futurs ingénieurs",
      resources: [
        {
          title: "Écoles d'ingénieurs au Bénin",
          description: "Guide des formations en génie civil et architecture",
          link: "/universities?filter=ingenierie",
          type: "university"
        },
        {
          title: "Ordre des Architectes du Bénin",
          description: "Informations sur la profession d'architecte",
          link: "#",
          type: "career"
        },
        {
          title: "Projets BTP en cours au Bénin",
          description: "Découvrez les grands chantiers nationaux",
          link: "#",
          type: "guide"
        }
      ]
    },
    salary: {
      entry: "300 000 - 500 000 FCFA/mois",
      average: "600 000 - 1 000 000 FCFA/mois",
      senior: "1 200 000+ FCFA/mois"
    },
    schoolsCount: 6
  }
};

// Fonction pour récupérer les détails d'une filière par son ID
export function getProgramDetailsById(programId: string): ProgramDetails | null {
  return PROGRAM_DETAILS_DATABASE[programId] || null;
}

// Fonction pour récupérer les détails d'une filière par son slug
export function getProgramDetailsBySlug(slug: string): ProgramDetails | null {
  const program = Object.values(PROGRAM_DETAILS_DATABASE).find(p => p.slug === slug);
  return program || null;
}

// Fonction pour récupérer tous les IDs de programme disponibles
export function getAllProgramIds(): string[] {
  return Object.keys(PROGRAM_DETAILS_DATABASE);
}

// Fonction pour récupérer tous les slugs de programme disponibles
export function getAllProgramSlugs(): string[] {
  return Object.values(PROGRAM_DETAILS_DATABASE).map(p => p.slug);
}

// Fonction pour vérifier si une filière a des détails complets
export function hasProgramDetails(slug: string): boolean {
  return Object.values(PROGRAM_DETAILS_DATABASE).some(p => p.slug === slug);
}

// Fonction pour générer automatiquement des détails complets pour une filière
export function generateProgramDetails(program: any): ProgramDetails {
  const category = program.category;
  const name = program.name;
  const slug = program.slug;
  
  // Générer des détails spécifiques basés sur la catégorie
  const careersSection = generateCareersSection(name, category, program.careers);
  const studiesSection = generateStudiesSection(name, category);
  const skillsSection = generateSkillsSection(category);
  const admissionSection = generateAdmissionSection(category);
  const aboutSection = generateAboutSection(name, category);
  const heroSection = generateHeroSection(name, category);
  const resourcesSection = generateResourcesSection(name, category, slug);
  
  return {
    id: `PROG_GEN_${slug.toUpperCase().replace(/-/g, '_')}`,
    name,
    slug,
    category,
    duration: program.duration || "3-5 ans",
    level: program.level || "Licence/Master",
    description: program.description,
    detailedDescription: program.detailedDescription,
    icon: program.icon,
    image: program.image,
    heroSection,
    aboutSection,
    careersSection,
    studiesSection,
    skillsSection,
    admissionSection,
    resourcesSection,
    salary: generateSalaryInfo(category),
    schoolsCount: program.schoolsCount || 0
  };
}

// Fonction pour générer la section carrières
function generateCareersSection(name: string, category: string, careers: string[]): any {
  const title = `Que peut-on devenir avec ${name} ?`;
  const description = `Découvrez tous les débouchés professionnels et opportunités de carrière qu'offre une formation en ${name.toLowerCase()}.`;
  
  const careersWithDetails = careers.map(career => ({
    title: career,
    description: generateCareerDescription(career, category),
    salary: generateCareerSalary(career, category),
    requirements: generateCareerRequirements(career, category),
    growth: generateCareerGrowth(career, category)
  }));

  return {
    title,
    description,
    careers: careersWithDetails
  };
}

// Fonction pour générer la section études
function generateStudiesSection(name: string, category: string): any {
  return {
    title: `Comment étudier ${name} ?`,
    duration: "3 à 5 ans selon le niveau visé",
    levels: [
      {
        name: "Licence (Bac+3)",
        duration: "3 ans",
        description: `Formation de base en ${name.toLowerCase()} avec les fondamentaux théoriques et pratiques.`,
        subjects: generateSubjectsForLevel(name, category, "licence")
      },
      {
        name: "Master (Bac+5)",
        duration: "2 ans",
        description: `Spécialisation avancée et expertise approfondie en ${name.toLowerCase()}.`,
        subjects: generateSubjectsForLevel(name, category, "master")
      }
    ]
  };
}

// Fonction pour générer la section compétences
function generateSkillsSection(category: string): any {
  return {
    title: "Compétences développées",
    technical: {
      title: "Compétences techniques",
      skills: getTechnicalSkillsForCategory(category)
    },
    soft: {
      title: "Compétences transversales",
      skills: getSoftSkillsForCategory(category)
    }
  };
}

// Fonction pour générer la section admission
function generateAdmissionSection(category: string): any {
  return {
    title: "Comment intégrer cette formation ?",
    requirements: getAdmissionRequirementsForCategory(category),
    process: [
      "Constituer un dossier de candidature",
      "Passer les épreuves de sélection",
      "Entretien de motivation",
      "Validation définitive du dossier"
    ],
    tips: [
      "Préparez soigneusement votre dossier",
      "Montrez votre motivation pour la filière",
      "Mettez en avant vos expériences pertinentes",
      "Informez-vous sur les débouchés"
    ]
  };
}

// Fonction pour générer la section à propos
function generateAboutSection(name: string, category: string): any {
  return {
    title: `Tout savoir sur ${name}`,
    content: [
      `La filière ${name} fait partie du domaine ${category.toLowerCase()} et offre une formation complète pour les métiers d'aujourd'hui et de demain.`,
      `Cette formation combine théorie et pratique pour vous donner toutes les compétences nécessaires à votre réussite professionnelle.`,
      `Les diplômés de cette filière sont très recherchés sur le marché de l'emploi béninois et international.`
    ],
    keyPoints: [
      "Formation adaptée au marché de l'emploi",
      "Équipe pédagogique expérimentée",
      "Stages en entreprise obligatoires",
      "Réseau d'anciens diplômés actif",
      "Possibilités de poursuites d'études",
      "Accompagnement personnalisé"
    ]
  };
}

// Fonction pour générer la section héros
function generateHeroSection(name: string, category: string): any {
  return {
    title: name,
    subtitle: `Votre avenir commence ici`,
    description: `Découvrez une formation d'excellence en ${name.toLowerCase()} qui vous ouvre les portes d'une carrière prometteuse au Bénin et à l'international.`,
    backgroundImage: getImageForCategory(category),
    highlights: getHighlightsForCategory(category)
  };
}

// Fonction pour générer la section ressources
function generateResourcesSection(name: string, category: string, slug: string): any {
  return {
    title: "Ressources utiles",
    resources: [
      {
        title: "Guide d'orientation",
        description: `Guide complet pour réussir en ${name.toLowerCase()}`,
        link: "/conseils",
        type: "guide" as const
      },
      {
        title: "Écoles proposant cette filière",
        description: `Toutes les écoles où étudier ${name.toLowerCase()}`,
        link: `/program-schools/${slug}`,
        type: "university" as const
      }
    ]
  };
}

// Fonctions utilitaires pour générer le contenu

function generateCareerDescription(career: string, category: string): string {
  const descriptions: Record<string, string> = {
    "Développeur Web": "Conception et développement d'applications web modernes et responsives.",
    "Ingénieur Logiciel": "Développement de solutions logicielles complexes pour entreprises.",
    "Analyste Système": "Analyse et optimisation des systèmes d'information d'entreprise.",
    "Chef de Projet IT": "Pilotage de projets technologiques de A à Z.",
    "Avocat": "Conseil juridique et représentation devant les tribunaux.",
    "Notaire": "Authentification d'actes juridiques et conseil patrimonial.",
    "Magistrat": "Application de la justice et prise de décisions judiciaires.",
    "Médecin": "Diagnostic, traitement et prévention des maladies.",
    "Pharmacien": "Dispensation de médicaments et conseil pharmaceutique.",
    "Infirmier": "Soins aux patients et assistance médicale.",
    "default": "Professionnel qualifié dans le domaine avec expertise spécialisée."
  };
  return descriptions[career] || descriptions.default;
}

function generateCareerSalary(career: string, category: string): string {
  const salaryRanges: Record<string, string> = {
    "Sciences et Technologies": "400 000 - 800 000 FCFA/mois",
    "Santé": "500 000 - 1 200 000 FCFA/mois",
    "Droit et Sciences Juridiques": "300 000 - 900 000 FCFA/mois",
    "Économie et Gestion": "350 000 - 750 000 FCFA/mois",
    "default": "300 000 - 600 000 FCFA/mois"
  };
  return salaryRanges[category] || salaryRanges.default;
}

function generateCareerRequirements(career: string, category: string): string[] {
  const requirements: Record<string, string[]> = {
    "Sciences et Technologies": ["Diplôme d'ingénieur ou équivalent", "Maîtrise des technologies", "Capacités d'analyse"],
    "Santé": ["Diplôme médical reconnu", "Inscription à l'ordre", "Formation continue"],
    "Droit et Sciences Juridiques": ["Diplôme en droit", "Stage professionnel", "Inscription au barreau"],
    "default": ["Formation spécialisée", "Expérience professionnelle", "Compétences techniques"]
  };
  return requirements[category] || requirements.default;
}

function generateCareerGrowth(career: string, category: string): string {
  const growthPaths: Record<string, string> = {
    "Sciences et Technologies": "Excellent - Secteur en forte expansion",
    "Santé": "Très bon - Demande constante",
    "Droit et Sciences Juridiques": "Bon - Évolution avec l'économie",
    "Économie et Gestion": "Bon - Besoins croissants",
    "default": "Bon - Perspectives d'évolution régulières"
  };
  return growthPaths[category] || growthPaths.default;
}

function generateSubjectsForLevel(name: string, category: string, level: string): string[] {
  const subjectsByCategory: Record<string, Record<string, string[]>> = {
    "Sciences et Technologies": {
      "licence": ["Mathématiques", "Physique", "Programmation", "Algorithmique", "Systèmes", "Réseaux"],
      "master": ["Intelligence Artificielle", "Cybersécurité", "Big Data", "Cloud Computing", "DevOps", "Architecture Logicielle"]
    },
    "Santé": {
      "licence": ["Anatomie", "Physiologie", "Biochimie", "Pharmacologie", "Pathologie", "Sémiologie"],
      "master": ["Médecine Spécialisée", "Recherche Clinique", "Épidémiologie", "Biostatistiques", "Éthique Médicale"]
    },
    "Droit et Sciences Juridiques": {
      "licence": ["Droit Civil", "Droit Pénal", "Droit Constitutionnel", "Procédure", "Droit Commercial", "Droit du Travail"],
      "master": ["Droit des Affaires", "Droit International", "Arbitrage", "Fiscalité", "Propriété Intellectuelle"]
    },
    "default": {
      "licence": ["Fondamentaux théoriques", "Méthodologie", "Pratique professionnelle", "Stage"],
      "master": ["Spécialisation avancée", "Recherche", "Projet professionnel", "Mémoire"]
    }
  };
  
  const categorySubjects = subjectsByCategory[category] || subjectsByCategory.default;
  return categorySubjects[level] || categorySubjects.licence;
}

function getTechnicalSkillsForCategory(category: string): string[] {
  const technicalSkills: Record<string, string[]> = {
    "Sciences et Technologies": ["Programmation", "Analyse de données", "Résolution de problèmes", "Gestion de projet", "Tests et validation", "Documentation technique"],
    "Santé": ["Diagnostic médical", "Techniques de soins", "Utilisation d'équipements", "Prescription", "Protocoles sanitaires", "Recherche clinique"],
    "Droit et Sciences Juridiques": ["Analyse juridique", "Rédaction d'actes", "Plaidoirie", "Recherche législative", "Négociation", "Conseil juridique"],
    "Économie et Gestion": ["Analyse financière", "Gestion de budget", "Comptabilité", "Marketing", "Stratégie d'entreprise", "Audit"],
    "default": ["Expertise métier", "Analyse", "Planification", "Gestion", "Communication", "Innovation"]
  };
  return technicalSkills[category] || technicalSkills.default;
}

function getSoftSkillsForCategory(category: string): string[] {
  return [
    "Communication efficace",
    "Travail en équipe",
    "Leadership",
    "Adaptabilité",
    "Pensée critique",
    "Gestion du stress",
    "Créativité"
  ];
}

function getAdmissionRequirementsForCategory(category: string): string[] {
  const requirements: Record<string, string[]> = {
    "Sciences et Technologies": ["Baccalauréat série C ou D", "Bonnes bases en mathématiques", "Logique et raisonnement", "Concours d'entrée"],
    "Santé": ["Baccalauréat série C ou D", "Excellent niveau en sciences", "Concours très sélectif", "Aptitudes physiques"],
    "Droit et Sciences Juridiques": ["Baccalauréat toutes séries", "Excellente maîtrise du français", "Capacités de rédaction", "Culture générale"],
    "Économie et Gestion": ["Baccalauréat toutes séries", "Bonnes bases en mathématiques", "Esprit d'analyse", "Dossier scolaire"],
    "default": ["Baccalauréat", "Dossier de candidature", "Motivation", "Entretien"]
  };
  return requirements[category] || requirements.default;
}

function generateSalaryInfo(category: string): { entry: string; average: string; senior: string } {
  const salaries: Record<string, { entry: string; average: string; senior: string }> = {
    "Sciences et Technologies": {
      entry: "400 000 - 600 000 FCFA/mois",
      average: "700 000 - 1 200 000 FCFA/mois",
      senior: "1 500 000+ FCFA/mois"
    },
    "Santé": {
      entry: "500 000 - 800 000 FCFA/mois",
      average: "1 000 000 - 1 800 000 FCFA/mois",
      senior: "2 000 000+ FCFA/mois"
    },
    "Droit et Sciences Juridiques": {
      entry: "300 000 - 500 000 FCFA/mois",
      average: "600 000 - 1 200 000 FCFA/mois",
      senior: "1 500 000+ FCFA/mois"
    },
    "default": {
      entry: "250 000 - 400 000 FCFA/mois",
      average: "500 000 - 800 000 FCFA/mois",
      senior: "1 000 000+ FCFA/mois"
    }
  };
  return salaries[category] || salaries.default;
}

function getImageForCategory(category: string): string {
  const images: Record<string, string> = {
    "Sciences et Technologies": "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "Santé": "https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "Droit et Sciences Juridiques": "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "Économie et Gestion": "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "default": "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1200"
  };
  return images[category] || images.default;
}

function getHighlightsForCategory(category: string): string[] {
  const highlights: Record<string, string[]> = {
    "Sciences et Technologies": ["Secteur en forte croissance", "Salaires attractifs", "Opportunités internationales", "Innovation constante"],
    "Santé": ["Impact social important", "Stabilité professionnelle", "Reconnaissance sociale", "Formation continue"],
    "Droit et Sciences Juridiques": ["Prestige professionnel", "Diversité des carrières", "Évolution possible", "Impact sociétal"],
    "Économie et Gestion": ["Polyvalence professionnelle", "Opportunités d'entreprendre", "Secteur dynamique", "Évolution rapide"],
    "default": ["Formation de qualité", "Débouchés variés", "Expertise reconnue", "Évolution de carrière"]
  };
  return highlights[category] || highlights.default;
}
