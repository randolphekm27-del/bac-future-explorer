import React, { useState } from "react"
import { HelpCircle, ChevronRight, RotateCcw, CheckCircle } from "lucide-react"
import { Button } from "./button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog"
import { RadioGroup, RadioGroupItem } from "./radio-group"
import { Label } from "./label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"
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
}

interface Recommendation {
  field: string
  match: number
  description: string
  universities: string[]
  careers: string[]
}

const QUESTIONS = [
  {
    id: "interests",
    question: "Quels domaines vous passionnent le plus ?",
    type: "multiple" as const,
    options: [
      { id: "tech", label: "Technologies & Innovation", category: "Sciences" },
      { id: "health", label: "Santé & Bien-être", category: "Santé" },
      { id: "business", label: "Économie & Commerce", category: "Commerce" },
      { id: "arts", label: "Arts & Créativité", category: "Arts" },
      { id: "social", label: "Relations humaines & Société", category: "Social" },
      { id: "law", label: "Justice & Droit", category: "Droit" },
      { id: "education", label: "Enseignement & Formation", category: "Éducation" },
      { id: "environment", label: "Environnement & Nature", category: "Environnement" }
    ]
  },
  {
    id: "workStyle",
    question: "Comment préférez-vous travailler ?",
    type: "single" as const,
    options: [
      { id: "team", label: "En équipe collaborative", category: "Collaboration" },
      { id: "independent", label: "De manière autonome", category: "Autonomie" },
      { id: "leadership", label: "En dirigeant une équipe", category: "Leadership" },
      { id: "research", label: "Dans la recherche et l'analyse", category: "Recherche" }
    ]
  },
  {
    id: "environment",
    question: "Quel environnement de travail vous attire ?",
    type: "single" as const,
    options: [
      { id: "office", label: "Bureau moderne et technologique", category: "Bureau" },
      { id: "field", label: "Terrain et déplacements", category: "Terrain" },
      { id: "lab", label: "Laboratoire et recherche", category: "Laboratoire" },
      { id: "creative", label: "Espace créatif et artistique", category: "Créatif" },
      { id: "public", label: "Service public et contact humain", category: "Public" }
    ]
  },
  {
    id: "goals",
    question: "Quels sont vos objectifs professionnels ?",
    type: "multiple" as const,
    options: [
      { id: "innovation", label: "Innover et créer", category: "Innovation" },
      { id: "help", label: "Aider les autres", category: "Service" },
      { id: "money", label: "Réussir financièrement", category: "Finance" },
      { id: "recognition", label: "Être reconnu(e) et respecté(e)", category: "Reconnaissance" },
      { id: "balance", label: "Équilibrer vie pro et perso", category: "Équilibre" }
    ]
  },
  {
    id: "duration",
    question: "Quelle durée d'études vous convient ?",
    type: "single" as const,
    options: [
      { id: "short", label: "2-3 ans (BTS, DUT)", category: "Court" },
      { id: "medium", label: "3-5 ans (Licence, Master)", category: "Moyen" },
      { id: "long", label: "5+ ans (Ingénieur, Médecine)", category: "Long" },
      { id: "flexible", label: "Peu importe, selon mes intérêts", category: "Flexible" }
    ]
  }
]

const FIELD_RECOMMENDATIONS = {
  tech: {
    name: "Technologies & Informatique",
    fields: [
      {
        field: "Informatique",
        match: 95,
        description: "Développement logiciel, systèmes, intelligence artificielle",
        universities: ["UAC - IFRI", "UNSTIM", "UNA"],
        careers: ["Développeur", "Data Scientist", "Architecte système", "Chef de projet IT"]
      },
      {
        field: "Génie Électrique",
        match: 90,
        description: "Électronique, télécommunications, systèmes embarqués",
        universities: ["UAC - EPAC", "UNSTIM", "UNA"],
        careers: ["Ingénieur électronique", "Technicien télécom", "Automaticien"]
      }
    ]
  },
  health: {
    name: "Santé & Médecine",
    fields: [
      {
        field: "Médecine",
        match: 95,
        description: "Soins médicaux, diagnostic, chirurgie",
        universities: ["UAC - FSS", "UNIP"],
        careers: ["Médecin généraliste", "Spécialiste", "Chirurgien", "Chercheur médical"]
      },
      {
        field: "Sciences Infirmières",
        match: 85,
        description: "Soins infirmiers, santé communautaire",
        universities: ["UAC - FSS", "UNIP"],
        careers: ["Infirmier", "Sage-femme", "Gestionnaire de santé"]
      }
    ]
  },
  business: {
    name: "Commerce & Économie",
    fields: [
      {
        field: "Sciences Économiques",
        match: 90,
        description: "Analyse économique, finance, gestion",
        universities: ["UAC - FASEG", "UNA", "UCAO"],
        careers: ["Économiste", "Analyste financier", "Consultant", "Banquier"]
      },
      {
        field: "Gestion Marketing",
        match: 85,
        description: "Marketing digital, communication, vente",
        universities: ["UAC - FASEG", "UNA", "UCAO"],
        careers: ["Chef marketing", "Commercial", "Community manager", "Entrepreneur"]
      }
    ]
  }
}

export function OrientationTest({ onComplete }: OrientationTestProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [isCompleting, setIsCompleting] = useState(false)

  const handleAnswerChange = (questionId: string, value: string, isMultiple: boolean) => {
    setAnswers(prev => {
      if (isMultiple) {
        const current = prev[questionId] || []
        const newAnswers = current.includes(value)
          ? current.filter(v => v !== value)
          : [...current, value]
        return { ...prev, [questionId]: newAnswers }
      } else {
        return { ...prev, [questionId]: [value] }
      }
    })
  }

  const canProceed = () => {
    const currentQ = QUESTIONS[currentQuestion]
    const currentAnswers = answers[currentQ.id] || []
    return currentAnswers.length > 0
  }

  const nextQuestion = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      completeTest()
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const completeTest = () => {
    setIsCompleting(true)
    
    // Analyse sophistiquée des réponses
    setTimeout(() => {
      const interests = answers.interests || []
      const workStyle = answers.workStyle?.[0] || ""
      const environment = answers.environment?.[0] || ""
      const goals = answers.goals || []
      const duration = answers.duration?.[0] || ""

      // Calcul des recommandations
      const recommendations: Recommendation[] = []
      
      // Logique d'analyse basée sur les réponses
      interests.forEach(interest => {
        const fieldData = FIELD_RECOMMENDATIONS[interest as keyof typeof FIELD_RECOMMENDATIONS]
        if (fieldData) {
          fieldData.fields.forEach(field => {
            // Ajuster le score basé sur la cohérence avec les autres réponses
            let adjustedMatch = field.match
            
            // Bonus pour cohérence travail/environnement
            if (interest === 'tech' && environment === 'office') adjustedMatch += 5
            if (interest === 'health' && environment === 'public') adjustedMatch += 5
            if (interest === 'business' && workStyle === 'leadership') adjustedMatch += 5
            
            recommendations.push({
              ...field,
              match: Math.min(100, adjustedMatch)
            })
          })
        }
      })

      // Trier par score et garder les meilleurs
      const sortedRecommendations = recommendations
        .sort((a, b) => b.match - a.match)
        .slice(0, 5)

      const results: TestResults = {
        primaryField: interests[0] || "general",
        secondaryFields: interests.slice(1),
        personality: workStyle,
        studyDuration: duration,
        workEnvironment: environment,
        recommendations: sortedRecommendations
      }

      onComplete(results)
      setIsOpen(false)
      resetTest()
      setIsCompleting(false)
    }, 2000)
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setIsCompleting(false)
  }

  const currentQ = QUESTIONS[currentQuestion]
  const currentAnswers = answers[currentQ?.id] || []
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="h-12 w-12 sm:h-14 sm:w-14 rounded-full gradient-accent shadow-lg hover-lift animate-glow group"
        size="icon"
      >
        <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:scale-110" />
        <span className="sr-only">Test d'orientation</span>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="glass-card max-w-2xl max-h-[90vh] overflow-y-auto w-[95vw] sm:w-full p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle className="gradient-text text-2xl">
              Test d'Orientation Personnalisé
            </DialogTitle>
            <DialogDescription className="text-base">
              Un test complet pour découvrir les filières qui vous correspondent
            </DialogDescription>
          </DialogHeader>

          {isCompleting ? (
            <div className="space-y-6 py-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center animate-spin">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold gradient-text">Analyse en cours...</h3>
                <p className="text-muted-foreground">
                  Notre IA analyse vos réponses pour vous proposer les meilleures recommandations
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Question {currentQuestion + 1} sur {QUESTIONS.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="gradient-primary h-3 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <Card className="border-0 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-xl">{currentQ?.question}</CardTitle>
                  <CardDescription>
                    {currentQ?.type === 'multiple' 
                      ? "Vous pouvez sélectionner plusieurs réponses"
                      : "Sélectionnez une seule réponse"
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {currentQ?.type === 'multiple' ? (
                    <div className="grid grid-cols-1 gap-3">
                      {currentQ.options.map((option) => (
                        <div
                          key={option.id}
                          className={cn(
                            "flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all",
                            currentAnswers.includes(option.id)
                              ? "border-primary bg-primary/10 shadow-md"
                              : "border-muted hover:border-primary/50 hover:bg-primary/5"
                          )}
                          onClick={() => handleAnswerChange(currentQ.id, option.id, true)}
                        >
                          <div className={cn(
                            "w-5 h-5 rounded border-2 flex items-center justify-center",
                            currentAnswers.includes(option.id)
                              ? "border-primary bg-primary"
                              : "border-muted"
                          )}>
                            {currentAnswers.includes(option.id) && (
                              <CheckCircle className="h-3 w-3 text-white" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{option.label}</div>
                            <Badge variant="outline" className="mt-1">
                              {option.category}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <RadioGroup
                      value={currentAnswers[0] || ""}
                      onValueChange={(value) => handleAnswerChange(currentQ.id, value, false)}
                      className="space-y-3"
                    >
                      {currentQ.options.map((option) => (
                        <div
                          key={option.id}
                          className={cn(
                            "flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all",
                            currentAnswers[0] === option.id
                              ? "border-primary bg-primary/10 shadow-md"
                              : "border-muted hover:border-primary/50 hover:bg-primary/5"
                          )}
                        >
                          <RadioGroupItem value={option.id} id={option.id} />
                          <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                            <div className="font-medium">{option.label}</div>
                            <Badge variant="outline" className="mt-1">
                              {option.category}
                            </Badge>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <Button
                  variant="outline"
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                  className="w-full sm:w-auto sm:min-w-24"
                >
                  Précédent
                </Button>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    variant="ghost"
                    onClick={resetTest}
                    className="w-full sm:w-auto sm:min-w-24"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Recommencer
                  </Button>
                  
                  <Button
                    onClick={nextQuestion}
                    disabled={!canProceed()}
                    className="gradient-primary w-full sm:w-auto sm:min-w-24"
                  >
                    {currentQuestion === QUESTIONS.length - 1 ? "Terminer" : "Suivant"}
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}