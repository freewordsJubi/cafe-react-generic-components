import React from "react"

const utilsGeneric = {
    randomChoice: (arr) => {
        let choiceValue = arr[Math.floor(arr.length * Math.random())];
        return choiceValue
    },
    decreeWinner:(valueCpu,valuePlayer)=>{
        if (valueCpu === valuePlayer) {
            return 'Pareggio'
        }
        if ((valueCpu === 'ROCK' && valuePlayer === 'SCISSOR') || (valueCpu === 'PAPER' && valuePlayer === 'ROCK') || (valueCpu === 'SCISSOR' && valuePlayer === 'PAPER')) {
            return "CPU"
        }
        else {
            return "Player"
        }
    },
}
export default utilsGeneric