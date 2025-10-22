function main() {
    
    let age

    age = parseInt(prompt("How old are you"))

    if (age < 17) {
        console.log("You are young")
    } else if(age < 51){
        console.log("you are middleaged")
    } else if(age > 50){
        console.log("You are old")
    }
}

main()