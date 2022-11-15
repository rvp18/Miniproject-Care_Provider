

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithRedirect,
    getRedirectResult,
    signInWithPopup

} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
// import {
//     getAuth,
//      } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
// import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNCupcSbQudULeZzaVoIUKhMlPDOm6JHA",
    authDomain: "wecare-7dcc7.firebaseapp.com",
    databaseURL: "https://wecare-7dcc7-default-rtdb.firebaseio.com",
    projectId: "wecare-7dcc7",
    storageBucket: "wecare-7dcc7.appspot.com",
    messagingSenderId: "492609910212",
    appId: "1:492609910212:web:8d7f385e1d9e29e5cb6091"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);
const database = getDatabase(app);
// window.user = "";

document.getElementById("logout_btn").style.display = "none";



Sign_Up_btn.addEventListener('click', (e) => {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...user.uid
            set(ref(database, 'users/' + user.uid), {
                email: email,

            })
                .then(() => {
                    // Data saved successfully!
                    alert('User created succesfully');
                })
                .catch((error) => {
                    // The write failed...
                    alert(error);
                });

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage);
        });

})

Sign_in_btn.addEventListener('click', (e) => {




    var email = document.getElementById('login_email').value;
    var password = document.getElementById('login_password').value


    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            var lgdate = new Date();


            update(ref(database, 'users/' + user.uid), {
                last_login: lgdate


            })
                .then(() => {
                    // Data saved successfully!
                    // alert('User Logged In');
                    document.getElementById("username").innerText = "Welcome: " + user.email;
                    document.getElementById("joinnow_btn");
                    var element1 = document.getElementById("login_btn_show");
                    element1.parentNode.removeChild(element1);

                    document.getElementById("logout_btn").style.display = "block";

                    const box = document.getElementById('popup');
                    box.style.display = 'none';

                })
                .catch((error) => {
                    // The write failed...
                    alert(error);
                });

        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });

})

googleBtn.addEventListener('click', (e) => {


    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            window.user = result.user;
            // alert(user.displayName);

            document.getElementById("username").innerText = "Welcome: " + user.displayName;
            document.getElementById("joinnow_btn");

            var element1 = document.getElementById("login_btn_show");
            element1.parentNode.removeChild(element1);

            document.getElementById("logout_btn").style.display = "block";

            const box = document.getElementById('popup');
            box.style.display = 'none';

            window.username_2 = user.displayName; 

            print_user();

            // document.getElementById("logout_btn").ario;
            // window.location.replace("./Dashboard.html");


            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);

            // ...
            alert(errorMessage);

        });

})

logout_btn.addEventListener('click', (e) => {

    signOut(auth).then(() => {
        alert(user.displayName);

        console.log('Sign out suc...')
        //  Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });

});


function print_user(){
    console.log(username_2); 
}
