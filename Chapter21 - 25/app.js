document.write("<h3>Question1</h3>");
var fname,lname,fullname;
fname=prompt("First Name: ");
lname=prompt("Last Name: ");
fullname=fname+lname;
alert("Hi!, Welcome "+fullname);



document.write("<h3>Question2</h3>");
var favmob;
favmob=prompt("Enter your favorite mobile phone model: ");
strlength=favmob.length;
document.write("My favorite phone is: "+favmob);
document.write("<br>Length of string: "+strlength)



document.write("<h3>Question3</h3>");
var letter,ind;
letter="Pakistani";
ind=letter.indexOf("n");
document.write("String: "+letter);
document.write("<br>Index of 'n': "+ind);




document.write("<h3>Question4</h3>");
var letter1,ind1;
letter1="Hello World";
ind1=letter1.lastIndexOf("l");
document.write("String: "+letter1);
document.write("<br>Last index of 'l': "+ind1);



document.write("<h3>Question5</h3>");
var letter2,ind2;
letter2="Pakistani";
ind2=3;
document.write("String: "+letter2);
document.write("<br>Character at index "+ind2+": "+(letter2.charAt(ind2)));



document.write("<h3>Question6</h3>");
var fname1,lname1,fullname1;
fname1=prompt("First Name: ");
lname1=prompt("Last Name: ");
fullname1=fname1.concat(lname1);
alert("Hi!, Welcome "+fullname1);



document.write("<h3>Question7</h3>");
var city,rep,repto,newcity;
city="Hyderabad";
rep="Hyder";
repto="Islam";
for(var i=0;i<city.length;i++){
    if(city.slice(i,i+(rep.length))===rep){
        newcity=repto + city.slice(i + (rep.length));
        break;
    }
}
document.write("City: "+city);
document.write("<br>After replacement: "+newcity);



document.write("<h3>Question8</h3>");
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("Message: "+message);
document.write("<br>After and replacement: "+newMessage);



document.write("<h3>Question9</h3>");
var strValue,numValue;
strValue="472";
numValue=Number(strValue);
document.write("Value: "+strValue);
document.write("<br>Type: "+typeof(strValue));
document.write("<br>Value: "+numValue);
document.write("<br>Type: "+typeof(numValue));



document.write("<h3>Question10</h3>");
var uinput,upperCaseInput;
uinput=prompt("Enter any string to convert in upper case: ");
upperCaseInput=uinput.toUpperCase();
document.write("User Input: "+uinput);
document.write("<br>Upper Case: "+upperCaseInput);



document.write("<h3>Question11</h3>");
var uinput1,lowerCaseInput;
uinput1=prompt("Enter any string to convert in lower case: ");
lowerCaseInput=uinput1.toLowerCase();
document.write("User Input: "+uinput1);
document.write("<br>Lower Case: "+lowerCaseInput);



document.write("<h3>Question12</h3>");
var numb,strNumb;
numb= 35.36;
strNumb=(numb.toString());
strNumb = strNumb.replace('.', "");
document.write("Number: "+numb);
document.write("<br>Result: "+strNumb);




document.write("<h3>Question13</h3>");
var username;
username=prompt("Enter your name: ");
for(var j=0;j<username.length;j++){
    if(username.charAt(j)==="[" || username.charAt(j)==="@" || username.charAt(j)==="." || username.charAt(j)===" ," || username.charAt(j)==="!" || username.charAt(j)==="]" || username.charAt(j)===","){
        alert("Please enter a valid username");
    }
}



document.write("<h3>Question14</h3>");
var A,baleryIndex,available;
A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search=(prompt("Welcome to XYZ Bakery. What do you want to order sir/ma'am?")).toLowerCase();
for(var k=0;k<A.length;k++){
    if(search===A[k]){
        bakeryIndex=k;
        available=true;
    }
}
if(available===true){
    document.write(search+" is available at index "+bakeryIndex+" in our bakery");
}
else{
    document.write("We are sorry. "+search+" is <b>not available</b> in our bakery");
}



document.write("<h3>Question15</h3>");
var pwd,alphabets,nmbrs,isAlpha,isNmbr,startWithNmbr,pwglength;
pwd=prompt("Enter Password: ");
alphabets="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
nmbrs="123456789";
isAlpha=false;
isNmbr=false;
startWithNmbr=true;
pwdLength=false;
for(var l=0;l<pwd.length;l++){
    for(var m=0;m<alphabets.length;m++){
        if(pwd.charAt(l)===alphabets.charAt(m)){
            isAlpha=true;
            break;
        }
    }
    for(var n=0;n<nmbrs.length;n++){
        if(pwd.charAt(l)===nmbrs.charAt(n)){
            isNmbr=true;
            break;
        }
    }
    
}
for(var o=0;o<nmbrs.length;o++){
    if(pwd.charAt(0)===nmbrs.charAt(o)){
        startWithNmbr=false
    }
}
if(pwd.length>=6){
    pwdLength=true;
}
if(isAlpha && isNmbr && startWithNmbr && pwdLength){
    document.write("<br>Entered Password: "+pwd);
    document.write("<br>You Entered Valid Password");
    alert("You Entered Valid Password");
}
else{
    document.write("<br>Entered Password: "+pwd);
    if(!isAlpha){
        document.write("<br>Password should contain alphabets");
    }
    if(!isNmbr){
        document.write("<br>Password should contain numbers");
    }
    if(!startWithNmbr){
        document.write("<br>Password should not start with a number");
    }
    if(!pwdLength){
        document.write("<br>Password must atleast 6 characters long")
    }
    document.write("<br>Please Enter a Valid Password");
    alert("Please Enter a Valid Password");
}


document.write("<h3>Question16</h3>");
var university = "University of Karachi";
var ku = university.split('');
for(i=0;i<ku.length;i++){
    document.write(ku[i]+"<br>");
}



document.write("<h3>Question17</h3>");
var p=prompt("User Input: ");
var lastChar=p.charAt((p.length-1));
document.write(lastChar);



document.write("<h3>Question18</h3>");
var txt="The quick brown fox jumps over the lazy dog";
var countThe=0;
var txtArray=txt.split(' ');
var findword="the";
for(var q=0;q<txtArray.length;q++){
    if((txtArray[q].toLowerCase())===findword){
        countThe=countThe+1;
    }
}
document.write("<br>There are "+countThe+" occurence(s) of word '"+findword+"'");
