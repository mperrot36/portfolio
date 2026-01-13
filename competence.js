const logos = [
    'logo/Bash_Logo_Colored.svg.png',
    'logo/blender.png',
    'logo/c.png',
    'logo/c++.png',
    'logo/css.png',
    'logo/excel_.png',
    'logo/HTML5_logo_and_wordmark.svg.png',
    'logo/java.png',
    'logo/js.png',
    'logo/kathara.png',
    'logo/Kotlin_Icon.png',
    'logo/php.png',
    'logo/phtoshop.png',
    'logo/powerpoint.png',
    'logo/python_logo_icon_168886.webp',
    'logo/rust.png',
    'logo/sql.png',
    'logo/word.png',
];

const container = document.body;
let index = 0;

function createLogo() {
    const img = document.createElement('img');
    img.src = logos[index % logos.length];
    img.classList.add('logo');
    img.style.left = Math.random() * (window.innerWidth - 60) + 'px';
    img.style.top = '-100px';
    container.appendChild(img);

    // Temps de chute aléatoire entre 3 et 6 secondes
    const fallDuration = 3 + Math.random() * 3;
    // Hauteur d'atterrissage (90% de la hauteur de la fenêtre)
    const landingPosition = window.innerHeight * 0.9 - 60;
    
    // Animation de chute
    img.style.transition = `top ${fallDuration}s cubic-bezier(0.33, 0, 0.66, 1)`;
    
    // Déclencher l'animation après un court délai pour permettre au navigateur de rendre l'élément
    setTimeout(() => {
        img.style.top = landingPosition + 'px';
    }, 10);

    // Après l'atterrissage, attendre puis disparaître
    setTimeout(() => {
        img.style.transition = 'opacity 1.5s ease-out';
        img.style.opacity = '0';
        
        // Supprimer l'élément après la disparition
        setTimeout(() => {
            if (img.parentNode) {
                img.parentNode.removeChild(img);
            }
        }, 1500);
    }, fallDuration * 1000 + 300); // Attendre un peu après l'atterrissage

    index++;
}

setInterval(createLogo, 800);

// Ajuster la position d'atterrissage lors du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    const logos = document.querySelectorAll('.logo');
    const landingPosition = window.innerHeight * 0.9 - 60;
    
    logos.forEach(logo => {
        // Si le logo est en cours de chute (pas encore disparu)
        if (parseFloat(logo.style.top) > 0 && logo.style.opacity !== '0') {
            const currentTop = parseFloat(logo.style.top);
            // Si le logo est déjà près de la position d'atterrissage, l'y maintenir
            if (currentTop > window.innerHeight * 0.7) {
                logo.style.top = landingPosition + 'px';
            }
        }
    });
});