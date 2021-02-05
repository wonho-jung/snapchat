import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB7glpFKBsLWU6lfdqlLC2xW2SKt-hLwDU",
  authDomain: "snapchat-clone-81286.firebaseapp.com",
  projectId: "snapchat-clone-81286",
  storageBucket: "snapchat-clone-81286.appspot.com",
  messagingSenderId: "328026015085",
  appId: "1:328026015085:web:4bd0f00caac19aeeb34664",
  measurementId: "G-PSF31MNXWV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
