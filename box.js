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

var firebaseAcc = firebase.database().ref().child("Accelerazione");

firebaseAcc.on("value", function (datasnapshot) {

    

});

var tempIniz=0;
var firebaseTemp = firebase.database().ref().child("Temp");

firebaseTemp.on("value", function (datasnapshot) {

    tempIniz=datasnapshot.val();
    
});

function updatePlotTemp()
{
    myPlot(tempIniz);

    setTimeout(function(){

        updatePlotTemp();

    },1000);

}
updatePlotTemp();


var firebaseCoccos = firebase.database().ref().child("Speed");

firebaseCoccos.on("value", function (datasnapshot) {

    let speedM = 0;
    let gear = 0;
    let rpm = 0;

    if (speedM > 100){
        speedM = 1;
        rpm = 0;
      }

    drawSpeedo(datasnapshot.val(), gear, rpm, 100);

});


function myPlot(val)
{
    Plotly.plot('chartContainer',[{
        y:[val],
        type:'line'
    }]);

    var cnt=0;

    Plotly.extendTraces('chartContainer',{ y:[[val]]},[0]);

    /*setInterval(function(){
        
        Plotly.extendTraces('chartContainer',{ y:[[val]]},[0]);

        cnt++;

        if(cnt>500){
            Plotly.relayout('chartContainer',{
                xaxis: { 
                    range:[cnt-500,cnt]
                }
            });
        }

    },1000);*/
}


function myBattery(lvl)
{
    let battery=document.getElementById("battery");

    if(lvl<=100 && lvl>75)
    {
        battery.innerHTML = "&#xf240";
    }
    else
    if(lvl<=75 && lvl >50)
    {
        battery.innerHTML = "&#xf241";
    }
    else
    if(lvl<=50 && lvl >25)
    {
        battery.innerHTML = "&#xf242";
    }
    else
    if(lvl<=25 && lvl>0)
    {
        battery.innerHTML = "&#xf243";
    }
    else
    if(lvl==0)
    {
        battery.innerHTML = "&#xf244";
    }

    /*setTimeout(function(){
        lvl=lvl-25;
        myBattery(lvl);
    },1000);*/
    
}








