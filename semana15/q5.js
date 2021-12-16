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
var Produto = /** @class */ (function () {
    function Produto(id, descricao, quantidade, valor) {
        this.id = id;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    Produto.prototype.getid = function () { return this.id; };
    Produto.prototype.getDescricao = function () { return this.descricao; };
    Produto.prototype.repor = function (quantidade) {
        this.quantidade = this.quantidade + quantidade;
    };
    Produto.prototype.darBaixa = function (quantidade) {
        if (this.quantidade - quantidade >= 0)
            this.quantidade = this.quantidade - quantidade;
        else {
            console.log("Impossivel remover esta quantidade");
        }
    };
    return Produto;
}());
var ProdutoPerecivel = /** @class */ (function (_super) {
    __extends(ProdutoPerecivel, _super);
    function ProdutoPerecivel(id, descricao, quantidade, valor, dataValidade) {
        var _this = _super.call(this, id, descricao, quantidade, valor) || this;
        _this.dataAtual = new Date();
        _this.dataValidade = dataValidade;
        return _this;
    }
    ProdutoPerecivel.prototype.validade = function () { return (this.dataValidade > this.dataAtual); };
    ProdutoPerecivel.prototype.getValidade = function () { return this.dataValidade; };
    return ProdutoPerecivel;
}(Produto));
var Estoque = /** @class */ (function () {
    function Estoque() {
        this.produtos = [];
    }
    Estoque.prototype.inserir = function (produto) {
        if (this.pesquisar(produto.getid()) == -1) {
            this.produtos.push(produto);
            console.log("Produto", produto.getid(), "adicionado com sucesso.");
            return;
        }
        else {
            console.log("Impossível adicionar produto: código", produto.getid(), "já existente");
            return;
        }
    };
    Estoque.prototype.pesquisar = function (id) {
        var indice = -1;
        for (var i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].getid() == id) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Estoque.prototype.excluir = function (id) {
        var indice = this.pesquisar(id);
        for (var i = indice; i < this.produtos.length; i++) {
            this.produtos[i] = this.produtos[i + 1];
        }
        this.produtos.pop();
    };
    Estoque.prototype.listarVencidos = function () {
        var dataAtual = new Date(); // variavel com a data atual
        var prodVencidos = []; // vetor que vai conter os prods vencidos
        for (var i = 0; i < this.produtos.length; i++) { // for que percorre o array de produtos
            var prod = this.produtos[i]; // criando um produto normal, que vem do array de prods
            var prodp = prod; // acessando a parte "produtoPerecivel"
            if (dataAtual > prodp.getValidade()) // verificando se passou da validade
                prodVencidos.push(prodp); // se sim, adicionando ao vetor da linha 80
        }
        return prodVencidos; // retorna o vetor com os produtos vencidos
    };
    return Estoque;
}());
var estoque = new Estoque;
var p1 = new ProdutoPerecivel(1, "a", 10, 150, new Date("2025-01-16"));
var p2 = new ProdutoPerecivel(2, "a", 10, 150, new Date("2019-01-16"));
var p3 = new ProdutoPerecivel(3, "a", 10, 150, new Date("1956-01-16"));
estoque.inserir(p1);
estoque.inserir(p2);
estoque.inserir(p3);
console.log(estoque.listarVencidos());
//# sourceMappingURL=q5.js.map