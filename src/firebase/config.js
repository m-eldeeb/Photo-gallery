import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_PUPBLIC_KEY,
  authDomain: "photo-upload-d2673.firebaseapp.com",
  projectId: "photo-upload-d2673",
  storageBucket: "photo-upload-d2673.appspot.com",
  messagingSenderId: "87820090007",
  appId: "1:87820090007:web:ef8ca6135ca1a3133a07d2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore
const projectStorage = getStorage(firebaseApp);

// the storage service
const projectFireStore = getFirestore(firebaseApp);

export { projectStorage, projectFireStore };
