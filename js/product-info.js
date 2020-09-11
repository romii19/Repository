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
var comments = {};
            document.addEventListener("DOMContentLoaded", function(e){
                getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
                    if (resultObj.status === "ok"){ 
           comments = resultObj.data;
           var comentarios = "";
           for(i = 0; i < comments.length; i++){
               var estrellas = "";
               for (let i = 1; i<=5; i++){
                if (i<=puntuacion){
                  estrellas += '<i class="fas fa-star checked"></i>';
                } else {
                  estrellas += '<i class="fas fa-star"></i>';
                }
            }
               comentarios += `<div> 
               <p class="des"> <b>` + comments[i].user + `</b></p>
               <small><p class="des">`+ comments[i].description +`</p></small>
               <p>Puntaje:`+ estrellas + `</p>
               <p>`+ comments[i].dateTime +`</p>
               </div>` 
            }
             document.getElementById("comentarios").innerHTML = comentarios;
            }
    }); 
});   

// document.addEventListener("DOMContentLoaded", function(e){

// });