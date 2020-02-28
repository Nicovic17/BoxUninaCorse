
var btn= document.getElementsByClassName("btn");
var spanBar= document.getElementsByClassName("spanBar");



for(i=0;i<btn.length;i++)
{

    if(spanBar[i].innerHTML=="Test")
    {
        btn[i].classList.add("red");
    }
    else
    {
        btn[i].classList.remove("orange");
        btn[i].classList.remove("red");
    }

}