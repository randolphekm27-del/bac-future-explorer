import React, { useState } from "react"
import { Button } from "./button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
import { Badge } from "./badge"
import { Brain, TestTube, MessageCircle, X, ArrowRight, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface Question {
  id: number
  question: string
  options: string[]
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quel domaine vous passionne le plus ?",
    options: ["Sciences et Technologie", "Arts et Lettres", "Commerce et Gestion", "Santé et Médecine", "Sciences Sociales"]
  },
  {
    id: 2,
    question: "Comment préférez-vous travailler ?",
    options: ["En équipe", "Individuellement", "Avec le public", "En laboratoire", "À l'extérieur"]
  },
  {
    id: 3,
    question: "Quel est votre style d'apprentissage ?",
    options: ["Pratique et expérimental", "Théorique et analytique", "Créatif et artistique", "Collaboratif", "Autonome"]
  }
]

const filieres = [
  { name: "Informatique", match: 95, description: "Développement, IA, cybersécurité" },
  { name: "Médecine", match: 87, description: "Soins, recherche médicale" },
  { name: "Commerce", match: 76, description: "Marketing, gestion, entrepreneuriat" },
  { name: "Ingénierie", match: 82, description: "Innovation, construction, industrie" }
]

export function FloatingAccessibility() {
  const [isTestOpen, setIsTestOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { sender: "ai", content: "Bonjour ! Je suis votre assistant d'orientation. Comment puis-je vous aider à choisir votre filière ?" }
  ])
  const [inputMessage, setInputMessage] = useState("")

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
  }

  const sendMessage = () => {
    if (!inputMessage.trim()) return
    
    const newMessages = [
      ...chatMessages,
      { sender: "user", content: inputMessage },
      { sender: "ai", content: "Merci pour votre question. Basé sur vos intérêts, je recommande d'explorer les filières en sciences et technologie. Voulez-vous en savoir plus sur une filière spécifique ?" }
    ]
    setChatMessages(newMessages)
    setInputMessage("")
  }

  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed right-6 bottom-20 z-50 flex flex-col gap-4">
        {/* Test Button */}
        <Dialog open={isTestOpen} onOpenChange={setIsTestOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="rounded-full w-14 h-14 shadow-xl animate-bounce hover:animate-none transition-all duration-300 gradient-primary hover:scale-110"
              title="Test d'orientation"
            >
              <TestTube className="h-6 w-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl glass-card border-gradient">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold gradient-text">
                Test d'orientation personnalisé
              </DialogTitle>
            </DialogHeader>
            
            {!showResults ? (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="px-3 py-1">
                    Question {currentQuestion + 1} sur {questions.length}
                  </Badge>
                  <div className="w-full max-w-xs ml-4 bg-secondary rounded-full h-2">
                    <div 
                      className="gradient-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-6">
                    {questions[currentQuestion].question}
                  </h3>
                  
                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start hover-lift text-left p-4 h-auto"
                        onClick={() => handleAnswer(option)}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 gradient-text">
                    Vos filières recommandées
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Basé sur vos réponses, voici les filières qui correspondent le mieux à votre profil :
                  </p>
                </div>
                
                <div className="space-y-4">
                  {filieres.map((filiere, index) => (
                    <div key={index} className="glass-card p-4 rounded-xl border-gradient hover-lift">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">{filiere.name}</h4>
                        <Badge 
                          variant={filiere.match > 85 ? "default" : "secondary"}
                          className="gradient-primary"
                        >
                          {filiere.match}% compatible
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{filiere.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button onClick={resetTest} variant="outline" className="flex-1">
                    Refaire le test
                  </Button>
                  <Button className="flex-1 gradient-primary">
                    Explorer ces filières
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Chat Button */}
        <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="rounded-full w-14 h-14 shadow-xl animate-pulse hover:animate-none transition-all duration-300 gradient-accent hover:scale-110"
              title="Chat avec l'IA"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg glass-card border-gradient h-[600px] flex flex-col">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold gradient-text flex items-center">
                <Brain className="mr-2 h-5 w-5" />
                Assistant d'orientation IA
              </DialogTitle>
            </DialogHeader>
            
            <div className="flex-1 flex flex-col min-h-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 p-4 border rounded-lg bg-background/50">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex",
                      message.sender === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] p-3 rounded-xl",
                        message.sender === "user"
                          ? "gradient-primary text-primary-foreground"
                          : "bg-secondary"
                      )}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Input */}
              <div className="flex gap-2 mt-4">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Posez votre question..."
                  className="flex-1 px-3 py-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                />
                <Button onClick={sendMessage} size="sm" className="gradient-primary">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}