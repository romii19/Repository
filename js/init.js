const CATEGORIES_URL = "http://localhost:3000/category";//"https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "http://localhost:3000/publish";//"https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "http://localhost:3000/categoria";//"https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL =  "http://localhost:3000/products";//"https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "http://localhost:3000/product";//"https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "http://localhost:3000/prodcomments";//"https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "http://localhost:3000/cartinfo";//"https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "http://localhost:3000/cartbuy";//"https://japdevdep.github.io/ecommerce-api/cart/buy.json";


var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});


/*function save(dato, pass){  

    if (dato.trim()==="" || pass.trim()===""){ //Chequea que el dato recibido no esté vacío. 
    //El método trim elimina los espacios en blanco al inicio y al final del mismo.
        alert("El dato está vacío");
    }    else{
    localStorage.setItem("usuario", dato.trim()); //setItem almacena el dato en la posición "usuario"
    localStorage.setItem("password", pass.trim()); // Almaceno la contraseña
    sessionStorage.setItem("usuario", dato.trim());
    alert (" Usuario : " + dato + " Password : " + pass ); 
    
   
    location.href="home.html";
    
    //getItem obtiene el dato almacenado en la posición "usuario"
   
    }
}*/
