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

negation.addEventListener('click',function(){
if (str!="" && str!="0"){
    str="-"+str;
    print=str;
    output.innerText=print;

}
});

percent.addEventListener('click',function(){
if (str!=""){
    var val=eval(str);
    val=val/100;
    str=val;
    print=str;
    output.innerText=print;
}
});

equal.addEventListener('click',function(){
if(str!=""){
    var ans=eval(str);
    str=ans;
    print=ans;
    output.innerText=print;

}
});

decimal.addEventListener('click',function(){
if(str==""){
    str="0";
}
str=str+".";
print=print+".";
output.innerText=print;
});

for (var i=0;i<numbers.length; i++){
    numbers[i].addEventListener('click',function(){
        var digit=this.innerText;
        str=str+digit;
        flag=0;
        for(var j=0;j<operators.length;j++){
            if(print==operators[j].innerText){
                flag=1;
            }
        }
        if(flag==1){
            print=digit;
            flag=0;
        }else{
            print=print+digit;
        }
        output.innerText=print;
    });
}

for (var i=0;i<operators.length;i++){
    operators[i].addEventListener('click',function(){
        var operatorType=this.innerText;
        if(str!=""){
            str=str+operatorType;
            print=operatorType;
            output.innerText=print;
        }
    });
}



