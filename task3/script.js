const btn = document.getElementById('button');
const ColorDisplay = document.getElementById('colorcode');

btn.addEventListener('click', () => {
    const pastel = getRandomPastelColor();
    document.body.style.backgroundColor = pastel;
    ColorDisplay.textContent = "Current color: " + pastel;
});

function getRandomPastelColor() {
    const hue = Math.floor(Math.random() * 360); // Fixed 'Math'
    return `hsl(${hue}, 90%, 90%)`;
}