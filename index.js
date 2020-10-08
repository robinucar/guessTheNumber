
const randommNumber = Math.floor(Math.random() * 100 + 1);
console.log(randommNumber);

document.querySelector("#check_it").addEventListener('click', checkNumber);

function checkNumber() {
 let userInput = document.querySelector("#nr_game");
 if (userInput.value == randommNumber) {
   alert("You are the winner!")
 } else {
   alert("You are wrong!")
 }
}