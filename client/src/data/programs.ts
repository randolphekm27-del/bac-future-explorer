import { universities } from './universities';

// Interface pour les programmes
export interface Program {
  id: string;
  name: string;
  slug: string;
  category: string;
  duration: string;
  description: string;
  careers: string[];
  icon: string;
  schoolIds: string[];
  schoolsCount: number;
  universities: string[];
  image?: string;
  gallery?: {
    images: string[];
    description?: string;
  };
  detailedDescription?: string;
}

// Fonction pour créer un slug à partir d'un nom
const createSlugFromName = (name: string): string => {
  return name.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Fonction pour déterminer la catégorie d'un programme
const getCategoryForProgram = (name: string): string => {
  const lowerName = name.toLowerCase();
  
  if (lowerName.includes('informatique') || lowerName.includes('génie informatique') || 
      lowerName.includes('télécom') || lowerName.includes('numérique')) {
    return 'Informatique & Technologie';
  }
  if (lowerName.includes('médecine') || lowerName.includes('santé') || 
      lowerName.includes('infirmier') || lowerName.includes('obstétric') ||
      lowerName.includes('biomédical') || lowerName.includes('pharmacie')) {
    return 'Santé & Médecine';
  }
  if (lowerName.includes('génie civil') || lowerName.includes('architecture') ||
      lowerName.includes('bâtiment') || lowerName.includes('travaux publics')) {
    return 'Génie Civil & Architecture';
  }
  if (lowerName.includes('agriculture') || lowerName.includes('agronomie') ||
      lowerName.includes('production végétale') || lowerName.includes('production animale') ||
      lowerName.includes('aquaculture') || lowerName.includes('horticulture')) {
    return 'Agriculture & Environnement';
  }
  if (lowerName.includes('droit') || lowerName.includes('juridique') ||
      lowerName.includes('politique') || lowerName.includes('sciences politiques')) {
    return 'Droit & Sciences Politiques';
  }
  if (lowerName.includes('économie') || lowerName.includes('gestion') ||
      lowerName.includes('commerce') || lowerName.includes('finance') ||
      lowerName.includes('comptable')) {
    return 'Économie & Gestion';
  }
  if (lowerName.includes('langue') || lowerName.includes('littérature') ||
      lowerName.includes('anglais') || lowerName.includes('français') ||
      lowerName.includes('espagnol') || lowerName.includes('allemand') ||
      lowerName.includes('chinois') || lowerName.includes('communication')) {
    return 'Langues & Communication';
  }
  if (lowerName.includes('mathématiques') || lowerName.includes('physique') ||
      lowerName.includes('chimie') || lowerName.includes('sciences')) {
    return 'Sciences Exactes';
  }
  if (lowerName.includes('éducation') || lowerName.includes('enseignement') ||
      lowerName.includes('pédagogie') || lowerName.includes('formation')) {
    return 'Éducation & Formation';
  }
  
  return 'Autres';
};

// Fonction pour obtenir les débouchés d'un programme avec plus de spécificité
const getCareersForProgram = (name: string): string[] => {
  const lowerName = name.toLowerCase();
  
  // Informatique et Technologie
  if (lowerName.includes('informatique') && lowerName.includes('télécom')) {
    return ['Ingénieur télécom', 'Architecte réseaux', 'Ingénieur cybersécurité', 'Chef de projet IT'];
  }
  if (lowerName.includes('génie informatique') || lowerName.includes('informatique')) {
    return ['Développeur full-stack', 'Data scientist', 'Ingénieur DevOps', 'Consultant IT'];
  }
  
  // Santé et Médecine
  if (lowerName.includes('médecine humaine')) {
    return ['Médecin généraliste', 'Médecin spécialiste', 'Chef de service médical', 'Médecin humanitaire'];
  }
  if (lowerName.includes('soins infirmiers')) {
    return ['Infirmier hospitalier', 'Infirmier libéral', 'Cadre de santé', 'Infirmier spécialisé'];
  }
  if (lowerName.includes('analyse biomédicale')) {
    return ['Technicien de laboratoire', 'Biologiste médical', 'Chercheur biomédical', 'Responsable qualité labo'];
  }
  if (lowerName.includes('pharmacie') || lowerName.includes('biotechnologie pharmaceutique')) {
    return ['Pharmacien hospitalier', 'Pharmacien d\'officine', 'Ingénieur pharmaceutique', 'Chercheur en pharmacologie'];
  }
  if (lowerName.includes('santé publique')) {
    return ['Épidémiologiste', 'Chef de programme santé', 'Consultant OMS', 'Coordonnateur sanitaire'];
  }
  if (lowerName.includes('génie biomédical') || lowerName.includes('maintenance biomédicale')) {
    return ['Technicien biomédical', 'Ingénieur équipements médicaux', 'Consultant biomédical', 'Chef de service technique'];
  }
  if (lowerName.includes('kinésithérapie') || lowerName.includes('physiothérapie')) {
    return ['Kinésithérapeute', 'Rééducateur', 'Thérapeute sportif', 'Directeur de centre de rééducation'];
  }
  
  // Génie Civil et Architecture
  if (lowerName.includes('génie civil')) {
    return ['Ingénieur BTP', 'Chef de projet construction', 'Contrôleur technique', 'Entrepreneur du bâtiment'];
  }
  if (lowerName.includes('architecture')) {
    return ['Architecte', 'Urbaniste', 'Chef de projet architectural', 'Consultant en patrimoine'];
  }
  if (lowerName.includes('travaux publics') || lowerName.includes('génie géomatique')) {
    return ['Ingénieur travaux publics', 'Géomètre-expert', 'Topographe', 'Chef de chantier TP'];
  }
  if (lowerName.includes('hydraulique') || lowerName.includes('assainissement')) {
    return ['Ingénieur hydraulique', 'Chef de projet eau', 'Consultant WASH', 'Gestionnaire de réseau'];
  }
  
  // Agriculture et Environnement
  if (lowerName.includes('production végétale') || lowerName.includes('sciences et techniques de production végétale')) {
    return ['Ingénieur agronome', 'Conseiller agricole', 'Entrepreneur agricole', 'Responsable exploitation'];
  }
  if (lowerName.includes('production animale') || lowerName.includes('élevage')) {
    return ['Zootechnicien', 'Vétérinaire', 'Chef d\'exploitation élevage', 'Consultant en élevage'];
  }
  if (lowerName.includes('aquaculture')) {
    return ['Aquaculteur', 'Technicien piscicole', 'Gestionnaire de ferme aquacole', 'Consultant en pêche'];
  }
  if (lowerName.includes('horticulture') || lowerName.includes('espaces verts')) {
    return ['Horticulteur', 'Paysagiste', 'Gestionnaire d\'espaces verts', 'Entrepreneur paysagiste'];
  }
  if (lowerName.includes('foresterie')) {
    return ['Ingénieur forestier', 'Garde forestier', 'Consultant environnemental', 'Chef de projet reboisement'];
  }
  if (lowerName.includes('génie de l\'environnement')) {
    return ['Ingénieur environnement', 'Consultant développement durable', 'Chef de projet écologique', 'Auditeur environnemental'];
  }
  if (lowerName.includes('agroéquipement') || lowerName.includes('machinisme agricole')) {
    return ['Technicien machinisme', 'Vendeur équipements agricoles', 'Mécanicien agricole', 'Chef d\'atelier agricole'];
  }
  if (lowerName.includes('nutrition') || lowerName.includes('sciences agro-alimentaires')) {
    return ['Nutritionniste', 'Ingénieur agroalimentaire', 'Diététicien', 'Contrôleur qualité alimentaire'];
  }
  
  // Économie et Gestion
  if (lowerName.includes('sciences économiques')) {
    return ['Économiste', 'Analyste économique', 'Conseiller politique économique', 'Chercheur économique'];
  }
  if (lowerName.includes('gestion') || lowerName.includes('management')) {
    return ['Manager', 'Consultant en gestion', 'Chef d\'entreprise', 'Contrôleur de gestion'];
  }
  if (lowerName.includes('comptable') || lowerName.includes('stcf')) {
    return ['Expert-comptable', 'Auditeur', 'Contrôleur fiscal', 'Directeur financier'];
  }
  if (lowerName.includes('finance') || lowerName.includes('banque')) {
    return ['Analyste financier', 'Banquier', 'Courtier', 'Gestionnaire de patrimoine'];
  }
  if (lowerName.includes('commerce international') || lowerName.includes('négoce')) {
    return ['Commercial international', 'Import-export', 'Logisticien international', 'Négociant'];
  }
  if (lowerName.includes('marketing') || lowerName.includes('communication')) {
    return ['Chef de produit', 'Responsable marketing', 'Consultant communication', 'Community manager'];
  }
  
  // Droit et Sciences Politiques
  if (lowerName.includes('droit')) {
    return ['Avocat', 'Magistrat', 'Juriste d\'entreprise', 'Notaire'];
  }
  if (lowerName.includes('sciences politiques') || lowerName.includes('politique')) {
    return ['Diplomate', 'Analyste politique', 'Chargé de mission', 'Conseiller politique'];
  }
  
  // Langues et Communication
  if (lowerName.includes('anglais')) {
    return ['Professeur d\'anglais', 'Traducteur-interprète', 'Guide touristique', 'Attaché commercial international'];
  }
  if (lowerName.includes('français') || lowerName.includes('littérature')) {
    return ['Professeur de français', 'Écrivain', 'Éditeur', 'Journaliste'];
  }
  if (lowerName.includes('allemand')) {
    return ['Professeur d\'allemand', 'Traducteur allemand', 'Attaché culturel', 'Guide touristique spécialisé'];
  }
  if (lowerName.includes('espagnol')) {
    return ['Professeur d\'espagnol', 'Traducteur espagnol', 'Conseiller en commerce hispanique', 'Attaché culturel'];
  }
  if (lowerName.includes('chinois') || lowerName.includes('didactique du chinois')) {
    return ['Professeur de chinois', 'Traducteur sino-français', 'Conseiller commercial Chine', 'Attaché culturel Chine'];
  }
  
  // Sciences Exactes
  if (lowerName.includes('mathématiques') && lowerName.includes('informatique')) {
    return ['Data analyst', 'Actuaire', 'Professeur de maths', 'Statisticien'];
  }
  if (lowerName.includes('physique') && lowerName.includes('chimie')) {
    return ['Professeur de sciences', 'Ingénieur de laboratoire', 'Chercheur', 'Technicien de laboratoire'];
  }
  if (lowerName.includes('sciences de la vie') || lowerName.includes('biologie')) {
    return ['Biologiste', 'Professeur de SVT', 'Chercheur en biologie', 'Technicien de laboratoire bio'];
  }
  
  // Éducation et Formation
  if (lowerName.includes('éducation physique') || lowerName.includes('sport')) {
    return ['Professeur d\'EPS', 'Entraîneur sportif', 'Préparateur physique', 'Directeur de centre sportif'];
  }
  if (lowerName.includes('pédagogie') || lowerName.includes('enseignement')) {
    return ['Enseignant', 'Conseiller pédagogique', 'Directeur d\'école', 'Formateur d\'adultes'];
  }
  if (lowerName.includes('philosophie')) {
    return ['Professeur de philosophie', 'Écrivain', 'Journaliste', 'Conseiller éthique'];
  }
  if (lowerName.includes('histoire') || lowerName.includes('géographie')) {
    return ['Professeur d\'histoire-géo', 'Guide touristique', 'Archéologue', 'Cartographe'];
  }
  
  // Ingénierie et Technologie
  if (lowerName.includes('génie électrique') || lowerName.includes('électrotechnique')) {
    return ['Ingénieur électrique', 'Technicien électrotechnique', 'Chef de projet électrique', 'Consultant en énergie'];
  }
  if (lowerName.includes('génie mécanique') || lowerName.includes('maintenance industrielle')) {
    return ['Ingénieur mécanicien', 'Technicien de maintenance', 'Chef d\'atelier', 'Consultant industriel'];
  }
  if (lowerName.includes('génie énergétique') || lowerName.includes('énergies renouvelables')) {
    return ['Ingénieur énergéticien', 'Consultant énergie renouvelable', 'Technicien solaire', 'Chef de projet énergétique'];
  }
  if (lowerName.includes('froid') || lowerName.includes('climatisation')) {
    return ['Frigoriste', 'Technicien climatisation', 'Installateur CVC', 'Dépanneur électroménager'];
  }
  if (lowerName.includes('génie chimique') || lowerName.includes('procédés')) {
    return ['Ingénieur chimiste', 'Technicien de production', 'Responsable qualité industrielle', 'Consultant procédés'];
  }
  
  // Autres domaines spécialisés
  if (lowerName.includes('sociologie rurale') || lowerName.includes('vulgarisation')) {
    return ['Sociologue rural', 'Agent de développement', 'Animateur rural', 'Consultant en développement'];
  }
  if (lowerName.includes('développement communautaire')) {
    return ['Agent de développement', 'Coordinateur ONG', 'Animateur social', 'Chef de projet communautaire'];
  }
  if (lowerName.includes('population') || lowerName.includes('démographie')) {
    return ['Démographe', 'Statisticien', 'Planificateur urbain', 'Analyste de population'];
  }
  
  // Par défaut selon la catégorie
  if (lowerName.includes('technique') || lowerName.includes('technologie')) {
    return ['Technicien spécialisé', 'Chef d\'équipe technique', 'Formateur technique', 'Entrepreneur'];
  }
  
  return ['Spécialiste du domaine', 'Consultant', 'Formateur', 'Entrepreneur'];
};

// Fonction pour extraire tous les programmes des universités
const extractProgramsFromUniversities = (): Program[] => {
  const programsMap = new Map<string, {
    name: string;
    schoolIds: string[];
    universities: string[];
  }>();

  // Parcourir toutes les universités et écoles pour extraire les programmes
  universities.forEach(university => {
    university.schools.forEach(school => {
      school.programs.forEach(programName => {
        const trimmedName = programName.trim();
        
        // Utiliser le nom exact comme clé pour éviter les fusions incorrectes
        const key = trimmedName;
        
        if (programsMap.has(key)) {
          const existing = programsMap.get(key)!;
          existing.schoolIds.push(school.id);
          if (!existing.universities.includes(university.name)) {
            existing.universities.push(university.name);
          }
        } else {
          programsMap.set(key, {
            name: trimmedName,
            schoolIds: [school.id],
            universities: [university.name]
          });
        }
      });
    });
  });

  // Convertir en tableau de programmes
  const programsArray: Program[] = [];
  let idCounter = 1;

  programsMap.forEach((programData, name) => {
    const slug = createSlugFromName(name);
    const category = getCategoryForProgram(name);
    const careers = getCareersForProgram(name);
    
    programsArray.push({
      id: idCounter.toString(),
      name: programData.name,
      slug,
      category,
      duration: '3-5 ans', // Durée par défaut
      description: `Formation professionnelle en ${programData.name.toLowerCase()}`,
      careers,
      icon: 'BookOpen',
      schoolIds: programData.schoolIds,
      schoolsCount: programData.schoolIds.length,
      universities: programData.universities,
      image: `https://images.pexels.com/photos/${1000000 + idCounter}/pexels-photo-${1000000 + idCounter}.jpeg?auto=compress&cs=tinysrgb&w=800`,
      gallery: {
        images: [
          `https://images.unsplash.com/photo-${1500000000000 + idCounter * 1000}?auto=format&fit=crop&w=800&q=80`,
          `https://images.unsplash.com/photo-${1500000001000 + idCounter * 1000}?auto=format&fit=crop&w=800&q=80`,
          `https://images.unsplash.com/photo-${1500000002000 + idCounter * 1000}?auto=format&fit=crop&w=800&q=80`,
          `https://images.unsplash.com/photo-${1500000003000 + idCounter * 1000}?auto=format&fit=crop&w=800&q=80`,
          `https://images.unsplash.com/photo-${1500000004000 + idCounter * 1000}?auto=format&fit=crop&w=800&q=80`
        ],
        description: `Découvrez l'univers de ${programData.name.toLowerCase()} à travers nos images de formation et de terrain professionnel.`
      },
      detailedDescription: `La filière ${programData.name} forme des professionnels qualifiés dans ce domaine d'expertise. Cette formation complète vous permettra d'acquérir toutes les compétences nécessaires pour réussir dans ce secteur en pleine expansion.`
    });
    
    idCounter++;
  });

  return programsArray.sort((a, b) => a.name.localeCompare(b.name));
};

// Générer automatiquement les programmes à partir des universités
export const programs: Program[] = extractProgramsFromUniversities();

// Fonctions utilitaires
export const getAllCategories = (): string[] => {
  const categoriesSet = new Set(programs.map(p => p.category));
  const categories = Array.from(categoriesSet);
  return categories.sort();
};

export const getProgramBySlug = (slug: string): Program | undefined => {
  return programs.find(p => p.slug === slug);
};

export const getSchoolsForProgram = (programSlug: string): any[] => {
  const program = getProgramBySlug(programSlug);
  if (!program) return [];
  
  // Extraire toutes les écoles qui proposent ce programme
  const schools: any[] = [];
  
  universities.forEach(university => {
    university.schools.forEach(school => {
      if (school.programs.some(progName => 
        createSlugFromName(progName) === programSlug
      )) {
        schools.push({
          ...school,
          universityName: university.name,
          universitySlug: university.slug,
          universityType: university.type
        });
      }
    });
  });
  
  return schools;
};

// Fonctions supplémentaires pour maintenir la compatibilité
export const createProgramSlug = (name: string): string => {
  return name.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
};

export const getProgramDetails = (slug: string) => {
  return getProgramBySlug(slug);
};

export const getSchoolsByIds = (ids: string[]): any[] => {
  return [];
};