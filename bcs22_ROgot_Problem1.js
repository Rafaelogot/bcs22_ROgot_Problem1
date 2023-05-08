let guess = prompt("Enter a Number\n")
let ans = Math.floor(Math.random() * 100);
let tries = 0

while(guess != ans){

 if(guess > ans){
 guess = prompt("Too High! Guess again\n")
    tries += 1
 }else{

 guess = prompt("Too low! Guess again\n")
    tries += 1
}

if (guess == ans){
    tries += 1
    alert(`Congratulations! You have guessed the number with ${tries} tries!! which is ${ans}`);
    break;
 }if (tries >= 10){
    alert(`Game over! No more tries left! The correct answer is ${ans}`)
    break;

}

}