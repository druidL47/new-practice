import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyDRqiLFMakLlje0D_O_fOGFCwg5KuJZjz8",
  authDomain: "crwndb-efd57.firebaseapp.com",
  databaseURL: "https://crwndb-efd57.firebaseio.com",
  projectId: "crwndb-efd57",
  storageBucket: "crwndb-efd57.appspot.com",
  messagingSenderId: "984423454805",
  appId: "1:984423454805:web:5ce527618b048e0bfc9cdc"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
