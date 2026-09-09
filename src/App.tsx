import React, { useState, useEffect, useCallback } from 'react';
import { User } from 'firebase/auth';
import { ReaderTheme, ViewMode } from './types';
import { BOOK_MODULES, TOTAL_PAGES, findLocationByPage } from './data/textbookData';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { EbookReader } from './components/EbookReader';
import { InteractiveToolsModal } from './components/InteractiveToolsModal';
import { GoogleDocsExportModal } from './components/GoogleDocsExportModal';
import { initAuth, googleSignIn, logout } from './services/firebaseAuth';
import { Menu, BookMarked } from 'lucide-react';

export default function App() {
  // Navigation et pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentChapterId, setCurrentChapterId] = useState<string>(BOOK_MODULES[0].chapters[0].id);

  // Préférences de lecture
  const [theme, setTheme] = useState<ReaderTheme>('clair');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [viewMode, setViewMode] = useState<ViewMode>('page');

  // Signets enregistrés
  const [bookmarkedPages, setBookmarkedPages] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('chimie_ebook_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Gestion des modales et barres latérales
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isToolsOpen, setIsToolsOpen] = useState<boolean>(false);
  const [isGoogleDocsOpen, setIsGoogleDocsOpen] = useState<boolean>(false);

  // État utilisateur et authentification Google / Firebase
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // Initialisation de Firebase Auth
  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, token) => {
        setUser(currentUser);
        setAccessToken(token);
      },
      () => {
        setUser(null);
        setAccessToken(null);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      const res = await googleSignIn();
      if (res) {
        setUser(res.user);
        setAccessToken(res.accessToken);
      }
    } catch (err) {
      console.error('Erreur lors de la connexion Google :', err);
    }
  };

  const handleSignOut = async () => {
    try {
      await logout();
      setUser(null);
      setAccessToken(null);
    } catch (err) {
      console.error('Erreur lors de la déconnexion :', err);
    }
  };

  // Synchronisation de la page actuelle avec le chapitre et le module
  const currentLocation = findLocationByPage(currentPage) || {
    bookModule: BOOK_MODULES[0],
    chapter: BOOK_MODULES[0].chapters[0],
    section: BOOK_MODULES[0].chapters[0].sections[0],
  };

  const handlePageChange = useCallback((newPage: number) => {
    if (newPage >= 1 && newPage <= TOTAL_PAGES) {
      setCurrentPage(newPage);
      const loc = findLocationByPage(newPage);
      if (loc) {
        setCurrentChapterId(loc.chapter.id);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleSelectChapter = (chapterId: string) => {
    setCurrentChapterId(chapterId);
    for (const mod of BOOK_MODULES) {
      const found = mod.chapters.find((c) => c.id === chapterId);
      if (found) {
        setCurrentPage(found.startPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      }
    }
  };

  // Gestion des signets
  const toggleBookmark = () => {
    setBookmarkedPages((prev) => {
      let updated: number[];
      if (prev.includes(currentPage)) {
        updated = prev.filter((p) => p !== currentPage);
      } else {
        updated = [...prev, currentPage];
      }
      try {
        localStorage.setItem('chimie_ebook_bookmarks', JSON.stringify(updated));
      } catch (e) {
        console.warn('Impossible de sauvegarder le signet dans localStorage :', e);
      }
      return updated;
    });
  };

  // Raccourcis clavier (flèches gauche et droite pour tourner les pages)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Éviter de déclencher si l'utilisateur est en train de taper dans un champ
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }

      if (e.key === 'ArrowLeft') {
        handlePageChange(currentPage - 1);
      } else if (e.key === 'ArrowRight') {
        handlePageChange(currentPage + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, handlePageChange]);

  const isDark = theme === 'sombre';
  const isSepia = theme === 'sepia';

  const themeClasses = isDark
    ? 'bg-[#0b0f17] text-slate-100 dark'
    : isSepia
    ? 'bg-[#fbf9f4] text-[#2c2419]'
    : 'bg-[#f8fafc] text-slate-900';

  return (
    <div id="ebook-app-root" className={`min-h-screen flex flex-col font-sans transition-colors ${themeClasses}`}>
      {/* En-tête principal */}
      <Header
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        onPageChange={handlePageChange}
        theme={theme}
        onThemeChange={setTheme}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        fontSize={fontSize}
        onFontSizeChange={setFontSize}
        onOpenTools={() => setIsToolsOpen(true)}
        onOpenGoogleDocsModal={() => setIsGoogleDocsOpen(true)}
        user={user}
        onSignOut={handleSignOut}
        onSignIn={handleSignIn}
      />

      {/* Bouton mobile pour ouvrir le sommaire */}
      <div className="lg:hidden sticky top-14 z-30 px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs flex items-center justify-between">
        <button
          id="mobile-sidebar-toggle-btn"
          onClick={() => setIsSidebarOpen(true)}
          className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-2xs"
        >
          <Menu className="w-4 h-4" />
          <span>Sommaire & Chapitres</span>
        </button>

        <span className="text-xs font-mono font-semibold text-slate-500">
          Page {currentPage} / {TOTAL_PAGES}
        </span>
      </div>

      {/* Corps principal : Barre latérale + Lecteur de contenu */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Barre latérale (Sommaire, Exercices, 64 pages) */}
        <Sidebar
          currentChapterId={currentChapterId}
          currentPage={currentPage}
          onSelectChapter={handleSelectChapter}
          onSelectPage={handlePageChange}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          isDark={isDark}
        />

        {/* Espace principal de lecture */}
        <main
          id="main-reading-area"
          className="flex-1 lg:pl-80 flex flex-col min-w-0 bg-[#f8fafc] dark:bg-[#0b0f17] relative bg-geometric-grid"
        >
          <EbookReader
            currentModule={currentLocation.bookModule}
            currentChapter={currentLocation.chapter}
            currentSection={currentLocation.section}
            currentPage={currentPage}
            totalPages={TOTAL_PAGES}
            onPageChange={handlePageChange}
            theme={theme}
            fontSize={fontSize}
            onExportCurrentChapter={() => setIsGoogleDocsOpen(true)}
            isBookmarked={bookmarkedPages.includes(currentPage)}
            onToggleBookmark={toggleBookmark}
          />

          {/* Pied de page du lecteur */}
          <footer className="mt-auto border-t border-slate-200 dark:border-slate-800/80 py-8 px-6 text-center text-xs text-slate-500 space-y-2 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xs">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-slate-200 dark:bg-slate-800"></span>
              <p className="font-display text-sm text-slate-800 dark:text-slate-200 font-bold tracking-tight">
                Livre idéal — <span className="text-emerald-600 dark:text-emerald-400">Chimie générale</span>
              </p>
              <span className="h-px w-8 bg-slate-200 dark:bg-slate-800"></span>
            </div>
            <p className="text-[11px] font-mono tracking-wide">
              Sciences de la nature • Niveau collégial québécois (cégep 1re année) • [64 pages intégrales]
            </p>
          </footer>
        </main>
      </div>

      {/* Modal des outils interactifs de chimie */}
      <InteractiveToolsModal
        isOpen={isToolsOpen}
        onClose={() => setIsToolsOpen(false)}
        isDark={isDark}
      />

      {/* Modal d'exportation vers Google Docs */}
      <GoogleDocsExportModal
        isOpen={isGoogleDocsOpen}
        onClose={() => setIsGoogleDocsOpen(false)}
        currentChapter={currentLocation.chapter}
        currentModule={currentLocation.bookModule}
        user={user}
        accessToken={accessToken}
        onSignIn={handleSignIn}
        isDark={isDark}
      />
    </div>
  );
}
