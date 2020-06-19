document.write("<h3>Question1</h3>");
function currentDate(){
    document.write(new Date());
}
currentDate();



document.write("<h3>Question2</h3>");
function greet(fName,lName){
    document.write("Welcome ",fName+" "+lName);
}
var fname=prompt("Enter your first name:");
var lname=prompt("Enter your last name:");
greet(fname,lname);



document.write("<h3>Question3</h3>");
function sum(num1,num2){
    return(Number(num1)+Number(num2));
}
var n1=prompt("Enter first number: ");
var n2=prompt("Enter second number: ");
document.write(sum(n1,n2));



document.write("<h3>Question4</h3>");
function calculator(n1,operator,n2){
    switch (operator){
        case '+':
            return (n1+n2);
        case '-':
            return (n1-n2);
        case '*':
            return (n1*n2);
        case '/':
            return (n1/n2);
    }
}
var n1=Number(prompt("Enter first number: "));
var op=prompt("Enter Operator: ");
var n2=Number(prompt("Enter second number: "));
document.write(calculator(n1,op,n2));




document.write("<h3>Question5</h3>");
function square(n){
    return (n**2);
}
var sq=Number(prompt("Enter any number to be square: "));
document.write(square(sq));



document.write("<h3>Question6</h3>");
function factorial(num){
    ans = 1
    for(var i=1;i<=num;i++){
        ans = ans*i;
    }
    return ans;
}
var fact=Number(prompt("Enter number to calculate factorial"));
document.write("Factorial of "+fact+" is: "+factorial(fact));



document.write("<h3>Question7</h3>");
function counting(s,e){
    for(var i=s;i<=e;i++){
        document.write(i+", ");
    }
}
var a=Number(prompt("Enter starting number for counting: "));
var b=Number(prompt("Enter ending number for counting: "));
counting(a,b);



document.write("<h3>Question8</h3>");
function calculateHypotenuse(base,perp){
    function  calculateSquare(base,perp){
        var arr=[base**2,perp**2]
        return arr;
    }
    var hyp=(calculateSquare(base,perp)[0])+(calculateSquare(base,perp)[1]);
    return hyp;
}
var a=Number(prompt("Enter base of a triangle: "));
var b=Number(prompt("Enter perpendicular of a triangle: "));
document.write("Hypotenuse<sup>2</sup> = Base<sup>2</sup> + Perpendicular<sup>2</sup> ")
document.write("<br>"+calculateHypotenuse(a,b)+" = "+a+"<sup>2</sup> + "+b+"<sup>2</sup> ");



document.write("<h3>Question9</h3>");
var area,width,high;
function calcArea(w,h){
    area=w*h;
    return area;
}
width=Number(prompt("Enter Width of a Triangle: "));
high=Number(prompt("Enter Height of a Triangle: "));
document.write("<h4>Pass by Variable</h4>Width: "+width+"<br>Height: "+high+"<br>Area of a triangle: "+calcArea(width,high));
document.write("<h4>Pass by Value</h4>Width: "+10+"<br>Height: "+15+"<br>Area of a triangle: "+calcArea(10,15));



document.write("<h3>Question10</h3>");
function check(str) {
    var isPalindrome="";
    for (var i = str.length-1; i >= 0 ; i--){
        isPalindrome=isPalindrome+str[i];
    }
    if (str===isPalindrome){
        return true;
    }
    else{
        return false;
    }
}
var checkPalindrome=prompt("Enter word to check Palindrome");
if(check(checkPalindrome)){
    document.write(checkPalindrome+" is a palindrome word");
}
else{
    document.write(checkPalindrome+" is not a palindrome word");

}



document.write("<h3>Question11</h3>");
function upper(str){
  var array1 = str.split(' ');
  var newarray1 = [];
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
var sentence=prompt("Write a Sentence");
document.write("EXAMPLE STRING: "+sentence+"<br>");
document.write("EXPECTED OUTPUT: "+upper(sentence));



document.write("<h3>Question12</h3>");
function longest(str){
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];
    for(var x = 1 ; x < array1.length ; x++){
        if(result.length < array1[x].length){
            result = array1[x];
        } 
    }
    return result;
}
var sentence=prompt("Type a sentence to find long word");
document.write("EXAMPLE STRING: "+sentence);
document.write("<br>EEXPECTED OUTPUT: "+longest(sentence));



document.write("<h3>Question13</h3>");
function count(str,word){
    var arr1 = str.split('')
    count = 0
    for(x=0;x<arr1.length;x++){
        if(arr1[x]===word){
            count += 1
        }
    }return count
    
}
var str=prompt("Enter a string");
var wrd=prompt("Enter a word to count from the string");
document.write(wrd+" occur "+count(str, wrd)+" times in '"+str+"'")



document.write("<h3>Question14</h3>");
function calcCircumference(radius){
    cir = 2*3.142*radius;
    return ("The circumference is "+cir);
}
function calcArea(radius){
    area = 3.142*(radius**2);
    return ("<br>The area is "+area);
}

document.write(calcCircumference(5));
document.write(calcArea(8));