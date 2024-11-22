//let student1 = "Siva";
//let student2 = "Aswini";
//let student3 = "Karthik";

let students = ["Siva", "Aswini", "Karthik"];

let num = [2,4,6,8,10];
console.log(num);
console.log("num[0]:", num[0]);  //2
console.log("type of array num:", typeof(num));

let marks = [99,85,93,76,62];
let names = ["Aswini", "Karthik", "Ashu"];
let info = ["Deeku", 25, 6.1];   //array with different datatypes - possible in JS

console.log(info[0][0]);   //D - 1st letter of 1st element

//empty array
let empArr = [];
console.log("length of empty array:", empArr.length);

console.log("length of [1,2,3,4]:", [1,2,3,4].length);


// Arrays are mutable
let fruits = ["mango", "apple", "litchi"];
console.log(fruits);
fruits[0] = "banana";
console.log(fruits);

fruits[10] = "papaya";
console.log(fruits);
console.log(fruits.length);

//Array Methods
let cars = ["audi", "bmw", "xuv", "maruti"];
console.log(cars);
cars.push("toyota");   //pushes the element at the end
cars.push("ferrari");
console.log(cars);
console.log(cars.pop()); //deletes the last element
console.log(cars);

cars.unshift("ferrari");
console.log(cars);
cars.shift("ferrari");
console.log(cars);

let followers = ['a','b','c'];
console.log(followers);
let blocked = followers.shift();
console.log(followers);
console.log(blocked);

//Practice Question
//start: ['january','july','march','august']
//final: ['july','june','march','august']

let start = ['january','july','march','august'];
console.log(start);
start.shift("january");
start.shift("july");
start.unshift("june");
start.unshift("july");
console.log(start);

//indexOf and includes methods
let primary = ["red", "yellow", "blue"];
console.log(primary.indexOf("blue"));
console.log(primary.indexOf("green"));
console.log(primary.includes("yellow"));
console.log(primary.includes("purple"));

//concatenate and reverse methods
let secondary = ['orange','green','violet'];
console.log(primary.concat(secondary));
console.log(primary.reverse());

//slice method
let colors = ['red','yellow', 'blue', 'orange', 'green', 'violet'];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2, 3));
console.log(colors.slice(-2));
console.log(colors.slice(colors.length-1));

//splice method
console.log(colors.splice(4));
console.log(colors);
console.log(colors.splice(0,1));
console.log(colors);
console.log(colors.splice(0,1,"black","grey"));
console.log(colors);

//sort method
console.log(colors.sort());

let nums = [1,304,7,20,43,271,3];
console.log(nums);
console.log(nums.sort());  //nums are converted into strings and then gets sorted

//Practice Question
let start1 = ['january','july','march','august'];
console.log(start1.splice(0, 2, "july", "june"));
console.log(start1);

let lan = ['C','C++','HTML','JavaScript','Python','JAVA','C#','SQL'];
console.log(lan.reverse().indexOf("JavaScript"));

let arr = ['a','b'];
let arrCopy = arr;
console.log(arr);
console.log(arr == arrCopy);
console.log(arr === arrCopy);
arr.push('c');
console.log(arr);
console.log(arrCopy);


//constant Array
const a = [1,2,3];
console.log(a);
a.push(4);
console.log(a);
a.pop();
console.log(a);

//nested arrays
let nes = [[2,4],[3,6],[4,8]];
console.log(nes);
console.log(nes[0]);
console.log(nes[0][0]);

//practice question - TIC-TAC-TOE
//2D array
let game = [['X', null, 'O'],[null, 'X', null],['O',null,'X']];
console.log(game);
console.log(game[0]);
console.log(game[0][1]);
game[0][1] = "O";
console.log(game);