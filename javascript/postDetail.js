//https://devto-photoapp-default-rtdb.firebaseio.com/posts/-N8RJPxsdXMuHVLLs-30/.json
//https://devto-photoapp-default-rtdb.firebaseio.com/posts/.json
/*
 1. crear funcion que reciba el postId
 2. construir el url con el postId
 3. invocar el metodo fetch para llamar el servidor
 4. convertir la respuesta del fetch a json
 5. leer el objeto de tipo json con la información del post
 6. inyectar el detalle del post obtenido por el Id en el html
  */

const getPostById = (postId) =>{
    let url = 'https://devto-photoapp-default-rtdb.firebaseio.com/posts/' + postId + '/.json'
    fetch( url ,{
    method: 'GET'
    })
    .then(function(plainText){
        let jsonResponsePromise = plainText.json()
        return jsonResponsePromise
    })
    .then((postDetail) =>{
        console.log(postDetail)
        /*
        1.Llamar la función generatePostHtml y guardar en la variable template
        2.Buscar el elemento html en donde se va a inyectar el template
        !Evaluar que contentWrapper no sea null
        3.Inyectar el contenido de la variable template en el contenido innerHTML
        */
       let template = generatePostHtml(postDetail)
       let contentWrapper = document.querySelector ('#post-detail')
       if(contentWrapper!= null) {
        contentWrapper.innerHTML = template
       }
    })
}

getPostById('-N8RJPxsdXMuHVLLs-30')
/*
1.recibe el detalle del post como objeto
X.retornar un string con formato para poder usarse en html
*/
const generatePostHtml = (postDetail) =>{
    let postDetailTemplate = `
    <div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${postDetail.postTitle}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `
    return postDetailTemplate
}


