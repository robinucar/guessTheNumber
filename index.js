let guessCount = 0;
const randommNumber = Math.floor(Math.random() * 100 + 1);
console.log(randommNumber);

document.querySelector('#check_it').addEventListener('click', checkNumber);

function checkNumber() {
  let userInput = document.querySelector('#nr_game');
  let answer = document.querySelector('#answer');

  if (userInput.value == randommNumber) {
    alert('You are the winner!');
  } else if (userInput.value == '') {
    answer.innerText = 'Enter a number!';
  } else if (userInput.value > randommNumber) {
    guessCount++;
    document.querySelector(
      '#count_it'
    ).innerText = `Guess count is: ${guessCount}`;
    answer.innerText = 'Try a smaller number!';
  } else if (userInput.value < randommNumber) {
    guessCount++;
    document.querySelector(
      '#count_it'
    ).innerText = `Guess count is: ${guessCount}`;
    answer.innerText = 'Try a bigger number!';
  } else if (isNaN(userInput.value)) {
    answer.innerText = 'Your guess is not a number!';
  }
}
