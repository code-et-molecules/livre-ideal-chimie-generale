import React, { useState } from 'react';
import {
  Chapter,
  BookModule,
  SectionContent,
  ReaderTheme,
  ExerciseItem,
} from '../types';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  HelpCircle,
  FileDown,
  Bookmark,
  Sparkles,
  Compass,
} from 'lucide-react';

interface EbookReaderProps {
  currentModule: BookModule;
  currentChapter: Chapter;
  currentSection?: SectionContent;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  theme: ReaderTheme;
  fontSize: 'normal' | 'large' | 'xlarge';
  onExportCurrentChapter: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export const EbookReader: React.FC<EbookReaderProps> = ({
  currentModule,
  currentChapter,
  currentSection,
  currentPage,
  totalPages,
  onPageChange,
  theme,
  fontSize,
  onExportCurrentChapter,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});

  const toggleSolution = (exId: string) => {
    setRevealedSolutions((prev) => ({
      ...prev,
      [exId]: !prev[exId],
    }));
  };

  const toggleHint = (exId: string) => {
    setRevealedHints((prev) => ({
      ...prev,
      [exId]: !prev[exId],
    }));
  };

  const fontClass =
    fontSize === 'xlarge'
      ? 'text-lg leading-relaxed'
      : fontSize === 'large'
      ? 'text-base leading-relaxed'
      : 'text-[15px] leading-relaxed';

  return (
    <article
      id="ebook-content-container"
      className="relative w-full max-w-4xl mx-auto px-4 sm:px-10 py-8 sm:py-12 space-y-10"
    >
      {/* Filigrane géométrique à équilibre vectoriel (orbites, axes, coordonnées) */}
      <div className="absolute top-2 right-2 sm:right-6 p-4 opacity-[0.04] select-none pointer-events-none text-emerald-600 dark:text-emerald-400">
        <svg width="320" height="320" viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="90" strokeWidth="0.75" />
          <circle cx="100" cy="100" r="60" strokeWidth="0.75" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="30" strokeWidth="0.75" />
          <line x1="10" y1="100" x2="190" y2="100" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="100" y1="10" x2="100" y2="190" strokeWidth="0.5" strokeDasharray="2 2" />
          <polygon points="100,20 180,100 100,180 20,100" strokeWidth="0.5" />
          <circle cx="100" cy="40" r="4" fill="currentColor" />
          <circle cx="160" cy="100" r="4" fill="currentColor" />
          <circle cx="100" cy="160" r="4" fill="currentColor" />
          <circle cx="40" cy="100" r="4" fill="currentColor" />
          <circle cx="100" cy="100" r="6" fill="currentColor" />
        </svg>
      </div>

      {/* Barre supérieure d'état géométrique */}
      <div className="flex items-center justify-between border-b pb-4 border-slate-200 dark:border-slate-800 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="font-mono font-bold text-[10px] tracking-wider px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
            MOD-{currentModule.moduleNumber.toString().padStart(2, '0')}
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="text-slate-600 dark:text-slate-400 font-medium truncate max-w-[200px] sm:max-w-md">
            {currentChapter.title}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            id="reader-bookmark-btn"
            onClick={onToggleBookmark}
            className={`flex items-center gap-1.5 text-xs font-mono transition-colors ${
              isBookmarked
                ? 'text-amber-500 font-bold'
                : 'text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
            title={isBookmarked ? "Page marquée d'un signet" : 'Ajouter un signet'}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500' : ''}`} />
            <span className="hidden sm:inline">Signet</span>
          </button>
          
          <div className="font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-0.5 rounded-full text-[11px] font-semibold text-slate-600 dark:text-slate-300 shadow-2xs">
            P. {currentPage.toString().padStart(2, '0')} / {totalPages}
          </div>
        </div>
      </div>

      {/* En-tête de chapitre : Typographie géométrique structurée */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-emerald-600 text-white px-2.5 py-1 text-[10px] font-mono font-bold tracking-widest uppercase rounded">
            Chapitre {currentChapter.chapterNumber.toString().padStart(2, '0')}
          </span>
          <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></span>
          <span className="text-[11px] font-mono text-slate-400 font-semibold">
            [P. {currentChapter.startPage.toString().padStart(2, '0')} — {currentChapter.endPage.toString().padStart(2, '0')}]
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight leading-[1.15] text-slate-900 dark:text-slate-50">
          {currentChapter.title}
        </h2>

        {/* Bloc résumé géométrique à équilibre asymétrique */}
        <div className="p-5 sm:p-6 border-l-4 border-emerald-600 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-r-xl shadow-2xs mt-4 relative bg-geometric-dots">
          <div className="flex items-center gap-2 mb-2 text-[10px] font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
            <Compass className="w-3.5 h-3.5" />
            <span>Synthèse du chapitre</span>
          </div>
          <p className="font-sans text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
            « {currentChapter.summary} »
          </p>
        </div>
      </header>

      {/* Sections du cours */}
      <div className="space-y-12">
        {currentChapter.sections.map((section, idx) => (
          <section
            key={section.id}
            id={`section-${section.id}`}
            className="space-y-6 pt-8 border-t border-slate-200 dark:border-slate-800 first:border-t-0"
          >
            {/* Titre de sous-section */}
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 shrink-0"></span>
                <span>
                  {currentChapter.chapterNumber}.{idx + 1} {section.title}
                </span>
              </h3>
              <span className="text-xs font-mono font-semibold text-slate-400 shrink-0">
                p. {section.pageNumber.toString().padStart(2, '0')}
              </span>
            </div>

            {/* Carte des concepts fondamentaux / Objectifs d'apprentissage collégiaux */}
            {section.learningObjectives && section.learningObjectives.length > 0 && (
              <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xs space-y-3.5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Concepts fondamentaux (programme collégial québécois)</span>
                </h4>
                <ul className="space-y-2.5 text-[14px] leading-relaxed text-slate-700 dark:text-slate-300">
                  {section.learningObjectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-sm bg-emerald-600 dark:bg-emerald-400 shrink-0 mt-2"></span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Corps du texte de cours */}
            <div className={`space-y-4 text-justify text-slate-800 dark:text-slate-200 ${fontClass}`}>
              {section.bodyMarkdown.map((paragraph, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Formules et relations mathématiques fondamentales */}
            {section.keyFormulas && section.keyFormulas.length > 0 && (
              <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xs space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                  <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Relations mathématiques fondamentales</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {section.keyFormulas.map((formula, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5"
                    >
                      <div className="font-mono text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
                        {formula.formula}
                      </div>
                      <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-snug">
                        {formula.explanation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Conseil pour l'examen collégial */}
            {section.collegeExamTip && (
              <div className="p-5 rounded-xl border-l-4 border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/25 border border-emerald-100 dark:border-emerald-900/40 flex items-start gap-3.5">
                <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs sm:text-sm">
                  <div className="font-mono font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider text-[11px]">
                    Conseil pour les examens collégiaux
                  </div>
                  <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    {section.collegeExamTip}
                  </p>
                </div>
              </div>
            )}

            {/* Erreurs fréquentes à éviter */}
            {section.commonMistakes && (
              <div className="p-5 rounded-xl border-l-4 border-rose-500 bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 flex items-start gap-3.5">
                <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs sm:text-sm">
                  <div className="font-mono font-bold text-rose-800 dark:text-rose-300 uppercase tracking-wider text-[11px]">
                    Erreur fréquente à éviter
                  </div>
                  <p className="text-rose-950 dark:text-rose-200 leading-relaxed font-medium">
                    {section.commonMistakes}
                  </p>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Section des exercices pratiques avec corrigés détaillés pas à pas */}
      {currentChapter.exercises && currentChapter.exercises.length > 0 && (
        <section
          id="chapitre-exercices-pratiques"
          className="pt-10 border-t border-slate-200 dark:border-slate-800 space-y-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-600 text-white">
                  Évaluation formative
                </span>
                <span className="text-xs font-mono text-slate-500 font-medium">
                  [{currentChapter.exercises.length} problème(s) avec démarche]
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mt-1.5 text-slate-900 dark:text-slate-50">
                Exercices pratiques et corrigés adaptés
              </h3>
            </div>

            {/* Export Google Docs direct */}
            <button
              id="export-chapter-exercises-btn"
              onClick={onExportCurrentChapter}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs transition-all self-start sm:self-auto"
            >
              <FileDown className="w-4 h-4" />
              <span>Exporter vers Google Docs</span>
            </button>
          </div>

          <div className="space-y-6">
            {currentChapter.exercises.map((exercise) => {
              const isSolutionShown = revealedSolutions[exercise.id];
              const isHintShown = revealedHints[exercise.id];

              return (
                <div
                  key={exercise.id}
                  id={`exercise-card-${exercise.id}`}
                  className="rounded-xl border border-slate-800 bg-[#0f172a] text-slate-100 p-6 shadow-sm space-y-4 relative overflow-hidden"
                >
                  {/* En-tête géométrique de l'exercice */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                          EX-{exercise.number.toString().padStart(2, '0')}
                        </span>
                        <h4 className="text-xs font-bold font-display uppercase tracking-wider text-slate-300">
                          {exercise.title}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {exercise.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] px-2 py-0.5 rounded bg-slate-800/90 text-slate-400 font-mono"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <span className="text-[10px] border border-slate-700 px-2.5 py-1 rounded text-slate-300 font-mono uppercase tracking-wider shrink-0 bg-slate-800/50">
                      Difficulté : {exercise.difficulty}
                    </span>
                  </div>

                  {/* Énoncé de l'exercice */}
                  <div className="text-sm leading-relaxed whitespace-pre-line text-slate-200">
                    {exercise.statement}
                  </div>

                  {/* Boutons d'action : Indice et Corrigé */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-2">
                    {exercise.hints && exercise.hints.length > 0 && (
                      <button
                        id={`hint-btn-${exercise.id}`}
                        onClick={() => toggleHint(exercise.id)}
                        className="text-xs font-medium px-3.5 py-1.5 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 flex items-center gap-1.5 transition-colors"
                      >
                        <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{isHintShown ? "Masquer l'indice" : 'Indice pédagogique'}</span>
                      </button>
                    )}

                    <button
                      id={`solution-toggle-btn-${exercise.id}`}
                      onClick={() => toggleSolution(exercise.id)}
                      className="text-xs font-bold px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center gap-1.5 shadow-2xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{isSolutionShown ? 'Masquer le corrigé' : 'Afficher le corrigé adapté'}</span>
                    </button>
                  </div>

                  {/* Indice */}
                  {isHintShown && exercise.hints && (
                    <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700 text-xs space-y-1.5 text-slate-300">
                      <div className="font-bold font-mono text-emerald-400 flex items-center gap-1.5 uppercase text-[10px] tracking-wider">
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>Pistes de résolution suggérées :</span>
                      </div>
                      <ul className="space-y-1 pl-4 list-disc text-slate-300">
                        {exercise.hints.map((hint, hIdx) => (
                          <li key={hIdx}>{hint}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Corrigé adapté */}
                  {isSolutionShown && (
                    <div className="mt-4 pt-4 border-t border-slate-800 space-y-3">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                        Corrigé adapté et démarche pas à pas
                      </p>

                      <div className="space-y-2 text-xs text-slate-200">
                        {exercise.solutionSteps.map((step, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2.5">
                            <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-emerald-400 shrink-0 border border-slate-700">
                              [{(sIdx + 1).toString().padStart(2, '0')}]
                            </span>
                            <p className="leading-relaxed">{step}</p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-slate-800 flex items-baseline gap-2 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                          Réponse finale :
                        </span>
                        <span className="font-mono font-bold text-white text-xs sm:text-sm text-emerald-300">
                          {exercise.finalAnswer}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Navigation en bas de page à équilibre géométrique */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div className="text-xs text-slate-500 font-mono font-semibold">
          Page {currentPage.toString().padStart(2, '0')} sur {totalPages}
        </div>

        <div className="flex items-center gap-2">
          <button
            id="reader-prev-bottom-btn"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage <= 1}
            aria-label="Page précédente"
            className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:border-emerald-500 hover:text-emerald-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            id="reader-next-bottom-btn"
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage >= totalPages}
            aria-label="Page suivante"
            className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
};
