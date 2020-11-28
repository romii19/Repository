const ORDER_ASC_BY_COST = "$->$$";
const ORDER_DESC_BY_COST = "$$->$";
const ORDER_DESC_BY_R = "RR->R";
var currentProductsArray = [];
var currentSortCriteria = undefined;
var minCount = undefined;
var maxCount = undefined;

function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_COST)
    {
        result = array.sort(function(a, b) {
            if ( a.name < b.name ){ return -1; }
            if ( a.name > b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_COST){
        result = array.sort(function(a, b) {
            if ( a.name > b.name ){ return -1; }
            if ( a.name < b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_R){
    result = array.sort(function(a, b) {
        let asoldCount = parseInt(a.soldCount);
        let bsoldCount = parseInt(b.soldCount);

        if ( asoldCount > bsoldCount ){ return -1; }
        if ( asoldCount < bsoldCount ){ return 1; }
        return 0;
    });
}

return result;
}

function showProductsList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductsArray.length; i++){
        let category = currentProductsArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(category.soldCount) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(category.soldCount) <= maxCount))){

            htmlContentToAppend += `
            
            <div class="col-md-4">
            <a href="product-info.html" class="card mb-4 shadow-sm custom-card">
                        <img src="` + category.imgSrc + `" alt="` + category.description + `" class="bd-placeholder-img card-img-top">
                        <h4 class="m-3">`+ category.name + `</h4>
                        <div class="card-body">
                        <p class="card-text">`+ category.currency + ' ' + category.cost +`</p>
                        <small class="card-text">` + category.soldCount + ` artículos</small>
                        <p class="card-text">` + category.description + `</p>
                    </div>
                    </a>
                    </div>      
            `
        }

        document.getElementById("prod-list-container").innerHTML = htmlContentToAppend;
    }
}

function sortAndShowProducts(sortCriteria, productsArray){
    currentSortCriteria = sortCriteria;

    if(productsArray != undefined){
        currentProductsArray = productsArray;
    }

    currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);

    // muestra los prod. en orden
    showProductsList();
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            sortAndShowProducts( ORDER_ASC_BY_COST, resultObj.data);
        }
    });
// click orden ascendente
    document.getElementById("sortCostAsc").addEventListener("click", function(){
        sortAndShowProducts( ORDER_ASC_BY_COST);
    });
// click orden descendente
    document.getElementById("sortCostDesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_COST);
    });
// click orden descendente de relevancia
    document.getElementById("sortCountSoldDesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_R);
    });
// click máx y mín 
    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;
    // muestra los prod. en orden
        showProductsList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }
    // muestra los prod. en orden
        showProductsList();
    });
});