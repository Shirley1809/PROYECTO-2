/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function notifica(){
	alert('Inicie sesión o registrese...');
}
function notificacion(){
	alert(' No tiene notificaciones..');
}

//APIS DE GEOLOCALIZACION
function iniciarMap(){ //crear funcion 
    var coord = {lat:-0.9523536491654041, lng:-80.74474639808658}; // creamos variables coord para mostrar la ubicacion atreavez de lat y lng
    var map = new google.maps.Map(document.getElementById('map'),{  // variable map con un nuevo elemnto que llo tomamos de la id de html
      zoom: 18, //objeto para nuetro zoom que querramos del map
      center: coord //donde queremos centar el mapa
    });
    var marker = new google.maps.Marker({ //apis y creamos marcador de nuestra ubicacion
      position: coord,
      map: map
    });
}

