let score = [0, 0]
let size = 6
let round = 0

console.log("Welcome to the dice Game")
let special = prompt("Do you want to play Special dice: y/n ")
if (special == "y") {
    size = parseInt(prompt("What dice size do you wnat to play with:"))
}

let bestOf = prompt("Do You want to play an best of 5: y/n ")


let bestYN = prompt
game()

function game() {
    round += 1
    prompt("Press enter to roll dice")


    function rollDice() {
        let number = Math.floor(Math.random() * size) + 1
        return (number)
    }


    let number = [rollDice(), rollDice()]

    let winner = ""

    if (number[0] > number[1]) {
        winner = "Player Won!"
        score[0]++
    } else if (number[0] < number[1]) {
        winner = "Computer Won!"
        score[1]++
    } else {
        winner = "Draw!"
    }



    console.log(winner + " Player: " + number[0] + " Computer: " + number[1])
    console.log("Score: Player = " + score[0] + " Computer = " + score[1])

    if (round >= 5 && bestOf == "y") {
        if (score[0] > score[1]) {
            console.log("Player Won the best of !")
        } else if (score[0] < score[1]) {
            console.log("Computer Won the best of!")
        } else {
            console.log("Best of resulted in an draw!")
        }
    } else if (bestOf == "y") {
        game()
    } else {
        let playAgain = prompt("Do you want to play again y/n :")
        if (playAgain == "y") {
            game()
        }
    }
}