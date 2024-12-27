document.addEventListener('DOMContentLoaded', () => {
    showSection('introduction');
});

function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('is-visible');
    });

    // Mostrar la sección seleccionada
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';

    // Aplicar la animación
    setTimeout(() => {
        sectionToShow.classList.add('is-visible');
    }, 100);
}

function toggleGraphs(sectionId, buttonId) {
    var graphSection = document.getElementById(sectionId);
    var button = document.getElementById(buttonId);

    // Verificar si los gráficos están ocultos
    if (graphSection.style.display === "none" || graphSection.style.display === "") {
        graphSection.style.display = "block"; // Muestra el bloque de gráficos
        button.textContent = buttonId === 'toggleButtonPCA' ? "Hide PCA Plots" : buttonId === 'toggleButtonImages' ? "Hide Dendograms" : "Hide Plots"; // Cambia el texto del botón
    } else {
        graphSection.style.display = "none"; // Oculta el bloque de gráficos
        button.textContent = buttonId === 'toggleButtonPCA' ? "Show PCA Plots" : buttonId === 'toggleButtonImages' ? "Show Dendograms" : "Show Plots"; // Cambia el texto del botón
    }
}

// Ocultar gráficos por defecto al cargar la página
window.onload = function() {
    var imageGraphSection = document.getElementById("graphSectionIframes");
    var pcaGraphSection = document.getElementById("graphSection2");
    var imgGraphSection = document.getElementById("graphSectionImages");

    // Asegúrate de que los gráficos estén ocultos al inicio
    imageGraphSection.style.display = "none"; 
    pcaGraphSection.style.display = "none"; 
    imgGraphSection.style.display = "none"; // Oculta la sección de imágenes
};


  