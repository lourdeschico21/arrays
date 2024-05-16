// Solicitar al usuario que ingrese una frase
let frase = prompt("Ingrese una frase:");

// Inicializar contadores para cada vocal
let contadorA = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;

// Convertir la frase a minúsculas para asegurar la coincidencia con las vocales
frase = frase.toLowerCase();

// Recorrer cada caracter de la frase
for (let caracter of frase) {
    // Verificar si el caracter es una vocal y aumentar el contador correspondiente
    switch (caracter) {
        case 'a':
            contadorA++;
            break;
        case 'e':
            contadorE++;
            break;
        case 'i':
            contadorI++;
            break;
        case 'o':
            contadorO++;
            break;
        case 'u':
            contadorU++;
            break;
    }
}

// Mostrar el resultado en pantalla
console.log("Cantidad de veces que aparece cada vocal:");
console.log("A: " + contadorA);
console.log("E: " + contadorE);
console.log("I: " + contadorI);
console.log("O: " + contadorO);
console.log("U: " + contadorU);
