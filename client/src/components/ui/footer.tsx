import { Link } from "react-router-dom"
import { 
  Building2, 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  PlayCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Heart,
  Clock
} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/d0cefdb1-2000-4d82-9b38-0fa02b5f5d78.png" 
                alt="Après mon Bac Logo" 
                className="h-10 w-10"
              />
              <div>
                <h2 className="text-xl font-bold">Après mon Bac</h2>
                <p className="text-gray-400 text-sm">Excellence • Innovation • Réussite</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre partenaire stratégique pour une orientation universitaire d'excellence au Bénin. 
              Nous transformons l'ambition en réussite académique et professionnelle.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-blue-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <div className="w-1 h-5 bg-blue-500 rounded-full"></div>
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { path: "/universities", icon: Building2, label: "Universités & Écoles" },
                { path: "/programs", icon: GraduationCap, label: "Filières & Débouchés" },
                { path: "/internships", icon: Briefcase, label: "Stages & Opportunités" },
                { path: "/competitions", icon: Trophy, label: "Concours & Défis" }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path} 
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <div className="w-1 h-5 bg-blue-500 rounded-full"></div>
              Ressources
            </h3>
            <div className="space-y-4">
              <a 
                href="https://drive.google.com/file/d/1-R-g3n6vtr4nsBNV9_IUA6mC3Iio5CLW/view?usp=drivesdk" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              >
                <PlayCircle className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-sm font-medium">Guide d'orientation 2025</p>
                  <p className="text-xs text-gray-500">Guide complet et actualisé</p>
                </div>
              </a>
              
              <div className="space-y-2">
                {[
                  "FAQ & Questions fréquentes",
                  "Conseils d'experts",
                  "Témoignages d'étudiants",
                  "Centre d'aide"
                ].map((item, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <div className="w-1 h-5 bg-blue-500 rounded-full"></div>
              Contact
            </h3>
            <div className="space-y-4">
              {[
                { 
                  icon: Mail, 
                  title: "Email professionnel", 
                  content: "contact@apresmonbac.bj", 
                  href: "mailto:contact@apresmonbac.bj" 
                },
                { 
                  icon: Phone, 
                  title: "Assistance téléphonique", 
                  content: "+229 XX XX XX XX", 
                  href: "tel:+22900000000" 
                },
                { 
                  icon: MapPin, 
                  title: "Localisation", 
                  content: "Cotonou, République du Bénin" 
                }
              ].map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="p-2 rounded-md bg-gray-800">
                    <contact.icon className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{contact.title}</p>
                    {contact.href ? (
                      <a 
                        href={contact.href} 
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {contact.content}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-400">{contact.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Availability */}
            <div className="p-4 rounded-lg bg-gray-800">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-green-400" />
                <p className="text-sm font-medium">Disponibilité</p>
              </div>
              <div className="text-xs text-gray-400 space-y-1">
                <p><strong>Lun - Ven:</strong> 8h00 - 18h00</p>
                <p><strong>Samedi:</strong> 9h00 - 15h00</p>
                <p className="text-green-400">Réponse garantie sous 24h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-xs text-gray-500">
                © 2024 Après mon Bac. Tous droits réservés.
              </p>
              <div className="flex space-x-4">
                {["Mentions légales", "Confidentialité", "Conditions d'utilisation"].map((item, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <span>Développé avec</span>
              <Heart className="h-3 w-3 text-red-400 fill-current" />
              <span>pour le Bénin</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
