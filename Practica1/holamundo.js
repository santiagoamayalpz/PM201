// Js de lado del servidor

console.log("Hola, mundo JS con node!");// Solo mostrara en la consola del navegador

// Calculo

let edad1 = 25;
let edad2 = 30;

console.log("La edad promedio es: " + (edad1 + edad2) / 2);

// medir el tiempo del proceso

console.time("Tiempo de proceso");

for (let i = 0; i < 10000; i++) {}

console.timeEnd("Tiempo de proceso");

//Objetos tipo tabla 

let usuario = [
    
        {nombre: "Santiago",edad: 25},
        {nombre: "Genaro",edad: 25},
        {nombre: "Jonathan",edad: 25}
    ];

console.table(usuario);