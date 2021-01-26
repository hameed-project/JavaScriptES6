// basics of JavaScript
// Directly type in broswer in console view section.

2+5;
5

alert("Shahul");

typeof(123)
Output: "number"

typeof("Shahul");
Output: "String"

typeof("true");
Output: "Boolean"

prompt("what is yout name?");

var myName="Shahul";
//   var-Keyword
//   myName-Name
//   Shahul-Value

// if i repalce to another name, we doesn't need to write again VAR keyword example:
//  myName="Hameed"

alert(myName);
Output:Hameed

var yourname = prompt("what is yout name?");
alert("My name is" + myName + " and welcome to my basic class" + yourName + "!.");
Output: My name is Hameed and welcome to my basic class Jack!.

// Variable Rules

var myName="Shahul";
var yourName="Jacky";
var myvar="abc";
var my123="123";
var 123 = 123;  // invalid
var my name="hameed";
var my_name='Shahul';
var ScoredLot= 2;
var my-val="Fine";  // invalid
var var="hai";  // invalid
var 123 = 123;  // invalid

// Strings-Concatenation

var message = "Hello";
var name = "Shahul";
alert(message + " there, " + name);

// String-length

var name = "Shahul";
var.length;

// String Lengths and Retrieving the Number of Characters

var para = prompt("Write the paragraph");
para.length;
var bal = 200 - para.length ;
alert(" You have written " + para.length + " characters, you have " + bal + " characters remaining " );

// Slicing and Extracting Parts of a String
// Syntax
slice(x,y)
name.slice(x,y);

// Example 
var name = "Shahul";
name.slice(2,6);

// first value - Start Character
// second value - Total counts of characters
First way:
var twet = prompt ( "Enter yout tweet");
var twetUnder200 = twet.slice(0,200);
alert(twetUnder200);

Second Way:
alert(prompt("Enter your tweet").slice(0,200));

// Challenge Changing Casing in Text

var name = prompt("Enter your name:");
var firstChar = name.slice(0,1);
var firstCharB = firstChar.toUpperCase();
var remChar = name.slice(1,name.length);
var remCharF = remChar.toLowerCase();
var result = firstCharB + remCharF;
alert(" Hello Mr/Mrs " + result + " ! ");

Output: Hello Mr/Mrs Shahul !

// Numbers

// Basic Arithmetic and the Modulo Operator in Javascript

var dogAge = prompt("How old is your dog?");
var humanAge = ( (dogAge - 2) * 4 ) + 21;
alert("Your dog is " + humanAge + " years old in human years."); 

// Modulo Vs Division

12%8 = 4
12/8 = 1.5 

// Increment and Decrement

var x = 2;
x++;
x--;
x+=2; ---> x = x+2;

var x=5;
var y=3;
x+=y;

// Functions

Syntax 
// Creating a function

Function functionName ()
{
    Set of statements;
}

// Calling a function
 
functionName();

// Example

// Write a code for buy a milk from shop using robot



// Now using with function simply add in the single block of code the above instructions

function myRobot()
{
    console.log("leavehome");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("getMilk");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("enterHome");
}

myRobot();

// Robot Direction using karel ide

function main(){
    moveFourTimes();
    turnLeft();
    moveFourTimes();
 }
 
 function moveFourTimes(){
    move();
    move();
    move();
    move();
 }
   
// Function with arugments

function myRobot(cost)
{
    console.log("leavehome");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("The milk for Rs " + cost + " is "  + Math.floor(cost/1.5) + " number of bottles " );
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("enterHome");
}

myRobot(5);

// If we have lifetime 90 years compute our current age with given years.

function lifeTime(age)
{
    var yearsRemaining = 90 - age;
    var daysRemaining = age * 365;
    var weeksRemainig = age * 53 ;
    var monthsRemaining = age * 12;
    console.log("You have remaining " + daysRemaining + " days " + weeksRemainig + " weeks and " + monthsRemaining + " months.")
}
lifeTime(25);

Output:You have remaining 9125 days 1325 weeks and 300 months.


// Example-2

function getMilk(cost,fixedCost)
{
    console.log("you got " + calcBottles(cost,fixedCost) + " bottles of milks");
    return calcChange(cost,fixedCost);

}

function calcBottles(userCost,costPerBottle)
{
    var numberOfBottles = Math.floor(userCost/costPerBottle);
    return numberOfBottles;

}
function calcChange(userCost,costPerBottle)
{
    var change = userCost % costPerBottle;
    return change;
}

var finalChange = getMilk(10000,850);
console.log("Sir your balance was " + finalChange + " amount" );

// Example 3

function bmiCalc(weight,height)
{
//     var res = weight/(height*height);
    var res = weight/Math.pow(height,2);
    return Math.round(res);
}
bmiCalc(65,1.8);

// Some following methods
Math.floor()
Math.round()
Math.round()