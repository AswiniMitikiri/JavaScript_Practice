//Array Methods
let arr = [1,2,3,4,5];

function print(el){
    console.log(el);
}
arr.forEach(print);

//OR

arr.forEach(function(el){
    console.log(el);
});



// array of objects
let students = [{
    name: "Aswini",
    marks: 95,
},
{
    name: "Karthik",
    marks: 96,
},
{
    name: "Siva",
    marks: 97,
}];

console.log(students);
students.forEach((student) => {
    console.log(student.marks);
});

//map method of array
let num = [1,2,3,4];
let double = num.map(function(el){
    return el * 2;
});
console.log(double);

let gpa = students.map((el) => {
    return el.marks / 10;
});

console.log(gpa);

//filter method of array
let nums = [1,2,3,4,7,8,2];
let ans = nums.filter((el) => {
    return el % 2 == 0;        //even -> true, odd -> false
})
console.log(ans);

//every method
console.log([1,2,3,4].every((el) => (el % 2 == 0)));   //returns false
console.log([2,4].every((el) => (el % 2 == 0)));    //retuns true

//some method
console.log([1,2,3,4].some((el) => (el % 2 == 0)));   //returns true
console.log([1,3].some((el) => (el % 2 == 0)));    //retuns false

//reduce method
let numArray = [1,2,3,4];
let finalVal = numArray.reduce((res,el) => {
    console.log(res);
    return res+el;
});
console.log("final value: ", finalVal);

//Finding Maximum using Reduce method

let Arraynums = [2,30,40,5,3,4,70,8,11,10,2];

let results = Arraynums.reduce((max,el) => {
    if(el >  max) {
        return el;
    } else {
        return max;
    }
});

console.log(results);

//Practice Qs - Check if all numbers are multiples of 10 or not
let ans1 = Arraynums.every((el) => el % 10);
console.log(ans1);     //false

//Qs - create a function to find minimum number in a array
function getMin(Arraynums){
    let min = Arraynums.reduce((min,el) => {
        if(min < el){
            return min;
        } else {
            return el;
        }
    });
    return min;
}

console.log(getMin(Arraynums));

//Default Parameters
function sum(a, b=2){
    return a+b;
}
console.log(sum(3));

function sum1(a=1,b){
    return a+b;
}
console.log(sum1(3,5));   //8
console.log(sum1(2));   //a = 2 and b is undefined  
//therefore gives NaN

//Spead Method
let arr1 = [3,1,7,4,2,5,9,6];
console.log(Math.min(...arr1));   //1

//Spread with array literals
let chars = [... "hello"];
console.log(chars);  //['h','e','l','l','o']

let arr2 = [1,2,3,4,5];
let newArr2 = [...arr2];
console.log(newArr2);

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];
let numbers = [...even, ...odd];
console.log(numbers);

//spread with object literals
const data = {
    email: "ironman@gmail.com",
    password: "abcd",
};
const datacopy = {...data, id: 123};
console.log(datacopy);

let ar = [1,2,3,4,5];   //val
let obj = {... arr};   //obj -> key:val
console.log(obj);      //{0: 1, 1: 2, 2: 3, 3: 4, 4: 5}
let obj2={..."hello"};
console.log(obj2);      //{0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}

//REST
function sumrest(...args){
    //arguments
    for(let i = 0; i < args.length; i++){
        console.log("You gave us: ", args[i]);
    }
}
console.log(sumrest(1));
console.log(sumrest(1,2));
console.log(sumrest(1,2,3,4));

function min_1(){
    console.log(arguments);
    console.log(arguments.length);
    //arguments.push(5);   
    //gives error as arguments are a collection but not an array
}
console.log(min_1(1,2,3,4));

//REST
function sum_REST(...args){
    return args.reduce((sum,el) => sum + el);
}
console.log(sum_REST(2,4,1,3));

function min_REST(msg,...args){        //(...args, msg) -> gives error
    console.log(msg);
    return args.reduce((min,el) => {
        if(min > el){
            return el;
        } else{
            return min;
        }
    })
}

console.log(min_REST(1,5,3,7,9,0));   //1 is taken as msg 

//Destructuring
let names = ['tony','bruce','steve','peter'];
// let winner1 = names[0];
// let runnerUp = names[1];
// let secondrunnerup = names[2];
//other way
//let [winner, runnerup] = names;

let [winner,runnerup, ...others] = names;
console.log(winner,runnerup);   //tony bruce
console.log(winner);            //tony
console.log(winner,runnerup, ...others);    //tony bruce steve peter

//with objects
const student_1 = {
    name: "Aswini Mitikiri",
    age: 21,
    class: 16,
    subjects: ["OS","DSA","DBMS","CN"],
    username: "Aswini@123",
    password: "abcd",
};

// let username = student_1.username;
// let password = student_1.username;
//difficult if there are many object variables

let {username,password} = student_1;
console.log(username,password);      //use same variable names otherwise it iwll be undefined
let {name: firstname, age} = student_1; //to store name in other variable=firstname
console.log(firstname);    //now can not access name with name variable as it is assigned to firstname

let {class: year_of_study, city: place = "Mumbai"} = student_1;