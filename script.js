document.getElementById('image').addEventListener('mousemove', function(e) {
    const image = e.target;
    const width = image.clientWidth;
    const height = image.clientHeight;
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    
    const rotateX = ((mouseY / height) - 0.5) * 30;
    const rotateY = ((mouseX / width) - 0.5) * -30;

    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

document.getElementById('image').addEventListener('mouseleave', function(e) {
    e.target.style.transform = 'rotateX(0) rotateY(0)';
});