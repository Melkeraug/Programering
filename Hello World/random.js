const { read } = require('fs')
const { listeners } = require('process')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let random = Math.floor(Math.random() * 10000) +1

let tries = 10

console.log("spela då din feta fkn griiiiiiiiiiiiiiis");

rl.on('line', (input)=>{
    let answer = parseInt(input)
    tries--;


if (tries == 0) {
    console.log("you lost fkn noob out played out skilled out matched")
    process.exit()
}

else if (answer == random) {
    console.log("u won only luck no skill lmao boosted")
    process.exit()
}

else if (answer > random){
    console.log("To high like my rank fkn retard get good")
}

else if(answer < random){
    console.log("To low just like your rank silver lmao xd :PpPpPpP")
}
})