function main(){
    let sum = "Deine Freunde sind: "
    let arr = []
    let lenghtOfArray = parseInt(prompt("Wie viele Freunde hast du? "))

    for(let i = 0; i < lenghtOfArray ; i++){

        arr.push(prompt(i  + 1 + " . Freund"))
    }

     if (lenghtOfArray == 0){
            sum = "Du hast keine Freunde"
        } 

    for(let i = 0; i < arr.length; i++){
        
        if (arr.length == 1){
            sum = "Dein Freund ist " + arr[0]
        } else if (i < arr.length -2){
            sum += arr[i] + ", "
        } else if( i < arr.length - 1){
            sum += arr[i] + " "
        } else{
            sum += "und " + arr[i]
        }
        

    }

    console.log(sum)
}

main()

