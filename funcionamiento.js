/*Funcion mouseOver seccion*/
function fondoSecOver(sec){
    sec.style.backgroundColor="cyan";
    sec.style.border="solid";
    sec.style.borderColor="black"
    sec.style.padding="10px";

}

/*Funcion mouseOut seccion*/
function fondoSecOut(sec){
    sec.style.backgroundColor="white";
    sec.style.border="white";
    sec.style.borderColor="white"
    sec.style.padding="20px";
}

/*Funcion scroll lento*/
function scroll(){
    window.scrollTo(0,1000);
}
window.onload=function(){
    document.getElementsByTagName("a").onclick=scroll
}

/*Funcion formulario chat*/
function chat(){
    chatdiag= document.getElementById("texto")
    nombre=document.chatt.nombre.value
    mensaje=document.chatt.mensaje.value
    if(nombre ==""|| mensaje==""){
        alert("llene todos los campos")
    }else {
        if(mensaje.length >301)
        alert("el mensaje es muy largo.Escriba otro")
        else
        chatdiag.innerHTML=chatdiag.innerHTML+"<br>"+nombre+":"+mensaje
    }
    
}
window.onload=function(){
    document.chatt.enviar.onclick = chat
}