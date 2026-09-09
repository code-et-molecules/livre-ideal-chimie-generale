import React, { useState } from 'react';
import { X, FileText, CheckCircle2, AlertCircle, ExternalLink, Loader2, Sparkles, BookOpen, Download } from 'lucide-react';
import { Chapter, BookModule } from '../types';
import { User } from 'firebase/auth';
import { exportChapterToGoogleDocs, exportExercisesSheetToGoogleDocs } from '../services/googleDocsService';
import { getAllExercises } from '../data/textbookData';

interface GoogleDocsExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentChapter: Chapter;
  currentModule: BookModule;
  user: User | null;
  accessToken: string | null;
  onSignIn: () => Promise<void>;
  isDark: boolean;
}

export const GoogleDocsExportModal: React.FC<GoogleDocsExportModalProps> = ({
  isOpen,
  onClose,
  currentChapter,
  currentModule,
  user,
  accessToken,
  onSignIn,
  isDark,
}) => {
  const [exportScope, setExportScope] = useState<'chapter' | 'exercises'>('chapter');
  const [isExporting, setIsExporting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exportResult, setExportResult] = useState<{ docUrl: string; title: string } | null>(null);

  if (!isOpen) return null;

  const handleExport = async () => {
    setError(null);
    setExportResult(null);

    if (!accessToken) {
      setError('Veuillez d\'abord vous connecter avec votre compte Google pour autoriser la création du document.');
      return;
    }

    setIsExporting(true);
    try {
      if (exportScope === 'chapter') {
        const result = await exportChapterToGoogleDocs(
          accessToken,
          currentChapter,
          currentModule.title
        );
        setExportResult(result);
      } else {
        const allEx = getAllExercises().map((item) => item.exercise);
        const result = await exportExercisesSheetToGoogleDocs(
          accessToken,
          allEx,
          "Chimie générale (1re année de cégep)"
        );
        setExportResult(result);
      }
    } catch (err: any) {
      console.error("Échec lors de l'exportation vers Google Docs :", err);
      setError(
        err.message ||
          'Une erreur est survenue lors de la communication avec l\'API Google Docs. Veuillez vérifier vos autorisations.'
      );
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div
      id="export-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs"
    >
      <div
        id="export-modal-container"
        className={`w-full max-w-lg rounded-2xl shadow-2xl border overflow-hidden transition-all ${
          isDark
            ? 'bg-[#0f172a] border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* En-tête géométrique du dialogue */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-2xs font-mono font-bold text-xs">
              <FileText className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg leading-tight">
                Exporter vers Google Docs
              </h3>
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                Génération dans Google Drive personnel
              </p>
            </div>
          </div>
          <button
            id="close-export-modal-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Corps du dialogue */}
        <div className="p-6 space-y-5 text-xs sm:text-sm">
          {/* État de connexion utilisateur */}
          {!user ? (
            <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 space-y-3">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-mono font-bold text-amber-900 dark:text-amber-200 text-xs uppercase tracking-wider">
                    Connexion requise
                  </div>
                  <p className="text-amber-800 dark:text-amber-300 leading-relaxed text-xs font-sans">
                    Pour créer directement le document dans votre compte Google Docs et Google Drive, vous devez autoriser l'application.
                  </p>
                </div>
              </div>
              <button
                id="modal-google-signin-btn"
                onClick={onSignIn}
                className="w-full py-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-2xs flex items-center justify-center gap-2 transition-colors font-mono"
              >
                <span>Se connecter avec Google</span>
              </button>
            </div>
          ) : (
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-slate-500 font-mono">Compte actif :</span>
                <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">
                  {user.displayName || user.email}
                </span>
              </div>
            </div>
          )}

          {/* Choix du contenu à exporter */}
          <div className="space-y-2">
            <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
              Contenu à inclure dans le document :
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                id="scope-chapter-btn"
                type="button"
                onClick={() => setExportScope('chapter')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  exportScope === 'chapter'
                    ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-medium ring-1 ring-emerald-500'
                    : 'border-slate-200 dark:border-slate-800 hover:border-emerald-500 bg-white dark:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-display font-bold text-xs">Chapitre actuel</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">
                  {currentChapter.title} (cours, formules, conseils et corrigés du chapitre).
                </p>
              </button>

              <button
                id="scope-exercises-btn"
                type="button"
                onClick={() => setExportScope('exercises')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  exportScope === 'exercises'
                    ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-medium ring-1 ring-emerald-500'
                    : 'border-slate-200 dark:border-slate-800 hover:border-emerald-500 bg-white dark:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-display font-bold text-xs">Cahier d'exercices complet</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Les 12 problèmes collégiaux du manuel avec toutes les étapes de solution.
                </p>
              </button>
            </div>
          </div>

          {/* Déclaration claire d'intention */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-1.5 text-slate-600 dark:text-slate-400">
            <div className="font-mono font-bold text-[10px] uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Paramètres du document exporté :
            </div>
            <ul className="space-y-1 pl-4 list-disc text-[11px]">
              <li>
                <strong>Titre : </strong>
                {exportScope === 'chapter'
                  ? `${currentChapter.title} — Chimie générale collégiale`
                  : `Cahier d'exercices et corrigés de chimie générale — Cégep 1re année`}
              </li>
              <li>
                <strong>Formatage : </strong>
                Typographie française rigoureuse (sans Title Case), formules chimiques, constantes et démarches pas à pas.
              </li>
              <li>
                <strong>Emplacement : </strong>
                Racine de votre Google Drive personnel (fichier Google Docs standard).
              </li>
            </ul>
          </div>

          {/* Affichage d'erreur éventuelle */}
          {error && (
            <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
              <span>{error}</span>
            </div>
          )}

          {/* Résultat de succès */}
          {exportResult && (
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-200 font-bold text-xs font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Document Google Docs généré avec succès !</span>
              </div>
              <p className="text-xs text-emerald-900 dark:text-emerald-100 font-medium">
                « {exportResult.title} » a été créé dans votre Google Drive.
              </p>
              <a
                id="open-google-docs-link"
                href={exportResult.docUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-2xs transition-colors font-mono"
              >
                <span>Ouvrir dans Google Docs</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Pied du dialogue avec bouton de confirmation */}
        <div className="px-6 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 flex items-center justify-end gap-2.5">
          <button
            id="cancel-export-btn"
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Fermer
          </button>
          <button
            id="confirm-export-google-docs-btn"
            onClick={handleExport}
            disabled={!accessToken || isExporting}
            className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-2xs disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 transition-colors font-mono"
          >
            {isExporting ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Création en cours...</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Confirmer et exporter vers Google Docs</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
