class Jogador {
    forca: number;
    nivel: number;
    pontos: number;

    constructor(forca: number, nivel: number, pontos: number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos = pontos;
    }

    pontosAtaque() {
        let atq = this.forca * this.nivel;
        return atq;
    }

    atacar(atacado: Jogador) {
        atacado.pontos -= this.pontosAtaque();
    }

    status() {
        console.log("Forca: ", this.forca, "\nNivel: ", this.nivel, "\nPontos: ", this.pontos);
    }
}

let player1: Jogador = new Jogador(30, 10, 500);
let player2: Jogador = new Jogador(25, 15, 500);

player1.atacar(player2);
player2.atacar(player1);

console.log("Jogador 01:")
player1.status();
console.log("Jogador 02:")
player2.status();