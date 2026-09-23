function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora <= 12){
        // bom dia 
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#C5AC97'
    }else if(hora >= 12 && hora < 18){
        // boa tarde
        img.src = 'imagens/tarde.jpg' 
        document.body.style.background = '#77759B'
    }else{
        // boa noite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#272622'

    }
}
