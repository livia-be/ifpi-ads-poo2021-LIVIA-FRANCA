enum DiasSemana {
    Domingo = 'Domingo', Segunda = 'Segunda', Terça = 'Terça', 
    Quarta = 'Quarta', Quinta = 'Quinta', Sexta = 'Sexta', Sábado = 'Sábado'
}
namespace DiasSemana {

    let DiasSema: DiasSemana
    DiasSema = DiasSemana.Sábado
    
    function IsDiaUtil(DiasSema: DiasSemana) {
        if (DiasSema == DiasSemana.Domingo || DiasSema == DiasSemana.Sábado) {
            return false
        } else {
            return true
        }
    }
    console.log(DiasSema, 'é dia util?\nResposta: ', IsDiaUtil(DiasSema))
}


