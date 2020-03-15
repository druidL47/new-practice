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
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        createAt,
        email,
        ...additionalData
      });
    } catch (er) {
      console.log("error creating user");
    }
  }
  return userRef;
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
