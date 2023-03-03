import Constants from "expo-constants";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId,
//   measurementId: process.env.measurementId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCE_uQpOBYHxOav0xcqnoO0I36OuxxP0xo",
  authDomain: "bankify-app.firebaseapp.com",
  projectId: "bankify-app",
  storageBucket: "bankify-app.appspot.com",
  messagingSenderId: "870267718979",
  appId: "1:870267718979:web:39add062e6b5fcdb51f3f6",
  measurementId: "G-CTZSZ12EL0",
  databaseURL: "https://bankify-app-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

export const auth = getAuth(app);
