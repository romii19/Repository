//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
 function login(user, password){
  var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
  if (user.trim()==="" || password.trim()===""){
    alert("Debe rellenar los datos para contiuar");
     
   }else{
   
 ((user=="Admin" || password=="Admin")|| (user=="guest" && password=="") )
  localStorage.setItem("usuario", "user.trim()");//setItem almacena el dato en la posición "usuario"
  sessionStorage.setItem("usuario", user);
  location.href="home.html";
   }
  }
// function singIn(google){}


document.addEventListener("DOMContentLoaded", function(e){
});
  