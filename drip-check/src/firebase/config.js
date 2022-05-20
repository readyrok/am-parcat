// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHvWQP-FVNf6x843p-2NBIXfCiiATu8c0",
  authDomain: "drip-check.firebaseapp.com",
  projectId: "drip-check",
  storageBucket: "drip-check.appspot.com",
  messagingSenderId: "1070280436225",
  appId: "1:1070280436225:web:9d3d97c3320c3b69262e00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);

const projectFireStore = getFirestore(app);

export { projectStorage, projectFireStore, ref };
