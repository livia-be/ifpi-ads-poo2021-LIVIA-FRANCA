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
    return Banco;
}());
var banco = new Banco;
var c1 = new Conta("1", 1000);
banco.inserir(c1);
var c2 = new Conta("2", 2000);
banco.inserir(c2);
console.log("Saldo da conta 1:", c1.getSaldo());
c1.sacar(500);
console.log("Novo saldo da conta 1:", c1.getSaldo());
console.log("Saldo da conta 1:", c1.getSaldo());
console.log("Saldo da conta 2:", c2.getSaldo());
console.log("Transferindo 50 da c1 pra c2");
banco.transferir("1", "2", 50);
console.log("Saldo da conta 1:", c1.getSaldo());
console.log("Saldo da conta 2:", c2.getSaldo());
console.log("Depositando 5000 na conta 1:");
banco.depositar("1", 5000);
console.log("Saldo da conta 1:", c1.getSaldo());
console.log("Sacando 350 da conta 2:");
banco.sacar("2", 350);
console.log("Saldo da conta 2:", c2.getSaldo());
console.log("Média de todas as contas:", banco.mediaDeTodas());
//# sourceMappingURL=q3_banco.js.map