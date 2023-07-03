import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6-wR8GgTE_vRrwvfPW__YR0Y1-8wxu_k",
  authDomain: "react-netflix-clone-a737d.firebaseapp.com",
  projectId: "react-netflix-clone-a737d",
  storageBucket: "react-netflix-clone-a737d.appspot.com",
  messagingSenderId: "346376200796",
  appId: "1:346376200796:web:3950dd4975b1a29e62bc99",
  measurementId: "G-P5YVG3V83V"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
