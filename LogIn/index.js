// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB4RR74igkcJ4aKt6m7K8bMfBv89Jplv1A",
    authDomain: "uninacorse-a67f2.firebaseapp.com",
    databaseURL: "https://uninacorse-a67f2.firebaseio.com",
    projectId: "uninacorse-a67f2",
    storageBucket: "uninacorse-a67f2.appspot.com",
    messagingSenderId: "871786861348",
    appId: "1:871786861348:web:d807db1b769fe0258f19b1",
    measurementId: "G-PJ9CX3M1GD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.

        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";
        document.getElementById("register_div").style.display="none";

        var user = firebase.auth().currentUser;

        if (user != null) {
            var email_id = user.email;

            document.getElementById("user_para").innerHTML = "Utente: " + email_id;

        }


    } else {
        // No user is signed in.

        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
    }
});

function login() {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error: " + errorMessage);
        // ...
    });


}

function logout() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });
}

function showRegister()
{
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("register_div").style.display = "block";
}

function register()
{
    var userEmail = document.getElementById("reg_email_field").value;
    var userPass = document.getElementById("reg_password_field").value;

    
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error: "+errorMessage);
        // ...
      });
}

function mostra()
{
    location.replace("UninaCorse/index.html");
}

function indietro()
{
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("register_div").style.display = "none";
}