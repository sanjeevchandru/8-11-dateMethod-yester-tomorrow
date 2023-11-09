document.write("Find Yesterday and Tomorrow"+"<br>");
document.write("--------------------------------------"+"<br>");

let a=prompt("Enter a Date separate comma(,) :(year,month,date)");
var d1=new Date(a);
document.write("Today :"+"<br>"+d1+"<br><br>");

let x=d1.getDate();
//yesterday
d1.setDate(x-1);
document.write("Yesterday :"+"<br>"+(d1)+"<br><br>");

//tomorrow
d1.setDate(x+1);
document.write("Tomorrow : "+"<br>"+(d1));