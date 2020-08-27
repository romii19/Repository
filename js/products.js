//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const ORDER_ASC_BY_COST = "$->$$";
const ORDER_DESC_BY_COST = "$$->$";
const ORDER_DESC_BY_R = "RR->R";
var ProductsArray = [];

var minCost = undefined;
var maxCost = undefined;

function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_COST){
        result = array.sort(function (a, b) {
            if (a.cost < b.cost) { return -1; }
            if (a.cost > b.cost) { return  1; }
            return 0;
    });
} else if (criteria === ORDER_DESC_BY_COST) {
    result = array.sort(function (a, b) {
            if (a.cost < b.cost) { return -1; }
            if (a.cost > b.cost) { return  1; }
            return 0;
        });
} else if (criteria === ORDER_DESC_BY_R) {
    result = array.sort(function (a, b) {
        
            if (a.soldCount < b.soldCount) { return -1; }
            if (a.soldCount > b.soldCount) { return  1; }
            return 0;
        });
}

return result;

}

function showProductsList(array)  {

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let product = array[i];

        if (((minCost == undefined) || (minCost != undefined && parseInt(product.cost) >= minCost)) &&
            ((maxCost == undefined) || (maxCost != undefined && parseInt(product.cost) <= maxCost))){

        htmlContentToAppend += `
        <a href="product-info.html" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ product.name + ' ' + product.currency + ' ' + product.cost +`</h4>
                        <small class="text-muted">` + product.soldCount + ` artículos</small>
                        
                    </div>
                 <small class="text-muted">` + product.description + ` artículos</small>
                </div>
            </div>
        </div>
        `   
         
        document.getElementById("product-list-container").innerHTML = htmlContentToAppend;
     
     hideSpinner();
    }  
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
          productsArray = resultObj.data;

            prodectsArray = sortProducts(ORDER_ASC_BY_COST, productsArray);
            //Muestro las categorías ordenadas
            showProductsList(productsArray);
        }
    });

// click ascendente
    document.getElementById("sortCostAsc").addEventListener("click", function(){
        // orden ascendente
        productsArray = sortProducts(ORDER_ASC_BY_COST, productsArray);
        // productos en orden
        showProductsList(productsArray);
});

// click descendente
document.getElemetById("sortCostDesc").addEventListener("click", function(){
// Ascendente
productsArray = sortProducts(ORDER_DESC_BY_COST, productsArray);
// productos ordenados
showProductsList(productsArray);
});

// click relevancia
document.getElemetById("sortCountSoldDesc").addEventListener("click", function(){
// Descendente
productsArray = sortProducts(ORDER_DESC_BY_R, productsArray);
// productos ordenados
showProductsList(productsArray);
});

// mín y máx
document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCostMin").value = "";
        document.getElementById("rangeFilterCostMax").value = "";
      
        minCost = undefined;
        maxCost = undefined;
//Mustra productos ordenados
        showProductsList(productsArray);
    });

  document.getElementById("rangeFilterCost").addEventListener("click", function(){
        // mínimo y máximo de los intervalos para filtrar por cantidad
        minCost = document.getElementById("rangeFilterCostMin").value;
        maxCost = document.getElementById("rangeFilterCostMax").value;

        if ((minCost != undefined) && (minCost != "") && (parseInt(minCost)) >= 0){
            minCost = parseInt(minCost);
        }
        else{
            minCost = undefined;
        }

        if ((maxCost != undefined) && (maxCost != "") && (parseInt(maxCost)) >= 0){
            maxCost = parseInt(maxCost);
        }
        else{
            maxCost = undefined;
        }

        showProductsList(productsArray);
    });
});