import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBbyN6_bScym2Cl5uREBmee0fGoBPmSXf0",
    authDomain: "aces-734e2.firebaseapp.com",
    databaseURL: "https://aces-734e2.firebaseio.com",
    projectId: "aces-734e2",
    storageBucket: "aces-734e2.appspot.com",
    messagingSenderId: "686562727764",
    appId: "1:686562727764:web:21863b093554c04d22dac1",
    measurementId: "G-XQM14JW7S5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;