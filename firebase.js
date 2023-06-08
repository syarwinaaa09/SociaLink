import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyC27XryRFGIsYz76C0BzNvKbdwElK9QwvQ",
    authDomain: "socialink-fd822.firebaseapp.com",
    projectId: "socialink-fd822",
    storageBucket: "socialink-fd822.appspot.com",
    messagingSenderId: "287454690399",
    appId: "1:287454690399:web:fc98c0c7aa2a0a498c6fea"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = app.firestore();
  const storage = firebase.storage();

export { db, storage };