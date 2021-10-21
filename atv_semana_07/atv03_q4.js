var Conta = /** @class */ (function () {
    function Conta(num, saldoInicial) {
        this.numero = num;
        this.saldo = saldoInicial;
    }
    Conta.prototype.sacar = function (valor) {
        this.saldo = this.saldo - valor;
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    return Conta;
}());
var c1 = new Conta("1", 100);
var c2 = new Conta("2", 100);
c1 = c2;
c1.sacar(10); // operação acontece em ambas as contas
c1.transferir(c2, 50); // transfere pra as duas pois são iguais
console.log(c1.saldo);
console.log(c2.saldo);
//O resultado é 90 nas duas.O conteúdo de c1 e c2 vão ser iguais, 
//por conta disso as operações vão acontecer em ambas
//# sourceMappingURL=atv03_q4.js.map