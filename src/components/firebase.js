import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDYTtQEKsh6NQN1p4aXr59NihxSJM1Adx0",
  authDomain: "sign-project-e1d6e.firebaseapp.com",
  projectId: "sign-project-e1d6e",
  storageBucket: "sign-project-e1d6e.appspot.com",
  messagingSenderId: "133668522417",
  appId: "1:133668522417:web:821810073910f43bf81590",
  measurementId: "G-TMXZ8H8SS0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };