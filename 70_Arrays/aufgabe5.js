let arr = [1, 2, 3, 9, 8, 2]
let largestNumber = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
        largestNumber = arr[i]
    }
}

console.log(largestNumber)  