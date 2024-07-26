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
    "La carta de la Sacerdotisa: confía en tu intuición y sabiduría interior.",
    "La carta de la Emperatriz: la abundancia y la creatividad están en tu futuro.",
    "La carta del Emperador: el liderazgo y la estabilidad son clave ahora.",
    "La carta del Papa: busca el conocimiento y el consejo de los sabios.",
    "La carta de los Enamorados: decisiones importantes en relaciones están por venir.",
    "La carta del Carro: el éxito y la victoria están en tu camino.",
    "La carta de la Justicia: se avecinan decisiones justas y equilibradas.",
    "La carta del Ermitaño: es momento de introspección y reflexión.",
    "La carta de la Rueda de la Fortuna: grandes cambios y ciclos se están completando.",
    "La carta de la Fuerza: la valentía y la fuerza interior te guiarán."
];

document.getElementById('drawCardBtn').addEventListener('click', function() {
    const randomReading = readings[Math.floor(Math.random() * readings.length)];
    document.getElementById('readingText').textContent = randomReading;
});
