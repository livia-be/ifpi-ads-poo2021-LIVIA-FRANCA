/**Escreva um programa para converter de dólar para real e exibir para o usuário a
resposta final. */
const prompt = require('prompt-sync')();

function main() {
    vDolar = 5.38
    console.log('Valor do dolar: ', vDolar)

    real = Number(prompt('Valor em dolar: '))
    console.log('Valor convertido para real: ', vDolar * real)
}
main()