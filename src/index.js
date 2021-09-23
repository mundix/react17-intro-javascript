// Operador Ternario
import './css/index.css';

const activo = true;

// const mensaje = (activo) ? 'true' : false;
// Otra forma corta como si fuera un if 

const mensaje = (activo === true ) && 'Activo';

console.log(mensaje);
const funcion = () => {return true && 'Activa la funcion'};
console.log(funcion());
