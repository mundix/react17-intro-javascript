// Async - Await
import './css/index.css';

// const getImagenPromesa = () => new Promise( resolve => resolve('http://aslkdalsdkjaldj.com'));
// getImagenPromesa().then( console.log);

// Ahora utilizando async
const getImage = async() => {


    try {
        
        const apiKey = `63J5cK4xMY25TfnCcrJzJJn6W06Ed4Xc`;
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await respuesta.json();
        const { url } =  data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {
        // Manejo de error
        console.log(error);
    }

   

}

// console.log(getImage());
getImage();


// 
// 

// peticiones.then( resp => resp.json())
// .then( ({ data }) => { 
//     const { url } = data.images.original;
//     const img = document.createElement('img');
//     img.src = url;
//     document.body.append(img);
//  })
// .catch( console.log );