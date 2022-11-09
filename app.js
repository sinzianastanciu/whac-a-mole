const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');

const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare() {
    squares.forEach((square) => {
        square.classList.remove('mole'); //removes a class name from the element
    })

    let randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    hitPosition = randomPosition.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => { 
        if(square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    
    if(currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        if (result) {
            alert('GAME OVER! Your final score is ' + result);
        }
        else {
            alert('GAME OVER! You lost!');
        }
        
    }
}

let countDownTimerId = setInterval(countDown, 1000);