function verificar() {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_formulario = document.getElementById('txtano')
    var resultado = document.getElementById('res')

    if(ano_formulario.value.length == 0 || ano_formulario.value > ano_atual){
        alert('ERRO: Verifique os dados e tente novamente')
    }else {
        var sexo_formulario = document.getElementsByName('radsex')
        var idade = ano_atual - Number(ano_formulario.value)
        var genero = ''
        if(sexo_formulario[0].checked){
            genero = 'Homem'
        }else if(sexo_formulario[1].checked){
            genero = 'Mulher'
        }
        res.innerHTML = `${genero} de ${idade} anos`
    }
}
