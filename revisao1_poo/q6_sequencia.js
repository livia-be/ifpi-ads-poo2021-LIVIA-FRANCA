const prompt = require('prompt-sync')();

function main() {
    var num, soma = 0, media, i = 0
    do {
        num = Number(prompt(': '))
        if (num != -1) {
            soma += num
            i++
        }
    } while (num != -1)

    media = soma / i

    console.log('Soma: ', soma, '\nMedia: ', media)
}
main()