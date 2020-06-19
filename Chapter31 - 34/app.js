document.write("<h3>Question1</h3>");
var DateTime = new Date();
document.write(DateTime);



document.write("<h3>Question2</h3>");
var cMonth = DateTime.getMonth();
var monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];
document.write("Current month: "+monthNames[cMonth]);



document.write("<h3>Question3</h3>");
var cDay = DateTime.getDay();
var dayNames=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
document.write("Today is "+dayNames[cDay]);





document.write("<h3>Question4</h3>");
var cDay = DateTime.getDay();
if(cDay==0 || cDay==6){
    document.write("It's Fun day");
}



document.write("<h3>Question5</h3>");
var cDate = DateTime.getDate();
if(cDate<16){
    document.write("First fifteen days of the month");
}
else{
    document.write("Last days of the month");
}




document.write("<h3>Question6</h3>");
var millsSince = DateTime.getTime();
var mSince=millsSince/(1000*60);
document.write("<br>Current date: "+DateTime);
document.write("<br>Elapsed miliseconds since January 1, 1970: "+millsSince);
document.write("<br>Elapsed minutes since January 1, 1970: "+mSince);




document.write("<h3>Question7</h3>");
var cHour = DateTime.getHours();
if(cHour>=12){
    document.write("It's PM");
}
else{
    document.write("It's AM");
}


document.write("<h3>Question8</h3>");
DateTime.setFullYear(2020);
DateTime.setMonth(11);
var laterDate = new Date(DateTime.getFullYear(), DateTime.getMonth() + 1, 0);
// var laterDate=
document.write("Later date: "+laterDate);


document.write("<h3>Question9</h3>");
var ramazanDate=new Date();
ramazanDate.setMonth(3);
ramazanDate.setDate(25);
ramazanDate.setHours(00);
ramazanDate.setMinutes(00);
ramazanDate.setSeconds(00);
var cDateTime=new Date();
var numOfDays=cDateTime-ramazanDate;
document.write(Math.floor(numOfDays/(1000*60*60*24))+" days have passed since 1st Ramazan, "+ramazanDate.getFullYear());



document.write("<h3>Question10</h3>");
var refDate=new Date();
var begDate=new Date("January 01,2020");
var elapseTime=Math.floor((refDate-begDate)/1000);
document.write("On reference date "+refDate+",<br>"+elapseTime+" seconds had passed since beginning of "+begDate.getFullYear());



document.write("<h3>Question11</h3>");
var ccDate=new Date();
document.write("Current Date:"+ccDate);
ccDate.setHours(ccDate.getHours()-1);
document.write("<br>1 hour ago, it was "+ccDate);



document.write("<h3>Question12</h3>");
var ccDate=new Date();
var cccDate=ccDate;
alert("Current Date:"+cccDate+"\n100 years back, it was "+ccDate);
document.write("Current Date:"+cccDate);
ccDate.setFullYear(ccDate.getFullYear()-100);
document.write("<br>100 years back, it was "+ccDate);



document.write("<h3>Question13</h3>");
var age=prompt("Enter your Age");
var cDate=new Date();
document.write("Your age is "+age);
document.write("<br>Your birth year is "+(cDate.getFullYear()-Number(age)));



document.write("<h3>Question14</h3>");
var cName,cMonth,numOfUnits,chargesPerUnit,netAmoutPayable,latePaymentSurchage,grossAmountPayable;
cName=prompt("Enter Customer Name: ");
cMonth=cDate.getMonth();
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
numOfUnits=prompt("Enter number of units: ");
chargesPerUnit=prompt("Enter Charger per Unit: ");
netAmoutPayable=Number(numOfUnits)*Number(chargesPerUnit);
latePaymentSurchage=prompt("Enter Late Payment Surcharge: ");
grossAmountPayable=netAmoutPayable+Number(latePaymentSurchage);
document.write("<h1>K-Electric Bill</h1><br>");
document.write("Customer Name: <b>"+cName+"</b>");
document.write("<br>Month: <b>"+months[cMonth]+"</b>");
document.write("<br>Number of units: <b>"+numOfUnits+"</b>");
document.write("<br>Charges per unit: <b>"+(Number(chargesPerUnit).toFixed(2))+"</b>");
document.write("<br>Net Amount Payable(within Due Date): <b>"+(Number(netAmoutPayable).toFixed(2))+"</b>");
document.write("<br>Late payment surcharge: <b>"+(Number(latePaymentSurchage).toFixed(2))+"</b>");
document.write("<br>Gross Amount Payable(after Due Date): <b>"+(Number(grossAmountPayable).toFixed(2))+"</b>");