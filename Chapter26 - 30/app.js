document.write("<h3>Question1</h3>");
var num,rValue,fValue,cValue;
num=prompt("Enter any positive number: ");
rValue= Math.round(num);
fValue= Math.floor(num);
cValue= Math.ceil(num);
document.write("<br>Number: "+num);
document.write("<br>Round off value: "+rValue); 
document.write("<br>Floor value: "+fValue); 
document.write("<br>Ceil value: "+cValue); 



document.write("<h3>Question2</h3>");
num=prompt("Enter any negative number: ");
rValue= Math.round(num);
fValue= Math.floor(num);
cValue= Math.ceil(num);
document.write("<br>Number: "+num);
document.write("<br>Round off value: "+rValue); 
document.write("<br>Floor value: "+fValue); 
document.write("<br>Ceil value: "+cValue); 



document.write("<h3>Question3</h3>");
var val,absValue;
val=prompt("Enter number to find its absolute value: ");
absValue=Math.abs(val);
document.write("The absolute value of "+val+" is "+absValue);



document.write("<h3>Question4</h3>");
var rndm;
for(var i=0;i<2;i--){
    rndm=Math.ceil(Math.random()*10);
    if(rndm>0 && rndm<=6){
        document.write(rndm);
        break;
    }
}



document.write("<h3>Question5</h3>");
var toss;
for(var i=0;i<2;i--){
    toss=Math.ceil(Math.random()*10);
    if(toss>0 && toss<=2){
        document.write(toss);
        if(toss===2){
            document.write("<br>Random coin Value: Heads")
        }
        else{
            document.write("<br>Random coin Value: Tails")
        }
        break;
    }
}



document.write("<h3>Question6</h3>");
var r=Math.floor((Math.random())*100)+1;
document.write("Random number between 1 and 100: "+r)



document.write("<h3>Question7</h3>");
var weight,weightnum;
weightnum='';
weight=prompt("Enter your weight in kiloggrams");
for(var i=0;i<weight.length;i++){
    if(weight[i]>='0' && weight[i]<='9' || weight[i]==='.'){
        weightnum=weightnum+weight[i];
    }
}
document.write("<br>The weight of user is "+weightnum+" kilograms");



document.write("<h3>Question8</h3>");
var guess,userGuess;
guess=Math.floor((Math.random())*10)+1;
userGuess=prompt("Enter a number between 1 and 10");
if(guess==userGuess){
    alert("Congratulations entered number is Correct!")
}
else{
    alert("Try again");
}
document.write("Try again! Number is: "+guess);
