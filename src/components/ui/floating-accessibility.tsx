import React, { useState } from "react"
import { MessageCircle, HelpCircle, X, Send, ChevronRight } from "lucide-react"
import { Button } from "./button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog"
import { Input } from "./input"
import { Textarea } from "./textarea"
import { cn } from "@/lib/utils"

interface FloatingAccessibilityProps {
  className?: string
}

export function FloatingAccessibility({ className }: FloatingAccessibilityProps) {
  const [showTest, setShowTest] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [chatMessages, setChatMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: "Bonjour ! Je suis votre assistant d'orientation. Comment puis-je vous aider à choisir votre filière ?", isUser: false }
  ])
  const [currentMessage, setCurrentMessage] = useState("")

  const questions = [
    {
      question: "Quels sont vos domaines d'intérêt préférés ?",
      options: ["Sciences & Technologie", "Arts & Littérature", "Commerce & Économie", "Santé & Médecine", "Sciences Sociales"]
    },
    {
      question: "Quel type d'environnement de travail préférez-vous ?",
      options: ["Bureau & Administration", "Terrain & Extérieur", "Laboratoire & Recherche", "Contact client", "Travail créatif"]
    },
    {
      question: "Quelle est votre préférence pour la durée d'études ?",
      options: ["2-3 ans (Licence)", "4-5 ans (Master)", "6+ ans (Doctorat)", "Formation courte", "Peu importe"]
    },
    {
      question: "Quel niveau de responsabilité souhaitez-vous ?",
      options: ["Leadership & Management", "Travail en équipe", "Travail autonome", "Conseil & Expertise", "Innovation & Création"]
    }
  ]

  const recommendations = {
    "Sciences & Technologie": ["Informatique", "Génie Civil", "Électronique", "Mathématiques"],
    "Arts & Littérature": ["Littérature", "Arts Plastiques", "Communication", "Journalisme"],
    "Commerce & Économie": ["Économie", "Gestion", "Marketing", "Finance"],
    "Santé & Médecine": ["Médecine", "Pharmacie", "Sciences Infirmières", "Biologie"],
    "Sciences Sociales": ["Sociologie", "Psychologie", "Droit", "Sciences Politiques"]
  }

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Générer des recommandations basées sur les réponses
      showRecommendations(newAnswers)
    }
  }

  const showRecommendations = (userAnswers: string[]) => {
    const mainInterest = userAnswers[0]
    const suggestedFields = recommendations[mainInterest as keyof typeof recommendations] || ["Orientation générale recommandée"]
    
    // Simuler une réponse d'IA avec les recommandations
    const recommendationText = `Basé sur vos réponses, voici mes recommandations :
    
🎯 Filières recommandées : ${suggestedFields.join(", ")}

📚 Ces domaines correspondent à vos intérêts pour ${mainInterest.toLowerCase()}.

💡 Je vous conseille de :
- Explorer les débouchés de ces filières
- Rencontrer des étudiants dans ces domaines
- Consulter les programmes détaillés des universités

Souhaitez-vous plus d'informations sur l'une de ces filières ?`

    setChatMessages(prev => [...prev, 
      { text: "J'ai terminé le test d'orientation !", isUser: true },
      { text: recommendationText, isUser: false }
    ])
    
    // Reset test and show chat
    setShowTest(false)
    setShowChat(true)
    setCurrentQuestion(0)
    setAnswers([])
  }

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return
    
    setChatMessages(prev => [...prev, { text: currentMessage, isUser: true }])
    
    // Simuler une réponse d'IA
    setTimeout(() => {
      const responses = [
        "C'est une excellente question ! Pouvez-vous me dire quels aspects vous intéressent le plus dans cette filière ?",
        "Je peux vous donner plus d'informations sur cette filière. Quels sont vos critères de choix prioritaires ?",
        "Cette filière offre de nombreuses opportunités. Avez-vous pensé aux débouchés professionnels ?",
        "Très bon choix ! Cette orientation correspond bien à votre profil. Voulez-vous que je vous explique les prérequis ?"
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setChatMessages(prev => [...prev, { text: randomResponse, isUser: false }])
    }, 1000)
    
    setCurrentMessage("")
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setAnswers([])
  }

  return (
    <div className={cn("fixed right-4 bottom-4 z-50 flex flex-col gap-3", className)}>
      {/* Test d'orientation Button */}
      <Button
        onClick={() => setShowTest(true)}
        className="h-14 w-14 rounded-full gradient-accent shadow-lg hover-lift animate-glow"
        size="icon"
      >
        <HelpCircle className="h-6 w-6" />
        <span className="sr-only">Test d'orientation</span>
      </Button>

      {/* Chat IA Button */}
      <Button
        onClick={() => setShowChat(true)}
        className="h-14 w-14 rounded-full gradient-primary shadow-lg hover-lift animate-glow"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Chat avec l'IA</span>
      </Button>

      {/* Test Dialog */}
      <Dialog open={showTest} onOpenChange={setShowTest}>
        <DialogContent className="glass-card max-w-md">
          <DialogHeader>
            <DialogTitle className="gradient-text">Test d'orientation</DialogTitle>
            <DialogDescription>
              Question {currentQuestion + 1} sur {questions.length}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="gradient-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
            
            <h3 className="font-semibold text-lg">
              {questions[currentQuestion]?.question}
            </h3>
            
            <div className="space-y-2">
              {questions[currentQuestion]?.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start hover-glow"
                  onClick={() => handleAnswerSelect(option)}
                >
                  <ChevronRight className="mr-2 h-4 w-4" />
                  {option}
                </Button>
              ))}
            </div>
            
            {currentQuestion > 0 && (
              <Button variant="ghost" onClick={resetTest} className="w-full">
                Recommencer le test
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Chat Dialog */}
      <Dialog open={showChat} onOpenChange={setShowChat}>
        <DialogContent className="glass-card max-w-lg h-[600px] flex flex-col">
          <DialogHeader>
            <DialogTitle className="gradient-text">Assistant IA d'orientation</DialogTitle>
            <DialogDescription>
              Discutez avec notre IA pour obtenir des conseils personnalisés
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex-1 flex flex-col space-y-4">
            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-2">
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex",
                    message.isUser ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] p-3 rounded-lg whitespace-pre-line text-sm",
                      message.isUser
                        ? "gradient-primary text-primary-foreground ml-4"
                        : "bg-muted mr-4"
                    )}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Input Container */}
            <div className="flex gap-2">
              <Textarea
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Posez votre question sur l'orientation..."
                className="flex-1 min-h-[40px] max-h-24"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!currentMessage.trim()}
                className="gradient-primary"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}