import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCc2B3iepOpaSsVQxBuAPFOpi5zRYvmDpQ",
    authDomain: "duoc-crwn-db.firebaseapp.com",
    databaseURL: "https://duoc-crwn-db.firebaseio.com",
    projectId: "duoc-crwn-db",
    storageBucket: "duoc-crwn-db.appspot.com",
    messagingSenderId: "204132285346",
    appId: "1:204132285346:web:3841d4486eadeb05c810fb"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider =  new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompts:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;