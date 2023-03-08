
document.getElementById("email").addEventListener("click", function(){
     console.log( " Estamos capturando con addEventLiltener");
     document.getElementById("user_title").innerHTML = " Mi mail es :";
    console.log( " Estamos cambiando el titulo");
    document.getElementById("user_value").innerHTML= "vivien@email.com"; 
 });  
document.getElementById("user").addEventListener("click" , function ( ){
    console.log( " Estamos capturando con addEventLiltener");
    
    document.getElementById("user_title").innerHTML = "Hola me llamo";
    console.log( " Estamos cambiando el titulo");
    document.getElementById("user_value").innerHTML = "Vivien McLuhan";
console.log( " Estamos cambiando el nombre");
});
document.getElementById("birth").addEventListener("click", function(){
     console.log( " Estamos capturando con addEventLiltener");
     document.getElementById("user_title").innerHTML = " Mi fecha de nacimiento es :";
    console.log( " Estamos cambiando el titulo");
    document.getElementById("user_value").innerHTML= " 02 / 02 / 2000"; 
 });  
 document.getElementById("location").addEventListener("click", function(){
     console.log( " Estamos capturando con addEventLiltener");
     document.getElementById("user_title").innerHTML = " Mi direccion es :";
    console.log( " Estamos cambiando el titulo");
    document.getElementById("user_value").innerHTML= " Abbey Road 555"; 
 });  
 document.getElementById("telephone").addEventListener("click", function(){
     console.log( " Estamos capturando con addEventLiltener");
     document.getElementById("user_title").innerHTML = " Mi telefono es  :";
    console.log( " Estamos cambiando el titulo");
    document.getElementById("user_value").innerHTML= "011-5555-5555"; 
 });  
 document.getElementById("padlock").addEventListener("click", function(){
     console.log( " Estamos capturando con addEventLiltener");
     document.getElementById("user_title").innerHTML = " Mi password es :";
    console.log( " Estamos cambiando el titulo");
    document.getElementById("user_value").innerHTML= "Ni pienses que te voy a dar mi password "; 
 }); 
 function bigImg(x) {
  x.style.height = "64px";
  x.style.width = "64px";
}
document.getElementById("padlock").addEventListener("mouseover", function(){
    console.log( " Estamos capturando con mouseover");
    bigImg(this); 
});
document.getElementById("padlock").addEventListener("mouseout", function(){
    console.log( " Estamos liberando con mouseout");
    normalImg(this); 
});
 document.getElementsByClassName("tooltip").addEventListener("mouseover", function(){
    console.log( " Estamos capturando con mouseover");
    bigImg(this); 
});

function normalImg(x) {
  x.style.height = "50px";
  x.style.width = "auto";
}