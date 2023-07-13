// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS94zSnApq7F_ymgjNsCX7T8g03QjZHaA",
  authDomain: "ruet-guest-room.firebaseapp.com",
  projectId: "ruet-guest-room",
  storageBucket: "ruet-guest-room.appspot.com",
  messagingSenderId: "964900693867",
  appId: "1:964900693867:web:254378b294b73b15824e2e",
  measurementId: "G-NG1RLGNDZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app