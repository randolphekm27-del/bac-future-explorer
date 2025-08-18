import { Briefcase, Search, Calendar, MapPin, Building } from "lucide-react";
import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { navigationLinks } from "@/lib/navigation";
import { SectionTitle } from "@/components/ui/section-title";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const internships = [{
  id: 1,
  title: "Stage en développement web",
  company: "TechSolutions Bénin",
  location: "Cotonou",
  duration: "3 mois",
  type: "Informatique",
  description: "Stage pour développeurs web junior souhaitant se spécialiser en React et Node.js.",
  requirements: ["HTML/CSS", "JavaScript", "Connaissance de React"]
}, {
  id: 2,
  title: "Assistant marketing digital",
  company: "AgriTech",
  location: "Parakou",
  duration: "6 mois",
  type: "Marketing",
  description: "Participation à la stratégie marketing digital d'une entreprise agroalimentaire en pleine croissance.",
  requirements: ["Réseaux sociaux", "SEO", "Création de contenu"]
}, {
  id: 3,
  title: "Stage juridique",
  company: "Cabinet Lawson & Associates",
  location: "Cotonou",
  duration: "4 mois",
  type: "Droit",
  description: "Accompagnement des avocats dans la recherche juridique et la rédaction de documents légaux.",
  requirements: ["Droit des affaires", "Recherche juridique", "Rédaction"]
}, {
  id: 4,
  title: "Assistant comptable",
  company: "FiscalExpert",
  location: "Porto-Novo",
  duration: "3 mois",
  type: "Finance",
  description: "Participation à la comptabilité générale et la préparation des déclarations fiscales.",
  requirements: ["Comptabilité générale", "Excel", "Fiscalité de base"]
}, {
  id: 5,
  title: "Assistant de recherche agricole",
  company: "Institut National de Recherche Agricole",
  location: "Abomey-Calavi",
  duration: "6 mois",
  type: "Agronomie",
  description: "Participation à des projets de recherche sur l'amélioration des techniques agricoles.",
  requirements: ["Agronomie", "Méthodes de recherche", "Analyse de données"]
}, {
  id: 6,
  title: "Community Manager",
  company: "MediaPlus",
  location: "Cotonou",
  duration: "3 mois",
  type: "Communication",
  description: "Gestion des réseaux sociaux et création de contenu pour divers clients.",
  requirements: ["Réseaux sociaux", "Photoshop", "Rédaction web"]
}];
const resources = [{
  title: "Guide de recherche de stage",
  description: "Techniques et astuces pour trouver un stage dans votre domaine",
  link: "#"
}, {
  title: "Modèle de CV",
  description: "Exemples de CV efficaces pour les jeunes diplômés",
  link: "#"
}, {
  title: "Lettre de motivation",
  description: "Templates et conseils pour rédiger une lettre de motivation percutante",
  link: "#"
}, {
  title: "Préparer un entretien",
  description: "Comment se préparer aux questions fréquentes en entretien",
  link: "#"
}];
export default function Internships() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const types = ["all", ...Array.from(new Set(internships.map(internship => internship.type)))];
  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) || internship.company.toLowerCase().includes(searchTerm.toLowerCase()) || internship.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || internship.type === typeFilter;
    return matchesSearch && matchesType;
  });
  return <div className="flex min-h-screen flex-col">
      <Navigation links={navigationLinks} />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <SectionTitle title="Stages & Opportunités" description="Trouvez des stages dans votre domaine et accédez à des ressources pour postuler efficacement." />
            {/* Fonction "Mettre en avant mon entreprise" supprimée comme demandé */}
          </div>

          <Tabs defaultValue="opportunities" className="mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="opportunities">Opportunités de stage</TabsTrigger>
              <TabsTrigger value="resources">Ressources utiles</TabsTrigger>
            </TabsList>
            <TabsContent value="opportunities">
              <div className="mb-8 flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Rechercher un stage..." className="pl-10" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                </div>
                
                {/* Conteneur des boutons de filtre avec défilement horizontal */}
                <div className="relative w-full sm:w-auto">
                  <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 sm:overflow-x-visible sm:flex-wrap scrollbar-hide">
                    {types.map(type => (
                      <Button
                        key={type}
                        variant={typeFilter === type ? "default" : "outline"}
                        onClick={() => setTypeFilter(type)}
                        className="whitespace-nowrap flex-shrink-0 sm:flex-shrink text-xs sm:text-sm"
                        size="sm"
                      >
                        {type === "all" ? "Tous" : type}
                      </Button>
                    ))}
                  </div>
                  <div className="absolute right-0 top-0 bottom-4 w-6 bg-gradient-to-l from-background to-transparent pointer-events-none sm:hidden" />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredInternships.map(internship => <div key={internship.id} className="group rounded-lg border bg-background p-6 hover:border-primary/50 transition-colors animate-scale-in">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs px-3 py-1 rounded-full bg-accent text-primary">
                        {internship.type}
                      </span>
                      <span className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="mr-1 h-3 w-3" />
                        {internship.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {internship.title}
                    </h3>
                    <div className="mt-2 flex items-center text-sm text-muted-foreground">
                      <Building className="mr-1 h-4 w-4" />
                      {internship.company}
                    </div>
                    <div className="mt-1 flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      {internship.location}
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      {internship.description}
                    </p>
                    <div className="mt-6">
                      <h4 className="text-sm font-medium mb-2">Compétences requises:</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.requirements.map((req, i) => <span key={i} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                            {req}
                          </span>)}
                      </div>
                    </div>
                    <Button className="mt-6 w-full">
                      <Briefcase className="mr-2 h-4 w-4" />
                      Postuler
                    </Button>
                  </div>)}
              </div>
            </TabsContent>
            <TabsContent value="resources">
              <div className="grid gap-6 md:grid-cols-2">
                {resources.map((resource, i) => <div key={i} className="group rounded-lg border bg-background p-6 hover:border-primary/50 transition-colors animate-scale-in">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {resource.description}
                    </p>
                    <a href={resource.link} className="mt-4 inline-flex items-center text-primary hover:underline">
                      Télécharger
                      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>)}
              </div>
            </TabsContent>
          </Tabs>

          {/* ContactForm supprimé avec la fonction "Mettre en avant mon entreprise" */}
        </div>
      </main>

      <Footer />
    </div>;
}