// Importa funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  serverTimestamp, 
  onSnapshot, 
  query, 
  orderBy, 
  updateDoc, 
  doc 
} from "firebase/firestore";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC7RtPc_Z-1oVd3ZtNrGAE7apOTFa7Eu-E",
  authDomain: "vue-firebase-incidencias.firebaseapp.com",
  projectId: "vue-firebase-incidencias",
  storageBucket: "vue-firebase-incidencias.appspot.com",
  messagingSenderId: "20105050571",
  appId: "1:20105050571:web:15cb1fea7fef0d645c5e4e"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// Exporta db y las funciones usadas en los componentes
export { 
  db, 
  collection, 
  addDoc, 
  serverTimestamp, 
  onSnapshot, 
  query, 
  orderBy, 
  updateDoc, 
  doc 
};
