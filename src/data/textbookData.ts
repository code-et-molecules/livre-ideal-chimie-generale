import { BookModule, Chapter, ExerciseItem, SectionContent } from '../types';
import { MODULE_1 } from './module1';
import { MODULE_2 } from './module2';
import { MODULE_3 } from './module3';
import { MODULE_4 } from './module4';

export const BOOK_MODULES: BookModule[] = [
  MODULE_1,
  MODULE_2,
  MODULE_3,
  MODULE_4,
];

export const TOTAL_PAGES = 64;

export function getAllChapters(): Chapter[] {
  return BOOK_MODULES.flatMap((m) => m.chapters);
}

export function getAllSections(): { section: SectionContent; chapter: Chapter; bookModule: BookModule }[] {
  const result: { section: SectionContent; chapter: Chapter; bookModule: BookModule }[] = [];
  for (const mod of BOOK_MODULES) {
    for (const chap of mod.chapters) {
      for (const sec of chap.sections) {
        result.push({ section: sec, chapter: chap, bookModule: mod });
      }
    }
  }
  return result;
}

export function getAllExercises(): { exercise: ExerciseItem; chapter: Chapter; bookModule: BookModule }[] {
  const result: { exercise: ExerciseItem; chapter: Chapter; bookModule: BookModule }[] = [];
  for (const mod of BOOK_MODULES) {
    for (const chap of mod.chapters) {
      for (const ex of chap.exercises) {
        result.push({ exercise: ex, chapter: chap, bookModule: mod });
      }
    }
  }
  return result;
}

export function findLocationByPage(pageNumber: number): {
  bookModule: BookModule;
  chapter: Chapter;
  section?: SectionContent;
} | null {
  for (const mod of BOOK_MODULES) {
    for (const chap of mod.chapters) {
      if (pageNumber >= chap.startPage && pageNumber <= chap.endPage) {
        const sec = chap.sections.find((s) => s.pageNumber === pageNumber) || chap.sections[0];
        return { bookModule: mod, chapter: chap, section: sec };
      }
    }
  }
  return null;
}
