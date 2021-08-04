import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDvNLaa04KiTfAbP739QaJ6gdaWgcjdSmU",
    authDomain: "disney-clone-tailwindcss.firebaseapp.com",
    projectId: "disney-clone-tailwindcss",
    storageBucket: "disney-clone-tailwindcss.appspot.com",
    messagingSenderId: "184841261100",
    appId: "1:184841261100:web:7a88f95d47635627fd0189"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export { db };
