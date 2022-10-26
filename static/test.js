// // Import the functions you need from the SDKs you need
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";

// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
// } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBv330WDB1WfkxP_su2DYj683rujKkxJ0k",
//   authDomain: "test-b8c0d.firebaseapp.com",
//   projectId: "test-b8c0d",
//   storageBucket: "test-b8c0d.appspot.com",
//   messagingSenderId: "901786425996",
//   appId: "1:901786425996:web:756d0bd8613ae0b4d3b9a9",
//   measurementId: "G-H18HVTPRXP"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const provider = new GoogleAuthProvider();

// const auth = getAuth(app);
// // signInWithRedirect(auth, provider);



// let googleLogin = document.getElementById("InicioSesion")
// // googleLogin.addEventListener('click',() => {
// //   signInWithRedirect(auth, provider);
// // })

// googleLogin.addEventListener('click',() => {
//   console.log("Llego aca")
//   signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//     console.log(user)
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });;
// })

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv330WDB1WfkxP_su2DYj683rujKkxJ0k",
  authDomain: "test-b8c0d.firebaseapp.com",
  projectId: "test-b8c0d",
  storageBucket: "test-b8c0d.appspot.com",
  messagingSenderId: "901786425996",
  appId: "1:901786425996:web:756d0bd8613ae0b4d3b9a9",
  measurementId: "G-H18HVTPRXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const auth = getAuth(app);
// signInWithRedirect(auth, provider);



let googleLogin = document.getElementById("InicioSesion")
// googleLogin.addEventListener('click',() => {
//   signInWithRedirect(auth, provider);
// })

googleLogin.addEventListener('click',() => {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    console.log(user)
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });;
})