import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDwLkwOQ-J2DBpjtzmrX3lasGgEPRSDTjA",
  authDomain: "video-ab4f2.firebaseapp.com",
  projectId: "video-ab4f2",
  storageBucket: "video-ab4f2.appspot.com",
  messagingSenderId: "1092678531469",
  appId: "1:1092678531469:web:13d2f9149229e6e7ad65c4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider();
// export default app()
