class Hora {
    private horas: number;
    private minutos: number;
    private segundos: number;

    constructor(horas: number, minutos: number, segundos: number) {
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    lerHora(): number { return this.horas; }
    lerMinutos(): number { return this.minutos; }
    lerSegundos(): number { return this.segundos; }

    horario(): string {
        return this.horas + ":" + this.minutos + ":" + this.segundos;
    }
}

let hrs: Hora = new Hora(14, 40, 15)
console.log(hrs.lerHora(), hrs.lerMinutos(), hrs.lerSegundos());
console.log(hrs.horario());