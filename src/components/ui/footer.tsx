import { Link } from "react-router-dom"
import { Building2, GraduationCap, Briefcase, Trophy, PlayCircle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t" style={{ backgroundColor: 'hsl(211 100% 50%)' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white">
                Après mon Bac
              </span>
            </div>
            <p className="text-white/80 text-sm">
              Votre guide de confiance pour l'orientation universitaire au Bénin. 
              Nous accompagnons chaque bachelier vers la réussite.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/universities" className="text-white/80 hover:text-white transition-colors text-sm flex items-center space-x-2">
                  <Building2 className="h-4 w-4" />
                  <span>Universités</span>
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-white/80 hover:text-white transition-colors text-sm flex items-center space-x-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Filières</span>
                </Link>
              </li>
              <li>
                <Link to="/internships" className="text-white/80 hover:text-white transition-colors text-sm flex items-center space-x-2">
                  <Briefcase className="h-4 w-4" />
                  <span>Stages</span>
                </Link>
              </li>
              <li>
                <Link to="/competitions" className="text-white/80 hover:text-white transition-colors text-sm flex items-center space-x-2">
                  <Trophy className="h-4 w-4" />
                  <span>Concours</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-white/80 hover:text-white transition-colors text-sm flex items-center space-x-2">
                  <PlayCircle className="h-4 w-4" />
                  <span>Formations</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  Centre d'aide
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  Guide d'orientation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                  Témoignages
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-white/80">
                <Mail className="h-4 w-4" />
                <span>contact@apresmonbac.bj</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/80">
                <Phone className="h-4 w-4" />
                <span>+229 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/80">
                <MapPin className="h-4 w-4" />
                <span>Cotonou, Bénin</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs text-white/70">
                Lun - Ven: 8h00 - 18h00<br />
                Sam: 9h00 - 15h00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-white/80">
              © 2024 Après mon Bac. Tous droits réservés.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-xs text-white/70 hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-xs text-white/70 hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-xs text-white/70 hover:text-white transition-colors">
                CGU
              </a>
            </div>
          </div>
          <div className="text-xs text-white/70">
            Fait avec ❤️ au Bénin
          </div>
        </div>
      </div>
    </footer>
  )
}