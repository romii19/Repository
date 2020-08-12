//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function login(user, pass){
    if(user.trim()==="" || pass.trim()===""){
        alert("Debe rellenar los datos para contiuar");
    }else{
        
        window.location="home.html"
    }
}
document.addEventListener("DOMContentLoaded", function(e){

});
localStorage.setItem("usuario", user.trim());
        localStorage.setItem("contraseña", pass.trim());