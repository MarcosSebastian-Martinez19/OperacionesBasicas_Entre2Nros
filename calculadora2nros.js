/*9. Calculadora: 
- Pida dos números por pantalla, si se ingresa mal un número, que lo vuelva a pedir.
- En el cuerpo de la pagina, en una alerta mostrar el resultado de sumar, restar, multiplicar y dividir esas dos cifras.
- Refactoriza el código para encapsularlo todo en funciones reutilizables
*/

// let num1, num2
// let sumar, restar, multiplicar, dividir
// let aviso
// let aviso = prompt("Vamos a necesitar que ingrese 2 números para realizar el programa. Para continuar escriba y", "y")
// while(aviso === "y") {
//     num1 = parseInt(prompt("Ingrese un primer número"))
//     num2 = parseInt(prompt("Ingrese un segundo número"))
//     if(isNaN(num1) || isNaN(num2)) {
//         alert("Ingrese un número válido.")
//     } else {
//         break
//     }
// }
// sumar = num1 + num2
// restar = num1 - num2
// multiplicar = num1 * num2
// dividir = num1 / num2
// alert("El resultado de la suma entre " + num1 + " y " + num2 + " es: " + sumar + "." + "\n" +
// "El resultado de la resta entre " + num1 + " y " + num2 + " es: " + restar + "." + "\n" +
// "El resultado de la multiplicación entre " + num1 + " y " + num2 + " es: " + multiplicar + "." + "\n" +
// "El resultado de la división entre " + num1 + " y " + num2 + " es: " + dividir + ".<")

// Con funciones

let num1, num2
let sumar, restar, multiplicar, dividir
let aviso

pedirNros()
function pedirNros() {
    aviso = prompt("Vamos a necesitar que ingrese 2 números para realizar el programa. Para continuar escriba y", "y")

    while(aviso === "y") {

        num1 = parseInt(prompt("Ingrese un primer número"))
        num2 = parseInt(prompt("Ingrese un segundo número"))

        if(isNaN(num1) || isNaN(num2)) {
            alert("Ingrese un número válido.")
        } else {
            break
        }
    }
}

function sumarNros() {
    return sumar = num1 + num2
}

function restarNros() {
    return restar = num1 - num2
}

function multiplicarNros() {
    return multiplicar = num1 * num2
}

function dividirNros() {
    return dividir = num1 / num2
}

function imprimirResultados () {
    alert("El resultado de la suma entre " + num1 + " y " + num2 + " es: " + sumarNros() + "." + "\n" +
        "El resultado de la resta entre " + num1 + " y " + num2 + " es: " + restarNros() + "." + "\n" +
        "El resultado de la multiplicación entre " + num1 + " y " + num2 + " es: " + multiplicarNros() + "." + "\n" +
        "El resultado de la división entre " + num1 + " y " + num2 + " es: " + dividirNros() + ".")
}
imprimirResultados()