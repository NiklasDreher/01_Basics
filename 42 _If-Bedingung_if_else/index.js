function main() {
    let randomNumber = Math.floor(Math.random() * 10)
    if (randomNumber < 5) {
        console.log("The number is less than 5")
    } else if (randomNumber > 5) {
        console.log("The number is greater than 5")
    } else {
        console.log("The number is exactly 5")
    }
}

main()