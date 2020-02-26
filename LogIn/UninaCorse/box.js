var lvlBattery=document.getElementById("lvlBattery");

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

firebase.initializeApp(firebaseConfig);

var firebaseBatteria = firebase.database().ref().child("Batteria");
firebaseBatteria.on("value", function (datasnapshot) {

    //Animazione batteria
    myBattery(datasnapshot.val());
    lvlBattery.innerHTML="Batteria residua: "+datasnapshot.val()+"%";

});

var firebaseTemp = firebase.database().ref().child("Temp");
firebaseTemp.on("value", function (datasnapshot) {

    tempIniz=datasnapshot.val();
    
});

let speed;
var firebaseSpeed = firebase.database().ref().child("Speed");
firebaseSpeed.on("value", function (datasnapshot) {

    drawSpeedo(datasnapshot.val());

});
//Gestione percetuali

var firebaseThrottle = firebase.database().ref().child("Throttle");
firebaseThrottle.on("value", function (datasnapshot) {

    setThrottlePerc(datasnapshot.val());

});

var firebaseBreak = firebase.database().ref().child("Break");
firebaseBreak.on("value", function (datasnapshot) {

    setFrenPerc(datasnapshot.val());

});















