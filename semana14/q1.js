var Calculadora = /** @class */ (function () {
    function Calculadora(op1, op2) {
        this.x = op1;
        this.y = op2;
    }
    Calculadora.prototype.somar = function () {
        return this.x + this.y;
    };
    Calculadora.prototype.multiplicar = function () {
        return this.x * this.y;
    };
    return Calculadora;
}());
var calc = new Calculadora(5, 5);
console.log("Soma:", calc.somar(), "\nMultiplicacao: ", calc.multiplicar());
/**  não é possível acessar x e y diretamente, pois são privadas, para isso seriam necessários métodos que retornam
seus valores, como este:

getx(): number {
    return this.x
}
*/
//# sourceMappingURL=q1.js.map