document.getElementById("zona-mijloc").style = "background-color:#111 !important;";
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
console.log(total);
var numeId;
for (i=0; i<total.length; i++)
{
    total[i].id = numeId = "_" + i;
    stil.innerHTML += "#" + numeId + "{background-color:#333}";
}