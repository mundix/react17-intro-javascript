// Objetos literales 


const persona = {
    nombre: 'Tony',
    apellido: 'Stak',
    age: 45,
    direccion: {
        ciudad: 'New York',
        zip: 12323,
        lat: 12.343498,
        lon: 12.343498,
    }
}


// console.table(persona);

// const persona2 = persona; //Esto no se debe hcer, por es una copia dela referencia, 
// persona2.nombre = 'Peter'; 
//Para copiar o conar el objeto , se hace con el operador spread ... 

//un nuev objeto const persona = { nombre: 'peter'}; // habria que hacerlo ujno a uno  todo lsol elementos , pero 
// Con el spread solo es poenr el { ...persona }
const persona2 = { ...persona};
persona2.nombre = 'Peter';

console.log(persona2);
console.log(persona);

