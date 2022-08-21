import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdv6Rn5uTU_go1MMcut2GhqAZZoxTGaLY",
  authDomain: "netflix-clone-3688e.firebaseapp.com",
  projectId: "netflix-clone-3688e",
  storageBucket: "netflix-clone-3688e.appspot.com",
  messagingSenderId: "291436049155",
  appId: "1:291436049155:web:7afcd36e620386dceeaf36",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(firebaseApp);

export { auth };
export default db;
