body {
    font-family: Arial, sans-serif;
    background-color: #f3f4f6;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    text-align: center;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #333;
}

.card-container {
    margin: 20px 0;
}

const readings = [
    "La carta del Loco: nuevas aventuras y oportunidades se acercan.",
    "La carta del Mago: tienes el poder de crear tu propia realidad.",
    "La carta de la Sacerdotisa: conf�a en tu intuici�n y sabidur�a interior.",
    "La carta de la Emperatriz: la abundancia y la creatividad est�n en tu futuro.",
    "La carta del Emperador: el liderazgo y la estabilidad son clave ahora.",
    "La carta del Papa: busca el conocimiento y el consejo de los sabios.",
    "La carta de los Enamorados: decisiones importantes en relaciones est�n por venir.",
    "La carta del Carro: el �xito y la victoria est�n en tu camino.",
    "La carta de la Justicia: se avecinan decisiones justas y equilibradas.",
    "La carta del Ermita�o: es momento de introspecci�n y reflexi�n.",
    "La carta de la Rueda de la Fortuna: grandes cambios y ciclos se est�n completando.",
    "La carta de la Fuerza: la valent�a y la fuerza interior te guiar�n."
];

document.getElementById('drawCardBtn').addEventListener('click', function() {
    const randomReading = readings[Math.floor(Math.random() * readings.length)];
    document.getElementById('readingText').textContent = randomReading;
});
