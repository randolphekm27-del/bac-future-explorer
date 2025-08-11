import { Link } from "react-router-dom"
import { Building2, GraduationCap, Briefcase, Trophy, PlayCircle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-600 border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/d0cefdb1-2000-4d82-9b38-0fa02b5f5d78.png" 
                alt="Après mon Bac Logo" 
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Après mon Bac
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              La plateforme de référence pour l'orientation universitaire au Bénin. 
              Nous guidons chaque bachelier vers l'excellence académique et professionnelle.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="group p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300">
                <Facebook className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="group p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300">
                <Twitter className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="group p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300">
                <Instagram className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="group p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300">
                <Linkedin className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Découvrir</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/universities" className="group text-white/70 hover:text-white transition-all duration-300 text-sm flex items-center space-x-3">
                  <div className="p-1 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <span>Universités & Écoles</span>
                </Link>
              </li>
              <li>
                <Link to="/programs" className="group text-white/70 hover:text-white transition-all duration-300 text-sm flex items-center space-x-3">
                  <div className="p-1 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <span>Filières & Débouchés</span>
                </Link>
              </li>
              <li>
                <Link to="/internships" className="group text-white/70 hover:text-white transition-all duration-300 text-sm flex items-center space-x-3">
                  <div className="p-1 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <span>Stages & Opportunités</span>
                </Link>
              </li>
              <li>
                <Link to="/competitions" className="group text-white/70 hover:text-white transition-all duration-300 text-sm flex items-center space-x-3">
                  <div className="p-1 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                    <Trophy className="h-4 w-4" />
                  </div>
                  <span>Concours & Défis</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="group text-white/70 hover:text-white transition-all duration-300 text-sm flex items-center space-x-3">
                  <div className="p-1 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                    <PlayCircle className="h-4 w-4" />
                  </div>
                  <span>Formations Pratiques</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Ressources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-all duration-300 text-sm block hover:translate-x-1">
                  Guide d'orientation complet
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-all duration-300 text-sm block hover:translate-x-1">
                  FAQ & Questions fréquentes
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-all duration-300 text-sm block hover:translate-x-1">
                  Conseils & Astuces
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-all duration-300 text-sm block hover:translate-x-1">
                  Témoignages d'étudiants
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-all duration-300 text-sm block hover:translate-x-1">
                  Centre d'aide
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Nous contacter</h3>
            <div className="space-y-4">
              <div className="group flex items-center space-x-3 text-sm text-white/70 hover:text-white transition-colors">
                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:contact@apresmonbac.bj" className="text-white/60 hover:text-white transition-colors">
                    contact@apresmonbac.bj
                  </a>
                </div>
              </div>
              <div className="group flex items-center space-x-3 text-sm text-white/70 hover:text-white transition-colors">
                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">Téléphone</p>
                  <a href="tel:+22900000000" className="text-white/60 hover:text-white transition-colors">
                    +229 XX XX XX XX
                  </a>
                </div>
              </div>
              <div className="group flex items-center space-x-3 text-sm text-white/70">
                <div className="p-2 rounded-lg bg-white/10 transition-colors">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">Localisation</p>
                  <p className="text-white/60">Cotonou, Bénin</p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-xs text-white/60 font-medium mb-1">Horaires d'ouverture</p>
              <p className="text-xs text-white/50">
                Lun - Ven: 8h00 - 18h00<br />
                Sam: 9h00 - 15h00
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