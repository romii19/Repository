//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const ORDER_ASC_BY_COST = "$->$$";
const ORDER_DESC_BY_COST = "$$->$";
const ORDER_DESC_BY_R = "RR->R";
var productsArray = [];
var minCost = underFined;
var maxCost = underFined;
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
            if (a.souldCount < b.souldCount) { return -1; }
            if (a.soldCount > b.souldCount) { return  1; }
            return 0;
        });
}

return result;

}

function showProductsList(array)  {

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let category = array[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(category.soldCount) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(category.soldCount) <= maxCount))){

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + category.imgSrc + `" alt="` + category.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ category.name + ' ' + category.currency + ' ' + category.cost +`</h4>
                        <small class="text-muted">` + category.soldCount + ` artículos</small>
                        
                    </div>
                 <small class="text-muted">` + category.description + ` artículos</small>
                </div>
            </div>
        </div>
        `   
         
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
     
     hideSpinner();
    }  
}


// function sortAndShowCategories(sortCriteria, categoriesArray){
    // currentSortCriteria = sortCriteria;
    // if(categoriesArray != sortCriteria){
        // curretCategoriesArray = categoriesArray; 
    // }
    // currentCategoriesArray = sortCategories(currentSortCriteria, currentCategoriesArray);

    // showCategoriesList();
// }
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(LIST_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        { 
            productsArray = resultObj.data;

            prodectsArray = sortProducts(ORDER_ASC_BY_COST, productsArray);
            //Muestro las categorías ordenadas
            showProductsList(productsArray);
        }
    }
    });