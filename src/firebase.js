import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATWP7aY-fKYAuBl5bAGjcUxxG91ChUBk0",
  authDomain: "imessage-clone-d880d.firebaseapp.com",
  databaseURL: "https://imessage-clone-d880d.firebaseio.com",
  projectId: "imessage-clone-d880d",
  storageBucket: "imessage-clone-d880d.appspot.com",
  messagingSenderId: "933594001875",
  appId: "1:933594001875:web:b55fd0f2f074ffef447f26",
  measurementId: "G-C6620C3GMR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()

export default db;
