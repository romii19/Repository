// mostrar imágenes
var category = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

            let categoryNameHTML  = document.getElementById("categoryName");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let productCountHTML = document.getElementById("soldCount");
            let Category = document.getElementById("category");
            let categoryCostHTML = document.getElementById("categoryCost");
  
            categoryNameHTML.innerHTML = category.name;
            categoryDescriptionHTML.innerHTML =  category.description;
            productCountHTML.innerHTML = category.soldCount;
            Category.innerHTML = category.category;
            categoryCostHTML.innerHTML = category.currency + ' ' + category.cost;
        }   
            //Muestro las imagenes en forma de galería
            showImagesGallery(category.images);
});
});   
// Muestro los productos relacionados
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){ 
relatedProducts = resultObj.data;
var html = '';
for(k = 3; k < relatedProducts.length; k++){
   html += `<div> 
   <div class="card" style="width: 18rem;">
   <img src="${relatedProducts[1].imgSrc}" class="card-img-top" alt="...">
   <div class="card-body">
   <h5 class="card-title">${relatedProducts[1].name}</h5>
   <p class="card-text">${relatedProducts[1].description}</p>
   <a href="" class="btn btn-link">Ver</a>
   </div>
  </div>` 
for(k = 3; k < relatedProducts.length; k++)
    html += `<div> 
    <div class="card" style="width:18rem ;">
    <img src="${relatedProducts[2].imgSrc}" class="card-img-top" alt="..."> 
    <div class="card-body">
    <h5 class="card-title">${relatedProducts[3].name}</h5>
    <p class="card-text">${relatedProducts[3].description}</p>
    <a href="" class="btn btn-link">Ver</a>
    </div>
    </div>`  
    
 }
 document.getElementById("relatedProducts").innerHTML = html;
}
}); 
});   
   
// Muestro los comentarios
            document.addEventListener("DOMContentLoaded", function(e){
                getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
                    if (resultObj.status === "ok"){ 
           comments = resultObj.data;
           var comentarios = '';
           for(i = 0; i < comments.length; i++){
                score = "";
                for (let i = 1; i<=5; i++){
                  if (i<=comments){
                    score += '<i class="fas fa-star"></i>';
                  } else {
                    score += '<i class="far fa-star checked"></i>';
                  }
            }
               comentarios += `<div> 
               
               <hr><p class="des"><img src="img/bxs-user.svg" alt="" class="icon">
               <b>` + comments[i].user + `</b></p>
               <small><p class="des">`+ comments[i].description +`</p></small>
               <p>Puntaje:`+ comments[i].score + `</p>
               <p>`+ comments[i].dateTime +`</p><hr>
               </div>` 
            }
             document.getElementById("comentarios").innerHTML = comentarios;
            }
    }); 
});   
// Para agregar comentarios
var lista=[];
        function guardar(){
            var personas={}; //defino el objeto
            var nom=document.getElementById('nombre').value;//obtengo los valores
            var score=document.getElementById('score').value;
            var desc=document.getElementById('desc').value;

            personas.nombre=nom;//guardo los valores
            personas.score=score;
            personas.desc=desc;
            
            lista.push(personas); //agrego los valores al final de la colección
            mostrar(lista);//llamo a la funcion para mostrar los datos
        }

        function mostrar(lista){

        var list = ""; //escribe el encabezado
        for (i=0; i<lista.length; i++){

            list+=`<div> 
               
            <hr><p><img src="img/bxs-user.svg" alt="" class="icon">
            <b>` + lista[i].nombre + `</b></p>
            <small><p class="des">`+ lista[i].desc +`</p></small>
            <p>Puntaje:` + lista[i].score  + `</p>
            <button id="borrar" class ="btn btn-danger" onclick="clear(); location.reload();">Eliminar comentario
            </button>
            <hr>
            </div>`;
        }
        document.getElementById('lista').innerHTML=list;
        }