function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    
    if(!num.value){
        alert('[ERRO] VALOR NÃO DIGITADO OU INVÁLIDO')
        return
    }

    let n = Number(num.value)

    // 4. Limpa as opções anteriores do select antes de gerar a nova tabuada
    seltab.innerHTML = ''

    for(let i = 2; i <= 10; i++){
        let item = document.createElement('option')
        item.text = `${n} x ${i} = ${n*i}`
        tab.appendChild(item)
    }
}