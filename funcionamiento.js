function fondoSecLeave(){
    var bienvenido=document.getElementById('bienveni');
    var datosbio=document.getElementById('datosbio');
    var experiencia=document.getElementById('expe');
    var interesante=document.getElementById('inter');
    if(bienvenido){
        bienvenido.style.backgroundColor="white";
        bienvenido.style.border="white";
        bienvenido.style.borderColor="white"
        bienvenido.style.padding="20px";
    }else if(datosbio){
        datosbio.style.backgroundColor="white";
        datosbio.style.border="white";
        datosbio.style.borderColor="white"
        datosbio.style.padding="20px";
    }

}
function fondoSecOver(){
    var bienvenido=document.getElementById('bienveni');
    var datosbio=document.getElementById('datosbio');
    var experiencia=document.getElementById('expe');
    var interesante=document.getElementById('inter');
    if(bienvenido){
        bienvenido.style.backgroundColor="cyan";
        bienvenido.style.border="solid";
        bienvenido.style.borderColor="black"
        bienvenido.style.padding="10px";
    }else if(datosbio){
        datosbio.style.backgroundColor="cyan";
        datosbio.style.border="solid";
        datosbio.style.borderColor="black"
        datosbio.style.padding="10px";
    }


}