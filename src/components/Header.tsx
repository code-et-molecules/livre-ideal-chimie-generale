import React from 'react';
import { Moon, Sun, Coffee, Wrench, FileText, User as UserIcon, LogOut, ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import { ReaderTheme, ViewMode } from '../types';
import { User } from 'firebase/auth';

interface HeaderProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  theme: ReaderTheme;
  onThemeChange: (theme: ReaderTheme) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  onFontSizeChange: (size: 'normal' | 'large' | 'xlarge') => void;
  onOpenTools: () => void;
  onOpenGoogleDocsModal: () => void;
  user: User | null;
  onSignOut: () => void;
  onSignIn: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  theme,
  onThemeChange,
  viewMode,
  onViewModeChange,
  fontSize,
  onFontSizeChange,
  onOpenTools,
  onOpenGoogleDocsModal,
  user,
  onSignOut,
  onSignIn,
}) => {
  const isDark = theme === 'sombre';
  const isSepia = theme === 'sepia';

  return (
    <header
      id="app-header"
      className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors ${
        isDark
          ? 'bg-[#0f172a]/95 border-slate-800 text-slate-100'
          : isSepia
          ? 'bg-[#fbf9f4]/95 border-[#e8e2d4] text-[#2c2419]'
          : 'bg-white/95 border-slate-200/80 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
        {/* Pôle gauche : Identité géométrique équilibrée */}
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-md bg-emerald-600 dark:bg-emerald-500 text-white flex items-center justify-center font-mono font-bold text-xs tracking-wider shadow-xs shrink-0 ring-1 ring-emerald-700/30">
            QC
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] uppercase tracking-[0.22em] font-mono text-slate-500 dark:text-slate-400 font-bold">
                Sciences de la nature
              </span>
              <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold hidden sm:inline">
                Cégep 1re année
              </span>
            </div>
            <h1 className="text-base sm:text-lg font-display font-bold tracking-tight leading-none mt-0.5">
              Livre idéal — <span className="text-emerald-600 dark:text-emerald-400 font-normal">Chimie générale</span>
            </h1>
          </div>
        </div>

        {/* Pôle central : Contrôle de pagination à équilibre géométrique */}
        <div className="hidden md:flex items-center gap-2.5 bg-slate-50 dark:bg-slate-900/90 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 shadow-2xs text-xs">
          <button
            id="header-prev-page-btn"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage <= 1}
            aria-label="Page précédente"
            className="w-6 h-6 rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 disabled:opacity-25 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-1.5 px-1 font-mono text-[11px] text-slate-600 dark:text-slate-300">
            <span className="text-[10px] uppercase tracking-wider text-slate-400">PAGE</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
              {currentPage.toString().padStart(2, '0')}
            </span>
            <span className="text-slate-400">/</span>
            <span className="font-medium text-slate-500">{totalPages}</span>
          </div>

          <button
            id="header-next-page-btn"
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage >= totalPages}
            aria-label="Page suivante"
            className="w-6 h-6 rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 disabled:opacity-25 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Pôle droit : Grappe d'actions harmonieuse */}
        <div className="flex items-center gap-2">
          {/* Bouton Outils de chimie */}
          <button
            id="header-open-tools-btn"
            onClick={onOpenTools}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shadow-2xs"
            title="Outils de chimie (tableau périodique, VSEPR, gaz parfaits)"
          >
            <Compass className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="hidden sm:inline">Outils de chimie</span>
          </button>

          {/* Bouton Google Docs */}
          <button
            id="header-google-docs-btn"
            onClick={onOpenGoogleDocsModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs transition-all"
            title="Exporter ce cours ou ces exercices vers Google Docs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Google Docs</span>
          </button>

          {/* Sélecteur de taille de police géométrique */}
          <div className="hidden sm:flex items-center border rounded-lg overflow-hidden border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs">
            <button
              id="font-size-normal-btn"
              onClick={() => onFontSizeChange('normal')}
              className={`px-2.5 py-1 font-mono font-semibold ${fontSize === 'normal' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400' : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
              title="Taille standard"
            >
              1x
            </button>
            <button
              id="font-size-large-btn"
              onClick={() => onFontSizeChange('large')}
              className={`px-2.5 py-1 font-mono font-bold ${fontSize === 'large' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400' : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
              title="Taille agrandie"
            >
              1.2x
            </button>
            <button
              id="font-size-xlarge-btn"
              onClick={() => onFontSizeChange('xlarge')}
              className={`px-2.5 py-1 font-mono font-bold ${fontSize === 'xlarge' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400' : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
              title="Taille maximale"
            >
              1.5x
            </button>
          </div>

          {/* Triade des thèmes de lecture */}
          <div className="flex items-center border rounded-lg p-0.5 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <button
              id="theme-light-btn"
              onClick={() => onThemeChange('clair')}
              className={`p-1.5 rounded ${theme === 'clair' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400' : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
              title="Thème équilibre clair"
              aria-label="Thème clair"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              id="theme-sepia-btn"
              onClick={() => onThemeChange('sepia')}
              className={`p-1.5 rounded ${theme === 'sepia' ? 'bg-[#eee5d0] text-[#342718]' : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
              title="Thème sépia"
              aria-label="Thème sépia"
            >
              <Coffee className="w-3.5 h-3.5" />
            </button>
            <button
              id="theme-dark-btn"
              onClick={() => onThemeChange('sombre')}
              className={`p-1.5 rounded ${theme === 'sombre' ? 'bg-slate-800 text-emerald-400' : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
              title="Thème sombre"
              aria-label="Thème sombre"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Statut utilisateur */}
          {user ? (
            <div className="flex items-center gap-1.5 pl-2 border-l border-slate-200 dark:border-slate-800 text-xs">
              <span className="hidden xl:inline max-w-[120px] truncate text-slate-600 dark:text-slate-400 font-mono text-[11px]">
                {user.displayName || user.email}
              </span>
              <button
                id="sign-out-btn"
                onClick={onSignOut}
                className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors"
                title="Se déconnecter"
                aria-label="Déconnexion"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              id="sign-in-btn"
              onClick={onSignIn}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-slate-700 dark:text-slate-300 transition-colors"
              title="Connexion Google"
            >
              <UserIcon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="hidden sm:inline">Connexion</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
