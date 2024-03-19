class DataBase{
    recuperarListaDespesas(){
        let despesas = Array()
        let id = localStorage.getItem('id')

        
        //recuperar todas despesas cadastradas no localStorage
        for(let i = 1; i <= id; i++){
            
            let despesa = JSON.parse(localStorage.getItem(i))
                
            if(despesa != null){
                despesa.id = i
                despesas.push(despesa)
            }
        }
        return despesas
    }

    pesquisar(despesa){

        let despesasFiltradas = Array()
        despesasFiltradas = this.recuperarListaDespesas()

        //ano
        if(despesa.ano != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano)
        }

        //mes
        if(despesa.mes != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)
        }

        //dia
        if(despesa.dia != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
        }

        //tipo
        if(despesa.tipo != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)
        }
        
        //descricao
        if(despesa.descricao != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)
        }

        //valor
        if(despesa.valor != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor)
        }

        return despesasFiltradas
    }
}

let data = new DataBase()

let gerarListaDespesas = despesas => {
    let listaDespesas = document.getElementById("listaDespesas")
    listaDespesas.innerHTML = ''

    //percorrer o array despesas listando cada despesa de forma dinâmica
    despesas.forEach(function(despesa){

        //criando a linha (tr)
        let linha = listaDespesas.insertRow()

        //criando a coluna (td)

        switch(despesa.tipo) {
            case '1':
                despesa.tipo = "Alimentação"
                break;
            case '2':
                despesa.tipo = "Educação"
                break;
            case '3':
                despesa.tipo = "Lazer"
                break;
            case '4':
                despesa.tipo = "Saúde"
                break;
            case '5':
                despesa.tipo = "Transporte"
                break;
        }

        linha.insertCell(0).innerHTML = `${despesa.dia}/${despesa.mes}/${despesa.ano}`
        linha.insertCell(1).innerHTML = despesa.tipo
        linha.insertCell(2).innerHTML = despesa.descricao
        linha.insertCell(3).innerHTML = `R$${despesa.valor}`

        //criar botão de exclusão
        let btn = document.createElement('button')
        btn.className = "btn btn-danger"
        btn.innerHTML = "<i class='fas fa-times'></i>"
        linha.insertCell(4).append(btn)

        btn.onclick = () => {
            if(confirm("Você tem certeza de que deseja deletar este registro?\nEsta ação não poderá ser desfeita futuramente")){
                localStorage.removeItem(despesa.id)
                window.location.reload()
                alert("Registro removido com sucesso!")
            }
        }
    })
}

let carregaListaDespesas = () => {

    let despesas = Array()
    despesas = data.recuperarListaDespesas()

    gerarListaDespesas(despesas)
}

let pesquisarDespesa = () =>{
    let ano       = document.getElementById("ano").value
    let mes       = document.getElementById("mes").value
    let dia       = document.getElementById("dia").value
    let tipo      = document.getElementById("tipo").value
    let descricao = document.getElementById("descricao").value
    let valor     = document.getElementById("valor").value

    let despesa = newDespesaFactory(ano, mes, dia, tipo, descricao, valor)
    let despesas = data.pesquisar(despesa)

    gerarListaDespesas(despesas)
    
}