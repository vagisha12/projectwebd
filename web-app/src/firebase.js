import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
//config from my own laptop, this need replacement when running
const firebaseConfig = {
  apiKey: "AIzaSyDWe85-toCeNbvoHjXw0ctDedQ2UqxuLe0",
  authDomain: "final-e4e77.firebaseapp.com",
  projectId: "final-e4e77",
  storageBucket: "final-e4e77.appspot.com",
  messagingSenderId: "762586007890",
  appId: "1:762586007890:web:447f08812db14860b9d28b",
  measurementId: "G-12HR77K2C8"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

//handling emulator case
auth.useEmulator('http://localhost:9099');
if (window.location.hostname === 'localhost') {
  db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
