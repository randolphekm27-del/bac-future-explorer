import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { OrientationTest } from "./orientation-test"
import { AIChat } from "./ai-chat"

interface FloatingAccessibilityProps {
  className?: string
}

interface TestResults {
  primaryField: string
  secondaryFields: string[]
  personality: string
  studyDuration: string
  workEnvironment: string
  recommendations: Array<{
    field: string
    match: number
    description: string
    universities: string[]
    careers: string[]
  }>
}

export function FloatingAccessibility({ className }: FloatingAccessibilityProps) {
  const [testResults, setTestResults] = useState<TestResults | null>(null)

  const handleTestComplete = (results: TestResults) => {
    setTestResults(results)
  }

  const createWelcomeMessage = (results: TestResults) => {
    return `Parfait ! J'ai analysé vos résultats de test :

🎯 **Domaine principal :** ${results.primaryField}
📊 **Compatibilité :** ${results.recommendations[0]?.match}%
🎓 **Filière recommandée :** ${results.recommendations[0]?.field}

Vos top 3 recommandations :
${results.recommendations.slice(0, 3).map((rec, i) => 
  `${i + 1}. ${rec.field} (${rec.match}%)`
).join('\n')}

Je peux maintenant vous donner des conseils ultra-personnalisés ! Que souhaitez-vous explorer ?`
  }

  return (
    <div className={cn("fixed right-2 sm:right-4 bottom-4 z-[9999] flex flex-col gap-2 sm:gap-3", className)}>
      <OrientationTest onComplete={handleTestComplete} />
      <AIChat 
        testResults={testResults}
        initialMessage={testResults ? createWelcomeMessage(testResults) : undefined}
      />
    </div>
  )
}