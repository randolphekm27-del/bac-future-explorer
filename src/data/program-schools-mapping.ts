// Mapping entre les filières et les écoles qui les proposent
import { universities } from './universities';
import { programsData } from './programs-data';
import { formatProgramName } from './universities';

export interface SchoolMapping {
  schoolId: string;
  universityId: string;
  schoolName: string;
  universityName: string;
}

// Fonction pour créer un slug à partir d'un nom de programme
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

// Fonction pour trouver la correspondance entre un programme d'école et une filière
export const findMatchingProgram = (schoolProgramName: string) => {
  const formattedName = formatProgramName(schoolProgramName);
  const slug = createProgramSlug(formattedName);
  
  // Chercher d'abord par slug exact
  let matchingProgram = programsData.find(program => program.slug === slug);
  
  // Si pas trouvé, chercher par correspondance partielle
  if (!matchingProgram) {
    matchingProgram = programsData.find(program => {
      const programSlug = program.slug;
      const schoolSlug = slug;
      
      // Vérifier si l'un contient l'autre
      return programSlug.includes(schoolSlug) || 
             schoolSlug.includes(programSlug) ||
             program.name.toLowerCase().includes(formattedName.toLowerCase()) ||
             formattedName.toLowerCase().includes(program.name.toLowerCase());
    });
  }
  
  // Si toujours pas trouvé, chercher par mots-clés
  if (!matchingProgram) {
    const keywords = formattedName.toLowerCase().split(/[\s-]+/);
    matchingProgram = programsData.find(program => {
      const programKeywords = program.name.toLowerCase().split(/[\s-]+/);
      return keywords.some(keyword => 
        keyword.length > 3 && programKeywords.some(pk => pk.includes(keyword))
      );
    });
  }
  
  return matchingProgram;
};

// Fonction pour obtenir les écoles qui proposent une filière donnée
export const getSchoolsForProgram = (programSlug: string) => {
  const schools: Array<{
    school: any;
    university: any;
  }> = [];

  // Parcourir toutes les universités et leurs écoles
  for (const university of universities) {
    for (const school of university.schools) {
      // Vérifier si l'école propose cette filière
      const hasProgram = school.programs.some(program => {
        // Normaliser les noms pour la comparaison
        const normalizedProgram = program.toLowerCase()
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

        return normalizedProgram === programSlug || 
               normalizedProgram.includes(programSlug) ||
               programSlug.includes(normalizedProgram);
      });

      if (hasProgram) {
        schools.push({
          school,
          university
        });
      }
    }
  }

  return schools;
};

// Fonction pour obtenir toutes les filières disponibles depuis les écoles
export const getAllAvailablePrograms = (): string[] => {
  const allPrograms = new Set<string>();

  for (const university of universities) {
    for (const school of university.schools) {
      for (const program of school.programs) {
        allPrograms.add(program);
      }
    }
  }

  return Array.from(allPrograms).sort();
};

// Fonction pour vérifier si une filière est disponible dans au moins une école
export const isProgramAvailable = (programSlug: string): boolean => {
  const schools = getSchoolsForProgram(programSlug);
  return schools.length > 0;
};