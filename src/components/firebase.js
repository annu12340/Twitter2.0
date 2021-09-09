import firebase from "firebase";

const firebaseConfig = {};

console.log("firebaseConfig", firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
