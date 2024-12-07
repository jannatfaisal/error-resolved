import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword ,signInWithEmailAndPassword , onAuthStateChanged , sendEmailVerification, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore ,collection, addDoc, getDocs , doc} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDh0UmLoE2-RN0lR_p8-RylmPU8hFvWfVc",
    authDomain: "fir-auth-5a575.firebaseapp.com",
    projectId: "fir-auth-5a575",
    storageBucket: "fir-auth-5a575.firebasestorage.app",
    messagingSenderId: "38857858861",
    appId: "1:38857858861:web:d7af368abf944a65563da4",
    measurementId: "G-RYBDX6PZHP"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {auth ,createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , sendEmailVerification, getFirestore , signOut , collection, addDoc , db, getDocs , doc} 