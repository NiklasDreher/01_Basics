function main() {
    
    let number

    number = parseInt(prompt("Choose a Number"))

    if (number > 0) {
        console.log("The number is positive")
    } else {
        console.log("The number is not positive")
    }

    if (number < 0) {
        console.log("The number is negative")
    } else {
        console.log("The number is positive or 0")
    }

    if (number ==   0) {
        console.log("The number is zero")
    } else {
        console.log("The number is not zero")
    }
}

main()
