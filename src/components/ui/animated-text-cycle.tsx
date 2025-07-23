import { useState, useEffect } from "react"

interface AnimatedTextCycleProps {
  texts: string[]
  className?: string
}

export function AnimatedTextCycle({ texts, className = "" }: AnimatedTextCycleProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const currentText = texts[currentTextIndex]
    let timeoutId: NodeJS.Timeout

    if (isTyping && displayedText.length < currentText.length) {
      // Afficher lettre par lettre (2 secondes / longueur du texte)
      const typingSpeed = 2000 / currentText.length
      timeoutId = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1))
      }, typingSpeed)
    } else if (isTyping && displayedText.length === currentText.length) {
      // Texte complet affiché, attendre 7 secondes puis commencer l'effacement
      timeoutId = setTimeout(() => {
        setIsTyping(false)
        setIsVisible(false)
      }, 7000)
    } else if (!isTyping) {
      // Effacement en fondu (500ms), puis passer au texte suivant
      timeoutId = setTimeout(() => {
        setDisplayedText("")
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        setIsTyping(true)
        setIsVisible(true)
      }, 500)
    }

    return () => clearTimeout(timeoutId)
  }, [currentTextIndex, displayedText, isTyping, texts])

  return (
    <h1 className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}>
      <span className="text-shadow">{displayedText}</span>
      {isTyping && (
        <span className="animate-pulse">|</span>
      )}
    </h1>
  )
}