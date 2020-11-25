// 1. Välkomna spelaren till spelet 
// 2. Ge användaren instruktioner om hur spelet går till
// 3. Slumpa ut ett ord till användaren av x antal möjliga
// 4. Användaren ska gissa bokstav
//     4a. Användaren har 9 försök på sig
//     4b. Gissar användaren rätt gissa nästa bokstav
//     4c. Gissar användaren fel förlora ett "liv"
// 5. Om användaren klara att gissa ordet skriv "You saved the man!"
// 6. Om användaren inte klarar att gissa ordet på 9 försök skriv "The man is now hanged!"
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let random = 

let tries = 9

console.log("Guess the correct word to save the man from being hanged")

rl.on('line', (input)=>{
    let answer = parseInt(input)
    tries--;

if (tries == 0) {
    console.log("The man is now hanged!")
    process.exit()
}

else if (answer == "correct word"){
    console.log("You saved the man!")
    process.exit()
}

else if (asnwer = "wrong letter") {
    console.log("Wrong letter, you know have one less try!")
    process.exit()
}

else if (answer = "Correct letter") {
    console.log("You guessed the correct letter, keep going!")
    process.exit()
}
})