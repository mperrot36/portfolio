const logoData = [
    { src: 'logo/Bash_Logo_Colored.svg.png', url: 'https://www.gnu.org/software/bash/' },
    { src: 'logo/blender.png', url: 'https://www.blender.org/' },
    { src: 'logo/c.png', url: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
    { src: 'logo/c++.png', url: 'https://isocpp.org/' },
    { src: 'logo/css.png', url: 'https://developer.mozilla.org/fr/docs/Web/CSS' },
    { src: 'logo/excel_.png', url: 'https://www.microsoft.com/fr-fr/microsoft-365/excel' },
    { src: 'logo/HTML5_logo_and_wordmark.svg.png', url: 'https://developer.mozilla.org/fr/docs/Web/HTML' },
    { src: 'logo/java.png', url: 'https://www.java.com/fr/' },
    { src: 'logo/js.png', url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript' },
    { src: 'logo/kathara.png', url: 'https://www.kathara.org/' },
    { src: 'logo/Kotlin_Icon.png', url: 'https://kotlinlang.org/' },
    { src: 'logo/php.png', url: 'https://www.php.net/' },
    { src: 'logo/phtoshop.png', url: 'https://www.adobe.com/fr/products/photoshop.html' },
    { src: 'logo/powerpoint.png', url: 'https://www.microsoft.com/fr-fr/microsoft-365/powerpoint' },
    { src: 'logo/python_logo_icon_168886.webp', url: 'https://www.python.org/' },
    { src: 'logo/rust.png', url: 'https://www.rust-lang.org/' },
    { src: 'logo/sql.png', url: 'https://en.wikipedia.org/wiki/SQL' },
    { src: 'logo/word.png', url: 'https://www.microsoft.com/fr-fr/microsoft-365/word' },
];

const container = document.body;
let index = 0;

function createLogo() {
    const logoItem = logoData[index % logoData.length];
    
  
    const link = document.createElement('a');
    link.href = logoItem.url;
    link.target = '_blank';
    link.classList.add('logo-link');
    

    const img = document.createElement('img');
    img.src = logoItem.src;
    img.classList.add('logo');
    img.style.left = Math.random() * (window.innerWidth - 60) + 'px';
    img.style.top = '-100px';
    img.alt = `Logo ${logoItem.src.split('/').pop().split('.')[0]}`;
    
   
    link.appendChild(img);
    container.appendChild(link);

    const fallDuration = 3 + Math.random() * 3;
    const landingPosition = window.innerHeight * 0.9 - 60;
    
    img.style.transition = `top ${fallDuration}s cubic-bezier(0.33, 0, 0.66, 1)`;
    
    setTimeout(() => {
        img.style.top = landingPosition + 'px';
    }, 10);

    setTimeout(() => {
        img.style.transition = 'opacity 1.5s ease-out';
        img.style.opacity = '0';
        link.style.pointerEvents = 'none'; 
        
        setTimeout(() => {
            if (link.parentNode) {
                link.parentNode.removeChild(link);
            }
        }, 1500);
    }, fallDuration * 1000 + 300);

    index++;
}

setInterval(createLogo, 200);

window.addEventListener('resize', () => {
    const logoLinks = document.querySelectorAll('.logo-link');
    const landingPosition = window.innerHeight * 0.9 - 60;
    
    logoLinks.forEach(link => {
        const img = link.querySelector('img');
        if (img && parseFloat(img.style.top) > 0 && img.style.opacity !== '0') {
            const currentTop = parseFloat(img.style.top);
            if (currentTop > window.innerHeight * 0.7) {
                img.style.top = landingPosition + 'px';
            }
        }
    });
});