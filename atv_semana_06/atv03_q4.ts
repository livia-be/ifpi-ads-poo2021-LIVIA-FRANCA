class Conta {
    numero: String;
    saldo: number;
    constructor(num: String, saldoInicial: number) {
        this.numero = num;
        this.saldo = saldoInicial;
    }
    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }
    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo(): number {
        return this.saldo;
    }
    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
let c1: Conta = new Conta("1", 100);
let c2: Conta = new Conta("2", 100);
c1 = c2;
c1.sacar(10); // operação acontece em ambas as contas
c1.transferir(c2, 50); // transfere pra as duas pois são iguais
console.log(c1.saldo);
console.log(c2.saldo); 
//O resultado é 90 nas duas.O conteúdo de c1 e c2 vão ser iguais, 
//por conta disso as operações vão acontecer em ambas