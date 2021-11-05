export function randomChoice(arr) {
    let choiceValue = arr[Math.floor(arr.length * Math.random())];
    return choiceValue
}

export function decreeWinner(valueCpu, valuePlayer, arr) {
    if (valueCpu === valuePlayer) {
        return 'Pareggio'
    }
    if ((valueCpu === arr[0] && valuePlayer === arr[2]) || (valueCpu === arr[1] && valuePlayer === arr[0]) || (valueCpu === arr[2] && valuePlayer === arr[1])) {
        return "CPU"
    }
    else {
        return "Player"
    }
}