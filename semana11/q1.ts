//questão 1
let num: number[] = [10, 5, 5];
let soma: number = 0;
for (let i: number = 0; i < num.length; i++) {
    soma += num[i];
}
console.log('soma dos elementos', soma)
//questão 2
let a: number[] = [1, 2, 3, 4, 5];
for (let i: number = 0; i <= a.length-1; i++) { //um loop for baseado na quantidade de elementos do array
    console.log(a[i]); // a cada iteração exibe o valor que está na posição
}

//questão 3
//Declare um array com 10 números e exiba-os em ordem crescente e em ordem
//decrescente.
let vetor: number[] = [8, 4, 0, 2, 6, 9, 3, 1, 7, 5]
console.log("Ordem crescente: ", bubbleSort_crescente(vetor))
console.log("Ordem decrescente: ", bubbleSort_decrescente(vetor))

//bubbleSort(vetor)

function bubbleSort_crescente(array: number[]): number[] {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {

            if (array[j] > array[j + 1]) {
                let swap = array[j]; 
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }
    }
    return array;
}

function bubbleSort_decrescente(array: number[]): number[] {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {

            if (array[j] < array[j + 1]) {
                let swap = array[j]; 
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }
    }
    return array;
}

//questão 4
//q.4- a)
let str: string = 'Instituto Federal do Piauí'
console.log(str.toUpperCase())
//q.4- b)
console.log("Caractere da posicao 10:", str[10])
//q.4- c)
console.log("Posicao do ultimo 'o':",str.lastIndexOf('o'));
//q.4- d)
console.log(str.split(" "))





