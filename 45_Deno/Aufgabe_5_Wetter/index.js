function main() {
    
    let temperature

    temperature = parseInt(prompt("Whats the temperature?"))

    if (temperature < -16) {
        console.log("You should stay inside")
    } else if(temperature < 11){
        console.log("you should wear warm clothing")
    } else if(temperature < 29){
        console.log("You should go outside")
    } else if(temperature < 41){
        console.log("You should go swimming")
    } else {
        console.log("You should go inside an Coolbox")
    }

}

main()