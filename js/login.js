//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function login(dato, pass){  

  if (dato.trim()==="" || pass.trim()===""){ //Chequea si el dato recibido no esté vacío. 
  //El método trim elimina los espacios en blanco al inicio y al final.
      alert("El dato está vacío");
  }    else{
  localStorage.setItem("usuario", dato.trim()); //setItem almacena el dato en la posición "usuario"
  // localStorage.setItem("password", pass.trim()); // Almaceno la contraseña
  sessionStorage.setItem("usuario", dato.trim());
  alert (" Usuario : " + dato  ); 
  
 
  location.href="home.html";
  
  //getItem obtiene el dato almacenado en la posición "usuario"
 
  }
}
document.addEventListener("DOMContentLoaded", function(e){
});
  