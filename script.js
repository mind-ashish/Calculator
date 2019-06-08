var buttons=document.getElementsByTagName("td");
var color; //to hold last color of button
function changeColor(){
    color=this.style.backgroundColor;
    this.style.backgroundColor="rgb(252, 252, 196)";
}
function originalColor(){
    this.style.backgroundColor=color;
}
for(var i=0; i<buttons.length;i++){
    buttons[i].addEventListener('mouseover',changeColor );
    buttons[i].addEventListener('mouseout',originalColor );
}

var str="";
var numbers=document.getElementsByClassName("number");
var operators=document.getElementsByClassName("operator");
var clear=document.getElementById("AC");
var negation=document.getElementById("+/-");
var percent=document.getElementById("%");
var equal=document.getElementById("equals");
var decimal=document.getElementById(".");
var output=document.getElementById("output");

var print="";

clear.addEventListener('click',function(){
str="";
print="";
output.innerText=print;
});



