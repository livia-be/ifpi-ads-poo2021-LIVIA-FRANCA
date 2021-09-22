const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let pares = array.filter(function (n) {
    if (n % 2 == 0) { return n }
})

console.log(pares)