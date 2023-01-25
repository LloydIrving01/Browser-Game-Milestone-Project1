// Array of Programming Languages 
// const programming_languages = ["python","c","javascript","php","swift","java","go","sql","ruby","kotlin","html","css"]
const nintendo_characters = ["mario", "luigi", "donkey kong", "yoshi", "bowser", "samus", "kirby", "ness", "link", "zelda"]

// Global Variables

let ans = "";
let mistakes = 0;
let maxWrong = 6;
let guessed = [];
let wrdStatus = null;

// Generate Random Word from Array

function randomWord() {
    // ans = programming_languages[Math.floor(Math.random() * programming_languages.length)];
    ans = nintendo_characters[Math.floor(Math.random() * nintendo_characters.length)];
}

// Generate Keyboard Buttons
function generateButtons() {
    let btnsHTML = "abcdefghijklmnopqrstuvwxyz".split('').map(letter =>
        `
         <button 
            class ="btn-lg"
            id= '` + letter + `'
            onClick="handleGuess('` + letter + `')"
         >
            ` + letter + `
         </button>
         `).join(' ');

    document.querySelector('.keyboard').innerHTML = btnsHTML;
}

// Letter Guesses
function handleGuess(chosenLetter){
    guessed.indexOf(chosenLetter) ===-1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);

    //alert(ans);

    if (ans.indexOf(chosenLetter) >=0) {
        guessWord();
        wordGuessed();
    } else if (ans.indexOf(chosenLetter) === -1) {
        mistakes++;
        updateMistakes();
        gameLost();
        updateHangmanPic();
    }
}


// Blank Spaces for the Letters
function guessWord(){
    wrdStatus = ans.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

     document.querySelector('.wordSpotlight').innerHTML = wrdStatus;
}

// Update Mistakes When Wrong Letter is Guessed
function updateMistakes() {
    document.querySelector("#mistakes").innerHTML = mistakes;
}

// Word is Guessed
function wordGuessed() {
    if(wrdStatus === ans) {
        document.querySelector('.keyboard').innerHTML = "Congratulations! You Won!";
    }
}

// Lost the Game
function gameLost() {
    if(mistakes === maxWrong) {
        document.querySelector('.wordSpotlight').innerHTML = "The word was: " + ans;
        document.querySelector('.keyboard').innerHTML = "You Lost!!";
    }
}

// Update Hangman Pic
function updateHangmanPic() {
    document.querySelector('.hangman-pic').src="./assets/"+ mistakes + ".png";
}

// Reset
function reset() {
    mistakes = 0;
    guessed = [];
    document.querySelector('.hangman-pic').src='./assets/h-0.png';

    randomWord();
    guessWord();
    updateMistakes();
    generateButtons();
}

document.querySelector('#maxWrong').innerHTML = maxWrong;


randomWord();
generateButtons();
guessWord();