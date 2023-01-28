

function rollDice(numeroDeCaras){
    return Math.floor(Math.random()*numeroDeCaras)
}

for( let i=0; i < 10; i++){
    console.log(rollDice(12))
}
