(function generateDots (){
    const maxSize = 50;
    const dotCount = 100;
    const maxSpeed = 5;
    const borderRadius = 50;
    const opacity = .05;
    const containerClass = 'main';
    const container = document.getElementsByClassName(containerClass)[0];
    container.style.position = 'relative';

    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        const size = getRandomInt(1, maxSize);
        const speed = getRandomInt(1, maxSpeed);
        const randomLeft = getRandomInt(1, 99);
        const randomTop = getRandomInt(1, 99);
        dot.classList.add('rellax');
        dot.classList.add('dot');
        dot.style.backgroundColor = getRandomColor();
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.position = 'absolute';
        dot.style.top = `${randomTop}%`;
        dot.style.left = `${randomLeft}%`;
        dot.style.opacity = opacity;
        dot.style.borderRadius = `${borderRadius}%`;
        dot.dataset.rellaxSpeed = speed;
        container.appendChild(dot);
    }



    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
})();