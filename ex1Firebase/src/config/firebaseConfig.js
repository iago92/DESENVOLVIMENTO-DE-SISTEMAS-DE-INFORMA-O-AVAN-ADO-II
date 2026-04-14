import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDUximjL284hCb2lFZfx23Nxr_m0-1UspI",
  authDomain: "unipamappiago9292.firebaseapp.com",
  projectId: "unipamappiago9292",
  storageBucket: "unipamappiago9292.firebasestorage.app",
  messagingSenderId: "167472009969",
  appId: "1:167472009969:web:558d1dc4c3916a83908f50",
  measurementId: "G-7HG287DPTE"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);