/**Suponha uma classe Hotel que sirva apenas para guardar a quantidade de
solicitações de reservas feitas conforme abaixo: */
class Hotel {
  quantReservas: number;
  adicionarReserva(quantReservas:number): void {
    quantReservas++;
  }

  constructor(quantReservas: number) {
    this.quantReservas = quantReservas; 
  }
}
let hotel: Hotel = new Hotel(5);
console.log(hotel.quantReservas);
/**Podemos afirmar que haverá um problema de compilação, pois a variável inteira não
  foi inicializada previamente? Justifique.
  Sim, pois variaveis locais devem ser inicializadas antes do uso e precisam ser declaradas dentro de um metodo */