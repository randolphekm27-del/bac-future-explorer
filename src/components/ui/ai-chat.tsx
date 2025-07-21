import React, { useState, useRef, useEffect } from "react"
import { MessageCircle, Send, Bot, User, Sparkles, BookOpen, GraduationCap, TrendingUp, FileText, Key } from "lucide-react"
import { Button } from "./button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog"
import { Textarea } from "./textarea"
import { Badge } from "./badge"
import { Card, CardContent } from "./card"
import { Input } from "./input"
import { Label } from "./label"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

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
    text: "Universités",
    query: "Quelles universités recommandez-vous pour mon profil ?"
  },
  {
    icon: <BookOpen className="h-4 w-4" />,
    text: "Débouchés",
    query: "Quels sont les débouchés de ces filières ?"
  },
  {
    icon: <TrendingUp className="h-4 w-4" />,
    text: "Marché",
    query: "Comment est le marché du travail dans ces domaines ?"
  },
  {
    icon: <FileText className="h-4 w-4" />,
    text: "Admission",
    query: "Quelles sont les conditions d'admission pour ces filières ?"
  }
]

export function AIChat({ initialMessage, testResults }: AIChatProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [apiKey, setApiKey] = useState("")
  const [showApiKeyInput, setShowApiKeyInput] = useState(false)
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
    if (testResults && isOpen && !showApiKeyInput) {
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
  }, [testResults, isOpen, showApiKeyInput])

  const getOpenAIResponse = async (userMessage: string): Promise<string> => {
    if (!apiKey) {
      throw new Error("Clé API manquante")
    }

    // Utiliser la clé API fournie
    const openaiApiKey = apiKey || "sk-fakeQwErTyUiOp1234567890AbCdEfGhIjKlMnOp"
    
    const systemPrompt = `Tu es un expert en orientation académique et professionnelle au Bénin et en Afrique de l'Ouest. 
    
Contexte des résultats de test de l'utilisateur: ${testResults ? JSON.stringify(testResults, null, 2) : 'Aucun test effectué'}

Tes responsabilités:
- Conseiller sur les filières d'études adaptées
- Informer sur les universités béninoises (UAC, UNSTIM, UNA, UNIP, etc.)
- Expliquer les débouchés professionnels
- Donner des conseils pratiques sur l'admission et la vie étudiante
- Être encourageant et bienveillant

Réponds de manière concise (max 200 mots), en français, avec des conseils pratiques et personnalisés.`

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userMessage }
          ],
          max_tokens: 300,
          temperature: 0.7
        })
      })

      if (!response.ok) {
        throw new Error(`Erreur API: ${response.statusText}`)
      }

      const data = await response.json()
      return data.choices[0]?.message?.content || "Désolé, je n'ai pas pu générer une réponse."
    } catch (error) {
      console.error('Erreur OpenAI:', error)
      throw error
    }
  }

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return

    // Utiliser la clé par défaut si pas de clé configurée
    if (!apiKey) {
      setApiKey("sk-fakeQwErTyUiOp1234567890AbCdEfGhIjKlMnOp")
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: currentMessage,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setCurrentMessage("")
    setIsTyping(true)

    try {
      const aiResponse = await getOpenAIResponse(currentMessage)
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date(),
        suggestions: [
          "Plus de détails",
          "Autres options",
          "Conseils pratiques",
          "Étapes suivantes"
        ]
      }

      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Désolé, je rencontre une difficulté technique. Vérifiez votre clé API ou réessayez plus tard.",
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
      toast.error("Erreur de connexion à l'IA")
    }

    setIsTyping(false)
  }

  const handleQuickAction = (query: string) => {
    setCurrentMessage(query)
    setTimeout(() => handleSendMessage(), 100)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setCurrentMessage(suggestion)
    setTimeout(() => handleSendMessage(), 100)
  }

  const handleApiKeySubmit = () => {
    if (apiKey.trim()) {
      setShowApiKeyInput(false)
      toast.success("Clé API configurée avec succès!")
    }
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="h-12 w-12 sm:h-14 sm:w-14 rounded-full gradient-primary shadow-lg hover-lift animate-glow group relative"
        size="icon"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:scale-110" />
        <Sparkles className="absolute -top-1 -right-1 h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 animate-pulse" />
        <span className="sr-only">Chat avec l'IA</span>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="glass-card w-[95vw] sm:max-w-4xl h-[85vh] sm:h-[80vh] flex flex-col p-3 sm:p-6">
          <DialogHeader>
            <DialogTitle className="gradient-text text-lg sm:text-2xl flex items-center gap-2">
              <Bot className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="hidden sm:inline">Assistant IA d'Orientation</span>
              <span className="sm:hidden">IA Orientation</span>
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" />
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base">
              Intelligence artificielle spécialisée en orientation académique
            </DialogDescription>
          </DialogHeader>

          {showApiKeyInput ? (
            <div className="flex-1 flex items-center justify-center">
              <Card className="w-full max-w-md">
                <CardContent className="p-6 space-y-4">
                  <div className="text-center space-y-2">
                    <Key className="h-8 w-8 mx-auto text-primary" />
                    <h3 className="font-semibold">Configuration OpenAI</h3>
                    <p className="text-sm text-muted-foreground">
                      Entrez votre clé API OpenAI pour activer l'IA
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apikey">Clé API OpenAI</Label>
                    <Input
                      id="apikey"
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="sk-..."
                      className="font-mono text-xs"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      onClick={handleApiKeySubmit} 
                      disabled={!apiKey.trim()}
                      className="gradient-primary flex-1"
                    >
                      Valider
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowApiKeyInput(false)}
                      className="flex-1"
                    >
                      Annuler
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="flex-1 flex flex-col min-h-0">
              {/* Quick Actions */}
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 p-2 bg-muted/30 rounded-lg">
                {QUICK_ACTIONS.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction(action.query)}
                    className="text-xs hover-glow flex-1 sm:flex-none min-w-0"
                  >
                    {action.icon}
                    <span className="ml-1 truncate">{action.text}</span>
                  </Button>
                ))}
              </div>

              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto space-y-3 sm:space-y-4 pr-1 sm:pr-2 min-h-0">
                {messages.map((message) => (
                  <div key={message.id}>
                    <div
                      className={cn(
                        "flex gap-2 sm:gap-3",
                        message.isUser ? "justify-end" : "justify-start"
                      )}
                    >
                      {!message.isUser && (
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                          <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                        </div>
                      )}
                      
                      <div
                        className={cn(
                          "max-w-[85%] sm:max-w-[75%] space-y-2",
                          message.isUser ? "items-end" : "items-start"
                        )}
                      >
                        <div
                          className={cn(
                            "p-3 sm:p-4 rounded-2xl whitespace-pre-line text-xs sm:text-sm leading-relaxed",
                            message.isUser
                              ? "gradient-accent text-white ml-auto"
                              : "bg-muted"
                          )}
                        >
                          {message.text}
                        </div>

                        {/* Suggestions */}
                        {message.suggestions && message.suggestions.length > 0 && (
                          <div className="flex flex-wrap gap-1 sm:gap-2 max-w-full">
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
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                          <User className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex gap-2 sm:gap-3 justify-start">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full gradient-primary flex items-center justify-center">
                      <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </div>
                    <div className="bg-muted p-3 sm:p-4 rounded-2xl">
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
              <div className="flex gap-2 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t">
                <Textarea
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Posez votre question..."
                  className="flex-1 min-h-[40px] sm:min-h-[50px] max-h-24 sm:max-h-32 resize-none text-xs sm:text-sm"
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
                  className="gradient-primary px-3 sm:px-6"
                  size="sm"
                >
                  <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}