function calculate() {
    // Obtener los valores de los campos de entrada
    const Number1 = parseFloat(document.getElementById('Number1').value);
    const Number2 = parseFloat(document.getElementById('Number2').value);
    const operation = document.getElementById('operation').value;
    let result;

    // Realizar la operacion seleccionada
    switch (operation) {
        case 'add':
            result = Number1 + Number2;
            break;
        case 'subtract':
            result = Number1 - Number2;
            break;
        case 'multiply':
            result = Number1 * Number2;
            break;
        case 'divide':
            result = Number1 / Number2;
            break;
        default:
            result = 'Operación no valida';
    }

    // Mostrar el resultado
    document.getElementById('result').innerText = 'Resultado: ' + result;
}