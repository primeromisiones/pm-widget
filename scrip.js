function actualizarHora() {

    const ahora = new Date();

    const horas = String(ahora.getHours()).padStart(2, "0");
    const minutos = String(ahora.getMinutes()).padStart(2, "0");

    const dias = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
    ];

    const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
    ];

    document.getElementById("hora").innerHTML =
        "🕒 " + horas + ":" + minutos;

    document.getElementById("fecha").innerHTML =
        dias[ahora.getDay()] + ", " +
        ahora.getDate() + " de " +
        meses[ahora.getMonth()] + " de " +
        ahora.getFullYear();

}

actualizarHora();

setInterval(actualizarHora, 1000);
