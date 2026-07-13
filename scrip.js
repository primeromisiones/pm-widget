// =====================================
// PRIMERO MISIONES | PANEL 1.0
// =====================================

// Coordenadas de San Javier (Misiones)
const LATITUDE = -27.873;
const LONGITUDE = -55.137;

// ===============================
// RELOJ
// ===============================

function updateClock() {

    const now = new Date();

    const dateOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    document.getElementById("current-date").textContent =
        now.toLocaleDateString("es-AR", dateOptions);

    document.getElementById("current-time").textContent =
        now.toLocaleTimeString("es-AR", timeOptions);

}

updateClock();
setInterval(updateClock, 1000);

// ===============================
// DESCRIPCIÓN DEL CLIMA
// ===============================

function weatherDescription(code) {

    const descriptions = {

        0: "Despejado",

        1: "Mayormente despejado",
        2: "Parcialmente nublado",
        3: "Nublado",

        45: "Niebla",
        48: "Niebla con escarcha",

        51: "Llovizna ligera",
        53: "Llovizna",
        55: "Llovizna intensa",

        56: "Llovizna helada",
        57: "Llovizna helada intensa",

        61: "Lluvia ligera",
        63: "Lluvia",
        65: "Lluvia fuerte",

        66: "Lluvia helada",
        67: "Lluvia helada intensa",

        71: "Nevada ligera",
        73: "Nevada",
        75: "Nevada intensa",

        77: "Granizo",

        80: "Chaparrones ligeros",
        81: "Chaparrones",
        82: "Chaparrones fuertes",

        85: "Nieve",
        86: "Nieve intensa",

        95: "Tormenta",

        96: "Tormenta con granizo",
        99: "Tormenta fuerte con granizo"

    };

    return descriptions[code] || "Sin datos";

}

// ===============================
// CLIMA
// ===============================

async function loadWeather() {

    const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        const current = data.current;

        document.getElementById("weather-temp").textContent =
            Math.round(current.temperature_2m) + "°";

        document.getElementById("weather-description").textContent =
            weatherDescription(current.weather_code);

        document.getElementById("weather-humidity").textContent =
            current.relative_humidity_2m + "%";

        document.getElementById("weather-wind").textContent =
            Math.round(current.wind_speed_10m) + " km/h";

    } catch (error) {

        console.error(error);

        document.getElementById("weather-temp").textContent = "--";

        document.getElementById("weather-description").textContent =
            "No se pudo obtener el clima";

        document.getElementById("weather-humidity").textContent = "--%";

        document.getElementById("weather-wind").textContent = "-- km/h";

    }

}

loadWeather();

// Actualizar el clima cada 10 minutos
setInterval(loadWeather, 600000);