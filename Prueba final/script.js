var modificar = (listadoNuevo)=>{
    let eNombre = document.getElementById("nombre");
    let eFecha = document.getElementById("fecha");
    let eEmail = document.getElementById("email");
    let eSkills = document.getElementById("skills");
    let eColordepiel = document.getElementById("colordepiel")
    let eMedia = document.getElementById("media")
    let eBtnEditarUp = document.getElementById('btnEditar');
            
    let nombre = eNombre.value;
    let fecha = eFecha.value;
    let email = eEmail.value;
    let skills = eSkills.value;
    let colordepiel = eColordepiel.value;
    let media = eMedia.value;
    let indice = eBtnEditarUp.value;
    listadoNuevo[indice].nombre = nombre;
    listadoNuevo[indice].fecha = fecha;
    listadoNuevo[indice].email = email;
    listadoNuevo[indice].skills = skills;
    listadoNuevo[indice].colordepiel = colordepiel;
    listadoNuevo[indice].media = media;
    localStorage.setItem('vehiculos',JSON.stringify(listadoNuevo));
    //Cargar la tabla de nuevo
    cargarTabla(listadoNuevo)
}
var eliminar = (listadoNuevo)=>{
    let eBtnEliminarUp = document.getElementById('btnEliminar');
    let indice = eBtnEliminarUp.value;
    console.log(listadoNuevo)
    lista = listadoNuevo.filter((p)=>p.id!=indice)
    lista = lista.map((p,index)=>{return {...p,'id':index}})
    console.log(lista)
    localStorage.setItem('socios',JSON.stringify(lista));
    cargarTabla(lista) 
}



var cargarTabla = (listadoNuevo)=>{
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eNombre = document.getElementById("nombre");
    let eFecha = document.getElementById("fecha");
    let eSkills = document.getElementById("skills");
    let eColordepiel = document.getElementById("color de piel");
    let eMedia = document.getElementById("media");
    let eOcupacion = document.getElementById("ocupacion");
    
    render = "<table>"
    render+="<tr><th>Nombre</th><th>Fecha Nacimiento</th><th>Email</th><th>Skills</th><th>Color de piel</th><th>Media</th><th>Accion</th></tr>"
    for (let i = 0; i <listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
        render+="<tr>"
        render+="<td>"+element.nombre+"</td>"
        render+="<td>"+element.fecha+"</td>"
        render+="<td>"+element.email+"</td>"
        render+="<td>"+element.skills+"</td>"
        render+="<td>"+element.colordepiel+"</td>"
        render+="<td>"+element.media+"</td>"
        render+="<td>"
        render+="<button id='btnEditar"+i+"'>Editar</button>"
        render+="<button id='btnEliminar"+i+"'>Eliminar</button>"
        render+="</td>"
        render+="</tr>"
        
    }
    render += "</table>";
    eContenedorTabla.innerHTML = render;
    for (let i = 0; i < listadoNuevo.length; i++) {
        var eBtn = document.getElementById("btnEditar"+i); 
        var eBtn2 = document.getElementById("btnEliminar"+i);
        let element = listadoNuevo[i]
        eBtn.addEventListener("click",()=>{
            eNombre.value = element.nombre;
            eFecha.value = element.fecha;
            eEmail.value = element.email;
            eSkills.value = element.skills;
            eColordepiel.value = element.colordepiel;
            eMedia.value = element.media;
            let sEditar = "<button type='button' id='btnEditar' value='"+i+"'>Editar</button>";
             
            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEditar;
            let eBtnEditarUp = document.getElementById('btnEditar');
            eBtnEditarUp.addEventListener('click',()=>modificar(listadoNuevo))
        })
        eBtn2.addEventListener("click",()=>{
            eNombre.value = element.nombre;
            eFecha.value = element.fecha;
            eEmail.value = element.email;
            eSkills.value = element.skills;
            eColordepiel.value = element.colordepiel;
            eMedia.value = element.media;
            let sEliminar = "<button type='button' id='btnEliminar' value='"+i+"'>Eliminar</button>";
            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEliminar;
            let eBtnEliminarUp = document.getElementById('btnEliminar');
            eBtnEliminarUp.addEventListener('click',()=>eliminar(listadoNuevo))
       
            
        })
    }
}

var registrar = ()=>{
    let eNombre = document.getElementById("nombre");
    let eFecha = document.getElementById("fecha");
    let eEmail = document.getElementById("email");
    let eSkills = document.getElementById("skills");
    let eColordepiel = document.getElementById("colordepiel");
    let eMedia = document.getElementById("media");
    let nombre = eNombre.value;
    let fecha = eFecha.value;
    let email = eEmail.value;
    let skills = eSkills.value;
    let colordepiel = eColordepiel.value;
    let media = eMedia.value;
    console.log(nombre);
    console.log(fecha);
    console.log(email);
    console.log(skills);
    console.log(colordepiel);
    console.log(media);
    let listadoVehiculos = localStorage.getItem("jugadores");
    let listadoAntiguo = JSON.parse(listadoVehiculos);
    if(listadoAntiguo==null){
        let vehiculo = {"id": 0,"nombre":nombre,"fecha":fecha,"email":email,"skills":skills,"colordepiel":colordepiel,"media":media}
        listadoNuevo = [vehiculo]
    }else{
        let vehiculo = {"id": listadoAntiguo.length,"nombr":nombre,"fecha":fecha,"email":email,"skills":skills,"colordepiel":colordepiel,"media":media}
        listadoNuevo = [...listadoAntiguo,vehiculo]
    }
    console.log(listadoAntiguo)
    console.log(listadoNuevo);
    localStorage.setItem("jugadores",JSON.stringify(listadoNuevo));
    //tabla
    cargarTabla(listadoNuevo)
    //
    
    
   }
var cargarDatos = ()=>{
    let listadoJugadores = localStorage.getItem("jugadores");
    let listadoAntiguo = JSON.parse(listadoJugadores);
    cargarTabla(listadoAntiguo)
}
document.getElementById("btn").addEventListener("click",registrar);
addEventListener('load',cargarTabla)

//traemos la funcion enableDarkMode, con document.body controlamos el body de la pagina y el classList.toggle activa y desactiva el modo oscuro
function enableDarkMode(){
    let main_body = document.body;
    main_body.classList.toggle("dark-mode");
}

// Obtener el tamaño de fuente actual
let fontSize = parseInt(getComputedStyle(document.body).fontSize);

// Función para aumentar el tamaño de fuente
function increaseFontSize() {
  fontSize += 2;
  document.body.style.fontSize = fontSize + "px";
}

// Función para reducir el tamaño de fuente
function decreaseFontSize() {
  if (fontSize > 8) {
    fontSize -= 2;
    document.body.style.fontSize = fontSize + "px";
  }
}
 
var email = document.getElementById('email')
var error = document.getElementById('error')
error.style.color= 'red';
function enviarFormulario(){
    console.log("enviandooooo")

    var mensajeserror = []

    if(email.value === null || email.value === ''){
        mensajeserror.push('ingresa tu email')

    }
    error.innerHTML = mensajeserror.join(', ')
    return false
}
// Event listeners para los botones
document.getElementById("increaseFontBtn").addEventListener("click", increaseFontSize);
document.getElementById("decreaseFontBtn").addEventListener("click", decreaseFontSize);