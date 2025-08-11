import { Link } from "react-router-dom"
import { Building2, GraduationCap, Briefcase, Trophy, PlayCircle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-800 to-gray-900 border-t border-blue-400/20">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl blur-lg opacity-50"></div>
                <img 
                  src="/lovable-uploads/d0cefdb1-2000-4d82-9b38-0fa02b5f5d78.png" 
                  alt="Après mon Bac Logo" 
                  className="relative h-12 w-12 rounded-xl"
                />
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                  Après mon Bac
                </span>
                <div className="text-blue-200/80 text-sm font-medium mt-1">Excellence • Innovation • Réussite</div>
              </div>
            </div>
            <p className="text-blue-100/80 text-base leading-relaxed">
              Votre partenaire stratégique pour une orientation universitaire d'excellence au Bénin. 
              Nous transformons l'ambition en réussite académique et professionnelle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300">
                <Facebook className="h-5 w-5 text-blue-100/80 group-hover:text-white transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a href="#" className="group relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300">
                <Twitter className="h-5 w-5 text-blue-100/80 group-hover:text-white transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a href="#" className="group relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300">
                <Instagram className="h-5 w-5 text-blue-100/80 group-hover:text-white transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a href="#" className="group relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300">
                <Linkedin className="h-5 w-5 text-blue-100/80 group-hover:text-white transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
              Navigation
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/universities" className="group relative text-blue-100/90 hover:text-white transition-all duration-300 text-base flex items-center space-x-4 p-3 rounded-xl hover:bg-white/5 hover:backdrop-blur-sm">
                  <div className="relative p-2 rounded-lg bg-gradient-to-br from-blue-400/20 to-blue-600/20 group-hover:from-blue-400/30 group-hover:to-blue-600/30 transition-all duration-300 border border-blue-400/30">
                    <Building2 className="h-5 w-5 text-blue-200 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-medium">Universités & Écoles</span>
                  <div className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/programs" className="group relative text-blue-100/90 hover:text-white transition-all duration-300 text-base flex items-center space-x-4 p-3 rounded-xl hover:bg-white/5 hover:backdrop-blur-sm">
                  <div className="relative p-2 rounded-lg bg-gradient-to-br from-blue-400/20 to-blue-600/20 group-hover:from-blue-400/30 group-hover:to-blue-600/30 transition-all duration-300 border border-blue-400/30">
                    <GraduationCap className="h-5 w-5 text-blue-200 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-medium">Filières & Débouchés</span>
                  <div className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/internships" className="group relative text-blue-100/90 hover:text-white transition-all duration-300 text-base flex items-center space-x-4 p-3 rounded-xl hover:bg-white/5 hover:backdrop-blur-sm">
                  <div className="relative p-2 rounded-lg bg-gradient-to-br from-blue-400/20 to-blue-600/20 group-hover:from-blue-400/30 group-hover:to-blue-600/30 transition-all duration-300 border border-blue-400/30">
                    <Briefcase className="h-5 w-5 text-blue-200 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-medium">Stages & Opportunités</span>
                  <div className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/competitions" className="group relative text-blue-100/90 hover:text-white transition-all duration-300 text-base flex items-center space-x-4 p-3 rounded-xl hover:bg-white/5 hover:backdrop-blur-sm">
                  <div className="relative p-2 rounded-lg bg-gradient-to-br from-blue-400/20 to-blue-600/20 group-hover:from-blue-400/30 group-hover:to-blue-600/30 transition-all duration-300 border border-blue-400/30">
                    <Trophy className="h-5 w-5 text-blue-200 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-medium">Concours & Défis</span>
                  <div className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources Premium */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
              Ressources
            </h3>
            <div className="space-y-4">
              <a href="https://drive.google.com/file/d/1-R-g3n6vtr4nsBNV9_IUA6mC3Iio5CLW/view?usp=drivesdk" 
                 target="_blank"
                 className="group relative flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 hover:border-white/40 hover:from-white/10 hover:to-white/15 transition-all duration-300">
                <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20">
                  <PlayCircle className="h-5 w-5 text-orange-300" />
                </div>
                <div className="flex-1">
                  <p className="text-blue-100 font-semibold">Guide d'orientation 2025</p>
                  <p className="text-blue-200/70 text-sm">Guide complet et actualisé</p>
                </div>
              </a>
              
              <div className="space-y-3">
                <a href="#" className="text-blue-100/80 hover:text-white transition-all duration-300 text-base block hover:translate-x-2 hover:pl-4">
                  FAQ & Questions fréquentes
                </a>
                <a href="#" className="text-blue-100/80 hover:text-white transition-all duration-300 text-base block hover:translate-x-2 hover:pl-4">
                  Conseils d'experts
                </a>
                <a href="#" className="text-blue-100/80 hover:text-white transition-all duration-300 text-base block hover:translate-x-2 hover:pl-4">
                  Témoignages d'étudiants
                </a>
                <a href="#" className="text-blue-100/80 hover:text-white transition-all duration-300 text-base block hover:translate-x-2 hover:pl-4">
                  Centre d'aide
                </a>
              </div>
            </div>
          </div>

          {/* Contact Premium */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
              Contact
            </h3>
            <div className="space-y-5">
              <div className="group flex items-start space-x-4 text-base text-blue-100/90 hover:text-white transition-colors p-4 rounded-xl hover:bg-white/5">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-400/20 to-blue-600/20 border border-blue-400/30 group-hover:from-blue-400/30 group-hover:to-blue-600/30 transition-all">
                  <Mail className="h-5 w-5 text-blue-200" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white mb-1">Email professionnel</p>
                  <a href="mailto:contact@apresmonbac.bj" className="text-blue-200/90 hover:text-blue-100 transition-colors font-medium">
                    contact@apresmonbac.bj
                  </a>
                </div>
              </div>
              
              <div className="group flex items-start space-x-4 text-base text-blue-100/90 hover:text-white transition-colors p-4 rounded-xl hover:bg-white/5">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-400/20 to-blue-600/20 border border-blue-400/30 group-hover:from-blue-400/30 group-hover:to-blue-600/30 transition-all">
                  <Phone className="h-5 w-5 text-blue-200" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white mb-1">Assistance téléphonique</p>
                  <a href="tel:+22900000000" className="text-blue-200/90 hover:text-blue-100 transition-colors font-medium">
                    +229 XX XX XX XX
                  </a>
                </div>
              </div>
              
              <div className="group flex items-start space-x-4 text-base text-blue-100/90">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-400/20 to-blue-600/20 border border-blue-400/30">
                  <MapPin className="h-5 w-5 text-blue-200" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white mb-1">Localisation</p>
                  <p className="text-blue-200/90">Cotonou, République du Bénin</p>
                </div>
              </div>
            </div>
            
            <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-white font-semibold">Disponibilité</p>
              </div>
              <p className="text-blue-200/90 text-base leading-relaxed">
                <strong>Lun - Ven:</strong> 8h00 - 18h00<br />
                <strong>Samedi:</strong> 9h00 - 15h00<br />
                <span className="text-blue-300/80">Réponse garantie sous 24h</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8">
              <p className="text-sm text-white/70 font-medium">
                © 2024 Après mon Bac. Tous droits réservés.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-xs text-white/50 hover:text-white/80 transition-colors hover:underline">
                  Mentions légales
                </a>
                <a href="#" className="text-xs text-white/50 hover:text-white/80 transition-colors hover:underline">
                  Confidentialité
                </a>
                <a href="#" className="text-xs text-white/50 hover:text-white/80 transition-colors hover:underline">
                  Conditions d'utilisation
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-white/60">
              <span>Développé avec</span>
              <span className="text-red-400">♥</span>
              <span>pour le Bénin</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}