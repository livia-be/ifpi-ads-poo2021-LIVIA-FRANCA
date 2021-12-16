class Calculadora {
    private x: number;
    private y: number;

    constructor(op1: number, op2: number) {
        this.x = op1;
        this.y = op2;
    }

    getx(): number { return this.x }

    setx(x: number): void { this.x = x; }

    gety(): number { return this.y }

    sety(y: number): void { this.y = y; }

    somar(): number {
        return this.x + this.y;
    }

    multiplicar(): number {
        return this.x * this.y;
    }
}

class CalculadoraCientifica extends Calculadora {

    exponenciar(x: number, y: number): number {
        return Math.pow(x, y);
    }
}

let calc: CalculadoraCientifica = new CalculadoraCientifica(5, 5);
console.log("Soma:", calc.somar(), "\nMultiplicacao: ", calc.multiplicar())
console.log("exponenciar:", calc.exponenciar(10, 2))