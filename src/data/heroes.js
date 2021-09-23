// export const heroes = [{
// Solo se exporta el array y es por defecto. 

// export default [
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    }, {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    }, {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    }, {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    }, {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];
// Si yo necesito exportar otra cosa 
// export const owners = ['DC', 'Marvel']; // En este caso no funciona la exportacion pore defecto debemos desetructurar { } para que funcione 
const owners = ['DC', 'Marvel']; // En este caso no funciona la exportacion pore defecto debemos desetructurar { } para que funcione 
// improt heroes, { owners } import ' ... '
// Esto tambien exporta por deefcto aun sin poner la  import { } from, si no import heroes from ' ...' 
// export default heroes;

// Tambien puedo hacer todas las exporaciones asi  de una sola ves
// Peropara inmprtar no se esta usando por defecto  hay que ponerlo dentro de llave,pero se puede espeficiar por defecto cual es
// Y sigue siendo importado con import heroes, { owners } import ' ... ' 
 export  {
    //  heroes,
     heroes as default,
     owners
 }