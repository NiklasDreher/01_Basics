let arr = []
let sum = 0

for (let i = 0; i <= 6; i++) {
    arr.push(Math.floor(Math.random() * 100))
    sum = sum + arr[i]
}

sum = Math.floor(sum / 7)

console.log(sum)