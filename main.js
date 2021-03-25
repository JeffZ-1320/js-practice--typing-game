
window.addEventListener('load', init);

const levels = {
    easy : 5,
    medium : 2,
    hard : 1
};
let currentLevel = levels.easy;
let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

function init(){
    seconds.innerHTML = currentLevel;
    randomWords(words);
    wordInput.addEventListener('input', startMatch);
    timeDisplay.innerHTML = time;
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
}

function randomWords(words){
    const randIndex = Math.floor(Math.random() * words.length);

    currentWord.innerHTML = words[randIndex];
}

function startMatch(){
    if(isWordMatch()){
        isPlaying = true;
        score++;
        setLevels();
        time = currentLevel + 1;
        randomWords(words);
        wordInput.value = '';

    }
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = score;
    }
}

function isWordMatch(){
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
      } else {
        return false;
      }
}


function countdown(){
    if(time > 0){
        time--;
    }else if(time === 0){
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

// check game status
function checkStatus(){
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!';
        score = -1;
    }
}

// sets the levels of difficulty based on your score
function setLevels(){
    if (score < 5) {
        currentLevel = levels.easy;
        seconds.innerHTML = currentLevel;
    } else if (score < 10) {
        currentLevel = levels.medium;
        seconds.innerHTML = currentLevel;
    }else {
        currentLevel = levels.hard;
        seconds.innerHTML = currentLevel;
    }
}