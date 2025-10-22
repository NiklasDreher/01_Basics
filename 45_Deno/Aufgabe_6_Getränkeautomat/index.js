function main(){

    let selection = parseInt(prompt("Was für ein Getränk willst du: 1 Cola, 2 Bier, 3 Wasser, 4 Tee"))

    let drink

    if(selection == 1){
        drink = "Cola"
    } else if(selection == 2){
        drink = "Bier"
    } else if(selection == 3){
        drink = "Wasser"
    } else if(selection == 4){
        drink = "Tee"
    }

    console.log("Danke für deine Bestellung von " + drink)
}

main()