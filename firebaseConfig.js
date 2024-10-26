import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARb5VZlqxcPJep7kPhSUr790-Zi7SX7J4",
  authDomain: "react-native-expo-996fb.firebaseapp.com",
  projectId: "react-native-expo-996fb",
  storageBucket: "react-native-expo-996fb.appspot.com",
  messagingSenderId: "885947122526",
  appId: "1:885947122526:web:2e1ff5ccb2deb53b14c5cf",
  measurementId: "G-EV34H6G7ZX"
};

// Initialize Firebase
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Initialize Firebase Authentication and export it
const auth = getAuth(app);
export { auth };
