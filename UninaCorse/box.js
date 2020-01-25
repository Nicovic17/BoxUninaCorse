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

function updatePlotTemp()
{
    myPlot(tempIniz);

    setTimeout(function(){

        updatePlotTemp();

    },1000);

}

function startPlot(val)
{
    Plotly.plot('chartContainer',[{
        y:[val],
        type:'line'
    }]);
}

startPlot(tempIniz);
updatePlotTemp();


let throttle;
let speed;
var fireBaseThrottle = firebase.database().ref().child("Throttle");

fireBaseThrottle.on("value", function (datasnapshot) {
    throttle = datasnapshot.val();
    drawSpeedo(speed,1, throttle, 100);
})

var firebaseSpeed = firebase.database().ref().child("Speed");

firebaseSpeed.on("value", function (datasnapshot) {

    speed=datasnapshot.val();

    drawSpeedo(speed, 1, throttle, 100);

});

var cont=0;

function myPlot(val)
{
    
    cont++;
    Plotly.extendTraces('chartContainer',{ y:[[val]]},[0]);

    if(cont>10)
    {
        Plotly.relayout('chartContainer',{
            xaxis: {
                range: [cont-10,cont]
            }
        });
    }

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









