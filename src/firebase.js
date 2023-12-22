 
import { initializeApp } from "firebase/app";


import { getAuth} from "firebase/auth";
import{getFirestore} from 'firebase/firestore';
import{getStorage} from 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcuDXDE3D1frLT173cUTzPygqLc67CCek",
    authDomain: "ais-website-1879e.firebaseapp.com",
    projectId: "ais-website-1879e",
    storageBucket: "ais-website-1879e.appspot.com",
    messagingSenderId: "498613432023",
    appId: "1:498613432023:web:9737c7b81d3dcb45398a92",
    measurementId: "G-2K87HN4GF7"
  };

  export const app = initializeApp(firebaseConfig);
  
 
  export const auth = getAuth(app);
  export const db = getFirestore(app)
 export const storage = getStorage(app)


 