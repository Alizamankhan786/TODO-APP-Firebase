import {
    signOut,
    onAuthStateChanged,
  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  import { auth } from "./config.js";

onAuthStateChanged( auth , (user) => {
    if(user){
        const uid = user.uid;
        console.log(uid);
    } else{
        window.location = `login.html`
    }
});

const btn = document.querySelector(`#logout`);

btn.addEventListener(`click` , () => {
    signOut(auth)
    .then(() => {
        // Sign out Successfully.
        window.location = `login.html`
    })
    .catch((error) => {
        // An error happened.
        console.log(error);
        
    });
});