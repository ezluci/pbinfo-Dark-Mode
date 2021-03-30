document.getElementById("zona-mijloc").style = "background-color:#1a1a1a !important;";
document.body.style.color = "white";
var stil = document.createElement("style");
document.head.appendChild(stil);

var total = [], panou = [];
panou = document.getElementsByClassName("panel");
var k = 0;
for (i=0; i<panou.length; i++,k++)
    total[k] = panou[i];

panou = [];
panou = document.getElementsByClassName("panel-heading");
for (i=0; i<panou.length; i++,k++)
    total[k] = panou[i];

panou = [];
panou = document.getElementsByClassName("well well-sm");
for (i=0; i<panou.length; i++)
{
    panou[i].style = "background-color: #333333;";
    panou[i].classList.remove("well");
}
var numeId;
for (i=0; i<total.length; ++i)
{
    total[i].id = numeId = "_" + i;
    stil.innerHTML += "#" + numeId + "{background-color:#333333}";
}

stil.innerHTML += ".bg-info.small.padding5{color: black;}";

stil.innerHTML += "code{background-color: black;color: yellow;}";
stil.innerHTML += "background-color:darkred;color:black";
numeId = [];
numeId = document.querySelectorAll("pre[contenteditable='true']");
for (i=0; i<numeId.length; i++)
    numeId[i].style = "background-color: rgb(0, 0, 0);color: white";