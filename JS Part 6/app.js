//Function
function hello(){
    console.log("hello");
}

hello();
hello();
hello();
hello();
hello();


function printName() {
    console.log("Aswini");
}

printName();


function print1to5() {
    for(let i = 1; i <= 5; i++){
        console.log(i);
    }
}
 
print1to5();

function isAdult(){
    let age = 18;
    if(age >= 18){
        console.log("Adult");
    } else {
        console.log("not Adult");
    }
}

isAdult();

//practice qs - create a function to print a peom

function poem(){
    console.log("Twinkle Twinkle little star");
    console.log("how I wonder what you are");
    console.log("up above the world so high");
    console.log("like a diamond in the sky");
}

poem();

//practice qs - create a function to roll a dice and always display the value of the dice(1 to 6)
function rollDice(){
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}

rollDice();


//functions with arguments
function printName(name){
    console.log(name);
}

printName("ASwini Mitikiri");

function printName(name, age){
    console.log(`${name}'s age is ${age}`);
}

printName("ASwini Mitikiri", 21);
printName("Karthik Mitikiri", 20);

function sum(a,b){
    console.log(a+b);
}
sum(3,6);
sum(7,8);

//practice qs - average of 3 numbers
function calcAvg(a,b,c){
    console.log((a+b+c)/3);
}
calcAvg(4,6,7);

function printTable(n) {
    console.log(`${n} Table`);
    for(let i = n; i <= n*10; i += n){
        console.log(i);
    }
}

printTable(3);

//return statement
function sum1(a,b){
    console.log("sum: ")
    return a+b;
    console.log(sum1(1,4));   //doesn't execute after the return the return statement
}

let s = sum1(3,5);
console.log(s);

console.log(sum1(3,7));

console.log(sum1(sum1(1,3), 5));

function isadult(age){
    if(age >= 18){
        return "adult";
    } else {
        return "not adult";
    }
    console.log("Bye");  //This will not execute
} 

console.log("Is Adult:", isadult(13));

//practice Qs - Get sum of n numbers
function getSum(num){
    let sum1 = 0;
    for(let i = 1; i <= num; i++){
        sum1 += i;
    }
    return sum1;
}

console.log(`Sum of n numbers:`, getSum(5));


//Practice Qs - return the concatenation of all strings in a array
let str = ["hi", "hello", "bye", "!"];

function concat(str){
    let result = "";

    for(let i = 0; i<str.length; i++){
        result += str[i];
    }
    return result;
}
console.log(str);
console.log(concat(str));

//Scope

let calculate = 54;  //global scope

function calcSum(a, b){
    let calculate = a + b;  //function scope
    console.log(calculate);  
}

calcSum(6,7);   
//takes function scope calcualte value as function scope is very specific

//console.log(calculate());  
//can not access the calculate variable outside the scope

//block scope
{
    let a = 9;
}

//console.log(a);   // can not access outside the block - gives undefined

for(let i=1; i<= 5; i++){
    console.log(i);
}

//console.log(i);  //undefined outside the block

//other example
let age1 = 25;

if(age1 >= 18){
    let str1 = "adult";
}

//console.log(str1);  //can't access


//Lexical scope
function outerFunc() {
    
    function innerFunc() {
        let a = 10;      
        console.log(x);   //5
    }
    let x = 7;
    let y = 6;  

    //console.log(a);   //can not access the inner function declared variable in outer function
    innerFunc();  //hoisting concept is used
}

outerFunc();
//innerFunc();  //can not access as it is declared inside the outer function

//practice Question
let greet = "hello";
function changeGreet() {
    let greet = "Namate";
    console.log(greet);
    function innerGreet() {
        console.log(greet);
    }
}

console.log(greet);
changeGreet();

//Function Expression
let Name = "Aswini";

let claculatesum = function(a,b){
    return a+b;
}

console.log(claculatesum(3,6));

let hi = function(){
    console.log("hello");
}

hi = function(){
    console.log("Namaste");
}

hi();

//higherorderfunctions
function multipleGreet(func, n){   //higher function
    for(let i = 1; i <= n; i++){
        func();
    }
}

let greeting = function(){
    console.log("hello");
}

multipleGreet(greeting, 5);

//Higher Order function - return statement
function oddOrEvenFactory(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n % 2 == 0));
        }
        return odd;
    } else if(request == "even"){
        let even = function(n){
            console.log((n % 2 == 0));
        }
        return even;
    } else {
        console.log("wrong request");
    }
}

let request = "odd";

let func = oddOrEvenFactory(request);

console.log(func(10));

//Methods
const calculator = {
    num: 55,
    add: function(a,b){
        return a + b;
    },
    sub: function(a,b){
        return a - b;
    },
    mul: function(a,b){
        return a * b;
    }
}

console.log(calculator.add(5,7));

//shorthand Method Defination

// const calculator = {
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     }
// };
//console.log(calculator.add(1,2));



//Assignment Question - Write a Java Script function that returns array elements larger than a number.
let arr = [8,9,10,1,2,3,4,5,6,7];
let num_1 = 5;

function getElement(arr, num_1){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > num_1){
            console.log(arr[i]);
        }
    }
}

console.log(getElement(arr,num_1));

//write a JavaScript function to extarct unique characters from a string
//example: str = "abcdabcdefggh"
//output ans = "abcdefgh"

let str_1 = "abcdabcdefggh"
function getUnique(str_1){
    let ans ="";
    for(let i = 0; i < str_1.length; i++){
        let currChar = str_1[i];
        if(ans.indexOf(currChar) == -1){
            ans += currChar;
        }
    }
    return ans;
}

console.log(getUnique(str_1));

// write a function that accepts list of country names as input and returns the longest country name as output 
// Example: country=["Australia", "Germany", "United States of America"] output: "United States of America"


let country = ["Australia", "Germany", "United States of America"];

function longestCountry(country) {
    // Initialize a variable to store the longest country name
    let longest = country[0];
    
    // Loop through the list starting from the second element
    for (let i = 1; i < country.length; i++) {
        // Compare the length of the current country with the longest so far
        if (country[i].length > longest.length) {
            longest = country[i];
        }
    }
    
    // Return the longest country name
    return longest;
}

console.log(longestCountry(country));


let str_2 = "apnacollege";
function countVowels(str_2){
    let count = 0;
    for(let i = 0; i < str_2.length; i++){
        if(
            str_2.charAt(i) == "a" ||
            str_2.charAt(i) == "e" ||
            str_2.charAt(i) == "i" ||
            str_2.charAt(i) == "o" ||
            str_2.charAt(i) == "u") {
            count++;
        }
    }
    return count;
}


//Write a javaScript program ti generate a random number within a range
console.log(countVowels(str_2));

let start = 100;
let end = 200;

function generaterandom(start, end){
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

console.log(generaterandom(start, end));