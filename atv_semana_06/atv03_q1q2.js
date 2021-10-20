/**Suponha uma classe Hotel que sirva apenas para guardar a quantidade de
solicitações de reservas feitas conforme abaixo: */
var Hotel = /** @class */ (function () {
    function Hotel(quantReservas) {
        this.quantReservas = quantReservas;
    }
    Hotel.prototype.adicionarReserva = function (quantReservas) {
        quantReservas++;
    };
    return Hotel;
}());
var hotel = new Hotel(5);
console.log(hotel.quantReservas);
/**Podemos afirmar que haverá um problema de compilação, pois a variável inteira não
  foi inicializada previamente? Justifique.
  Sim, pois variaveis locais devem ser inicializadas antes do uso e precisam ser declaradas dentro de um metodo */ 
//# sourceMappingURL=atv03_q1q2.js.map