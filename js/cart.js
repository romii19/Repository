//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var carrito = {};
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){ 
carrito = resultObj.data;
var articles = '';
for(i = 0; i < carrito.length; i++){
   articles += carrito[i].name;
}
 document.getElementById("articles").innerHTML = articles;
}
}); 
});   







// document.addEventListener("DOMContentLoaded", function(e){});