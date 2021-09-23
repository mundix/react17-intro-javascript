// Import Export 
import { heroes } from './data/heroes';

let newAntiHeroes = [
    {
        id: 6,
        name: 'Venom',
        owner: 'Marvel'
    },
    {
        id: 7,
        name: 'Dead Pool',
        owner: 'Marvel'
    },
    {
        id: 8,
        name: 'Punisher',
        owner: 'Marvel'
    },
    {
        id: 9,
        name: 'Task Master',
        owner: 'Marvel'
    },
    {
        id: 10,
        name: 'Destroke',
        owner: 'DC'
    },
    {
        id: 11,
        name: 'Blood Sport',
        owner: 'DC'
    },
];

// const type = 'antihero';

console.log(typeof newAntiHeroes);

let newArrayHeroes = newAntiHeroes.map((hero) => {
    const type = 'Antihero';
    return { hero, type };
});

console.log(newArrayHeroes);

// let arrayHeroes = heroes.concat(newAntiHeroes);
let arrayHeroes = [...heroes, ...newArrayHeroes];
console.log(arrayHeroes);

const newNewArr = arrayHeroes.reduce((acc, el) => ({
    ...acc,
    [el.name]: el,
}), {});


console.log(newNewArr);

// let arrayHeroes = newArrayHeroes.map( hero => {
//     return [...heroes, hero];
// })

// newArrayHeroes = [...heroes, newArrayHeroes];

// let heroesArray = [];
// heroesArray.push(newAntiHeroes);
// let heroesArray = newAntiHeroes.map(hero => {
//     return [...heroes, hero];
// })
// let heroesArray = [ ...heroes, newAntiHeroes ];

// console.log(heroesArray);


// let newHero = {
//     id: 6,
//     name: 'Magneto',
//     owner: 'Marvel'
// };

// const power = { name: 'Magnet'};
// newHero = { ...newHero, power };

// const heroArray = [...heroesJson, newHero];
// console.log(heroArray);
// console.log(heroes);

// let newHeroArray = heroArray.filter( hero => hero.owner === "Marvel");
// console.log(newHeroArray);

