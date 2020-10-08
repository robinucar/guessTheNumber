let guessCount = 0;
let randommNumber = Math.floor(Math.random() * 100 + 1);
console.log(randommNumber);

document.querySelector('#check_it').addEventListener('click', checkNumber);

document.querySelector('#nr_game').addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    checkNumber();
  }
});

function checkNumber() {
  let userInput = document.querySelector('#nr_game');
  let answer = document.querySelector('#answer');
  let guessElement = document.querySelector('#count_it')

  if (userInput.value == randommNumber) {
    alert('You are the winner! Guess Time: ' + ++guessCount);

    const choice = confirm('Game again?');
    if (choice) {
      guessCount = 0;
      randommNumber = Math.floor(Math.random() * 100 + 1);
      answer.innerText = '';
      guessElement.innerText = '';

    } else {
      alert('Thanks for gaming!');
      answer.innerText = 'Best Guess time:' + guessCount;
      guessElement.innerText = "";
    }
  } else if (userInput.value == '') {
    answer.innerText = 'Enter a number!';
  } else if (userInput.value > randommNumber) {
    guessCount++;
    guessElement.innerText = `Guess count is: ${guessCount}`;
    answer.innerText = 'Try a smaller number!';
  } else if (userInput.value < randommNumber) {
    guessCount++;
    guessElement.innerText = `Guess count is: ${guessCount}`;
    answer.innerText = 'Try a bigger number!';
  } else if (isNaN(userInput.value)) {
    answer.innerText = 'Your guess is not a number!';
  }

  userInput.focus();
  userInput.value = '';
}
