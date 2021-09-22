// Functions on JS 
// No vamos a usar esta forma de declarar funciones, por que es muy facil de acidentalmente 
// le caigamos encima con alguna vriable que se llame igual.
// function saludar ( nombre ) {
//     return `Hola ${nombre}`;
// }
//se les recomienda que las funciones se guarden en cnostante para no modificarse
// const saludar = function  ( nombre ) { 
//     return `Hola ${nombre}`;
// }

// Pero aun asi es mejor usar funcion de flecha 
const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}
// si tiene un return se peude simplifiar 
const saludar3 = (nombre) => `Hola ${nombre}`;
// Tamiben se puede envair sin argumento 
const saludar4 = () => `Hola Mundo`;

// console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Goham'));
console.log(saludar4());

// const getUser = () => {
//     return {
//         uid: 'ABC123',
//         username: 'mundix',
// }}
// como puedo decirle a js que noe s el cuerpo de la funciona , solo hay que poner todo lo que quiero regresar entre parentesis 
// const getUser = () => {
//         uid: 'ABC123',
//         username: 'mundix',
// }
// Se envuelve el obj {} entre parenteriss ({ ... })
const getUser = () => ({
        uid: 'ABC123',
        username: 'mundix',
});

const user = getUser();
console.log(user);

// Tarea 
// 1 - Transformar a una funcion de felcha
// 2 - Teine que retoranr un objeto implicito
// 3 - PRuebas

function  getUsuarioActivo( nombre) {
    return {
        uid: 'ABC456',
        username: nombre
    }
}

const getUsuarioActivo2 = (nombre) => ({ uid: 'ABC456', username: nombre});
const usuarioActivo = getUsuarioActivo2('hulk');

console.log(getUsuarioActivo('ironman'));
console.log(getUsuarioActivo2('spiderman'));
console.log(usuarioActivo);