// Asignacion Desestructuracion de Arreglo 

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// Para extaeerlo de manera independiente

const [p1] = personajes;
const [, p2] = personajes;
const [, , p3] = personajes;

console.log(p1);
console.log(p2);
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea 
// 1. El primer valor del arr se llamara nombre, 
// 2. Se llamara setNombre 

// no se puede usar el useState en react 17 
const getState = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }];
}

// const arr = getState('Goku');
const [nombre, getNombre] = getState('Goku');
getNombre();
// console.log(arr);
console.log(nombre);