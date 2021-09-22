const prompt = require('prompt-sync')();

function main() {
    var vet = []
    for (var i = 0; i < 5; i++) {
        vet[i] = Number(prompt('elemento : '))
    }

    console.log(vet)
}
main()