class Conta {
    private numero: string;
    private saldo: number;

    constructor(numero: string, saldoInicial: number) {
        this.numero = numero;
        this.saldo = saldoInicial;
    }

    getNumero(): string {
        return this.numero
    }

    setNumero(numero: string): void {
        this.numero = numero
    }

    getSaldo(): number {
        return this.saldo;
    }

    setSaldo(saldo: number): void {
        this.saldo = saldo;
    }

    sacar(valor: number): void {
        if (valor <= this.saldo)
            this.saldo = this.saldo - valor;
        else { console.log("Erro no saque: saldo insuficiente.") }
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

class Banco {

    private contas: Conta[] = [];

    inserir(conta: Conta): void {
        if (this.consultarPorIndice(conta.getNumero()) == -1)
            this.contas.push(conta);
    }

    consultar(numero: String): Conta {
        let contaConsultada: Conta;
        for (let conta of this.contas) {
            if (conta.getNumero() == numero) {
                contaConsultada = conta
            }
            return contaConsultada;
        }
    }

    private consultarPorIndice(numero: string): number {
        let indice: number = -1;
        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].getNumero() == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }

    alterar(conta: Conta): void {
        let indice: number = this.consultarPorIndice(conta.getNumero());
        if (indice != -1) {
            this.contas[indice] = conta;
        }
    }

    excluir(numero: string): void {
        let indice: number = this.consultarPorIndice(numero);

        for (let i: number = indice; i < this.contas.length; i++) {
            this.contas[i] = this.contas[i + 1];
        }
        this.contas.pop();
    }

    depositar(numero: string, valor: number): void {
        if (this.consultar(numero) != null)
            this.consultar(numero).depositar(valor);
    }

    sacar(numero: string, valor: number): void {
        if (this.consultarPorIndice(numero) != null)
            this.contas[this.consultarPorIndice(numero)].sacar(valor);
    }

    transferir(numDeb: string, numCred: string, valor: number): void { // debitar: - // creditar: +
        if (this.consultarPorIndice(numDeb) != -1 && this.consultarPorIndice(numCred) != -1) {
            var cDeb = this.contas[this.consultarPorIndice(numDeb)];
            var cCred = this.contas[this.consultarPorIndice(numCred)];
            cDeb.transferir(cCred, valor);
        }
    }

    quantContas(): number {
        return this.contas.length;
    }

    valorDeTodas(): number {
        var soma = 0;
        for (let conta of this.contas) {
            soma += conta.getSaldo();
        }
        return soma;
    }

    mediaDeTodas(): number {
        return this.valorDeTodas() / this.quantContas();
    }

    exibirTodasContas(): void {
        console.log(this.contas)
    }
}

let banco: Banco = new Banco;
let c1: Conta = new Conta("1", 1000);
banco.inserir(c1);
let c2: Conta = new Conta("2", 2000)
banco.inserir(c2);

console.log("Saldo da conta 1:", c1.getSaldo())
c1.sacar(500)
console.log("Novo saldo da conta 1:", c1.getSaldo())

console.log("Saldo da conta 1:", c1.getSaldo())
console.log("Saldo da conta 2:", c2.getSaldo())
console.log("Transferindo 50 da c1 pra c2")
banco.transferir("1", "2", 50);
console.log("Saldo da conta 1:", c1.getSaldo())
console.log("Saldo da conta 2:", c2.getSaldo())

console.log("Depositando 5000 na conta 1:")
banco.depositar("1", 5000)
console.log("Saldo da conta 1:", c1.getSaldo())

console.log("Sacando 350 da conta 2:")
banco.sacar("2", 350)
console.log("Saldo da conta 2:", c2.getSaldo())

console.log("Média de todas as contas:", banco.mediaDeTodas());





