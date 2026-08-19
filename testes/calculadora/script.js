somar = function() {
    let num1 = Number(document.getElementById('n1').value)
    let num2 = Number(document.getElementById('n2').value)

    document.getElementById('res').value = num1 + num2
}

subtrair = function() {
    let num1 = Number(document.getElementById('n1').value)
    let num2 = Number(document.getElementById('n2').value)

    document.getElementById('res').value = num1 - num2
}

multiplicar = function() {
    let num1 = Number(document.getElementById('n1').value)
    let num2 = Number(document.getElementById('n2').value)

    document.getElementById('res').value = num1 * num2
}

dividir = function() {
    let num1 = Number(document.getElementById('n1').value)
    let num2 = Number(document.getElementById('n2').value)

    document.getElementById('res').value = num1 / num2
}

mod = function() {
    let num1 = Number(document.getElementById('n1').value)
    let num2 = Number(document.getElementById('n2').value)

    document.getElementById('res').value = num1 % num2
}

exp = function() {
    let num1 = Number(document.getElementById('n1').value)
    let num2 = Number(document.getElementById('n2').value)

    document.getElementById('res').value = num1 ** num2
}

rq1 = function() {
    let num1 = Number(document.getElementById('n1').value)
    let num2 = Number(document.getElementById('n2').value)

    document.getElementById('res').value = Math.sqrt(num1) 
}

rq2 = function() {
    let num1 = Number(document.getElementById('n1').value)
    let num2 = Number(document.getElementById('n2').value)

    document.getElementById('res').value = Math.sqrt(num2) 
}

limpar = function() {
    document.getElementById('n1').value = ''
    document.getElementById('n2').value = ''
    document.getElementById('res').value = ''
}
