let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;


    // UI Elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;


// listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    // validate

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

// check if won
    if (guess === winningNum) {
        Gameover(true, `Congratulation!! ${winningNum} is correct, YOU WIN`, 'green');

    } else {

        guessesLeft -= 1;
        if ( guessesLeft=== 0) {
          
            Gameover(false, `Sorry!! YOU LOST, the correct number was ${winningNum}`, 'red');

        } else {
            // clear input
            guessInput.value = '';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
})


// Gameover function
function Gameover(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    // disable input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = color;
    // set text color
    message.style.color = color;

    setMessage(msg);

    // Play Again
    guessBtn.value = 'Play Again'
    guessBtn.className += "play-again"
}

// play again eventlistener
game.addEventListener('mousedown', function (e) {
        if (e.target.className === 'play-again') {
            window.location.reload();
        }
    })


function getRandomNum(min, max){
    return Math.floor(Math.random() * (max-min+1)+ min);

    }
 
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
    }
