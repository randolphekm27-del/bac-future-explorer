import { universities, formatProgramName } from './universities';

export interface Program {
  id: string;
  name: string;
  slug: string;
  category: string;
  duration: string;
  description: string;
  domainDetails?: string;
  careers: string[];
  icon: string;
  schoolIds: string[]; // IDs des écoles qui proposent cette filière
}

// Fonction pour catégoriser les programmes
const categorizeProgram = (programName: string): string => {
  const name = programName.toLowerCase();
  
  // Agriculture et Productions
  if (name.includes('production végétale') || name.includes('production animale') || 
      name.includes('agriculture') || name.includes('nutrition') || name.includes('aménagement') ||
      name.includes('gestion des ressources naturelles') || name.includes('forêt') ||
      name.includes('technologie alimentaire') || name.includes('sciences du sol') ||
      name.includes('agronomie') || name.includes('élevage') || name.includes('agro') ||
      name.includes('vétérinaire') || name.includes('pêche') || name.includes('aquaculture')) {
    return "Agriculture et Productions Végétales/Animales";
  }
  
  // Médecine et Santé
  if (name.includes('santé') || name.includes('médecine') || name.includes('obstétrical') ||
      name.includes('biosciences') || name.includes('hygiène') || name.includes('soins') ||
      name.includes('infirmier') || name.includes('pharmacie') || name.includes('dentaire') ||
      name.includes('sage-femme') || name.includes('kinésithérapie') || name.includes('biologie médicale')) {
    return "Médecine et Santé Publique";
  }
  
  // Ingénierie et Technologies - Informatique/Télécoms
  if (name.includes('informatique') || name.includes('télécommunications') || name.includes('logiciel') ||
      name.includes('intelligence artificielle') || name.includes('systèmes embarqués') ||
      name.includes('sécurité informatique') || name.includes('réseaux') || name.includes('programmation') ||
      name.includes('multimédia') || name.includes('technologie') || name.includes('numérique') ||
      name.includes('digital') || name.includes('cyber') || name.includes('data') ||
      name.includes('système d\'information')) {
    return "Informatique, Télécoms et Intelligence Artificielle";
  }
  
  // Génie Électrique/Mécanique/Énergétique  
  if (name.includes('génie électrique') || name.includes('génie mécanique') || name.includes('énergétique') ||
      name.includes('électrique') || name.includes('mécanique') || name.includes('industrielle') ||
      name.includes('maintenance') || name.includes('automatique') || name.includes('électronique') ||
      name.includes('électrotechnique') || name.includes('energie') || name.includes('moteur') ||
      name.includes('machine') || name.includes('thermique')) {
    return "Génie Électrique, Mécanique et Énergétique";
  }
  
  // Génie Civil et Construction
  if (name.includes('génie civil') || name.includes('civil') || name.includes('hydraulique') || 
      name.includes('assainissement') || name.includes('eau') || name.includes('génie rural') || 
      name.includes('hydrologie') || name.includes('hydrogéologie') || name.includes('ecohydrologie') ||
      name.includes('construction') || name.includes('bâtiment') || name.includes('travaux publics') ||
      name.includes('géotechnique') || name.includes('infrastructure')) {
    return "Génie Civil, Hydraulique et Construction";
  }
  
  // Environnement
  if (name.includes('environnement') || name.includes('climatique') || name.includes('géomatique') ||
      name.includes('cadre de vie') || name.includes('espaces urbains') || name.includes('écologie') ||
      name.includes('développement durable') || name.includes('biodiversité') || 
      name.includes('cartographie') || name.includes('sig') || name.includes('géographie physique')) {
    return "Environnement et Développement Durable";
  }
  
  // Gestion et Finance
  if (name.includes('gestion') || name.includes('finance') || name.includes('comptable') ||
      name.includes('banque') || name.includes('assurance') || name.includes('marketing') ||
      name.includes('commerce') || name.includes('économie') || name.includes('management') ||
      name.includes('entrepreneuriat') || name.includes('business') || name.includes('administration') ||
      name.includes('ressources humaines') || name.includes('audit') || name.includes('fiscalité')) {
    return "Gestion, Finance et Commerce";
  }
  
  // Transport et Logistique
  if (name.includes('transport') || name.includes('logistique') || name.includes('circulation') ||
      name.includes('mobilité') || name.includes('véhicule') || name.includes('automobile') ||
      name.includes('aéronautique') || name.includes('maritime') || name.includes('supply chain')) {
    return "Transport et Logistique";
  }
  
  // Arts et Culture
  if (name.includes('arts') || name.includes('dramatique') || name.includes('plastique') ||
      name.includes('musique') || name.includes('musicologie') || name.includes('cinéma') ||
      name.includes('audiovisuel') || name.includes('administration culturelle') ||
      name.includes('création') || name.includes('design') || name.includes('théâtre') ||
      name.includes('danse') || name.includes('photographie')) {
    return "Arts et Culture";
  }
  
  // Lettres et Langues
  if (name.includes('allemand') || name.includes('espagnol') || name.includes('lettres') ||
      name.includes('langage') || name.includes('communication') || name.includes('anglais') ||
      name.includes('journalisme') || name.includes('français') || name.includes('arabe') ||
      name.includes('linguistique') || name.includes('traduction') || name.includes('interprétariat') ||
      name.includes('littérature') || name.includes('philosophie')) {
    return "Lettres, Langues et Communication";
  }
  
  // Sciences Humaines
  if (name.includes('géographie') || name.includes('socio') || name.includes('anthropologie') ||
      name.includes('éducation') || name.includes('histoire') || name.includes('psychologie') ||
      name.includes('sciences humaines') || name.includes('service social') || 
      name.includes('développement communautaire') || name.includes('relations internationales') ||
      name.includes('sciences politiques') || name.includes('droit') || name.includes('juridique')) {
    return "Sciences Humaines et Sociales";
  }
  
  // Sciences Fondamentales
  if (name.includes('mathématiques') || name.includes('physique') || name.includes('chimie') ||
      name.includes('mpsi') || name.includes('pcsi') || name.includes('biologie') ||
      name.includes('statistique') || name.includes('sciences') || name.includes('recherche') ||
      name.includes('laboratoire') || name.includes('analyse') || name.includes('géologie')) {
    return "Mathématiques, Physique et Chimie";
  }
  
  // Planification et Développement
  if (name.includes('planification') || name.includes('développement') || name.includes('aménagement') ||
      name.includes('urbanisme') || name.includes('territoire') || name.includes('population') ||
      name.includes('démographie') || name.includes('projet') || name.includes('coopération')) {
    return "Planification et Développement Territorial";
  }
  
  return "Autres Formations";
};

// Fonction pour attribuer une icône selon le programme
const getIconForProgram = (programName: string): string => {
  const name = programName.toLowerCase();
  
  if (name.includes('production végétale') || name.includes('agriculture')) return "Sprout";
  if (name.includes('production animale')) return "PawPrint";
  if (name.includes('santé') || name.includes('médecine')) return "Heart";
  if (name.includes('obstétrical')) return "Baby";
  if (name.includes('informatique') || name.includes('programmation')) return "Code";
  if (name.includes('génie électrique')) return "Zap";
  if (name.includes('génie mécanique')) return "Settings";
  if (name.includes('génie civil') || name.includes('hydraulique')) return "Building";
  if (name.includes('eau') || name.includes('hydrologie')) return "Droplets";
  if (name.includes('environnement') || name.includes('climatique')) return "Leaf";
  if (name.includes('géomatique')) return "Map";
  if (name.includes('finance') || name.includes('banque')) return "CreditCard";
  if (name.includes('gestion') || name.includes('management')) return "Briefcase";
  if (name.includes('marketing')) return "TrendingUp";
  if (name.includes('transport') || name.includes('logistique')) return "Truck";
  if (name.includes('statistique')) return "BarChart";
  if (name.includes('arts') || name.includes('dramatique')) return "Palette";
  if (name.includes('musique')) return "Music";
  if (name.includes('cinéma') || name.includes('audiovisuel')) return "Video";
  if (name.includes('allemand') || name.includes('espagnol') || name.includes('anglais')) return "Languages";
  if (name.includes('lettres') || name.includes('communication')) return "BookOpen";
  if (name.includes('journalisme')) return "Newspaper";
  if (name.includes('géographie')) return "Globe";
  if (name.includes('socio') || name.includes('anthropologie')) return "Users";
  if (name.includes('éducation')) return "GraduationCap";
  if (name.includes('histoire')) return "Clock";
  if (name.includes('psychologie')) return "Brain";
  if (name.includes('administration')) return "FileText";
  if (name.includes('mathématiques') || name.includes('mpsi')) return "Calculator";
  if (name.includes('physique') || name.includes('pcsi')) return "Atom";
  
  return "BookOpen"; // Icône par défaut
};

// Génération automatique des programmes à partir des données des universités
const generateProgramsFromUniversities = (): Program[] => {
  const programMap = new Map<string, Program>();
  
  universities.forEach(university => {
    university.schools.forEach(school => {
      school.programs.forEach(programName => {
        const formattedName = formatProgramName(programName);
        const slug = createProgramSlug(formattedName);
        
        if (!programMap.has(slug)) {
          programMap.set(slug, {
            id: `prog-${slug}`,
            name: formattedName,
            slug: slug,
            category: categorizeProgram(formattedName),
            duration: "3-5 ans", // Durée générique
            description: `Formation spécialisée en ${formattedName.toLowerCase()}.`,
            careers: [`Spécialiste en ${formattedName.toLowerCase()}`, "Consultant", "Expert du domaine"],
            icon: getIconForProgram(formattedName),
            schoolIds: [school.id]
          });
        } else {
          // Ajouter l'école à la liste si elle n'y est pas déjà
          const existingProgram = programMap.get(slug)!;
          if (!existingProgram.schoolIds.includes(school.id)) {
            existingProgram.schoolIds.push(school.id);
          }
        }
      });
    });
  });
  
  return Array.from(programMap.values()).sort((a, b) => a.name.localeCompare(b.name));
};

// Fonction utilitaire pour créer un slug propre
export const createProgramSlug = (programName: string): string => {
  return programName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[&]/g, 'et')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

export const programs: Program[] = generateProgramsFromUniversities();

export const getProgramBySlug = (slug: string): Program | undefined => {
  return programs.find(program => program.slug === slug);
};

export const getSchoolsForProgram = (programSlug: string) => {
  const program = getProgramBySlug(programSlug);
  if (!program) return [];

  const schools = [];
  for (const university of universities) {
    for (const school of university.schools) {
      if (program.schoolIds.includes(school.id)) {
        schools.push({
          school,
          university
        });
      }
    }
  }
  return schools;
};

export const getProgramsForSchool = (schoolId: string): Program[] => {
  return programs.filter(program => program.schoolIds.includes(schoolId));
};
