import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDrgjazjWACGi79n33Ke4U5hj8hrvl90xY",
    authDomain: "react-e-commerce-ff47b.firebaseapp.com",
    databaseURL: "https://react-e-commerce-ff47b.firebaseio.com",
    projectId: "react-e-commerce-ff47b",
    storageBucket: "react-e-commerce-ff47b.appspot.com",
    messagingSenderId: "637539345381",
    appId: "1:637539345381:web:c170161a928cd8c25e450c",
    measurementId: "G-7G27SHK26S"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


// in case that we want a whole library
export default firebase;