import React, { useState, useRef, useEffect } from "react"
import { MessageCircle, Send, Bot, User, Sparkles, BookOpen, GraduationCap, TrendingUp, FileText } from "lucide-react"
import { Button } from "./button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog"
import { Textarea } from "./textarea"
import { Badge } from "./badge"
import { Card, CardContent } from "./card"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
  suggestions?: string[]
  attachments?: Attachment[]
}

interface Attachment {
  type: 'university' | 'field' | 'career' | 'document'
  title: string
  description: string
  link?: string
}

interface AIChatProps {
  initialMessage?: string
  testResults?: any
}

const QUICK_ACTIONS = [
  {
    icon: <GraduationCap className="h-4 w-4" />,
    text: "Universités recommandées",
    query: "Quelles universités recommandez-vous pour mon profil ?"
  },
  {
    icon: <BookOpen className="h-4 w-4" />,
    text: "Débouchés professionnels",
    query: "Quels sont les débouchés de ces filières ?"
  },
  {
    icon: <TrendingUp className="h-4 w-4" />,
    text: "Marché du travail",
    query: "Comment est le marché du travail dans ces domaines ?"
  },
  {
    icon: <FileText className="h-4 w-4" />,
    text: "Conditions d'admission",
    query: "Quelles sont les conditions d'admission pour ces filières ?"
  }
]

const AI_RESPONSES = {
  universities: {
    responses: [
      "Excellente question ! Basé sur votre profil, je recommande particulièrement l'UAC qui offre des formations reconnues. Voulez-vous que je détaille les programmes spécifiques ?",
      "Pour votre domaine d'intérêt, plusieurs universités se distinguent. L'UNSTIM est particulièrement forte en sciences et technologies. Souhaitez-vous plus d'informations sur leurs critères d'admission ?",
      "Je peux vous guider vers les meilleures universités selon vos critères. Avez-vous des préférences géographiques ou des contraintes particulières ?"
    ],
    attachments: [
      { type: 'university' as const, title: 'UAC - Université d\'Abomey-Calavi', description: 'Plus grande université du Bénin, reconnue pour ses formations diversifiées' },
      { type: 'university' as const, title: 'UNSTIM', description: 'Spécialisée en sciences, technologies et médecine' }
    ]
  },
  careers: {
    responses: [
      "Les débouchés dans votre domaine sont très prometteurs ! Le marché béninois et régional offre de nombreuses opportunités. Voulez-vous que je détaille par secteur ?",
      "Excellente question sur les carrières ! Votre profil correspond à des métiers d'avenir avec un fort potentiel de croissance. Préférez-vous le secteur privé ou public ?",
      "Les perspectives d'emploi sont encourageantes dans ces domaines. Je peux vous expliquer les différents chemins de carrière possibles."
    ],
    attachments: [
      { type: 'career' as const, title: 'Secteur Privé', description: 'Entreprises, startups, consulting' },
      { type: 'career' as const, title: 'Secteur Public', description: 'Fonction publique, organisations internationales' }
    ]
  },
  general: {
    responses: [
      "Je suis là pour vous aider dans votre orientation ! Pouvez-vous me préciser quel aspect vous intéresse le plus ?",
      "C'est un plaisir de vous accompagner dans cette étape importante. Quelles sont vos principales préoccupations concernant votre choix d'études ?",
      "Votre question est très pertinente. Pour vous donner les meilleurs conseils, pourriez-vous m'en dire plus sur vos priorités ?"
    ],
    attachments: []
  }
}

export function AIChat({ initialMessage, testResults }: AIChatProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: initialMessage || "Bonjour ! Je suis votre assistant IA d'orientation. Je peux vous aider à choisir votre filière, découvrir les universités, comprendre les débouchés professionnels et bien plus encore. Comment puis-je vous aider aujourd'hui ?",
      isUser: false,
      timestamp: new Date(),
      suggestions: [
        "Aide-moi à choisir ma filière",
        "Quelles universités recommandez-vous ?",
        "Comment fonctionne l'admission ?",
        "Parlez-moi des débouchés"
      ]
    }
  ])
  const [currentMessage, setCurrentMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (testResults && isOpen) {
      // Ajouter un message avec les résultats du test
      const resultsMessage: Message = {
        id: Date.now().toString(),
        text: "Parfait ! J'ai analysé vos résultats de test d'orientation. Basé sur vos réponses, je peux maintenant vous donner des conseils plus personnalisés. Que souhaitez-vous approfondir ?",
        isUser: false,
        timestamp: new Date(),
        suggestions: [
          "Détaillez mes filières recommandées",
          "Quelles universités pour mon profil ?",
          "Comment réussir dans ces domaines ?",
          "Quel est le marché du travail ?"
        ]
      }
      setMessages(prev => [...prev, resultsMessage])
    }
  }, [testResults, isOpen])

  const getAIResponse = (userMessage: string): { text: string; attachments: Attachment[]; suggestions: string[] } => {
    const message = userMessage.toLowerCase()
    
    // Analyse du message pour déterminer le type de réponse
    if (message.includes('université') || message.includes('établissement') || message.includes('école')) {
      const response = AI_RESPONSES.universities
      return {
        text: response.responses[Math.floor(Math.random() * response.responses.length)],
        attachments: response.attachments,
        suggestions: [
          "Critères d'admission détaillés",
          "Frais de scolarité",
          "Programmes disponibles",
          "Vie étudiante"
        ]
      }
    }
    
    if (message.includes('débouché') || message.includes('métier') || message.includes('travail') || message.includes('emploi')) {
      const response = AI_RESPONSES.careers
      return {
        text: response.responses[Math.floor(Math.random() * response.responses.length)],
        attachments: response.attachments,
        suggestions: [
          "Salaires moyens",
          "Évolution de carrière",
          "Compétences requises",
          "Opportunités à l'international"
        ]
      }
    }

    if (message.includes('filière') || message.includes('formation') || message.includes('étude')) {
      return {
        text: "Excellente question sur les filières ! Chaque domaine a ses spécificités. Selon votre profil, certaines formations vous correspondraient mieux. Avez-vous déjà une idée de vos domaines de prédilection ?",
        attachments: [
          { type: 'field' as const, title: 'Sciences & Technologies', description: 'Informatique, ingénierie, mathématiques' },
          { type: 'field' as const, title: 'Sciences de la Santé', description: 'Médecine, pharmacie, sciences infirmières' },
          { type: 'field' as const, title: 'Sciences Économiques', description: 'Gestion, économie, commerce' }
        ],
        suggestions: [
          "Durée des études par filière",
          "Niveau de difficulté",
          "Prérequis nécessaires",
          "Stages et pratique"
        ]
      }
    }

    // Réponse générale
    const response = AI_RESPONSES.general
    return {
      text: response.responses[Math.floor(Math.random() * response.responses.length)],
      attachments: [],
      suggestions: [
        "Test d'orientation personnalisé",
        "Guide des universités",
        "Calendrier des admissions",
        "Bourses et financements"
      ]
    }
  }

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: currentMessage,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setCurrentMessage("")
    setIsTyping(true)

    // Simuler un délai de réponse réaliste
    setTimeout(() => {
      const aiResponse = getAIResponse(currentMessage)
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse.text,
        isUser: false,
        timestamp: new Date(),
        suggestions: aiResponse.suggestions,
        attachments: aiResponse.attachments
      }

      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500 + Math.random() * 1000) // Entre 1.5 et 2.5 secondes
  }

  const handleQuickAction = (query: string) => {
    setCurrentMessage(query)
    setTimeout(() => handleSendMessage(), 100)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setCurrentMessage(suggestion)
    setTimeout(() => handleSendMessage(), 100)
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="h-14 w-14 rounded-full gradient-primary shadow-lg hover-lift animate-glow group relative"
        size="icon"
      >
        <MessageCircle className="h-6 w-6 transition-transform group-hover:scale-110" />
        <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-pulse" />
        <span className="sr-only">Chat avec l'IA</span>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="glass-card max-w-4xl h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle className="gradient-text text-2xl flex items-center gap-2">
              <Bot className="h-6 w-6" />
              Assistant IA d'Orientation
              <Sparkles className="h-4 w-4 text-yellow-400" />
            </DialogTitle>
            <DialogDescription className="text-base">
              Intelligence artificielle spécialisée en orientation académique et professionnelle
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 flex flex-col min-h-0">
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mb-4 p-2 bg-muted/30 rounded-lg">
              {QUICK_ACTIONS.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickAction(action.query)}
                  className="text-xs hover-glow"
                >
                  {action.icon}
                  <span className="ml-1 hidden sm:inline">{action.text}</span>
                </Button>
              ))}
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-2 min-h-0">
              {messages.map((message) => (
                <div key={message.id}>
                  <div
                    className={cn(
                      "flex gap-3",
                      message.isUser ? "justify-end" : "justify-start"
                    )}
                  >
                    {!message.isUser && (
                      <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    )}
                    
                    <div
                      className={cn(
                        "max-w-[75%] space-y-2",
                        message.isUser ? "items-end" : "items-start"
                      )}
                    >
                      <div
                        className={cn(
                          "p-4 rounded-2xl whitespace-pre-line text-sm leading-relaxed",
                          message.isUser
                            ? "gradient-accent text-white ml-auto"
                            : "bg-muted"
                        )}
                      >
                        {message.text}
                      </div>

                      {/* Attachments */}
                      {message.attachments && message.attachments.length > 0 && (
                        <div className="space-y-2 max-w-full">
                          {message.attachments.map((attachment, index) => (
                            <Card key={index} className="border-primary/20 hover-lift cursor-pointer">
                              <CardContent className="p-3">
                                <div className="flex items-start gap-2">
                                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    {attachment.type === 'university' && <GraduationCap className="h-4 w-4 text-primary" />}
                                    {attachment.type === 'field' && <BookOpen className="h-4 w-4 text-primary" />}
                                    {attachment.type === 'career' && <TrendingUp className="h-4 w-4 text-primary" />}
                                    {attachment.type === 'document' && <FileText className="h-4 w-4 text-primary" />}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-sm">{attachment.title}</h4>
                                    <p className="text-xs text-muted-foreground">{attachment.description}</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      )}

                      {/* Suggestions */}
                      {message.suggestions && message.suggestions.length > 0 && (
                        <div className="flex flex-wrap gap-2 max-w-full">
                          {message.suggestions.map((suggestion, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="cursor-pointer hover:bg-primary/10 text-xs"
                              onClick={() => handleSuggestionClick(suggestion)}
                            >
                              {suggestion}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    {message.isUser && (
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-muted p-4 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Container */}
            <div className="flex gap-2 mt-4 pt-4 border-t">
              <Textarea
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Posez votre question sur l'orientation, les universités, les filières..."
                className="flex-1 min-h-[50px] max-h-32 resize-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
                disabled={isTyping}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!currentMessage.trim() || isTyping}
                className="gradient-primary px-6"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}