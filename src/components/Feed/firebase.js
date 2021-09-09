import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyAyf-hatTDsyqmFv9BzvnqsSlrdODNMVx4",
   authDomain: "bazingaa-e3282.firebaseapp.com",
   databaseURL: "https://bazingaa-e3282.firebaseio.com",
   projectId: "bazingaa-e3282",
   storageBucket: "bazingaa-e3282.appspot.com",
   messagingSenderId: "572666104461",
   appId: "1:572666104461:web:17d101b492208d798e30c4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
