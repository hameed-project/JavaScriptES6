// Random Number Generation

var n = Math.random();
0 - 0.999999999999999

Fix range scale size
n= n*6
To ger round of Number
Math.floor(n)

// Simple LoveScore Calculator

prompt("What is your name:");
prompt("What is their name:");
var n = Math.random()*100;
n=Math.floor(n)+1;
alert("Your love score is " + n + "%");

// If Conditional

prompt("What is your name:");
prompt("What is their name:");
var loveScore = Math.random()*100;
loveScore=Math.floor(loveScore)+1;
if(loveScore > 70)
{
alert("Your love score is " + loveScore + "% You are the best partner.");
}
else
{
alert("Your love score is " + loveScore + "%");  
}

// Basics of equality symbols

=== is equal to
!== is not equal to
> is greater than
< is lesser than
>= is greater or equal to
<= is lesser or equal to

== vs ===

/* It checks value and datatypes ( === )  */

var a = 1;
var b= '1';
if(a === b )
{
console.log("Yes");
}
else
{
    console.log("No");
}

Output: No

var a = 1;
var b= '1';
if(a == b )
{
console.log("Yes");
}
else
{
    console.log("No");
}

Output: Yes

{/* Logical Statements */}

AND -- &&
OR  -- ||
NOT -- ! opposite

prompt("What is your name:");
prompt("What is their name:");
var loveScore = Math.random()*100;
loveScore=Math.floor(loveScore)+1;
if(loveScore > 70)
{
alert("Your love score is " + loveScore + "% You are the best partner.");
}
if(loveScore > 30 && loveScore <=70)
{
alert("Your love score is " + loveScore + "%");  
}
if(loveScore <= 30)
{
alert("Your love score is " + loveScore + "% You go to together like oil and water" );  
}

var year = prompt("Enter your year:");

if( ( year%4==0 && year %100!=0) || (year %400 ==0))
{
    console.log("leap year");
}
else{
    console.log("not leap year");
}

{/* Array */}

var names = [ 'Jane', 'Kimmy', 'Rio', 'Micheal'];
var myName = names[2];
var myName = names.length;
name.includes('Rio'); --> {/* inbuild_function to check include or not */}
names.push('Shahul'); {/* adding new element */ */}
names.pop('Rio'); {/* Removw element */ */}

{/* Example */}
{/* Program used to check party attendance */}

var guestList = ['Jane', 'Kimmy', 'Rio', 'Micheal'];
var guestName = prompt("What is your name");
if(guestList.includes(guestName))
alert("Welcome to party");
else
alert("Sorry, maybe next time");

{/* Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz"
instead of the number and for the multiples of five print "Buzz". For numbers which are the multiples of both three and five print "FizzBuzz" */}

var output = [];
var count = 1;
function FizzBuzz(){
    if( count % 3 === 0 && count % 5 === 0)
    {
        output.push('FizzBuzz');
    }
    else if ( count % 3 === 0)
    {
        output.push('Fizz');
    }
    else if ( count % 5 === 0)
    {
        output.push('Buzz');
    }
    else
    {
        output.push(count);
    }
    count++;
    console.log(output);
}

FizzBuzz();
Output : [1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, ...]

// Write a program to pick random names in group

function whoPaying(names)
{
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];
    return randomPerson + " is going to buy lunch today!";
}
names = ['Sara','Gawthom','Vijay','Ram'];
whoPaying(names);

// Basics Of loops

var i=1;
while(i<2)
{
    console.log(i);
    i++;
}

// Example

var output = [];
var count = 1;
function FizzBuzz(){
    while ( count <= 100)
    {
    if( count % 3 === 0 && count % 5 === 0)
    {
        output.push('FizzBuzz');
    }
    else if ( count % 3 === 0)
    {
        output.push('Fizz');
    }
    else if ( count % 5 === 0)
    {
        output.push('Buzz');
    }
    else
    {
        output.push(count);
    }
    count++;
}
    console.log(output);
}

FizzBuzz();

// Example 2: - While Loop Concept

var i=99;
while(i>0)
{
    if(i!=1)
    {
    	console.log( + i +" bottles of beer on the wall," + i + " bottles of beer. take one down and pass it around," +(i-1)+ " bottles of beer on the wall.");
    }
    else
    {
    	console.log(+i+ " bottles of beer on the wall," + i+ " bottles of beer. take one down and pass it around, no more bottles of beer on the wall.");
    }
    i--;
}
console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall");
















































































































































































































































































Copyright By Shahul-Hameed
    