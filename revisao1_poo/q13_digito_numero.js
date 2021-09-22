const prompt = require('prompt-sync')();

function main() {
    let num = prompt('Digite um numero: '), dig
    let cont = 0
    do {
        dig = prompt('Digite um digito de 0 a 9: ')
    } while (dig < 0 || dig > 9)

    for (let i = 0; i < num.length; i++) {
        if (num[i] == dig) {
            cont++
        }
    }

    console.log("Quantidade de digitos", dig, ":", cont)
}
main()