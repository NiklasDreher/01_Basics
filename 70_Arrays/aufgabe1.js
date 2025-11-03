function main(){
    let arr = [4, 1, 2, 3,]
    let sum = 0

    arr.push(17)
    arr.push(199)

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
        sum += arr[i]
    }
    console.log(sum)
    console.log(sum / arr.length)
}

main()