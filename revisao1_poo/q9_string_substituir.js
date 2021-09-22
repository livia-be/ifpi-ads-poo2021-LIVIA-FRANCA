const prompt = require('prompt-sync')();

function main() {
    let str = prompt("Escreva a string: ")
    let a = prompt("Caractere A: ")
    let b = prompt("Caractere B: ")
    let str2
    for (let i = 0; i < str.length; i++) {
        str2 = str.replace(a, b)
        str = str2
    }
    console.log(str2)
}
main()