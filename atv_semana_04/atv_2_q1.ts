function ehPar(n: number[]): boolean[] {
    return n.map(x => (x % 2) == 0)
}
console.log(ehPar([1, 2, 3, 4]))