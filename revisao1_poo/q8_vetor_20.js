const prompt = require('prompt-sync')();

function main() {
    var vet = []; var par = 0
    for (var i = 0; i < 20; i++) {
        vet[i] = Number(prompt('elemento : '))
        if (vet[i] % 2 == 0) {
            par++
        }
    }
    console.log(vet, "Pares: ", par)
}
main()