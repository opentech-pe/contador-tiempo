var iconOffAir = "iconos/fueraLinea.png";
var iconOnAir = "iconos/enLinea.png";
var onAirText = "On Air";
var offAirText = "Off Air";
var tiempo;
var horasFaltantes;
var minutosFaltantes;
var segundosFaltantes;
var contando;
var horaCero = "00:00:00";
var estado = true;
function iniciador() {
    document.getElementById("iconEmision").src=iconOnAir;
    document.getElementById("estadoTxt").innerHTML=onAirText;
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
    if(horasFaltantes==0 && minutosFaltantes==0 && segundosFaltantes==0 ){
        detenerConteo();
    }
}
function detenerConteo() {
    clearTimeout(contando);
    tiempo = 0;
    document.getElementById("contador").innerHTML=horaCero;
    document.getElementById("play").disabled=false;
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