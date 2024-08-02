
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCTFarEaBaa5FcRLzhjgLmINyFREezQx50",
    authDomain: "todo-app-70f82.firebaseapp.com",
    projectId: "todo-app-70f82",
    storageBucket: "todo-app-70f82.appspot.com",
    messagingSenderId: "796102706251",
    appId: "1:796102706251:web:eb033da3c17bc5d67479ce",
    measurementId: "G-0CRZKYMV7K"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
