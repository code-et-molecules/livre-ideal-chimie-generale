import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight, Book, CheckSquare, Hash, Layers } from 'lucide-react';
import { BookModule, Chapter } from '../types';
import { BOOK_MODULES, TOTAL_PAGES } from '../data/textbookData';

interface SidebarProps {
  currentChapterId: string;
  currentPage: number;
  onSelectChapter: (chapterId: string) => void;
  onSelectPage: (page: number) => void;
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentChapterId,
  currentPage,
  onSelectChapter,
  onSelectPage,
  isOpen,
  onClose,
  isDark,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'sommaire' | 'exercices' | 'pages'>('sommaire');
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    'module-1': true,
    'module-2': true,
    'module-3': true,
    'module-4': true,
  });

  const toggleModule = (modId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [modId]: !prev[modId],
    }));
  };

  // Filtrage par recherche
  const filteredChapters = BOOK_MODULES.flatMap((m) =>
    m.chapters.filter(
      (c) =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.sections.some(
          (s) =>
            s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.bodyMarkdown.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()))
        )
    )
  );

  return (
    <>
      {/* Fond semi-transparent pour mobile */}
      {isOpen && (
        <div
          id="sidebar-overlay"
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs z-40 lg:hidden"
        />
      )}

      <aside
        id="app-sidebar"
        className={`fixed top-14 bottom-0 left-0 z-40 w-80 max-w-[85vw] border-r transition-transform duration-200 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${
          isDark
            ? 'bg-[#0f172a] border-slate-800 text-slate-100'
            : 'bg-white border-slate-200/80 text-slate-900'
        }`}
      >
        {/* En-tête géométrique équilibré */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 relative bg-geometric-dots">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.22em] font-mono text-slate-500 dark:text-slate-400 font-bold block">
              Sciences de la nature
            </span>
            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900">
              QC-202
            </span>
          </div>

          <h2 className="text-2xl font-display font-bold leading-tight mt-2 tracking-tight">
            Livre idéal<br />
            <span className="text-emerald-600 dark:text-emerald-400 font-normal">Chimie générale</span>
          </h2>
          
          <div className="flex items-center gap-2 mt-3.5">
            <div className="h-1 w-8 bg-emerald-600 dark:bg-emerald-500 rounded-full"></div>
            <div className="h-1 w-2 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
            <div className="h-1 w-1 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
          </div>
        </div>

        {/* Champ de recherche géométrique */}
        <div className="px-4 py-2.5 border-b border-slate-200 dark:border-slate-800">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="sidebar-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une notion, formule..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Onglets de navigation à équilibre ternaire */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 text-xs font-semibold px-2">
          <button
            id="tab-sommaire-btn"
            onClick={() => setActiveTab('sommaire')}
            className={`flex-1 py-2.5 flex items-center justify-center gap-1.5 border-b-2 transition-all ${
              activeTab === 'sommaire'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'
            }`}
          >
            <Book className="w-3.5 h-3.5" />
            <span>Sommaire</span>
          </button>
          <button
            id="tab-exercices-btn"
            onClick={() => setActiveTab('exercices')}
            className={`flex-1 py-2.5 flex items-center justify-center gap-1.5 border-b-2 transition-all ${
              activeTab === 'exercices'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'
            }`}
          >
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Exercices</span>
          </button>
          <button
            id="tab-pages-btn"
            onClick={() => setActiveTab('pages')}
            className={`flex-1 py-2.5 flex items-center justify-center gap-1.5 border-b-2 transition-all ${
              activeTab === 'pages'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'
            }`}
          >
            <Hash className="w-3.5 h-3.5" />
            <span>64 pages</span>
          </button>
        </div>

        {/* Contenu déroulant */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {searchQuery ? (
            <div>
              <p className="text-[10px] uppercase tracking-widest font-mono font-bold text-slate-400 mb-3">
                Résultats trouvés ({filteredChapters.length})
              </p>
              {filteredChapters.length === 0 ? (
                <p className="text-xs text-slate-500 italic p-3 text-center">
                  Aucun résultat trouvé pour « {searchQuery} ».
                </p>
              ) : (
                <div className="space-y-2">
                  {filteredChapters.map((chap) => (
                    <button
                      key={chap.id}
                      onClick={() => {
                        onSelectChapter(chap.id);
                        onSelectPage(chap.startPage);
                        onClose();
                      }}
                      className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:border-emerald-500 transition-all shadow-2xs"
                    >
                      <span className="text-[10px] font-bold font-mono text-emerald-600 dark:text-emerald-400 block uppercase tracking-wider">
                        Pages {chap.startPage}-{chap.endPage}
                      </span>
                      <span className="text-xs font-display font-bold block mt-1 leading-snug">
                        {chap.title}
                      </span>
                      <span className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                        {chap.summary}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : activeTab === 'sommaire' ? (
            /* Sommaire avec blocs modulaires géométriques */
            <div className="space-y-3">
              {BOOK_MODULES.map((mod) => {
                const isExpanded = expandedModules[mod.id];
                const formattedNum = mod.moduleNumber.toString().padStart(2, '0');
                const hasCurrentChapter = mod.chapters.some((c) => c.id === currentChapterId);

                return (
                  <div
                    key={mod.id}
                    className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50/40 dark:bg-slate-900/40 shadow-2xs transition-all"
                  >
                    {/* Entête du module */}
                    <button
                      onClick={() => toggleModule(mod.id)}
                      className="w-full text-left p-3 flex items-start justify-between gap-3 hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs transition-colors ${
                            hasCurrentChapter
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700'
                          }`}
                        >
                          {formattedNum}
                        </div>
                        <div>
                          <p className="text-xs font-bold leading-snug text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {mod.title.replace(/^Module \d+ : /, '')}
                          </p>
                          <p className="text-[10px] text-slate-400 mt-0.5 font-mono">
                            {mod.chapters.length} chapitres • QC collégial
                          </p>
                        </div>
                      </div>

                      <div className="pt-1.5 text-slate-400">
                        {isExpanded ? (
                          <ChevronDown className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5" />
                        )}
                      </div>
                    </button>

                    {/* Liste des chapitres */}
                    {isExpanded && (
                      <div className="p-2 border-t border-slate-200 dark:border-slate-800 space-y-1 bg-white dark:bg-slate-900">
                        {mod.chapters.map((chap) => {
                          const isCurrent = currentChapterId === chap.id;
                          return (
                            <div key={chap.id} className="space-y-0.5">
                              <button
                                onClick={() => {
                                  onSelectChapter(chap.id);
                                  onSelectPage(chap.startPage);
                                  onClose();
                                }}
                                className={`w-full text-left px-2.5 py-2 rounded-lg text-xs transition-all flex items-start justify-between gap-2 ${
                                  isCurrent
                                    ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                                    : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                                }`}
                              >
                                <span className="leading-snug">
                                  Chapitre {chap.chapterNumber} : {chap.title}
                                </span>
                                <span
                                  className={`text-[9px] shrink-0 font-mono px-1.5 py-0.5 rounded ${
                                    isCurrent
                                      ? 'bg-emerald-800 text-emerald-100'
                                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                                  }`}
                                >
                                  p. {chap.startPage}-{chap.endPage}
                                </span>
                              </button>

                              {/* Sections du chapitre */}
                              <div className="pl-3.5 pr-1 py-0.5 space-y-0.5 border-l-2 border-emerald-500/20 ml-2.5">
                                {chap.sections.map((sec) => (
                                  <button
                                    key={sec.id}
                                    onClick={() => {
                                      onSelectChapter(chap.id);
                                      onSelectPage(sec.pageNumber);
                                      onClose();
                                    }}
                                    className={`w-full text-left px-2 py-1 rounded text-[11px] flex items-center justify-between transition-colors ${
                                      currentPage === sec.pageNumber
                                        ? 'text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/40'
                                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                                    }`}
                                  >
                                    <span className="truncate pr-1">{sec.title}</span>
                                    <span className="text-[10px] font-mono opacity-60">p. {sec.pageNumber}</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : activeTab === 'exercices' ? (
            /* Liste des exercices */
            <div className="space-y-3">
              <div className="p-3 bg-emerald-50/50 dark:bg-emerald-950/30 rounded-xl border border-emerald-100 dark:border-emerald-900/50 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                12 séries d'exercices pratiques collégiaux avec démarches détaillées et corrigés pas à pas.
              </div>
              {BOOK_MODULES.map((mod) => (
                <div key={mod.id} className="space-y-1.5">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                    MODULE {mod.moduleNumber.toString().padStart(2, '0')}
                  </div>
                  {mod.chapters.flatMap((c) =>
                    c.exercises.map((ex) => (
                      <button
                        key={ex.id}
                        onClick={() => {
                          onSelectChapter(c.id);
                          onSelectPage(c.startPage);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-emerald-500 transition-colors shadow-2xs"
                      >
                        <div className="flex items-center justify-between text-[11px] font-bold">
                          <span className="text-slate-800 dark:text-slate-200">
                            Exercice {ex.number} : {ex.title}
                          </span>
                          <span
                            className={`text-[9px] uppercase px-1.5 py-0.5 rounded font-mono font-bold ${
                              ex.difficulty === 'avancé'
                                ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
                                : ex.difficulty === 'intermédiaire'
                                ? 'bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                                : 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                            }`}
                          >
                            {ex.difficulty}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                          {ex.statement}
                        </p>
                      </button>
                    ))
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* Grille géométrique des 64 pages */
            <div className="space-y-3">
              <p className="text-xs text-slate-500">
                Accès direct aux 64 pages simulées du manuel complet :
              </p>
              <div className="grid grid-cols-4 gap-1.5">
                {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((pg) => {
                  const isCurrent = currentPage === pg;
                  return (
                    <button
                      key={pg}
                      onClick={() => {
                        onSelectPage(pg);
                        onClose();
                      }}
                      className={`py-2 text-xs font-mono rounded-lg border transition-all ${
                        isCurrent
                          ? 'bg-emerald-600 text-white font-bold border-emerald-600 shadow-xs'
                          : 'border-slate-200 dark:border-slate-800 hover:border-emerald-500 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {pg.toString().padStart(2, '0')}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Pied de sidebar géométrique */}
        <div className="mt-auto p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-2xs">
              QC
            </div>
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                Programme collégial
              </p>
              <p className="text-[11px] text-slate-500">
                Niveau cégep 1re année • 64 pages
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
