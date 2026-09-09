/**
 * Définitions de types pour le manuel numérique de chimie générale collégiale
 */

export interface ExerciseItem {
  id: string;
  number: number;
  title: string;
  statement: string;
  hints?: string[];
  solutionSteps: string[];
  finalAnswer: string;
  difficulty: 'fondamental' | 'intermédiaire' | 'avancé';
  tags: string[];
}

export interface SectionContent {
  id: string;
  title: string;
  pageNumber: number;
  learningObjectives: string[];
  bodyMarkdown: string[];
  keyFormulas?: { formula: string; explanation: string }[];
  collegeExamTip?: string;
  commonMistakes?: string;
}

export interface Chapter {
  id: string;
  moduleId: string;
  chapterNumber: number;
  title: string;
  summary: string;
  startPage: number;
  endPage: number;
  sections: SectionContent[];
  exercises: ExerciseItem[];
}

export interface BookModule {
  id: string;
  moduleNumber: number;
  title: string;
  description: string;
  chapters: Chapter[];
  recapSummary: string;
}

export interface ChemicalElement {
  number: number;
  symbol: string;
  name: string;
  atomicMass: number;
  electronegativity?: number;
  radiusPm?: number;
  category: 'alcalin' | 'alcalino-terreux' | 'métal de transition' | 'post-transition' | 'métalloïde' | 'non-métal' | 'halogène' | 'gaz noble';
  electronConfig: string;
  valencyElectrons: number;
  period: number;
  group: number;
}

export type ReaderTheme = 'clair' | 'sepia' | 'sombre';
export type ViewMode = 'page' | 'continu';

export interface ExportDocRecord {
  id: string;
  title: string;
  docUrl: string;
  createdAt: string;
}
