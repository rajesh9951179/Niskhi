
// import React, { useEffect } from 'react';
// import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// const firebaseConfig = {
//   apiKey: "AIzaSyDYTtQEKsh6NQN1p4aXr59NihxSJM1Adx0",
//   authDomain: "sign-project-e1d6e.firebaseapp.com",
//   projectId: "sign-project-e1d6e",
//   storageBucket: "sign-project-e1d6e.appspot.com",
//   messagingSenderId: "133668522417",
//   appId: "1:133668522417:web:821810073910f43bf81590",
//   measurementId: "G-TMXZ8H8SS0"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const Signin = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const signInWithGoogle = async () => {
//       try {
//         const provider = new GoogleAuthProvider();
//         await signInWithPopup(auth, provider);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     const unsubscribe = onAuthStateChanged(auth, (person) => {
//         if (person) {
//             signInWithGoogle();
//           navigate('/home');
//         } else {
//           signInWithGoogle();
//         }
//       });

//     return () => unsubscribe();
//   }, [navigate]);

//   return null; // No content is rendered
// };

// export default Signin;
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYTtQEKsh6NQN1p4aXr59NihxSJM1Adx0",
  authDomain: "sign-project-e1d6e.firebaseapp.com",
  projectId: "sign-project-e1d6e",
  storageBucket: "sign-project-e1d6e.appspot.com",
  messagingSenderId: "133668522417",
  appId: "1:133668522417:web:821810073910f43bf81590",
  measurementId: "G-TMXZ8H8SS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };
