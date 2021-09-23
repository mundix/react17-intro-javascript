// Export Import 
import { heroes } from './data/heroes';
import './css/index.css';

// console.log(heroes);
// const found = heroes.find( hero => hero.id === 1 );
// console.log(found);

// const getHeroeById = (id) => {
    // return heroes.find( hero => hero.id === id ); //cuando solo es uno , es opcional poner el argument;
    // return heroes.find( (heroe) => heroe.id === id ); // Se pone el parentesis de los argumento cuadno son mas de uno. 
// };

// sta es otra forma sin las  { } 
const getHeroeById = (id) => heroes.find( heroe => heroe.id === id );

console.log(getHeroeById(5));
// Ahora usamos filter  para filterar por Owner, cuando muchos elementos tienen un owner
const getHeroeByOwner = ( owner ) => heroes.filter( heroe => heroe.owner === owner );
console.log(getHeroeByOwner('DC'));