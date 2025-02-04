# Amigo Secreto

Este proyecto es una aplicación simple para gestionar un sorteo de "Amigo Secreto". Permite agregar nombres de amigos, listarlos y realizar el sorteo para seleccionar un amigo secreto al azar.

## Funciones

### `validarNombre()`
Valida que el nombre ingresado no contenga espacios vacíos ni caracteres especiales ni numeros .

### `agregarAmigo()`
Agrega un nombre a la lista de amigos si pasa la validación y no está duplicado.

### `limpiarCaja()`
Limpia el campo de entrada y enfoca el cursor en él.

### `listarAmigos(valorNombre)`
Agrega el nombre validado a una lista visual en la página.

### `arraySinParticipantes()`
Verifica si la lista de amigos está vacía y muestra una alerta si es así.

### `sortearAmigo()`
Realiza el sorteo de un amigo secreto al azar y muestra el resultado en la página.

## Uso

1. Ingrese el nombre de un amigo en el campo de texto.
2. Haga clic en el botón AÑADIR  para agregar el nombre a la lista.
3. Una vez que haya agregado todos los nombres, haga clic en el botón  SORTEAR para realizar el sorteo.

## Notas

- Los nombres no pueden contener caracteres especiales ni números.
- No se permiten nombres duplicados; en este caso aparecerá una alerta indicando que el nombre escrito en mayúscula o minúscula está ya ingresado en array.
- Debe haber al menos un nombre en la lista para realizar el sorteo, sino hay nombres en listado y el usuario hace clic en botón SORTEAR, le indicará que debe añadir un nombre en el campo de entrada.
- ESTE REPOSITORIO TAMBIÉN CONTIENE UN ARCHIVO DE VIDEO, EXPLICANDO LOS PASOS A SEGUIR DE ESTE CHALLENGE "AMIGO SECRETO"

## Requisitos

- Un archivo HTML con los elementos necesarios (`input`, `ul`, `h4`, etc.).
- Un archivo JavaScript (`app.js`) con las funciones descritas.
