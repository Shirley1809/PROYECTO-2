function mostrar(str) {
    var Docente_Escogido = '';
    if (str == 'Persona_1') { Docente_Escogido = 'Patricia Quiroz'; }
    else if (str == 'Persona_2') { Docente_Escogido = 'Homero Mendoza'; }
    else if (str == 'Persona_3') { Docente_Escogido = 'William Delgado'; }
    else if (str == 'Persona_4') { Docente_Escogido = 'Robert Moreira'; }
    else if (str == 'Persona_5') { Docente_Escogido = 'Jonny Peréz '; }
    else if (str == 'Persona_6') { Docente_Escogido = 'Juan Sendón'; }
    else if (str == 'Persona_7') { Docente_Escogido = 'Virginia Rodriguez'; }
    else if (str == 'Persona_8') { Docente_Escogido = 'Winter Molina'; }
    else if (str == 'Persona_9') { Docente_Escogido = 'Leo Cabeza'; }
    else if (str == 'Persona_10') { Docente_Escogido = 'Edison Almeida'; }
    else { Docente_Escogido = 'none'; }
    var xmlhttp;
    if (str.length == 0 || Docente_Escogido == 'none') {
        document.getElementById("txtInformacion").innerHTML = "No existen datos del Docente.";
        mostrarDocentes(); return;
    }
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var jsonResponse = xmlhttp.responseText;
            var objeto_json = JSON.parse(jsonResponse);
            docenteRecibidos = objeto_json.Datos_Docentes.Docente_lista;

            for (var i = 0; i < docenteRecibidos.length; i++) {
                var nombreDocente = objeto_json.Datos_Docentes.Docente_lista[i].nombre_titulo;
                if (nombreDocente == Docente_Escogido) {
                    document.getElementById("txtInformacion").innerHTML = ' Los datos de  '
                        + nombreDocente + ' son: ';
                    var selectDocentes = objeto_json.Datos_Docentes.Docente_lista[i].datos_lista;
                    mostrarDocentes(selectDocentes);
                }
            }

        }
    }
    xmlhttp.open("GET", "json/json.json?nocache=' + (new Date()).getTime()");
    xmlhttp.send();
}
function mostrarDocentes(arrayDocentes) {
    var nodoMostrarResultados = document.getElementById('listaDocentes');
    if (!arrayDocentes) { nodoMostrarResultados.innerHTML = ''; return }
    var contenidosAMostrar = '';
    for (var contenido = 0; contenido < arrayDocentes.length; contenido++) {
        contenidosAMostrar = contenidosAMostrar + '<div id="docentes' + contenido + '">';
        contenidosAMostrar += arrayDocentes[contenido] + '</div>';
    }
    if (contenidosAMostrar) { nodoMostrarResultados.innerHTML = contenidosAMostrar; }
}