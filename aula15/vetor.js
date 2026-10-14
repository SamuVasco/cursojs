let valores = [8,2,7,4]

console.log('\nForma tradicional\n')

for(let i = 0; i < valores.length; i++){
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}

console.log('\nOutra forma\n')

for(let i in valores){
    console.log(`Posição ${i} : Valor ${valores[i]}`)
}

console.log('\nRetornar posição do valor\n')

let pos = valores.indexOf(4)

if (pos == -1){
    console.log('VALOR NÃO ENCONTRADO')
} else {
    console.log(`Valor 4 na posição: ${pos}`)
}