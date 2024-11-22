// let btn = document.querySelector("button");
// console.dir(btn);  
//btn.onclick gives null as the property is set to null initially

// btn.onclick = function() {
//     alert("button was clicked");
// }


//all buttons function same now
let btns = document.querySelectorAll("button");

for(btn of btns){
    // btn.onclick = sayHello;
    // btn.onclick = sayName;   //takes only one function
    // btn.onmouseenter = function () {
    //     console.log("you entered a button")
    // }
    //console.dir(btn);

    //addEventListener  - executes multiple functions - one after the other
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function(){   //works when you double click the button
        console.log("you double clicked me");
        console.log(this.innerText);   //this class the btn itself
    });
}

// function sayHello() {
//     alert("say Hello")
// }

// function sayName() {
//     alert("Apna College");
// } 


let p = document.querySelectorAll("p");  //selects only first p tag
for(p of p){
    p.addEventListener("click", function() {
        console.log("Para is clicked");
        console.log(this.innerText);
        this.style.backgroundColor = "pink";
    })    
}

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function(){
    console.log("mouse inside box");
})

//this in EventListeners -refers to the same element
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

h1.addEventListener("click", changeColor)

h3.addEventListener("click", changeColor);  //to remove redundancy-giving same code multiple times

function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "pink";
}


//Keyboard events
let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){   //event is default
    //console.log(event);
    //console.log("key = ", event.key);
    //console.log("Key was pressed");  //we can count how many keys are pressed
    console.log("code = ", event.code);  //ArrowUp(u), ArrowDown(d), ArrowRight(r), ArrowLeft(l)
    if(event.code == "ArrowUp"){    //can use keyU(alphabets) instead of arrows
        console.log("Character moves Up");
    } else if(event.code == "ArrowDown"){
        console.log("Character moves Down");
    } else if(event.code == "ArrowRight"){
        console.log("Character moves Right");
    } else if(event.code == "ArrowLeft"){
        console.log("Character moves Left");
    }
})

// inp.addEventListener("keyup", function(){
//     console.log("Key was pressed");  //we can count how many keys are pressed
// })

 let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    // //console.dir(form);   //can access individual elements in form object
    // //alert("form submitted");

    // // let user = document.querySelector("#user");
    // // let pass = document.querySelector("#pass");
    // let user = this.elements[0];  //form.elements[0]
    // let pass = this.elements[1];
    // //console.dir(user);
    // console.log(user.value);
    // console.log(pass.value);

    // alert(`Hi ${user.value}, your password is set to ${pass.value}`);
})

let user = document.querySelector("#user");

user.addEventListener("change", function() {  //change event tracks the initial and final change
    console.log("change event");
    console.log("final value = ", this.value);
})

user.addEventListener("input", function() {  //input event tracks the each and every input change
    console.log("input event");              //non charadcter keys(arrows, ctrl, shift) don't trigger the input key
    console.log("final value = ", this.value);
})

//Activity - Text Editor
// let inp = document.querySelector("#text");
// let p = document.querySelector("p");

// inp.addEventListener("input", function(){
//     console.log(inp.value);
//     p.innerText = inp.value;
// });