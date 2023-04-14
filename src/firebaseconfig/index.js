import { initializeApp } from "firebase/app";
import { getDatabase } from "@firebase/database";
// import { getStorage } from "firebase/storage";

function StartFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyDVLrLI6LeSiorTd67fXSYHDkHvu82sMFc",
    authDomain: "new1-5d891.firebaseapp.com",
    databaseURL: "https://new1-5d891-default-rtdb.firebaseio.com",
    projectId: "new1-5d891",
    storageBucket: "new1-5d891.appspot.com",
    messagingSenderId: "863776478199",
    appId: "1:863776478199:web:c10d13341fe3605bdc94f2",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return getDatabase(app);
}

export default StartFirebase;
