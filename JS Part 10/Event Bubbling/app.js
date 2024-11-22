let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function(){
    console.log("div was clicked");
});

ul.addEventListener("click", function(){
    event.stopPropagation();
    console.log("ul was clicked");   
    //when child element is clicked, 
    //automatically parent event is also evoked. this is called event bubbling
    //event.stopPropagation() stops event bubbling
});

for(li of lis) {
    li.addEventListener("click", function(){
        event.stopPropagation();   //stops event bubbling
        console.log("lis was clicked");
    });
}
