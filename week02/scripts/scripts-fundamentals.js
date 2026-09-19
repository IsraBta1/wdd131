// Paso 1: declarar variables
let x = 10;
let y = 5;

// Paso 2: usar operadores aritméticos
let z = x + y;
console.log('Suma:', z);

// Paso 3: comparar valores
console.log('z === 15:', z === 15);
console.log('String(z) === "15":', String(z) === '15');
console.log('x < y:', x < y);

// Paso 4: ejemplo con if/else
if (x > y) {
    console.log('x es mayor que y');
} else {
    console.log('x no es mayor que y');
}

// Paso 5: ejemplo con for loop
const studentReport = [11, 42, 33, 64, 29, 37, 44];
console.log('Valores menores a 30:');
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < 30) {
        console.log(studentReport[i]);
    }
}

// Paso 6: ejemplo con while loop
let count = 0;
console.log('Conteo con while:');
while (count < 5) {
    console.log(count);
    count += 1;
}

// Paso 7: ejemplo con lógica booleana
const age = 20;
const hasID = true;
const canEnter = age >= 18 && hasID;
console.log('Puede entrar:', canEnter);
