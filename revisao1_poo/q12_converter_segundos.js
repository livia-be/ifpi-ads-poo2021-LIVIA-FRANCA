const prompt = require('prompt-sync')();

function main() {
    let s = Number(prompt('Segundos: '))
    let convertido = converter(s)
    console.log(convertido)
}
main()

function converter(s) {
    let h = Math.floor(s / 3600)
    let m = Math.floor(s % 3600 / 60)
    let seg = Math.floor(s % 60)
    
    let str = h + ':' + m + ':' + seg;
    return str
}