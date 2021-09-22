/*Escreva um programa que possua uma variável com um número inteiro e mostre seu
antecessor e sucessor.*/
const prompt = require('prompt-sync')();

function main() {

    const num = Number(prompt('insira um número: '))

    console.log('Numero: ', num, '\nAntecessor: ', num - 1, '\nSucessor: ', num + 1)

}
main()