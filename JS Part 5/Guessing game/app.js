const max = prompt("Enter the max Number");


const random = Math.floor(Math.random() * max) + 1;  //as we have the range till max number
//console.log(random);

let guess = prompt("Guess the Number");

while(true){
    if(guess == "quit"){
        console.log("User Quits");
        break;
    }

    if(guess == random){
        console.log(`You are right! Congratulations! random numbers was ${random}`);
        break;
    } 
    else if (guess < random){
        guess = prompt("hint: Your guess was too small. please try again");
    } else {
        guess = prompt("hint: Your guess was too large. Please try again");
    }
}