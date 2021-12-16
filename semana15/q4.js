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
var Conta = /** @class */ (function () {
    function Conta(numero, saldoInicial) {
        this.numero = numero;
        this.saldo = saldoInicial;
    }
    Conta.prototype.getNumero = function () {
        return this.numero;
    };
    Conta.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Conta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.setSaldo = function (saldo) {
        this.saldo = saldo;
    };
    Conta.prototype.sacar = function (valor) {
        if (valor <= this.saldo)
            this.saldo = this.saldo - valor;
        else {
            console.log("Erro no saque: saldo insuficiente.");
        }
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    return Conta;
}());
var Poupanca = /** @class */ (function (_super) {
    __extends(Poupanca, _super);
    function Poupanca(numero, saldo, taxaJuros) {
        var _this = _super.call(this, numero, saldo) || this;
        _this._taxaJuros = taxaJuros;
        return _this;
    }
    Poupanca.prototype.renderJuros = function () {
        this.depositar(this.getSaldo() * this._taxaJuros / 100);
    };
    Poupanca.prototype.getTaxaJuros = function () {
        return this._taxaJuros;
    };
    return Poupanca;
}(Conta));
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
    }
    Banco.prototype.inserir = function (conta) {
        if (this.consultarPorIndice(conta.getNumero()) == -1)
            this.contas.push(conta);
    };
    Banco.prototype.consultar = function (numero) {
        var contaConsultada;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.getNumero() == numero) {
                contaConsultada = conta;
            }
            return contaConsultada;
        }
    };
    Banco.prototype.consultarPorIndice = function (numero) {
        var indice = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].getNumero() == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Banco.prototype.alterar = function (conta) {
        var indice = this.consultarPorIndice(conta.getNumero());
        if (indice != -1) {
            this.contas[indice] = conta;
        }
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultarPorIndice(numero);
        for (var i = indice; i < this.contas.length; i++) {
            this.contas[i] = this.contas[i + 1];
        }
        this.contas.pop();
    };
    Banco.prototype.depositar = function (numero, valor) {
        if (this.consultar(numero) != null)
            this.consultar(numero).depositar(valor);
    };
    Banco.prototype.sacar = function (numero, valor) {
        if (this.consultarPorIndice(numero) != null)
            this.contas[this.consultarPorIndice(numero)].sacar(valor);
    };
    Banco.prototype.transferir = function (numDeb, numCred, valor) {
        if (this.consultarPorIndice(numDeb) != -1 && this.consultarPorIndice(numCred) != -1) {
            var cDeb = this.contas[this.consultarPorIndice(numDeb)];
            var cCred = this.contas[this.consultarPorIndice(numCred)];
            cDeb.transferir(cCred, valor);
        }
    };
    Banco.prototype.quantContas = function () {
        return this.contas.length;
    };
    Banco.prototype.valorDeTodas = function () {
        var soma = 0;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            soma += conta.getSaldo();
        }
        return soma;
    };
    Banco.prototype.mediaDeTodas = function () {
        return this.valorDeTodas() / this.quantContas();
    };
    Banco.prototype.exibirTodasContas = function () {
        console.log(this.contas);
    };
    Banco.prototype.renderJuros = function (numero) {
        if (this.contas[this.consultarPorIndice(numero)] instanceof Poupanca) {
            var poupanca = this.contas[this.consultarPorIndice(numero)];
            poupanca.renderJuros();
        }
        else {
            console.log("A conta de numero", numero, "não é poupança");
            return;
        }
    };
    return Banco;
}());
var banco = new Banco;
var c1 = new Conta("1", 1000);
banco.inserir(c1);
var c2 = new Poupanca("2", 100, 50);
banco.inserir(c2);
banco.renderJuros("2");
console.log(c2.getSaldo());
banco.renderJuros("1");
//# sourceMappingURL=q4.js.map