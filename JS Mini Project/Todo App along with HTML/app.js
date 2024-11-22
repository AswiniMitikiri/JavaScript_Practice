let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let deletebtn = document.createElement("button");
    deletebtn.innerText = "delete"
    deletebtn.classList.add("delete");

    item.appendChild(deletebtn);

    ul.appendChild(item);
    //console.log(inp.value);
    inp.value = "";

})

ul.addEventListener("click", function(event){  //works on newly added ul-li-buttons as well
    //console.dir(event.target.nodeName); //tells which element event is triggered
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("delete")
    } //else{
    //     console.log("don't delete")
    // }
    //console.log("button clicked");
})

// let delbtns = document.querySelectorAll(".delete");
// for( delbtn of delbtns){
//     delbtn.addEventListener("click", function(){  
//         //eventListener do not implement on newly added elements
//         //so we implement eventListeners to the parent element using event bubbling
//         let par = this.parentElement;   //need to delete whole li(parent element of delete button)
//         console.log(par);
//         par.remove();
//     })
// }