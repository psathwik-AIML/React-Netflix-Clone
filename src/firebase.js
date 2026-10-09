import { toast } from "react-toastify";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
//  web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "netflix-e7992.firebaseapp.com",
  projectId: "netflix-e7992",
  storageBucket: "netflix-e7992.firebasestorage.app",
  messagingSenderId: "860924419030",
  appId: "1:860924419030:web:6cc76c83657b58903ee277",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// signup
const signup = async (username, email, password) => {
  try {
    const req = await createUserWithEmailAndPassword(auth, email, password);
    await addDoc(collection(db, "all-users"), {
      userId: req.user.uid,
      email,
      auth: "local",
      username,
    });
    toast.success("User Created");
  } catch (err) {
    let error = err.code.split("/")[1].replace("-", " ");
    toast.error(error);
  }
};
// login
const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login Successful");
  } catch (err) {
    let error = err.code.split("/")[1].replace("-", " ");
    toast.error(error);
    throw err;
  }
};
// log out
const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Logged out Successfully");
  } catch (err) {
    let error = err.code.split("/")[1].replace("-", " ");
    toast.error(error);
  }
};
export { signup, login, logout, auth, db };
