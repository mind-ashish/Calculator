var buttons=document.getElementsByTagName("td");
var color;
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
