import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore, collection, doc, addDoc, updateDoc, deleteDoc,
  getDocs, getDoc, setDoc, query, orderBy, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAOrPstjNZkOLkhvXz9_0O4nxcxPr4v-Lo",
  authDomain: "fenixrez-273a3.firebaseapp.com",
  projectId: "fenixrez-273a3",
  storageBucket: "fenixrez-273a3.firebasestorage.app",
  messagingSenderId: "234396013606",
  appId: "1:234396013606:web:766d09fcceb08acca602e7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export {
  collection, doc, addDoc, updateDoc, deleteDoc,
  getDocs, getDoc, setDoc, query, orderBy, serverTimestamp
};


import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

export const auth = getAuth(app);

// Функция анонимного входа
export function ensureAnonymousAuth() {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        signInAnonymously(auth)
          .then((cred) => resolve(cred.user))
          .catch((err) => {
            console.error('Ошибка анонимного входа:', err);
            resolve(null);
          });
      }
    });
  });
}