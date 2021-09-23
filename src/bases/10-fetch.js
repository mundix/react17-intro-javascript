// Fetch API 
import './css/index.css';

const apiKey = `63J5cK4xMY25TfnCcrJzJJn6W06Ed4Xc`;
// Esto retorna una promesa y eso queire decir que retorna .then and .catch and finally
const peticiones = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticiones.then( resp => {
    // console.log(resp);
    // Las promesfas pueden encadenarse. 
    // resp.json().then( data => {
    //     console.log(data);
    // });
// })
// .catch( console.log );
peticiones.then( resp => resp.json())
// El resultado de la promesa, pasa al siguietne then , el catch es es mismo para todos
// .then( data => { console.log(data) })
// .then( ({ data }) => { console.log(data.images.original.url) })
.then( ({ data }) => { 
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
 })
.catch( console.log );

