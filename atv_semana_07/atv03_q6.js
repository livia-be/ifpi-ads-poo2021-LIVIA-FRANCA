var Conta2 = /** @class */ (function () {
    function Conta2(num, saldoInicial) {
        this.numero = num;
        this.saldo = saldoInicial;
    }
    Conta2.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo = this.saldo - valor;
            return true;
        }
        else {
            console.log("Não foi possível sacar ", valor, ", saldo é: ", this.saldo);
            return false;
        }
    };
    Conta2.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta2.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta2.prototype.transferir = function (contaDestino, valor) {
        if (this.sacar(valor) == false) {
            console.log("Falta de saldo para a transferência.");
            return false;
        }
        contaDestino.depositar(valor);
    };
    return Conta2;
}());
var c11 = new Conta2("1", 100);
var c22 = new Conta2("2", 100);
c11.transferir(c22, 70);
c22.transferir(c11, 110);
c11.sacar(140);
//c11 = c22;
//c11.sacar(10); // operação acontece em ambas as contas
//c11.transferir(c22, 50); // transfere pra as duas pois são iguais
console.log("Saldo da conta 1: ", c11.saldo);
console.log("Saldo da conta 2: ", c22.saldo);
//# sourceMappingURL=atv03_q6.js.map