
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.


        var user = firebase.auth().currentUser;

        //window.alert("Logged as: "+user.email);

    
    } else {
        // No user is signed in.

        
        location.replace("../index.html");
    }
});

function logout() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });
}