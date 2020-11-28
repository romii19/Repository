//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var user={};
        function guardar(){
            var nombre=document.getElementById('nombre').value;//obtengo los valores
            var edad=document.getElementById('edad').value;
            var ap=document.getElementById('ap').value;
            var email=document.getElementById('email').value;
            var tel=document.getElementById('tel').value;

            user.nombre= nombre;//guardo los valores
            user.edad=edad;
            user.ap=ap;
            user.email=email;
            user.tel=tel;
            
            localStorage.setItem("user",JSON.stringify(user)); //Guardo la lista en localStorage
        }
document.addEventListener("DOMContentLoaded", function (e) {
var user = JSON.parse(localStorage.getItem('user'));

 document.getElementById('nombre').value =user.nombre; //muestro los valores 
 document.getElementById('edad').value=user.edad;
 document.getElementById('ap').value=user.ap;
 document.getElementById('email').value=user.email;
 document.getElementById('tel').value=user.tel;

});

