var DiasSemana;
(function (DiasSemana) {
    DiasSemana["Domingo"] = "Domingo";
    DiasSemana["Segunda"] = "Segunda";
    DiasSemana["Ter\u00E7a"] = "Ter\u00E7a";
    DiasSemana["Quarta"] = "Quarta";
    DiasSemana["Quinta"] = "Quinta";
    DiasSemana["Sexta"] = "Sexta";
    DiasSemana["S\u00E1bado"] = "S\u00E1bado";
})(DiasSemana || (DiasSemana = {}));
(function (DiasSemana) {
    var DiasSema;
    DiasSema = DiasSemana.Sábado;
    function IsDiaUtil(DiasSema) {
        if (DiasSema == DiasSemana.Domingo || DiasSema == DiasSemana.Sábado) {
            return false;
        }
        else {
            return true;
        }
    }
    console.log(DiasSema, 'é dia util?\nResposta: ', IsDiaUtil(DiasSema));
})(DiasSemana || (DiasSemana = {}));
//# sourceMappingURL=Q04.js.map