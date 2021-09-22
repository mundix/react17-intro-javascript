

// Variables y Constantes

// Nunca mas usar var para inicializar variables, es peligroso, en el curso de js moderno lo explican. 
// Usaremos const y let 
const nombre = 'Edmundo';
const apellido = 'Pichardo';

let valorDado = 5;
valorDado = 3;

console.log(nombre, apellido, valorDado);

if( true )  {
    let valorDado = 10; //estop es otro scope  por eso puedo definirlo
    const nombre = 'Peter';
    console.log(valorDado);
    console.log(nombre);
}

console.log(valorDado);