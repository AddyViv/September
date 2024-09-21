document.getElementById('generate-flower').addEventListener('click', createFlower);

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');

    // Crear pétalos
    for (let i = 0; i < 8; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        flower.appendChild(petal);
    }

    // Centro de la flor
    const center = document.createElement('div');
    center.classList.add('center');
    flower.appendChild(center);

    // Posición aleatoria
    const container = document.getElementById('flower-container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const randomX = Math.random() * (containerWidth - 50);
    const randomY = Math.random() * (containerHeight - 50);

    flower.style.left = `${randomX}px`;
    flower.style.top = `${randomY}px`;

    container.appendChild(flower);

    // Eliminar la flor después de 5 segundos
    setTimeout(() => {
        flower.remove();
    }, 5000);
}
