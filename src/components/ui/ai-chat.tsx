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
  const [apiKey, setApiKey] = useState("sk-fakeQwErTyUiOp1234567890AbCdEfGhIjKlMnOp") // Clé par défaut
  const [showApiKeyInput, setShowApiKeyInput] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: initialMessage || "Bonjour ! Je suis votre assistant IA d'orientation spécialisé dans l'enseignement supérieur au Bénin. Je peux vous aider à choisir votre filière, découvrir les universités, comprendre les débouchés professionnels et bien plus encore.\n\nComment puis-je vous aider aujourd'hui ?",
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

  // Fonction de simulation d'IA locale avec réponses pertinentes
  const getSimulatedAIResponse = async (userMessage: string): Promise<string> => {
    // Simulation de délai réseau
    await new Promise(resolve => setTimeout(resolve, 1000))

    const lowerMessage = userMessage.toLowerCase()

    // Base de connaissances sur l'orientation au Bénin
    if (lowerMessage.includes('université') || lowerMessage.includes('universités')) {
      return `🏛️ **Universités principales au Bénin :**

**Publiques :**
• **UAC (Université d'Abomey-Calavi)** - La plus grande, toutes filières
• **UP (Université de Parakou)** - Spécialisée agriculture et santé  
• **UNSTIM** - Sciences, technologie, ingénierie, mathématiques
• **UNA** - Agriculture et développement rural

**Privées :**
• **UATM** - Management et technologie
• **UCAO** - Commerce et gestion

${testResults ? `Basé sur votre profil, je recommande particulièrement l'${testResults.recommendations?.[0]?.universities?.[0] || 'UAC'}.` : ''}

Souhaitez-vous des détails sur une université spécifique ?`
    }

    if (lowerMessage.includes('filière') || lowerMessage.includes('filières') || lowerMessage.includes('étude')) {
      return `🎓 **Filières populaires au Bénin :**

**Sciences & Tech :**
• Informatique & IA (très demandé)
• Génie Civil & Architecture  
• Télécommunications

**Économie & Gestion :**
• Sciences Économiques
• Marketing & Commerce
• Finance & Banque

**Santé :**
• Médecine (très sélectif)
• Sciences Infirmières
• Pharmacie

**Autres :**
• Droit & Sciences Politiques
• Agronomie
• Communication

${testResults ? `Pour votre profil, je recommande : ${testResults.recommendations?.map(r => r.field).join(', ')}.` : ''}

Voulez-vous explorer une filière particulière ?`
    }

    if (lowerMessage.includes('débouché') || lowerMessage.includes('emploi') || lowerMessage.includes('travail') || lowerMessage.includes('marché')) {
      return `💼 **Marché de l'emploi au Bénin :**

**Secteurs porteurs :**
• **Digital & Tech** - Forte croissance (+25% par an)
• **Santé** - Besoin constant de professionnels
• **Agriculture** - Modernisation en cours
• **BTP** - Grands projets d'infrastructure
• **Finance** - Digitalisation bancaire

**Conseils emploi :**
• Privilégier les stages en entreprise
• Développer des compétences numériques
• Apprendre l'anglais
• Créer un réseau professionnel

${testResults ? `Vos filières recommandées ont d'excellentes perspectives !` : ''}

Intéressé par un secteur particulier ?`
    }

    if (lowerMessage.includes('admission') || lowerMessage.includes('concours') || lowerMessage.includes('candidature')) {
      return `📝 **Procédures d'admission :**

**Universités publiques :**
• Orientation automatique selon notes du BAC
• Concours pour filières sélectives (médecine, ingénierie)
• Dossiers à déposer en juin-juillet

**Universités privées :**
• Tests d'entrée spécifiques
• Entretiens de motivation
• Frais de scolarité variables

**Documents requis :**
• Relevé de notes BAC
• Acte de naissance
• Photos d'identité
• Certificat médical

**Conseils :**
• Postulez dans plusieurs établissements
• Préparez bien les concours
• Soignez votre dossier

Besoin d'aide pour une procédure spécifique ?`
    }

    if (lowerMessage.includes('stage') || lowerMessage.includes('expérience')) {
      return `🎯 **Stages & Expériences :**

**Où trouver des stages :**
• Ministères et institutions publiques
• Banques et assurances
• Entreprises tech (très demandés)
• ONGs et organisations internationales
• Start-ups locales

**Conseils pratiques :**
• Commencez tôt vos recherches
• Soignez votre CV et lettre de motivation
• Utilisez votre réseau personnel
• Soyez persistant dans vos démarches

**Durée recommandée :** 2-6 mois selon la filière

Notre plateforme référence +200 opportunités de stages !

Cherchez-vous dans un domaine particulier ?`
    }

    // Réponse générale avec conseils personnalisés
    if (testResults) {
      return `Basé sur votre profil d'orientation, voici mes conseils personnalisés :

🎯 **Vos forces :** ${testResults.personality || 'Leadership et collaboration'}
📚 **Filières recommandées :** ${testResults.recommendations?.slice(0, 3).map(r => r.field).join(', ') || 'Sciences, Commerce, Technologie'}
⏱️ **Durée d'études :** ${testResults.studyDuration || 'Formation complète recommandée'}

**Prochaines étapes :**
1. Explorez les universités spécialisées
2. Contactez des professionnels du secteur  
3. Recherchez des stages d'observation
4. Préparez vos candidatures

Voulez-vous approfondir un aspect particulier ?`
    }

    // Réponse par défaut
    return `Je suis là pour vous accompagner dans votre orientation ! 🎓

Je peux vous aider avec :
• Le choix de votre filière
• Les universités et leurs spécialités  
• Les débouchés professionnels
• Les procédures d'admission
• La recherche de stages

Posez-moi une question précise et je vous donnerai des informations détaillées sur l'enseignement supérieur au Bénin !`
  }

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) {
      toast.error("Veuillez saisir votre message");
      return;
    }
    
    if (currentMessage.trim().length < 3) {
      toast.error("Votre message doit contenir au moins 3 caractères");
      return;
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
      // Envoyer également à l'administrateur pour suivi
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
        
        if (supabaseUrl && supabaseKey) {
          await fetch(`${supabaseUrl}/functions/v1/send-email`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${supabaseKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              type: 'contact',
              email: 'utilisateur@chat-ia.com',
              data: {
                message: currentMessage,
                source: 'Chat IA',
                testResults: testResults ? 'Avec résultats de test' : 'Sans test',
                timestamp: new Date().toISOString()
              }
            })
          });
        }
      } catch (emailError) {
        console.log('Notification admin non envoyée:', emailError);
      }
      
      try {
        // Temporarily disable email function
        /* await fetch(`${supabaseUrl}/functions/v1/send-email`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'contact',
            email: 'utilisateur@chat-ia.com',
            data: {
              message: currentMessage,
              source: 'Chat IA',
              testResults: testResults ? 'Avec résultats de test' : 'Sans test',
              timestamp: new Date().toISOString()
            }
          })
        }); */
        console.log('Email would be sent:', { message: currentMessage, testResults })
      } catch (emailError) {
        console.log('Notification admin non envoyée:', emailError);
      }

      const aiResponse = await getSimulatedAIResponse(currentMessage);
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
        text: "Désolé, je rencontre une difficulté technique temporaire. Je reste disponible pour vous conseiller ! Pouvez-vous reformuler votre question ?",
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
      console.error('Erreur chat IA:', error);
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
      toast.success("IA configurée avec succès!")
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
              Intelligence artificielle spécialisée en orientation académique au Bénin
            </DialogDescription>
          </DialogHeader>

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
                placeholder="Posez votre question sur l'orientation..."
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
        </DialogContent>
      </Dialog>
    </>
  )
}