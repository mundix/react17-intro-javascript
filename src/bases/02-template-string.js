// Templte Strings 
// Sirve para poner variables o resultado de operaciones entre otras variedades. 

const nombre = 'Edmundo ';
const apellido = 'Pichardo ';

// const nombreCompleto  = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return "Hola " + nombre;
}

console.log(`Este es un text: ${getSaludo(nombre)}`);