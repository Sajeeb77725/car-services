// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA8kQX09S0IIgiZWIRRB3dS4i0UTe2FDY",
  authDomain: "car-services-2826b.firebaseapp.com",
  projectId: "car-services-2826b",
  storageBucket: "car-services-2826b.appspot.com",
  messagingSenderId: "748160893236",
  appId: "1:748160893236:web:68c146b1d3382e57b22561",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
