class Calculadora {
    private x: number;
    private y: number;

    constructor(op1: number, op2: number) {
        this.x = op1;
        this.y = op2;
    }

    somar(): number {
        return this.x + this.y;
    }

    multiplicar(): number {
        return this.x * this.y;
    }
}

let calc: Calculadora = new Calculadora(5, 5)
console.log("Soma:", calc.somar(), "\nMultiplicacao: ", calc.multiplicar())

/**  não é possível acessar x e y diretamente, pois são privadas, para isso seriam necessários métodos que retornam
seus valores, como este:

getx(): number {
    return this.x
}
*/
