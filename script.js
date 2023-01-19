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
    alert(ans);
}


randomWord();