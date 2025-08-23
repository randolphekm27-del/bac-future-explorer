import { Search, MapPin, Filter, Grid, List } from "lucide-react"
import { useState } from "react"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { navigationLinks } from "@/lib/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { UniversityCard } from "@/components/ui/university-card"
import { universities } from "@/data/universities"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function Universities() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState<string>("all")
  const [selectedLocation, setSelectedLocation] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  
  useScrollAnimation();

  // Extraire les types et localisations uniques
  const universityTypes = Array.from(new Set(universities.map(u => u.type)))
  const universityLocations = Array.from(new Set(universities.map(u => u.location)))

  const filteredUniversities = universities.filter((university) => {
    const matchesSearch = university.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         university.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesType = selectedType === "all" || university.type === selectedType
    const matchesLocation = selectedLocation === "all" || university.location === selectedLocation

    return matchesSearch && matchesType && matchesLocation
  })

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-gray-50 dark:bg-gray-900">
      <Navigation links={navigationLinks} />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Universités du Bénin
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez les établissements d'enseignement supérieur, leurs spécialités et conditions d'admission pour faire le meilleur choix.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Input */}
              <div className="relative flex-1 max-w-2xl w-full">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Rechercher une université, une localisation..."
                  className="pl-12 pr-4 py-3 w-full text-lg border-2 border-gray-200 focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className="h-10 w-10"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className="h-10 w-10"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Type d'établissement
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="all">Tous les types</option>
                  {universityTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Localisation
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="all">Toutes les villes</option>
                  {universityLocations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedType("all")
                    setSelectedLocation("all")
                  }}
                  className="w-full"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Réinitialiser
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600 dark:text-gray-400">
              {filteredUniversities.length} établissement{filteredUniversities.length !== 1 ? 's' : ''} trouvé{filteredUniversities.length !== 1 ? 's' : ''}
            </p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <MapPin className="h-4 w-4 mr-1" />
              Bénin
            </div>
          </div>

          {/* Universities Grid */}
          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "space-y-4"
          }>
            {filteredUniversities.map((university, index) => (
              <div
                key={university.id}
                style={{ '--stagger-delay': index } as React.CSSProperties}
                className="animate-fade-in"
              >
                <UniversityCard 
                  university={university} 
                  viewMode={viewMode}
                />
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredUniversities.length === 0 && (
            <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="max-w-md mx-auto">
                <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Aucun résultat trouvé
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Aucune université ne correspond à vos critères de recherche. Essayez d'ajuster vos filtres.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedType("all")
                    setSelectedLocation("all")
                  }}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Réinitialiser la recherche
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
