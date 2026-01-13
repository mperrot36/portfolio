document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('startBtn');
    const startScreen = document.getElementById('startScreen');
    const animationContainer = document.getElementById('animationContainer');
    const nextButtonContainer = document.getElementById('nextButtonContainer');
    const nextBtn = document.getElementById('nextBtn');
    
    const texts = [
        ["Bonjour", "#ba2d2d", "#ff0000",'pincoya'],
        ["Bienvenue", "#d49a26", "#ffaa00",'neon'],
        ["sur", "#dbd518", "#faf200",'nashira'],
        ["LE", "#409156", "#0be345",'modular'],
        ["portfolio", "#239472", "#05fab0",'liquida'],
        ["de", "#325c9c", "#0066ff",'bruce'],
        ["Malo", "#712782", "#cb05f7",'husky'],
        ["Perrot", "#de66b2", "#ff05a3",'billo'],
    ];
    
    let currentIndex = 0;
    let animationInterval;
    let blinkInterval; // keep reference so we can clear it

    function showText(index, colorIndex) {
        animationContainer.innerHTML = '';

        const textElement = document.createElement('div');
        textElement.className = 'animated-text';
        textElement.textContent = texts[index % texts.length][0]; 
        textElement.style.color = texts[index % texts.length][colorIndex]; 
        textElement.style.fontFamily = texts[index % texts.length][3];
        textElement.style.fontSize = '400px';
  
        animationContainer.appendChild(textElement);
    }
    
    function startAnimation() {
        startScreen.style.display = 'none';
        animationContainer.style.display = 'flex';
        nextButtonContainer.style.display = 'none';
        let audio = new Audio("index.mp3");
        audio.play();

        
        currentIndex = -1;
        
        animationInterval = setInterval(() => {
            currentIndex++;
            
            if (currentIndex < texts.length * 2) {
                let blinkCount = 0;
                const blinkLimit = 6; // nombre de clignotements par mot
                if (blinkInterval) {
                    clearInterval(blinkInterval);
                    blinkInterval = null;
                }
                
                blinkInterval = setInterval(() => {
                    const colorIndex = (blinkCount % 2) + 1;
                    showText(currentIndex, colorIndex);
                    blinkCount++;
                    if (blinkCount >= blinkLimit) {
                        clearInterval(blinkInterval);
                        blinkInterval = null;
                    }
                }, 50);
                
            } else {
                // fin de l'animation : arrêter les intervalles et afficher le bouton "Suivant"
                if (animationInterval) {
                    clearInterval(animationInterval);
                    animationInterval = null;
                }
                if (blinkInterval) {
                    clearInterval(blinkInterval);
                    blinkInterval = null;
                }
                // masquer l'animation si vous le souhaitez
                animationContainer.style.display = 'none';
                // afficher le bouton "Suivant"
                nextButtonContainer.style.display = 'block';
            }
        }, 400); 
    }
    
    // action simple pour le bouton "Suivant" (à adapter)
    nextBtn.addEventListener('click', () => {
        nextButtonContainer.style.display = 'none';
            window.location.href = 'page_suivante.html';
    });
  
    startBtn.addEventListener('click', startAnimation);
});