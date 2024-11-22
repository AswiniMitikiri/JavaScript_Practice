console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

for(let i = 1; i <= 5; i++){
    console.log(i);
}

for(let i = 5; i >= 1; i--){
    console.log(i);
}

//print all odd numbers form 1 to 15
for(let i = 1; i <=15; i = i+2){
    console.log(i);
}

for(let i = 2; i <=10; i = i+2){
    console.log(i);
}

//infinate loops
// for(let i = 1;  ; i++){
//     console.log(i);
// }

//print multiplication table of a number
let num = prompt("Give your number");  //takes as string. so we need to convert into number
let n = parseInt(num);

for(let i = n; i <= n * 10; i=i+n){
    console.log(i);
}

//nested for loop
for(let i = 1; i <=3; i++){
    console.log(`outer loop ${i}`);
    for(let j = 1; j <= 3; j++){
        console.log(j);
    }
}

//while loo
let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}

//Favorite movie
// let favMovie = "Avatar";
// let guess = prompt("Guess my Favorite Movie");
// while(guess != favMovie){
//     if(guess == "quit"){
//         console.log("You quit");
//         break;
//     }
//     console.log("Wrong guess");
//     guess = prompt("Please try agaian");
// }

// if(guess == favMovie){
//     console.log("Congrats!");
// }

//break keyword
let j = 1;
while(j <= 10){
    if(j == 3){
        break;
    }
    console.log(j);
    j++;
}

//loops with array
let fruits = ['mango', 'apple', 'banana', 'litchi', 'orange'];
fruits.push("pineapple");
for(let i = 0; i < fruits.length; i++){
    console.log(i, fruits[i]);
}

//nested loops

let heroes = [["ironman", "Spiderman", "thor"], ["superman", "wonder woman", "flash"]];

for (let i = 0; i < heroes.length; i++) {
    console.log(i, heroes[i], heroes[i].length);
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(j, heroes[i][j]);
    }
}

let student = [["aswini", 95],["karthik",89],["deeku", 77]];
for(let i = 0; i < student.length; i++){
    console.log(`info os student ${i+1}`);
    for(let j = 0; j < student[i].length;j++){
        console.log(student[i][j]);
    }
}


//for of loop
for(fruit of fruits){
    console.log(fruit);
}

for(char of "Aswini"){
    console.log(char);
}

//nested for of loop
for(list of heroes){
    console.log(list);
    for(hero of list){
        console.log(hero);
    }
}


//Assignment question
//Qs1.Write a JS program to delete all occurrences of element ‘num’ in a given array.
//Example: if arr=[1,2,3,4,5,6,2,3] & num=2 Result should be arr=[1,3,4,5,6,3]
let arr=[1,2,3,4,5,6,2,3];
let nums=2;
for(let i=0; i < arr.length; i++){
    if(arr[i] === nums){
        arr.splice(i, 1);
    }
}
console.log(arr);



//Qs2.Write a JS program to find the no of digits in a number.
//Example: if number=287152,count=6

let number1 = 287152;
let count = 0;

let copy = number1;

while(copy > 0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);


//Qs3.Write a JS program to find the sum of digits in a number.
//Example: if number=287152,sum=25

let number2 = 287152;
let sum = 0;

let copy1 = number2;

while(copy1 > 0){
    digit = copy1 % 10;
    sum += digit;
    copy1 = Math.floor(copy1 / 10)
    
}
console.log(sum);

//Qs4.Print the factorial of a number n. [Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer.] 
//Example:7!(factorialof7)=1x2x3x4x5x6x7=50405!(factorialof5)=1x2x3x4x5=1203!(factorialof3)=1x2x3=60! Is always 1
let num1 = 6;
let factorial = 1;

for(let i = 1; i <= num1; i++){
    factorial *= i;
}
console.log(`factorial of ${num1} is ${factorial}`);

//Qs5.Find the largest number in an array with only positive numbers.
let arr1 = [2,5,10,4,2,7,1,9];
let largest = 0;

for(let i =0; i <= arr1.length; i++){
    if(largest < arr1[i]){
        largest = arr1[i];
    }
}
console.log(largest);