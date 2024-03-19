async function buscaEndereco(cep){
    let mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ''
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()
        if(consultaCEPConvertida.erro){
            throw Error("CEP inválido!")
        }

        
        let cidade = document.getElementById('cidade')
        let logradouro = document.getElementById('endereco')
        let estado = document.getElementById('estado')
        let bairro = document.getElementById('bairro')
        
        cidade.value = consultaCEPConvertida.localidade
        logradouro.value = consultaCEPConvertida.logradouro
        estado.value = consultaCEPConvertida.uf
        bairro.value = consultaCEPConvertida.bairro
        
        document.getElementById('cep').style.border = '1px solid #002F52'

        return consultaCEPConvertida
    }catch(erro){
        document.getElementById('cep').style.border = '2px solid #D94937'
        mensagemErro.innerHTML = 'CEP inválido, tente novamente'
    }
}

let cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscaEndereco(cep.value))