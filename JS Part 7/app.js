const student = {
    name: "Aswini",
    age: 21,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        console.log(this);
        let avg = (this.eng+this.math+this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

console.log(student.getAvg());

function getAvg(){
    console.log(this);  //by default takes window object
}


console.log("hello");
console.log("hello");
console.log("hello");
//console.log(a); //variable does't exists
// console.log("hello2");  //code execution stops from above statement 
// console.log("hello2");
// console.log("hello2");   

//to avoid this problem, we use try and catch statements
try{
    console.log(a);
} catch(error){
    console.log("Variable a doesn't exists");
    console.log(error);
}
//now the below statements execute
console.log("hello2");
console.log("hello2");
console.log("hello2");

//Miscallaneous Topics
//Arrow Functions
const sum = (a,b) => {
    console.log(a+b);
}

console.log(sum(4,5));


//another example
const cube = (n) => {
    return n * n * n;
}

console.log(cube(3));

//another example
const hello = () => {
    console.log("Hello world");
}

console.log(hello());

//implicit return
const mul = (a,b) => a * b;
console.log(mul(2,3));


//setTimeout Function
console.log("hi there!");

setTimeout( () => {
    console.log("Apna College");
}, 1000);   //1000ms - 1s

console.log("Welcome to");

//setInterval function
let id = setInterval( () => {
    console.log("Apna College");
}, 2000);    //runs multiple times for everytime time interval

console.log(id);

clearInterval(id);  //would be more approprite on the console
//stops the loop of setInterval function





//this with Arrow Function
const student_2 = {
    name: "Aswini",
    marks: 95,
    prop: this,      //takes window object - global scope
    getName: function() {
        console.log(this);   //takes student object
        return this.name;
    },
    getMarks: () => {         // arrow function takes parent's scope
        console.log(this);   //parents's scope - window
        return this.marks;
    },
    getInfo1: function() {
        setTimeout( () => {
            console.log(this);   //student - parent function this
        }, 2000);
    },
    getInfo2: function(){
        setTimeout(function () {
            console.log(this);    //window-object of function call - setTimeout
        }, 2000);
    },
};

console.log(student_2);
console.log(student_2.getName());
console.log(student_2.getMarks());
console.log(student_2.getInfo1());
console.log(student_2.getInfo2());

//Write an arrow function that returns the square of a number 'n'
const square = (n) => n * n;
console.log(square(4));

//write a function that prints "Hello World" 5 times at intervals of 2s each
let id1 = setInterval(() => {
    console.log("Hello World");
}, 2000);

setInterval(() => {
    clearInterval(id1);
}, 10000);

//Assignment Qs
//Qs 1: Write an arrow function named arrayAverage that accepts 
//an array of numbers and returns the average of those numbers
const arrayAverage = (arr) => {
    let total = 0;
    for(let number of arr){
        total += number;
    }
    return total/ arr.length;
};
let arr = [1,2,3,4,5,6];
console.log(arrayAverage(arr));

//Qs 2: Write an arraow function named isEven() that takes
// a single number as argument and returns if it is even or not.
let num = 4;
const isEven = (num) => num % 2 == 0;
console.log(isEven(5));

//Qs 3: what will be the output of the below code
const object = {
    message: "Hello World!",
    logMessage() {
        console.log(this.message);
    }
};
setTimeout(object.logMessage, 1000);

//Qs 4: What is the object of the following code
let length = 4;
function callback() {
    console.log(this.length);
}
const object1 = {
    length: 5,
    method(callback){
        callback();
    },
};
object1.method(callback, 1, 2);