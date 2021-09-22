const prompt = require('prompt-sync')();

function main() {
    let str = prompt("Escreva a string: ")

    let str2
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            str2 = str.replace(str[i], '')
            str = str2
        }
    }
    console.log(str2)
}
main()