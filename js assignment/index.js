///////////////chapter no 1//////////////////


// Q1
 //alert("welcome to our website")

// Q2
 //alert(" Error! please enter a valid pasword ")
// Q3
 //alert("welcome to JS land... \n Happy Coding")
// Q4

//alert(" Welcom to Js land...")
 //alert(" happy coding!" )
// Q5
 //alert("Hello... I can run JS through my web browser's console")
// Q6
 //alert("Welcome to our web site")

//////////////////  CHAPTER 2//////////////////

// Q1

  //var username= "Mohsin syed"
  //alert(username);

// Q3
 //var username = " Hello world"
  //alert ( username );

// Q4
 //var name= " Mohsin Syed"
 //var age = " 17 years old "
 //var Certified ="Certified Mobile Application Development"
 
 //alert (name);
 //alert (age);
// alert (Certified    );
 
// Q5
// var tital = ("PIZZA \n pizz \n piz \n pi \n p")  
//alert (tital); 

// Q6
 //var email = ( " My email address is : mohsinsyed0343@example.com")
 //alert (email); 

// Q7
 //var book = (" I am trying to learn from the Book A smarter \n way to learn JavaScript")
 //alert(book)

 //  Q8 html work heading

//Q9
  //var style = ("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")
  //alert(style)


 ////////////////////// Chapter No 3//////////////////////

  //Q1

 //var nameAge =("I am 17 year old")
 //alert(nameAge)

 //Q2

   var visitedTime = 14;
 alert("You have visited this site "+visitedTime+" times")

//Q3

  var birthYear = 2009;
  document.write("My birth year is " + birthYear);

//Q4

 var visitor_name = "Mohsin syed";
 var product_title = "T-shirt";
 var product_qty = 10;
 document.write(visitor_name+" ordered "+product_qty+" "+product_title+"(s) on XYZ Clothing store");


 ///////////////////Chapter no 4///////////////////////////

  //Q1

  var name="Mohsin syed",age=17,addr="karachi";

  //Q2

  // 5 Legel Vaiables

 var _product = "pepsi";
 var  $price = 100;
 var qty = 13;
 var total= 1300;
 var Buyer = "Nadir Ali";

// 5 Illeegel Vaiables

 var clas = "Mohsin";
 var Var = ("not");
 var truo = "Syed";
 var gate = "done";
 var plus = "100";

 //Q3

  var heading = "<h1>Rules for naming JS variables<h1>";
 var mcq1 = "Variable names can only contains,letter, numbers, $ and _ . For example: $my_1stVariable<br>";
 var mcq2 = "Variable names begin with a letter, $ or _ . For example: $name, _name or name<br>";
 var mcq3 = "Variable names are case sensitive<br>";
 var mcq4 = "Variable names should not be the JS keyword<br>";
 document.write(heading+mcq1+mcq2+mcq3+mcq4);

 //////////////chapter 5/////////////////

 //Q1

  var num1 = 5;
        var num2 = 3;
        var sum = num1 + num2;
        document.write("The sum 5+3 is: " +sum);





 //Q2

 

 var num1 = 10;
var num2 = 20;

// Subtraction
var sub = num1 - num2;
document.write("Subtraction: " + sub + "<br>");

// Multiplication
var mul = num1 * num2;
document.write("Multiplication: " + mul + "<br>");

// Division
var div = num1 / num2;
document.write("Division: " + div + "<br>");

// Modulus
var mod = num1 % num2;
document.write("Modulus: " + mod);

//Q4

var ticketPrice = 600;
var buyingTickets = 5;
var totalCost = ticketPrice * buyingTickets;
document.write("Total cost to buy 5 movie tickets is " + totalCost + " PKR");


//Q5

var num = 5;
for (var i = 1; i <= 10; i++) 
document.write(num + " x " + i + " = " + (num * i) + "<br>");


//Q6

var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

var fahrenheitTemp = 100;
var celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C");

//Q7

var priceItem1 = 500;
var priceItem2 = 700;
var quantityItem1 = 2;
var quantityItem2 = 3;
var shippingCharges = 200;
var totalCost = (priceItem1 * quantityItem1) +(priceItem2 * quantityItem2) +shippingCharges;
document.write("Price of Item 1: " + priceItem1 + " PKR<br>");
document.write("Price of Item 2: " + priceItem2 + " PKR<br>");
document.write("Quantity of Item 1: " + quantityItem1 + "<br>");
document.write("Quantity of Item 2: " + quantityItem2 + "<br>");
document.write("Shipping Charges: " + shippingCharges + " PKR<br>");
document.write("Total Cost: " + totalCost + " PKR");


//Q8

var totalMarks = 500;
var marksObtained = 425;
var percentage = (marksObtained / totalMarks) * 100;
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");


//Q9

var totalPKR = (10 * 104.80) + (25 * 28);
document.write("Total Currency in PKR: " + totalPKR);

//Q10

var num = 5;
var result = ((num + 5) * 10) / 2;
document.write("Final Result: " + result);

//Q11


var currentYear = 2026;
var birthYear = 2005;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("They are either " + age1 + " or " + age2 + " years old");


//Q12

var radius = 5;

//Q13

var favoriteSnack = "Chips";
var currentAge = 20;
var maxAge = 80;
var amountPerDay = 2;
var totalSupply = (maxAge - currentAge) * 365 * amountPerDay;
document.write("You will need " + totalSupply + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);