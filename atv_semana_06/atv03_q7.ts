class Produto {
    codigo: number;
    descricao: String;
    valor: number;
    quantidade: number = 0;
    quantidade_min: number;

    constructor(codigo: number, descricao: string, valor: number, quantidade_min: number) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.valor = valor;
        this.quantidade_min = quantidade_min;
    }

    repor(adicao: number): boolean {
        if (this.quantidade + adicao < this.quantidade_min) {
            console.log("Quantidade do produto abaixo do mínimo, não pode adicionar esse valor.")
            return false;
        } else {
            this.quantidade += adicao;
        }
    }

    baixar(remocao: number): boolean {
        if (this.quantidade - remocao < this.quantidade_min) {
            console.log("Quantidade do produto abaixo do mínimo, não pode baixar esse valor.")
            return false;
        } else {
            this.quantidade -= remocao;
        }
    }
    //reajusta em porcentagem o valor do produto
    reajusta(taxa: number) {
        this.valor = this.valor * (taxa / 100);
    }

    toString(): String {
        return "Código: " + this.codigo + "\nDescrição: " + this.descricao + "\nValor da unidade: " + this.valor
            + "\nQuantidade: " + this.quantidade + "\nQuantidade mínima: " + this.quantidade_min;
    }
    // verificar se outro produto tem o mesmo código desse
    equals(produto: Produto): boolean {
        if (produto.codigo == this.codigo) {
            return true;
        } else { return false }
    }
}
let pato: Produto = new Produto(1, "pato de borracha", 10, 5);
let galo: Produto = new Produto(2, "galo de borracha", 25, 10);
pato.repor(10);
pato.baixar(5);
pato.reajusta(150);
console.log("Pato e galo tem o mesmo codigo?: ", pato.equals(galo));
console.log(pato.toString());
