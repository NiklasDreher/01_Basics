function main() {

function trafficLight(x) {
let colour = x;

    if (colour == "green") {
        console.log("You may go");
    }
    if (colour == "yellow") {
        console.log("Caution!");
    }
    if (colour == "red") {
        console.log("Stop!");
    }
}

function randomLight() {
    let randomColour = "";
    
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber == 0) {
        randomColour = "green";
    }
    if (randomNumber == 1) {
        randomColour = "yellow";
    }
    if (randomNumber == 2) {
        randomColour = "red";
    }

    return randomColour;
}

trafficLight(randomLight())
}

main()
