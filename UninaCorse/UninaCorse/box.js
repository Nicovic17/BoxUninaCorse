var lvlBattery=document.getElementById("lvlBattery");

var firebaseConfig = {
    apiKey: "AIzaSyDyGEcToPbqmd6lz8h4tDUJLJsYXwdC0iE",
    authDomain: "uninacorse-a67f2.firebaseapp.com",
    databaseURL: "https://uninacorse-a67f2.firebaseio.com/",
    projectId: "uninacorse-a67f2",
    storageBucket: "uninacorse-a67f2.appspot.com",
    messagingSenderId: "175688935533",

};

firebase.initializeApp(firebaseConfig);

var firebaseBatteria = firebase.database().ref().child("Batteria");

firebaseBatteria.on("value", function (datasnapshot) {

    //Animazione batteria
    myBattery(datasnapshot.val());
    lvlBattery.innerHTML="Batteria residua: "+datasnapshot.val()+"%";

});

var tempIniz=0;
var firebaseTemp = firebase.database().ref().child("Temp");

firebaseTemp.on("value", function (datasnapshot) {

    tempIniz=datasnapshot.val();
    
});


let throttle;
let speed;
let breakk;
var fireBaseThrottle = firebase.database().ref().child("Throttle");

fireBaseThrottle.on("value", function (datasnapshot) {
    throttle = datasnapshot.val();
    drawSpeedo(speed,1, throttle, 100);
    drawBreakValue(breakk,throttle);
})

var firebaseSpeed = firebase.database().ref().child("Speed");

firebaseSpeed.on("value", function (datasnapshot) {

    speed=datasnapshot.val();

    drawSpeedo(speed, 1, throttle, 100);

});

var fireBaseBreak = firebase.database().ref().child("Break");

fireBaseBreak.on("value", function (datasnapshot) {
	
	breakk=datasnapshot.val();
	drawBreakValue(breakk,throttle);
});
















