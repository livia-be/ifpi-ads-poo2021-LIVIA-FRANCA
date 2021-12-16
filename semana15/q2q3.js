var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Calculadora = /** @class */ (function () {
    function Calculadora(op1, op2) {
        this.x = op1;
        this.y = op2;
    }
    Calculadora.prototype.getx = function () { return this.x; };
    Calculadora.prototype.setx = function (x) { this.x = x; };
    Calculadora.prototype.gety = function () { return this.y; };
    Calculadora.prototype.sety = function (y) { this.y = y; };
    Calculadora.prototype.somar = function () {
        return this.x + this.y;
    };
    Calculadora.prototype.multiplicar = function () {
        return this.x * this.y;
    };
    return Calculadora;
}());
var CalculadoraCientifica = /** @class */ (function (_super) {
    __extends(CalculadoraCientifica, _super);
    function CalculadoraCientifica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculadoraCientifica.prototype.exponenciar = function (x, y) {
        return Math.pow(x, y);
    };
    return CalculadoraCientifica;
}(Calculadora));
var calc = new CalculadoraCientifica(5, 5);
console.log("Soma:", calc.somar(), "\nMultiplicacao: ", calc.multiplicar());
console.log("exponenciar:", calc.exponenciar(10, 2));
//# sourceMappingURL=q2q3.js.map