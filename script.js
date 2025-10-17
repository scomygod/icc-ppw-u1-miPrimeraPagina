// Botón que agrega una nueva fila a la tabla
const boton = document.getElementById("agregarFila");
boton.addEventListener("click", () => {
    const tabla = document.querySelector("table");
    const nuevaFila = tabla.insertRow();
    nuevaFila.innerHTML = "<td>&lt;article&gt;</td><td>Sección independiente del contenido</td><td></td><td></td>";
});

// Efecto de color al pasar el mouse sobre el título
const titulo = document.getElementById("titulo");
titulo.addEventListener("mouseover", () => {
    titulo.style.color = "orange";
});
titulo.addEventListener("mouseout", () => {
    titulo.style.color = "white";
});

// Evento personalizado: mostrar alerta al hacer doble clic en el título
titulo.addEventListener("dblclick", () => {
    alert("Sí, este el título!");
});