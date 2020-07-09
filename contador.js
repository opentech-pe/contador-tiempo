var tiempo;
var horasFaltantes;
var minutosFaltantes;
var segundosFaltantes;
var contando;
var horaCero = "00:00:00";
var estado = true;
var estadoInputHora = true;
var estadoMinuto = true;
var minutero;
var segundero = -1;
var tiempoMinutero;
function iniciador() {
    document.getElementById("stop").disabled=true;
    document.getElementById("contador").innerHTML=horaCero;
}

function iniciarConteo() {
    //capturar la hora final
    var hora = document.getElementById("tiempo").value;
    //capturar el tiempo presente
    var date = new Date();
    //variable operacional
    var residuo;
    //crear el tiempo final
    var postDate = new Date();
    var horaFinal = hora.substring(0,2);
    var minutoFinal = hora.substring(3,5);
    var segundoFinal = 0;
    postDate.setHours(horaFinal);
    postDate.setMinutes(minutoFinal);
    postDate.setSeconds(segundoFinal)
    tiempo = Math.abs(postDate - date);
    //document.getElementById("contador").innerHTML=tiempo;
    horasFaltantes = Math.trunc(tiempo / 3600000);
    if (horasFaltantes<10) {
        horasFaltantes = "0"+horasFaltantes;
    }
    residuo = tiempo % 3600000;
    minutosFaltantes = Math.trunc(residuo / 60000);
    if (minutosFaltantes<10) {
        minutosFaltantes = "0"+minutosFaltantes;
    }
    residuo = residuo % 60000;
    segundosFaltantes = Math.trunc(residuo / 1000);
    if (segundosFaltantes<10) {
        segundosFaltantes = "0"+segundosFaltantes;
    }
    document.getElementById("contador").innerHTML=horasFaltantes+":"+minutosFaltantes+":"+segundosFaltantes;
    //ejecutar esta misma funcion cada segundo
    contando = setTimeout(iniciarConteo,1000);
    document.getElementById("play").disabled=true;
    document.getElementById("stop").disabled=false;
    document.getElementById("tiempo").disabled=true;
    if(horasFaltantes==0 && minutosFaltantes==0 && segundosFaltantes==0 ){
        detenerConteo();
    }
}
function detenerConteo() {
    clearTimeout(contando);
    clearTimeout(tiempoMinutero);
    tiempo = 0;
    document.getElementById("contador").innerHTML=horaCero;
    document.getElementById("play").disabled=false;
    document.getElementById("tiempo").disabled=false;
    document.getElementById("minutero").disabled=false;
    minutero = 0;
    segundero = -1;
}

function ocultar(){
    switch (estado) {
        case true:
            document.getElementById("inputs").style.display='none';    
            estado = false;
            break;
        case false:
            document.getElementById("inputs").style.display='block';
            estado = true;
        default:
            break;
    }
}


function contarMinutos(){
    var hora = document.getElementById("tiempo").value;
    minutero = hora.substring(3,5);
    contadorDos();
}

function contadorDos(){
    var temporal1;
    var temporal2;
    if (segundero==-1) {
        segundero=60;
        minutero=minutero-1;
    }
    if(minutero<10){
        temporal1 = "0"+minutero;
    }else{
        temporal1 = minutero;
    }
    if(segundero<10){
        temporal2 = "0"+segundero;
    }else{
        temporal2 = segundero;
    }
    document.getElementById("contador").innerHTML="00:"+temporal1+":"+temporal2;
    segundero=segundero-1;
    tiempoMinutero = setTimeout(contadorDos,1000);
    document.getElementById("tiempo").disabled=true;
    document.getElementById("stop").disabled=false;
    document.getElementById("play").disabled=true;
    document.getElementById("minutero").disabled=true;
    if(minutero==0 && segundero==-1){
        clearTimeout(tiempoMinutero);
        document.getElementById("tiempo").disabled=false;
        document.getElementById("play").disabled=false;
        document.getElementById("minutero").disabled=false;
        document.getElementById("stop").disabled=true;
        }
}
