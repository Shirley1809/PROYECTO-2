/* eslint-disable no-undef */
const firebaseConfig = {
    apiKey: "AIzaSyDFhchcU7h6IRrHRH7kj_i7j38EG2cbIYw",
    authDomain: "proyectosilabo.firebaseapp.com",
    projectId: "proyectosilabo",
    storageBucket: "proyectosilabo.appspot.com",
    messagingSenderId: "924722740541",
    appId: "1:924722740541:web:b479a767bd540928cf9954"
  };

 firebase.initializeApp(firebaseConfig);
 
 let db = firebase.firestore();
// Base de datos 1
//Registrarse

 const SaveUser = (user)=>{
    db.collection("Registro_usuarios").add({
        user,
    })
    .then(function(docRef) {
        correcto1();

    })
    .catch(function(error){
        incorrecto1();
    });
 }
 const correcto1 =()=>{
    if(Swal.fire(
        'Exelente!',
        'Se registró correctamente!',
        'success'
      ))
      window.location='home.html';
 }

 const incorrecto1 =()=>{
    Swal.fire(
        'ERROR!',
        'No se pudo registrar!',
        'error'
      )
 }

    $("#btnsave").on('click',()=>{
        let usuario_r = $("#usuario").val();
        let nombre_r = $("#nombre").val();
        let contraseña_r = $("#password").val();
        let contraseña2_r = $("#password2").val();
        let correo_r = $("#correo").val();
        let telefono_r = $("#telefono").val();
        
        const user ={
            usuario_r,
            nombre_r,
            contraseña_r,
            contraseña2_r,
            correo_r,
            telefono_r
        }

        SaveUser(user);

    })
// Base de datos 2
//Credenciales o inicio de sesión
const Savecredenciales = (credencial)=>{
    db.collection("Inicio_sesion").add({
        credencial,
    })
    .then(function(docRef) {
        correcto2();

    })
    .catch(function(error){
        incorrecto2();
    });
 }

 const correcto2 =()=>{
    if(Swal.fire(
        'Exelente!',
        'Inicio de sesión correcto!',
        'success'   
      ))
        window.location='home.html';

 }
const incorrecto2 =()=>{
    Swal.fire(
        'ERROR!',
        'No pudo iniciar sesión!',
        'error'
      )
 }
$("#btnsavec").on('click',()=>{
 let usuario_rc = $("#usuario").val();
 let contraseña_rc = $("#password").val();

 const credencial ={
     usuario_rc,
     contraseña_rc
     
 }

Savecredenciales(credencial);
})
//_______________________________AVANCE 4________________________________________

//Base de datos 3
//ASIGNATURA 
const SaveAsignatura = (Asignatura)=>{
    db.collection("Registro_Asignatura").add({
        Asignatura,
    })
    .then(function(docRef) {
        correcto3();

    })
    .catch(function(error){
        incorrecto3();
    });
 }

 const correcto3 =()=>{
    Swal.fire(
        'Exelente!',
        'Ingresó asignatura correctamente!',
        'success'   
      )
 }
const incorrecto3 =()=>{
    Swal.fire(
        'ERROR!',
        'No se pudo ingresar la asignatura!',
        'error'
      )
 }
$("#btnsavea").on('click',()=>{
 let codigo_a = $("#codigo").val();
 let nombre_a = $("#asignatura").val();
 let carrera_a = $("#carrera").val();
 let nivel_a = $("#nivel").val();
 let docente_a = $("#docente").val();


 const Asignatura ={
     codigo_a,
     nombre_a,
     carrera_a,
     nivel_a,
     docente_a
     
 }

SaveAsignatura(Asignatura);
})

//Base de datos 4
//SILABO

const SaveSilabo = (Silabo)=>{
    db.collection("Registro_Silabo").add({
        Silabo,
    })
    .then(function(docRef) {
        correcto4();

    })
    .catch(function(error){
        incorrecto4();
    });
 }

 const correcto4 =()=>{
    Swal.fire(
        'Exelente!',
        'Se ingresó el sílabo correctamente!',
        'success'   
      )

 }
const incorrecto4 =()=>{
    Swal.fire(
        'ERROR!',
        'No se pudo ingresar el sílabo!',
        'error'
      )
 }
$("#btnsaveS").on('click',()=>{
 let codigo_s = $("#codigo").val();
 let nombre_s = $("#silabo").val();
 let carrera_s = $("#carrera").val();
 let unidadOrganizacional_s = $("#unidad").val();
 let periodo_s = $("#periodo").val();
 let paralelo_s = $("#paralelo").val();
 let docente_s = $("#docente").val();
 let archivo_s = $("#archivo").val();


 const Silabo ={
     codigo_s,
     nombre_s,
     carrera_s,
     unidadOrganizacional_s,
     periodo_s,
     paralelo_s,
     docente_s,
     archivo_s 
     
 }

SaveSilabo(Silabo);
})

//Base de datos 5
//CONTACTANOS
const SaveContactanos = (contactanos)=>{
    db.collection("Contactanos").add({
        contactanos,
    })
    .then(function(docRef) {
        correcto5();

    })
    .catch(function(error){
        incorrecto5();
    });
 }

 const correcto5 =()=>{
    Swal.fire(
        'Exelente!',
        'Datos enviados correctamente!',
        'success'   
      )

 }
const incorrecto5 =()=>{
    Swal.fire(
        'ERROR!',
        'Datos no enviados!',
        'error'
      )
 }
$("#btnsavecont").on('click',()=>{
 let nombre_c = $("#nombre").val();
 let correo_c = $("#correo").val();
 let telefono_c = $("#telefono").val();
 let mensaje_c = $("#comentario").val();

 const contactanos={
     nombre_c,
     correo_c,
     telefono_c,
     mensaje_c

     
 }
SaveContactanos(contactanos);
})

//Base de datos 6
//OLVIDO SU CONTRASEÑA
const Savecontraseña = (contraseña)=>{
    db.collection("Olvido_contraseña").add({
        contraseña,
    })
    .then(function(docRef) {
        correcto6();

    })
    .catch(function(error){
        incorrecto6();
    });
 }

 const correcto6 =()=>{
    Swal.fire(
        'Exelente!',
        'Se envió el código de verificación a su correo!',
        'success'   
      )

 }
const incorrecto6 =()=>{
    Swal.fire(
        'ERROR!',
        'No se pudo enviar el código!',
        'error'
      )
 }
$("#btnsaveol").on('click',()=>{
 let correo_o = $("#correo").val();

 const contraseña ={
     correo_o,
 }

Savecontraseña(contraseña);
})
//Base de datos 7
//INCIDENCIAS
const SaveIncidencia = (incidencia)=>{
    db.collection("Incidencias").add({
        incidencia,
    })
    .then(function(docRef) {
        correcto7();

    })
    .catch(function(error){
        incorrecto7();
    });
 }

 const correcto7 =()=>{
    Swal.fire(
        'Exelente!',
        'Datos enviados correctamente!',
        'success'   
      )

 }
const incorrecto7 =()=>{
    Swal.fire(
        'ERROR!',
        'Datos no enviados!',
        'error'
      )
 }
$("#btnsavei").on('click',()=>{
 let nombre_i = $("#nombre").val();
 let correo_i = $("#correo").val();
 let telefono_i = $("#telefono").val();
 let descripcion_i = $("#descripcion").val();

 const incidencia={
     nombre_i,
     correo_i,
     telefono_i,
     descripcion_i

     
 }
SaveIncidencia(incidencia);
})








