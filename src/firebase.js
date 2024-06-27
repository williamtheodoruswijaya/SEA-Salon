import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  // Your web app's Firebase configuration (API key, auth domain, database URL, project ID, storage bucket, messaging sender ID, app ID)
  apiKey: "AIzaSyCeVbtxc8y2rZJ39I4RhQyrbUmUnUHCiMk",
  authDomain: "sea-salon-36eda.firebaseapp.com",
  projectId: "sea-salon-36eda",
  storageBucket: "sea-salon-36eda.appspot.com",
  messagingSenderId: "819479183936",
  appId: "1:819479183936:web:72489a8bfe5e2c594755a5",
  measurementId: "G-74H205ZF1Y",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, collection, addDoc };
