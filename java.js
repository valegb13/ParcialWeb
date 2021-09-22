function AñadirGustos(){
    const Gusto = document.getElementById("Gustos").value;
    const Tabla = document.getElementById("tablatabla");
    
    var tablita = Tabla.insertRow(-1);

    var celdita0 = tablita.insertCell(0);
    var celdita1 = tablita.insertCell(1);
    var celdita2 = tablita.insertCell(2);

    celdita0.setAttribute("id",tablita.rowIndex+"Gusto");
    celdita1.setAttribute("id",tablita.rowIndex+"Porcentaje");
    celdita2.setAttribute("id",tablita.rowIndex+"Editar");

    celdita0.innerHTML=Gusto;
    celdita1.innerHTML=0;
    celdita2.innerHTML="<a class='editable' onclick='editValues(" +tablita.rowIndex+ ")'>Editar</a>";

}

function editValues(fila){

    var celdita0 = document.getElementById(fila+"Gusto");
    var celdita1 = document.getElementById(fila+"Porcentaje");
    var celdita2 = document.getElementById(fila+"Editar");

    var Gusto=celdita0.innerText;
    var Porcentaje=celdita1.innerText;

    celdita0.innerHTML="<input type='text' id='GustoEditable'></input>";
    document.getElementById("GustoEditable").value=Gusto;
    celdita1.innerHTML="<input type='text' id='PorcentajeEditable'></input>";
    document.getElementById("PorcentajeEditable").value=Porcentaje;
    celdita2.innerHTML="<p style='color=#606163;'>editando</p>";

    var ContenedorBotones=document.getElementById("ContenedorBotones");
    ContenedorBotones.innerHTML=`<p>Inserte<input type='button' onclick='Aceptar(${fila})' id='BAceptar' style='color: #606163; background-color: white;border-radius: 3px'value='Aceptar'><input type='button' onclick="Cancelar('${Gusto}','${Porcentaje}','${fila}')" id='BCancelar' style='color: red; background-color: white;border-radius: 3px'value='Cancelar'; border-color:red;'></input>`;
    
    
}
function Aceptar(fila){
    var gustos=document.getElementById("GustoEditable").value;
    var celdita0 = document.getElementById(fila+"Gusto");
    celdita0.innerHTML=gustos;
   
    var Porcentaje=document.getElementById("PorcentajeEditable").value;
    var celdita1 = document.getElementById(fila+"Porcentaje");
    celdita1.innerHTML=Porcentaje;

    var celdita2=document.getElementById(fila+"Editar");
    celdita2.innerHTML="<p>editar</p>";

}
function Cancelar(Gusto,Porcentaje,fila){
    
    var celdita0 = document.getElementById(fila+"Gusto");
    celdita0.innerHTML=Gusto;

    var celdita1 = document.getElementById(fila+"Porcentaje");
    celdita1.innerHTML=Porcentaje;
    
    console.log (Gusto,Porcentaje,fila);

    var celdita2=document.getElementById(fila+"Editar");
    celdita2.innerHTML="<p>editar</p>";
}
function Visualizar(){
    const nombre=document.getElementById("Nombre").value;
    const correo=document.getElementById("Correo").value;
    const telefono=document.getElementById("Telefono").value;

    var filaf=document.getElementById("tablatabla").rows.length-1;

    const gustar=document.getElementById(filaf+"Gusto").innerText;
    const porcentaje=document.getElementById(filaf+"Porcentaje").innerText;

    window.location.href=`resultado.html?Nombre=${nombre}&Email=${correo}&Telefono=${telefono}&gustar=${gustar}&Porcentaje=${porcentaje}`;
}

function reemplazo(){
    const Pag=new URLSearchParams(window.location.search);

    document.getElementById("Nombre").innerHTML=Pag.get("Nombre");
    document.getElementById("email").innerHTML=Pag.get("Email");
    document.getElementById("fichat").innerHTML=Pag.get("Telefono");
    document.getElementById("fichag").innerHTML=Pag.get("gustar");
    document.getElementById("fichap").innerHTML=Pag.get("Porcentaje");
   
    
}