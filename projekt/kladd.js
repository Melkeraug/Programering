const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//ordlista med ord som ska slumpas ut
const wordlist = ["porsche", "snus", "fotboll", "discord"];

var randomWord = wordlist[Math.floor(Math.random() * wordlist.length)];

//denna visar din framgång i spelet
const progress = []

for (let i = 0; i < randomWord.length; i++) {
    progress.push("_");
}

//försöken du har på dig i en loop
var tries = 8

//variabel och for loop som visar om du har gissat rätt eller fel ord och därefter sätter ut rätt bokstav på rätt poistion i ordet
rl.on("line", (input) => {
    var notCorrect = true
    for (let i = 0; i < randomWord.length; i++) {
        if (input === randomWord[i]) {
            notCorrect = false;
            progress[i] = randomWord[i];
        }
    }
    if(notCorrect) { // if sats som loggar om du har gissat rätt eller fel, om du gissar fel skriver den ut dina försök som du har kvar
        tries--;
        console.log("Wrong guess stupid")
        console.log("You have: " + tries + " left");
    }   else {
        console.log("Du gissade rätt");
        console.log(progress);
    }
//if satser som loggar om du vann/förlora
    if (progress.join("") === randomWord) { //du vann spelet!
        console.log("You win!");
        process.exit();
    } 

    if(tries == 0){ // du förlora!
        console.log("Game over:");
        console.log("The correct was: " +randomWord);
        process.exit();
    }
});