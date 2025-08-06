/**
 * Optimized Data Manager
 * Système de gestion optimisé des données pour une performance premium
 */

import { programsData, type ProgramData } from './programs-data';
import { universities, type University } from './universities';

// Cache Maps pour des lookups O(1) au lieu de O(n)
class OptimizedDataManager {
  private static instance: OptimizedDataManager;
  
  // Cache Maps pour des performances optimales
  private programsBySlug = new Map<string, ProgramData>();
  private programsByCategory = new Map<string, ProgramData[]>();
  private universitiesBySlug = new Map<string, University>();
  private schoolsByProgram = new Map<string, Array<{school: any, university: University}>>();
  private searchIndex = new Map<string, ProgramData[]>();
  
  // Indicateurs de performance
  private isInitialized = false;
  private initStartTime = 0;
  private initEndTime = 0;

  private constructor() {
    this.initializeCache();
  }

  public static getInstance(): OptimizedDataManager {
    if (!OptimizedDataManager.instance) {
      OptimizedDataManager.instance = new OptimizedDataManager();
    }
    return OptimizedDataManager.instance;
  }

  private initializeCache(): void {
    this.initStartTime = performance.now();
    console.log('🚀 Initialisation du cache de données optimisé...');
    
    // Cache des programmes par slug
    programsData.forEach(program => {
      this.programsBySlug.set(program.slug, program);
    });

    // Cache des programmes par catégorie
    const categoryMap = new Map<string, ProgramData[]>();
    programsData.forEach(program => {
      const existing = categoryMap.get(program.category) || [];
      existing.push(program);
      categoryMap.set(program.category, existing);
    });
    this.programsByCategory = categoryMap;

    // Cache des universités par slug
    universities.forEach(university => {
      this.universitiesBySlug.set(university.slug, university);
    });

    // Cache des écoles par programme (optimisation majeure)
    this.buildSchoolsByProgramCache();

    // Index de recherche
    this.buildSearchIndex();

    this.initEndTime = performance.now();
    this.isInitialized = true;
    
    console.log(`✅ Cache initialisé en ${(this.initEndTime - this.initStartTime).toFixed(2)}ms`);
    console.log(`📊 Données cachées: ${this.programsBySlug.size} programmes, ${this.universitiesBySlug.size} universités`);
  }

  private buildSchoolsByProgramCache(): void {
    // Optimisation: pré-calculer les écoles pour chaque programme
    programsData.forEach(program => {
      const schools: Array<{school: any, university: University}> = [];
      
      universities.forEach(university => {
        university.schools.forEach(school => {
          // Recherche optimisée: vérifier si l'école propose ce programme
          if (school.programs.some(p => this.normalizeForComparison(p) === this.normalizeForComparison(program.name))) {
            schools.push({ school, university });
          }
        });
      });
      
      this.schoolsByProgram.set(program.slug, schools);
    });
  }

  private buildSearchIndex(): void {
    // Index de recherche pour une recherche ultra-rapide
    const index = new Map<string, ProgramData[]>();
    
    programsData.forEach(program => {
      // Mots-clés de recherche
      const keywords = [
        ...program.name.toLowerCase().split(/\s+/),
        ...program.category.toLowerCase().split(/\s+/),
        ...(program.description || '').toLowerCase().split(/\s+/),
        ...program.careers.map(c => c.toLowerCase().split(/\s+/)).flat()
      ];

      keywords.forEach(keyword => {
        if (keyword.length > 2) { // Ignorer les mots trop courts
          const existing = index.get(keyword) || [];
          if (!existing.includes(program)) {
            existing.push(program);
            index.set(keyword, existing);
          }
        }
      });
    });

    this.searchIndex = index;
  }

  private normalizeForComparison(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
      .replace(/[^a-z0-9\s]/g, '') // Garder que lettres, chiffres et espaces
      .trim();
  }

  // API publique optimisée
  public getProgramBySlug(slug: string): ProgramData | undefined {
    return this.programsBySlug.get(slug);
  }

  public getUniversityBySlug(slug: string): University | undefined {
    return this.universitiesBySlug.get(slug);
  }

  public getProgramsByCategory(category: string): ProgramData[] {
    return this.programsByCategory.get(category) || [];
  }

  public getSchoolsForProgram(programSlug: string) {
    return this.schoolsByProgram.get(programSlug) || [];
  }

  public getAllCategories(): string[] {
    return Array.from(this.programsByCategory.keys()).sort();
  }

  public searchPrograms(query: string): ProgramData[] {
    if (!query || query.length < 2) return [];
    
    const normalizedQuery = this.normalizeForComparison(query);
    const words = normalizedQuery.split(/\s+/);
    const results = new Set<ProgramData>();

    words.forEach(word => {
      // Recherche exacte
      const exactMatches = this.searchIndex.get(word) || [];
      exactMatches.forEach(program => results.add(program));

      // Recherche partielle pour une meilleure UX
      this.searchIndex.forEach((programs, keyword) => {
        if (keyword.includes(word) || word.includes(keyword)) {
          programs.forEach(program => results.add(program));
        }
      });
    });

    return Array.from(results).slice(0, 20); // Limiter à 20 résultats pour la performance
  }

  public getPerformanceMetrics() {
    return {
      isInitialized: this.isInitialized,
      initTime: this.initEndTime - this.initStartTime,
      cacheSize: {
        programs: this.programsBySlug.size,
        universities: this.universitiesBySlug.size,
        categories: this.programsByCategory.size,
        searchIndex: this.searchIndex.size
      }
    };
  }
}

// Export singleton instance
export const dataManager = OptimizedDataManager.getInstance();

// Export des fonctions compatibles avec l'API existante
export const getProgramBySlug = (slug: string) => dataManager.getProgramBySlug(slug);
export const getUniversityBySlug = (slug: string) => dataManager.getUniversityBySlug(slug);
export const getProgramsByCategory = (category: string) => dataManager.getProgramsByCategory(category);
export const getSchoolsForProgram = (programSlug: string) => dataManager.getSchoolsForProgram(programSlug);
export const getAllCategories = () => dataManager.getAllCategories();
export const searchPrograms = (query: string) => dataManager.searchPrograms(query);