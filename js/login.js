//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
 function login(user, pass){
   if(user.trim()==="" || pass.trim()===""){
       alert("Debe rellenar los datos para contiuar");
   }else{
       location.href="home.html"
   }
 }
function save(user){
       if (user.trim()===""){
         alert("Vacío");
       }else{
         localStorage.setItem("usuario", user.trim());
         alert("se guardó" + localStorage.setItem("usuario"))
         location.href="home.html"
       }
}
// function singIn(google){}
document.addEventListener("DOMContentLoaded", function(e){

});
  