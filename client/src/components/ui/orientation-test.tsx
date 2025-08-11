import React, { useState } from "react"
import { HelpCircle, ChevronRight, RotateCcw, CheckCircle, GraduationCap, MapPin, Clock, Users, TrendingUp } from "lucide-react"
import { Button } from "./button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog"
import { RadioGroup, RadioGroupItem } from "./radio-group"
import { Label } from "./label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"
import { Progress } from "./progress"
import { cn } from "@/lib/utils"

interface OrientationTestProps {
  onComplete: (results: TestResults) => void
}

interface TestResults {
  primaryField: string
  secondaryFields: string[]
  personality: string
  studyDuration: string
  workEnvironment: string
  recommendations: Recommendation[]
  specificAdvice: string
  resourceLinks: ResourceLink[]
}

interface Recommendation {
  field: string
  match: number
  description: string
  universities: string[]
  careers: string[]
  averageSalary: string
  jobProspects: string
  requiredSkills: string[]
  practicalAdvice: string
}

interface ResourceLink {
  title: string
  url: string
  type: "university" | "program" | "scholarship" | "career" | "training"
  description: string
}

// Questions approfondies et contextualisées pour le Bénin
const QUESTIONS = [
  {
    id: "interests",
    question: "Quels domaines vous passionnent vraiment ? (Choisissez 2-3 options)",
    subtitle: "Pensez aux activités qui vous captivent naturellement",
    type: "multiple" as const,
    maxSelections: 3,
    options: [
      { id: "agriculture", label: "Agriculture moderne & Agrobusiness", category: "Agriculture", emoji: "🌱" },
      { id: "technology", label: "Informatique & Technologies numériques", category: "Tech", emoji: "💻" },
      { id: "health", label: "Santé & Sciences médicales", category: "Santé", emoji: "🏥" },
      { id: "business", label: "Commerce & Entrepreneuriat", category: "Business", emoji: "💼" },
      { id: "education", label: "Éducation & Formation", category: "Éducation", emoji: "📚" },
      { id: "law", label: "Droit & Justice", category: "Droit", emoji: "⚖️" },
      { id: "engineering", label: "Ingénierie & Construction", category: "Ingénierie", emoji: "🔧" },
      { id: "arts", label: "Arts créatifs & Communication", category: "Arts", emoji: "🎨" },
      { id: "finance", label: "Finance & Banque", category: "Finance", emoji: "💰" },
      { id: "social", label: "Action sociale & Développement", category: "Social", emoji: "🤝" }
    ]
  },
  {
    id: "strengths",
    question: "Quelles sont vos principales forces ?",
    subtitle: "Identifiez vos talents naturels",
    type: "multiple" as const,
    maxSelections: 2,
    options: [
      { id: "analytical", label: "Analyse et résolution de problèmes", category: "Analytique", emoji: "🧠" },
      { id: "creative", label: "Créativité et innovation", category: "Créatif", emoji: "✨" },
      { id: "leadership", label: "Leadership et management", category: "Leadership", emoji: "👥" },
      { id: "communication", label: "Communication et relations", category: "Communication", emoji: "🗣️" },
      { id: "technical", label: "Compétences techniques", category: "Technique", emoji: "⚙️" },
      { id: "empathy", label: "Empathie et aide aux autres", category: "Social", emoji: "❤️" }
    ]
  },
  {
    id: "workEnvironment", 
    question: "Dans quel type d'environnement travaillez-vous le mieux ?",
    subtitle: "Votre cadre de travail idéal",
    type: "single" as const,
    options: [
      { id: "office", label: "Bureau moderne en ville", category: "Bureau", emoji: "🏢" },
      { id: "field", label: "Terrain, voyages et missions", category: "Terrain", emoji: "🚗" },
      { id: "lab", label: "Laboratoire ou centre de recherche", category: "Recherche", emoji: "🔬" },
      { id: "workshop", label: "Atelier ou chantier", category: "Pratique", emoji: "🔨" },
      { id: "clinic", label: "Hôpital ou centre de soins", category: "Médical", emoji: "🏥" },
      { id: "classroom", label: "Salle de classe ou formation", category: "Éducation", emoji: "🎓" },
      { id: "mixed", label: "Alternance bureau-terrain", category: "Mixte", emoji: "🔄" }
    ]
  },
  {
    id: "motivations",
    question: "Qu'est-ce qui vous motive le plus dans le travail ?",
    subtitle: "Votre source principale de satisfaction professionnelle",
    type: "single" as const,
    options: [
      { id: "impact", label: "Avoir un impact positif sur la société", category: "Impact", emoji: "🌍" },
      { id: "challenge", label: "Résoudre des défis complexes", category: "Défi", emoji: "🧩" },
      { id: "stability", label: "Stabilité et sécurité d'emploi", category: "Stabilité", emoji: "🛡️" },
      { id: "growth", label: "Évolution et progression rapide", category: "Croissance", emoji: "📈" },
      { id: "independence", label: "Autonomie et liberté", category: "Autonomie", emoji: "🦅" },
      { id: "recognition", label: "Reconnaissance et prestige", category: "Prestige", emoji: "🏆" }
    ]
  },
  {
    id: "studyDuration",
    question: "Combien de temps êtes-vous prêt(e) à étudier ?",
    subtitle: "Durée d'études que vous envisagez",
    type: "single" as const,
    options: [
      { id: "short", label: "2-3 ans (BTS, Licence pro)", category: "Court", emoji: "⏱️" },
      { id: "medium", label: "4-5 ans (Licence + Master)", category: "Moyen", emoji: "⏰" },
      { id: "long", label: "6+ ans (Médecine, Ingénierie)", category: "Long", emoji: "⏳" },
      { id: "flexible", label: "Selon les opportunités", category: "Flexible", emoji: "🔀" }
    ]
  },
  {
    id: "location",
    question: "Où souhaitez-vous étudier et travailler ?",
    subtitle: "Votre préférence géographique",
    type: "single" as const,
    options: [
      { id: "cotonou", label: "Cotonou et environs", category: "Cotonou", emoji: "🏙️" },
      { id: "other_cities", label: "Autres villes du Bénin", category: "Local", emoji: "🏘️" },
      { id: "abroad", label: "À l'étranger si possible", category: "International", emoji: "✈️" },
      { id: "mixed", label: "Mixte Bénin/International", category: "Flexible", emoji: "🌍" }
    ]
  },
  {
    id: "background",
    question: "Quel était votre profil au baccalauréat ?",
    subtitle: "Vos matières de spécialité au lycée",
    type: "single" as const,
    options: [
      { id: "sciences", label: "Série C, D (Sciences)", category: "Sciences", emoji: "⚗️" },
      { id: "economics", label: "Série G (Économie/Gestion)", category: "Économie", emoji: "📊" },
      { id: "literature", label: "Série A (Littéraire)", category: "Lettres", emoji: "📖" },
      { id: "technical", label: "Série F (Technique)", category: "Technique", emoji: "🔧" },
      { id: "other", label: "Autre ou mixte", category: "Autre", emoji: "📋" }
    ]
  }
]

// Recommandations détaillées avec informations concrètes du Bénin
const FIELD_RECOMMENDATIONS = {
  agriculture: {
    name: "Agriculture & Agrobusiness",
    fields: [
      {
        field: "Agronomie et Production",
        description: "Formation en techniques agricoles modernes et gestion des exploitations",
        universities: ["Université d'Abomey-Calavi (FSA)", "Université de Parakou", "INRAB"],
        careers: ["Ingénieur agronome", "Gestionnaire d'exploitation", "Conseiller agricole", "Entrepreneur agricole"],
        averageSalary: "150 000 - 400 000 FCFA/mois",
        jobProspects: "Excellent - Le Bénin mise sur l'agriculture moderne",
        requiredSkills: ["Sciences naturelles", "Gestion d'entreprise", "Innovation technologique"],
        practicalAdvice: "Très bon secteur au Bénin. Beaucoup d'opportunités avec l'agrobusiness et les projets gouvernementaux.",
        match: 0
      },
      {
        field: "Agro-alimentaire",
        description: "Transformation et commercialisation des produits agricoles",
        universities: ["Université d'Abomey-Calavi", "ENSIA"],
        careers: ["Ingénieur agro-alimentaire", "Responsable qualité", "Chef de production"],
        averageSalary: "200 000 - 500 000 FCFA/mois",
        jobProspects: "Très bon - Secteur en forte croissance",
        requiredSkills: ["Chimie", "Gestion industrielle", "Contrôle qualité"],
        practicalAdvice: "Secteur d'avenir avec la transformation locale des produits béninois.",
        match: 0
      }
    ]
  },
  technology: {
    name: "Technologies & Informatique", 
    fields: [
      {
        field: "Génie Informatique",
        description: "Développement logiciel, systèmes d'information et cybersécurité",
        universities: ["UAC/EPAC", "IFRI", "PIGIER", "SUP'Management"],
        careers: ["Développeur", "Administrateur systèmes", "Expert cybersécurité", "Chef de projet IT"],
        averageSalary: "200 000 - 800 000 FCFA/mois",
        jobProspects: "Excellent - Très forte demande au Bénin et à l'étranger",
        requiredSkills: ["Logique", "Mathématiques", "Anglais technique", "Créativité"],
        practicalAdvice: "Secteur le plus porteur actuellement. Possibilités de travail à distance pour l'international.",
        match: 0
      },
      {
        field: "Télécommunications",
        description: "Réseaux, infrastructures et technologies de communication",
        universities: ["EPAC/UAC", "ESTM", "IFRI"],
        careers: ["Ingénieur télécoms", "Administrateur réseaux", "Consultant IT"],
        averageSalary: "250 000 - 600 000 FCFA/mois",
        jobProspects: "Très bon - Expansion du digital au Bénin",
        requiredSkills: ["Électronique", "Mathématiques", "Anglais"],
        practicalAdvice: "Beaucoup d'opportunités avec la transformation numérique du Bénin.",
        match: 0
      }
    ]
  },
  health: {
    name: "Santé & Sciences Médicales",
    fields: [
      {
        field: "Médecine Générale",
        description: "Formation médicale complète pour devenir médecin",
        universities: ["Université d'Abomey-Calavi (FSS)"],
        careers: ["Médecin généraliste", "Médecin spécialiste", "Médecin de santé publique"],
        averageSalary: "300 000 - 1 000 000+ FCFA/mois",
        jobProspects: "Excellent - Forte demande médicale au Bénin",
        requiredSkills: ["Sciences naturelles", "Empathie", "Résistance au stress", "Dévouement"],
        practicalAdvice: "7 ans d'études minimum. Possibilité de spécialisation à l'étranger. Très respecté socialement.",
        match: 0
      },
      {
        field: "Sciences Infirmières",
        description: "Soins infirmiers et accompagnement médical",
        universities: ["INFAS", "Écoles privées agréées"],
        careers: ["Infirmier(ère)", "Sage-femme", "Superviseur de soins"],
        averageSalary: "100 000 - 300 000 FCFA/mois",
        jobProspects: "Très bon - Demande constante dans le système de santé",
        requiredSkills: ["Sciences naturelles", "Relationnel", "Résistance physique"],
        practicalAdvice: "Formation plus courte (3-4 ans). Opportunités d'évolution et d'expatriation.",
        match: 0
      }
    ]
  },
  business: {
    name: "Commerce & Entrepreneuriat",
    fields: [
      {
        field: "Gestion & Administration",
        description: "Management d'entreprise et administration des affaires",
        universities: ["FASEG/UAC", "PIGIER", "SUP'Management", "HEC-Bénin"],
        careers: ["Manager", "Entrepreneur", "Consultant", "Directeur commercial"],
        averageSalary: "150 000 - 600 000 FCFA/mois",
        jobProspects: "Bon - Beaucoup d'opportunités d'entrepreneuriat",
        requiredSkills: ["Leadership", "Communication", "Analyse", "Négociation"],
        practicalAdvice: "Secteur flexible. Idéal pour créer son entreprise ou travailler dans les multinationales.",
        match: 0
      },
      {
        field: "Marketing & Communication",
        description: "Stratégies commerciales et communication d'entreprise",
        universities: ["FASEG/UAC", "Écoles de communication privées"],
        careers: ["Responsable marketing", "Chargé de communication", "Community manager"],
        averageSalary: "120 000 - 400 000 FCFA/mois", 
        jobProspects: "Bon - Croissance du marketing digital",
        requiredSkills: ["Créativité", "Communication", "Analyse de marché"],
        practicalAdvice: "Secteur en évolution avec le digital. Possibilités de freelance.",
        match: 0
      }
    ]
  },
  education: {
    name: "Éducation & Formation",
    fields: [
      {
        field: "Sciences de l'Éducation",
        description: "Formation pédagogique et gestion de l'enseignement",
        universities: ["FLASH/UAC", "ENI", "Universités privées"],
        careers: ["Professeur", "Conseiller pédagogique", "Inspecteur", "Directeur d'école"],
        averageSalary: "100 000 - 350 000 FCFA/mois",
        jobProspects: "Stable - Besoin constant d'enseignants qualifiés",
        requiredSkills: ["Pédagogie", "Patience", "Communication", "Culture générale"],
        practicalAdvice: "Mission noble et stable. Possibilité d'évolution vers l'inspection ou la direction.",
        match: 0
      }
    ]
  },
  law: {
    name: "Droit & Justice",
    fields: [
      {
        field: "Droit des Affaires",
        description: "Droit commercial, fiscal et conseils juridiques aux entreprises",
        universities: ["Faculté de Droit/UAC", "Universités privées"],
        careers: ["Avocat d'affaires", "Juriste d'entreprise", "Notaire", "Conseiller juridique"],
        averageSalary: "200 000 - 800 000 FCFA/mois",
        jobProspects: "Bon - Développement économique nécessite plus de juristes",
        requiredSkills: ["Analyse", "Argumentation", "Mémoire", "Expression orale"],
        practicalAdvice: "Secteur prestigieux. Formation longue mais revenus intéressants.",
        match: 0
      }
    ]
  },
  engineering: {
    name: "Ingénierie & Construction",
    fields: [
      {
        field: "Génie Civil",
        description: "Construction de bâtiments, ponts et infrastructures",
        universities: ["EPAC/UAC", "Écoles d'ingénieur privées"],
        careers: ["Ingénieur BTP", "Chef de chantier", "Architecte", "Entrepreneur en construction"],
        averageSalary: "200 000 - 700 000 FCFA/mois",
        jobProspects: "Très bon - Beaucoup de projets d'infrastructure au Bénin",
        requiredSkills: ["Mathématiques", "Physique", "Gestion de projet", "Leadership"],
        practicalAdvice: "Secteur très porteur avec les grands projets du gouvernement béninois.",
        match: 0
      }
    ]
  },
  finance: {
    name: "Finance & Banque",
    fields: [
      {
        field: "Banque et Finance",
        description: "Gestion financière, crédit et services bancaires",
        universities: ["FASEG/UAC", "PIGIER", "Écoles de commerce"],
        careers: ["Chargé de clientèle", "Analyste financier", "Contrôleur de gestion"],
        averageSalary: "150 000 - 500 000 FCFA/mois",
        jobProspects: "Bon - Secteur bancaire en développement",
        requiredSkills: ["Mathématiques", "Analyse", "Rigueur", "Relationnel"],
        practicalAdvice: "Secteur stable avec de bonnes perspectives d'évolution.",
        match: 0
      }
    ]
  }
}

// Ressources spécifiques au Bénin
const generateResourceLinks = (interests: string[], location: string): ResourceLink[] => {
  const baseResources: ResourceLink[] = [
    {
      title: "📖 Guide des Universités du Bénin 2025",
      url: "https://drive.google.com/file/d/1-R-g3n6vtr4nsBNV9_IUA6mC3Iio5CLW/view?usp=drivesdk",
      type: "university",
      description: "Guide complet avec toutes les filières et conditions d'admission"
    },
    {
      title: "🎓 Explorer toutes les filières",
      url: "/programs",
      type: "program", 
      description: "Découvrez plus de 50 filières détaillées avec débouchés spécifiques"
    },
    {
      title: "🏫 Universités et écoles",
      url: "/universities",
      type: "university",
      description: "Liste complète des établissements d'enseignement supérieur"
    }
  ]

  // Ressources spécialisées selon les intérêts avec liens directs vers les filières
  if (interests.includes('technology')) {
    baseResources.push(
      {
        title: "💻 Administration des réseaux informatiques",
        url: "/programs",
        type: "program",
        description: "Gestion et sécurité des infrastructures réseau"
      },
      {
        title: "⚙️ Génie électrique et télécommunications",
        url: "/programs", 
        type: "program",
        description: "Technologies de communication moderne"
      },
      {
        title: "🔧 Analyse informatique et programmation",
        url: "/programs",
        type: "program",
        description: "Développement logiciel et systèmes"
      }
    )
  }

  if (interests.includes('health')) {
    baseResources.push(
      {
        title: "🏥 Médecine Générale",
        url: "/programs",
        type: "program", 
        description: "Formation médicale complète"
      },
      {
        title: "👩‍⚕️ Sciences infirmières",
        url: "/programs",
        type: "program", 
        description: "Soins infirmiers et gestion de santé"
      },
      {
        title: "💊 Pharmacie", 
        url: "/programs",
        type: "program",
        description: "Sciences pharmaceutiques et médicaments"
      }
    )
  }

  if (interests.includes('engineering')) {
    baseResources.push(
      {
        title: "🏗️ Génie civil et hydraulique",
        url: "/programs",
        type: "program",
        description: "Construction et aménagement"
      },
      {
        title: "🏢 Architecture et urbanisme",
        url: "/programs",
        type: "program", 
        description: "Conception architecturale et urbanisme"
      },
      {
        title: "⚡ Génie énergétique",
        url: "/programs",
        type: "program",
        description: "Systèmes énergétiques et durabilité"
      }
    )
  }

  if (interests.includes('agriculture')) {
    baseResources.push(
      {
        title: "🌱 Agronomie et vulgarisation rurale",
        url: "/programs",
        type: "program",
        description: "Agriculture moderne et développement rural"
      },
      {
        title: "🥕 Production végétale et animale",
        url: "/programs",
        type: "program", 
        description: "Techniques de production agricole"
      },
      {
        title: "🍎 Technologie alimentaire",
        url: "/programs",
        type: "program",
        description: "Transformation des produits alimentaires"
      }
    )
  }

  if (interests.includes('business')) {
    baseResources.push(
      {
        title: "💼 Entrepreneuriat et gestion",
        url: "/programs",
        type: "program",
        description: "Création et gestion d'entreprises"
      },
      {
        title: "💰 Finance et comptabilité",
        url: "/programs",
        type: "program", 
        description: "Gestion financière et comptable"
      },
      {
        title: "🏦 Banque et microfinance",
        url: "/programs",
        type: "program",
        description: "Services financiers et inclusion"
      }
    )
  }

  if (interests.includes('arts')) {
    baseResources.push(
      {
        title: "🎬 Cinéma et audiovisuel", 
        url: "/programs",
        type: "program",
        description: "Création audiovisuelle et production"
      },
      {
        title: "🎨 Arts et culture",
        url: "/programs",
        type: "program",
        description: "Formation artistique et culturelle"
      }
    )
  }

  if (interests.includes('education')) {
    baseResources.push(
      {
        title: "📚 Sciences de l'éducation",
        url: "/programs",
        type: "program",
        description: "Formation pédagogique et éducative"
      },
      {
        title: "🏃‍♂️ Éducation physique et sportive",
        url: "/programs",
        type: "program",
        description: "Enseignement du sport"
      }
    )
  }

  if (interests.includes('law')) {
    baseResources.push(
      {
        title: "⚖️ Droit et sciences juridiques",
        url: "/programs",
        type: "program",
        description: "Formation juridique et légale"
      }
    )
  }

  if (interests.includes('finance')) {
    baseResources.push(
      {
        title: "🌍 Économie et finance internationale",
        url: "/programs", 
        type: "program",
        description: "Marchés financiers mondiaux"
      },
      {
        title: "📈 Banque et finance de marché",
        url: "/programs",
        type: "program",
        description: "Services bancaires et investissement"
      }
    )
  }

  if (interests.includes('social')) {
    baseResources.push(
      {
        title: "🤝 Développement communautaire",
        url: "/programs",
        type: "program",
        description: "Animation sociale et développement local"
      },
      {
        title: "👥 Assistance sociale",
        url: "/programs",
        type: "program",
        description: "Accompagnement social et insertion"
      }
    )
  }

  // Ressources supplémentaires basées sur la localisation
  if (location === 'abroad') {
    baseResources.push({
      title: "✈️ Bourses d'études internationales",
      url: "https://drive.google.com/file/d/1-R-g3n6vtr4nsBNV9_IUA6mC3Iio5CLW/view?usp=drivesdk",
      type: "scholarship",
      description: "Opportunités d'études à l'étranger pour les Béninois"
    })
  }

  return baseResources
}

export function OrientationTest({ onComplete }: OrientationTestProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [isCompleted, setIsCompleted] = useState(false)
  const [results, setResults] = useState<TestResults | null>(null)

  const resetTest = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setIsCompleted(false)
    setResults(null)
  }

  const handleAnswer = (questionId: string, value: string) => {
    const question = QUESTIONS.find(q => q.id === questionId)
    if (!question) return

    setAnswers(prev => {
      const newAnswers = { ...prev }
      
      if (question.type === "single") {
        newAnswers[questionId] = [value]
      } else {
        const current = prev[questionId] || []
        const maxSelections = question.maxSelections || 999
        
        if (current.includes(value)) {
          newAnswers[questionId] = current.filter(v => v !== value)
        } else if (current.length < maxSelections) {
          newAnswers[questionId] = [...current, value]
        }
      }
      
      return newAnswers
    })
  }

  const canProceed = () => {
    const currentQ = QUESTIONS[currentQuestion]
    const currentAnswers = answers[currentQ.id] || []
    
    if (currentQ.type === "single") {
      return currentAnswers.length === 1
    } else {
      return currentAnswers.length >= 1
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      calculateResults()
    }
  }

  const calculateResults = () => {
    const interests = answers.interests || []
    const strengths = answers.strengths || []
    const workEnv = answers.workEnvironment?.[0] || ""
    const motivations = answers.motivations?.[0] || ""
    const studyDuration = answers.studyDuration?.[0] || ""
    const location = answers.location?.[0] || ""
    const background = answers.background?.[0] || ""

    // Algorithme de scoring avancé
    const fieldScores: Record<string, number> = {}
    
    // Score basé sur les intérêts (poids: 40%)
    interests.forEach(interest => {
      fieldScores[interest] = (fieldScores[interest] || 0) + 40
    })
    
    // Bonus selon les forces (poids: 20%)
    strengths.forEach(strength => {
      switch (strength) {
        case "analytical":
          fieldScores.technology = (fieldScores.technology || 0) + 15
          fieldScores.engineering = (fieldScores.engineering || 0) + 10
          fieldScores.finance = (fieldScores.finance || 0) + 10
          break
        case "creative":
          fieldScores.arts = (fieldScores.arts || 0) + 15
          fieldScores.business = (fieldScores.business || 0) + 8
          break
        case "leadership":
          fieldScores.business = (fieldScores.business || 0) + 15
          fieldScores.law = (fieldScores.law || 0) + 10
          break
        case "empathy":
          fieldScores.health = (fieldScores.health || 0) + 15
          fieldScores.education = (fieldScores.education || 0) + 12
          fieldScores.social = (fieldScores.social || 0) + 10
          break
      }
    })

    // Bonus selon le profil bac (poids: 15%)
    switch (background) {
      case "sciences":
        fieldScores.health = (fieldScores.health || 0) + 15
        fieldScores.engineering = (fieldScores.engineering || 0) + 15
        fieldScores.technology = (fieldScores.technology || 0) + 10
        break
      case "economics":
        fieldScores.business = (fieldScores.business || 0) + 15
        fieldScores.finance = (fieldScores.finance || 0) + 15
        break
      case "literature":
        fieldScores.law = (fieldScores.law || 0) + 15
        fieldScores.education = (fieldScores.education || 0) + 10
        break
    }

    // Générer les recommandations
    const recommendations: Recommendation[] = []
    const sortedFields = Object.entries(fieldScores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 4)

    sortedFields.forEach(([fieldKey, score]) => {
      const fieldData = FIELD_RECOMMENDATIONS[fieldKey as keyof typeof FIELD_RECOMMENDATIONS]
      if (fieldData) {
        fieldData.fields.forEach(field => {
          recommendations.push({
            ...field,
            match: Math.min(95, Math.max(60, score + Math.random() * 10))
          })
        })
      }
    })

    // Trier par score de compatibilité
    recommendations.sort((a, b) => b.match - a.match)

    // Conseils personnalisés
    const specificAdvice = generateSpecificAdvice(interests, strengths, workEnv, location, studyDuration)
    
    // Ressources personnalisées
    const resourceLinks = generateResourceLinks(interests, location)

    const finalResults: TestResults = {
      primaryField: recommendations[0]?.field || "Formation générale",
      secondaryFields: recommendations.slice(1, 3).map(r => r.field),
      personality: strengths[0] || "Polyvalent",
      studyDuration: studyDuration,
      workEnvironment: workEnv,
      recommendations: recommendations.slice(0, 5),
      specificAdvice,
      resourceLinks
    }

    setResults(finalResults)
    setIsCompleted(true)
    onComplete(finalResults)
  }

  const generateSpecificAdvice = (interests: string[], strengths: string[], workEnv: string, location: string, duration: string): string => {
    let advice = "Basé sur votre profil, voici mes conseils :\\n\\n"
    
    if (interests.includes('technology') && location === 'abroad') {
      advice += "• Excellent choix ! Le secteur tech offre de nombreuses opportunités à l'international. Commencez par vous former au Bénin puis visez des stages à l'étranger.\\n"
    }
    
    if (interests.includes('agriculture') && location === 'cotonou') {
      advice += "• L'agrobusiness à Cotonou est très porteur. Pensez aux filières de transformation et commercialisation des produits agricoles.\\n"
    }

    if (duration === 'short' && interests.includes('technology')) {
      advice += "• Pour une formation courte en tech, privilégiez les BTS Informatique ou les formations privées spécialisées.\\n"
    }

    advice += "\\n• N'hésitez pas à contacter directement les universités pour plus d'informations\\n"
    advice += "• Considérez les stages et projets pratiques dès la formation\\n"
    advice += "• Restez informé(e) des opportunités de bourses d'études"

    return advice
  }

  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        data-testid="button-orientation-test"
        className={cn(
          "group relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full shadow-2xl transition-all duration-500 hover:shadow-3xl animate-pulse hover:animate-none",
          "bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 hover:from-orange-600 hover:via-orange-700 hover:to-red-600",
          "text-white hover:scale-110 border-4 border-orange-300/50 hover:border-orange-200/70",
          "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-orange-400/30 before:to-red-400/30 before:blur-lg before:scale-150 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-500"
        )}
        aria-label="Test d'orientation personnalisé - Découvrez votre voie"
      >
        <HelpCircle size={28} className="relative z-10 drop-shadow-lg" />
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border border-gray-600">
          🎯 Test d'orientation personnalisé
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400/20 to-red-400/20 animate-ping"></div>
      </Button>

      <Dialog open={isOpen} onOpenChange={(open) => {
        // Ne fermer que si explicitement demandé (bouton close ou échap)
        if (!open) setIsOpen(false);
      }}>
        <DialogContent 
          className="max-w-2xl max-h-[90vh] overflow-hidden font-responsive"
          onPointerDownOutside={(e) => {
            // Empêcher la fermeture automatique lors de clics à l'extérieur
            e.preventDefault();
          }}
          onInteractOutside={(e) => {
            // Empêcher la fermeture automatique lors d'interactions à l'extérieur
            e.preventDefault();
          }}
        >
          <DialogHeader className="pb-4 flex flex-row items-center justify-between">
            <div>
              <DialogTitle className="text-responsive-xl font-bold flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-blue-500" />
                Test d'Orientation Personnalisé
              </DialogTitle>
              <DialogDescription className="text-responsive-base">
                Découvrez les filières qui correspondent vraiment à votre profil
              </DialogDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="ml-4 hover:bg-red-100 hover:text-red-600"
            >
              ✕
            </Button>
          </DialogHeader>

          <div className="space-y-6 overflow-y-auto px-1">
            {!isCompleted ? (
              <>
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Question {currentQuestion + 1} sur {QUESTIONS.length}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                {/* Question */}
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-responsive-lg">
                      {QUESTIONS[currentQuestion].question}
                    </CardTitle>
                    {QUESTIONS[currentQuestion].subtitle && (
                      <CardDescription className="text-responsive-sm">
                        {QUESTIONS[currentQuestion].subtitle}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {QUESTIONS[currentQuestion].type === "single" ? (
                      <RadioGroup
                        value={answers[QUESTIONS[currentQuestion].id]?.[0] || ""}
                        onValueChange={(value) => handleAnswer(QUESTIONS[currentQuestion].id, value)}
                      >
                        {QUESTIONS[currentQuestion].options.map((option) => (
                          <div key={option.id} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value={option.id} id={option.id} />
                            <Label htmlFor={option.id} className="flex items-center gap-3 flex-1 cursor-pointer">
                              <span className="text-lg">{option.emoji}</span>
                              <div>
                                <div className="font-medium text-responsive-base">{option.label}</div>
                                <div className="text-xs text-muted-foreground">{option.category}</div>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    ) : (
                      <div className="space-y-2">
                        {QUESTIONS[currentQuestion].options.map((option) => (
                          <div key={option.id} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                            <input
                              type="checkbox"
                              id={option.id}
                              checked={answers[QUESTIONS[currentQuestion].id]?.includes(option.id) || false}
                              onChange={() => handleAnswer(QUESTIONS[currentQuestion].id, option.id)}
                              className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                              data-testid={`input-${option.id}`}
                            />
                            <Label htmlFor={option.id} className="flex items-center gap-3 flex-1 cursor-pointer">
                              <span className="text-lg">{option.emoji}</span>
                              <div>
                                <div className="font-medium text-responsive-base">{option.label}</div>
                                <div className="text-xs text-muted-foreground">{option.category}</div>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Navigation */}
                <div className="flex justify-between pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                    disabled={currentQuestion === 0}
                    data-testid="button-previous"
                  >
                    Précédent
                  </Button>
                  <Button
                    onClick={nextQuestion}
                    disabled={!canProceed()}
                    data-testid="button-next"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                  >
                    {currentQuestion === QUESTIONS.length - 1 ? "Voir mes résultats" : "Suivant"}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </>
            ) : (
              /* Results */
              <div className="space-y-6">
                <div className="text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-responsive-2xl font-bold text-green-600 mb-2">
                    Analyse terminée !
                  </h3>
                  <p className="text-responsive-base text-muted-foreground">
                    Voici vos recommandations personnalisées
                  </p>
                </div>

                {/* Top Recommendations */}
                <div className="grid gap-4">
                  {results?.recommendations.slice(0, 3).map((rec, index) => (
                    <Card key={index} className={cn(
                      "border-l-4",
                      index === 0 && "border-l-green-500 bg-green-50/50",
                      index === 1 && "border-l-blue-500 bg-blue-50/50",
                      index === 2 && "border-l-orange-500 bg-orange-50/50"
                    )}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-responsive-lg">{rec.field}</CardTitle>
                          <Badge variant={index === 0 ? "default" : "secondary"} className="text-sm">
                            {Math.round(rec.match)}% compatible
                          </Badge>
                        </div>
                        <CardDescription className="text-responsive-sm">
                          {rec.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <GraduationCap className="h-4 w-4 text-blue-500" />
                              <span className="font-medium">Universités :</span>
                            </div>
                            <ul className="pl-6 space-y-1 text-muted-foreground">
                              {rec.universities.map((uni, i) => (
                                <li key={i}>• {uni}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="h-4 w-4 text-green-500" />
                              <span className="font-medium">Salaire moyen :</span>
                            </div>
                            <p className="pl-6 text-muted-foreground">{rec.averageSalary}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Users className="h-4 w-4 text-purple-500" />
                              <span className="font-medium">Perspectives :</span>
                            </div>
                            <p className="pl-6 text-muted-foreground">{rec.jobProspects}</p>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-muted/50 rounded-lg">
                          <p className="text-sm"><strong>Conseil pratique :</strong> {rec.practicalAdvice}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Specific Advice */}
                {results?.specificAdvice && (
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="text-responsive-lg flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        Conseils personnalisés pour vous
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="whitespace-pre-line text-sm text-muted-foreground">
                        {results.specificAdvice}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Resources */}
                {results?.resourceLinks && results.resourceLinks.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-responsive-lg flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Ressources utiles
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {results.resourceLinks.map((resource, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{resource.title}</h4>
                            <p className="text-xs text-muted-foreground">{resource.description}</p>
                          </div>
                          <Button size="sm" variant="outline" asChild>
                            <a href={resource.url} target="_blank" rel="noopener noreferrer">
                              Accéder
                            </a>
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={resetTest}
                    variant="outline"
                    className="flex-1"
                    data-testid="button-restart-test"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Refaire le test
                  </Button>
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                    data-testid="button-close-results"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    C'est parfait !
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}