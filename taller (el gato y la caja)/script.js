function ajustarEstilos() {
    let contenedor = document.querySelector(".contenedor");
    let tarjeta = document.getElementById("tarjeta");
    let contenidoTarjeta = document.querySelector(".contenidoTarjeta");

    // Verificar si los elementos existen antes de aplicar estilos
    if (contenedor) {
        if (window.innerWidth <= 768) {
            contenedor.style.flexDirection = "column";
            contenedor.style.gap = "20px";
        } else {
            contenedor.style.flexDirection = "row";
            contenedor.style.gap = "300px";
        }
    }

    if (tarjeta && contenidoTarjeta) {
        if (window.innerWidth <= 768) {
            tarjeta.style.width = "90%";
            tarjeta.style.height = "auto";
            tarjeta.style.padding = "20px";
            tarjeta.style.margin = "10px auto";
            tarjeta.style.backgroundSize = "contain"; /* Para que el fondo no recorte texto */

            contenidoTarjeta.style.flexDirection = "column";
            contenidoTarjeta.style.alignItems = "center";
        } else {
            tarjeta.style.width = "90vw"; /* Evita que se corte en pantallas grandes */
            tarjeta.style.height = "auto";
            tarjeta.style.padding = "30px 10px 150px 150px";
            tarjeta.style.backgroundSize = "cover";

            contenidoTarjeta.style.flexDirection = "row";
        }
    }
}




