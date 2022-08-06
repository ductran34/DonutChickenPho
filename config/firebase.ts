// Import the functions you need from the SDKs you need
import { getApps, getApp,initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDHvfy9l7JJGeRNXtZdDgmkptnHoT0ZFw",
  authDomain: "donutchickenpho-1417d.firebaseapp.com",
  projectId: "donutchickenpho-1417d",
  storageBucket: "donutchickenpho-1417d.appspot.com",
  messagingSenderId: "84024871199",
  appId: "1:84024871199:web:0ec4e71d04c7dc2256c82a"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export{db, auth, provider}