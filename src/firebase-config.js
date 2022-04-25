import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWcVH5se9_lYaTyQV6WAB3tYQK_EZGRK4",
  authDomain: "creativeproject-33a85.firebaseapp.com",
  projectId: "creativeproject-33a85",
  storageBucket: "creativeproject-33a85.appspot.com",
  messagingSenderId: "752966718396",
  appId: "1:752966718396:web:904283bbd5f192084bd1b9",
  measurementId: "G-69VBSKHNM1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


