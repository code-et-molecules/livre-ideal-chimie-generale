/**
 * Service d'exportation vers Google Docs via l'API Google Docs v1
 * Respecte scrupuleusement la typographie française pour les titres et sous-titres.
 */

import { Chapter, BookModule, ExerciseItem } from '../types';

interface CreateDocResponse {
  documentId: string;
  title: string;
}

export async function exportChapterToGoogleDocs(
  accessToken: string,
  chapter: Chapter,
  moduleTitle: string
): Promise<{ docUrl: string; title: string }> {
  const docTitle = `${chapter.title} — Chimie générale collégiale`;

  // 1. Création du document vierge avec le titre
  const createRes = await fetch('https://docs.googleapis.com/v1/documents', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: docTitle,
    }),
  });

  if (!createRes.ok) {
    const errorBody = await createRes.text();
    throw new Error(`Erreur lors de la création du document Google Docs (${createRes.status}) : ${errorBody}`);
  }

  const docData: CreateDocResponse = await createRes.json();
  const documentId = docData.documentId;

  // 2. Préparation du texte formaté en respectant la typographie française
  let content = `${docTitle}\n`;
  content += `Programme des sciences de la nature (Cégep)\n`;
  content += `${moduleTitle}\n`;
  content += `Pagination de référence dans l'ouvrage : pages ${chapter.startPage} à ${chapter.endPage}\n\n`;
  content += `RÉSUMÉ DU CHAPITRE\n${chapter.summary}\n\n`;

  content += `--------------------------------------------------\n`;
  content += `CONTENU DU COURS\n`;
  content += `--------------------------------------------------\n\n`;

  for (const section of chapter.sections) {
    content += `${section.title}\n`;
    content += `(Page ${section.pageNumber})\n\n`;

    if (section.learningObjectives && section.learningObjectives.length > 0) {
      content += `Objectifs d'apprentissage collégiaux :\n`;
      for (const obj of section.learningObjectives) {
        content += ` • ${obj}\n`;
      }
      content += `\n`;
    }

    for (const paragraph of section.bodyMarkdown) {
      content += `${paragraph}\n\n`;
    }

    if (section.keyFormulas && section.keyFormulas.length > 0) {
      content += `Formules et relations mathématiques fondamentales :\n`;
      for (const f of section.keyFormulas) {
        content += ` • [ ${f.formula} ] : ${f.explanation}\n`;
      }
      content += `\n`;
    }

    if (section.collegeExamTip) {
      content += `Conseil pour les examens collégiaux :\n${section.collegeExamTip}\n\n`;
    }

    if (section.commonMistakes) {
      content += `Erreurs fréquentes à éviter :\n${section.commonMistakes}\n\n`;
    }

    content += `\n`;
  }

  if (chapter.exercises && chapter.exercises.length > 0) {
    content += `--------------------------------------------------\n`;
    content += `EXERCICES PRATIQUES ET CORRIGÉS DÉTAILLÉS\n`;
    content += `--------------------------------------------------\n\n`;

    for (const ex of chapter.exercises) {
      content += `Exercice ${ex.number} : ${ex.title} (${ex.difficulty.toUpperCase()})\n`;
      content += `Énoncé :\n${ex.statement}\n\n`;

      if (ex.hints && ex.hints.length > 0) {
        content += `Pistes de réflexion :\n`;
        for (const hint of ex.hints) {
          content += ` - ${hint}\n`;
        }
        content += `\n`;
      }

      content += `Corrigé détaillé pas à pas :\n`;
      for (let i = 0; i < ex.solutionSteps.length; i++) {
        content += `  Étape ${i + 1} : ${ex.solutionSteps[i]}\n`;
      }
      content += `\nRéponse finale : ${ex.finalAnswer}\n\n`;
      content += `--------------------------------------------------\n\n`;
    }
  }

  // 3. Insertion du contenu textuel dans le document
  const updateRes = await fetch(`https://docs.googleapis.com/v1/documents/${documentId}:batchUpdate`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      requests: [
        {
          insertText: {
            location: {
              index: 1,
            },
            text: content,
          },
        },
      ],
    }),
  });

  if (!updateRes.ok) {
    const errorBody = await updateRes.text();
    console.warn("Échec d'insertion du texte complet dans Google Docs :", errorBody);
  }

  return {
    docUrl: `https://docs.google.com/document/d/${documentId}/edit`,
    title: docTitle,
  };
}

export async function exportExercisesSheetToGoogleDocs(
  accessToken: string,
  exercises: ExerciseItem[],
  sheetTitle: string
): Promise<{ docUrl: string; title: string }> {
  const docTitle = `${sheetTitle} — Cahier d'exercices et corrigés de chimie générale`;

  const createRes = await fetch('https://docs.googleapis.com/v1/documents', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: docTitle,
    }),
  });

  if (!createRes.ok) {
    throw new Error(`Erreur lors de la création de la feuille d'exercices (${createRes.status})`);
  }

  const docData: CreateDocResponse = await createRes.json();
  const documentId = docData.documentId;

  let content = `${docTitle}\n`;
  content += `Niveau collégial (cégep 1re année - Sciences de la nature)\n`;
  content += `Total d'exercices : ${exercises.length}\n\n`;

  for (const ex of exercises) {
    content += `==================================================\n`;
    content += `Exercice ${ex.number} : ${ex.title} [Niveau : ${ex.difficulty}]\n`;
    content += `==================================================\n`;
    content += `Énoncé :\n${ex.statement}\n\n`;

    content += `Démarche et solution étape par étape :\n`;
    for (let i = 0; i < ex.solutionSteps.length; i++) {
      content += `  [${i + 1}] ${ex.solutionSteps[i]}\n`;
    }
    content += `\nRésultat exact : ${ex.finalAnswer}\n\n\n`;
  }

  await fetch(`https://docs.googleapis.com/v1/documents/${documentId}:batchUpdate`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      requests: [
        {
          insertText: {
            location: {
              index: 1,
            },
            text: content,
          },
        },
      ],
    }),
  });

  return {
    docUrl: `https://docs.google.com/document/d/${documentId}/edit`,
    title: docTitle,
  };
}
