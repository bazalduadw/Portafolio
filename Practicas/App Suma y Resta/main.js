function suma(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = numero1 + numero2;

    document.getElementById('resultado').value = resultado;
}

function resta(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var res = num1 - num2;

    document.getElementById('res-resta').value = res;
}