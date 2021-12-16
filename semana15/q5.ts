class Produto {
    private id: number;
    private descricao: string;
    private quantidade: number;
    private valor: number;

    constructor(id: number, descricao: string, quantidade: number, valor: number) {
        this.id = id;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    getid(): number { return this.id }

    getDescricao(): string { return this.descricao }

    repor(quantidade: number): void {
        this.quantidade = this.quantidade + quantidade;
    }

    darBaixa(quantidade: number): void {
        if (this.quantidade - quantidade >= 0)
            this.quantidade = this.quantidade - quantidade;
        else {
            console.log("Impossivel remover esta quantidade")
        }
    }

}

class ProdutoPerecivel extends Produto {
    private dataValidade: Date;
    private dataAtual: Date = new Date()

    constructor(id: number, descricao: string, quantidade: number, valor: number, dataValidade: Date) {
        super(id, descricao, quantidade, valor)
        this.dataValidade = dataValidade
    }
    validade() { return (this.dataValidade > this.dataAtual) }
    getValidade() { return this.dataValidade }
}

class Estoque {
    private produtos: Produto[] = [];

    inserir(produto: Produto): void {
        if (this.pesquisar(produto.getid()) == -1) {
            this.produtos.push(produto);
            console.log("Produto", produto.getid(), "adicionado com sucesso.");
            return;
        }
        else {
            console.log("Impossível adicionar produto: código", produto.getid(), "já existente"); return;
        }
    }

    pesquisar(id: number): number {
        let indice: number = -1;
        for (let i: number = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].getid() == id) {
                indice = i;
                break;
            }
        }
        return indice;
    }

    excluir(id: number) {
        let indice: number = this.pesquisar(id);

        for (let i: number = indice; i < this.produtos.length; i++) {
            this.produtos[i] = this.produtos[i + 1];
        }
        this.produtos.pop();
    }

    listarVencidos(): Produto[] {
        let dataAtual: Date = new Date(); // variavel com a data atual
        let prodVencidos: Produto[] = []; // vetor que vai conter os prods vencidos
        for (let i = 0; i < this.produtos.length; i++) { // for que percorre o array de produtos
            let prod: Produto = this.produtos[i]; // criando um produto normal, que vem do array de prods
            let prodp: ProdutoPerecivel = <ProdutoPerecivel>prod; // acessando a parte "produtoPerecivel"
            if (dataAtual > prodp.getValidade()) // verificando se passou da validade
                prodVencidos.push(prodp); // se sim, adicionando ao vetor da linha 80
        } return prodVencidos; // retorna o vetor com os produtos vencidos
    }
}
let estoque: Estoque = new Estoque

let p1: Produto = new ProdutoPerecivel(1, "a", 10, 150, new Date("2025-01-16"))
let p2: Produto = new ProdutoPerecivel(2, "a", 10, 150, new Date("2019-01-16"))
let p3: Produto = new ProdutoPerecivel(3, "a", 10, 150, new Date("1956-01-16"))

estoque.inserir(p1)
estoque.inserir(p2)
estoque.inserir(p3)

console.log(estoque.listarVencidos())




