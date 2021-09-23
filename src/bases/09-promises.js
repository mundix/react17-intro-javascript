// Promises 
import { getHeroeById } from './bases/08-imp-exp';
import './css/index.css';

// const promesa  = new Promise( (resolve, reject) => {
//     // Para poder invocar el .then o .cath hay que llamar a resolve(); como funcion o reject(); y se le pueden pasar args
//     setTimeout(() => {
//         const heroeEncontrado = getHeroeById(2);
//         // console.log(heroe);
//         // Al resolve se le manda el argumento 
//         resolve(heroeEncontrado);
//         // reject('No se pudo enconrtrar el heroe'); Asi se ejectua el cath
//         // resolve();
//     }, 2000);

// });

// promesa.then( ( heroe ) => {
//     console.log('Heroe Encontrado: ', heroe);
// }).catch( err => console.warn( err));

const getHeroeByIdAsync = (id) => {
    // const promesa  = new Promise( (resolve, reject) => {
    return new Promise( (resolve, reject) => {
        // Para poder invocar el .then o .cath hay que llamar a resolve(); como funcion o reject(); y se le pueden pasar args
        setTimeout(() => {
            const heroeEncontrado = getHeroeById(id);
            if(heroeEncontrado) {
                resolve(heroeEncontrado); 
            } else { 
                reject('Heroe no encontrado');
            }
            // console.log(heroe);
            // Al resolve se le manda el argumento 
            // resolve(heroeEncontrado);
            // reject('No se pudo enconrtrar el heroe'); Asi se ejectua el cath
            // resolve();
        }, 2000);
    
    });
    // return promesa; Si lo uitamos debemos retornar return new Promise(  ... )
}

getHeroeByIdAsync(3)
    //Esta funciona regresa void, no regresa una promesa, y eso se resuelve ponen un return  de la promesa;
    // .then( heroe => console.log('Hero', heroe))
    .then( console.log)
    // .catch( err => console.warn(err)) 
    .catch( console.warn)  // Si el argumento es elmismo que va en la funcion del callback , se puede pner asi, el asume el argumento. 