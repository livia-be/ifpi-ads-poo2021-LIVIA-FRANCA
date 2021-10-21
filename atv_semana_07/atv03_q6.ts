class Conta2 {
    numero: String;
    saldo: number;
    constructor(num: String, saldoInicial: number) {
        this.numero = num;
        this.saldo = saldoInicial;
    }
    sacar(valor: number): boolean {
        if (valor <= this.saldo) {
            this.saldo = this.saldo - valor;
            return true;
        } else {
            console.log("Não foi possível sacar ", valor, ", saldo é: ", this.saldo);
            return false;
        }
    }
    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo(): number {
        return this.saldo;
    }
    transferir(contaDestino: Conta, valor: number): boolean {
        if (this.sacar(valor) == false) {
            console.log("Falta de saldo para a transferência.")
            return false;
        }
        contaDestino.depositar(valor);
    }
}
let c11: Conta2 = new Conta2("1", 100);
let c22: Conta2 = new Conta2("2", 100);

c11.transferir(c22, 70);
c22.transferir(c11, 110);
c11.sacar(140);

//c11 = c22;
//c11.sacar(10); // operação acontece em ambas as contas
//c11.transferir(c22, 50); // transfere pra as duas pois são iguais
console.log("Saldo da conta 1: ", c11.saldo);
console.log("Saldo da conta 2: ", c22.saldo);