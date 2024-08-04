import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  import { auth } from "./config.js";


const form = document.querySelector(`#form`);
const email = document.querySelector(`#email`);
const password = document.querySelector(`#password`);
const forgotpassword = document.querySelector(`#forgot`);
const loginwithgoogle = document.querySelector(`#google`);
const loginwithgithub = document.querySelector(`#github`);


form.addEventListener(`submit` , (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location = `home.html`
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      
    });
  
})


forgotpassword.addEventListener(`click` , () => {
    const resetEmail = prompt(`enter Email`);
    sendPasswordResetEmail(auth , resetEmail)
    .then(() => {
        alert(`email send`);
        
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        
      });
    
  });


//   GooGLE AUTHENTICATION 

const provider = new GoogleAuthProvider();

loginwithgoogle.addEventListener(`click` , () => {
    console.log(`Google Login`);


signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        console.log(user);
        window.location = `home.html`;
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    

});


// GITHIUB AUTHENTICATION 


const GithubProvider = new GithubAuthProvider();

loginwithgithub.addEventListener(`click` , () => {
    console.log(`Github Login`);


signInWithPopup(auth, GithubProvider)
    .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    

});