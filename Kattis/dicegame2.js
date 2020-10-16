const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const lines =[]

function code() {
    let side1 = Number(lines[0])
    let side2 = Number(lines[1])
    let side3 = Number(lines[2])
    let side4 = Number(lines[3])
    let side5 = Number(lines[4])
    let side6 = Number(lines[5])
    let side7 = Number(lines[6])
    let side8 = Number(lines[7])

    let result1 = ((side1 + side2)/2 + (side3 + side4)/2)
    let result2 = ((side5 + side6)/2 + (side7 + side8)/2)

    if(result1 < result2) {
        console.log("Gunnar Wins gg ez")
    }
    else if(result1 > result2) {
        console.log("Emma Wins pog ez")
    }
    else if(result1 == result2) {
        console.log("It's a tie")
    }
}

rl.on('line', (input) => {
    lines.push(input)
    if(lines.length == 8){
        code(); {
            rl.close()
        }
    }
})