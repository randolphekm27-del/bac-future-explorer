import { Program } from "./programs";
import { ProgramPageContent } from "./program-pages";

// Générateur de contenu intelligent pour les filières sans contenu spécifique
export class ProgramContentGenerator {
  
  static generateHeroSection(program: Program): ProgramPageContent['heroSection'] {
    const categorySubtitles = {
      "Santé": "Soignez et sauvez des vies",
      "Droit et Sciences Juridiques": "Défendez la justice et les droits",
      "Économie et Gestion": "Dirigez et gérez les organisations",
      "Sciences et Technologies": "Innovez et créez l'avenir",
      "Éducation": "Formez les générations futures",
      "Agriculture et Sciences Vétérinaires": "Nourrissez le monde de demain",
      "Arts et Communication": "Créez et communiquez avec impact",
      "Sciences Sociales": "Comprenez et transformez la société",
      "Langues et Littératures": "Maîtrisez les langues et cultures",
      "Autres Disciplines": "Excellez dans votre domaine"
    };

    const categoryHighlights = {
      "Santé": [
        "Profession respectée et noble",
        "Impact direct sur la santé publique",
        "Revenus attractifs",
        "Possibilités d'exercice international"
      ],
      "Droit et Sciences Juridiques": [
        "Profession prestigieuse",
        "Diversité des spécialisations",
        "Revenus élevés après expérience",
        "Impact social important"
      ],
      "Économie et Gestion": [
        "Formation polyvalente",
        "Débouchés dans tous secteurs",
        "Possibilités d'entrepreneuriat",
        "Évolution rapide vers direction"
      ],
      "Sciences et Technologies": [
        "Secteur en forte croissance",
        "Technologies d'avenir",
        "Salaires attractifs",
        "Opportunités internationales"
      ],
      "Éducation": [
        "Mission noble et sociale",
        "Stabilité d'emploi",
        "Vacances scolaires",
        "Évolution vers l'inspection"
      ],
      "Agriculture et Sciences Vétérinaires": [
        "Secteur prioritaire au Bénin",
        "Sécurité alimentaire",
        "Entrepreneuriat agricole",
        "Développement rural"
      ],
      "Arts et Communication": [
        "Créativité et expression",
        "Secteur en digitalisation",
        "Freelance possible",
        "Impact culturel"
      ],
      "Sciences Sociales": [
        "Compréhension de la société",
        "Recherche et analyse",
        "Conseil et accompagnement",
        "Transformation sociale"
      ],
      "Langues et Littératures": [
        "Ouverture internationale",
        "Communication interculturelle",
        "Traduction et interprétation",
        "Enseignement des langues"
      ],
      "Autres Disciplines": [
        "Formation spécialisée",
        "Expertise reconnue",
        "Débouchés spécifiques",
        "Évolution professionnelle"
      ]
    };

    return {
      title: program.name,
      subtitle: categorySubtitles[program.category as keyof typeof categorySubtitles] || "Excellez dans votre domaine",
      description: program.detailedDescription || `Découvrez ${program.name}, une formation d'excellence qui vous prépare aux métiers de ${program.category.toLowerCase()}. Développez vos compétences et construisez votre avenir professionnel dans ce domaine passionnant.`,
      backgroundImage: program.image || "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1200",
      highlights: categoryHighlights[program.category as keyof typeof categoryHighlights] || [
        "Formation de qualité",
        "Débouchés prometteurs",
        "Accompagnement personnalisé",
        "Réseau professionnel"
      ]
    };
  }

  static generateAboutSection(program: Program): ProgramPageContent['aboutSection'] {
    const categoryDescriptions = {
      "Santé": [
        `${program.name} forme des professionnels de santé dévoués à soigner et accompagner les patients. Cette formation rigoureuse combine connaissances scientifiques approfondies et pratique clinique intensive.`,
        "L'enseignement médical développe non seulement l'expertise technique mais aussi l'humanité, l'empathie et la capacité d'accompagnement des patients dans les moments difficiles.",
        "Les diplômés contribuent directement à l'amélioration de la santé publique au Bénin et peuvent exercer dans diverses structures : hôpitaux, cliniques privées, centres de santé communautaires ou organisations internationales."
      ],
      "Droit et Sciences Juridiques": [
        `${program.name} forme des juristes capables d'évoluer dans tous les secteurs juridiques. Cette formation exigeante couvre l'ensemble du système juridique béninois et international.`,
        "L'enseignement développe l'esprit d'analyse, la capacité d'argumentation et le sens de la justice. Vous apprendrez à interpréter les textes de loi et à conseiller efficacement.",
        "Cette formation prépare aux carrières d'avocat, magistrat, notaire, juriste d'entreprise ou conseiller juridique, avec des possibilités d'évolution vers des postes de haute responsabilité."
      ],
      "Sciences et Technologies": [
        `${program.name} prépare aux métiers technologiques d'avenir. Cette formation combine théorie scientifique solide et pratique intensive des technologies modernes.`,
        "Vous développerez des compétences en innovation, résolution de problèmes complexes et maîtrise des outils technologiques de pointe.",
        "Les diplômés participent à la transformation digitale du Bénin et peuvent travailler localement ou à l'international dans des entreprises technologiques innovantes."
      ]
    };

    const defaultDescription = [
      `${program.name} est une formation complète qui prépare aux métiers de ${program.category.toLowerCase()}. Cette filière combine théorie approfondie et pratique professionnelle.`,
      "L'enseignement développe les compétences techniques spécialisées ainsi que les qualités humaines nécessaires pour exceller dans ce domaine.",
      "Les diplômés bénéficient d'excellentes perspectives de carrière et peuvent évoluer rapidement vers des postes à responsabilités."
    ];

    return {
      title: `Excellence en ${program.name}`,
      content: categoryDescriptions[program.category as keyof typeof categoryDescriptions] || defaultDescription,
      keyPoints: [
        "Formation théorique et pratique équilibrée",
        "Stages en entreprise obligatoires", 
        "Accompagnement personnalisé vers l'emploi",
        "Réseau d'anciens diplômés actif",
        "Possibilités de spécialisation avancée",
        "Formation continue et mise à jour des compétences"
      ]
    };
  }

  static generateCareersSection(program: Program): ProgramPageContent['careersSection'] {
    const careers = program.careers.slice(0, 6).map(career => ({
      title: career,
      description: `Exercez le métier de ${career.toLowerCase()} avec expertise et professionnalisme. Cette profession offre de nombreuses opportunités d'évolution et d'épanouissement professionnel.`,
      salary: this.getSalaryRange(program.category),
      requirements: this.getCareerRequirements(career, program.category),
      growth: this.getCareerGrowth(career, program.category)
    }));

    return {
      title: "Débouchés professionnels et carrières",
      description: `${program.name} offre de nombreuses opportunités de carrière dans le secteur ${program.category.toLowerCase()} avec d'excellentes perspectives d'évolution.`,
      careers
    };
  }

  private static getSalaryRange(category: string): string {
    const salaryRanges = {
      "Santé": "200 000 - 800 000 FCFA/mois",
      "Droit et Sciences Juridiques": "150 000 - 600 000 FCFA/mois",
      "Sciences et Technologies": "200 000 - 700 000 FCFA/mois",
      "Économie et Gestion": "150 000 - 500 000 FCFA/mois",
      "Éducation": "100 000 - 300 000 FCFA/mois",
      "Agriculture et Sciences Vétérinaires": "120 000 - 400 000 FCFA/mois",
      "Arts et Communication": "100 000 - 350 000 FCFA/mois",
      "Sciences Sociales": "120 000 - 350 000 FCFA/mois",
      "Langues et Littératures": "100 000 - 300 000 FCFA/mois"
    };
    
    return salaryRanges[category as keyof typeof salaryRanges] || "À définir selon l'expérience";
  }

  private static getCareerRequirements(career: string, category: string): string[] {
    const baseRequirements = ["Formation spécialisée", "Compétences techniques", "Expérience pratique"];
    
    if (category === "Santé") {
      return ["Diplôme médical reconnu", "Inscription à l'Ordre", "Formation continue", "Empathie et dévouement"];
    }
    if (category === "Droit et Sciences Juridiques") {
      return ["Diplôme de droit", "Stage professionnel", "Inscription au Barreau/Ordre", "Éthique professionnelle"];
    }
    if (category === "Sciences et Technologies") {
      return ["Compétences techniques avancées", "Veille technologique", "Travail en équipe", "Innovation"];
    }
    
    return baseRequirements;
  }

  private static getCareerGrowth(career: string, category: string): string {
    if (category === "Santé") {
      return "Évolution vers spécialisation médicale ou poste de chef de service";
    }
    if (category === "Droit et Sciences Juridiques") {
      return "Évolution vers associé de cabinet ou magistrat senior";
    }
    if (category === "Sciences et Technologies") {
      return "Évolution vers expert technique ou chef de projet";
    }
    
    return "Évolution selon l'expérience et les spécialisations acquises";
  }

  static generateStudiesSection(program: Program): ProgramPageContent['studiesSection'] {
    const levels = [];
    
    // Licence
    levels.push({
      name: `Licence en ${program.name} (Bac+3)`,
      duration: "3 ans",
      description: `Formation fondamentale couvrant les bases de ${program.name.toLowerCase()}. Acquisition des compétences essentielles pour débuter dans le secteur.`,
      subjects: program.subjects?.slice(0, 8) || [
        "Matières fondamentales du domaine",
        "Méthodologie et recherche",
        "Travaux pratiques",
        "Stage d'observation",
        "Projet tutoré",
        "Langues et communication",
        "Informatique appliquée",
        "Projet de fin d'études"
      ]
    });

    // Master si applicable
    if (program.level?.includes("Master") || program.duration?.includes("5")) {
      levels.push({
        name: `Master en ${program.name} (Bac+5)`,
        duration: "2 ans",
        description: "Spécialisation avancée avec approfondissement des compétences et ouverture vers la recherche ou l'expertise professionnelle.",
        subjects: [
          "Spécialisation avancée",
          "Recherche appliquée",
          "Gestion de projets",
          "Stage professionnel long",
          "Mémoire de recherche",
          "Séminaires d'experts",
          "Méthodologie de recherche",
          "Soutenance de mémoire"
        ]
      });
    }

    return {
      title: "Parcours d'études structuré",
      duration: program.duration || "3-5 ans selon le niveau",
      levels
    };
  }

  static generateSkillsSection(program: Program): ProgramPageContent['skillsSection'] {
    return {
      title: "Compétences développées tout au long de la formation",
      technical: {
        title: "Compétences techniques spécialisées",
        skills: program.skills?.hard || [
          "Maîtrise des outils professionnels du secteur",
          "Techniques spécialisées du domaine",
          "Analyse et résolution de problèmes",
          "Gestion de projets spécialisés",
          "Utilisation des technologies modernes",
          "Respect des normes et réglementations",
          "Contrôle qualité et expertise technique"
        ]
      },
      soft: {
        title: "Qualités humaines et professionnelles",
        skills: program.skills?.soft || [
          "Communication efficace et professionnelle",
          "Travail en équipe multidisciplinaire",
          "Adaptabilité aux évolutions du secteur",
          "Sens des responsabilités et éthique",
          "Leadership et prise d'initiative",
          "Gestion du stress et des priorités",
          "Apprentissage continu et curiosité"
        ]
      }
    };
  }

  static generateAdmissionSection(program: Program): ProgramPageContent['admissionSection'] {
    return {
      title: "Intégrer cette formation d'excellence",
      requirements: program.admissionRequirements || [
        "Baccalauréat avec de bons résultats",
        "Motivation pour le domaine d'études",
        "Capacités d'analyse et de synthèse",
        "Projet professionnel cohérent"
      ],
      process: [
        "Dépôt de candidature avec dossier complet",
        "Étude du dossier académique et motivation",
        "Entretien de motivation (selon établissement)",
        "Tests d'aptitude spécifiques (si requis)",
        "Classement et admission selon places disponibles",
        "Inscription administrative après acceptation"
      ],
      tips: [
        "Préparez un dossier scolaire solide dès la Terminale",
        "Documentez-vous sur les débouchés du secteur",
        "Rencontrez des professionnels pour valider votre choix",
        "Effectuez des stages d'observation si possible",
        "Développez les compétences de base du domaine",
        "Montrez votre motivation à travers des projets personnels"
      ]
    };
  }

  static generateResourcesSection(program: Program): ProgramPageContent['resourcesSection'] {
    return {
      title: "Ressources pour approfondir vos connaissances",
      resources: [
        {
          title: `Établissements proposant ${program.name}`,
          description: "Liste complète des universités et écoles offrant cette formation",
          link: `/program-schools/${program.slug}`,
          type: "university" as const
        },
        {
          title: "Guide d'orientation personnalisé",
          description: "Conseils d'experts pour réussir votre orientation",
          link: "/conseils",
          type: "guide" as const
        },
        {
          title: "Stages et opportunités",
          description: `Offres de stages dans le secteur ${program.category.toLowerCase()}`,
          link: "/internships",
          type: "career" as const
        },
        {
          title: "Guide des universités du Bénin",
          description: "Ressource complète sur l'enseignement supérieur béninois",
          link: "https://drive.google.com/file/d/1-R-g3n6vtr4nsBNV9_IUA6mC3Iio5CLW/view?usp=drivesdk",
          type: "guide" as const
        }
      ]
    };
  }

  // Méthode principale pour générer le contenu complet
  static generateCompleteContent(program: Program): ProgramPageContent {
    return {
      slug: program.slug,
      heroSection: this.generateHeroSection(program),
      aboutSection: this.generateAboutSection(program),
      careersSection: this.generateCareersSection(program),
      studiesSection: this.generateStudiesSection(program),
      skillsSection: this.generateSkillsSection(program),
      admissionSection: this.generateAdmissionSection(program),
      resourcesSection: this.generateResourcesSection(program)
    };
  }
}