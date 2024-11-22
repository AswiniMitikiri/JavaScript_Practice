//object literals
const student = {
    name: "Aswini",
    age: 21,
    marks: 94.4,
    city: "Kurnool"
}

console.log(student);

const item= {
    price: 100,
    discount: 50,
    colors: ["red", "pink"]
}

//Thread / Twitter post

const post = {
    username: "@AswiniMitikiri",
    content: "This is my #firstPost",
    likes: 150,
    reposts: 5,
    tags: ["@aswini_mitikiri", "@karthik_mitikiri"]
}

//get values
console.log(student["name"]);
console.log(student.age);
let prop = "reposts";
console.log(post[prop]);   //5
console.log(post.prop);   //can't access

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
}

//add/update value
//use student object

student.city = "Mumbai";
console.log(student);

student.gender = "female";
console.log(student.gender);
console.log(student);

student.marks = [99,89,74];
console.log(student.marks);
console.log(student);

//delete
delete student.marks;
console.log(student);

//nested objects
const classInfo = {
    Aswini : {
        grade: "A+",
        city: "Kurnool"
    },
    karthik: {
        grade: "A",
        city: "Bangalore"
    },
    Deeku: {
        grade: "O",
        city: "Amaravati"
    }
}
console.log(classInfo);

//Array of objects
const classInformation = [
    {
        name: "Aswini",
        grade: "A+",
        city: "Kurnool"
    },
    {
        name: "Karthik",
        grade: "A",
        city: "Bangalore"
    }, 
    {
        name: "Deeku",
        grade: "O",
        city: "Amaravati"
    }
]

console.log(classInformation);
console.log(classInfo[0]);
console.log(classInformation[1].city);
classInformation[0].gender = "female";
console.log(classInformation);

//Math Object
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(12));
console.log(Math.abs(-12.5)); //12
console.log(Math.pow(2,5));    
console.log(Math.floor(5.999));  //5    //gives nearest small integer value
console.log(Math.floor(-5.999));  // -6  //give small value
console.log(Math.ceil(5.4));   //6   //gives nearest and largest value
console.log(Math.ceil(-5.5));   //-5
console.log(Math.random());   //gives a number between 0 and 1 but never gives 1


//random Integer
let step1 = Math.random();
console.log(step1);
let step2 = step1 * 10;
let step3 = Math.floor(step2);
console.log(step3);

let random = Math.floor(Math.random() * 10) + 1;
console.log(random);

//generate random numbers between 1 to 100
console.log(Math.floor(Math.random() * 100) + 1);
//generate random numbers between 1 to 5
console.log(Math.floor(Math.random() * 5) + 1);

//generate random numbers between 21 to 25
console.log(Math.floor(Math.random() * 5) + 21);

