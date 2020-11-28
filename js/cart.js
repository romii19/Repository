//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
       function ShowCarritoLista(array){
            let htmlContentToAppend = "";
            var cantidad = array.length;
           
            for(let i = 0; i < array.length; i++){
                let articles = array[i];
            htmlContentToAppend += `
            <table>
  <tr>
    <td></td>
    <th>Producto</th>
    <th></th>
    <th>Precio</th>
    <th>Subtotal</th>
  </tr>

  <tr>
    <th></th>
    <td><img src="`+ articles.src +`" > `+ articles.name +`</td>
    <td></td>
    <td><span class="text-black" id="productCostText">-</span>`+ articles.currency +`</td>
    <td><span class="text-muted" id="totalCoText">-</span></td>
    <td><button id="borrar" class="btn btn-danger" onclick="clear(); location.reload();">
    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>
    </button></td>
  </tr>
</table>
`
document.getElementById("carrito").innerHTML = htmlContentToAppend;
document.getElementById('cont').innerHTML=cantidad;
}
}
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
        carritoArray = resultObj.data.articles;
        ShowCarritoLista(carritoArray);
        }
    });
});
// ...................................................................

  let productCost = 100;
  let productCount = 0;
  let comissionPercentage = 0.13;
  let MONEY_SYMBOL = "$";
  let PESO_SYMBOL = "UYU ";
  let PERCENTAGE_SYMBOL = '%';
  let SUCCESS_MSG = "¡Se ha realizado la publicación con éxito! :)";
  let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";
  
  //Función que se utiliza para actualizar los costos de publicación
  function updateTotalCosts(){
      let unitProductCostHTML = document.getElementById("productCostText");
      let comissionCostHTML = document.getElementById("comissionText");
      let totalCostHTML = document.getElementById("totalCostText");
      let totalCoHTML = document.getElementById("totalCoText");

      let unitCostToShow = MONEY_SYMBOL + productCost;
      let comissionToShow = MONEY_SYMBOL + (Math.round(productCost * comissionPercentage * 100 * productCount) / 100);
      let totalCostToShow = (Math.round(productCost * productCount) ) + (Math.round(productCost * comissionPercentage * 100 * productCount) / 100);
      let totalCoToShow = MONEY_SYMBOL + (Math.round(productCost * productCount) );
  
      unitProductCostHTML.innerHTML = unitCostToShow;
      comissionCostHTML.innerHTML = comissionToShow;
      totalCostHTML.innerHTML = totalCostToShow;
      totalCoHTML.innerHTML = totalCoToShow;

  }
  
  //Función que se ejecuta una vez que se haya lanzado el evento de
  //que el documento se encuentra cargado, es decir, se encuentran todos los
  //elementos HTML presentes.
  document.addEventListener("DOMContentLoaded", function(e){
     document.getElementById("productCountInput").addEventListener("change", function(){
         productCount = this.value;
          updateTotalCosts();
      });
  
       /*document.getElementById("productCostInput").addEventListener("change", function(){
          productCost = this.value;
          updateTotalCosts();
      });*/
  
      document.getElementById("goldradio").addEventListener("change", function(){
          comissionPercentage = 0.13;
          updateTotalCosts();
      });
      
      document.getElementById("premiumradio").addEventListener("change", function(){
          comissionPercentage = 0.07;
          updateTotalCosts();
      });
  
      document.getElementById("standardradio").addEventListener("change", function(){
          comissionPercentage = 0.03;
          updateTotalCosts();
      });
    });
    document.getElementById('comprobar').addEventListener("click", function(){
        var mail=document.getElementById('correo');
        
        var call=document.getElementById('call');
    
        var num =document.getElementById('num');
        var met=document.getElementById('met');
        
        var marca="";
        // los borra cuando esta correcto
        mail.classList.remove('is-invalid');
        mail.classList.remove('is-valid');
        
        call.classList.remove('is-invalid');
        call.classList.remove('is-valid');
        
        num.classList.remove('is-invalid');
        num.classList.remove('is-valid');

        met.classList.remove('is-invalid');
        met.classList.remove('is-valid');

// si el campo no tiene ningun dato pone una cruz roja 
// sino pone un tick verde  
              if(mail.value===""){ 
        
              mail.classList.add('is-invalid');
        
              marca="";        
                  } else{
              marca="&#10004";
              mail.classList.add('is-valid');
              
                  }
        
                   if(call.value===""){ 
        
        call.classList.add('is-invalid');
        
        marca="X";
        
        } else{
          marca="&#10004";
          call.classList.add('is-valid');
        
        }
      
                 if(num.value===""){ 
      
      num.classList.add('is-invalid');
      marca="X";
      
      } else{
        marca="&#10004";
        num.classList.add('is-valid');
        
      } 
      if(met.value===""){ 
        
        met.classList.add('is-invalid');
        marca="";        
            } else{
        marca="&#10004";
        met.classList.add('is-valid');
            }
      document.getElementById('tick').innerHTML=marca;
  });
 //Se obtiene el formulario de publicación de producto
 var sellForm = document.getElementById("sell-info");

 //Se agrega una escucha en el evento 'submit' que será
 //lanzado por el formulario cuando se seleccione 'Vender'.
 sellForm.addEventListener("submit", function(e){

     let infoMissing = false;


     //Consulto por el costo
     if (num.value <=0)
     {
         num.classList.add('is-invalid');
         infoMissing = true;
     }
     if (call.value <=0)
     {
         call.classList.add('is-invalid');
         infoMissing = true;
     }

     if(!infoMissing)
     {
         //Aquí ingresa si pasó los controles, irá a enviar
         //la solicitud para crear la publicación.

         getJSONData(CART_BUY_URL).then(function(resultObj){
             let msgToShowHTML = document.getElementById("resultSpan");
             let msgToShow = "";
 
             //Si la publicación fue exitosa, devolverá mensaje de éxito,
             //de lo contrario, devolverá mensaje de error.
             if (resultObj.status === 'ok')
             {
                 msgToShow = resultObj.data.msg;
                 document.getElementById("alertResult").classList.add('alert-success');
             }
             else if (resultObj.status === 'error')
             {
                 msgToShow = ERROR_MSG;
                 document.getElementById("alertResult").classList.add('alert-danger');
             }
 
             msgToShowHTML.innerHTML = msgToShow;
             document.getElementById("alertResult").classList.add("show");
         });
     }

     //Esto se debe realizar para prevenir que el formulario se envíe (comportamiento por defecto del navegador)
     if (e.preventDefault) e.preventDefault();
         return false;
 });
  // ----------------------------------------------------------------------------------
  
