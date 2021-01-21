// 1. Välkomna spelaren till spelet 
// 2. Ge användaren instruktioner om hur spelet går till
// 3. Slumpa ut ett ord till användaren av x antal möjliga med hjälp av en array med ord och random.item, jag kommer även använda math.random som jag använde i guess the number uppgiften
// 4. Användaren ska gissa bokstav med hjälp av vilkor som if, else if och while
//     4a. Användaren har 9 försök på sig
//     4b. Ge använderna en hint om ordet efter 4 försök 
//     4c. Gissar användaren rätt gissa nästa bokstav
//     4d. Gissar användaren fel förlora ett "liv"
// 5. Om användaren klara att gissa ordet skriv "You saved the man!"
// 6. Om användaren inte klarar att gissa ordet på 9 försök skriv "The man is now hanged!"
// 7. Jag anväder mig av olika variabler var av den första gör en array där den lägger in bokstäver i de fyra orden jag har valt, t.ex "B", "O", "X", "I", "N", "G". Samt en variabel som heter random item som då har som uppift att slumpa ut ett av de orden jag har på min lista.
// 8. Jag behöver använda mig av vilkor som gör det möjligt för spelaren att gissa bokstäverna till ordet. Alltså om spelaren gissar rätt/fel ord, om spelaren ska få en hint om ordet och om spelaren har gissat rätt eller fel ord.
// 9. Jag ska göra funktioner som berättar följande: En console log som berättar hur spelat ska spelas och en funktion som slumpar ut ett av orden i listan. Även en funktion som tar bort ett försök varje gång spelaren gissar fel bokstav i ordet.
// 10. De variabler som behöver vara åtkomliga är framförallt "const readline" som alltid behöver kommas åt.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//This is the list of words and a variable that pics one of the words at random
var myArray =[ 
    ["B", "O", "X", "I", "N", "G"], 
    ["H", "O", "U", "S", "E"],
    ["G", "O", "O", "G", "L", "E"],
    ["S", "N", "U", "S"] 
]
var randomItem = ""
function GetRandomItem() {
   randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  
}



let tries = 9

console.log("Guess the correct word to save the man from being hanged")

rl.on('line', (input)=>{
    tries--;

if (tries == 9) {
    console.log("Let the game begin!")
    process.exit()
}

else if (tries == 6) {
    console.log("clue")
    process.exit()
}

else if (answer !== input) {
    console.log("Wrong letter, you know have one less try!")
    process.exit()
}

else if (answer = "Correct letter") {
    console.log("You guessed the correct letter, keep going!")
    process.exit()
}

else if (answer == randomItem){
    console.log("You saved the man!")
    process.exit()
}

else if (tries == 0) {
    console.log("You have lost the game")
    process.exit()
}
})