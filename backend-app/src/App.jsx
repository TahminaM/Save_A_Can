import { useState } from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcGrRUCkZCmcX3pBiWUISZq1mRVI-_3C4",
  authDomain: "save-a-can.firebaseapp.com",
  projectId: "save-a-can",
  storageBucket: "save-a-can.appspot.com",
  messagingSenderId: "1015971610708",
  appId: "1:1015971610708:web:66ab57fde341f945f7adc1",
  measurementId: "G-TMFNT7T58V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let user;

function App() {
  const [verify, setVeify] = useState('');


  const submitHandler = (e) => {
    e.preventDefault();
    let email = e.target[0].value
    let password = e.target[1].value
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        let singUser = userCredential.user;
        sendEmailVerification(singUser);
        setVeify('Check your email for verication code!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ..
      });
  }

  const loginHandler = (e) => {
    e.preventDefault();
    let email = e.target[0].value
    let password = e.target[1].value
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        user = userCredential.user;
          auth.onAuthStateChanged(() => {
          if (user.emailVerified) {
            setVeify('Welcome back!');
            showUserInfo();
          } else {
            auth.signOut().then(() => console.log('User signed out!'));
            showUserInfo();
            setVeify('You have not verify your email');
          }
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }

  const showUserInfo = () => {
    console.log(user);
  }

  return (
    <>
      <div>
        <h1>Register</h1>
        <form onSubmit={submitHandler}>
          <label>Email</label>
          <input type='text'></input>
          <br></br>
          <label>Password</label>
          <input type='password'></input>
          <br></br>
          <button type='submit'>Submit</button>
        </form>
      </div>
      <h2>{verify}</h2>
      <div>
        <h1>Login</h1>
        <form onSubmit={loginHandler}>
          <label>Email</label>
          <input type='text'></input>
          <br></br>
          <label>Password</label>
          <input type='password'></input>
          <br></br>
          <button type='submit'>Login</button>
        </form>
      </div>
    </>
  )
}

export default App
