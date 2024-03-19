class DB{
    constructor(){
        if((localStorage.getItem('id')) === null){
            localStorage.setItem('id', 0)
        }
    }

    getProximoID(){
        let proximoID = localStorage.getItem('id')
        return (parseInt(proximoID) + 1)
    }

    gravarDespesa(despesa) {
        let id = this.getProximoID()
        localStorage.setItem(id, JSON.stringify(despesa))
        localStorage.setItem('id', id)
    }
}

let dataBase = new DB()

let cadastrarDespesa = () => {
    let ano       = document.getElementById("ano")
    let mes       = document.getElementById("mes")
    let dia       = document.getElementById("dia")
    let tipo      = document.getElementById("tipo")
    let descricao = document.getElementById("descricao")
    let valor     = document.getElementById("valor")

    if(validarFormulario(ano, mes, dia, tipo, descricao, valor)){
        let despesa = newDespesaFactory(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)
        dataBase.gravarDespesa(despesa)
        alert("Despesa cadastrada com sucesso!")
        
        ano.value = ''
        mes.value = ''
        dia.value = ''
        tipo.value = ''
        descricao.value = ''
        valor.value = ''

        ano.style.border = "1px solid #ced4da"
        mes.style.border = "1px solid #ced4da"
        dia.style.border = "1px solid #ced4da"
        tipo.style.border = "1px solid #ced4da"
        descricao.style.border = "1px solid #ced4da"
        valor.style.border = "1px solid #ced4da"
    }
}

let newDespesaFactory = (ano, mes, dia, tipo, descricao, valor) =>{
    return{
        ano, mes, dia, tipo, descricao, valor
    }
}

let validarFormulario = (ano, mes, dia, tipo, descricao, valor) =>{
    let valido = 0

    if(ano.value == "" || ano.value == undefined || ano.value == null){
        ano.style.border = "1px solid red"
    } else {
        ano.style.border = "1px solid #ced4da"
        valido += 1
    }

    if(mes.value == "" || mes.value == undefined || mes.value == null){
        mes.style.border = "1px solid red"
    } else {
        mes.style.border = "1px solid #ced4da"
        valido += 1
    }

    if((dia.value == "") || (parseInt(dia.value) > 31 || parseInt(dia.value) < 0) || dia.value == undefined || dia.value == null){
        dia.style.border = "1px solid red"
    } else {
        dia.style.border = "1px solid #ced4da"
        valido += 1
    }

    if(tipo.value == "" || tipo.value == undefined || tipo.value == null){
        tipo.style.border = "1px solid red"
    } else {
        tipo.style.border = "1px solid #ced4da"
        valido += 1
    }

    if(descricao.value == "" || descricao.value == undefined || descricao.value == null){
        descricao.style.border = "1px solid red"
    } else {
        descricao.style.border = "1px solid #ced4da"
        valido += 1
    }

    if(valor.value == "" || valor.value == undefined || valor.value == null){
        valor.style.border = "1px solid red"
    } else {
        valor.style.border = "1px solid #ced4da"
        valido += 1
    }

    if(valido == 6){
        return true
    } else {
        return false
    }
}