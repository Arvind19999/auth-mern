// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernauth-9d652.firebaseapp.com",
  projectId: "mernauth-9d652",
  storageBucket: "mernauth-9d652.appspot.com",
  messagingSenderId: "172789244859",
  appId: "1:172789244859:web:aea6b71cbc6d81ddc59a9e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);