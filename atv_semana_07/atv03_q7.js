var Produto = /** @class */ (function () {
    function Produto(codigo, descricao, valor, quantidade_min) {
        this.quantidade = 0;
        this.codigo = codigo;
        this.descricao = descricao;
        this.valor = valor;
        this.quantidade_min = quantidade_min;
    }
    Produto.prototype.repor = function (adicao) {
        if (this.quantidade + adicao < this.quantidade_min) {
            console.log("Quantidade do produto abaixo do mínimo, não pode adicionar esse valor.");
            return false;
        }
        else {
            this.quantidade += adicao;
        }
    };
    Produto.prototype.baixar = function (remocao) {
        if (this.quantidade - remocao < this.quantidade_min) {
            console.log("Quantidade do produto abaixo do mínimo, não pode baixar esse valor.");
            return false;
        }
        else {
            this.quantidade -= remocao;
        }
    };
    //reajusta em porcentagem o valor do produto
    Produto.prototype.reajusta = function (taxa) {
        this.valor = this.valor * (taxa / 100);
    };
    Produto.prototype.toString = function () {
        return "Código: " + this.codigo + "\nDescrição: " + this.descricao + "\nValor da unidade: " + this.valor
            + "\nQuantidade: " + this.quantidade + "\nQuantidade mínima: " + this.quantidade_min;
    };
    // verificar se outro produto tem o mesmo código desse
    Produto.prototype.equals = function (produto) {
        if (produto.codigo == this.codigo) {
            return true;
        }
        else {
            return false;
        }
    };
    return Produto;
}());
var pato = new Produto(1, "pato de borracha", 10, 5);
var galo = new Produto(2, "galo de borracha", 25, 10);
pato.repor(10);
pato.baixar(5);
pato.reajusta(150);
console.log("Pato e galo tem o mesmo codigo?: ", pato.equals(galo));
console.log(pato.toString());
//# sourceMappingURL=atv03_q7.js.map