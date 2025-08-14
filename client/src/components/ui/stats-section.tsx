import { AnimatedCounter } from './animated-counter';
import { Users, GraduationCap, Building, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 25000,
    suffix: "+",
    label: "Étudiants accompagnés",
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: GraduationCap,
    value: 500,
    suffix: "+",
    label: "Formations référencées",
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: Building,
    value: 150,
    suffix: "+",
    label: "Établissements partenaires",
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: Award,
    value: 95,
    suffix: "%",
    label: "Taux de satisfaction",
    color: "text-blue-600 dark:text-blue-400"
  }
];

export function StatsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Des résultats qui parlent d'eux-mêmes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Rejoignez les milliers d'étudiants qui ont trouvé leur voie grâce à nos services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-blue-500/30 hover:border-blue-500/50">
                <stat.icon className={`w-10 h-10 ${stat.color}`} />
              </div>
              <div className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}