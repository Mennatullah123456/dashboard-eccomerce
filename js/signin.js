import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  const firebaseConfig = {
    apiKey: "AIzaSyBYwuljycqPZPmfmqErFtUkoVBBd-2dOMA",
    authDomain: "calm-airship-367510.firebaseapp.com",
    databaseURL: "https://calm-airship-367510-default-rtdb.firebaseio.com",
    projectId: "calm-airship-367510",
    storageBucket: "calm-airship-367510.appspot.com",
    messagingSenderId: "933503981977",
    appId: "1:933503981977:web:39a1182e4be5b927bf9b08"
  };
  