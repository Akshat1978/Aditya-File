// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAhBhv1_GYBiKd4x6mjSBpTkFPmnS0XPKM",
  authDomain: "loginandregisterauth-8724a.firebaseapp.com",
  projectId: "loginandregisterauth-8724a",
  storageBucket: "loginandregisterauth-8724a.appspot.com",
  messagingSenderId: "361422395880",
  appId: "1:361422395880:web:e3d91e28267bcf23286c5d",
  measurementId: "G-2WH812GHD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
export {auth,app}