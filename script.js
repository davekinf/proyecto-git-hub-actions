// script.js - Archivo JavaScript básico
document.addEventListener('DOMContentLoaded', function() {
    const output = document.getElementById('output');
    const currentDate = new Date();
    
    output.innerHTML = `
        <h2>Información del Proyecto</h2>
        <p>Fecha y hora actual: ${currentDate.toLocaleString()}</p>
        <p>Este proyecto está configurado con:</p>
        <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Git para control de versiones</li>
            <li>GitHub Actions para CI/CD</li>
        </ul>
    `;
});
