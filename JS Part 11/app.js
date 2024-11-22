//Call Stack
function hello(){
    console.log("inside hello fnx");
    console.log("hello");
}

function demo(){
    console.log("calling hello fnx");
    hello();
}

console.log("calling demo fnx");
demo();
console.log("done, bye!");

//visualizing Call Stack
function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();


//JS Single threaded
// synchronous nature - executes each line at a time
// let a = 25;
// console.log(a);
// let b= 20;
// console.log(b);
// console.log(a+b);

//Browser which is written in C++ holds for the delay and executes other lines symultaneously but not the JS
setTimeout(() => {
    console.log("Apna College");
}, 2000);

console.log("hello...");



//callback nesting -> callback hell

h1 = document.querySelector("h1");

// function changeColor(color, delay, nextcolorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextcolorChange) nextcolorChange(); 
//         //execute only if nextcolorChange value is true
//     }, delay);   
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000, () => {
    
//                 })
//             })
//         })
//     })
// })

// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("green", 3000);


//with promises
function changeColor(color, delay){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color Changes to ${color}!`);
            resolve("color Changed");
            //execute only if nextcolorChange value is true
        }, delay);   
    }) 
}

let requestPromise = changeColor("red", 1000);
console.log(requestPromise);

//can change the callback hell of changeColor as well
changeColor("red", 1000)
.then(() => {
    console.log("red color was completed");
    return changeColor("orange", 1000);
})
.then(() => {
    console.log("orange color was completed");
    return changeColor("green", 1000);
})
.then(() => {
    console.log("green color was completed");
    return changeColor("blue", 1000);
})
.then(() => {
    console.log("blue color was completed");
    return changeColor("yellow", 1000);
})


//Setting up for promises
// function savetoDb(data, success, failure){
//     let internetSpped = Math.floor(Math.random() * 10) + 1;
//     if(internetSpped > 4){
//         success();
//     } else {
//         failure();
//     }
// }

//Asynchronous - dependent
// savetoDb(
//     "apna College", () => {
//         console.log("Success: Your data was saved");
//         savetoDb(   //save second data after successful 1st data saving
//             "Hello World", () => {
//                 console.log("Success2: data 2 was saved");
//                 savetoDb(   //save third data after successful 2nd data saving
//                     "Aswini", () => {
//                         console.log("Success3: data 3 was saved");
//                     }, () => {
//                         console.log("failure3: weak connection");
//                     }
//                 )
//             }, () => {
//                 console.log("failure2: weak connection");
//             }
//         )
//     }, 
//     () => {
//         console.log("failure: weak connection");
//     }
// )

function savetoDb(data){
    return new Promise((resolve, reject) => {
        let internetSpped = Math.floor(Math.random() * 10) + 1;
        if(internetSpped > 4){
            resolve("Succes: Data is saves");
        } else {
            reject("failure: Weak Connection");
        }
    });
}

//savetoDb("Apna College");  - use this in console

savetoDb("apna College")  //promise object
    .then((result) => {
        console.log("result: ", result);
        console.log("Data-1 saved. promise was resolved");
        //console.log(request);
        return savetoDb("Hello World")
    })
    .then((result) =>{
        console.log("result: ", result);
        console.log("Data-2 saved");
        return savetoDb("Aswini");
    })
    .then((result) =>{
        console.log("result: ", result);
        console.log("Data-3 saved");
    })
    .catch((error) => {
        console.log("error: ", error);
        console.log("promise rejected");
        //console.log(request);
    })