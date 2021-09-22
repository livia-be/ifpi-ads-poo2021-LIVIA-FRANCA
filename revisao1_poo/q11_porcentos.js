const prompt = require('prompt-sync')();

function main() {
 let p = Number(prompt('Porcentagem: '))
 let x = Number(prompt("De: "))

 let res = (p / 100) * x

 console.log(p, "% de", x, "é: ", res)

}
main()