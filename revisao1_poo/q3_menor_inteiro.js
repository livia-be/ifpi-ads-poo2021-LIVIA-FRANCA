const prompt = require('prompt-sync')();

function main() {
    var n1 = Number(prompt('Digite o valor 1: '))
    var menor = n1
    var n2 = Number(prompt('Digite o valor 2: '))
    if (n2 < menor) {
        menor = n2
    }
    var n3 = Number(prompt('Digite o valor 3: '))
    if (n3 < menor) {
        menor = n3
    }

    if (n1 == n2 && n1 == n3) {
        console.log('Os tres numeros sao iguais')
    } else {
        console.log('Menor: ', menor)
    }
}
main()