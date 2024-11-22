//1st Qs
let para1 = document.createElement("p");
para1.innerText = "Hey, I'm red!";
document.querySelector("body").append(para1);

//adding red class to para1
para1.classList.add("red");
  
//2rd QS
let h3 = document.createElement("h3");
h3.innerText = "Hey, I'm blue h3!";
document.querySelector("body").append(h3);

//adding red class to h3
h3.classList.add("blue");

//3rd Qs
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("para2");

h1.innerText = "I'm in a div";
para2.innerText = "Me Too!";

div.append(h1);
div.append(para2);

div.classList.add("box");

document.querySelector("body").append(div);

//Assignment Question
//Qs1 - Create a new input and button element on the page using JavaScript only. Set the text of button to "Click me".
let input = document.createElement("input");
let button = document.createElement("button");

button.innerText = "Click Me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

//Qs2 - change placeholder of the input to "username" and id of the button to "btn"
button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

//Qs3 - Access the btn using the querySelector and button id. 
//Change the button background color to blue and text color to white
let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

//Qs4 - Create an h1 element on the page and set its text to "DOM Practice" underlined.
//Change its color to purple
let newh1 = document.createElement("h1");
newh1.innerHTML = "<u>DOM Practice</u>"
document.querySelector("body").append(newh1);

//Qs5 - Create a p tag on the page and set its text to "Apna College Delta Practice", where Delta is bold
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);