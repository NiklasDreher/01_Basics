let number1 = parseInt(prompt("Gib die erste Zahl ein!"))
let number2 = parseInt(prompt("Gib die Zweite Zahl ein!"))


let selection = parseInt(prompt("1 add, 2 subtract"))

let result

if(selection == 1){
    result = number1 + number2
} else if(selection == 2){
    result = number1 - number2
}

console.log(result)