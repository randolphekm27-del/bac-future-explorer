import { Program } from "./programs";

export interface ProgramPageContent {
  slug: string;
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
}

// Contenu détaillé pour chaque filière
export const programPagesContent: Record<string, ProgramPageContent> = {
  "informatique-technologies": {
    slug: "informatique-technologies",
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
        },
        {
          title: "Architecte Système",
          description: "Concevez l'architecture technique des applications et systèmes d'information. Définissez les standards techniques et guidez les équipes de développement.",
          salary: "400 000 - 1 000 000 FCFA/mois",
          requirements: ["Architecture logicielle", "Cloud Computing", "DevOps", "Leadership technique"],
          growth: "Poste senior avec responsabilités stratégiques"
        },
        {
          title: "Chef de Projet IT",
          description: "Dirigez des projets informatiques de A à Z. Coordonnez les équipes techniques, gérez les budgets et assurez la livraison dans les délais.",
          salary: "300 000 - 700 000 FCFA/mois",
          requirements: ["Gestion de projet", "Méthodologies Agile", "Communication", "Leadership"],
          growth: "Évolution vers Directeur IT ou consultant"
        },
        {
          title: "Entrepreneur Tech",
          description: "Créez votre propre startup technologique. Développez des solutions innovantes pour résoudre les défis locaux et conquérir les marchés africains et internationaux.",
          salary: "Variable selon le succès",
          requirements: ["Vision entrepreneuriale", "Compétences techniques", "Business development", "Résilience"],
          growth: "Potentiel illimité avec les bonnes idées"
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
        },
        {
          name: "Master en Intelligence Artificielle (Bac+5)",
          duration: "2 ans",
          description: "Formation de pointe en IA, machine learning et data science. Préparez-vous aux métiers d'avenir dans l'analyse de données et l'automatisation intelligente.",
          subjects: [
            "Machine Learning et Deep Learning",
            "Traitement du langage naturel",
            "Vision par ordinateur",
            "Big Data et Analytics",
            "Éthique de l'IA",
            "Recherche et développement",
            "Projets industriels",
            "Mémoire de recherche"
          ]
        },
        {
          name: "Doctorat en Informatique (Bac+8)",
          duration: "3 ans",
          description: "Recherche avancée et innovation technologique. Contribuez à l'avancement des connaissances en informatique et préparez-vous à des carrières académiques ou de recherche industrielle.",
          subjects: [
            "Recherche fondamentale",
            "Publications scientifiques",
            "Encadrement d'étudiants",
            "Collaboration internationale",
            "Innovation technologique",
            "Transfert de technologie",
            "Thèse de doctorat",
            "Enseignement universitaire"
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
          quote: "Cette formation m'a donné toutes les compétences pour réussir dans le développement web. Je travaille maintenant sur des projets innovants qui impactent des milliers d'utilisateurs à travers l'Afrique. L'approche pratique et les projets concrets m'ont parfaitement préparée au monde professionnel."
        },
        {
          name: "Jean Togbé",
          role: "Chef de projet IT",
          company: "Orange Bénin",
          quote: "Grâce à ma formation en informatique, j'ai pu évoluer rapidement et diriger des équipes techniques sur des projets stratégiques. La formation m'a appris non seulement la technique, mais aussi le leadership et la gestion de projets complexes."
        },
        {
          name: "Rachelle Agbodjan",
          role: "Data Scientist",
          company: "Banque Atlantique",
          quote: "La spécialisation en intelligence artificielle m'a ouvert des portes incroyables. Je développe maintenant des modèles prédictifs qui aident la banque à mieux servir ses clients. C'est passionnant de voir l'impact concret de mon travail."
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
        },
        {
          title: "Stages et opportunités tech",
          description: "Offres de stages dans les entreprises technologiques",
          link: "/internships?category=tech",
          type: "career"
        }
      ]
    }
  },

  "droit-sciences-juridiques": {
    slug: "droit-sciences-juridiques",
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
        },
        {
          title: "Juriste d'Entreprise",
          description: "Conseillez votre entreprise sur tous les aspects juridiques : contrats, conformité, litiges. Prévenez les risques juridiques et négociez les accords commerciaux.",
          salary: "200 000 - 500 000 FCFA/mois",
          requirements: ["Spécialisation en droit des affaires", "Connaissance du secteur d'activité", "Anglais juridique"],
          growth: "Évolution vers Directeur Juridique ou Secrétaire Général"
        },
        {
          title: "Huissier de Justice",
          description: "Exécutez les décisions de justice et signifiez les actes juridiques. Participez au recouvrement de créances et aux constats officiels.",
          salary: "150 000 - 400 000 FCFA/mois",
          requirements: ["Stage en étude d'huissier", "Examen professionnel", "Installation en étude"],
          growth: "Profession réglementée avec monopole territorial"
        },
        {
          title: "Conseiller Juridique",
          description: "Accompagnez les particuliers et PME dans leurs démarches juridiques. Rédigez des contrats, conseillez sur la conformité et prévenez les litiges.",
          salary: "120 000 - 350 000 FCFA/mois",
          requirements: ["Expertise dans un domaine spécifique", "Réseau professionnel", "Communication excellente"],
          growth: "Évolution vers consultant indépendant ou cabinet spécialisé"
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
          quote: "Ma formation en droit m'a permis d'ouvrir mon propre cabinet et de défendre les droits de mes clients avec expertise et passion. Chaque jour, je mesure l'impact positif de mon travail sur la société. C'est une profession exigeante mais extraordinairement enrichissante."
        },
        {
          name: "Dr. Kossivi Agbéko",
          role: "Magistrat à la Cour d'Appel",
          company: "Cour d'Appel de Porto-Novo",
          quote: "Les études de droit offrent une formation intellectuelle exceptionnelle qui ouvre les portes de nombreuses carrières prestigieuses. Servir la justice et contribuer à l'État de droit est un honneur quotidien qui donne du sens à ma vie professionnelle."
        },
        {
          name: "Maître Sylvain Hounkpatin",
          role: "Notaire",
          company: "Étude Hounkpatin",
          quote: "Le notariat combine conseil juridique et service public. J'accompagne les familles et entreprises dans leurs moments importants. La formation juridique solide est essentielle pour exercer cette profession de confiance avec compétence et éthique."
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
        },
        {
          title: "Stages en cabinets juridiques",
          description: "Opportunités de stages dans le secteur juridique",
          link: "/internships?category=droit",
          type: "career"
        }
      ]
    }
  },

  "genie-civil-architecture": {
    slug: "genie-civil-architecture",
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
        },
        {
          title: "Ingénieur Structure",
          description: "Spécialisez-vous dans le calcul et la conception des structures. Assurez la stabilité et la sécurité des ouvrages face aux contraintes naturelles.",
          salary: "280 000 - 650 000 FCFA/mois",
          requirements: ["Calculs avancés", "Logiciels de simulation", "Normes de construction", "Précision"],
          growth: "Expert reconnu avec missions de conseil spécialisé"
        },
        {
          title: "Urbaniste",
          description: "Planifiez le développement des villes et territoires. Concevez des espaces urbains durables qui répondent aux besoins des populations croissantes.",
          salary: "200 000 - 500 000 FCFA/mois",
          requirements: ["Aménagement du territoire", "SIG", "Sociologie urbaine", "Environnement"],
          growth: "Évolution vers Directeur d'urbanisme ou consultant international"
        },
        {
          title: "Entrepreneur BTP",
          description: "Créez votre entreprise de construction. Développez votre clientèle, gérez vos équipes et participez au développement économique du secteur.",
          salary: "Variable selon l'activité",
          requirements: ["Compétences techniques", "Gestion d'entreprise", "Réseau professionnel", "Capital initial"],
          growth: "Croissance selon la taille et la spécialisation de l'entreprise"
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
        },
        {
          name: "Master en Architecture (Bac+5)",
          duration: "2 ans",
          description: "Formation créative et technique en conception architecturale. Développement de la vision spatiale et de la créativité pour créer des espaces innovants.",
          subjects: [
            "Conception architecturale",
            "Histoire de l'architecture",
            "Urbanisme et aménagement",
            "Architecture bioclimatique",
            "Infographie et modélisation 3D",
            "Réglementation et normes",
            "Sociologie de l'habitat",
            "Projet architectural de fin d'études"
          ]
        },
        {
          name: "Doctorat en Génie Civil (Bac+8)",
          duration: "3 ans",
          description: "Recherche avancée en ingénierie civile. Développement de nouvelles techniques de construction et contribution à l'innovation dans le secteur BTP.",
          subjects: [
            "Recherche en matériaux innovants",
            "Modélisation numérique avancée",
            "Construction durable et écologique",
            "Gestion des risques naturels",
            "Innovation technologique",
            "Publications scientifiques",
            "Thèse de doctorat",
            "Enseignement universitaire"
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
          quote: "Ma formation en génie civil m'a permis de diriger des projets d'envergure nationale et de contribuer au développement des infrastructures du pays. Chaque pont, chaque bâtiment que nous construisons améliore la vie des Béninois. C'est une fierté immense."
        },
        {
          name: "Archi. Sophie Houénou",
          role: "Architecte Principale",
          company: "Cabinet d'Architecture Moderne",
          quote: "L'architecture allie technique et créativité de façon unique. Cette formation m'a donné les outils pour créer des espaces qui transforment positivement la vie des gens. Voir ses créations prendre vie est une satisfaction incomparable."
        },
        {
          name: "Ing. Michel Dossou",
          role: "Entrepreneur BTP",
          company: "Dossou Construction",
          quote: "Après 10 ans en entreprise, j'ai créé ma propre société de construction. La formation d'ingénieur m'a donné la crédibilité technique et les compétences de gestion nécessaires pour réussir en tant qu'entrepreneur."
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
        },
        {
          title: "Stages en entreprises BTP",
          description: "Opportunités de stages dans la construction",
          link: "/internships?category=btp",
          type: "career"
        }
      ]
    }
  },

  // Ajout de toutes les autres filières avec contenu spécifique
  "medecine-generale": {
    slug: "medecine-generale",
    heroSection: {
      title: "Médecine Générale",
      subtitle: "Sauvez des vies et soignez l'humanité",
      description: "Devenez médecin et consacrez votre vie à soigner, guérir et accompagner les patients. Une vocation noble qui demande excellence académique, dévouement et compassion.",
      backgroundImage: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1200",
      highlights: [
        "Profession la plus respectée socialement",
        "Impact direct sur la santé publique",
        "Revenus élevés après spécialisation",
        "Possibilités d'exercice international"
      ]
    },
    aboutSection: {
      title: "La médecine : une vocation au service de la vie",
      content: [
        "Les études de médecine représentent l'un des parcours les plus exigeants et les plus nobles de l'enseignement supérieur. Cette formation rigoureuse de 7 à 11 ans prépare les futurs médecins à diagnostiquer, traiter et prévenir les maladies qui affectent l'humanité.",
        "L'enseignement médical combine cours théoriques approfondis, travaux pratiques en laboratoire et stages cliniques intensifs dans les hôpitaux. Vous acquérez une connaissance encyclopédique du corps humain, des pathologies et des traitements les plus modernes.",
        "Au-delà des compétences médicales, cette formation développe votre humanité, votre empathie et votre capacité à accompagner les patients dans les moments les plus difficiles de leur vie. Vous devenez un pilier de la société, respecté et consulté pour votre expertise."
      ],
      keyPoints: [
        "Formation médicale complète de 7 ans minimum",
        "Stages hospitaliers dès la 4ème année",
        "Spécialisations multiples possibles",
        "Formation continue obligatoire",
        "Recherche médicale et publications",
        "Missions humanitaires possibles"
      ]
    },
    careersSection: {
      title: "Spécialisations médicales et débouchés",
      description: "La médecine offre de nombreuses spécialisations permettant de se concentrer sur des domaines spécifiques de la santé humaine.",
      careers: [
        {
          title: "Médecin Généraliste",
          description: "Premier contact avec les patients, diagnostic et traitement des pathologies courantes. Coordination des soins et orientation vers les spécialistes.",
          salary: "300 000 - 600 000 FCFA/mois",
          requirements: ["Diplôme de médecine", "Thèse soutenue", "Inscription à l'Ordre"],
          growth: "Installation en cabinet privé ou poste hospitalier"
        },
        {
          title: "Chirurgien",
          description: "Intervention chirurgicale pour traiter les pathologies nécessitant une opération. Spécialisations multiples selon les organes et techniques.",
          salary: "500 000 - 1 500 000+ FCFA/mois",
          requirements: ["Spécialisation chirurgicale", "Résidanat", "Dextérité manuelle"],
          growth: "Chef de service ou chirurgien réputé"
        },
        {
          title: "Pédiatre",
          description: "Soins médicaux spécialisés pour les enfants de la naissance à l'adolescence. Suivi du développement et prévention des maladies infantiles.",
          salary: "400 000 - 800 000 FCFA/mois",
          requirements: ["Spécialisation pédiatrique", "Patience avec les enfants", "Communication avec les parents"],
          growth: "Expert en santé infantile reconnu"
        }
      ]
    },
    studiesSection: {
      title: "Cursus médical : un parcours d'excellence",
      duration: "7 à 11 ans selon la spécialisation",
      levels: [
        {
          name: "1ère année (PACES)",
          duration: "1 an",
          description: "Année de sélection très intensive couvrant les sciences fondamentales. Concours très sélectif en fin d'année.",
          subjects: ["Anatomie", "Physiologie", "Biochimie", "Biophysique", "Biostatistiques", "Sciences humaines"]
        },
        {
          name: "2ème et 3ème années",
          duration: "2 ans", 
          description: "Approfondissement des sciences médicales fondamentales et introduction à la pathologie.",
          subjects: ["Anatomie pathologique", "Pharmacologie", "Microbiologie", "Immunologie", "Sémiologie", "Éthique médicale"]
        },
        {
          name: "4ème, 5ème et 6ème années",
          duration: "3 ans",
          description: "Formation clinique intensive avec stages hospitaliers dans toutes les spécialités médicales.",
          subjects: ["Médecine interne", "Chirurgie", "Pédiatrie", "Gynécologie", "Psychiatrie", "Urgences", "Stages hospitaliers"]
        },
        {
          name: "7ème année (Internat)",
          duration: "1 an",
          description: "Année d'internat avec responsabilités médicales sous supervision. Préparation à l'exercice médical autonome.",
          subjects: ["Pratique médicale", "Gardes hospitalières", "Thèse de médecine", "Préparation à l'installation"]
        }
      ]
    },
    skillsSection: {
      title: "Compétences médicales et humaines",
      technical: {
        title: "Compétences médicales",
        skills: [
          "Diagnostic médical précis basé sur l'examen clinique",
          "Prescription médicamenteuse adaptée et sécurisée",
          "Techniques de soins et gestes médicaux",
          "Utilisation d'équipements médicaux sophistiqués",
          "Interprétation d'examens complémentaires",
          "Procédures d'urgence et réanimation",
          "Chirurgie selon la spécialisation",
          "Recherche médicale et analyse scientifique"
        ]
      },
      soft: {
        title: "Qualités humaines essentielles",
        skills: [
          "Empathie profonde et compassion envers les patients",
          "Communication bienveillante avec patients et familles",
          "Gestion du stress et des situations d'urgence",
          "Travail d'équipe avec le personnel médical",
          "Éthique médicale et respect du secret professionnel",
          "Résistance physique et mentale aux longues heures",
          "Capacité de décision rapide en situation critique",
          "Formation continue et remise en question permanente"
        ]
      }
    },
    admissionSection: {
      title: "Intégrer les études de médecine : un défi d'excellence",
      requirements: [
        "Baccalauréat série C ou D avec mention très bien (minimum 16/20)",
        "Excellent niveau en sciences (mathématiques, physique, SVT, chimie)",
        "Capacités de mémorisation et de concentration exceptionnelles",
        "Motivation profonde pour les sciences médicales",
        "Aptitudes physiques et mentales pour les longues études",
        "Sens du service et vocation d'aide aux autres"
      ],
      process: [
        "Concours d'entrée extrêmement sélectif (taux de réussite < 10%)",
        "Épreuves en sciences (mathématiques, physique, chimie, biologie)",
        "Test de culture générale et de logique",
        "Entretien de motivation approfondi",
        "Examen médical et psychologique",
        "Classement national et affectation selon les places disponibles"
      ],
      tips: [
        "Préparez-vous intensivement pendant 1-2 ans (classes préparatoires recommandées)",
        "Maîtrisez parfaitement les sciences du baccalauréat",
        "Développez votre culture médicale en lisant des revues spécialisées",
        "Effectuez des stages d'observation dans les hôpitaux",
        "Renforcez votre motivation par des rencontres avec des médecins",
        "Préparez-vous mentalement aux études longues et difficiles"
      ]
    },
    testimonialsSection: {
      title: "Témoignages de médecins diplômés",
      testimonials: [
        {
          name: "Dr. Adjara Kossou",
          role: "Médecin Généraliste",
          company: "Centre de Santé de Cotonou",
          quote: "Devenir médecin était mon rêve d'enfance. Malgré la difficulté des études, chaque jour je mesure la chance d'avoir ce métier. Soigner, rassurer, guérir... il n'y a pas de plus belle mission. Les études sont exigeantes mais la récompense humaine est immense."
        },
        {
          name: "Dr. Rodrigue Agbodjan",
          role: "Chirurgien Orthopédiste",
          company: "CNHU-HKM",
          quote: "La chirurgie demande excellence technique et sang-froid. Ma formation m'a donné les bases solides pour me spécialiser et aujourd'hui, je redonne mobilité et espoir à mes patients. C'est un privilège extraordinaire de pouvoir transformer des vies."
        }
      ]
    },
    resourcesSection: {
      title: "Ressources pour futurs médecins",
      resources: [
        {
          title: "Faculté des Sciences de la Santé - UAC",
          description: "Seule faculté de médecine publique du Bénin",
          link: "/universities/universite-abomey-calavi",
          type: "university"
        },
        {
          title: "Ordre des Médecins du Bénin",
          description: "Informations sur la profession médicale",
          link: "#",
          type: "career"
        },
        {
          title: "Préparation au concours de médecine",
          description: "Guides et conseils pour réussir le concours",
          link: "#",
          type: "guide"
        },
        {
          title: "Stages hospitaliers",
          description: "Opportunités de stages dans les hôpitaux",
          link: "/internships?category=sante",
          type: "career"
        }
      ]
    }
  },

  // Ajout de contenu pour d'autres filières importantes
  "gestion-administration": {
    slug: "gestion-administration",
    heroSection: {
      title: "Gestion et Administration",
      subtitle: "Dirigez et gérez les organisations de demain",
      description: "Formez-vous au management moderne et à la gestion d'entreprise. Développez les compétences pour diriger des équipes, optimiser les performances et créer de la valeur dans tous les secteurs économiques.",
      backgroundImage: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1200",
      highlights: [
        "Formation polyvalente et adaptable",
        "Débouchés dans tous les secteurs",
        "Possibilités d'entrepreneuriat",
        "Évolution rapide vers des postes de direction"
      ]
    },
    aboutSection: {
      title: "Management et gestion : les clés du succès entrepreneurial",
      content: [
        "La gestion et l'administration des entreprises forment les futurs leaders économiques du Bénin. Cette formation polyvalente couvre tous les aspects du management moderne : stratégie, finance, marketing, ressources humaines et opérations.",
        "Vous développerez une vision globale de l'entreprise et apprendrez à prendre des décisions stratégiques dans un environnement complexe et changeant. La formation combine théorie managériale et pratique intensive à travers des études de cas réels et des projets d'entreprise.",
        "Cette filière prépare aussi bien aux carrières en entreprise qu'à l'entrepreneuriat. Nos diplômés créent des entreprises innovantes, dirigent des filiales de multinationales ou deviennent consultants reconnus dans leur domaine d'expertise."
      ],
      keyPoints: [
        "Formation complète en management et stratégie d'entreprise",
        "Stages obligatoires en entreprise dès la 2ème année",
        "Projets concrets avec des entreprises partenaires",
        "Formation à l'entrepreneuriat et à la création d'entreprise",
        "Développement du leadership et des soft skills",
        "Réseau professionnel étendu avec les anciens diplômés"
      ]
    },
    careersSection: {
      title: "Carrières en management et gestion",
      description: "Les diplômés en gestion accèdent à des postes variés dans tous les secteurs économiques, avec d'excellentes perspectives d'évolution.",
      careers: [
        {
          title: "Manager / Directeur d'Entreprise",
          description: "Dirigez une entreprise ou une division. Définissez la stratégie, gérez les équipes et assurez la performance économique de l'organisation.",
          salary: "300 000 - 1 000 000+ FCFA/mois",
          requirements: ["Leadership", "Vision stratégique", "Gestion d'équipes", "Analyse financière"],
          growth: "Évolution vers PDG ou création d'entreprise"
        },
        {
          title: "Entrepreneur / Créateur d'Entreprise",
          description: "Créez et développez votre propre entreprise. Identifiez les opportunités de marché et construisez des solutions innovantes pour répondre aux besoins.",
          salary: "Variable selon le succès",
          requirements: ["Vision entrepreneuriale", "Prise de risque", "Résilience", "Réseau professionnel"],
          growth: "Croissance selon le développement de l'entreprise"
        },
        {
          title: "Consultant en Management",
          description: "Conseillez les entreprises sur leur organisation, leur stratégie et leurs processus. Accompagnez les transformations et améliorations organisationnelles.",
          salary: "250 000 - 800 000 FCFA/mois",
          requirements: ["Expertise sectorielle", "Analyse organisationnelle", "Communication", "Résolution de problèmes"],
          growth: "Évolution vers partner de cabinet ou consultant indépendant"
        }
      ]
    },
    studiesSection: {
      title: "Parcours de formation en gestion",
      duration: "3 à 5 ans selon le niveau visé",
      levels: [
        {
          name: "Licence en Gestion (Bac+3)",
          duration: "3 ans",
          description: "Formation fondamentale couvrant tous les aspects de la gestion d'entreprise et du management.",
          subjects: ["Management général", "Comptabilité", "Marketing", "Finance", "Ressources humaines", "Droit des affaires", "Économie", "Statistiques"]
        },
        {
          name: "Master en Management (Bac+5)",
          duration: "2 ans",
          description: "Spécialisation avancée avec choix de parcours : management stratégique, entrepreneuriat, ou management international.",
          subjects: ["Stratégie d'entreprise", "Leadership", "Innovation", "Gestion de projets", "Management interculturel", "Stage en entreprise", "Mémoire de recherche"]
        }
      ]
    },
    skillsSection: {
      title: "Compétences managériales développées",
      technical: {
        title: "Compétences de gestion",
        skills: [
          "Analyse financière et budgétaire",
          "Planification stratégique et opérationnelle",
          "Gestion des ressources humaines",
          "Marketing et développement commercial",
          "Contrôle de gestion et tableaux de bord",
          "Négociation et gestion des contrats",
          "Gestion de projets complexes",
          "Analyse de marché et veille concurrentielle"
        ]
      },
      soft: {
        title: "Qualités de leader",
        skills: [
          "Leadership naturel et charisme",
          "Communication persuasive et influence",
          "Prise de décision sous pression",
          "Vision stratégique et anticipation",
          "Adaptabilité et gestion du changement",
          "Esprit d'équipe et collaboration",
          "Créativité et innovation",
          "Éthique et responsabilité sociale"
        ]
      }
    },
    admissionSection: {
      title: "Intégrer une formation en gestion",
      requirements: [
        "Baccalauréat toutes séries avec de bons résultats",
        "Aptitudes en mathématiques et logique",
        "Capacités de communication et d'expression",
        "Intérêt pour l'économie et l'actualité",
        "Esprit d'initiative et leadership potentiel",
        "Motivation pour l'entrepreneuriat ou le management"
      ],
      process: [
        "Dossier de candidature avec relevés de notes",
        "Test d'aptitude (logique, mathématiques, culture générale)",
        "Entretien de motivation et de personnalité",
        "Évaluation du potentiel de leadership",
        "Présentation d'un projet ou d'une idée d'entreprise",
        "Admission selon le classement et les places disponibles"
      ],
      tips: [
        "Développez votre culture économique et entrepreneuriale",
        "Participez à des concours de création d'entreprise",
        "Effectuez des stages en entreprise pour comprendre le management",
        "Lisez la presse économique et suivez l'actualité des affaires",
        "Développez vos capacités de communication et de présentation",
        "Montrez votre esprit d'initiative à travers des projets personnels"
      ]
    },
    resourcesSection: {
      title: "Ressources pour futurs managers",
      resources: [
        {
          title: "Écoles de commerce au Bénin",
          description: "Guide des formations en gestion et management",
          link: "/universities?filter=gestion",
          type: "university"
        },
        {
          title: "Incubateurs d'entreprises",
          description: "Structures d'accompagnement des entrepreneurs",
          link: "#",
          type: "career"
        },
        {
          title: "Stages en entreprise",
          description: "Opportunités de stages en management",
          link: "/internships?category=management",
          type: "career"
        }
      ]
    }
  }
};

// Fonction pour obtenir le contenu d'une page de filière
export function getProgramPageContent(slug: string): ProgramPageContent | null {
  return programPagesContent[slug] || null;
}

// Fonction pour générer du contenu par défaut pour les filières sans contenu spécifique
export async function generateDefaultContent(program: Program): Promise<ProgramPageContent> {
  // Utiliser le générateur de contenu intelligent
  const { ProgramContentGenerator } = await import("./program-content-generator");
  return ProgramContentGenerator.generateCompleteContent(program);
};

// Fonction pour obtenir toutes les filières avec contenu
export function getAllProgramSlugs(): string[] {
  return Object.keys(programPagesContent);
}