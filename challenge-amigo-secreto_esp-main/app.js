let amigoGuardado = [];
//console.log(amigoGuardado);

// crea una funcion que evalue que amigos no sea espacios vacios ni caracteres especiales
function validarNombre() {
  let amigo = document.getElementById("amigo");
  const pattern = new RegExp("^[a-zñA-ZñáéíóúÁÉÍÓÚÑ ]+$");
  if (amigo.value.trim().length == 0) {
    return false;
  }
  if (!pattern.test(amigo.value)) {
    alert("No se permiten caracteres especiales y números; Por favor, inserte un nombre. ");
    return false;
  }
}

function agregarAmigo() {
  let valorNombre = document.getElementById('amigo').value.toUpperCase();


  if (validarNombre() == "") {
    alert("No se permiten espacios vacios; Por favor, inserte un nombre.")
    limpiarCaja();
    return;
  }

  if (amigoGuardado.includes(valorNombre.toUpperCase())) {
    //console.log(amigoGuardado.includes(valorNombre));
    // console.log(`EL NOMBRE  ${amigoGuardado.includes(valorNombre)}YA ESTÁ GUARDADO; NO SE PUEDE AGREGAR`);
    //console.log(amigoGuardado);
    alert(`EL NOMBRE  ${valorNombre} YA ESTÁ GUARDADO; NO SE PUEDE AGREGAR`);
    limpiarCaja();

  } else {

    amigoGuardado.push(valorNombre.toUpperCase());
    //console.log(valorNombre);
    // console.log(amigoGuardado);

    listarAmigos(valorNombre);
  }
  limpiarCaja();

}

function limpiarCaja() {
  document.getElementById('amigo').value = '';
  document.getElementById('amigo').focus();


}

function listarAmigos(valorNombre) {
  let elementoUL = document.getElementById("listaAmigos");
  let listaLi = document.createElement("li");
  elementoUL.appendChild(listaLi);
  listaLi.innerHTML = valorNombre;

}

function arraySinParticipantes() {
  let sorteo = document.getElementById("sorteo");
  if (amigoGuardado.length == 0) {
    //console.log("El array esta vacio");
    alert("DEBE AÑADIR USUARIOS PARA PARTICIPAR EN EL AMIGO SECRETO");
    limpiarCaja();

  }
}

function sortearAmigo() {
  arraySinParticipantes();
  let sorteo = document.getElementsByClassName("button-draw");
  if (amigoGuardado.length > 0) {
    let indiceAleatorio = Math.floor(Math.random() * amigoGuardado.length);
    let amigoSorteado = amigoGuardado[indiceAleatorio];
    let amigoSecreto = document.querySelector("h3");
    amigoSecreto.innerHTML = `EL AMIGO SECRETO SORTEADO ES  ${amigoSorteado.toUpperCase()}`;
    amigoSecreto.style.textAlign = "center";
    amigoSecreto.style.color = "green";
    amigoSecreto.style.marginBottom = "10px";
    return;

  }
}





