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

class Poupanca extends Conta {
    private _taxaJuros: number;
    public renderJuros(): void {
        this.depositar(this.getSaldo() * this._taxaJuros / 100);
    }

    getTaxaJuros(): number {
        return this._taxaJuros
    }

    constructor(numero: string, saldo: number,
        taxaJuros: number) {
        super(numero, saldo); // super é o constructor do objeto a qual foi herdado
        this._taxaJuros = taxaJuros;
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

    renderJuros(numero: string): void {
        if (this.contas[this.consultarPorIndice(numero)] instanceof Poupanca) {
            let poupanca: Poupanca = <Poupanca>this.contas[this.consultarPorIndice(numero)];
            poupanca.renderJuros();
        } else { console.log("A conta de numero", numero, "não é poupança"); return; }
    }
}

let banco: Banco = new Banco;
let c1: Conta = new Conta("1", 1000);
banco.inserir(c1);

let c2: Conta = new Poupanca("2", 100, 50)
banco.inserir(c2);
banco.renderJuros("2")
console.log(c2.getSaldo())

banco.renderJuros("1")






