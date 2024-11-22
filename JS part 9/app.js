//changes the images with spiderman(1st) image through src
// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i < smallImages.length; i++){
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`Value of image no. ${i} is changed`);
// }


//getElementById
let imgobj = document.getElementById("mainImg");
console.dir(imgobj);
console.dir(imgobj.src);
console.dir(imgobj.tagName);

//getElementByClassName
console.dir(document.getElementsByClassName("oldImg"));
console.dir(document.getElementsByClassName("oldImg")[0]);
console.dir(document.getElementsByClassName("oldImg")[1]);

//getElementByTagName
console.dir(document.getElementsByTagName("p"));
//console.dir(document.getElementsByTagName("p")[1].innerText = "abc");  //changes the text inn innerText tag
console.dir(document.getElementsByTagName("span"));  //returns empty HTMLCollection

//qeury selectors
console.dir(document.querySelector("h1")); //selects first p tag
console.dir(document.querySelector("#description"));   //selects first id
console.dir(document.querySelector(".oldImg"));     //selects first class
//nested query selector
console.dir(document.querySelectorAll("div a"));  //selects all anchor tags inside div tag


//Setting content in objects
let para = document.querySelector("p");
console.log(para);
console.dir(para);
console.log(para.innerText);     //shows the visible text contained in a node
console.log(para.innerHTML);     // shows all the full text (hidden)
console.log(para.textContent);   //shows the full markup
//para.innerText = "abc";     //changes the text
let heading = document.querySelector("h1");
console.log(heading);
console.log(heading.innerHTML);
//heading.innerHTML="<u>Spider Man</u>"; //underlines the SpiderMan text in the web page


//Manipulating Attributes
let img = document.querySelector("img");
console.dir(img);
console.log(img.getAttribute("id"));
img.setAttribute("id", "spidermanImg");
console.log(img);
//img.setAttribute("src","assets/creation_3.jpeg");  //changes the src of the spiderman img to 3rd image
console.log(img.getAttribute("class")); //null as we dont have class for img
//img.setAttribute("class", "images");
//console.log(img.getAttribute("class")); //now we get images in the class attribute


//Manipulating Style
console.dir(img.style);
console.dir(heading.style);
heading.style.color = "purple"; //heading changes to purple color
//heading.style.backgroundColor = "yellow";
let links = document.querySelectorAll(".box a");
for(let i = 0; i < links.length; i++){
    links[i].style.color = "purple";        //sets in inline style but not in css file
}

//using classList
console.log(img.classList);  //checks classList of the img object
console.log(heading.classList);
heading.classList.add("green");
heading.classList.add("underline");
console.log(heading.classList);
//we can make changes in the web pages using classList in style file

console.log(heading.classList.remove("green"));   //to remove class

console.log(heading.classList.contains("green"))  //checks if the class exists
console.log(heading.classList);
console.log(heading.classList.toggle("green"));
console.log(heading.classList);

let box = document.querySelector(".box");
console.log(box.classList);
//box.classList.add("yellow");
//console.log(box.classList);


//Navigation
let h4 = document.querySelector("h4");
console.log(h4.parentElement);
console.log(h4.children);
console.log(box.children);
console.log(h4.childElementCount);

let ul = document.querySelector("ul");
console.log(ul.parentElement);
console.log(ul.childElementCount);
console.log(ul.children);

console.log(ul.children[0]);
console.log(ul.children[2].previousElementSibling);  //children[0]
console.log(ul.children[1].nextElementSibling);     //chilldren[2]
console.log(img.previousElementSibling);
img.previousElementSibling.style.color = "green"



//Adding Elements on Page
let newP = document.createElement("p");
console.dir(newP);
newP.innerText = "Hi, I am a new Paragraph";
console.dir(newP);
//newP does not add directly unless we append it with the parent tag. here - body
//appendChild(element) method
let body = document.querySelector("body");
body.appendChild(newP);     //added at the end of the webpage

//box.appendChild(newP);   //to append the paragraph in box classs

let btn = document.createElement("button");
console.dir(btn);
btn.innerText = "click me!";
box.appendChild(btn);  //button is added in box
box.appendChild(newP);
//append(element)
newP.append("This is a new Text");   //changes in the same element
newP.append(btn);
//prepend(element)
//insertAdjacent(where,element)

btn.innerHTML = "New Button!!";
let p1 = document.querySelector("p");
p1.insertAdjacentElement("beforebegin",btn);
p1.insertAdjacentElement("afterbegin",btn);
p1.insertAdjacentElement("beforeend",btn);
p1.insertAdjacentElement("afterend",btn);


//Removing elements
body.removeChild(btn);  //body is already created above
p1.insertAdjacentElement("afterend",btn);
btn.remove();