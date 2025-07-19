import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Building2, Users, BookOpen, Clock } from "lucide-react"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { navigationLinks } from "@/lib/navigation"
import { SectionTitle } from "@/components/ui/section-title"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const universityData = {
  1: {
    name: "Université d'Abomey-Calavi (UAC)",
    schools: [
      {
        id: 1,
        name: "Faculté des Sciences et Techniques",
        type: "Faculté",
        programs: ["Mathématiques", "Physique", "Chimie", "Informatique", "Biologie"],
        students: 1200,
        description: "Formation scientifique et technique de haut niveau"
      },
      {
        id: 2,
        name: "Faculté de Droit et de Science Politique",
        type: "Faculté",
        programs: ["Droit Privé", "Droit Public", "Science Politique", "Relations Internationales"],
        students: 800,
        description: "Formation juridique et politique complète"
      },
      {
        id: 3,
        name: "École Nationale d'Administration",
        type: "École",
        programs: ["Administration Publique", "Gestion", "Économie", "Finance"],
        students: 400,
        description: "Formation des cadres de l'administration"
      },
      {
        id: 4,
        name: "Faculté des Lettres, Arts et Sciences Humaines",
        type: "Faculté",
        programs: ["Lettres Modernes", "Histoire", "Géographie", "Philosophie", "Sociologie"],
        students: 950,
        description: "Formation humaniste et littéraire"
      }
    ]
  },
  2: {
    name: "Université de Parakou (UP)",
    schools: [
      {
        id: 1,
        name: "Faculté d'Agronomie",
        type: "Faculté", 
        programs: ["Agriculture", "Élevage", "Foresterie", "Pêche"],
        students: 600,
        description: "Spécialisée dans les sciences agricoles"
      },
      {
        id: 2,
        name: "Faculté de Médecine",
        type: "Faculté",
        programs: ["Médecine Générale", "Chirurgie", "Pédiatrie", "Gynécologie"],
        students: 300,
        description: "Formation médicale d'excellence"
      }
    ]
  }
}

export default function UniversitySchools() {
  const { universityId } = useParams()
  const university = universityData[Number(universityId) as keyof typeof universityData]

  if (!university) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navigation links={navigationLinks} />
        <main className="flex-1 pt-24 pb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-destructive">Université non trouvée</h1>
            <Link to="/universities" className="text-primary hover:underline mt-4 inline-block">
              ← Retour aux universités
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation links={navigationLinks} />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link 
              to="/universities"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux universités
            </Link>
            
            <SectionTitle
              title={university.name}
              description="Découvrez toutes les écoles et facultés de cette université"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {university.schools.map((school, index) => (
              <ScrollReveal key={school.id} delay={index * 100}>
                <div className="group relative bg-card rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 p-8">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="h-8 w-8" />
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {school.type}
                      </span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        {school.students} étudiants
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {school.name}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {school.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-3 flex items-center">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Programmes disponibles
                      </h4>
                      <div className="space-y-2">
                        {school.programs.slice(0, 3).map((program, i) => (
                          <div key={i} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                            {program}
                          </div>
                        ))}
                        {school.programs.length > 3 && (
                          <div className="text-sm text-primary">
                            +{school.programs.length - 3} autres programmes
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] font-medium">
                      Voir les détails
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}