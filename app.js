console.log("Hello World!");
console.log("Aswini Mitikiri");

let a = 10;
let b = 5;
console.log("sum is: ", a + b);

// this is a comment

let pencilPrice = 10;
let eraserPrice = 5;
console.log("The total price is: ", pencilPrice + eraserPrice, "rupees");

//cancatenation in output, we can not put commas in a variable to conacatenate
//let output = "The total price is: " + (pencilPrice + eraserPrice) + " rupees";
let output = `The total price is: ${pencilPrice + eraserPrice} Rupees.`;
console.log(output);



//Arithmetic Operators
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a % b = ", a%b);
console.log("a ** b = ", a**b);

//Unary Operator
console.log("a++ = ", a++); //10
console.log("++a = ", ++a); //11

//Comparison Operator
let age = 21;
console.log("age = 21 > 18:", age > 18); //true
///equals to comparison operator
console.log("is 5 == 5: ", 5==5);  //true
console.log("is 5 != 4: ", 5!=4);  //true

console.log("is 5 == '5': ", 5=="5");  //true



//Conditional Statements
//if condition
console.log("before my if statement");
let age1 = 21;
if(age1 >= 18){
    console.log("You can vote");
    console.log("You can drive");
}
console.log("after my if statement");

let firstName = "Aswini";
if(firstName == "Aswini") {
    console.log(`Welcome ${firstName}`);
}

//Practice Question - Traffic light system
let color = "red";
if(color == "red"){
    console.log("Stop! Light color is Red");
}
if(color == "yellow"){
    console.log("Slow down. Light color is Yellow");
}
if(color == "green"){
    console.log("Go. Light color is Green");
}

//if else condition
let age2 = 14;
if(age2 > 18){
    console.log("You can vote");
} else if (age2 < 18){
    console.log("You can not vote");
}

let marks = 75;
if(marks >= 80){
    console.log(marks + " A+");
} else if(marks >= 60 ){
    console.log(marks + " A");
} else if(marks > 33){
    console.log(marks + " B");
} else if(marks < 33){
    console.log(marks + " F");
}

let month = 'january';
if(month == "january"){
    console.log("Winter is here");
} else if (month == "april"){
    console.log("Summer is here");
}

//else condition
let age3 = 17;
if(age3 > 18){
    console.log("You are above 18");
}
else {
    console.log("You are not above 18");
}

//conditional statements
let color1 = "red";
if(color == "red"){
    console.log("Stop");
} else if(color == "yellow"){
    console.log("Slow down");
} else if(color == "green"){
    console.log("Go.");
} else {
    console.log("Traffic light is broken");
}

//Practice Question - Popcorn Prices Calculator
let size = "L";
if(size === "XL"){
    console.log("Price: 250");
} else if(size === "L"){
    console.log("Price: 200");
} else if(size === "M"){
    console.log("Price: 100");
} else {
    console.log("Price: 50");
}

//Nested if-else condition
let marks1 = 45;
if(marks1 >= 33){
    if(marks1 > 80){
        console.log("Grade: O");
    }
    else{
        console.log("Grade: A");
    }

} else {
    console.log("Better luck next time!");
}

//Logical Operators
//AND Operator
if( marks1 >= 33 && marks1 >= 80){
    console.log("PASS");
    console.log("A+");
}

//logical OR operator
if(marks1 > 33 || marks1 > 80){
    console.log("Pass and may be A+");
}

//logical NOT operator
if(!(marks1 < 33)){
    console.log("Pass");
}

//Practice Question - Good String
let str = "apple";
if((str[0] === "a") && (str.length > 3)){
    console.log("Good String");
} else {
    console.log("Not a Good String");
}

let num = 12;
if(num % 3 === 0 && ((num + 1 === 15) || (num - 1 === 11))){
    console.log("safe");
} else {
    console.log("Unsafe");
}

//Switch Statements
let color2 = "red";

switch(color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Borken Light");
}

//Practice Question
let day = 3;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//Alerts and Prompts
// alert("Somethins is wrong!");
// console.error("This is a error message");
// console.warn("This is a warning message");
// prompt("Give your name");

// let yourName = prompt("Enter your name");
// console.log(yourName);

// let firstName1 = prompt("Enter your first Name");
// let lastName = prompt("Enter your last Name");
// console.log("welcome", firstName1, lastName);



//Assignment Question
//question - 1
let variable = 839;
if(variable % 10 == 0){
    console.log("Good");
} else {
    console.log("Bad");
}

//question - 2
let user = prompt("Enter your Name");
let userage = prompt("Enter your age");
alert(user + " is " + userage + " years old");

//question - 3
let quarter = 3;
switch(quarter){
    case 1:
        console.log("January, Febraury, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Invalid Quarter number");
}

//question - 4
let str1 = "Aswini";
if(str1[0] === "A" || str1[0] === "a" && str1.length > 5){
    console.log("Golden string");
} else {
    console.log("Not a Golden string");
}

//question - 5
let num1 = 3;
let num2 = 54;
let num3 = 62;
if(num1 > num2 && num1 > num3){
    console.log(num1, " is greater");
} else if(num2 > num3){
    console.log(num2, "is greater");
} else {
    console.log(num3, "is greater");
}

//question - 6
let number1 = 32;
let number2 = 47852;
if(number1[number1.length - 1] === number2[number2.length - 1]){
    console.log("Same last digit");
}

 
//string methods
let msg = "  Hello   ";
//trim method
//msg.trim();   //works on console

let password = prompt("set your password");
let newPass = password.trim();
console.log(newPass);  // newPassword doesn't take spaces now as we used trim method

let Name1 = "Random String";
console.log(Name1.toUpperCase());
console.log(Name1.toLowerCase());

console.log(msg.indexOf(H)); //returns index of H in msg variable

//method chaining - using one method after another
let newMSG = msg.toUpperCase().trim();
console.log(newMSG);

//slice method
let MSG = "helloworld";
console.log(MSG.slice(0, 4));  //hell
console.log(MSG.slice(5));  //world
console.log(MSG.slice(-2))  //MSG.length - 2  = 10 - 2 = 8 //rl

let word = "IloveCoding";
console.log(word.replace("love","do"));  //IdoCoding
console.log(word.replace("o","x"));    //IlxveCoding

console.log(word.repeat(3));  //IloveCodingIloveCodingIloveCoding


//practice Question
let msg1 = "help!";
console.log(msg1.trim().toUpperCase());

let na = "ApnaCollege";
console.log(na.slice(4).replace("l","t"));  //Separate College and replace "l" with "t"  => Cotlege


