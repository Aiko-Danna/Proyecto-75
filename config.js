import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBygotfOq3j0_Q8O-PatqFJ8Sus6ugoYqk",
  authDomain: "proyecto71-8a1ce.firebaseapp.com",
  projectId: "proyecto71-8a1ce",
  storageBucket: "proyecto71-8a1ce.appspot.com",
  messagingSenderId: "708847877000",
  appId: "1:708847877000:web:61f94c4d9e4b91d4bf583d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
