import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Firebase yapılandırma bilgileri
const firebaseConfig = {
  apiKey: "AIzaSyBudooiK8bC7zHAlTbwVXbG7NgqYza9Irs",
  authDomain: "ottomania-cafe.firebaseapp.com",
  projectId: "ottomania-cafe",
  storageBucket: "ottomania-cafe.firebasestorage.app",
  messagingSenderId: "807203694506",
  appId: "1:807203694506:web:975fc3481837263145add3",
  measurementId: "G-G4640JSLEH"
};

// Firebase başlatma
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
