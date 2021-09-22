// Arreglos en JS 

// const arreglo = new Array(100); //No se recomienda esta forma, la forma correcta es [];
// arreglo.push(1);
// console.log(arreglo);
// const arreglo = [];
const arreglo = [1, 2, 3, 4];
// El push noe s recomendable por qeu modifica el objeto principal, instead we use spread operator
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map( function(numero) {
    // Si no tiene return devuelte undefined la cantidad de veces de elementos del array en cuestion
    // return 'Total: ' + (numero * 3);
    return numero * 3;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);