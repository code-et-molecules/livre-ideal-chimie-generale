import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  User,
  Auth,
} from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

// Récupération de la configuration Firebase avec priorité aux variables d'environnement Vite (Netlify / Production)
const apiKey =
  (import.meta.env.VITE_FIREBASE_API_KEY as string | undefined)?.trim() ||
  firebaseConfig.apiKey ||
  '';
const authDomain =
  (import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string | undefined)?.trim() ||
  firebaseConfig.authDomain ||
  '';
const projectId =
  (import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined)?.trim() ||
  firebaseConfig.projectId ||
  '';
const storageBucket =
  (import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string | undefined)?.trim() ||
  firebaseConfig.storageBucket ||
  '';
const messagingSenderId =
  (import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string | undefined)?.trim() ||
  firebaseConfig.messagingSenderId ||
  '';
const appId =
  (import.meta.env.VITE_FIREBASE_APP_ID as string | undefined)?.trim() ||
  firebaseConfig.appId ||
  '';

let app: FirebaseApp | null = null;
let authInstance: Auth | null = null;

if (apiKey) {
  try {
    app = !getApps().length
      ? initializeApp({
          apiKey,
          authDomain,
          projectId,
          storageBucket,
          messagingSenderId,
          appId,
        })
      : getApps()[0];
    authInstance = getAuth(app);
  } catch (err) {
    console.warn('Initialisation de Firebase Auth différée :', err);
  }
}

export const auth = authInstance;

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/documents');
provider.addScope('https://www.googleapis.com/auth/drive.file');

// In-memory token cache (never stored in localStorage or sessionStorage)
let cachedAccessToken: string | null = null;
let isSigningIn = false;

export const initAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  if (!authInstance) {
    if (onAuthFailure) onAuthFailure();
    return () => {};
  }

  return onAuthStateChanged(authInstance, async (user: User | null) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        cachedAccessToken = null;
        if (onAuthFailure) onAuthFailure();
      }
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

export const googleSignIn = async (): Promise<{ user: User; accessToken: string } | null> => {
  if (!authInstance) {
    throw new Error(
      "Configuration Firebase manquante. Pour déployer sur Netlify, ajoutez la variable d'environnement VITE_FIREBASE_API_KEY dans votre panneau Netlify (Site configuration > Environment variables)."
    );
  }

  try {
    isSigningIn = true;
    const result = await signInWithPopup(authInstance, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error("Impossible d'obtenir le jeton d'accès de Firebase Auth.");
    }

    cachedAccessToken = credential.accessToken;
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error) {
    console.error('Erreur lors de la connexion Google :', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

export const getAccessToken = async (): Promise<string | null> => {
  return cachedAccessToken;
};

export const logout = async (): Promise<void> => {
  if (authInstance) {
    await signOut(authInstance);
  }
  cachedAccessToken = null;
};
