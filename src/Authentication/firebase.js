import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

import { useToast } from '@chakra-ui/react'



// const firebaseConfig = {
//   apiKey: "AIzaSyDYW6YohC_KfdujjORj8Y9kwuZqjONr4qM",
//   authDomain: "shop-auth-f2246.firebaseapp.com",
//   projectId: "shop-auth-f2246",
//   storageBucket: "shop-auth-f2246.appspot.com",
//   messagingSenderId: "928197945631",
//   appId: "1:928197945631:web:5bd51bf6cffed28d24682a"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDCgM9l5u4zrU7A1TUW3-1YpwnI5I1WNp4",
  authDomain: "shop-f-286f7.firebaseapp.com",
  projectId: "shop-f-286f7",
  storageBucket: "shop-f-286f7.appspot.com",
  messagingSenderId: "384625167046",
  appId: "1:384625167046:web:ae6ccc45063f260ba065c7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    // alert(err.message);
  }
};


const logInWithEmailAndPassword = async (auth,email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const registerWithEmailAndPassword = async (name, email, password, toast) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    })
    toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top'
      })
  }
  catch (err) {
    console.error(err);
    toast({
        title: 'Email used.',
        description: "Entered email already used, use another one.",
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top'
      })
  }
};


const sendPasswordReset = async (auth,email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const logout = () => {
  signOut(auth);
};


export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  sendPasswordResetEmail
};