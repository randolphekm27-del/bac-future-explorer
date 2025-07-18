import { ScrollReveal } from './scroll-reveal';
import { AnimatedCounter } from './animated-counter';
import { Users, GraduationCap, Building, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 25000,
    suffix: "+",
    label: "Étudiants accompagnés",
    color: "text-primary"
  },
  {
    icon: GraduationCap,
    value: 500,
    suffix: "+",
    label: "Formations référencées",
    color: "text-accent"
  },
  {
    icon: Building,
    value: 150,
    suffix: "+",
    label: "Établissements partenaires",
    color: "text-primary"
  },
  {
    icon: Award,
    value: 95,
    suffix: "%",
    label: "Taux de satisfaction",
    color: "text-accent"
  }
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Des résultats qui parlent d'eux-mêmes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rejoignez les milliers d'étudiants qui ont trouvé leur voie grâce à nos services
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}