// Array of Programming Languages 
const programming_languages = ["python","c","javascript","php","swift","java","go","sql","ruby","kotlin","html","css"]

// Global Variables

let ans = "";
let mistakes = 0;
let maxWrong = 6;
let guessed = [];
let wrdStatus = null;

// Generate Random Word from Array

function randomWord() {
    ans = programming_languages[Math.floor(Math.random() * programming_languages.length)];
}

// Generate Keyboard Buttons

function generateButtons() {
    let btnsHTML = "abcdefghijklmnopqrstuvwxyz".split('').map(letter =>
        `
         <button 
            class ="btn btn-lg btn-primary m-2"
            id= '` + letter + `'
            onClick="handleGuess('` + letter + `')"
         >
            ` + letter + `
         </button>
         `).join(' ');

    document.querySelector('.keyboard').innerHTML = btnsHTML;
}



// Blank Spaces for the Letters

function guessWord(){
    wrdStatus = ans.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

     document.querySelector('.wordSpotlight').innerHTML = wrdStatus;
}

document.querySelector('#maxWrong').innerHTML = maxWrong;


randomWord();
generateButtons();
guessWord();