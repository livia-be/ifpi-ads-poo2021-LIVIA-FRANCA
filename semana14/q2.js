var Hora = /** @class */ (function () {
    function Hora(horas, minutos, segundos) {
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }
    Hora.prototype.lerHora = function () { return this.horas; };
    Hora.prototype.lerMinutos = function () { return this.minutos; };
    Hora.prototype.lerSegundos = function () { return this.segundos; };
    Hora.prototype.horario = function () {
        return this.horas + ":" + this.minutos + ":" + this.segundos;
    };
    return Hora;
}());
var hrs = new Hora(14, 40, 15);
console.log(hrs.lerHora(), hrs.lerMinutos(), hrs.lerSegundos());
console.log(hrs.horario());
//# sourceMappingURL=q2.js.map