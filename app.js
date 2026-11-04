function crearEstrella() {
    const estrella = document.createElement('div');
    estrella.classList.add('estrella');
    estrella.innerText = '✦';
    
    // Posición aleatoria en la pantalla
    estrella.style.left = Math.random() * 100 + 'vw';
    estrella.style.top = Math.random() * 100 + 'vh';
    
    // Tamaño aleatorio
    const tamano = Math.random() * 15 + 10;
    estrella.style.fontSize = tamano + 'px';
    
    // Retraso aleatorio para el parpadeo
    estrella.style.animationDelay = Math.random() * 2 + 's';

    document.body.appendChild(estrella);
}

// Crear las 40 estrellas iniciales en la pantalla
for (let i = 0; i < 40; i++) {
    crearEstrella();
}
