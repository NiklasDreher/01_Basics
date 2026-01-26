let score = [0, 0];
let round = 0;

console.log("Welcome to Rock, Paper, Sisccors");
game()

function game() {
    round += 1;
    let input = ""
    pick()
    function pick() {
        input = prompt("Rock(r) Paper(p) Scicors(s)")

        if (input == "r" || input == "p" || input == "s") {
            return;
        } else {
            console.log("Wrong Input");
            pick()
        }
    }

    function roll() {
        let robot = "";
        let random = Math.floor(Math.random() * 3)
        if (random == 0) {
            robot = "r";
        } else if (random == 1) {
            robot = "p";
        } else if (random == 2) {
            robot = "s";
        }
        return robot
    }
    let cpu = roll();

    let winner = ""
    if ((input == "r" && cpu == "s") || (input == "p" && cpu == "r") || (input == "s" && cpu == "p")) {
        winner = "player";
        score[0] += 1;
    } else if (cpu == input) {
        winner = "draw";
    } else {
        winner = "cpu";
        score[1] += 1;
    }


    if (winner == "player") {
        console.log("You won " + input + " beats " + cpu)
        console.log
    } else if (winner == "cpu") {
        console.log("You lost " + cpu + " beats " + input)
    } else {
        console.log("Draw")
    }
    console.log("Score: Player = " + score[0] + " Computer = " + score[1])


    let playAgain = prompt("Do you want to play again y/n :")
    if (playAgain == "n") {
        return;
    } else {
        game()
    }

}