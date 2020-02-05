function updatePlotTemp()
{
    myPlot(tempIniz);

    setTimeout(function(){

        updatePlotTemp();

    },1000);

}
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

function startPlot(val)
{
    Plotly.plot('chartContainer',[{
        y:[val],
        type:'line'
    }]);
}

startPlot(tempIniz);
updatePlotTemp();