// async function greet(){
//     throw "404 page not found";
//     return "Hello";
// }

// greet()
// .then((result) => {
//     console.log("Promise was resolved");
//     console.log("result was: ", result);
// })
// .catch((err) => {
//     console.log("promise was rejected with err: ", err);
// })

// let demo = async() => {
//     return 5;
// };

//await keyword - used to execute one after the other and works only for async functions
// function getNum(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000)
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
// }

//colorChange function
h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if(num > 3){
                reject("Promise rejected");
            }
            h1.style.color = color;
            console.log(`color Changes to ${color}!`);
            resolve("color Changed");
            //execute only if nextcolorChange value is true
        }, delay);   
    }) 
}

async function demo(){
    try{
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
    } catch(err){
        console.log("error caught");
        console.log(err);
    }
    let a = 5;
    console.log(a);
    console.log("new number = " , a + 3);
}


//JSON
let jsonRes = 
'{"fact":"A queen (female cat) can begin mating when she is between 5 and 9 months old.","length":77}';

console.log(jsonRes);
console.log(jsonRes.fact);   //undefined as we are dealing with json format not the JS Object

let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);

let student = {
    name: "Aswini",
    marks: 95,
};

let jsonConv = JSON.stringify(student);
console.log(jsonConv);   //converts JS object into json format


//fetch first request
//let url = "https://catfact.ninja/fact";     //check with wrong url as well to know how it works

// fetch(url)
// .then((res) =>{
//     //console.log(res);
//     return res.json();   //data becomes readable
// })
// .then((data) => {
//     console.log("data1 = ", data.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("data2 = ", data2.fact);
// })
// .catch((err) => {
//     console.log("Error - ", err);
// });

//usinf fetch with async - await
// async function getFacts() {
//     try{
//         let res = await fetch(url);    //as this async function, printing before fetching the api is not possible-so we get undefined  
//         let data = await res.json();
//         console.log(data.fact);        //so we use await
        
//         let res2 = await fetch(url);    //as this async function, printing before fetching the api is not possible-so we get undefined  
//         let data2 = await res2.json();
//         console.log(data2.fact); 
//     }
//     catch(e){
//         console.log("error - ", e);
//     }
//     console.log("bye");   //error doesn't let other code lines to stop
// }


//to show a cat fact on the web page with url
// let button = document.querySelector("button");
// button.addEventListener("click", async () => {
    
//     let fact = await getFacts();
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })

// //Axios
// async function getFacts() {
//     try{
//         let res = await axios.get(url);   
//         return res.data.fact;          
//     }
//     catch(e){
//         console.log("error - ", e);
//         return "No fact found";
//     }
// }



//Dog Image API
// let url2 = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button"); 

// btn.addEventListener("click", async () => {
//     let link = await getImage()
//     console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
// })

// async function getImage() {
//     try{
//         let res = await axios.get(url2);   
//         return res.data.message;         //message - image url   
//     }
//     catch(e){
//         console.log("error - ", e);
//         return "No image found";
//     }
// }




// const url3 = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try{
//         const config = {headers: {Accept: "application/json"} };
//         let res = await axios.get(url3, config);
//         console.log(res.data);   //gives in html format but we need in json format, so we use headers with API requests
//     } catch(err){
//         console.log(err);
//     }
// }


//for university api
let url4 = "http://universities.hipolabs.com/search?name=";

let button = document.querySelector("button");
button.addEventListener("click", async() => {
    let country = document.querySelector("input").value;
    console.log(country);
    let colArr = await getColleges(country);
    //console.log(colArr);
    show(colArr);
});

function show(colArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr){
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res3 = await axios.get(url4 + country);
        return res3.data;
    } catch (e) {
        console.log("error : ", e);
        return [];
    }
}

