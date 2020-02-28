
        function setThrottlePerc(width)
        {
            
            width=width+"%";
            document.getElementById("headerThrottle").innerHTML="Throttle: "+width;
            document.getElementById("Throttle").style.width=width;
        }

        function setFrenPerc(width)
        {
            
            width=width+"%";
            document.getElementById("headerBreak").innerHTML="Break: "+width;
            document.getElementById("Break").style.width=width;
        }