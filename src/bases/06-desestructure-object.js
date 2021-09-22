// Desestructuracion de Objeto 'Destructuring assignment' 

// Asignacion desestructurante 
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// Extrae lo que esta dentro de la llave la propiedad que deseo , en caso de nombre
// const { nombre, edad, clave } = persona;
// const { nombre: nombre2 } = persona;
// En objeto el orden no importa 
// console.log(nombre, edad, clave);


// const retornaPersona = (usuario) => {
// Puedo desestructurar el argumento , y obtener el nombre
// const retornaPersona = ({ clave, nombre, edad, rango = 'Capitan' }) => {
    // Cambio el nomrbed e la funcion a useContext
const context = ({ clave, nombre, edad, rango = 'Capitan' }) => {
    // const { nombre, edad, clave } = persona;
    // si rago no existe devuelve undefined, pero se puede poner un valor por defecto 
    // console.log(nombre, edad, clave, rango);
    // console.log(usuario);
    // 
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.34545,
            lng: 12.345444
        }
    }
}

// const avenger = retornaPersona(persona);
// const avenger = context(persona);
// const {nombreClave, anios} = context(persona);
const {nombreClave, anios, latlng: {lat, lng} } = context(persona);
// console.log(avenger);
console.log(nombreClave, anios);
console.log(lat, lng);