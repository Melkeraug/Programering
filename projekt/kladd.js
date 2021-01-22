const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const wordlist = ["porsche", "snus", "fotboll", "discord"];

var randomWord = wordlist[Math.floor(Math.random() * wordlist.length)];

const progress = []

for (let i = 0; i < randomWord.length; i++) {
    progress.push("_");
}

var tries = 8

rl.on("line", (input) => {
    var notCorrect = true
    for (let i = 0; i < randomWord.length; i++) {
        if (input === randomWord[i]) {
            notCorrect = false;
            progress[i] = randomWord[i];
        }
    }
    if(notCorrect) {
        tries--;
        console.log("Wrong guess stupid")
        console.log("You have: " + tries + " left");
    }   else {
        console.log("Du gissade rätt");
        console.log(progress);
    }

    if (progress.join("") === randomWord) {
        console.log("You win!");
        process.exit();
    } 

    if(tries == 0){
        console.log("Game over:");
        console.log("The correct was: " +randomWord);
        process.exit();
    }
});