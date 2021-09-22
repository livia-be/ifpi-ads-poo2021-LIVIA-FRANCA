function exibir(...param: string[]) {
    console.log(param.join(', '))
}

exibir("a") 
exibir("a", "b")
exibir("a", "b", "c")
exibir("a", "b", "c", "d")