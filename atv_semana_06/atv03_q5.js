var Jogador = /** @class */ (function () {
    function Jogador(forca, nivel, pontos) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos = pontos;
    }
    Jogador.prototype.pontosAtaque = function () {
        var atq = this.forca * this.nivel;
        return atq;
    };
    Jogador.prototype.atacar = function (atacado) {
        atacado.pontos -= this.pontosAtaque();
    };
    Jogador.prototype.status = function () {
        console.log("Forca: ", this.forca, "\nNivel: ", this.nivel, "\nPontos: ", this.pontos);
    };
    return Jogador;
}());
var player1 = new Jogador(30, 10, 500);
var player2 = new Jogador(25, 15, 500);
player1.atacar(player2);
player2.atacar(player1);
console.log("Jogador 01:");
player1.status();
console.log("Jogador 02:");
player2.status();
//# sourceMappingURL=atv03_q5.js.map